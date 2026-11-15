import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  Check,
  CircleDollarSign,
  Clock3,
  CreditCard,
  GraduationCap,
  MessageSquareText,
  UsersRound,
} from "lucide-react";
import { PricingCards } from "@/components/PricingCards";
import { SignupLink } from "@/components/SignupLink";
import { SiteHeader } from "@/components/SiteHeader";
import { LandingEngagementTracker } from "@/components/LandingEngagementTracker";
import { LandingFaq } from "@/components/LandingFaq";
import { TrackedLandingLink } from "@/components/TrackedLandingLink";
import { signInUrl } from "@/config/dashboard";

const benefits = [
  {
    icon: CircleDollarSign,
    title: "Get paid. Stay on top of your income.",
    copy: "Create payment requests, track income, and see what is still outstanding — all alongside your lessons.",
  },
  {
    icon: CalendarDays,
    title: "Your schedule, always in sight.",
    copy: "See upcoming lessons in one clear calendar. Know who you are teaching, when, and what is next.",
  },
  {
    icon: Clock3,
    title: "Every lesson, accounted for.",
    copy: "Plan sessions, record attendance, and keep each student’s lesson history organized.",
  },
  {
    icon: MessageSquareText,
    title: "Homework without the back-and-forth.",
    copy: "Assign work, review submissions, and give feedback in one place.",
  },
];

const faqs = [
  [
    "Is Cohora really free?",
    "Yes. Free Tutor is $0 per month and includes up to 25 student places, with the core tools you need to manage students, lessons, homework, payment requests, and income tracking.",
  ],
  [
    "Can I accept payments with Stripe or PayPal?",
    "Yes. Tutor plans can connect Stripe or PayPal payment processors, so you can offer the payment methods you have configured to your students.",
  ],
  [
    "How do lesson packages and credits work?",
    "You can sell lesson packages and keep track of the credits attached to a student. As lessons are completed, Cohora helps you see what remains.",
  ],
  [
    "Can I teach individual students and groups?",
    "Yes. Cohora supports one-to-one lessons and group classes, with the right students and attendance connected to each lesson.",
  ],
  [
    "What can my students access?",
    "Students can use their own workspace to see lessons, homework, submissions, feedback, and the learning information that is relevant to them.",
  ],
  [
    "Can I import my existing students?",
    "You can add your students and their key details as you get started. If you are moving a larger existing practice, contact us to talk through the best setup.",
  ],
  [
    "What happens when I outgrow my plan?",
    "Move to the plan that matches your capacity. Tutor Pro supports up to 75 students, while Studio, Academy, and Enterprise are available for larger teaching teams and schools.",
  ],
  [
    "Can I cancel or downgrade anytime?",
    "Yes. You can cancel Tutor Pro through the billing portal at any time. Cancellation stops the next renewal, and you keep access until the end of your current paid period.",
  ],
] as const;

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

function ProductShowcase() {
  return (
    <section className="product-showcase" id="product">
      <div className="container">
        <div className="showcase-intro">
          <p className="eyebrow">One connected workspace</p>
          <h2>See your whole practice at a glance.</h2>
          <p>
            No switching between spreadsheets, messages, and calendars. Your
            work stays together.
          </p>
        </div>
        <div className="showcase-grid">
          <article className="showcase-card calendar-showcase">
            <div className="showcase-copy">
              <span>Calendar</span>
              <h3>Know what&apos;s coming up</h3>
              <p>See your teaching schedule in one clear calendar.</p>
            </div>
            <div className="showcase-window">
              <div className="showcase-window-bar">This week</div>
              <div className="calendar-grid">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <i className="calendar-slot blue">10:00 Maths</i>
                <i className="calendar-slot mint">14:30 English</i>
                <i className="calendar-slot lilac">17:00 Science</i>
              </div>
            </div>
          </article>
          <article className="showcase-card payments-showcase">
            <div className="showcase-copy">
              <span>Payments</span>
              <h3>Keep track of your income</h3>
              <p>See payments and outstanding balances without spreadsheets.</p>
            </div>
            <div className="showcase-window payments-window">
              <div className="income-total">
                <small>This month</small>
                <b>£720</b>
              </div>
              <div className="income-bar">
                <i />
              </div>
              <div className="payment-line">
                <span>Ella Thompson</span>
                <b>Paid</b>
              </div>
              <div className="payment-line">
                <span>James Wilson</span>
                <em>Due</em>
              </div>
            </div>
          </article>
          <article className="showcase-card student-showcase">
            <div className="showcase-copy">
              <span>Students</span>
              <h3>Everything about a student, together</h3>
              <p>Open a student record and find their teaching history.</p>
            </div>
            <div className="showcase-window student-window">
              <div className="student-profile">
                <b>E</b>
                <span>
                  <strong>Ella Thompson</strong>
                  <small>Year 9 · Mathematics</small>
                </span>
              </div>
              <div className="student-tabs">
                <span>Lessons</span>
                <span>Homework</span>
                <span>Notes</span>
              </div>
              <div className="student-history">
                <i />
                <span>Algebra · Complete</span>
                <i />
                <span>Fractions · Complete</span>
              </div>
            </div>
          </article>
          <article className="showcase-card homework-showcase">
            <div className="showcase-copy">
              <span>Homework</span>
              <h3>Feedback stays in the conversation</h3>
              <p>Manage assignments, submissions, and feedback in one place.</p>
            </div>
            <div className="showcase-window homework-window">
              <div className="homework-title">
                <b>Algebra practice</b>
                <span>Due Friday</span>
              </div>
              <div className="homework-submission">
                <i>J</i>
                <span>
                  <strong>James Wilson</strong>
                  <small>Submitted today</small>
                </span>
                <b>Review</b>
              </div>
              <div className="feedback-note">
                Great progress — revisit question 4 before our next lesson.
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function TeachingVisual() {
  return (
    <div
      className="spotlight-visual teaching-visual"
      aria-label="Group lesson and course view"
    >
      <div className="spotlight-bar">
        <span>GCSE Mathematics</span>
        <b>Course</b>
      </div>
      <div className="course-tree">
        <div>
          <i className="tree-dot blue" />
          <span>Algebra foundations</span>
          <em>4 lessons</em>
        </div>
        <div>
          <i className="tree-dot mint" />
          <span>Functions and graphs</span>
          <em>3 lessons</em>
        </div>
        <div>
          <i className="tree-dot lilac" />
          <span>Exam practice</span>
          <em>5 lessons</em>
        </div>
      </div>
      <div className="group-lesson">
        <span>Thursday · 17:00</span>
        <strong>Year 10 group lesson</strong>
        <p>
          <i>EM</i>
          <i>JW</i>
          <i>LS</i> 3 students attending
        </p>
      </div>
    </div>
  );
}

function PaymentsVisual() {
  return (
    <div
      className="spotlight-visual payments-spotlight"
      aria-label="Lesson credits and payments view"
    >
      <div className="credit-card">
        <span>Ella Thompson</span>
        <strong>
          6 <small>lessons left</small>
        </strong>
        <i>12 lesson package</i>
      </div>
      <div className="payment-methods">
        <span>Payment methods</span>
        <div>
          <b>stripe</b>
          <b>PayPal</b>
        </div>
      </div>
      <div className="payment-template">
        <span>GCSE lesson package</span>
        <b>£360</b>
        <small>Send payment request</small>
      </div>
    </div>
  );
}

function StudentPortalVisual() {
  return (
    <div
      className="spotlight-visual portal-visual"
      aria-label="Student homework and feedback view"
    >
      <div className="portal-heading">
        <i>JW</i>
        <span>
          <strong>James&apos;s workspace</strong>
          <small>Homework · Mathematics</small>
        </span>
      </div>
      <div className="portal-task">
        <b>Quadratic equations</b>
        <span>Submitted</span>
        <p>Complete questions 1–8 before Friday&apos;s lesson.</p>
      </div>
      <div className="portal-feedback">
        <i>AM</i>
        <span>
          <strong>Anna Morgan</strong>
          <small>Nice work. Let&apos;s revisit question 6 together.</small>
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  const showFuturePlans = true;

  return (
    <main>
      <LandingEngagementTracker />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="eyebrow accent-text">
            <span />
            Tutoring management software
          </p>
          <h1>
            Less admin.
            <br />
            <em>More teaching.</em>
          </h1>
          <p className="hero-lede">
            Manage lessons, scheduling, homework, and payments in one place.
            Everything you need to run your tutoring practice, without the extra
            admin.
          </p>
          <div className="hero-actions">
            <SignupLink className="button" analyticsSource="hero">
              Start free <ArrowRight size={17} />
            </SignupLink>
            <TrackedLandingLink
              className="text-link"
              eventName="landing_navigation_clicked"
              eventProperties={{ label: "how_it_works", placement: "hero" }}
              href="#how-it-works"
            >
              See how it works <span>↓</span>
            </TrackedLandingLink>
          </div>
          <p className="hero-note">
            <Check size={15} /> Free for up to 25 students
          </p>
        </div>
        <div className="hero-product">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <ProductPreview />
        </div>
      </section>

      <section className="benefits container" id="features">
        <div className="section-intro">
          <p className="eyebrow">Everything you need, together</p>
          <h2>
            Run your practice without
            <br />
            running between tools.
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

      <section className="feature-spotlight" id="teaching">
        <div className="container spotlight-layout">
          <TeachingVisual />
          <div className="spotlight-copy">
            <p className="eyebrow">Teaching your way</p>
            <h2>One student or a whole group. You&apos;re covered.</h2>
            <p>
              Whether you teach one-to-one or run group classes, Cohora adapts
              to the way you teach.
            </p>
            <ul>
              <li>
                <UsersRound size={18} />{" "}
                <span>
                  <b>Individual and group lessons</b>Manage private sessions and
                  group classes side by side.
                </span>
              </li>
              <li>
                <BookOpenCheck size={18} />{" "}
                <span>
                  <b>Courses and topics</b>Keep subjects structured and know
                  what comes next.
                </span>
              </li>
              <li>
                <Clock3 size={18} />{" "}
                <span>
                  <b>Lesson history and progress</b>Record attendance, notes,
                  and progress after each lesson.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="feature-spotlight feature-spotlight-dark"
        id="payments"
      >
        <div className="container spotlight-layout spotlight-layout-reverse">
          <div className="spotlight-copy">
            <p className="eyebrow">Payments on your terms</p>
            <h2>You teach. Cohora keeps count.</h2>
            <p>
              Spend less time calculating lesson balances and chasing payments.
            </p>
            <ul>
              <li>
                <Check size={18} />{" "}
                <span>
                  <b>Lesson packages that track themselves</b>See remaining
                  lesson credits without updating a spreadsheet.
                </span>
              </li>
              <li>
                <CreditCard size={18} />{" "}
                <span>
                  <b>Accept payments your way</b>Connect Stripe or PayPal and
                  offer your configured payment methods.
                </span>
              </li>
              <li>
                <CircleDollarSign size={18} />{" "}
                <span>
                  <b>Flexible payment requests</b>Create templates, send
                  requests, and track paid and outstanding amounts.
                </span>
              </li>
            </ul>
          </div>
          <PaymentsVisual />
        </div>
      </section>

      <section
        className="feature-spotlight student-spotlight"
        id="student-experience"
      >
        <div className="container spotlight-layout">
          <StudentPortalVisual />
          <div className="spotlight-copy">
            <p className="eyebrow">A workspace for your students, too</p>
            <h2>Keep students involved without the chat chaos.</h2>
            <p>
              Keep students involved without managing everything through chat
              messages.
            </p>
            <ul>
              <li>
                <CalendarDays size={18} />{" "}
                <span>
                  <b>Their lessons, clearly organized</b>Students can see their
                  own lessons, history, and upcoming work.
                </span>
              </li>
              <li>
                <MessageSquareText size={18} />{" "}
                <span>
                  <b>Homework from assignment to feedback</b>Receive submissions
                  and review work in context.
                </span>
              </li>
              <li>
                <Check size={18} />{" "}
                <span>
                  <b>Progress they can follow</b>Keep lesson records and
                  feedback accessible.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="workflow">
        <div className="container workflow-inner">
          <div className="workflow-copy">
            <p className="eyebrow">How it works</p>
            <h2>
              From first enquiry
              <br />
              to getting paid.
            </h2>
            <p>
              Your students, lessons, homework, and payments are not separate
              tasks. Cohora keeps them connected.
            </p>
            <TrackedLandingLink
              className="text-link"
              eventName="landing_navigation_clicked"
              eventProperties={{ label: "pricing", placement: "workflow" }}
              href="/pricing"
            >
              View pricing <ArrowRight size={16} />
            </TrackedLandingLink>
          </div>
          <ol className="steps">
            <li>
              <span>01</span>
              <div>
                <h3>Add a lead or student</h3>
                <p>
                  Keep contact details and enquiries organized. Turn prospective
                  students into active learners.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Plan your teaching</h3>
                <p>
                  Create courses, organize groups, and schedule individual or
                  group lessons.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Teach and record progress</h3>
                <p>
                  Take attendance, record lesson outcomes, and assign homework.
                </p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Collect and track payments</h3>
                <p>
                  Accept payments, track lesson balances, and keep your income
                  organized.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <ProductShowcase />

      <section className="pricing-section container" id="pricing">
        <div className="pricing-intro">
          <p className="eyebrow">Simple pricing for solo tutors</p>
          <h2>
            Start free.
            <br />
            Grow when you need to.
          </h2>
          <p>
            Choose the capacity that fits your practice today. Both plans keep
            the tools you already know as your tutoring business grows.
          </p>
        </div>
        <PricingCards showFuturePlans={showFuturePlans} />
        <p className="enterprise-line">
          Growing beyond a solo practice?{" "}
          <TrackedLandingLink
            eventName="sales_contacted"
            eventProperties={{ source: "pricing_section" }}
            href="mailto:sales@cohora.org"
          >
            Talk to us.
          </TrackedLandingLink>
        </p>
      </section>

      <section className="faq container" id="faq">
        <div className="section-intro">
          <p className="eyebrow">Questions, answered</p>
          <h2>Everything you need to know to start.</h2>
        </div>
        <LandingFaq faqs={faqs} />
      </section>

      <section className="final-cta" id="start">
        <div className="container">
          <GraduationCap size={30} strokeWidth={1.5} />
          <h2>
            Your tutoring practice,
            <br />
            <em>all in one place.</em>
          </h2>
          <p>
            Spend less time managing your work and more time teaching. Start
            free and grow at your own pace.
          </p>
          <SignupLink
            className="button light-button"
            analyticsSource="final_cta"
          >
            <span>Start free</span> <ArrowRight size={17} />
          </SignupLink>
          <small className="final-cta-note">Free for up to 25 students.</small>
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
              <a href="#features">Features</a>
              <a href="#how-it-works">How it works</a>
              <a href="/pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <span>Enterprise</span>
              <a href="mailto:sales@cohora.org">Talk to us</a>
            </div>
            <div>
              <span>Account</span>
              <a href={signInUrl}>Sign in</a>
              <SignupLink analyticsSource="footer">
                Start with the free plan
              </SignupLink>
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
