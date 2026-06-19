"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Result = {
  score: number;
  title: string;
  message: string;
  nextStep: string;
  benchmark: string;
  workflow: string;
};

const approvedTeamTypes = [
  "Client Success",
  "Sales Operations",
  "Business Operations",
  "Consulting / Delivery",
  "Enablement / Training",
  "Leadership / Executive Team",
  "Other",
] as const;

const fieldClass =
  "min-h-12 rounded-2xl border border-navy/15 px-4 text-base font-normal text-navy";

const questions = [
  {
    id: "workflow-frequency",
    question: "How often does this workflow happen?",
    options: [
      ["Rarely or only when needed", 0],
      ["Monthly", 1],
      ["Weekly", 2],
      ["Daily or multiple times per week", 3],
    ],
  },
  {
    id: "manual-effort",
    question: "How much manual effort does this workflow require?",
    options: [
      ["Very little manual effort", 0],
      ["Some manual effort", 1],
      ["A lot of manual effort", 2],
      ["Heavy manual effort every time", 3],
    ],
  },
  {
    id: "output-consistency",
    question: "How consistent is the output today?",
    options: [
      ["Very consistent", 0],
      ["Mostly consistent", 1],
      ["Inconsistent depending on the person", 2],
      ["Highly inconsistent or hard to quality-check", 3],
    ],
  },
  {
    id: "information-sources",
    question: "Where does the information for this workflow live?",
    options: [
      ["One clear source", 0],
      ["A few known sources", 1],
      ["Many scattered sources", 2],
      ["Mostly in people's heads, inboxes, chats, or meeting notes", 3],
    ],
  },
  {
    id: "time-consumed",
    question: "How much time does this workflow consume?",
    options: [
      ["Less than 15 minutes", 0],
      ["15 to 30 minutes", 1],
      ["30 to 60 minutes", 2],
      ["More than 60 minutes", 3],
    ],
  },
  {
    id: "business-impact",
    question: "How much does this workflow affect business outcomes?",
    options: [
      ["Low impact", 0],
      ["Some team impact", 1],
      [
        "Important to client experience, revenue, delivery, or leadership visibility",
        2,
      ],
      [
        "High impact and directly tied to revenue, client risk, execution, or decision-making",
        3,
      ],
    ],
  },
  {
    id: "new-hire-readiness",
    question: "How easy is it for a new team member to do this workflow correctly?",
    options: [
      ["Easy, with clear documentation", 0],
      ["Somewhat easy with guidance", 1],
      ["Hard without help from experienced team members", 2],
      ["Very hard because the process is undocumented or judgment-heavy", 3],
    ],
  },
  {
    id: "examples-available",
    question:
      "Are there repeatable examples, templates, notes, or past outputs AI could learn from?",
    options: [
      ["No examples exist", 0],
      ["A few examples exist", 1],
      ["Many examples exist, but they are scattered", 2],
      ["Strong examples exist and could be turned into templates or prompts", 3],
    ],
  },
  {
    id: "poor-workflow-impact",
    question: "What happens when this workflow is done poorly?",
    options: [
      ["Minimal impact", 0],
      ["Internal frustration or rework", 1],
      ["Client delays, missed follow-ups, or inconsistent decisions", 2],
      [
        "Revenue risk, client dissatisfaction, leadership escalation, or operational risk",
        3,
      ],
    ],
  },
  {
    id: "change-readiness",
    question: "How ready is your team to change this workflow?",
    options: [
      ["Not ready", 0],
      ["Curious but not aligned", 1],
      ["Somewhat ready if the process is simple", 2],
      ["Ready and actively looking for a better way", 3],
    ],
  },
] as const;

const questionIds = questions.map((question) => question.id);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const benchmarkNote =
  "These benchmark ranges are directional and based on practical workflow-readiness patterns, not an external industry survey.";

function normalizePlainText(value: FormDataEntryValue | null, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function getScoreResult(score: number, teamType: string, workflow: string): Result {
  const normalizedWorkflow = workflow.toLowerCase();
  const workflowHint =
    normalizedWorkflow.includes("handoff") || normalizedWorkflow.includes("onboarding")
      ? "Handoff and onboarding workflows often benefit from clearer ownership, templates, and quality checks."
      : normalizedWorkflow.includes("report") || normalizedWorkflow.includes("brief")
        ? "Reporting and briefing workflows often improve when inputs, review steps, and output standards are clear."
        : normalizedWorkflow.includes("meeting") || normalizedWorkflow.includes("recap")
          ? "Meeting preparation and recap workflows often improve when context gathering and follow-up standards are repeatable."
          : "The most useful comparison is whether the workflow is repeated, manual, inconsistent, and tied to a meaningful outcome.";

  const teamHint =
    teamType === "Other"
      ? "For this team type, focus on repeated work with clear inputs, outputs, and ownership."
      : `For ${teamType}, compare this workflow against repeated work that affects client experience, execution quality, or leadership visibility.`;

  const benchmark = `${benchmarkNote} ${teamHint} ${workflowHint}`;

  if (score <= 10) {
    return {
      score,
      workflow,
      benchmark,
      title: "Not ready for AI yet",
      message:
        "This workflow likely needs clarification before AI will be useful. The next step is to document the process, define ownership, and identify where the work slows down.",
      nextStep: "Start with a simple workflow map before introducing AI.",
    };
  }

  if (score <= 20) {
    return {
      score,
      workflow,
      benchmark,
      title: "Good candidate for AI support",
      message:
        "This workflow has enough repetition, manual effort, or inconsistency to benefit from AI support. The best next step is to identify which parts of the process should be assisted, standardized, or automated.",
      nextStep:
        "Use an AI Workflow Audit to prioritize the right improvement path.",
    };
  }

  return {
    score,
    workflow,
    benchmark,
    title: "High-value AI workflow opportunity",
    message:
      "This workflow is a strong candidate for an AI Operations Workflow Sprint. It likely happens often, takes meaningful effort, affects business outcomes, and has enough repeatable structure to improve with AI.",
    nextStep:
      "Turn this workflow into a repeatable AI-assisted operating system.",
  };
}

function isAllowedAnswer(questionId: string, value: FormDataEntryValue | null) {
  if (typeof value !== "string") {
    return false;
  }

  const question = questions.find((item) => item.id === questionId);
  return question?.options.some(([, score]) => String(score) === value) ?? false;
}

function validateLeadFields(formData: FormData) {
  const errors: Record<string, string> = {};
  const name = normalizePlainText(formData.get("name"), 100);
  const email = normalizePlainText(formData.get("email"), 254);
  const company = normalizePlainText(formData.get("company"), 120);
  const role = normalizePlainText(formData.get("role"), 120);
  const teamType = normalizePlainText(formData.get("team-type"), 60);
  const workflow = normalizePlainText(formData.get("workflow-to-assess"), 200);

  if (!name) {
    errors.name = "Full name is required.";
  } else if (name.length > 100) {
    errors.name = "Full name must be 100 characters or fewer.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (email.length > 254 || !emailPattern.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (company.length > 120) {
    errors.company = "Company must be 120 characters or fewer.";
  }

  if (role.length > 120) {
    errors.role = "Role must be 120 characters or fewer.";
  }

  if (!approvedTeamTypes.includes(teamType as (typeof approvedTeamTypes)[number])) {
    errors["team-type"] = "Select an approved team type.";
  }

  if (!workflow) {
    errors["workflow-to-assess"] = "Workflow is required.";
  } else if (workflow.length > 200) {
    errors["workflow-to-assess"] = "Workflow must be 200 characters or fewer.";
  }

  return { errors, teamType, workflow };
}

export default function ScorecardForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Result | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (result) {
      resultRef.current?.focus();
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [result]);

  function handleReset() {
    formRef.current?.reset();
    setErrors({});
    setResult(null);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const leadValidation = validateLeadFields(formData);
    const questionErrors: Record<string, string> = {};

    for (const questionId of questionIds) {
      if (!isAllowedAnswer(questionId, formData.get(questionId))) {
        questionErrors[questionId] = "Select one answer.";
      }
    }

    const nextErrors = { ...leadValidation.errors, ...questionErrors };

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setResult(null);
      return;
    }

    const score = questions.reduce((total, question) => {
      const value = formData.get(question.id);
      if (!isAllowedAnswer(question.id, value)) {
        return total;
      }

      return total + Number(value);
    }, 0);

    setErrors({});
    // TODO: Connect this form to a secure lead capture service such as Formspree, HubSpot, ConvertKit, Airtable, or a custom backend.
    setResult(getScoreResult(score, leadValidation.teamType, leadValidation.workflow));
  }

  return (
    <div className="mx-auto grid w-full max-w-5xl gap-6">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        className="grid gap-7 rounded-3xl bg-white p-6 shadow-soft md:p-8"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-royal">
            Scorecard form
          </p>
          <p className="mt-3 text-base leading-7 text-slatecopy">
            Choose one workflow your team does often, then answer the questions
            below.
          </p>
        </div>

        <fieldset className="grid gap-5">
          <legend className="sr-only">Contact and workflow details</legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Full name
              <input
                name="name"
                type="text"
                required
                maxLength={100}
                autoComplete="name"
                className={fieldClass}
                aria-describedby={errors.name ? "scorecard-name-error" : undefined}
              />
              {errors.name ? (
                <span id="scorecard-name-error" className="text-sm font-semibold text-red-700">
                  {errors.name}
                </span>
              ) : null}
            </label>
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Email
              <input
                name="email"
                type="email"
                required
                maxLength={254}
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                autoComplete="email"
                className={fieldClass}
                aria-describedby={errors.email ? "scorecard-email-error" : undefined}
              />
              {errors.email ? (
                <span id="scorecard-email-error" className="text-sm font-semibold text-red-700">
                  {errors.email}
                </span>
              ) : null}
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Company <span className="font-normal text-slatecopy">(optional)</span>
              <input
                name="company"
                type="text"
                maxLength={120}
                autoComplete="organization"
                className={fieldClass}
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Role <span className="font-normal text-slatecopy">(optional)</span>
              <input
                name="role"
                type="text"
                maxLength={120}
                autoComplete="organization-title"
                className={fieldClass}
              />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Team type
              <select
                name="team-type"
                required
                defaultValue=""
                className={fieldClass}
                aria-describedby={errors["team-type"] ? "scorecard-team-error" : undefined}
              >
                <option value="" disabled>
                  Select a team type
                </option>
                {approvedTeamTypes.map((teamType) => (
                  <option key={teamType}>{teamType}</option>
                ))}
              </select>
              {errors["team-type"] ? (
                <span id="scorecard-team-error" className="text-sm font-semibold text-red-700">
                  {errors["team-type"]}
                </span>
              ) : null}
            </label>
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Workflow you want to assess
              <input
                name="workflow-to-assess"
                type="text"
                required
                maxLength={200}
                placeholder="Example: Client meeting prep"
                className={fieldClass}
                aria-describedby={
                  errors["workflow-to-assess"] ? "scorecard-workflow-error" : undefined
                }
              />
              {errors["workflow-to-assess"] ? (
                <span id="scorecard-workflow-error" className="text-sm font-semibold text-red-700">
                  {errors["workflow-to-assess"]}
                </span>
              ) : null}
            </label>
          </div>
        </fieldset>

        <fieldset className="grid gap-5">
          <legend className="text-lg font-semibold text-navy">
            Assessment questions
          </legend>
          <div className="grid gap-5">
            {questions.map((question, index) => (
              <fieldset
                key={question.id}
                className="rounded-3xl border border-navy/10 p-5"
              >
                <legend className="px-1 text-base font-semibold leading-7 text-navy">
                  {index + 1}. {question.question}
                </legend>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {question.options.map(([label, value]) => (
                    <label
                      key={`${question.id}-${value}`}
                      className="flex cursor-pointer gap-3 rounded-2xl border border-navy/10 p-4 text-sm leading-6 text-slatecopy transition hover:border-royal/35 hover:text-navy"
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={value}
                        required
                        className="mt-1 h-4 w-4 shrink-0 accent-royal"
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
                {errors[question.id] ? (
                  <p role="alert" className="mt-4 text-sm font-semibold text-red-700">
                    {errors[question.id]}
                  </p>
                ) : null}
              </fieldset>
            ))}
          </div>
        </fieldset>

        {Object.keys(errors).length > 0 ? (
          <p role="alert" className="rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-700">
            Please complete the required fields and questions before calculating your score.
          </p>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition hover:border-royal hover:text-royal"
          >
            Reset
          </button>
          <button
            type="submit"
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:bg-blue-700"
          >
            Calculate My Score
          </button>
        </div>
      </form>

      {result ? (
        <div
          ref={resultRef}
          tabIndex={-1}
          role="status"
          className="scroll-mt-28 rounded-3xl border border-royal/30 bg-white p-7 shadow-soft outline-none"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-royal">
            Your score is shown below
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-5xl font-semibold text-navy">
                {result.score}/30
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-navy">
                {result.title}
              </h3>
            </div>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-royal px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Book an AI Clarity Session
            </a>
          </div>
          <dl className="mt-5 grid gap-5">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">
                Workflow assessed
              </dt>
              <dd className="mt-2 leading-7 text-slatecopy">{result.workflow}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">
                Readiness category
              </dt>
              <dd className="mt-2 leading-7 text-slatecopy">{result.message}</dd>
            </div>
          </dl>
          <div className="mt-5 rounded-2xl bg-ivory p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">
              Directional benchmark
            </p>
            <p className="mt-2 leading-7 text-slatecopy">{result.benchmark}</p>
          </div>
          <div className="mt-5 rounded-2xl border border-navy/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">
              Recommended next step
            </p>
            <p className="mt-2 leading-7 text-slatecopy">{result.nextStep}</p>
          </div>
          <p className="mt-5 text-sm leading-6 text-slatecopy">
            Your score is shown below. To discuss your result, book an AI
            Clarity Session.
          </p>
        </div>
      ) : null}
    </div>
  );
}
