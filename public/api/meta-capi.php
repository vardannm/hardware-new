<?php
/**
 * Meta Conversions API bridge.
 *
 * Receives an event from the browser, adds what only the server can see (IP
 * address, user agent), normalises and SHA-256 hashes the personal data, and
 * forwards it to Meta.
 *
 * event_name and event_id are passed through untouched. That pair is what lets
 * Meta deduplicate this against the copy the Pixel already sent from the
 * browser, so one action is counted once.
 *
 * DEPLOYMENT: this file lives in public/api/ in the repo and is copied to
 * out/api/ by `next build`, so it uploads with the rest of the site. The only
 * manual step is putting the access token on the server (see below).
 *
 * Requires PHP 7.0+. Uses curl when available, with a stream fallback.
 */

/* ------------------------------------------------------------------ *
 * Configuration
 * ------------------------------------------------------------------ */

$PIXEL_ID      = '3150437118680744';
$GRAPH_VERSION = 'v23.0';

/* Only the events this site sends. Anything else is rejected, so the endpoint
   cannot be used by outsiders to push junk into the dataset. Add new names
   here when you add new events. */
$ALLOWED_EVENTS = array('PageView', 'Lead');

$ALLOWED_ORIGINS = array(
    'https://www.hardwarehouses.com',
    'https://hardwarehouses.com',
);

/* The access token is looked up in this order:
 *   1. environment variable META_CAPI_ACCESS_TOKEN
 *   2. a PHP file ONE LEVEL ABOVE the web root that returns it:
 *          <?php return 'EAA...the token...';
 *      Above the web root means it can never be requested over HTTP. Using a
 *      .php file means that even if it were inside the web root it would be
 *      executed rather than served as text.
 * Never put the token in this file - this file is in git. */
$TOKEN_FILE = __DIR__ . '/../../meta-capi-token.php';

/* Optional, for Events Manager > Test events. Remove once testing is done:
   events carrying a test code do not count toward reporting. */
$TEST_EVENT_CODE = getenv('META_CAPI_TEST_EVENT_CODE');

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */

function meta_lower($value)
{
    return function_exists('mb_strtolower')
        ? mb_strtolower($value, 'UTF-8')
        : strtolower($value);
}

/**
 * Normalise a value per Meta's rules, then SHA-256 it.
 * Returns null for empty input so the key is omitted rather than sent as the
 * hash of an empty string, which would never match anyone.
 */
function meta_hash($value, $rule)
{
    if (!is_string($value) && !is_numeric($value)) {
        return null;
    }
    $value = trim((string) $value);
    if ($value === '') {
        return null;
    }

    if ($rule === 'email') {
        $value = meta_lower($value);
    } elseif ($rule === 'phone') {
        // Digits only, leading zeros stripped; the country code must be included.
        $value = ltrim(preg_replace('/[^0-9]/', '', $value), '0');
    } elseif ($rule === 'name') {
        /* Keep letters from ANY script. A latin-only filter would reduce an
           Armenian name to an empty string and drop the match entirely. */
        $value = preg_replace('/[^\p{L}\p{M}]/u', '', meta_lower($value));
    }

    return $value === '' ? null : hash('sha256', $value);
}

function meta_client_ip()
{
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $parts = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        return trim($parts[0]);
    }
    if (!empty($_SERVER['HTTP_X_REAL_IP'])) {
        return $_SERVER['HTTP_X_REAL_IP'];
    }
    return isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : null;
}

function meta_respond($status, $body)
{
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($body);
    exit;
}

/** POST JSON to Meta. Returns array(httpStatus, decodedBody). */
function meta_post($url, $json, $token)
{
    $headers = array(
        'Content-Type: application/json',
        // Bearer header, never a query string, so the token cannot leak into
        // server access logs.
        'Authorization: Bearer ' . $token,
    );

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, array(
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => $json,
            CURLOPT_HTTPHEADER     => $headers,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 10,
        ));
        $raw    = curl_exec($ch);
        $status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $err    = curl_error($ch);
        curl_close($ch);

        if ($raw === false) {
            error_log('[meta-capi] curl failed: ' . $err);
            return array(0, null);
        }
        return array($status, json_decode($raw, true));
    }

    // Fallback for hosts without curl.
    $context = stream_context_create(array('http' => array(
        'method'        => 'POST',
        'header'        => implode("\r\n", $headers),
        'content'       => $json,
        'timeout'       => 10,
        'ignore_errors' => true,
    )));
    $raw    = @file_get_contents($url, false, $context);
    $status = 0;
    if (isset($http_response_header) && isset($http_response_header[0])) {
        if (preg_match('/\s(\d{3})\s/', $http_response_header[0], $m)) {
            $status = (int) $m[1];
        }
    }
    return array($status, $raw === false ? null : json_decode($raw, true));
}

/* ------------------------------------------------------------------ *
 * Request handling
 * ------------------------------------------------------------------ */

if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    meta_respond(405, array('error' => 'method_not_allowed'));
}

if (!empty($_SERVER['HTTP_ORIGIN'])
    && !in_array($_SERVER['HTTP_ORIGIN'], $ALLOWED_ORIGINS, true)) {
    meta_respond(403, array('error' => 'origin_not_allowed'));
}

/* --- access token --- */
$accessToken = getenv('META_CAPI_ACCESS_TOKEN');
if (!$accessToken && is_readable($TOKEN_FILE)) {
    $fromFile = include $TOKEN_FILE;
    if (is_array($fromFile)) {
        $accessToken = isset($fromFile['token']) ? $fromFile['token'] : null;
        if (empty($TEST_EVENT_CODE) && isset($fromFile['test_event_code'])) {
            $TEST_EVENT_CODE = $fromFile['test_event_code'];
        }
    } elseif (is_string($fromFile)) {
        $accessToken = $fromFile;
    }
}
if (!$accessToken) {
    error_log('[meta-capi] No access token: set META_CAPI_ACCESS_TOKEN or create ' . $TOKEN_FILE);
    // 204 so a server misconfiguration never surfaces as an error to visitors.
    http_response_code(204);
    exit;
}

/* --- body --- */
$body = json_decode(file_get_contents('php://input'), true);
if (!is_array($body)) {
    meta_respond(400, array('error' => 'invalid_body'));
}

$eventName = isset($body['event_name']) ? (string) $body['event_name'] : '';
$eventId   = isset($body['event_id']) ? (string) $body['event_id'] : '';

if (!in_array($eventName, $ALLOWED_EVENTS, true)) {
    meta_respond(400, array('error' => 'event_not_allowed'));
}
if ($eventId === '') {
    // Without it this copy could not be deduplicated against the browser copy,
    // so the action would be counted twice.
    meta_respond(400, array('error' => 'missing_event_id'));
}

/* Trust the browser clock only when it is plausible. Meta rejects events dated
   in the future, so a visitor with a wrong clock would otherwise lose every
   event they generate. */
$now       = time();
$claimed   = isset($body['event_time']) ? (int) $body['event_time'] : 0;
$eventTime = ($claimed > 0 && abs($now - $claimed) <= 300) ? $claimed : $now;

/* --- matching data --- */
$raw = isset($body['user_data']) && is_array($body['user_data'])
    ? $body['user_data']
    : array();

$userData = array(
    'em' => meta_hash(isset($raw['email']) ? $raw['email'] : null, 'email'),
    'ph' => meta_hash(isset($raw['phone']) ? $raw['phone'] : null, 'phone'),
    'fn' => meta_hash(isset($raw['firstName']) ? $raw['firstName'] : null, 'name'),
    'ln' => meta_hash(isset($raw['lastName']) ? $raw['lastName'] : null, 'name'),
    // Meta expects these unhashed.
    'fbp'               => !empty($raw['fbp']) ? (string) $raw['fbp'] : null,
    'fbc'               => !empty($raw['fbc']) ? (string) $raw['fbc'] : null,
    'client_ip_address' => meta_client_ip(),
    'client_user_agent' => isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : null,
);

// Drop empty keys so nothing is sent as a hash of "".
foreach ($userData as $key => $value) {
    if ($value === null || $value === '') {
        unset($userData[$key]);
    }
}

$event = array(
    'event_name'    => $eventName,
    'event_id'      => $eventId,
    'event_time'    => $eventTime,
    'action_source' => 'website',
    'user_data'     => $userData,
);
if (!empty($body['event_source_url'])) {
    $event['event_source_url'] = (string) $body['event_source_url'];
}
if (!empty($body['custom_data']) && is_array($body['custom_data'])) {
    $event['custom_data'] = $body['custom_data'];
}

$payload = array('data' => array($event));
if (!empty($TEST_EVENT_CODE)) {
    $payload['test_event_code'] = $TEST_EVENT_CODE;
}

/* --- send --- */
$url = 'https://graph.facebook.com/' . $GRAPH_VERSION . '/' . $PIXEL_ID . '/events';
list($status, $result) = meta_post($url, json_encode($payload), $accessToken);

if ($status === 200) {
    meta_respond(200, array('ok' => true, 'event_id' => $eventId));
}

/* Log Meta's message only. The request body held personal data and the
   Authorization header held the token; neither is ever written to the log. */
$message = isset($result['error']['message']) ? $result['error']['message'] : 'no response';
error_log('[meta-capi] rejected (' . $status . ') ' . $eventName . ': ' . $message);
meta_respond(502, array('error' => 'upstream_rejected'));
