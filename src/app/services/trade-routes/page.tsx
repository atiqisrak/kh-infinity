import Image from "next/image";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema-helpers";
import Crumbs from "@/components/v3/Crumbs";
import CtaBand from "@/components/v3/CtaBand";
import Icon from "@/components/v3/Icons";
import { NumberedGrid, Section } from "@/components/v3/blocks";
import LaneCard from "@/components/v3/lanes/LaneCard";
import LaneLine from "@/components/v3/lanes/LaneLine";
import RouteFinder from "@/components/v3/lanes/RouteFinder";
import { lanes } from "@/components/v3/lanes/lanes";
import Reveal from "@/components/v3/Reveal";
import { Eyebrow, GhostButton, PillButton, focusRing, pad } from "@/components/v3/ui";
import V3Shell from "@/components/v3/V3Shell";
import s from "@/components/v3/v3.module.css";

// Metadata lives in ./layout.tsx. The route finder is the only client island.

const REASONS = [
  { title: "Established Routes", body: "Well-established connections and partnerships across the globe" },
  { title: "Fast Delivery", body: "Optimized logistics for timely delivery" },
  { title: "Documentation", body: "Complete handling of all trade documentation" },
  { title: "Competitive Rates", body: "Best-in-market pricing for all routes" },
];

export default function TradeRoutesPage() {
  const crumbs = breadcrumbSchema([
    { name: "Home", url: "https://khi.com.bd/" },
    { name: "Services", url: "https://khi.com.bd/services" },
    { name: "Trade Routes", url: "https://khi.com.bd/services/trade-routes" },
  ]);

  return (
    <V3Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      {/* ───────────── HERO: lane board ───────────── */}
      <section aria-labelledby="routes-title" className={`${s.gridBg} relative overflow-hidden bg-[#06131d] pt-[104px] lg:pt-[124px]`}>
        <div className={`${pad} grid items-center gap-12 pb-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:pb-24`}>
          <div>
            <Crumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Trade routes" }]} />
            <div className="mt-8">
              <Eyebrow>Trade routes</Eyebrow>
            </div>
            <h1 id="routes-title" className={`${s.display} mt-5 text-[clamp(3rem,6vw,5.75rem)]`}>
              Trade routes
              <br />
              &amp; <span className="text-[#fa6a25]">connections</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Discover our global trade network and find the right route for your import-export needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href="#finder">Find your route</PillButton>
              <GhostButton href="/contact">Contact us</GhostButton>
            </div>
          </div>

          {/* Lane board: each planned lane with a ship sailing it */}
          <div className="relative isolate overflow-hidden rounded-[2rem] p-4 sm:p-6">
            <Image
              src="/images/v3/hero-ship-tall.webp"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 640px, 100vw"
              className="-z-20 object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-[#06131d]/55" />
            <div className="flex items-center justify-between px-2 pb-4 pt-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/70">Lane board</span>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#fa6a25]" />
                {lanes.length} planned lanes
              </span>
            </div>
            <Reveal as="ul" threshold={0.2} className="grid gap-3" aria-label="Planned trade lanes">
              {lanes.map((l, i) => (
                <li key={l.slug}>
                  <Link
                    href={l.href}
                    className={`${s.glass} group grid items-center gap-4 rounded-3xl p-5 transition hover:border-[#fa6a25]/70 sm:grid-cols-[0.9fr_1.4fr] sm:p-6 ${focusRing}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{l.label}</p>
                        <p className="mt-1 text-sm text-white/60">{l.note}</p>
                      </div>
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 transition group-hover:rotate-45 group-hover:bg-[#fa6a25] sm:hidden">
                        <Icon name="arrow" className="h-4 w-4" />
                      </span>
                    </div>
                    <LaneLine from={l.from} to={l.to} delay={400 + i * 350} />
                  </Link>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────── POPULAR ROUTES ───────────── */}
      <Section
        id="lanes"
        tone="paper"
        eyebrow="Our lanes"
        title="Popular trade routes"
        intro="Three planned lanes between China, the Middle East and Bangladesh, with one partner end to end."
      >
        <Reveal as="ul" threshold={0.2} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {lanes.map((l, i) => (
            <li key={l.slug}>
              <LaneCard lane={l} index={i} />
            </li>
          ))}
        </Reveal>
      </Section>

      {/* ───────────── ROUTE FINDER ───────────── */}
      <Section
        id="finder"
        tone="sea"
        grid
        eyebrow="Route finder"
        title="Find your trade route"
        intro="Select origin and destination to find available trade routes, products, and services."
      >
        <RouteFinder />
      </Section>

      {/* ───────────── WHY ───────────── */}
      <Section id="why" tone="mist" eyebrow="Why KHI" title="Why choose our trade routes?" headSize="md">
        <div className="relative isolate mb-14 overflow-hidden rounded-3xl">
          <div className="relative aspect-[16/9] sm:aspect-[16/6] lg:aspect-[16/5]">
            <Image
              src="/images/v3/lanes/ship-broadside.webp"
              alt="Container ship stacked with containers sailing past a coastline"
              fill
              sizes="(min-width: 1320px) 1240px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#06131d]/85 via-[#06131d]/35 to-transparent" />
          <p className={`${s.display} absolute bottom-5 left-5 text-3xl text-white sm:bottom-8 sm:left-8 sm:text-5xl`}>
            Planned lanes.
            <br />
            <span className="text-[#fa6a25]">One partner.</span>
          </p>
        </div>
        <NumberedGrid items={REASONS} />
      </Section>

      <CtaBand
        title={
          <>
            Need help finding
            <br />
            your <span className="text-[#fa6a25]">route?</span>
          </>
        }
        body="Our trade experts can help you find the best route and solution for your needs."
        image="/images/v3/ship-open-sea.webp"
        imageAlt="Loaded container ship sailing through open sea"
        cta={{ label: "Request quote", href: "/quote" }}
      />
    </V3Shell>
  );
}
