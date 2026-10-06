"use client";

/**
 * Sends PageView with an event_id so the server copy can be deduplicated
 * against it.
 *
 * The base snippet in layout.jsx deliberately does not call
 * fbq("track", "PageView") itself: that call carries no event_id, so the
 * server copy could not be matched to it and every pageview would count twice.
 *
 * The Pixel re-fires PageView by itself when the URL changes in a single-page
 * app, so this only needs to handle the initial load. Firing again on every
 * route change here would duplicate the Pixel's own automatic one.
 */

import { useEffect } from "react";
import { trackMetaEvent } from "@/lib/meta";

export default function MetaPageView() {
  useEffect(() => {
    trackMetaEvent("PageView");
  }, []);

  return null;
}
