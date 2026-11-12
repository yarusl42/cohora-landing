import {
  legalBusinessAddress,
  legalProductName,
  legalProviderName,
  schoolPrivacyEmail,
  schoolSupportEmail,
} from "@/config/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Cohora's Privacy Policy.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <div className="legal-document">
        <h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Effective Date: November 13, 2026 · Last Updated: November 13, 2026
        </p>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            This Privacy Policy describes how {legalProductName}{" "}
            (&quot;Platform,&quot; &quot;Service&quot;), operated by{" "}
            {legalProviderName} (&quot;Provider,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;), collects, uses, stores, shares,
            and protects personal information.
          </p>
          <p>
            Our Platform provides organizational management software, primarily
            designed for educational institutions, training providers, and
            related businesses, but available for other lawful organizational
            purposes.
          </p>
          <p>
            We are committed to protecting personal information and handling it
            transparently in accordance with applicable data protection laws.
          </p>
          <p>
            This Privacy Policy applies to visitors to our websites, account
            holders, organizational administrators, and individuals whose
            personal information we process directly.
          </p>
          <p>
            Personal information submitted by organizations may be subject to
            additional contractual data processing arrangements.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">
            2. Our Role in Processing Personal Information
          </h2>
          <p>
            We may process personal information in different capacities
            depending on the circumstances.
          </p>
          <p>
            <strong>As a Data Controller:</strong> We determine the purposes and
            means of processing information relating to account registration,
            service administration, security, billing, customer support, and our
            own business operations.
          </p>
          <p>
            <strong>As a Data Processor:</strong> When organizations use the
            Platform to manage students, employees, customers, schedules,
            attendance, payments, or other records, we generally process that
            information on behalf of the relevant organization and according to
            its authorized instructions.
          </p>
          <p>
            Organizations are generally responsible for determining what
            personal information they collect, the purposes for which it is
            used, and the permissions granted to their authorized users.
          </p>
          <p>
            These distinctions apply where recognized by applicable law. The
            relevant legal responsibilities depend on the actual processing
            activities and applicable jurisdiction.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">3. Information We Collect</h2>
          <p>
            Depending on how the Platform is used, we may collect and process
            the following categories of information.
          </p>
          <h3 className="text-lg font-medium">
            3.1 Account and Identity Information
          </h3>
          <ul className="list-disc space-y-1 pl-6">
            <li>Full name and email address</li>
            <li>
              Authentication credentials, stored in an appropriately protected
              form
            </li>
            <li>Account identifiers and profile information</li>
            <li>Organization memberships and assigned roles</li>
            <li>Account preferences and settings</li>
          </ul>
          <h3 className="text-lg font-medium">
            3.2 Organizational Information
          </h3>
          <ul className="list-disc space-y-1 pl-6">
            <li>Organization names and administrative details</li>
            <li>Organizational structures and group memberships</li>
            <li>User roles, permissions, and access configurations</li>
            <li>Invitations and membership records</li>
            <li>Operational settings and configurations</li>
          </ul>
          <h3 className="text-lg font-medium">
            3.3 Customer-Managed Information
          </h3>
          <p>Organizations may submit and manage information including:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Student, employee, or customer records</li>
            <li>Course, lesson, and scheduling information</li>
            <li>Attendance and participation records</li>
            <li>Educational progress and related assessments</li>
            <li>Payment records and administrative financial information</li>
            <li>Notes, communications, and other organizational records</li>
          </ul>
          <p>
            The specific categories of Customer Data depend on how each
            organization configures and uses the Platform.
          </p>
          <p>
            We do not determine the specific content organizations choose to
            submit, except where required for the operation, security, or legal
            compliance of the Service.
          </p>
          <h3 className="text-lg font-medium">
            3.4 Technical and Usage Information
          </h3>
          <p>When users access the Platform, we may collect:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>IP addresses</li>
            <li>Browser and device information</li>
            <li>Operating system and application version</li>
            <li>Access timestamps</li>
            <li>Authentication and security events</li>
            <li>Error reports and diagnostic information</li>
            <li>Feature usage and interaction data</li>
          </ul>
          <h3 className="text-lg font-medium">
            3.5 Communications and Support
          </h3>
          <p>
            When users contact us, we may process contact details,
            correspondence, technical support requests, and information
            voluntarily provided to resolve issues.
          </p>
          <h3 className="text-lg font-medium">3.6 Billing Information</h3>
          <p>
            If paid subscriptions are introduced, we may process billing contact
            information, transaction references, subscription details, and
            payment status.
          </p>
          <p>
            Payment card information may be processed directly by authorized
            third-party payment providers rather than stored by the Platform.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">4. Purposes of Processing</h2>
          <p>
            We process personal information for the following purposes, as
            applicable:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Providing, operating, and maintaining the Platform</li>
            <li>Authenticating users and managing account access</li>
            <li>Enforcing organizational permissions and data separation</li>
            <li>Delivering requested features and administrative workflows</li>
            <li>Processing authorized subscription transactions</li>
            <li>Providing technical support</li>
            <li>Detecting, preventing, and investigating security incidents</li>
            <li>Diagnosing errors and maintaining system reliability</li>
            <li>
              Improving performance and usability using information we are
              authorized to process
            </li>
            <li>Complying with legal obligations</li>
            <li>
              Communicating essential service, security, and account-related
              information
            </li>
          </ul>
          <p>We do not sell personal information.</p>
          <p>
            We do not use Customer Data to train artificial intelligence models
            without separate authorization.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">
            5. Legal Bases for Processing
          </h2>
          <p>
            Where applicable law requires a legal basis for processing personal
            information, we rely on one or more appropriate grounds, depending
            on the activity and jurisdiction.
          </p>
          <p>These may include:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Contractual necessity:</strong> Processing required to
              provide the Service or fulfill contractual obligations.
            </li>
            <li>
              <strong>Legal obligations:</strong> Processing required by
              applicable laws and regulations.
            </li>
            <li>
              <strong>Legitimate interests:</strong> Processing reasonably
              necessary for security, fraud prevention, service administration,
              and other lawful business interests, where permitted.
            </li>
            <li>
              <strong>Consent:</strong> Processing based on consent where
              consent is legally required and obtained.
            </li>
          </ul>
          <p>
            When processing Customer Data on behalf of an organization, the
            organization is generally responsible for establishing the
            appropriate legal basis for its processing activities.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">
            6. Cookies and Similar Technologies
          </h2>
          <p>
            We use local storage and similar technologies on our website. We use
            necessary storage to remember your cookie preference. This is
            retained for up to six months unless you change it.
          </p>
          <p>
            With your consent, we use Mixpanel to understand website usage, such
            as pages viewed and interactions with our site. Mixpanel uses a
            randomly generated identifier stored locally in your browser to
            distinguish visits.
          </p>
          <p>
            With your consent, we also use Sentry to receive browser error and
            diagnostic information so that we can identify and fix reliability
            issues. We do not activate these optional technologies until you
            make a choice through our cookie banner.
          </p>
          <p>
            You can accept or decline optional technologies when the banner is
            shown. Browser settings may also let you manage local storage.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">
            7. Information Sharing and Service Providers
          </h2>
          <p>
            We may disclose personal information to trusted third-party service
            providers where reasonably necessary to operate the Platform.
          </p>
          <p>These may include providers of:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Cloud hosting and infrastructure</li>
            <li>Database hosting and storage</li>
            <li>Email delivery and communications</li>
            <li>Authentication and security services</li>
            <li>Payment processing</li>
            <li>
              Analytics provided by Mixpanel, where you have given consent
            </li>
            <li>
              Error monitoring provided by Sentry, where you have given consent
            </li>
            <li>Technical support infrastructure</li>
          </ul>
          <p>
            Such providers may process personal information only for authorized
            purposes, subject to applicable contractual and legal obligations.
          </p>
          <p>
            We may also disclose information when required by law, valid legal
            process, or where reasonably necessary to protect the rights,
            safety, or security of users, the Platform, or others.
          </p>
          <p>We do not sell or rent personal information to data brokers.</p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">
            8. International Data Transfers
          </h2>
          <p>
            Personal information may be processed in countries other than the
            country in which a user or organization is located.
          </p>
          <p>
            Where applicable law imposes restrictions on international data
            transfers, we will use appropriate legal mechanisms and safeguards.
          </p>
          <p>
            Organizations should consider the location of their users and
            applicable data protection requirements when using the Platform.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">9. Data Security</h2>
          <p>
            We use technical and organizational security measures intended to
            protect personal information against unauthorized access,
            alteration, disclosure, loss, or destruction.
          </p>
          <p>
            Depending on the relevant systems and features, these measures may
            include:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Authentication and access controls</li>
            <li>Role-based and organization-specific permissions</li>
            <li>Protected credential storage</li>
            <li>Secure communications</li>
            <li>Application monitoring and error detection</li>
            <li>Infrastructure security controls</li>
            <li>Security updates and vulnerability remediation</li>
          </ul>
          <p>No electronic system can guarantee absolute security.</p>
          <p>
            We encourage users to maintain secure credentials and promptly
            report suspected unauthorized access.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">10. Data Retention</h2>
          <p>
            We retain personal information only for as long as reasonably
            necessary for the purposes described in this Policy, subject to
            applicable legal and contractual requirements.
          </p>
          <p>
            Retention periods may vary according to the category of information,
            the organization&apos;s instructions, account status, and legal
            obligations.
          </p>
          <p>
            When information is no longer required, we will delete, anonymize,
            or otherwise handle it in accordance with applicable requirements
            and our retention procedures.
          </p>
          <p>
            Certain information may remain temporarily in backups or be retained
            where legally required.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">
            11. Organizational Access and Data Management
          </h2>
          <p>
            Each organization is responsible for managing access to its
            organizational environment.
          </p>
          <p>
            Authorized administrators may grant, modify, or revoke user
            permissions according to the Platform&apos;s available
            functionality.
          </p>
          <p>
            Users may be able to access, modify, or delete organizational
            information according to the permissions assigned to them.
          </p>
          <p>
            Individuals seeking access to or correction of information managed
            by an organization may need to contact that organization directly.
          </p>
          <p>
            We will provide reasonable assistance where required by applicable
            law or contractual obligations.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">
            12. Children&apos;s and Educational Information
          </h2>
          <p>
            The Platform may be used by educational organizations to manage
            information concerning children and students.
          </p>
          <p>
            Organizations are responsible for determining the lawful basis for
            collecting and processing such information and for providing any
            legally required notices or obtaining necessary authorizations.
          </p>
          <p>
            We process educational Customer Data for authorized Service purposes
            and do not independently use such information for behavioral
            advertising.
          </p>
          <p>
            The Platform is not intended for independent account registration by
            children except where permitted under an authorized organizational
            arrangement and applicable law.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">13. Your Privacy Rights</h2>
          <p>
            Depending on applicable law and your circumstances, you may have
            rights relating to your personal information, including:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Requesting access to personal information</li>
            <li>Requesting correction of inaccurate information</li>
            <li>Requesting deletion where legally applicable</li>
            <li>Objecting to or restricting certain processing activities</li>
            <li>Withdrawing consent where processing is based on consent</li>
            <li>Requesting data portability where applicable</li>
            <li>
              Lodging a complaint with a competent data protection authority
            </li>
          </ul>
          <p>
            We may need to verify your identity before responding to certain
            requests.
          </p>
          <p>
            Where personal information is controlled by an organization using
            the Platform, requests may need to be directed to that organization.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">
            14. Data Breaches and Security Incidents
          </h2>
          <p>
            We maintain procedures intended to identify, investigate, and
            respond to suspected security incidents involving personal
            information.
          </p>
          <p>
            Where required by applicable law or contractual obligations, we will
            notify affected organizations, individuals, or competent authorities
            of relevant personal data breaches.
          </p>
          <p>
            Notification obligations and timelines depend on the circumstances
            and applicable legal requirements.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">
            15. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy to reflect changes in our
            services, processing activities, legal obligations, or business
            practices.
          </p>
          <p>
            When material changes occur, we will provide appropriate notice
            where required by law.
          </p>
          <p>
            The latest version will be made available through the Platform,
            together with its effective date.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">16. Contact Information</h2>
          <p>For privacy-related questions, requests, or concerns, contact:</p>
          <dl className="space-y-1">
            <div>
              <dt className="inline font-semibold">Provider: </dt>
              <dd className="inline">{legalProviderName}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Platform: </dt>
              <dd className="inline">{legalProductName}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Email: </dt>
              <dd className="inline">
                <a
                  href={`mailto:${schoolPrivacyEmail}`}
                  className="text-primary underline"
                >
                  {schoolPrivacyEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt className="inline font-semibold">Business address: </dt>
              <dd className="inline">{legalBusinessAddress}</dd>
            </div>
          </dl>
          <p>
            We will review privacy inquiries and respond in accordance with
            applicable legal requirements.
          </p>
        </section>
      </div>
    </div>
  );
}
