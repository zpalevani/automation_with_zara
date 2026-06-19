"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { formEndpoint } from "./formConfig";

type SubmitStatus = "idle" | "submitting" | "sent" | "send-error";

type Result = {
  score: number;
  title: string;
  message: string;
  nextStep: string;
};

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

function getResult(score: number): Result {
  if (score <= 10) {
    return {
      score,
      title: "Not ready for AI yet",
      message:
        "This workflow likely needs clarification before AI will be useful. The next step is to document the process, define ownership, and identify where the work slows down.",
      nextStep: "Start with a simple workflow map before introducing AI.",
    };
  }

  if (score <= 20) {
    return {
      score,
      title: "Good candidate for AI support",
      message:
        "This workflow has enough repetition, manual effort, or inconsistency to benefit from AI support. The best next step is to identify which parts of the process should be assisted, standardized, or automated.",
      nextStep:
        "Use an AI Workflow Audit to prioritize the right improvement path.",
    };
  }

  return {
    score,
    title: "High-value AI workflow opportunity",
    message:
      "This workflow is a strong candidate for an AI Operations Workflow Sprint. It likely happens often, takes meaningful effort, affects business outcomes, and has enough repeatable structure to improve with AI.",
    nextStep:
      "Turn this workflow into a repeatable AI-assisted operating system.",
  };
}

export default function ScorecardForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [result, setResult] = useState<Result | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result) {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [result]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const score = questions.reduce((total, question) => {
      return total + Number(formData.get(question.id) ?? 0);
    }, 0);
    const scoreResult = getResult(score);
    const payload = Object.fromEntries(formData.entries());

    setResult(scoreResult);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload,
          "total-score": scoreResult.score,
          "result-category": scoreResult.title,
          "recommended-next-step": scoreResult.nextStep,
          _subject: "New AI Workflow Readiness Scorecard submission",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Scorecard submission failed");
      }

      setStatus("sent");
    } catch {
      setStatus("send-error");
    }
  }

  return (
    <div className="grid gap-6">
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 rounded-3xl bg-white p-6 shadow-soft"
      >
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-royal">
            Start here
          </p>
          <p className="mt-3 text-base leading-7 text-slatecopy">
            Choose one workflow your team does often, then answer the questions
            below.
          </p>
        </div>

        <fieldset className="grid gap-5">
          <legend className="text-lg font-semibold text-navy">
            Lead information
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Name
              <input name="name" type="text" required className={fieldClass} />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Email
              <input name="email" type="email" required className={fieldClass} />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Company
              <input name="company" type="text" className={fieldClass} />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Role
              <input name="role" type="text" className={fieldClass} />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-semibold text-navy">
            Team type
            <select name="team-type" required defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Select a team type
              </option>
              <option>Client Success</option>
              <option>Sales Operations</option>
              <option>Business Operations</option>
              <option>Consulting / Delivery</option>
              <option>Enablement / Training</option>
              <option>Leadership / Executive Team</option>
              <option>Other</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-navy">
            Workflow you want to assess
            <input
              name="workflow-to-assess"
              type="text"
              required
              placeholder="Example: Client meeting prep, renewal review, proposal handoff, weekly reporting"
              className={fieldClass}
            />
          </label>
        </fieldset>

        <div className="grid gap-5">
          <h3 className="text-lg font-semibold text-navy">
            Assessment questions
          </h3>
          {questions.map((question, index) => (
            <fieldset
              key={question.id}
              className="rounded-3xl border border-navy/10 p-5"
            >
              <legend className="px-1 text-base font-semibold leading-7 text-navy">
                {index + 1}. {question.question}
              </legend>
              <div className="mt-4 grid gap-3">
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
            </fieldset>
          ))}
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {status === "submitting" ? "Calculating..." : "Calculate My Score"}
        </button>
      </form>

      {result ? (
        <div
          ref={resultRef}
          role="status"
          className="scroll-mt-28 rounded-3xl border border-royal/30 bg-white p-7 shadow-soft"
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
          <p className="mt-5 leading-7 text-slatecopy">{result.message}</p>
          <div className="mt-5 rounded-2xl bg-ivory p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">
              Recommended next step
            </p>
            <p className="mt-2 leading-7 text-slatecopy">{result.nextStep}</p>
          </div>
          <p className="mt-5 text-sm leading-6 text-slatecopy">
            To discuss your result, book an AI Clarity Session.
          </p>
          {status === "send-error" ? (
            <p role="alert" className="mt-4 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-700">
              Your score was calculated, but the form details could not be sent.
              Please email zpalevani@gmail.com or book a session from the
              contact section.
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
