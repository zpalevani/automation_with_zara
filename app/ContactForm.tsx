"use client";

import { FormEvent, useState } from "react";

const formEndpoint = "https://formsubmit.co/ajax/zpalevani@gmail.com";

type FormStatus = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "min-h-12 rounded-2xl border border-navy/15 px-4 text-base font-normal text-navy";

const textAreaClass =
  "rounded-2xl border border-navy/15 px-4 py-3 text-base font-normal text-navy";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload,
          _subject: "New Arete Systems strategy call request",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-3xl bg-white p-8 shadow-soft"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-royal">
          Thank you
        </p>
        <h3 className="mt-4 text-2xl font-semibold text-navy">
          Your submission was received.
        </h3>
        <p className="mt-4 leading-7 text-slatecopy">
          Thank you. Your submission was received, and you will be contacted as
          soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-3xl bg-white p-6 shadow-soft">
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
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
        <select
          name="team-type"
          className={fieldClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select a team type
          </option>
          <option>Client success</option>
          <option>Sales operations</option>
          <option>Business operations</option>
          <option>Consulting or delivery</option>
          <option>Enablement or onboarding</option>
          <option>Leadership team</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-navy">
        What workflow do you want to improve?
        <textarea
          name="workflow"
          rows={4}
          required
          className={textAreaClass}
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-navy">
        What is currently slow, manual, or inconsistent?
        <textarea name="friction" rows={4} className={textAreaClass} />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-navy">
        Are you looking for an audit, workflow sprint, training, or advisory support?
        <textarea name="support-type" rows={3} className={textAreaClass} />
      </label>
      {status === "error" ? (
        <p role="alert" className="rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-700">
          The form could not be sent. Please email zpalevani@gmail.com directly.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {status === "submitting" ? "Sending..." : "Request a Strategy Call"}
      </button>
    </form>
  );
}
