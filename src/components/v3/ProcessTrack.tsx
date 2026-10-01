"use client";

import { useEffect, useRef, useState } from "react";
import s from "./v3.module.css";

// "How it works" steps with a KH container riding a rail above them. Progress is
// tied to scroll position (the reader drives it), so each station lights up as the
// container passes. Desktop: horizontal rail + container. Phones: vertical line fill.
// Use on dark sections. 3–6 steps read best; `owner` (who does the step) is optional.

export interface ProcessStep {
  title: string;
  body: string;
  owner?: string;
}

const GAP_PX = 24; // must match lg:gap-6 on the grid

export default function ProcessTrack({ steps }: { steps: ProcessStep[] }) {
  const COLS = steps.length;
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the track's top reaches 80% down the viewport, 1 when it reaches 35%
      const next = (vh * 0.8 - r.top) / (vh * 0.45);
      setP(Math.min(1, Math.max(0, next)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Node i sits at the left edge of column i (+20px to its centre). The first and
  // last node centres are (100% - one column width) apart.
  const colSpan = `(100% - (100% - ${GAP_PX * (COLS - 1)}px) / ${COLS})`;
  const along = `calc(20px + ${p.toFixed(4)} * ${colSpan})`;
  const reached = (i: number) => p >= i / (COLS - 1) - 0.015;

  return (
    <div ref={ref} className="relative mt-14 lg:mt-20 lg:pt-16">
      {/* Desktop rail + riding container */}
      <div aria-hidden="true" className="absolute inset-x-0 top-10 hidden lg:block">
        <span className="absolute left-5 h-[3px] -translate-y-1/2 rounded-full bg-white/10" style={{ width: `calc${colSpan}` }} />
        <span
          className="absolute left-5 h-[3px] -translate-y-1/2 rounded-full bg-[#fa6a25]"
          style={{ width: `calc(${p.toFixed(4)} * ${colSpan})` }}
        />
        <div className="absolute bottom-[3px] -translate-x-1/2" style={{ left: along }}>
          <div className={`${s.box} ${s.wheels} flex h-9 w-[92px] items-center justify-center`}>
            <span className={`${s.display} text-sm tracking-wider text-white`}>KHI</span>
          </div>
        </div>
      </div>

      <ol className={`${s.trackCols} relative grid gap-10 lg:gap-6`} style={{ "--cols": COLS } as React.CSSProperties}>
        {/* Phone: vertical line with progress fill */}
        <span aria-hidden="true" className="absolute bottom-2 left-[19px] top-2 w-px bg-white/15 lg:hidden" />
        <span
          aria-hidden="true"
          className="absolute left-[19px] top-2 w-px bg-[#fa6a25] lg:hidden"
          style={{ height: `calc(${p.toFixed(4)} * (100% - 1rem))` }}
        />
        {steps.map((step, i) => (
          <li key={step.title} className="relative pl-14 lg:pl-0">
            <span
              className={`absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full font-mono text-sm transition-colors duration-300 lg:relative ${
                reached(i) ? "bg-[#fa6a25] text-white" : "bg-[#0b2c3d] text-white ring-1 ring-white/25"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={`${s.display} text-3xl lg:mt-8`}>{step.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/70 lg:min-h-[3lh]">{step.body}</p>
            {step.owner && (
              <p
                className={`mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider transition-colors duration-300 ${
                  reached(i) ? "text-[#fa6a25]" : "text-white/40"
                }`}
              >
                <span className="h-px w-4 bg-current" />
                {step.owner}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
