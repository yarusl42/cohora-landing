import { legalBusinessAddress, legalProductName, legalProviderName, schoolPrivacyEmail, schoolSupportEmail } from "@/config/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Processing Agreement",
  description: "Cohora's Data Processing Agreement.",
  alternates: { canonical: "/data-processing-agreement" },
};

export default function DataProcessingAgreementPage() {

  return (
    <div className="legal-page">
      <article className="legal-document">
        <h1 className="mb-4 text-3xl font-bold">Data Processing Agreement</h1>
        <p className="mb-8 text-sm text-muted-foreground">Effective Date: October 16, 2026</p>
        <p className="mb-8">
          This Data Processing Agreement (&quot;DPA&quot;) forms part of the Terms of Service or
          other applicable service agreement (&quot;Agreement&quot;) between {legalProviderName}
          (&quot;Provider,&quot; &quot;Processor,&quot; &quot;we,&quot; or &quot;us&quot;) and the
          organization using the Service (&quot;Customer&quot; or &quot;Controller&quot;). This DPA
          applies where the Provider processes personal data on behalf of the Customer in connection
          with the Service.
        </p>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">1. Definitions</h2>
          <p>
            <strong>Personal Data:</strong> Information relating to an identified or identifiable
            natural person, as defined under applicable data protection laws.
          </p>
          <p>
            <strong>Customer Personal Data:</strong> Personal Data submitted to or processed through
            the Service on behalf of the Customer.
          </p>
          <p>
            <strong>Processing:</strong> Any operation performed on Personal Data, including
            collection, storage, retrieval, modification, transmission, restriction, or deletion.
          </p>
          <p>
            <strong>Controller:</strong> The party determining the purposes and means of processing
            Personal Data.
          </p>
          <p>
            <strong>Processor:</strong> The party processing Personal Data on behalf of a
            Controller.
          </p>
          <p>
            <strong>Subprocessor:</strong> A third party engaged by the Processor to process
            Customer Personal Data.
          </p>
          <p>
            <strong>Applicable Data Protection Laws:</strong> Privacy and data protection laws
            applicable to the relevant processing, including the Israeli Protection of Privacy Law
            and, where applicable, the GDPR.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">2. Roles and Responsibilities</h2>
          <p>
            The Customer acts as Controller, and the Provider acts as Processor, to the extent these
            roles apply to Customer Personal Data.
          </p>
          <p>
            The Customer determines the purposes for which Customer Personal Data is collected and
            processed.
          </p>
          <p>The Customer is responsible for ensuring that:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Personal Data is collected and processed lawfully.</li>
            <li>Appropriate privacy notices are provided.</li>
            <li>Necessary consents or other legal authorizations are obtained.</li>
            <li>Authorized users receive appropriate permissions.</li>
            <li>Instructions given to the Provider comply with applicable law.</li>
          </ul>
          <p>
            The Provider shall process Customer Personal Data only in accordance with documented
            Customer instructions, except where otherwise required by applicable law.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">3. Scope and Purpose of Processing</h2>
          <p>
            The Provider processes Customer Personal Data to deliver the functionality of the
            Service.
          </p>
          <p>Processing may include:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Hosting and storing organizational records.</li>
            <li>Managing users, memberships, roles, and permissions.</li>
            <li>Maintaining scheduling and administrative records.</li>
            <li>Supporting educational and organizational workflows.</li>
            <li>Recording attendance, participation, and progress.</li>
            <li>Processing administrative payment information.</li>
            <li>Providing authorized reporting and data retrieval.</li>
            <li>Maintaining security, availability, and operational integrity.</li>
          </ul>
          <p>
            The subject matter, duration, categories of data, and processing activities are further
            described in Annex A.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">4. Documented Instructions</h2>
          <p>
            The Provider shall process Customer Personal Data only on documented instructions from
            the Customer.
          </p>
          <p>
            Such instructions include the Agreement, this DPA, authorized configuration of the
            Service, and lawful instructions submitted through supported channels.
          </p>
          <p>
            If the Provider believes an instruction violates applicable data protection law, it
            shall inform the Customer where legally required, unless prohibited by law.
          </p>
          <p>
            If processing is required by applicable law independently of Customer instructions, the
            Provider shall notify the Customer before processing unless legally prohibited.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">5. Confidentiality</h2>
          <p>
            The Provider shall ensure that personnel authorized to process Customer Personal Data
            are subject to appropriate confidentiality obligations.
          </p>
          <p>
            Access shall be limited to personnel and service providers who reasonably require it for
            authorized operational purposes.
          </p>
          <p>
            Confidentiality obligations shall continue after the termination of the relevant
            engagement.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">6. Security Measures</h2>
          <p>
            The Provider shall implement appropriate technical and organizational measures designed
            to protect Customer Personal Data, taking into account the nature of the processing,
            applicable legal requirements, and relevant risks.
          </p>
          <p>These measures shall be documented in Annex B and may include:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Authentication and access restrictions.</li>
            <li>Organization-level data isolation.</li>
            <li>Role-based authorization.</li>
            <li>Encryption during transmission.</li>
            <li>Credential protection.</li>
            <li>Security logging and monitoring.</li>
            <li>Vulnerability management.</li>
            <li>Backup and recovery procedures.</li>
            <li>Incident response processes.</li>
          </ul>
          <p>
            The Provider shall maintain measures appropriate to the applicable legal requirements
            and shall not materially reduce agreed security protections without an appropriate
            contractual basis.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">7. Subprocessors</h2>
          <p>
            The Customer grants general authorization for the Provider to engage Subprocessors
            necessary to deliver the Service, subject to applicable law.
          </p>
          <p>
            The Provider shall maintain an up-to-date list of authorized Subprocessors, including
            their relevant processing activities.
          </p>
          <p>
            Where required by applicable law, the Provider shall provide advance notice of intended
            additions or replacements and an opportunity for the Customer to object on reasonable
            data protection grounds.
          </p>
          <p>
            The Provider shall impose appropriate contractual data protection obligations on
            Subprocessors.
          </p>
          <p>
            The Provider remains responsible for the performance of its Subprocessors&apos; data
            protection obligations to the extent required by applicable law.
          </p>
          <p>The initial Subprocessor list shall be provided in Annex C.</p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">8. Personal Data Breaches</h2>
          <p>
            The Provider shall notify the Customer without undue delay after becoming aware of a
            confirmed Personal Data breach affecting Customer Personal Data, in accordance with
            applicable law.
          </p>
          <p>The notification shall include reasonably available information concerning:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>The nature of the incident.</li>
            <li>Categories of affected information.</li>
            <li>Known or reasonably estimated scope.</li>
            <li>Likely consequences, where known.</li>
            <li>Measures taken or proposed to address the incident.</li>
          </ul>
          <p>
            The Provider shall provide relevant updates as additional information becomes available.
          </p>
          <p>
            The Provider shall reasonably cooperate with the Customer in investigating and
            addressing the breach.
          </p>
          <p>
            The Customer remains responsible for notifications to affected individuals and
            authorities where such responsibility belongs to the Customer under applicable law.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">9. Data Subject Requests</h2>
          <p>
            The Provider shall provide reasonable assistance to the Customer in responding to
            requests from individuals exercising applicable privacy rights.
          </p>
          <p>
            Such requests may concern access, correction, deletion, restriction, portability, or
            other legally recognized rights.
          </p>
          <p>
            Where the Provider receives a request concerning Customer-controlled Personal Data, it
            shall, where appropriate and legally permitted, direct the requester to the relevant
            Customer or notify the Customer.
          </p>
          <p>
            The Provider shall not independently modify or disclose Customer Personal Data in
            response to such requests except as authorized or legally required.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">10. International Data Transfers</h2>
          <p>
            The Provider shall process and transfer Customer Personal Data in accordance with
            applicable data protection laws.
          </p>
          <p>
            Where international transfers require additional safeguards, the parties shall implement
            appropriate mechanisms before the relevant transfers occur.
          </p>
          <p>
            Such mechanisms may include applicable adequacy decisions, approved contractual clauses,
            or other legally recognized safeguards.
          </p>
          <p>
            Where EU Standard Contractual Clauses or other mandatory transfer instruments are
            required, they must be incorporated separately with the appropriate modules, annexes,
            and transfer details.
          </p>
          <p>
            This DPA does not independently constitute an EU Standard Contractual Clauses agreement.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">11. Data Retention, Return, and Deletion</h2>
          <p>
            The Provider shall retain Customer Personal Data for the duration necessary to provide
            the Service and fulfill applicable legal or contractual obligations.
          </p>
          <p>
            Upon termination of the Agreement, the Provider shall, at the Customer&apos;s choice and
            subject to applicable law, return or delete Customer Personal Data in accordance with
            the agreed termination procedure.
          </p>
          <p>
            Where immediate deletion is not technically feasible, including in backup systems, the
            Provider shall maintain appropriate safeguards until deletion occurs under the
            applicable retention schedule.
          </p>
          <p>
            The Provider shall provide reasonable confirmation of deletion where required by law or
            the Agreement.
          </p>
          <p>
            The applicable export formats, request procedures, and deletion periods shall be
            documented before this DPA is put into effect.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">12. Compliance Assistance</h2>
          <p>
            Taking into account the nature of the processing and information reasonably available to
            it, the Provider shall assist the Customer in meeting applicable obligations concerning:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Security of Personal Data.</li>
            <li>Personal Data breach notifications.</li>
            <li>Data protection impact assessments.</li>
            <li>Relevant regulatory consultations.</li>
            <li>Requests concerning individual privacy rights.</li>
          </ul>
          <p>
            The extent and method of assistance shall be proportionate to the relevant processing
            and applicable legal requirements.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">13. Compliance Information and Audits</h2>
          <p>
            The Provider shall make available information reasonably necessary to demonstrate
            compliance with its obligations under this DPA and applicable data protection law.
          </p>
          <p>
            Where legally required, the Provider shall allow for and contribute to appropriate
            audits or inspections conducted by the Customer or an authorized independent auditor.
          </p>
          <p>
            Audits shall be subject to reasonable confidentiality, security, and operational
            safeguards, provided these do not prevent the exercise of mandatory legal rights.
          </p>
          <p>
            The parties shall cooperate in good faith to minimize unnecessary disruption and protect
            the confidentiality of other customers.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">14. Restrictions on Data Use</h2>
          <p>The Provider shall not:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Sell Customer Personal Data.</li>
            <li>Use Customer Personal Data for unauthorized advertising.</li>
            <li>
              Use Customer Personal Data to train artificial intelligence models without separate
              authorization.
            </li>
            <li>Disclose Customer Personal Data except as authorized or legally required.</li>
            <li>
              Access Customer Personal Data for purposes unrelated to authorized service delivery,
              security, support, or legal obligations.
            </li>
          </ul>
          <p>
            The Provider may process account and operational information for its own legitimate
            business purposes as described in its Privacy Policy, where legally permitted.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">15. Duration and Termination</h2>
          <p>
            This DPA becomes effective when incorporated into the Agreement and remains effective
            for as long as the Provider processes Customer Personal Data on behalf of the Customer.
          </p>
          <p>
            Termination of the Agreement does not eliminate obligations relating to retained
            Personal Data, confidentiality, deletion, or other provisions that must survive
            termination.
          </p>
        </section>
        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">16. Order of Precedence</h2>
          <p>
            In the event of a conflict between this DPA and the Agreement concerning the processing
            of Customer Personal Data, this DPA shall prevail to the extent of that conflict.
          </p>
          <p>
            Mandatory data protection laws and applicable transfer instruments shall prevail where
            legally required.
          </p>
        </section>
        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">17. Governing Law</h2>
          <p>
            This DPA shall be governed by the law specified in the Agreement, except where mandatory
            data protection laws or applicable international transfer instruments require otherwise.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">18. Contact</h2>
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
              <dt className="inline font-semibold">Privacy Contact: </dt>
              <dd className="inline">
                <a href={`mailto:${schoolPrivacyEmail}`} className="text-primary underline">
                  {schoolPrivacyEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt className="inline font-semibold">Business Address: </dt>
              <dd className="inline">{legalBusinessAddress}</dd>
            </div>
          </dl>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">Annex A — Details of Processing</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr>
                  <th className="border p-2 text-left">Category</th>
                  <th className="border p-2 text-left">Description</th>
                </tr>
                <tr>
                  <td className="border p-2">Subject matter</td>
                  <td className="border p-2">Provision of organizational management software</td>
                </tr>
                <tr>
                  <td className="border p-2">Duration</td>
                  <td className="border p-2">
                    Duration of the Agreement and applicable retention periods
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Nature of processing</td>
                  <td className="border p-2">
                    Collection, storage, organization, retrieval, modification, transmission, and
                    deletion
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Purpose</td>
                  <td className="border p-2">Delivery of authorized Service functionality</td>
                </tr>
                <tr>
                  <td className="border p-2">Data subjects</td>
                  <td className="border p-2">
                    Students, employees, instructors, administrators, customers, and other
                    individuals whose information is entered by the Customer
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Personal Data</td>
                  <td className="border p-2">
                    Names, contact information, membership records, schedules, attendance,
                    educational records, administrative payment information, and other
                    Customer-provided information
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Sensitive information</td>
                  <td className="border p-2">
                    Only where permitted by applicable law and authorized under the Agreement
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Processing instructions</td>
                  <td className="border p-2">
                    Agreement, DPA, authorized Service configuration, and documented Customer
                    instructions
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">
            Annex B — Technical and Organizational Security Measures
          </h2>
          <p>
            The Provider&apos;s implemented security measures shall be documented before execution
            of this DPA.
          </p>
          <p>The final annex should identify the actual controls used for:</p>
          <ol className="list-decimal space-y-1 pl-6">
            <li>Authentication and credential protection.</li>
            <li>Authorization and organizational data isolation.</li>
            <li>Encryption in transit and, where implemented, at rest.</li>
            <li>Infrastructure and database access.</li>
            <li>Security monitoring and logging.</li>
            <li>Vulnerability identification and remediation.</li>
            <li>Backup, recovery, and business continuity.</li>
            <li>Incident detection and response.</li>
            <li>Personnel and Subprocessor access.</li>
            <li>Data retention and secure deletion.</li>
          </ol>
          <p>
            <strong>Implementation status:</strong> [Complete and verify before commercial use]
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">Annex C — Authorized Subprocessors</h2>
          <p>
            The Provider shall identify each authorized Subprocessor that processes Customer
            Personal Data.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border p-2 text-left">Subprocessor</th>
                  <th className="border p-2 text-left">Service Provided</th>
                  <th className="border p-2 text-left">Processing Location</th>
                  <th className="border p-2 text-left">Data Categories</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">[Hosting provider]</td>
                  <td className="border p-2">Application infrastructure</td>
                  <td className="border p-2">[Location]</td>
                  <td className="border p-2">[Categories]</td>
                </tr>
                <tr>
                  <td className="border p-2">[Database provider]</td>
                  <td className="border p-2">Data storage</td>
                  <td className="border p-2">[Location]</td>
                  <td className="border p-2">[Categories]</td>
                </tr>
                <tr>
                  <td className="border p-2">[Email provider]</td>
                  <td className="border p-2">Transactional email</td>
                  <td className="border p-2">[Location]</td>
                  <td className="border p-2">[Categories]</td>
                </tr>
                <tr>
                  <td className="border p-2">[Monitoring provider, if used]</td>
                  <td className="border p-2">Error and performance monitoring</td>
                  <td className="border p-2">[Location]</td>
                  <td className="border p-2">[Categories]</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>The Provider shall maintain and update this list in accordance with Section 7.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Annex D — Execution and Incorporation</h2>
          <p>
            This DPA shall become binding only when validly incorporated into an Agreement between
            the parties or otherwise accepted through an enforceable contracting process.
          </p>
          <dl className="space-y-1">
            <div>
              <dt className="inline font-semibold">Provider legal name: </dt>
              <dd className="inline">{legalProviderName}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Customer legal name: </dt>
              <dd className="inline">[Customer Legal Name]</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Effective date: </dt>
              <dd className="inline">[Date]</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Method of acceptance: </dt>
              <dd className="inline">
                [Signed agreement / electronic acceptance / other agreed method]
              </dd>
            </div>
          </dl>
        </section>
      </article>
    </div>
  );
};

