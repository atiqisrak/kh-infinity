"use client";

import { useRef, useState } from "react";
import { formTracker } from "@/lib/analytics";
import Icon from "./Icons";
import { SubmitArrow, fieldLabelLight, inputLight, submitCls } from "./blocks";
import s from "./v3.module.css";

// "Send us a message" form on /contact. Posts to /api/send-contact.

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const tracker = useRef(formTracker("contact", "contact_submit")).current;

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    tracker.start();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      tracker.submitted();
      setForm(EMPTY);
      setStatus("sent");
    } catch (err) {
      tracker.failed(err instanceof Error ? err.message : "unknown");
      setStatus("idle");
      alert("Unable to send your message. Please email info@khi.com.bd directly.");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="mt-8 flex items-start gap-4 rounded-3xl bg-[#06131d] p-6 text-white sm:p-8">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#fa6a25]">
          <Icon name="check" className="h-5 w-5" />
        </span>
        <div>
          <h3 className={`${s.display} text-3xl`}>Message sent</h3>
          <p className="mt-2 text-white/75">Thank you. Our team will reply within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={fieldLabelLight} htmlFor="name">
            Name
          </label>
          <input type="text" id="name" name="name" value={form.name} onChange={onChange} className={inputLight} required autoComplete="name" />
        </div>
        <div>
          <label className={fieldLabelLight} htmlFor="email">
            Email
          </label>
          <input type="email" id="email" name="email" value={form.email} onChange={onChange} className={inputLight} required autoComplete="email" />
        </div>
      </div>
      <div>
        <label className={fieldLabelLight} htmlFor="subject">
          Subject
        </label>
        <input type="text" id="subject" name="subject" value={form.subject} onChange={onChange} className={inputLight} required />
      </div>
      <div>
        <label className={fieldLabelLight} htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" rows={6} value={form.message} onChange={onChange} className={inputLight} required></textarea>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className={`${submitCls} w-full disabled:opacity-60 focus-visible:ring-offset-[#f2f4f6] sm:w-auto sm:justify-self-start`}
      >
        {status === "sending" ? "Sending…" : "Send message"}
        <SubmitArrow />
      </button>
    </form>
  );
}
