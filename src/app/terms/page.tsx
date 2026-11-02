import { legalBusinessAddress, legalProductName, legalProviderName, schoolPrivacyEmail, schoolSupportEmail } from "@/config/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Cohora's Terms of Service.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {

  return (
    <div className="legal-page">
      <div className="legal-document">
        <h1 className="mb-4 text-3xl font-bold">Terms of Service</h1>
        <p className="mb-8 text-sm text-muted-foreground">Effective Date: October 16, 2026</p>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">1. Introduction and Acceptance</h2>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern access to and use of the software
            platform, websites, applications, and related services (collectively, the
            &quot;Service&quot;) operated by the provider identified in Section 19
            (&quot;Provider,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          </p>
          <p>
            By creating an account, accessing, or using the Service, you agree to these Terms. If
            you use the Service on behalf of an organization, you represent that you have the
            authority to bind that organization to these Terms.
          </p>
          <p>If you do not agree to these Terms, you must not use the Service.</p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">2. Description of the Service</h2>
          <p>
            The Service is a cloud-based organizational management platform designed primarily for
            educational institutions, training providers, and related businesses, but may be used
            for other lawful organizational purposes.
          </p>
          <p>
            Depending on the features available, the Service may support user management,
            organizational structures, scheduling, educational activities, records, payments
            tracking, reporting, and related administrative workflows.
          </p>
          <p>
            We may introduce, modify, or discontinue features as the Service evolves, subject to
            applicable law and any specific contractual commitments.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">3. Eligibility and Account Registration</h2>
          <p>
            You must be legally capable of entering into a binding agreement to register for the
            Service.
          </p>
          <p>
            You agree to provide accurate registration information and maintain the security of your
            account credentials.
          </p>
          <p>
            You are responsible for activities performed through your account to the extent
            attributable to your actions, authorization, or failure to maintain reasonable account
            security.
          </p>
          <p>You must promptly notify us of suspected unauthorized access.</p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">
            4. Organizations, Administrators, and Permissions
          </h2>
          <p>
            The Service may allow users to create or join separate organizational environments
            (&quot;Organizations&quot;).
          </p>
          <p>
            Each Organization is responsible for managing its authorized users, assigning
            appropriate access permissions, and ensuring that its use of the Service complies with
            applicable laws.
          </p>
          <p>
            Organization administrators may manage accounts, roles, permissions, and organizational
            data according to the functionality made available by the Service.
          </p>
          <p>
            Users must not attempt to bypass access controls or access information belonging to
            another Organization without authorization.
          </p>
          <p>
            We are responsible for implementing and maintaining the access controls provided by the
            Service, subject to the limitations and commitments described in these Terms.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">5. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Use the Service for unlawful, fraudulent, or deceptive activities.</li>
            <li>Access or attempt to access accounts or data without authorization.</li>
            <li>Interfere with the security, integrity, or availability of the Service.</li>
            <li>Upload malicious software or conduct abusive automated activity.</li>
            <li>Use the Service to distribute unlawful spam or malicious communications.</li>
            <li>Infringe intellectual property, privacy, or other legal rights.</li>
            <li>Circumvent technical restrictions or security mechanisms.</li>
          </ul>
          <p>
            We may investigate suspected violations and take proportionate action, including
            restricting access where reasonably necessary.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">6. Customer Data and Ownership</h2>
          <p>
            You or the relevant Organization retain ownership of all data, documents, records, and
            other content submitted to the Service (&quot;Customer Data&quot;).
          </p>
          <p>
            You grant us a limited, non-exclusive right to host, store, transmit, process, and
            display Customer Data as reasonably necessary to provide, maintain, secure, and support
            the Service.
          </p>
          <p>We do not acquire ownership of Customer Data.</p>
          <p>
            We will not sell Customer Data or use it to train artificial intelligence models without
            separate authorization.
          </p>
          <p>
            You are responsible for ensuring that Customer Data is collected, submitted, and
            processed lawfully.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">7. Privacy and Data Protection</h2>
          <p>
            Our collection and processing of personal information are described in our{" "}
            <a href="/privacy" className="text-primary underline">
              Privacy Policy
            </a>
            .
          </p>
          <p>
            Where we process personal data on behalf of an Organization, additional data processing
            terms may apply.
          </p>
          <p>
            Organizations are responsible for providing appropriate privacy notices and obtaining
            any legally required authorizations or consents from individuals whose information they
            manage.
          </p>
          <p>
            Where applicable, we will fulfill our obligations under relevant data protection laws.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">8. Educational and Minor-Related Information</h2>
          <p>
            The Service may be used to manage educational records and information relating to
            minors.
          </p>
          <p>
            Organizations using the Service for these purposes are responsible for complying with
            applicable educational, privacy, and child-protection requirements.
          </p>
          <p>
            The Service is not intended for independent registration by children unless expressly
            authorized through an appropriate organizational arrangement and permitted by applicable
            law.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">9. Subscriptions, Fees, and Billing</h2>
          <p>Certain features may be offered through free, trial, or paid subscription plans.</p>
          <p>
            Where paid plans are available, applicable pricing, billing intervals, and subscription
            conditions will be presented before purchase.
          </p>
          <p>
            Unless otherwise stated at purchase, recurring subscriptions renew automatically until
            canceled, subject to applicable law.
          </p>
          <p>
            Any applicable taxes, cancellation rights, and refund conditions will be disclosed as
            required by law.
          </p>
          <p>
            We will not charge subscription fees without an applicable purchase or payment
            authorization.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">10. Third-Party Services</h2>
          <p>
            The Service may integrate with third-party providers for hosting, communications,
            authentication, payments, analytics, or other functionality.
          </p>
          <p>Third-party services may be subject to their own terms and privacy policies.</p>
          <p>
            We are not responsible for independent third-party services outside our reasonable
            control, but this provision does not eliminate responsibilities imposed on us by
            applicable law.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">11. Intellectual Property</h2>
          <p>
            The Service, including its software, architecture, design, branding, interfaces, and
            related intellectual property, belongs to the Provider or its licensors.
          </p>
          <p>
            Subject to these Terms, we grant you a limited, non-exclusive, non-transferable right to
            access and use the Service for your authorized purposes.
          </p>
          <p>
            You may not reproduce, distribute, resell, or commercially exploit the Service itself
            without our written permission, except as permitted by applicable law.
          </p>
          <p>Nothing in these Terms transfers ownership of Customer Data to us.</p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">12. Security and Service Availability</h2>
          <p>
            We aim to maintain reasonable technical and organizational measures designed to protect
            the Service and Customer Data against unauthorized access, loss, and misuse.
          </p>
          <p>
            However, no online service can guarantee absolute security or uninterrupted
            availability.
          </p>
          <p>
            The Service may occasionally be unavailable due to maintenance, technical failures,
            infrastructure issues, or circumstances outside our reasonable control.
          </p>
          <p>
            We do not guarantee a specific uptime percentage unless expressly agreed in a separate
            service-level agreement.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">13. Data Retention and Export</h2>
          <p>
            Customer Data will be retained and deleted in accordance with our Privacy Policy,
            applicable law, and any applicable organizational agreement.
          </p>
          <p>
            Where technically available and legally permitted, Organizations may request access to
            or export of their Customer Data.
          </p>
          <p>
            Following termination, access to Customer Data may be limited or discontinued.
            Applicable retention, deletion, and export arrangements will be communicated through our
            policies or relevant agreements.
          </p>
          <p>
            We may retain information where required by law or reasonably necessary for legitimate
            legal purposes.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">14. Suspension and Termination</h2>
          <p>
            You may stop using the Service at any time, subject to any applicable subscription
            commitments.
          </p>
          <p>
            We may suspend or restrict access where reasonably necessary to address security
            threats, unlawful activity, material violations of these Terms, or risks to other users.
          </p>
          <p>
            Where reasonably practicable, we will provide notice and an opportunity to resolve the
            issue before termination.
          </p>
          <p>
            We may also discontinue the Service or terminate an account for legitimate operational
            reasons, subject to applicable law, contractual obligations, and reasonable notice where
            appropriate.
          </p>
          <p>
            Termination does not automatically eliminate outstanding payment obligations or rights
            and responsibilities that reasonably survive termination.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">15. Disclaimer of Warranties</h2>
          <p>
            To the maximum extent permitted by applicable law, the Service is provided on an
            &quot;as is&quot; and &quot;as available&quot; basis.
          </p>
          <p>
            We disclaim implied warranties, including merchantability, fitness for a particular
            purpose, and non-infringement, to the extent such disclaimers are legally permitted.
          </p>
          <p>
            Nothing in these Terms excludes warranties or rights that cannot lawfully be excluded.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">16. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, neither party will be liable for
            indirect, incidental, special, consequential, or punitive damages arising from use of
            the Service.
          </p>
          <p>
            For paid Services, our aggregate contractual liability will generally be limited to the
            amounts paid by the relevant customer during the twelve months preceding the event
            giving rise to the claim.
          </p>
          <p>
            For free Services, any applicable liability limitation will be determined in accordance
            with applicable law.
          </p>
          <p>
            These limitations do not apply where liability cannot lawfully be excluded or limited,
            including where applicable for fraud, intentional misconduct, or other non-excludable
            obligations.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">17. Changes to the Service and Terms</h2>
          <p>
            We may update these Terms to reflect changes in the Service, legal requirements, or
            business operations.
          </p>
          <p>
            Material changes will be communicated through the Service, by email, or through another
            reasonable method where required or appropriate.
          </p>
          <p>Updated Terms will identify their effective date.</p>
          <p>
            Where applicable law requires additional consent or notice, we will follow those
            requirements.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">18. Governing Law and Disputes</h2>
          <p>
            Unless otherwise required by applicable mandatory law or agreed in a separate written
            contract, these Terms are governed by the laws of the State of Israel.
          </p>
          <p>
            Disputes arising from these Terms will be subject to the jurisdiction of the competent
            courts in Israel, subject to any mandatory rights or jurisdictional protections
            available to users.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">19. Provider Information and Contact</h2>
          <p>The Service is operated by:</p>
          <dl className="space-y-1">
            <div>
              <dt className="inline font-semibold">Provider: </dt>
              <dd className="inline">{legalProviderName}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Product: </dt>
              <dd className="inline">{legalProductName}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Business address: </dt>
              <dd className="inline">{legalBusinessAddress}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Email: </dt>
              <dd className="inline">
                <a href={`mailto:${schoolSupportEmail}`} className="text-primary underline">
                  {schoolSupportEmail}
                </a>
              </dd>
            </div>
          </dl>
          <p>
            For questions concerning these Terms, account administration, or legal matters, please
            contact us using the information above.
          </p>
        </section>
      </div>
    </div>
  );
};

