"use client";

import { useEffect } from "react";
import { captureSignupAttribution } from "@/config/attribution";
import { consentGrantedEvent } from "@/config/consent";

export default function SignupAttributionTracker() {
  useEffect(() => {
    captureSignupAttribution();
    window.addEventListener(consentGrantedEvent, captureSignupAttribution);
    return () =>
      window.removeEventListener(consentGrantedEvent, captureSignupAttribution);
  }, []);

  return null;
}
