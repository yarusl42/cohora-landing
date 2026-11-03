import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  GraduationCap,
  Menu,
  MessageSquareText,
  UsersRound,
} from "lucide-react";

const benefits = [
  {
    icon: UsersRound,
    title: "A clear view of every student",
    copy: "Keep contact details, lesson history, progress, and notes in one calm, reliable place.",
  },
  {
    icon: Clock3,
    title: "Lessons that stay on track",
    copy: "Plan groups and sessions, take attendance, and see exactly what is coming next.",
  },
  {
    icon: MessageSquareText,
    title: "Homework with a conversation",
    copy: "Set work, review submissions, and give feedback without losing context in a chat thread.",
  },
  {
    icon: CircleDollarSign,
    title: "A better handle on income",
    copy: "Create payment requests and follow the financial side of your teaching alongside the work.",
  },
];

const faqs = [
  [
    "Who is Cohora for?",
    "Cohora is built for independent tutors who want one straightforward place to manage their students, lessons, homework, and payments.",
  ],
  [
    "What counts as a student place?",
    "A student place covers an active student, including someone you have added before they complete their own sign-up. Free Tutor includes up to 10 student places.",
  ],
  [
    "Can my students use Cohora?",
    "Yes. Students can access the parts of their learning journey that matter to them, including lesson records and homework.",
  ],
  [
    "What happens when I outgrow Free Tutor?",
    "Move to Tutor Pro for up to 50 student places. If you need a multi-staff or tailored setup, talk to us about Enterprise.",
  ],
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Cohora",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      description:
        "Cohora is tutoring management software for independent tutors to manage students, lessons, homework, attendance, and payments.",
      featureList:
        "Student management, lesson planning, attendance, homework, payment tracking",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

function ProductPreview() {
  return (
    <div className="product-shell" aria-label="Cohora dashboard preview">
      <aside className="product-sidebar">
        <div className="product-mark">S</div>
        <span className="sidebar-active" />
        <span />
        <span />
        <span />
      </aside>
      <div className="product-content">
        <div className="product-topbar">
          <span>Monday, 10 June</span>
          <div className="avatar">AM</div>
        </div>
        <div className="product-body">
          <div className="dashboard-heading">
            <div>
              <span className="eyebrow">Your day</span>
              <strong>Good morning, Anna</strong>
            </div>
            <button>+ New lesson</button>
          </div>
          <div className="product-grid">
            <section className="schedule-card">
              <div className="card-title">
                <strong>Today&apos;s lessons</strong>
                <span>View calendar</span>
              </div>
              <div className="lesson-row">
                <div className="time">10:00</div>
                <div className="lesson-dot blue" />
                <div>
                  <b>Maths · Year 9</b>
                  <small>Ella, Noah, Mia</small>
                </div>
                <em>50 min</em>
              </div>
              <div className="lesson-row">
                <div className="time">14:30</div>
                <div className="lesson-dot mint" />
                <div>
                  <b>English · GCSE</b>
                  <small>James Wilson</small>
                </div>
                <em>60 min</em>
              </div>
              <div className="lesson-row muted-row">
                <div className="time">17:00</div>
                <div className="lesson-dot lilac" />
                <div>
                  <b>Science · Year 8</b>
                  <small>Olivia, Leo</small>
                </div>
                <em>50 min</em>
              </div>
            </section>
            <section className="progress-card">
              <span className="eyebrow">This week</span>
              <strong>9 of 12</strong>
              <p>lessons complete</p>
              <div className="progress-bar">
                <i />
              </div>
              <div className="mini-stats">
                <span>
                  <b>6</b> homework
                </span>
                <span>
                  <b>£720</b> paid
                </span>
              </div>
            </section>
          </div>
          <section className="student-card">
            <div className="student-face">E</div>
            <div>
              <span className="eyebrow">Next up</span>
              <strong>Ella Thompson</strong>
              <p>Algebra · 10:00 today</p>
            </div>
            <button className="outline-small">Open student</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const dashboardUrl = "https://app.cohora.org";
  const signInUrl = `${dashboardUrl}/login`;
  const signupUrl = `${dashboardUrl}/signup/owner`;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <header className="site-header container">
        <a href="#top" className="brand" aria-label="Cohora home">
          <img src="/logo.png" alt="" />
          <span>Cohora</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="/pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="header-actions">
          <a className="sign-in" href={signInUrl}>
            Sign in
          </a>
          <a className="button button-small" href={signupUrl}>
            Start with the free plan <ArrowRight size={15} />
          </a>
        </div>
        <button className="menu-button" aria-label="Open menu">
          <Menu size={21} />
        </button>
      </header>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="eyebrow accent-text">
            <span />
            Built for independent tutors
          </p>
          <h1>
            Less admin.
            <br />
            <em>More teaching.</em>
          </h1>
          <p className="hero-lede">
            Cohora brings students, lessons, homework, and payments into one
            clear workspace - so your practice feels easier to run.
          </p>
          <div className="hero-actions">
            <a className="button" href={signupUrl}>
              Start with the free plan <ArrowRight size={17} />
            </a>
            <a className="text-link" href="#how-it-works">
              See how it works <span>↓</span>
            </a>
          </div>
          <p className="hero-note">
            <Check size={15} /> Built for solo tutors · Free plan includes up to
            10 student places
          </p>
        </div>
        <div className="hero-product">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <ProductPreview />
        </div>
      </section>

      <section className="quiet-statement">
        <div className="container">
          <p>
            You should not need complicated software to run a great tutoring
            practice.
          </p>
        </div>
      </section>

      <section className="benefits container" id="how-it-works">
        <div className="section-intro">
          <p className="eyebrow">Everything in its place</p>
          <h2>
            Built around the work
            <br />
            you actually do.
          </h2>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, copy }) => (
            <article className="benefit" key={title}>
              <div className="icon-wrap">
                <Icon size={21} strokeWidth={1.7} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow">
        <div className="container workflow-inner">
          <div className="workflow-copy">
            <p className="eyebrow">A calmer way to work</p>
            <h2>
              From first enquiry
              <br />
              to finished lesson.
            </h2>
            <p>
              One straightforward flow replaces scattered messages, notes, and
              spreadsheets. You stay in control without building a system around
              yourself.
            </p>
            <a className="text-link" href="/pricing">
              View pricing <ArrowRight size={16} />
            </a>
          </div>
          <ol className="steps">
            <li>
              <span>01</span>
              <div>
                <h3>Add a student or lead</h3>
                <p>
                  Keep the details and conversations that matter close at hand.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Plan the lesson</h3>
                <p>
                  Organise groups, courses, and your teaching schedule with
                  clarity.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Record progress, set homework</h3>
                <p>Make the next step visible to you and your student.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="pricing-section container" id="pricing">
        <div className="pricing-intro">
          <p className="eyebrow">Simple pricing for solo tutors</p>
          <h2>
            Start where you are.
            <br />
            Keep teaching.
          </h2>
          <p>
            Choose the capacity that fits your practice today. Both plans keep
            the work clear and focused.
          </p>
        </div>
        <div className="pricing-grid">
          <article className="price-card price-card-primary">
            <p className="plan-label">Start here</p>
            <h3>Free Tutor</h3>
            <p className="plan-for">For independent tutors starting out.</p>
            <p className="price">
              <strong>$0</strong>
              <span>/month</span>
            </p>
            <p className="capacity">Up to 10 student places</p>
            <ul>
              <li>
                <Check size={16} /> Core CRM and student management
              </li>
              <li>
                <Check size={16} /> Lessons, homework, and leads
              </li>
              <li>
                <Check size={16} /> Payment requests and income tracking
              </li>
            </ul>
            <a className="button" href={signupUrl}>
              Free plan <ArrowRight size={17} />
            </a>
          </article>
          <article className="price-card">
            <p className="plan-label">More capacity</p>
            <h3>Tutor Pro</h3>
            <p className="plan-for">For an established solo tutor.</p>
            <p className="price">
              <strong>$12</strong>
              <span>/month</span>
            </p>
            <p className="capacity">Up to 50 student places</p>
            <ul>
              <li>
                <Check size={16} /> Everything in Free Tutor
              </li>
              <li>
                <Check size={16} /> More room for your students
              </li>
              <li>
                <Check size={16} /> The same focused solo-tutor experience
              </li>
            </ul>
            <a className="button button-outline" href={signupUrl}>
              Choose Tutor Pro <ArrowRight size={17} />
            </a>
          </article>
        </div>
        <p className="enterprise-line">
          Growing beyond a solo practice? <a href="#start">Talk to us.</a>
        </p>
      </section>

      <section className="faq container" id="faq">
        <div className="section-intro">
          <p className="eyebrow">Questions, answered</p>
          <h2>Simple from the start.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <ChevronDown size={19} />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta" id="start">
        <div className="container">
          <GraduationCap size={30} strokeWidth={1.5} />
          <h2>
            Give your teaching
            <br />
            <em>more room to breathe.</em>
          </h2>
          <p>Start with a workspace that understands independent tutoring.</p>
          <a className="button light-button" href={signupUrl}>
            <span>Start with the free plan</span> <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <img src="/logo.png" alt="" />
              <span>Cohora</span>
            </a>
            <p>
              The clear workspace for independent tutors who want more time to
              teach.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <span>Product</span>
              <a href="#how-it-works">How it works</a>
              <a href="/pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <span>Enterprise</span>
              <a href="#start">Talk to us</a>
            </div>
            <div>
              <span>Account</span>
              <a href={signInUrl}>Sign in</a>
              <a href={signupUrl}>Start with the free plan</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} Cohora. Made for the work that matters.
          </p>
          <div>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/refunds">Refunds</a>
            <a href="/data-processing-agreement">DPA</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
