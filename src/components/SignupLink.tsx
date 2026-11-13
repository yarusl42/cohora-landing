"use client";

import type { ComponentPropsWithoutRef } from "react";
import { signupUrl } from "@/config/dashboard";
import { captureSignupAttribution } from "@/config/attribution";
import { trackLandingEvent } from "@/components/MixpanelTracker";

type SignupLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  analyticsSource?: string;
  analyticsProperties?: Record<string, string>;
};

export function SignupLink(props: SignupLinkProps) {
  const { analyticsProperties, analyticsSource, onClick, ...anchorProps } =
    props;
  return (
    <a
      {...anchorProps}
      href={signupUrl}
      onClick={(event) => {
        captureSignupAttribution();
        trackLandingEvent("landing_signup_clicked", {
          source: analyticsSource || "unspecified",
          ...analyticsProperties,
        });
        onClick?.(event);
      }}
    />
  );
}
