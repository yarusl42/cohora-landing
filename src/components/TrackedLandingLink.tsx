"use client";

import type { ComponentPropsWithoutRef } from "react";
import { trackLandingEvent } from "@/components/MixpanelTracker";

type TrackedLandingLinkProps = ComponentPropsWithoutRef<"a"> & {
  eventName: string;
  eventProperties?: Record<string, string>;
};

export function TrackedLandingLink({
  eventName,
  eventProperties,
  onClick,
  ...props
}: TrackedLandingLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackLandingEvent(eventName, eventProperties);
        onClick?.(event);
      }}
    />
  );
}
