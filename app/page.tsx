const navItems = [
  { label: "Services", href: "#services" },
  { label: "Method", href: "#method" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const credibility = [
  "Enterprise operations lens",
  "AI workflow design",
  "Team enablement",
  "Client delivery systems",
  "Built for non-technical teams",
];

const problems = [
  "Scattered AI experimentation",
  "Manual workflows slowing delivery",
  "Teams unsure how to operationalize AI",
];

const services = [
  {
    title: "AI Training for Teams",
    description:
      "Hands-on training for business teams that need to use AI confidently in daily work without technical overwhelm.",
    deliverables: [
      "Role-based AI use cases",
      "Prompting and workflow training",
      "Team playbooks",
      "Practical exercises",
    ],
  },
  {
    title: "AI Workflow Automation",
    description:
      "Turn repeated business tasks into structured AI-assisted workflows for sales, client success, operations, and internal delivery.",
    deliverables: [
      "Workflow mapping",
      "Automation opportunity assessment",
      "Prompt and process libraries",
      "Lightweight implementation roadmap",
    ],
  },
  {
    title: "Executive AI Enablement",
    description:
      "Strategic sessions for leaders who need clarity on where AI belongs, what to prioritize, and how to govern adoption responsibly.",
    deliverables: [
      "AI readiness review",
      "Opportunity map",
      "90-day adoption plan",
      "Governance and accountability model",
    ],
  },
  {
    title: "Client Delivery Systems",
    description:
      "Design repeatable systems for proposals, meeting prep, follow-ups, recaps, onboarding, reporting, and client communications.",
    deliverables: [
      "Client workflow blueprint",
      "Reusable templates",
      "AI-assisted operating rhythm",
      "Quality-control checklist",
    ],
  },
];

const method = [
  {
    title: "Clarify",
    copy:
      "Identify the work that matters, the friction slowing the team down, and the outcomes AI should support.",
  },
  {
    title: "Design",
    copy:
      "Map the workflow, define ownership, and create reusable prompts, templates, and decision rules.",
  },
  {
    title: "Enable",
    copy: "Train the team through practical examples based on their real work.",
  },
  {
    title: "Operationalize",
    copy:
      "Turn the system into a repeatable rhythm with measurement, governance, and continuous improvement.",
  },
];

const outcomes = [
  "Faster client follow-up",
  "Better meeting preparation",
  "More consistent team execution",
  "Reduced manual admin",
  "Stronger onboarding and enablement",
  "Cleaner operating rhythms",
  "Better use of existing tools",
  "More confident AI adoption",
];

const offers = [
  {
    title: "AI Clarity Session",
    bestFor: "Leaders exploring where to start.",
    format: "90-minute strategy session",
    includes: [
      "Current-state discussion",
      "Top AI opportunities",
      "Risk and readiness scan",
      "Recommended next steps",
    ],
    cta: "Start with Clarity",
  },
  {
    title: "AI Workflow Sprint",
    bestFor: "Teams with one painful repeated process.",
    format: "2-3 week sprint",
    includes: [
      "Workflow mapping",
      "AI prompt system",
      "Automation blueprint",
      "Team walkthrough",
    ],
    cta: "Build a Workflow",
    featured: true,
  },
  {
    title: "AI Team Enablement Program",
    bestFor: "Teams ready to adopt AI across daily work.",
    format: "4-6 week training and implementation program",
    includes: [
      "Role-based training",
      "Practical workflow labs",
      "Prompt library",
      "Adoption roadmap",
      "Leadership summary",
    ],
    cta: "Train the Team",
  },
];

const useCases = [
  "Client meeting preparation",
  "Sales follow-up and outbound workflows",
  "Proposal and recap drafting",
  "Customer success account planning",
  "Internal knowledge retrieval",
  "Training material creation",
  "Executive briefing preparation",
  "Renewal and risk-review workflows",
  "Team onboarding and SOP creation",
  "Voice-of-customer synthesis",
];

const process = [
  {
    title: "Discovery",
    copy: "We clarify your team, workflows, goals, and bottlenecks.",
  },
  {
    title: "Prioritization",
    copy:
      "We identify the highest-value AI opportunities instead of chasing every tool.",
  },
  {
    title: "Build",
    copy:
      "We create practical workflows, prompts, templates, and enablement assets.",
  },
  {
    title: "Train",
    copy: "We teach your team how to use the system confidently.",
  },
  {
    title: "Improve",
    copy: "We refine based on adoption, quality, and measurable outcomes.",
  },
];

const faqs = [
  {
    question: "Do you work with non-technical teams?",
    answer:
      "Yes. The work is designed for business teams that need practical AI adoption without becoming technical specialists.",
  },
  {
    question: "Do we need to buy new software?",
    answer:
      "Not necessarily. The first step is usually to improve how your team uses the tools and workflows already available.",
  },
  {
    question: "Can this support sales or client success teams?",
    answer:
      "Yes. Common use cases include meeting preparation, follow-ups, account planning, onboarding, recaps, proposals, and renewal workflows.",
  },
  {
    question: "Is this training or implementation?",
    answer:
      "It can be either, but the strongest results usually come from combining both: teach the team, then help them apply AI to real workflows.",
  },
  {
    question: "Do you build automations?",
    answer:
      "Yes, where appropriate. The focus is on practical, lightweight automation that improves execution and reduces repetitive work.",
  },
  {
    question: "How do we start?",
    answer:
      "Start with a strategy call or clarity session to identify the highest-value workflow to improve first.",
  },
];

function SectionIntro({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.18em] ${
            light ? "text-mist" : "text-royal"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-semibold leading-tight md:text-5xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-5 text-lg leading-8 ${
            light ? "text-blue-100" : "text-slatecopy"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function PrimaryButton({
  children,
  href = "#contact",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:bg-blue-700"
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  children,
  href,
  light = false,
}: {
  children: React.ReactNode;
  href: string;
  light?: boolean;
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
        light
          ? "border-white/30 text-white hover:bg-white/10"
          : "border-navy/15 text-navy hover:border-royal hover:text-royal"
      }`}
    >
      {children}
    </a>
  );
}

function WorkflowVisual() {
  return (
    <div
      aria-label="Workflow from team training to workflow mapping to repeatable automation"
      className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-white/70 bg-white p-5 shadow-soft"
    >
      <div className="absolute -right-3 top-8 h-16 w-16 rounded-full border border-gold/40 bg-gold/10" />
      <div className="absolute -bottom-4 left-8 h-20 w-20 rounded-full border border-royal/20 bg-royal/10" />
      <div className="relative rounded-[1.5rem] bg-gradient-to-br from-mist via-white to-ivory p-5">
        {["Train the team", "Map the workflow", "Automate repeatable work"].map(
          (item, index) => (
            <div key={item} className="relative">
              <div className="flex items-center gap-4 rounded-2xl border border-white bg-white/88 p-4 shadow-crisp backdrop-blur">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-base font-semibold text-navy">{item}</p>
                  <p className="mt-1 text-sm leading-6 text-slatecopy">
                    {index === 0
                      ? "Shared language and practical confidence."
                      : index === 1
                        ? "Clear steps, ownership, and decision points."
                        : "A lighter operating rhythm for repeated work."}
                  </p>
                </div>
              </div>
              {index < 2 ? (
                <div className="mx-10 h-8 border-l border-dashed border-royal/35" />
              ) : null}
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur-xl">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8"
        >
          <a href="#" className="text-base font-semibold text-navy">
            Arete Systems
          </a>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-slatecopy">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-royal"
              >
                {item.label}
              </a>
            ))}
            <PrimaryButton>Book a Strategy Call</PrimaryButton>
          </div>
        </nav>
      </header>

      <section className="overflow-hidden bg-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
              Operational excellence, powered by practical AI.
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] text-navy md:text-6xl">
              Arete Systems helps modern business teams turn AI into better
              workflows, faster decisions, and stronger execution.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slatecopy">
              I help leaders and teams turn AI from scattered experiments into
              repeatable workflows for sales, client success, operations, and
              internal delivery.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton>Book a Strategy Call</PrimaryButton>
              <SecondaryButton href="#services">Explore Services</SecondaryButton>
            </div>
          </div>
          <WorkflowVisual />
        </div>
      </section>

      <section aria-label="Credibility" className="border-y border-navy/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 py-6 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
          {credibility.map((item) => (
            <div
              key={item}
              className="rounded-full border border-navy/10 bg-white px-4 py-3 text-center text-sm font-semibold text-slatecopy"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="Most teams do not have an AI problem. They have an adoption problem."
            copy="Your team may already have access to powerful tools, but the work still lives across meetings, inboxes, spreadsheets, documents, and manual follow-ups. AI only creates value when it is connected to real workflows, clear ownership, and measurable outcomes."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {problems.map((item, index) => (
              <article
                key={item}
                className="rounded-3xl border border-navy/10 bg-white p-7 shadow-crisp transition hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="text-sm font-semibold text-gold">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-navy">{item}</h3>
                <p className="mt-3 leading-7 text-slatecopy">
                  A practical adoption system connects the tool, the work, and
                  the team rhythm so value can show up consistently.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="Services designed for practical AI adoption." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-white bg-white p-7 shadow-crisp transition hover:-translate-y-1 hover:shadow-soft"
              >
                <h3 className="text-2xl font-semibold text-navy">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slatecopy">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slatecopy">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-royal"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="method" className="bg-navy px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            light
            eyebrow="Signature method"
            title="The method: from AI interest to operating rhythm."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {method.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-white transition hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <span className="text-sm font-semibold text-gold">
                  Step {index + 1}
                </span>
                <h3 className="mt-5 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 leading-7 text-blue-100">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="Built for measurable business outcomes." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="rounded-2xl border border-navy/10 bg-white p-5 text-base font-semibold text-navy shadow-crisp"
              >
                {outcome}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="Choose the starting point that fits your team." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className={`rounded-3xl border p-7 shadow-crisp transition hover:-translate-y-1 hover:shadow-soft ${
                  offer.featured
                    ? "border-royal bg-white"
                    : "border-navy/10 bg-white"
                }`}
              >
                {offer.featured ? (
                  <p className="mb-5 inline-flex rounded-full bg-royal/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-royal">
                    Focused sprint
                  </p>
                ) : null}
                <h3 className="text-2xl font-semibold text-navy">
                  {offer.title}
                </h3>
                <dl className="mt-5 space-y-4 text-sm leading-6">
                  <div>
                    <dt className="font-semibold text-navy">Best for</dt>
                    <dd className="text-slatecopy">{offer.bestFor}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Format</dt>
                    <dd className="text-slatecopy">{offer.format}</dd>
                  </div>
                </dl>
                <ul className="mt-6 space-y-3">
                  {offer.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slatecopy">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-royal px-5 py-3 text-sm font-semibold text-royal transition hover:bg-royal hover:text-white"
                >
                  {offer.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="Where AI can start creating value quickly." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {useCases.map((useCase) => (
              <div
                key={useCase}
                className="rounded-2xl border border-navy/10 bg-white p-5 text-sm font-semibold leading-6 text-slatecopy transition hover:border-royal/35 hover:text-navy"
              >
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="Simple, structured, practical." />
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {process.map((step, index) => (
              <article key={step.title} className="relative rounded-3xl bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-royal text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slatecopy">
                  {step.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="rounded-[2rem] bg-navy p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              About Arete Systems
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Built by an operator, not a theorist.
            </h2>
          </div>
          <p className="text-lg leading-9 text-slatecopy">
            Arete Systems brings a practical operations lens to AI adoption.
            The work spans business operations, customer success, sales
            operations, analytics, client delivery, and enterprise stakeholder
            management. Arete Systems helps teams move beyond AI curiosity and
            into structured execution — with workflows, training,
            accountability, and business outcomes at the centre.
          </p>
        </div>
      </section>

      <section className="bg-ivory px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionIntro title="Frequently asked questions." />
          <div className="mt-12 divide-y divide-navy/10 rounded-3xl border border-navy/10 bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-navy">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="text-2xl font-light text-royal transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slatecopy">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Ready to turn AI into a working system?
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            If your team is experimenting with AI but still relying on manual
            work, scattered knowledge, and inconsistent processes, the next step
            is not another tool. The next step is structure.
          </p>
          <div className="mt-9">
            <PrimaryButton>Book a Strategy Call</PrimaryButton>
          </div>
        </div>
      </section>

      <footer className="bg-white px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-navy">Arete Systems</p>
            <p className="mt-2 text-sm text-slatecopy">
              Operational excellence, powered by practical AI.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-slatecopy">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-royal">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="font-semibold text-royal">
              Book a Strategy Call
            </a>
          </div>
          <p className="text-sm text-slatecopy">
            © {new Date().getFullYear()} Arete Systems
          </p>
        </div>
      </footer>
    </main>
  );
}
