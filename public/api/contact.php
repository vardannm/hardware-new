<?php
// Deployed with the static export. Requires PHP 7+ and a configured mail service.
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function contact_respond($status, $body)
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    contact_respond(405, array('error' => 'Please submit the contact form.'));
}

$origins = array('https://hardwarehouses.com', 'https://www.hardwarehouses.com');
if (!empty($_SERVER['HTTP_ORIGIN']) && !in_array($_SERVER['HTTP_ORIGIN'], $origins, true)) {
    contact_respond(403, array('error' => 'This request is not allowed.'));
}

if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== 0) {
    contact_respond(415, array('error' => 'Please submit the contact form.'));
}

$raw = file_get_contents('php://input', false, null, 0, 65537);
if ($raw === false || strlen($raw) > 65536) {
    contact_respond(413, array('error' => 'Your message is too long.'));
}
$data = json_decode($raw, true);
if (!is_array($data)) {
    contact_respond(400, array('error' => 'Invalid form submission.'));
}

foreach (array('name', 'email', 'message') as $field) {
    if (!isset($data[$field]) || !is_string($data[$field])) {
        contact_respond(422, array('error' => 'Please enter your name, email and message.'));
    }
}
$name = trim($data['name']);
$email = trim($data['email']);
$message = trim($data['message']);
// Honeypot: real visitors leave this hidden field empty.
if (!empty($data['website'])) {
    contact_respond(200, array('success' => true));
}
if ($name === '' || strlen($name) > 600 || preg_match('/[\r\n\x00]/', $name)
    || strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || preg_match('/[\r\n\x00]/', $email)
    || $message === '' || strlen($message) > 40000 || strpos($message, "\0") !== false) {
    contact_respond(422, array('error' => 'Please enter a valid name, email and message.'));
}

// Limit each IP to five attempts per ten minutes, shared across PHP workers.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$limitPath = sys_get_temp_dir() . '/hardware-contact-' . hash('sha256', $ip) . '.json';
$limit = @fopen($limitPath, 'c+');
if (!$limit || !flock($limit, LOCK_EX)) {
    contact_respond(503, array('error' => 'Sending is temporarily unavailable. Please try again later.'));
}
$attempts = json_decode(stream_get_contents($limit), true);
$attempts = is_array($attempts) ? array_values(array_filter($attempts, function ($time) {
    return is_int($time) && $time > time() - 600;
})) : array();
if (count($attempts) >= 5) {
    flock($limit, LOCK_UN);
    fclose($limit);
    header('Retry-After: 600');
    contact_respond(429, array('error' => 'Too many messages. Please try again in 10 minutes.'));
}
$attempts[] = time();
rewind($limit);
ftruncate($limit, 0);
fwrite($limit, json_encode($attempts));
fflush($limit);
flock($limit, LOCK_UN);
fclose($limit);

// Sender and recipient are fixed server-side; visitors can only set Reply-To.
$headers = implode("\r\n", array(
    'From: Hardware Design House <info@hardwarehouses.com>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
));
$body = "Name: " . $name . "\nEmail: " . $email . "\n\nMessage:\n" . $message;
$sent = function_exists('mail') && @mail(
    'info@hardwarehouses.com',
    'Contact request from website',
    chunk_split(base64_encode($body)),
    $headers
);
if (!$sent) {
    error_log('[contact] Hosting mail service did not accept the message.');
    contact_respond(503, array('error' => 'We could not send your message. Please try again or email info@hardwarehouses.com.'));
}
contact_respond(200, array('success' => true));
