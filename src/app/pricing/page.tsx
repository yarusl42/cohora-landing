import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple monthly pricing for independent tutors using Cohora.",
  alternates: { canonical: "/pricing" },
};

const plans = [
  {
    label: "Start here",
    name: "Free Tutor",
    audience: "For independent tutors starting out.",
    price: "$0",
    capacity: "Up to 10 student places",
    features: [
      "Core CRM and student management",
      "Lessons, homework, and leads",
      "Payment requests and income tracking",
    ],
    cta: "Start with Free Tutor",
    primary: true,
  },
  {
    label: "More capacity",
    name: "Tutor Pro",
    audience: "For an established solo tutor.",
    price: "$12",
    capacity: "Up to 50 student places",
    features: [
      "Everything in Free Tutor",
      "More room for your students",
      "The same focused solo-tutor experience",
    ],
    cta: "Choose Tutor Pro",
    primary: false,
  },
];

const dashboardUrl = "https://app.cohora.org";
const signInUrl = `${dashboardUrl}/login`;
const signupUrl = `${dashboardUrl}/signup/owner`;

export default function PricingPage() {
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
        <div className="pricing-grid pricing-page-grid">
          {plans.map((plan) => (
            <article
              className={`price-card${plan.primary ? " price-card-primary" : ""}`}
              key={plan.name}
            >
              <p className="plan-label">{plan.label}</p>
              <h2>{plan.name}</h2>
              <p className="plan-for">{plan.audience}</p>
              <p className="price">
                <strong>{plan.price}</strong>
                <span>/month</span>
              </p>
              <p className="capacity">{plan.capacity}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} /> {feature}
                  </li>
                ))}
              </ul>
              <a
                className={`button${plan.primary ? "" : " button-outline"}`}
                href={signupUrl}
              >
                {plan.cta} <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
        <p className="pricing-note">
          Tutor Pro is billed monthly in advance. Cancel any time before your
          next renewal; you&apos;ll retain access through your current paid
          billing period. See our <a href="/refunds">Refund Policy</a>.
        </p>
        <p className="enterprise-line">
          Growing beyond a solo practice? <a href="#start">Talk to us.</a>
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
