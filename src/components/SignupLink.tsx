"use client";

import { useEffect, useState, type ComponentPropsWithoutRef } from "react";
import { signupUrl } from "@/config/dashboard";

const campaignParameters = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "utm_source_platform",
  "utm_creative_format",
  "utm_marketing_tactic",
]);

const getCampaignSignupUrl = () => {
  const url = new URL(signupUrl);
  const currentParams = new URLSearchParams(window.location.search);

  currentParams.forEach((value, key) => {
    const normalizedKey = key.toLowerCase();
    if (campaignParameters.has(normalizedKey) && value.trim()) {
      url.searchParams.set(normalizedKey, value.trim().slice(0, 500));
    }
  });

  return url.toString();
};

export function SignupLink(props: Omit<ComponentPropsWithoutRef<"a">, "href">) {
  const [href, setHref] = useState(signupUrl);

  useEffect(() => {
    setHref(getCampaignSignupUrl());
  }, []);

  return <a {...props} href={href} />;
}
