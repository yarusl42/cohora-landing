"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { trackLandingEvent } from "@/components/MixpanelTracker";
import { SignupLink } from "@/components/SignupLink";

type PricingCardsProps = {
  showFuturePlans: boolean;
};

const plans = [
  {
    label: "Start here",
    name: "Free Tutor",
    audience: "For independent tutors starting out.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    capacity: "Up to 10 student places",
    features: [
      "Core CRM and student management",
      "Lessons, homework, and leads",
      "Payment requests and income tracking",
    ],
    cta: "Start with Free Tutor",
    primary: true,
    visibleNow: true,
  },
  {
    label: "More capacity",
    name: "Tutor Pro",
    audience: "For an established solo tutor.",
    monthlyPrice: 12,
    yearlyPrice: 120,
    capacity: "Up to 50 student places",
    features: [
      "Everything in Free Tutor",
      "More room for your students",
      "The same focused solo-tutor experience",
    ],
    cta: "Choose Tutor Pro",
    primary: false,
    visibleNow: true,
  },
  {
    label: "For growing teams",
    name: "Studio",
    audience: "For a small teaching team.",
    monthlyPrice: 39,
    yearlyPrice: 390,
    capacity: "Up to 150 student places · 5 staff",
    features: [
      "Multi-staff workflows",
      "Payments and scheduling",
      "Team permissions",
    ],
    cta: "Choose Studio",
    primary: false,
    visibleNow: false,
  },
  {
    label: "For established schools",
    name: "Academy",
    audience: "For a growing school operation.",
    monthlyPrice: 99,
    yearlyPrice: 990,
    capacity: "Up to 500 student places · 25 staff",
    features: [
      "Advanced organization structure",
      "Analytics and financial management",
      "Multi-team operations",
    ],
    cta: "Choose Academy",
    primary: false,
    visibleNow: false,
  },
  {
    label: "Tailored for you",
    name: "Enterprise",
    audience: "For organizations that need a tailored rollout.",
    monthlyPrice: null,
    yearlyPrice: null,
    capacity: "Custom limits and onboarding",
    features: [
      "All Cohora capabilities",
      "Custom integrations",
      "Dedicated onboarding",
    ],
    cta: "Talk to us",
    primary: false,
    visibleNow: false,
    enterprise: true,
  },
];

export function PricingCards({ showFuturePlans }: PricingCardsProps) {
  const [interval, setInterval] = useState<"monthly" | "yearly">("yearly");
  const visiblePlans = plans.filter(
    (plan) => plan.visibleNow || showFuturePlans,
  );

  return (
    <>
      <PricingViewedTracker />
      <div className="pricing-interval" aria-label="Billing interval">
        <button
          type="button"
          className={interval === "monthly" ? "active" : ""}
          onClick={() => {
            setInterval("monthly");
            trackLandingEvent("landing_billing_interval_selected", {
              interval: "monthly",
            });
          }}
        >
          Monthly
        </button>
        <button
          type="button"
          className={interval === "yearly" ? "active" : ""}
          onClick={() => {
            setInterval("yearly");
            trackLandingEvent("landing_billing_interval_selected", {
              interval: "yearly",
            });
          }}
        >
          Yearly
        </button>
      </div>
      <div className="pricing-grid">
        {visiblePlans.map((plan) => {
          const billedAmount =
            interval === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
          const effectiveMonthlyPrice =
            interval === "yearly" && billedAmount !== null
              ? billedAmount / 12
              : billedAmount;
          const price =
            effectiveMonthlyPrice === null
              ? "Custom"
              : `$${Number.isInteger(effectiveMonthlyPrice) ? effectiveMonthlyPrice : effectiveMonthlyPrice.toFixed(2)}`;
          return (
            <article
              className={`price-card${plan.primary ? " price-card-primary" : ""}`}
              key={plan.name}
            >
              <p className="plan-label">{plan.label}</p>
              <h3>{plan.name}</h3>
              <p className="plan-for">{plan.audience}</p>
              <p className="price">
                <strong>{price}</strong>
                {effectiveMonthlyPrice !== null ? <span>/month</span> : null}
              </p>
              {interval === "yearly" &&
              billedAmount !== null &&
              billedAmount > 0 ? (
                <p className="annual-billing-note">
                  ${billedAmount} billed yearly
                </p>
              ) : null}
              <p className="capacity">{plan.capacity}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} /> {feature}
                  </li>
                ))}
              </ul>
              {plan.enterprise ? (
                <a
                  className={`button${plan.primary ? "" : " button-outline"}`}
                  href="mailto:sales@cohora.org"
                  onClick={() => {
                    trackLandingEvent("sales_contacted", {
                      plan: plan.name,
                      interval,
                    });
                  }}
                >
                  {plan.cta}
                </a>
              ) : (
                <SignupLink
                  className={`button${plan.primary ? "" : " button-outline"}`}
                  analyticsSource="pricing_plan_card"
                  analyticsProperties={{ plan: plan.name, interval }}
                  onClick={() => {
                    trackLandingEvent("landing_plan_selected", {
                      plan: plan.name,
                      interval,
                    });
                  }}
                >
                  {plan.cta} <ArrowRight size={17} />
                </SignupLink>
              )}
            </article>
          );
        })}
      </div>
    </>
  );
}

function PricingViewedTracker() {
  useEffect(() => {
    trackLandingEvent("landing_pricing_viewed");
  }, []);
  return null;
}
