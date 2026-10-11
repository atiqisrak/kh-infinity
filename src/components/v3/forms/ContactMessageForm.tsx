"use client";

import { useState } from "react";
import { capture, identifyLead, track } from "@/lib/analytics";
import { fieldLabelLight, inputLight, submitCls, SubmitArrow } from "../blocks";

// "Send us a message" form on /contact. Posts to /api/send-contact.

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function ContactMessageForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit");
      identifyLead(form.email, { name: form.name, lead_source: "contact_page" });
      track("contact_submit", { subject: form.subject });
      setForm(EMPTY);
      setStatus("sent");
    } catch {
      capture("form_submit_failed", { form: "contact_page" });
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <p role="status" className="mt-8 rounded-2xl bg-white p-6 text-[#0b2c3d] ring-1 ring-[#06131d]/[0.06]">
        Thank you. Your message has reached our team and we will reply within one business day.
      </p>
    );
  }

  return (
    <form className="mt-8 grid gap-5" onSubmit={handleSubmit} data-form="contact_page">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={fieldLabelLight} htmlFor="name">
            Name
          </label>
          <input type="text" id="name" name="name" value={form.name} onChange={set} className={inputLight} required autoComplete="name" />
        </div>
        <div>
          <label className={fieldLabelLight} htmlFor="email">
            Email
          </label>
          <input type="email" id="email" name="email" value={form.email} onChange={set} className={inputLight} required autoComplete="email" />
        </div>
      </div>
      <div>
        <label className={fieldLabelLight} htmlFor="subject">
          Subject
        </label>
        <input type="text" id="subject" name="subject" value={form.subject} onChange={set} className={inputLight} required />
      </div>
      <div>
        <label className={fieldLabelLight} htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" value={form.message} onChange={set} rows={6} className={inputLight} required></textarea>
      </div>
      {status === "error" && (
        <p role="alert" className="text-sm text-[#b42318]">
          Your message could not be sent. Please email info@khi.com.bd or message us on WhatsApp.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className={`${submitCls} w-full focus-visible:ring-offset-[#f2f4f6] disabled:opacity-60 sm:w-auto sm:justify-self-start`}
      >
        {status === "sending" ? "Sending…" : "Send message"}
        <SubmitArrow />
      </button>
    </form>
  );
}
