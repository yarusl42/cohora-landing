"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  consentGrantedEvent,
  getConsentChoice,
  mixpanelDistinctIdStorageKey,
} from "@/config/consent";

const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
const apiHost = "https://api-eu.mixpanel.com";
const isMockAnalytics = process.env.NODE_ENV !== "production";

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

const createDistinctId = () =>
  typeof crypto?.randomUUID === "function"
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

const getDistinctId = () => {
  const stored = localStorage.getItem(mixpanelDistinctIdStorageKey);
  if (stored) {
    return stored;
  }
  const distinctId = createDistinctId();
  localStorage.setItem(mixpanelDistinctIdStorageKey, distinctId);
  return distinctId;
};

export const trackLandingEvent = (
  event: string,
  properties: Record<string, string> = {},
) => {
  if (getConsentChoice() !== "accepted") {
    return;
  }
  if (isMockAnalytics) {
    recordMockEvent(event, properties);
    return;
  }
  if (!token) {
    return;
  }
  void fetch(`${apiHost}/track`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify([
      {
        event,
        properties: {
          token,
          distinct_id: getDistinctId(),
          time: Date.now(),
          ...properties,
        },
      },
    ]),
    keepalive: true,
  }).catch(() => {});
};

export default function MixpanelTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const trackPageView = () =>
      trackLandingEvent("Landing page viewed", { path: pathname });

    trackPageView();
    window.addEventListener(consentGrantedEvent, trackPageView);
    return () => window.removeEventListener(consentGrantedEvent, trackPageView);
  }, [pathname]);

  return null;
}
