"use client";

import { useRef, useState } from "react";
import { formTracker } from "@/lib/analytics";
import Icon from "../Icons";
import { fieldLabelDark, inputDark } from "../blocks";
import { focusRing } from "../ui";
import s from "../v3.module.css";

// Short quote request on each product page. Posts to /api/send-quote (same
// endpoint as the full /quote form) with the product filled in.

const EMPTY = { name: "", email: "", quantity: "", specifications: "" };

export default function ProductEnquiryForm({ productId, productName }: { productId: string; productName: string }) {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const tracker = useRef(formTracker("product_enquiry", "quote_submit", { product_id: productId, product_name: productName })).current;

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    tracker.start();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, product: productName }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      tracker.submitted();
      setForm(EMPTY);
      setStatus("sent");
    } catch (err) {
      tracker.failed(err instanceof Error ? err.message : "unknown");
      setStatus("idle");
      alert("Unable to submit your request. Please email info@khi.com.bd directly.");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className={`${s.glass} flex items-start gap-4 rounded-[2rem] p-6 sm:p-8`}>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#fa6a25]">
          <Icon name="check" className="h-5 w-5" />
        </span>
        <div>
          <h3 className={`${s.display} text-3xl text-white`}>Thank you!</h3>
          <p className="mt-2 text-white/75">
            We&apos;ve received your {productName} request. Our team will get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`${s.glass} grid gap-5 rounded-[2rem] p-6 sm:p-8`}>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={fieldLabelDark} htmlFor="enquiry-name">
            Name
          </label>
          <input type="text" id="enquiry-name" name="name" value={form.name} onChange={onChange} className={inputDark} required autoComplete="name" />
        </div>
        <div>
          <label className={fieldLabelDark} htmlFor="enquiry-email">
            Email
          </label>
          <input type="email" id="enquiry-email" name="email" value={form.email} onChange={onChange} className={inputDark} required autoComplete="email" />
        </div>
      </div>
      <div>
        <label className={fieldLabelDark} htmlFor="enquiry-quantity">
          Required quantity
        </label>
        <input
          type="text"
          id="enquiry-quantity"
          name="quantity"
          value={form.quantity}
          onChange={onChange}
          className={inputDark}
          required
          placeholder="e.g. 2 × 20ft containers"
        />
      </div>
      <div>
        <label className={fieldLabelDark} htmlFor="enquiry-message">
          Additional requirements
        </label>
        <textarea
          id="enquiry-message"
          name="specifications"
          rows={4}
          value={form.specifications}
          onChange={onChange}
          className={inputDark}
          placeholder="Grade, packing, destination port…"
        />
      </div>
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
