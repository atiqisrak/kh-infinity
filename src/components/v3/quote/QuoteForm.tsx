"use client";

import { formTracker } from "@/lib/analytics";
import { useRef, useState } from "react";
import Link from "next/link";
import { getProducts } from "@/lib/products";
import Icon from "../Icons";
import { SubmitArrow, fieldLabelLight, inputLight, labelCls, submitCls } from "../blocks";
import { focusRing } from "../ui";
import s from "../v3.module.css";

// Quote request form (v3). Same fields, endpoint and behaviour as the legacy
// QuoteForm: POST JSON to /api/send-quote, reset + thank-you for 5 s on success.
// Fields are grouped into numbered steps for scanning; it is still one form.

const EMPTY = {
  product: "",
  quantity: "",
  destination: "",
  name: "",
  email: "",
  phone: "",
  company: "",
  specifications: "",
};

function Req() {
  return (
    <span className="text-[#d9531a]" aria-hidden="true">
      {" "}
      *
    </span>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <fieldset className="min-w-0 border-t border-[#06131d]/10 pt-6 first:border-t-0 first:pt-0">
      <legend className="float-left w-full">
        <span className="flex items-center gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#06131d] font-mono text-xs text-white">{n}</span>
          <span className="text-base font-semibold tracking-tight text-[#0b2c3d]">{title}</span>
        </span>
      </legend>
      <div className="clear-left grid gap-5 pt-5">{children}</div>
    </fieldset>
  );
}

export default function QuoteForm() {
  const [formData, setFormData] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const tracker = useRef(formTracker("quote", "quote_submit")).current;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      tracker.submitted({ product_name: formData.product, destination: formData.destination });
      setFormData(EMPTY);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      tracker.failed(err instanceof Error ? err.message : "unknown");
      alert("Unable to submit your request. Please email info@khi.com.bd directly.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    tracker.start();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="rounded-[2rem] bg-white p-6 text-[#06131d] ring-1 ring-[#06131d]/[0.06] sm:p-8 lg:p-10">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 id="quote-form-heading" className={`${s.display} text-[clamp(2rem,3.4vw,2.75rem)] text-[#0b2c3d]`}>
          Request a quote
        </h2>
        <p className={`${labelCls} text-[#06131d]/45`}>
          <span className="text-[#d9531a]">*</span> Required
        </p>
      </div>

      {submitted ? (
        <div role="status" className="mt-8 flex items-start gap-4 rounded-3xl bg-[#06131d] p-6 text-white sm:p-8">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#fa6a25]">
            <Icon name="check" className="h-5 w-5" />
          </span>
          <div>
            <h3 className={`${s.display} text-3xl`}>Thank you!</h3>
            <p className="mt-2 text-white/75">
              We&apos;ve received your inquiry. Our team will get back to you within 24 hours.
            </p>
          </div>
        </div>
      ) : (
        <form className="mt-8 grid gap-8" onSubmit={handleSubmit}>
          <Step n="01" title="What do you need?">
            <div>
              <label className={fieldLabelLight} htmlFor="product">
                Product / Category
                <Req />
              </label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className={`${inputLight} min-h-[50px] cursor-pointer`}
                required
              >
                <option value="">Select a product</option>
                {getProducts().map((product) => (
                  <option key={product.id} value={product.name}>
                    {product.name} ({product.type === "import" ? "Import" : "Export"})
                  </option>
                ))}
              </select>
            </div>
          </Step>

          <Step n="02" title="How much, and where to?">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={fieldLabelLight} htmlFor="quantity">
                  Quantity required
                  <Req />
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g., 10 MT, 1000 units"
                  className={inputLight}
                  required
                />
              </div>
              <div>
                <label className={fieldLabelLight} htmlFor="destination">
                  Destination country / port
                  <Req />
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="e.g., Bangladesh, Chittagong Port"
                  className={inputLight}
                  required
                />
              </div>
            </div>
          </Step>

          <Step n="03" title="Your details">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={fieldLabelLight} htmlFor="name">
                  Full name
                  <Req />
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className={inputLight}
                  required
                />
              </div>
              <div>
                <label className={fieldLabelLight} htmlFor="email">
                  Email
                  <Req />
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className={inputLight}
                  required
                />
              </div>
              <div>
                <label className={fieldLabelLight} htmlFor="phone">
                  Phone number
                  <Req />
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className={inputLight}
                  required
                />
              </div>
              <div>
                <label className={fieldLabelLight} htmlFor="company">
                  Company name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  className={inputLight}
                />
              </div>
            </div>
          </Step>

          <Step n="04" title="Anything else?">
            <div>
              <label className={fieldLabelLight} htmlFor="specifications">
                Additional specifications
              </label>
              <textarea
                id="specifications"
                name="specifications"
                rows={4}
                value={formData.specifications}
                onChange={handleChange}
                placeholder="Please provide any additional details, specifications, or requirements..."
                className={inputLight}
              ></textarea>
            </div>
          </Step>

          <div className="flex flex-col gap-5 border-t border-[#06131d]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className={`${submitCls} w-full focus-visible:ring-offset-white sm:w-auto`}>
              Submit request
              <SubmitArrow />
            </button>
            <p className="text-sm text-[#06131d]/60">
              Need immediate assistance?{" "}
              <Link
                href="/contact"
                className={`font-semibold text-[#0b2c3d] underline decoration-[#fa6a25] decoration-2 underline-offset-4 hover:text-[#d9531a] ${focusRing}`}
              >
                Contact us directly
              </Link>
              .
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
