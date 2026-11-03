import { schoolSupportEmail } from "@/config/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Cohora's Refund Policy for Tutor Pro subscriptions.",
  alternates: { canonical: "/refunds" },
};

export default function RefundsPage() {
  return (
    <div className="legal-page">
      <div className="legal-document">
        <h1>Refund Policy</h1>
        <p className="legal-effective-date">Effective Date: November 3, 2026</p>

        <p>This Refund Policy applies to paid subscriptions for Cohora.</p>

        <section>
          <h2>1. Free Tutor</h2>
          <p>
            Free Tutor is provided at no charge. As no payment is collected for
            this plan, it does not create a refund entitlement.
          </p>
        </section>

        <section>
          <h2>2. Tutor Pro subscriptions</h2>
          <p>
            Tutor Pro is billed monthly in advance at the price shown at
            checkout.
          </p>
          <p>
            You may cancel your Tutor Pro subscription at any time through the
            billing portal. Cancellation prevents the next renewal, and you will
            retain access to Tutor Pro until the end of your current paid
            billing period.
          </p>
        </section>

        <section>
          <h2>3. Refunds</h2>
          <p>
            We do not normally provide refunds or account credits for unused
            time in a partially used monthly billing period.
          </p>
          <p>
            This does not affect any refund, cancellation, withdrawal, or
            consumer-protection right that applies to you under mandatory law.
          </p>
        </section>

        <section>
          <h2>4. Billing errors and duplicate charges</h2>
          <p>
            If you believe that you were charged in error, charged more than
            once for the same subscription period, or experienced an
            unauthorized charge, contact us promptly at{" "}
            <a href={`mailto:${schoolSupportEmail}`}>{schoolSupportEmail}</a>.
          </p>
          <p>Please include:</p>
          <ul>
            <li>The email address used for your Cohora subscription.</li>
            <li>The date and amount of the charge.</li>
            <li>A short description of the issue.</li>
          </ul>
          <p>
            We will investigate the request and, where an error is confirmed,
            arrange the appropriate refund or billing correction.
          </p>
        </section>

        <section>
          <h2>5. How refunds are issued</h2>
          <p>
            Payments and approved refunds are handled through our payment
            provider, Paddle. Approved refunds are returned to the original
            payment method where available. Processing time depends on Paddle
            and your bank or card issuer.
          </p>
          <p>
            Paddle&apos;s customer portal also allows customers to manage
            subscriptions, payment methods, invoices, and cancellations. See{" "}
            <a
              href="https://developer.paddle.com/concepts/sell/customer-portal/"
              rel="noreferrer"
              target="_blank"
            >
              Paddle&apos;s customer portal documentation
            </a>
            .
          </p>
        </section>

        <section>
          <h2>6. Changes to this policy</h2>
          <p>
            We may update this Refund Policy to reflect changes to Cohora, our
            billing process, or applicable law. The effective date above
            identifies when the current version took effect.
          </p>
        </section>
      </div>
    </div>
  );
}
