"use client";

import { useState } from "react";
import { capture, identifyLead, track } from "@/lib/analytics";
import Icon from "../Icons";
import { fieldLabelDark, inputDark } from "../blocks";
import { focusRing } from "../ui";
import s from "../v3.module.css";

// Quote request at the foot of each product page. Posts to /api/send-quote
// with the page's product, like the main /quote form.

const EMPTY = { name: "", email: "", quantity: "", message: "" };

export default function ProductEnquiryForm({ product }: { product: string }) {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          product,
          quantity: form.quantity,
          specifications: form.message,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      identifyLead(form.email, { name: form.name, lead_source: "product_page" });
      track("quote_submit", {
        product,
        quantity: form.quantity,
        has_specifications: Boolean(form.message),
        form: "product_page",
      });
      setForm(EMPTY);
      setStatus("sent");
    } catch {
      capture("form_submit_failed", { form: "product_page", product });
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className={`${s.glass} flex items-start gap-4 rounded-[2rem] p-6 text-white sm:p-8`}>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#fa6a25]">
          <Icon name="check" className="h-5 w-5" />
        </span>
        <div>
          <h3 className={`${s.display} text-3xl`}>Thank you!</h3>
          <p className="mt-2 text-white/75">
            We&apos;ve received your request for {product}. Our trade team will reply within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className={`${s.glass} grid gap-5 rounded-[2rem] p-6 sm:p-8`} onSubmit={handleSubmit} data-form="product_page">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={fieldLabelDark} htmlFor="name">
            Name
          </label>
          <input type="text" id="name" name="name" value={form.name} onChange={set} className={inputDark} required autoComplete="name" />
        </div>
        <div>
          <label className={fieldLabelDark} htmlFor="email">
            Email
          </label>
          <input type="email" id="email" name="email" value={form.email} onChange={set} className={inputDark} required autoComplete="email" />
        </div>
      </div>
      <div>
        <label className={fieldLabelDark} htmlFor="quantity">
          Required quantity
        </label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={form.quantity}
          onChange={set}
          className={inputDark}
          required
          placeholder="e.g. 2 × 20ft containers"
        />
      </div>
      <div>
        <label className={fieldLabelDark} htmlFor="message">
          Additional requirements
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={set}
          rows={4}
          className={inputDark}
          placeholder="Grade, packing, destination port…"
        />
      </div>
      {status === "error" && (
        <p role="alert" className="text-sm text-[#ffb4a1]">
          Your request could not be sent. Please email info@khi.com.bd or message us on WhatsApp.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className={`group inline-flex items-center justify-between gap-3 rounded-full bg-[#fa6a25] py-2 pl-6 pr-2 font-semibold text-white transition-colors hover:bg-[#d9531a] disabled:opacity-60 ${focusRing}`}
      >
        {status === "sending" ? "Sending…" : "Submit request"}
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#d9531a] transition-transform group-hover:rotate-45">
          <Icon name="arrow" className="h-4 w-4" />
        </span>
      </button>
    </form>
  );
}
