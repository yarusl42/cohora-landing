import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { PricingCards } from "@/components/PricingCards";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple monthly pricing for independent tutors using Cohora.",
  alternates: { canonical: "/pricing" },
};

const dashboardUrl = "https://app.cohora.org";
const signInUrl = `${dashboardUrl}/login`;
const signupUrl = `${dashboardUrl}/signup/owner`;

export default function PricingPage() {
  const showFuturePlans = process.env.NODE_ENV === "development";

  return (
    <main>
      <header className="site-header container">
        <a href="/" className="brand" aria-label="Cohora home">
          <img src="/logo.png" alt="" />
          <span>Cohora</span>
        </a>
        <div className="header-actions pricing-header-actions">
          <a className="sign-in" href={signInUrl}>
            Sign in
          </a>
          <a className="button button-small" href={signupUrl}>
            Start with the free plan <ArrowRight size={15} />
          </a>
        </div>
      </header>

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
          <PricingCards
            signupUrl={signupUrl}
            showFuturePlans={showFuturePlans}
          />
        </div>
        <p className="pricing-note">
          Tutor Pro is billed monthly in advance. Cancel any time before your
          next renewal; you&apos;ll retain access through your current paid
          billing period. See our <a href="/refunds">Refund Policy</a>.
        </p>
        <p className="enterprise-line">
          Growing beyond a solo practice?{" "}
          <a href="mailto:sales@cohora.org">Talk to us.</a>
        </p>
      </section>

      <section className="final-cta" id="start">
        <div className="container">
          <h2>
            Give your teaching <em>more room to breathe.</em>
          </h2>
          <p>Start with a workspace that understands independent tutoring.</p>
          <a className="button light-button" href={signupUrl}>
            <span>Start with the free plan</span> <ArrowRight size={17} />
          </a>
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
