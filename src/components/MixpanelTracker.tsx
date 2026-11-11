"use client";

import { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import { usePathname } from "next/navigation";

const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
const isMockAnalytics = process.env.NODE_ENV !== "production";
let initialized = false;

type MockLandingEvent = {
  event: string;
  properties: Record<string, string>;
  timestamp: string;
};

declare global {
  interface Window {
    __COHORA_MIXPANEL_EVENTS__?: MockLandingEvent[];
  }
}

const recordMockEvent = (event: string, properties: Record<string, string>) => {
  window.__COHORA_MIXPANEL_EVENTS__ ??= [];
  window.__COHORA_MIXPANEL_EVENTS__.push({
    event,
    properties,
    timestamp: new Date().toISOString(),
  });
};

const initialize = () => {
  if (initialized || (!isMockAnalytics && !token)) {
    return;
  }
  if (isMockAnalytics) {
    initialized = true;
    return;
  }
  if (!token) {
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
    if (isMockAnalytics) {
      recordMockEvent(event, properties);
      return;
    }
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
