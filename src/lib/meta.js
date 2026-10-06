/**
 * Every Meta event on the site goes through here.
 *
 * One call mints ONE event_id and sends the event twice under that same id and
 * the same event_name: once from the browser via fbq, once from the server via
 * the Conversions API. Meta collapses the pair into a single event, so the
 * action is counted once - and still counted if an ad blocker kills the
 * browser copy. A fresh id per call means two genuine actions never merge.
 */

const CAPI_ENDPOINT = "/api/meta-capi.php";

function readCookie(name) {
  if (typeof document === "undefined") return null;
  for (const part of document.cookie.split(";")) {
    const [key, ...rest] = part.trim().split("=");
    if (key === name) return decodeURIComponent(rest.join("="));
  }
  return null;
}

/** The click id, falling back to the fbclid in the URL before fbevents.js
 *  has had a chance to write the cookie. */
function getFbc() {
  const cookie = readCookie("_fbc");
  if (cookie) return cookie;
  const fbclid = new URLSearchParams(window.location.search).get("fbclid");
  return fbclid ? `fb.1.${Date.now()}.${fbclid}` : null;
}

function createEventId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(16)}-${Math.random().toString(16).slice(2, 14)}`;
}

/**
 * @param {string} eventName            "PageView", "Lead", ...
 * @param {object} [options]
 * @param {object} [options.customData] Meta custom_data
 * @param {object} [options.userData]   Raw matching data: { email, phone,
 *                                      firstName, lastName }. Hashed on the
 *                                      server so normalisation stays consistent
 *                                      and raw values never leave our hosts.
 */
export function trackMetaEvent(eventName, options = {}) {
  if (typeof window === "undefined") return null;

  const { customData = {}, userData = {} } = options;
  const eventId = createEventId();

  // Browser copy.
  if (typeof window.fbq === "function") {
    window.fbq("track", eventName, customData, { eventID: eventId });
  }

  // Server copy - same event_name, same event_id.
  try {
    fetch(CAPI_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: eventName,
        event_id: eventId,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        custom_data: customData,
        user_data: {
          ...userData,
          fbp: readCookie("_fbp"),
          fbc: getFbc(),
        },
      }),
      // Survives the navigation a mailto: link triggers right afterwards.
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* never let tracking break the page */
  }

  return eventId;
}
