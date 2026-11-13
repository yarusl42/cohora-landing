import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { PricingCards } from "@/components/PricingCards";
import { SignupLink } from "@/components/SignupLink";
import { SiteHeader } from "@/components/SiteHeader";
import { TrackedLandingLink } from "@/components/TrackedLandingLink";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple monthly pricing for independent tutors using Cohora.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  const showFuturePlans = process.env.NODE_ENV === "development";

  return (
    <main>
      <SiteHeader page="pricing" />

      <section className="pricing-page-hero container">
        <p className="eyebrow">Simple pricing for solo tutors</p>
        <h1>Start where you are. Keep teaching.</h1>
        <p>
          Choose the capacity that fits your practice today. Both plans keep the
          work clear and focused.
        </p>
      </section>

      <section className="pricing-page-plans container" aria-label="Plans">
        <div className="pricing-page-grid">
          <PricingCards showFuturePlans={showFuturePlans} />
        </div>
        <p className="pricing-note">
          Tutor Pro is billed monthly in advance. Cancel any time before your
          next renewal; you&apos;ll retain access through your current paid
          billing period. See our <a href="/refunds">Refund Policy</a>.
        </p>
        <p className="enterprise-line">
          Growing beyond a solo practice?{" "}
          <TrackedLandingLink
            eventName="sales_contacted"
            eventProperties={{ source: "pricing_page" }}
            href="mailto:sales@cohora.org"
          >
            Talk to us.
          </TrackedLandingLink>
        </p>
      </section>

      <section className="final-cta" id="start">
        <div className="container">
          <h2>
            Give your teaching <em>more room to breathe.</em>
          </h2>
          <p>Start with a workspace that understands independent tutoring.</p>
          <SignupLink className="button light-button" analyticsSource="pricing_final_cta">
            <span>Start with the free plan</span> <ArrowRight size={17} />
          </SignupLink>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-bottom pricing-footer-bottom">
          <p>
            © {new Date().getFullYear()} Cohora. Made for the work that matters.
          </p>
          <div>
            <a href="/pricing">Pricing</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/refunds">Refunds</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
