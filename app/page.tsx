import ContactForm from "./ContactForm";
import ScorecardForm from "./ScorecardForm";

const navItems = [
  { label: "Scorecard", href: "#scorecard" },
  { label: "Services", href: "#services" },
  { label: "Method", href: "#method" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const valueProps = [
  {
    title: "Practical AI adoption",
    copy: "AI applied to real business workflows, not abstract demos.",
  },
  {
    title: "Operations-first design",
    copy: "Clear ownership, repeatable processes, and measurable outcomes.",
  },
  {
    title: "Built for non-technical teams",
    copy: "Workflow systems your team can understand, use, and improve.",
  },
];

const scorecardExamples = [
  "Client meeting preparation",
  "Follow-up and recap creation",
  "Account planning",
  "Renewal risk review",
  "Proposal preparation",
  "Internal reporting",
  "SOP creation",
  "Onboarding or handoff process",
  "Executive briefing creation",
];

const scorecardLearnings = [
  "Whether the workflow is ready for AI support",
  "Where manual effort is creating drag",
  "Whether the process has enough structure for automation",
  "What the best next step should be",
];

const scorecardBestFor = [
  "Repeated admin-heavy workflows",
  "Client-facing workflows",
  "Internal reporting workflows",
  "Sales or customer success handoffs",
  "SOP, onboarding, and knowledge workflows",
];

const operationalPatterns = [
  "AI is used inconsistently across the team.",
  "Good prompts live in one person's head.",
  "Follow-ups and recaps take too long.",
  "Client knowledge is scattered.",
  "Managers cannot easily see what is working.",
  "Teams experiment with tools without changing how work gets done.",
];

const teamTypes = [
  "Client success",
  "Sales operations",
  "Business operations",
  "Consulting and delivery",
  "Enablement and onboarding",
  "Small leadership teams trying to scale execution",
];

const services = [
  {
    title: "AI Workflow Audit",
    subtitle: "Find the highest-value workflow to improve first.",
    description:
      "A focused assessment of where AI can remove friction, improve consistency, and strengthen execution across a real business workflow.",
    bestFor:
      "Leaders who know AI could help but need clarity on where to start.",
    listTitle: "What you get",
    items: [
      "Current-state workflow review",
      "AI opportunity map",
      "Friction and risk assessment",
      "Prioritized use cases",
      "Recommended first workflow to improve",
      "Practical next-step roadmap",
    ],
    outcome:
      "A clear, ranked view of where AI can create practical operational value.",
    cta: "Start with an Audit",
  },
  {
    title: "AI Operations Workflow Sprint",
    subtitle:
      "Redesign one messy workflow into a repeatable AI-assisted system.",
    description:
      "A practical sprint to map, redesign, and package one repeated workflow so the team can use AI with consistency and accountability.",
    bestFor:
      "Teams with a repeated process that is slow, manual, inconsistent, or too dependent on individual habits.",
    listTitle: "What you get",
    items: [
      "Workflow map",
      "AI-assisted process design",
      "Prompt library",
      "Reusable templates",
      "SOP or playbook",
      "Quality-control checklist",
      "Team walkthrough",
      "Adoption recommendations",
    ],
    outcome:
      "One practical AI-assisted workflow your team can reuse and improve.",
    cta: "Build a Workflow",
    featured: true,
  },
  {
    title: "AI Team Enablement Program",
    subtitle: "Train your team on AI through their actual work.",
    description:
      "Hands-on enablement built around the team's daily work, so AI adoption becomes useful, consistent, and easier to manage.",
    bestFor:
      "Business teams that need confidence, shared standards, and practical examples tied to their roles.",
    listTitle: "What you get",
    items: [
      "Role-based AI training",
      "Practical workflow labs",
      "Prompting guidance for business users",
      "Team use-case library",
      "AI usage guardrails",
      "Workflow templates",
      "Leadership summary",
    ],
    outcome:
      "A team that can apply AI more consistently to real work, with clearer expectations and better habits.",
    cta: "Train the Team",
  },
  {
    title: "Fractional AI Operations Advisory",
    subtitle:
      "Ongoing guidance for leaders turning AI into operating discipline.",
    description:
      "Steady advisory support for leaders who need help prioritizing AI use cases, reviewing workflows, and building operating discipline over time.",
    bestFor:
      "Leadership teams that want practical support as AI adoption becomes part of how the business runs.",
    listTitle: "What you get",
    items: [
      "Monthly advisory sessions",
      "AI adoption prioritization",
      "Workflow review",
      "Team enablement guidance",
      "Operating model recommendations",
      "Leadership decision support",
    ],
    outcome:
      "A clearer operating rhythm for AI adoption, with better decisions and less tool confusion.",
    cta: "Discuss Advisory Support",
  },
];

const method = [
  {
    title: "Clarify",
    copy: "Define the work that matters, the friction slowing the team down, and the business outcome the workflow should support.",
  },
  {
    title: "Prioritize",
    copy: "Choose the workflow where practical AI can create value quickly, without chasing every possible tool or use case.",
  },
  {
    title: "Design",
    copy: "Map the workflow, define ownership, and shape the prompts, templates, rules, and handoffs the team will actually use.",
  },
  {
    title: "Build",
    copy: "Turn the design into a practical operating system with reusable assets, quality checks, and clear steps.",
  },
  {
    title: "Enable",
    copy: "Train the team through their real work so adoption is practical, relevant, and easier to sustain.",
  },
  {
    title: "Improve",
    copy: "Review usage, quality, and outcomes so the system can mature instead of becoming another abandoned initiative.",
  },
];

const outcomes = [
  {
    title: "Faster execution",
    copy: "Repeated work moves with fewer manual steps and clearer handoffs.",
  },
  {
    title: "More consistent work",
    copy: "Teams use shared prompts, templates, and quality standards.",
  },
  {
    title: "Better client readiness",
    copy: "Prep, recaps, and account context become easier to produce and reuse.",
  },
  {
    title: "Stronger operating rhythm",
    copy: "AI becomes part of how work is managed, reviewed, and improved.",
  },
  {
    title: "Less tool confusion",
    copy: "The team focuses on useful workflows instead of scattered experimentation.",
  },
  {
    title: "More confident adoption",
    copy: "Non-technical teams know when, where, and how to use AI well.",
  },
];

const useCaseGroups = [
  {
    title: "Client Success",
    items: [
      "Account planning",
      "Renewal preparation",
      "Risk review summaries",
      "Client meeting prep",
      "QBR preparation",
      "Follow-up emails and recaps",
      "Client onboarding workflows",
    ],
  },
  {
    title: "Sales Operations",
    items: [
      "Handoff workflows",
      "CRM note cleanup",
      "Proposal support",
      "Pipeline review preparation",
      "Meeting research",
      "Internal briefing creation",
      "Sales process documentation",
    ],
  },
  {
    title: "Business Operations",
    items: [
      "SOP creation",
      "Process documentation",
      "Internal knowledge retrieval",
      "Team onboarding",
      "Executive summaries",
      "Status reporting",
      "Decision logs",
    ],
  },
  {
    title: "Consulting and Delivery Teams",
    items: [
      "Discovery call synthesis",
      "Client recap drafts",
      "Scope intake",
      "Delivery checklists",
      "Reusable playbooks",
      "Project handoff notes",
      "Quality-control reviews",
    ],
  },
];

const offers = [
  {
    title: "AI Workflow Audit",
    bestFor: "Leaders unsure where to start",
    format: "Focused assessment",
    outcome: "Prioritized AI opportunity map",
  },
  {
    title: "AI Operations Workflow Sprint",
    bestFor: "Teams with one messy repeated process",
    format: "Project sprint",
    outcome: "One AI-assisted workflow system",
  },
  {
    title: "AI Team Enablement Program",
    bestFor: "Teams needing practical AI adoption",
    format: "Training + labs",
    outcome: "Confident, consistent team usage",
  },
  {
    title: "Fractional AI Operations Advisory",
    bestFor: "Leaders needing ongoing support",
    format: "Monthly advisory",
    outcome: "Better AI operating discipline",
  },
];

const faqs = [
  {
    question: "Is this generic AI training?",
    answer:
      "No. Training is tied to the team's actual workflows, roles, and operating needs. The goal is practical adoption, not tool tourism.",
  },
  {
    question: "Do we need to buy new AI software?",
    answer:
      "Not necessarily. The starting point is usually the workflow itself. The right tools come after the work is clear.",
  },
  {
    question: "Do you work with non-technical teams?",
    answer:
      "Yes. Arete Systems is designed for business teams that need practical AI systems without becoming technical specialists.",
  },
  {
    question: "Can you help us choose the right first use case?",
    answer:
      "Yes. The AI Workflow Audit is built to identify and prioritize the first workflow worth improving.",
  },
  {
    question: "Do you build automations?",
    answer:
      "Where appropriate, yes. The focus is lightweight, practical automation that improves execution and reduces repetitive work.",
  },
  {
    question: "Is this suitable for client success or sales operations?",
    answer:
      "Yes. Common workflows include account planning, handoffs, meeting preparation, follow-ups, renewal preparation, proposals, and reporting.",
  },
  {
    question: "What is the best way to start?",
    answer:
      "Start with a strategy call to identify the workflow where structure and practical AI could create the most value first.",
  },
];

const footerServices = [
  "AI Workflow Audit",
  "AI Operations Workflow Sprint",
  "AI Team Enablement",
  "Fractional AI Operations Advisory",
];

function SectionIntro({
  eyebrow,
  title,
  copy,
  light = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
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

function SystemVisual() {
  const steps = [
    {
      title: "Clarify the work",
      copy: "The workflow, owner, inputs, outputs, and decision points become visible.",
    },
    {
      title: "Design the system",
      copy: "AI is connected to prompts, templates, handoffs, and quality checks.",
    },
    {
      title: "Enable the team",
      copy: "People learn the system through the real work they need to execute.",
    },
  ];

  return (
    <div
      aria-label="Workflow from clarification to system design to team enablement"
      className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-white/70 bg-white p-5 shadow-soft"
    >
      <div className="relative rounded-[1.5rem] bg-gradient-to-br from-mist via-white to-ivory p-5">
        {steps.map((item, index) => (
          <div key={item.title} className="relative">
            <div className="flex items-start gap-4 rounded-2xl border border-white bg-white/90 p-4 shadow-crisp backdrop-blur">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                0{index + 1}
              </span>
              <div>
                <p className="text-base font-semibold text-navy">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-slatecopy">
                  {item.copy}
                </p>
              </div>
            </div>
            {index < steps.length - 1 ? (
              <div className="mx-10 h-8 border-l border-dashed border-royal/35" />
            ) : null}
          </div>
        ))}
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
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
              Operational excellence, powered by practical AI.
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] text-navy md:text-6xl">
              Turn AI experiments into operating systems your team actually
              uses.
            </h1>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-8 text-slatecopy">
              <p>
                Most business teams are not short on tools. They are short on
                structure.
              </p>
              <p>
                Arete Systems helps client success, sales operations, business
                operations, and delivery teams redesign messy workflows, apply
                AI where it creates real value, and build repeatable systems
                for faster execution.
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton>Book a Strategy Call</PrimaryButton>
              <SecondaryButton href="#scorecard">Take the Scorecard</SecondaryButton>
              <SecondaryButton href="#services">Explore Services</SecondaryButton>
            </div>
          </div>
          <SystemVisual />
        </div>
      </section>

      <section aria-label="Core value" className="border-y border-navy/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 md:grid-cols-3 lg:px-8">
          {valueProps.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-navy/10 bg-white p-5 shadow-crisp"
            >
              <h2 className="text-lg font-semibold text-navy">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slatecopy">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="scorecard" className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
              Free AI Workflow Readiness Scorecard
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-navy md:text-5xl">
              Find the workflow your team should improve with AI first.
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-slatecopy">
              <p>
                Not every workflow is ready for AI. The best starting point is
                usually a process that is repeated often, takes too much manual
                effort, creates inconsistent output, or depends on scattered
                knowledge.
              </p>
              <p>
                Use this 10-minute scorecard to assess one workflow and see
                whether it is a strong candidate for an AI-assisted operating
                system.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#scorecard">Take the Scorecard</PrimaryButton>
              <SecondaryButton href="#contact">Book an AI Clarity Session</SecondaryButton>
            </div>

            <div className="mt-10 grid gap-6">
              <div className="rounded-3xl bg-white p-6 shadow-crisp">
                <h3 className="text-lg font-semibold text-navy">
                  What you will learn
                </h3>
                <ul className="mt-4 grid gap-3">
                  {scorecardLearnings.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slatecopy">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-royal"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-crisp">
                <h3 className="text-lg font-semibold text-navy">
                  Best for assessing
                </h3>
                <ul className="mt-4 grid gap-3">
                  {scorecardBestFor.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slatecopy">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-navy/10 bg-white p-6">
                <h3 className="text-lg font-semibold text-navy">
                  Examples of workflows to assess
                </h3>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {scorecardExamples.map((item) => (
                    <li key={item} className="text-sm leading-6 text-slatecopy">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="rounded-3xl bg-navy p-6 text-sm font-semibold leading-7 text-white">
                No hype. No generic prompt pack. Just a practical way to
                identify where AI can improve real work.
              </p>
            </div>
          </div>
          <ScorecardForm />
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            align="left"
            title="AI is not the hard part. Operationalizing it is."
            copy="Many teams now have access to AI tools, but still rely on scattered notes, manual follow-ups, inconsistent templates, and individual workarounds."
          />
          <div>
            <p className="text-lg font-semibold text-navy">
              That creates a familiar pattern:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {operationalPatterns.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-navy/10 bg-white p-4 text-sm leading-6 text-slatecopy shadow-crisp"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-royal"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-lg leading-8 text-slatecopy">
              Arete Systems helps teams move from scattered AI usage to
              structured, repeatable operating rhythms.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="Built for business teams that need better execution."
            copy="Arete Systems works best with teams responsible for client experience, revenue operations, delivery quality, internal process, and team enablement."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamTypes.map((team) => (
              <div
                key={team}
                className="rounded-2xl border border-white bg-white p-5 text-base font-semibold leading-7 text-navy shadow-crisp"
              >
                {team}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-8 text-slatecopy">
            This is not generic AI training. It is practical workflow design for
            business teams that need structure, consistency, and stronger
            execution.
          </p>
        </div>
      </section>

      <section id="services" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="Services" />
          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className={`flex h-full flex-col rounded-3xl border p-6 shadow-crisp transition hover:-translate-y-1 hover:shadow-soft ${
                  service.featured
                    ? "border-royal bg-white"
                    : "border-navy/10 bg-white"
                }`}
              >
                <div className="lg:min-h-[13rem] xl:min-h-[21rem]">
                  <h3 className="text-2xl font-semibold leading-tight text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-lg font-semibold leading-7 text-royal">
                    {service.subtitle}
                  </p>
                  <p className="mt-4 leading-7 text-slatecopy">
                    {service.description}
                  </p>
                </div>
                <dl className="mt-6 rounded-2xl bg-ivory p-5 lg:min-h-[8.5rem]">
                  <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">
                    Best for
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-slatecopy">
                    {service.bestFor}
                  </dd>
                </dl>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">
                    {service.listTitle}
                  </h4>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-slatecopy">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-2 w-2 shrink-0 rounded-full bg-royal"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-6">
                  <p className="rounded-2xl border border-navy/10 p-5 text-sm font-semibold leading-6 text-navy">
                    Outcome: {service.outcome}
                  </p>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-royal px-5 py-3 text-sm font-semibold text-royal transition hover:bg-royal hover:text-white"
                  >
                    {service.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="method" className="bg-navy px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            light
            eyebrow="The Arete Method"
            title="From scattered AI usage to repeatable execution."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
          <SectionIntro title="What improves" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome) => (
              <article
                key={outcome.title}
                className="rounded-3xl border border-navy/10 bg-white p-6 shadow-crisp transition hover:-translate-y-1 hover:shadow-soft"
              >
                <h3 className="text-xl font-semibold text-navy">
                  {outcome.title}
                </h3>
                <p className="mt-3 leading-7 text-slatecopy">{outcome.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="bg-ivory px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="Where AI can create value quickly" />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {useCaseGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-3xl border border-navy/10 bg-white p-6 shadow-crisp"
              >
                <h3 className="text-xl font-semibold text-navy">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
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

      <section id="about" className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="rounded-[2rem] bg-navy p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Why Arete Systems
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Built by an operator, not a theorist.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-9 text-slatecopy">
            <p>
              Arete Systems brings a practical business operations lens to AI
              adoption.
            </p>
            <p>
              The work is grounded in real operating environments: client
              success, sales operations, enterprise stakeholder management,
              analytics, delivery workflows, internal process design, and team
              enablement.
            </p>
            <p>The goal is not to make teams &quot;use AI more.&quot;</p>
            <p>The goal is to help teams work better.</p>
            <p>
              That means clearer workflows, stronger ownership, faster
              execution, better client readiness, and practical systems that can
              be reused.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="Choose the right starting point" />
          <div className="mt-12 overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-crisp">
            <div className="hidden grid-cols-[1.1fr_1.2fr_0.8fr_1.1fr] gap-4 border-b border-navy/10 bg-navy px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white lg:grid">
              <span>Offer</span>
              <span>Best for</span>
              <span>Format</span>
              <span>Outcome</span>
            </div>
            <div className="divide-y divide-navy/10">
              {offers.map((offer) => (
                <article
                  key={offer.title}
                  className="grid gap-5 px-6 py-6 lg:grid-cols-[1.1fr_1.2fr_0.8fr_1.1fr] lg:items-center"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-royal lg:hidden">
                      Offer
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-navy">
                      {offer.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-royal lg:hidden">
                      Best for
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slatecopy">
                      {offer.bestFor}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-royal lg:hidden">
                      Format
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slatecopy">
                      {offer.format}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-royal lg:hidden">
                      Outcome
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-navy">
                      {offer.outcome}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionIntro title="Frequently asked questions" />
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

      <section className="bg-navy px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Ready to turn AI into a working system?
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-lg leading-8 text-blue-100">
            <p>
              If your team is experimenting with AI but still relying on manual
              work, scattered knowledge, and inconsistent processes, the next
              step is structure.
            </p>
            <p>
              Arete Systems helps you turn practical AI into better workflows,
              faster decisions, and stronger execution.
            </p>
          </div>
          <div className="mt-9">
            <PrimaryButton>Book a Strategy Call</PrimaryButton>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ivory px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionIntro
            align="left"
            title="Let's find the workflow worth fixing first."
            copy="Use the form below to share what your team is trying to improve."
          />
          <ContactForm />
        </div>
      </section>

      <footer className="bg-white px-5 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.4fr_auto] md:items-start">
          <div>
            <p className="font-semibold text-navy">Arete Systems</p>
            <p className="mt-2 text-sm text-slatecopy">
              Operational excellence, powered by practical AI.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slatecopy">
            {footerServices.map((item) => (
              <a key={item} href="#services" className="hover:text-royal">
                {item}
              </a>
            ))}
          </div>
          <p className="text-sm text-slatecopy">
            &copy; 2026 Arete Systems. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
