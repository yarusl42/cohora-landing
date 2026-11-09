"use client";

import { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import { usePathname } from "next/navigation";

const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
let initialized = false;

const initialize = () => {
  if (initialized || !token) {
    return;
  }
  mixpanel.init(token, {
    autocapture: false,
    track_pageview: false,
    persistence: "localStorage",
  });
  initialized = true;
};

export const trackLandingEvent = (
  event: string,
  properties: Record<string, string> = {},
) => {
  initialize();
  if (initialized) {
    mixpanel.track(event, properties);
  }
};

export default function MixpanelTracker() {
  const pathname = usePathname();

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    trackLandingEvent("Landing page viewed", { path: pathname });
  }, [pathname]);

  return null;
}
