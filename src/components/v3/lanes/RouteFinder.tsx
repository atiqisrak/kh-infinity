"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckList, SubmitArrow, fieldLabelDark, inputDark, submitCls } from "../blocks";
import { ArrowLink, PillButton } from "../ui";
import s from "../v3.module.css";
import { finderCountries, findLane, type LaneSummary } from "./lanes";

// Origin → destination picker from the original trade-routes page. Picking a
// pair we run shows that lane's summary and a link to its page.

const HOW_IT_WORKS = [
  "Select your origin and destination countries above",
  "View available trade routes and products",
  "Get detailed information about the route and services",
  "Request a quote or contact us for assistance",
];

const selectCls = `${inputDark} min-h-12 cursor-pointer appearance-none pr-11 [&>option]:bg-[#0b2c3d] [&>option]:text-white`;

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#fa6a25]">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RouteFinder() {
  const [form, setForm] = useState({ origin: "", destination: "" });
  const [submitted, setSubmitted] = useState(false);

  const ready = Boolean(form.origin && form.destination);
  const lane: LaneSummary | undefined = submitted && ready ? findLane(form.origin, form.destination) : undefined;

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className={`${s.glass} rounded-3xl p-6 sm:p-8`}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={fieldLabelDark} htmlFor="origin">
              Origin country
            </label>
            <div className="relative">
              <select id="origin" name="origin" value={form.origin} onChange={onChange} className={selectCls}>
              <option value="">Select origin</option>
              {finderCountries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
              <Chevron />
            </div>
          </div>
          <div>
            <label className={fieldLabelDark} htmlFor="destination">
              Destination country
            </label>
            <div className="relative">
              <select id="destination" name="destination" value={form.destination} onChange={onChange} className={selectCls}>
              <option value="">Select destination</option>
              {finderCountries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
              <Chevron />
            </div>
          </div>
        </div>
        <button type="submit" disabled={!ready} className={`${submitCls} mt-6 w-full disabled:cursor-not-allowed`}>
          Find route
          <SubmitArrow />
        </button>
        <p className="mt-6 text-sm text-white/55">
          We currently run three planned lanes: China → Bangladesh, Middle East → Bangladesh and Bangladesh → Middle East.
        </p>
      </form>

      <div aria-live="polite" className="rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 sm:p-8">
        {lane ? (
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#fa6a25]">Route found</p>
            <h3 className={`${s.display} mt-4 text-[clamp(2.4rem,5vw,3.5rem)]`}>
              {lane.from.code} <span className="text-[#fa6a25]">→</span> {lane.to.code}
              <span className="sr-only">: {lane.label}</span>
            </h3>
            <p className="mt-4 text-white/75">{lane.message}</p>
            <h4 className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">Products available</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {lane.products.map((p) => (
                <li key={p} className="rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-white/85">
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <PillButton href={lane.href}>Learn more</PillButton>
            </div>
          </div>
        ) : submitted && ready ? (
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">No planned lane</p>
            <h3 className={`${s.display} mt-4 text-4xl`}>
              {form.origin} <span className="text-[#fa6a25]">→</span> {form.destination}
            </h3>
            <p className="mt-4 max-w-md text-white/75">
              We don&rsquo;t run a planned lane for this pair. Our trade experts can still help you find the best route.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <PillButton href="/contact">Contact us</PillButton>
              <ArrowLink href="/quote">Request quote</ArrowLink>
            </div>
          </div>
        ) : (
          <div>
            <h3 className={`${s.display} text-3xl`}>How it works</h3>
            <CheckList dark={false} items={HOW_IT_WORKS} className="mt-6" />
            <p className="mt-8 text-sm text-white/55">
              Know your lane already?{" "}
              <Link href="/quote" className="font-semibold text-white underline decoration-[#fa6a25] decoration-2 underline-offset-4 hover:text-[#fa6a25]">
                Request a quote
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
