"use client";

import { useEffect } from "react";

const containerId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID?.trim();
const scriptId = "cohora-google-tag-manager";

type GoogleTagManagerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

export const trackLandingGoogleTagManagerEvent = (
  event: string,
  properties: Record<string, string> = {},
) => {
  if (process.env.NODE_ENV !== "production") {
    console.info("[GTM event]", { event, properties });
    return;
  }

  const gtmWindow = window as GoogleTagManagerWindow;
  gtmWindow.dataLayer ??= [];
  gtmWindow.dataLayer.push({ ...properties, event });
};

const loadGoogleTagManager = () => {
  if (!containerId || document.getElementById(scriptId)) return;

  const gtmWindow = window as GoogleTagManagerWindow;
  gtmWindow.dataLayer ??= [];
  gtmWindow.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.id = scriptId;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
  document.head.append(script);
};

export default function GoogleTagManager() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[GTM]", { containerId });
      return;
    }
    loadGoogleTagManager();
  }, []);

  return null;
}
