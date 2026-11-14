"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  consentGrantedEvent,
  getConsentChoice,
  mixpanelDistinctIdStorageKey,
} from "@/config/consent";
import { trackLandingGoogleTagManagerEvent } from "@/components/GoogleTagManager";

const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
const apiHost = "https://api-eu.mixpanel.com";
const isMockAnalytics = process.env.NODE_ENV !== "production";

type MockLandingEvent = {
  event: string;
  properties: Record<string, string>;
  timestamp: string;
};

type AnalyticsDestinations = {
  mixpanel?: boolean;
  gtm?: boolean;
};

type MixpanelResponse = {
  error?: string;
  status: number;
};

const gtmEventNames = new Set([
  "landing_viewed",
  "landing_signup_clicked",
  "landing_pricing_viewed",
  "landing_billing_interval_selected",
  "landing_plan_selected",
  "sales_contacted",
  "signup_form_viewed",
  "signup_option_selected",
  "signup_field_started",
  "signup_validation_failed",
  "signup_form_submitted",
  "signup_request_failed",
  "signup_completed",
  "signup_email_verification_required",
  "email_verified",
  "plans_viewed",
  "plan_checkout_started",
  "plan_checkout_completed",
  "checkout_failed",
  "subscription_cancellation_started",
  "group_created",
  "course_created",
  "lesson_created",
  "lead_created",
  "billing_portal_opened",
  "landing_scroll_depth_reached",
  "landing_login_clicked",
  "landing_section_viewed",
  "landing_navigation_clicked",
  "landing_faq_opened",
]);

declare global {
  interface Window {
    __COHORA_MIXPANEL_EVENTS__?: MockLandingEvent[];
  }
}

const recordMockEvent = (event: string, properties: Record<string, string>) => {
  console.info("[Mixpanel]", { event, properties });
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
  destinations: AnalyticsDestinations = {},
) => {
  const mixpanel = destinations.mixpanel ?? true;
  const gtm = destinations.gtm ?? gtmEventNames.has(event);
  if (gtm) {
    trackLandingGoogleTagManagerEvent(event, properties);
  }
  if (!mixpanel || getConsentChoice() !== "accepted") {
    return;
  }
  if (isMockAnalytics) {
    recordMockEvent(event, properties);
    return;
  }
  if (!token) {
    return;
  }
  void fetch(`${apiHost}/track?verbose=1`, {
    method: "POST",
    body: new URLSearchParams({
      data: JSON.stringify([
        {
          event,
          properties: {
            token,
            distinct_id: getDistinctId(),
            time: Math.floor(Date.now() / 1000),
            ...properties,
          },
        },
      ]),
    }),
    keepalive: true,
  })
    .then(async (response) => {
      const result = (await response.json()) as MixpanelResponse;
      if (!response.ok || result.status !== 1) {
        console.error("[Mixpanel] event delivery failed", {
          event,
          status: response.status,
          response: result,
        });
      }
    })
    .catch((error: unknown) => {
      console.error("[Mixpanel] event delivery failed", { event, error });
    });
};

export default function MixpanelTracker() {
  const pathname = usePathname();

  useEffect(() => {
    console.info("[Mixpanel] token", token);
    if (isMockAnalytics) {
      console.info("[Mixpanel]");
    }

    const trackPageView = () =>
      trackLandingEvent("landing_viewed", { path: pathname });

    trackPageView();
    window.addEventListener(consentGrantedEvent, trackPageView);
    return () => window.removeEventListener(consentGrantedEvent, trackPageView);
  }, [pathname]);

  return null;
}
