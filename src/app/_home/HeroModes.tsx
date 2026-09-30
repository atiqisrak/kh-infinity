"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroModes } from "./content";
import s from "./landing.module.css";
import { NAV_HEIGHT } from "./SiteNav";

// Full-bleed hero: three photo panels (sea / road / air). The active panel widens,
// and the lane card and progress tabs follow it. Pauses on hover/focus and never
// auto-advances for users who prefer reduced motion.

const SLIDE_MS = 5000;
// Active panel grows to ACTIVE_GROW / (ACTIVE_GROW + 2) of the width (~44%).
// Each photo is drawn at that fixed width and centred, so resizing a panel only
// reveals or hides edges — the bitmap is never rescaled, which kept the
// ~800–900px road/air sources from looking soft or warped mid-transition.
const ACTIVE_GROW = 1.6;
const PHOTO_WIDTH = `${(ACTIVE_GROW / (ACTIVE_GROW + 2)) * 100}vw`;

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduce;
}

export default function HeroModes({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = usePrefersReducedMotion();
  const autoplay = !paused && !reduce;

  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % heroModes.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [active, autoplay]);

  const lane = heroModes[active].lane;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="How we move goods: sea, road and air"
      className="relative isolate flex h-[100svh] min-h-[640px] flex-col overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Photo panels */}
      <div className="absolute inset-0 -z-20 flex" aria-hidden="true">
        {heroModes.map((m, i) => (
          <div
            key={m.key}
            className="relative basis-0 overflow-hidden border-r border-[#06131d] transition-[flex-grow] duration-[1200ms] ease-[cubic-bezier(0.7,0,0.2,1)] last:border-r-0"
            style={{ flexGrow: i === active ? ACTIVE_GROW : 1 }}
          >
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2" style={{ width: PHOTO_WIDTH }}>
              {/* All three panels are on screen at load, so none of them may lazy-load */}
              <Image
                src={m.image}
                alt=""
                fill
                priority={i === 0}
                loading={i === 0 ? undefined : "eager"}
                sizes={PHOTO_WIDTH}
                className="object-cover"
              />
            </div>
            <div
              className={`absolute inset-0 bg-[#06131d] transition-opacity duration-1000 ${i === active ? "opacity-0" : "opacity-45"}`}
            />
          </div>
        ))}
      </div>
      <div className={`${s.heroShade} absolute inset-0 -z-10`} />

      {/* Room for the fixed SiteNav */}
      <div aria-hidden="true" className={`${NAV_HEIGHT} shrink-0`} />

      <div className="mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-center px-4 py-8 sm:px-6 lg:px-10">
        {children}
      </div>

      {/* Mode tabs + synced lane card */}
      <div className="mx-auto grid w-full max-w-[1320px] gap-3 px-4 pb-6 sm:px-6 md:grid-cols-[1fr_auto] md:items-end lg:px-10 lg:pb-8">
        <div className="grid grid-cols-3 gap-2 md:max-w-md" role="group" aria-label="Choose transport mode">
          {heroModes.map((m, i) => (
            <button
              key={m.key}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className="group text-left"
            >
              <span className="relative block h-[3px] overflow-hidden rounded-full bg-white/20">
                <span
                  key={i === active ? `on-${active}` : "off"}
                  className={`absolute inset-y-0 left-0 rounded-full bg-[#fa6a25] ${
                    i === active ? (autoplay ? s.progress : "w-full") : i < active ? "w-full opacity-40" : "w-0"
                  }`}
                  style={{ animationDuration: `${SLIDE_MS}ms` }}
                />
              </span>
              <span
                className={`mt-3 flex items-baseline gap-2 text-sm transition ${
                  i === active ? "text-white" : "text-white/55 group-hover:text-white/80"
                }`}
              >
                <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-semibold">{m.label}</span>
              </span>
            </button>
          ))}
        </div>

        <div className={`${s.glass} rounded-2xl p-5 md:w-[360px]`} aria-live="polite">
          <div key={active} className={s.fadeUp}>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-white/60">
              <span>{lane.mode}</span>
              <span className="text-[#fa6a25]">{lane.eta}</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className={`${s.display} text-3xl`}>{lane.from}</span>
              <div className="relative mx-4 h-px flex-1 bg-white/25">
                <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#fa6a25]" />
                <span className={`${s.laneFill} absolute left-0 top-1/2 h-px -translate-y-1/2 bg-[#fa6a25]`} />
                <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/60" />
              </div>
              <span className={`${s.display} text-3xl`}>{lane.to}</span>
            </div>
            <div className="mt-3 flex justify-between text-sm text-white/70">
              <span>{lane.fromName}</span>
              <span>{lane.toName}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
