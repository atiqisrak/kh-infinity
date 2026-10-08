"use client";

import Image from "next/image";
import { isRemoteImage } from "@/lib/image-src";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import Flag, { flagCodeFor } from "../Flag";
import Icon from "../Icons";
import Reveal from "../Reveal";
import { Eyebrow, GhostButton, PillButton, pad } from "../ui";
import s from "../v3.module.css";

// /products catalogue as an editorial showcase. Each product gets its own
// full-bleed band, and four layouts rotate (split · cinematic · poster ·
// spotlight) so the scroll keeps changing pace. Every product is in the
// server HTML; the filters only narrow the view.

export interface CatalogueItem {
  id: string;
  name: string;
  image: string;
  type: "import" | "export";
  category: string;
  description: string;
  origins: string[];
  hsCode?: string;
  packaging?: string;
  certifications: string[];
}

type TypeFilter = "all" | "import" | "export";

const TYPE_TABS: { key: TypeFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "import", label: "Imports" },
  { key: "export", label: "Exports" },
];

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#fa6a25] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2f4f6]";

const TINTS = ["#f4e6d7", "#dde8ee", "#e3ebdd", "#f6e0d3", "#e7e3f0", "#eee7cd"];
const LAYOUTS = ["split", "cinema", "poster", "spot"] as const;

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;
const anchor = (id: string) => `product-${id}`;

interface RowProps {
  p: CatalogueItem;
  index: number;
  total: number;
  /** Which pass through the four layouts this is: flips sides and picks tints */
  cycle: number;
}

// ── Shared pieces ─────────────────────────────────────────────────────────

function Counter({ p, index, total, dark = false }: { p: CatalogueItem; index: number; total: number; dark?: boolean }) {
  return (
    <p className={`${s.rise} flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs ${dark ? "text-white/50" : "text-[#06131d]/45"}`}>
      <span className={dark ? "text-[#fa6a25]" : "text-[#b8440f]"}>{String(index + 1).padStart(2, "0")}</span>
      <span className={`h-px w-6 sm:w-10 ${dark ? "bg-white/25" : "bg-[#06131d]/20"}`} />
      <span>{String(total).padStart(2, "0")}</span>
      <span className="whitespace-nowrap uppercase tracking-[0.14em] sm:ml-2">
        {p.type === "export" ? "Exported from Bangladesh" : "Imported into Bangladesh"}
      </span>
    </p>
  );
}

function Title({ p, dark = false, size = "text-[clamp(2.75rem,4.6vw,4.25rem)]" }: { p: CatalogueItem; dark?: boolean; size?: string }) {
  return (
    <>
      <div className={`${s.rise} mt-6`} style={delay(80)}>
        <Eyebrow dark={!dark}>{p.category}</Eyebrow>
      </div>
      <h3 className={`${s.display} ${s.rise} mt-5 ${size} ${dark ? "text-white" : "text-[#0b2c3d]"}`} style={delay(160)}>
        {p.name}
      </h3>
      <p
        className={`${s.rise} mt-5 line-clamp-3 max-w-md text-lg leading-relaxed ${dark ? "text-white/70" : "text-[#06131d]/70"}`}
        style={delay(240)}
      >
        {p.description}
      </p>
    </>
  );
}

function Origins({ p }: { p: CatalogueItem }) {
  return (
    <span className="flex flex-wrap gap-x-5 gap-y-1.5">
      {p.origins.map((c) => {
        const code = flagCodeFor(c);
        return (
          <span key={c} className="inline-flex items-center gap-2">
            {code && <Flag code={code} className="h-3 w-[18px]" />}
            {c}
          </span>
        );
      })}
    </span>
  );
}

function Facts({ p, dark = false, origins = true, className = "" }: { p: CatalogueItem; dark?: boolean; origins?: boolean; className?: string }) {
  const dt = `font-mono text-[11px] uppercase tracking-[0.16em] ${dark ? "text-white/45" : "text-[#06131d]/45"}`;
  const dd = `mt-2 text-[15px] leading-relaxed ${dark ? "text-white/90" : "text-[#0b2c3d]"}`;
  return (
    <dl className={`${s.rise} grid grid-cols-2 gap-x-8 gap-y-6 ${className}`} style={delay(320)}>
      {origins && (
        <div className="col-span-2">
          <dt className={dt}>{p.type === "export" ? "Made in" : "Sourced from"}</dt>
          <dd className={dd}>
            <Origins p={p} />
          </dd>
        </div>
      )}
      {p.packaging && (
        <div>
          <dt className={dt}>Packed in</dt>
          <dd className={dd}>{p.packaging}</dd>
        </div>
      )}
      {p.hsCode && (
        <div>
          <dt className={dt}>HS code</dt>
          <dd className={`${dd} font-mono text-sm`}>{p.hsCode}</dd>
        </div>
      )}
      {p.certifications.length > 0 && (
        <div className="col-span-2">
          <dt className={dt}>Certified</dt>
          <dd className={`${dd} flex flex-wrap gap-2`}>
            {p.certifications.map((c) => (
              <span key={c} className={`rounded-full border px-3 py-1 text-sm ${dark ? "border-white/20" : "border-[#06131d]/15"}`}>
                {c}
              </span>
            ))}
          </dd>
        </div>
      )}
    </dl>
  );
}

function Actions({ p, dark = false }: { p: CatalogueItem; dark?: boolean }) {
  return (
    <div className={`${s.rise} mt-9 flex flex-wrap gap-3`} style={delay(400)}>
      <PillButton href={`/products/${p.id}`} tone={dark ? "orange" : "ink"}>
        Explore product
      </PillButton>
      <GhostButton href="/quote" dark={!dark}>
        Request a quote
      </GhostButton>
    </div>
  );
}

/** Photo link; the title's CTA is the accessible one, so this stays out of AT and tab order */
function PhotoLink({ p, className = "", children }: { p: CatalogueItem; className?: string; children: React.ReactNode }) {
  return (
    <Link href={`/products/${p.id}`} tabIndex={-1} aria-hidden="true" className={`group block ${className}`}>
      {children}
    </Link>
  );
}

function Band({ p, bg, dark = false, children }: { p: CatalogueItem; bg: string; dark?: boolean; children: React.ReactNode }) {
  return (
    <article
      id={anchor(p.id)}
      aria-label={p.name}
      className={`relative overflow-hidden ${dark ? "text-white" : ""}`}
      style={{ background: bg }}
    >
      <Reveal threshold={0.15} className={`${pad} relative py-14 sm:py-20 lg:py-28`}>
        {children}
      </Reveal>
    </article>
  );
}

// ── 1 · Split: framed photo beside the copy on a soft tint ────────────────

function SplitRow({ p, index, total, cycle }: RowProps) {
  const flip = cycle % 2 === 1;
  return (
    <Band p={p} bg={TINTS[(cycle * 2) % TINTS.length]}>
      <div className="grid items-center gap-10 md:grid-cols-12 lg:gap-20">
        <PhotoLink p={p} className={`md:col-span-6 lg:col-span-7 ${flip ? "md:order-2" : ""}`}>
          <div className={`${s.riseImg} rounded-[2.25rem] bg-white p-3 shadow-[0_40px_80px_-50px_rgba(6,19,29,0.45)] sm:p-4`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
              <Image src={p.image} unoptimized={isRemoteImage(p.image)} alt="" fill sizes="(min-width: 1024px) 680px, 100vw" className="object-cover transition duration-[1.4s] ease-out group-hover:scale-[1.04]" />
            </div>
          </div>
        </PhotoLink>
        <div className={`md:col-span-6 lg:col-span-5 ${flip ? "md:order-1" : ""}`}>
          <Counter p={p} index={index} total={total} />
          <Title p={p} />
          <Facts p={p} className="mt-8 max-w-md border-t border-[#06131d]/10 pt-7" />
          <Actions p={p} />
        </div>
      </div>
    </Band>
  );
}

// ── 2 · Cinematic: wide photo, white card overlapping its lower edge ──────

function CinemaRow({ p, index, total }: RowProps) {
  return (
    <Band p={p} bg="#f2f4f6">
      <PhotoLink p={p}>
        <div className={`${s.riseImg} relative aspect-[4/3] overflow-hidden rounded-[2.25rem] sm:aspect-[16/9] lg:aspect-[21/9]`}>
          <Image src={p.image} unoptimized={isRemoteImage(p.image)} alt="" fill sizes="(min-width: 1320px) 1240px, 100vw" className="object-cover transition duration-[1.6s] ease-out group-hover:scale-[1.03]" />
        </div>
      </PhotoLink>
      <div className="relative mx-3 -mt-16 grid gap-10 rounded-[2rem] bg-white p-6 shadow-[0_40px_90px_-50px_rgba(6,19,29,0.5)] ring-1 ring-[#06131d]/[0.05] sm:mx-8 sm:p-10 lg:mx-0 lg:-mt-40 lg:ml-12 lg:max-w-[1000px] lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:p-12">
        <div>
          <Counter p={p} index={index} total={total} />
          <Title p={p} />
          <Actions p={p} />
        </div>
        <Facts p={p} className="content-start border-[#06131d]/10 max-lg:border-t max-lg:pt-8 lg:border-l lg:pl-12 lg:pt-2" />
      </div>
    </Band>
  );
}

// ── 3 · Poster: dark band, giant outlined name, photo as a tilted print ──

function PosterRow({ p, index, total }: RowProps) {
  return (
    <Band p={p} bg="#06131d" dark>
      <p
        aria-hidden="true"
        className={`${s.display} ${s.displayTight} ${s.strokeText} pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(5rem,15vw,14rem)] opacity-40`}
      >
        {p.name}
      </p>
      {/* Top padding tracks the outlined name's size so copy always starts below it */}
      <div className="relative grid items-center gap-12 pt-[clamp(3rem,12vw,11.5rem)] md:grid-cols-12 lg:gap-16">
        <PhotoLink p={p} className="md:col-span-6 lg:col-span-6 lg:col-start-1">
          <div className={`${s.riseImg}`}>
            <div className="-rotate-2 rounded-[1.75rem] bg-white p-3 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.8)] transition duration-700 group-hover:rotate-0 sm:p-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                <Image src={p.image} unoptimized={isRemoteImage(p.image)} alt="" fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover" />
              </div>
              <p className="flex items-center justify-between px-1 pb-1 pt-3 font-mono text-[11px] uppercase tracking-wider text-[#06131d]/55">
                <span>{p.category}</span>
                {p.hsCode && <span>HS {p.hsCode}</span>}
              </p>
            </div>
          </div>
        </PhotoLink>
        <div className="md:col-span-6 lg:col-span-5 lg:col-start-8">
          <Counter p={p} index={index} total={total} dark />
          <Title p={p} dark />
          <Facts p={p} dark className="mt-8 max-w-md border-t border-white/10 pt-7" />
          <Actions p={p} dark />
        </div>
      </div>
    </Band>
  );
}

// ── 4 · Spotlight: circular photo with origin flags orbiting it ──────────

const ORBIT = [
  "right-[2%] top-[8%] rotate-3",
  "left-[0%] bottom-[18%] -rotate-6",
  "right-[10%] bottom-[2%] rotate-2",
];

function SpotRow({ p, index, total, cycle }: RowProps) {
  const flip = cycle % 2 === 0;
  return (
    <Band p={p} bg={TINTS[(cycle * 2 + 1) % TINTS.length]}>
      <div className="grid items-center gap-12 md:grid-cols-12 lg:gap-20">
        <PhotoLink p={p} className={`md:col-span-6 ${flip ? "md:order-2" : ""}`}>
          <div className={`${s.riseImg} relative mx-auto aspect-square w-full max-w-[520px]`}>
            <div className="absolute inset-[6%] overflow-hidden rounded-full bg-white ring-[10px] ring-white shadow-[0_50px_90px_-50px_rgba(6,19,29,0.55)]">
              <Image src={p.image} unoptimized={isRemoteImage(p.image)} alt="" fill sizes="(min-width: 1024px) 480px, 90vw" className="object-cover transition duration-[1.4s] ease-out group-hover:scale-[1.06]" />
            </div>
            {/* Dashed orbit ring */}
            <div className="pointer-events-none absolute inset-0 rounded-full border border-dashed border-[#06131d]/20" />
            {p.origins.slice(0, ORBIT.length).map((c, i) => {
              const code = flagCodeFor(c);
              return (
                <span
                  key={c}
                  className={`absolute ${ORBIT[i]} inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-[#0b2c3d] shadow-[0_12px_30px_-12px_rgba(6,19,29,0.4)]`}
                >
                  {code && <Flag code={code} className="h-3 w-[18px]" />}
                  {c}
                </span>
              );
            })}
          </div>
        </PhotoLink>
        <div className={`md:col-span-6 lg:col-span-5 ${flip ? "md:order-1" : "lg:col-start-8"}`}>
          <Counter p={p} index={index} total={total} />
          <Title p={p} />
          {/* Origins already orbit the photo; keep them for screen readers */}
          <p className="sr-only">
            {p.type === "export" ? "Made in" : "Sourced from"} {p.origins.join(", ")}
          </p>
          <Facts p={p} origins={false} className="mt-8 max-w-md border-t border-[#06131d]/10 pt-7" />
          <Actions p={p} />
        </div>
      </div>
    </Band>
  );
}

const ROWS = { split: SplitRow, cinema: CinemaRow, poster: PosterRow, spot: SpotRow };

// ── Interlude: a breather every four products that previews what's next ──

function UpNext({ items }: { items: CatalogueItem[] }) {
  return (
    <aside aria-label="Up next" className="bg-white">
      <Reveal className={`${pad} py-16 text-center lg:py-20`}>
        <p className={`${s.rise} font-mono text-[11px] uppercase tracking-[0.2em] text-[#06131d]/45`}>Keep scrolling · up next</p>
        <ul className={`${s.rise} mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-5`} style={delay(120)}>
          {items.map((p) => (
            <li key={p.id}>
              <a
                href={`#${anchor(p.id)}`}
                className={`group inline-flex items-center gap-3 rounded-full ${focusRing}`}
              >
                <span className="relative h-12 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-transparent transition group-hover:ring-[#fa6a25] sm:h-14 sm:w-24">
                  <Image src={p.image} unoptimized={isRemoteImage(p.image)} alt="" fill sizes="96px" className="object-cover" />
                </span>
                <span className={`${s.display} text-2xl text-[#0b2c3d] transition group-hover:text-[#d9531a] sm:text-3xl`}>{p.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </aside>
  );
}

function Showcase({ items }: { items: CatalogueItem[] }) {
  return (
    <div>
      {items.map((p, i) => {
        const Row = ROWS[LAYOUTS[i % LAYOUTS.length]];
        const next = items.slice(i + 1, i + 5);
        const breather = i % 4 === 3 && next.length > 0;
        return (
          <Fragment key={p.id}>
            <Row p={p} index={i} total={items.length} cycle={Math.floor(i / 4)} />
            {breather && <UpNext items={next} />}
          </Fragment>
        );
      })}
    </div>
  );
}

// Export programme feature closing the Exports group
function ProgrammeFeature() {
  return (
    <div className="bg-[#fa6a25]">
      <Reveal threshold={0.2} className={`${pad} py-20 lg:py-28`}>
        <Link
          href="/products/potato-gulf"
          className={`${s.riseImg} group grid overflow-hidden rounded-[2.25rem] bg-[#06131d] text-white lg:grid-cols-2 ${focusRing}`}
        >
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
            <Image
              src="/images/potato-export/hero.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover transition duration-[1.4s] ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <Eyebrow>Export programme</Eyebrow>
            <h3 className={`${s.display} mt-6 text-[clamp(2.75rem,5vw,4.75rem)]`}>
              Potatoes
              <br />
              <span className="text-[#fa6a25]">for the Gulf</span>
            </h3>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
              Graded, packed and documented for Gulf retail and wholesale, with hot-climate transit protection built into
              every load.
            </p>
            <span className="mt-10 inline-flex items-center gap-3 font-semibold">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#fa6a25] transition duration-300 group-hover:rotate-45">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
              Specs, packing &amp; documents
            </span>
          </div>
        </Link>
      </Reveal>
    </div>
  );
}

function GroupHead({ id, eyebrow, title, body, count }: { id: string; eyebrow: string; title: string; body: string; count: number }) {
  return (
    <div className={`${pad} flex flex-col justify-between gap-6 pb-14 pt-10 lg:flex-row lg:items-end lg:pb-20`}>
      <div>
        <Eyebrow dark>{eyebrow}</Eyebrow>
        <h2 id={id} className={`${s.display} mt-6 text-[clamp(3rem,7vw,6.5rem)] text-[#0b2c3d]`}>
          {title}
        </h2>
      </div>
      <div className="max-w-sm lg:pb-3">
        <p className="leading-relaxed text-[#06131d]/65">{body}</p>
        <p className="mt-3 font-mono text-xs uppercase tracking-wider text-[#b8440f]">
          {count} {count === 1 ? "product line" : "product lines"}
        </p>
      </div>
    </div>
  );
}

export default function ProductCatalogue({ items }: { items: CatalogueItem[] }) {
  const [type, setType] = useState<TypeFilter>("all");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");

  // Deep link: /products?category=Phone%20Parts (used by product-page breadcrumbs)
  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get("category");
    if (wanted && items.some((p) => p.category === wanted)) setCategory(wanted);
  }, [items]);

  const q = query.trim().toLowerCase();
  const matches = (p: CatalogueItem) =>
    !q || [p.name, p.category, p.description, p.hsCode ?? "", ...p.origins].some((f) => f.toLowerCase().includes(q));

  const inType = items.filter((p) => (type === "all" || p.type === type) && matches(p));
  const categories = [...new Set(inType.map((p) => p.category))].sort();
  const visible = inType.filter((p) => !category || p.category === category);
  const grouped = type === "all" && !category && !q;

  const imports = items.filter((p) => p.type === "import");
  const exports = items.filter((p) => p.type === "export");

  const reset = () => {
    setType("all");
    setCategory("");
    setQuery("");
  };

  const field = `min-h-12 rounded-full bg-white text-sm text-[#0b2c3d] ring-1 ring-[#06131d]/10 transition focus-within:ring-2 focus-within:ring-[#fa6a25]`;

  return (
    <div>
      {/* Calm filter row: direction, category, search */}
      <div className={`${pad} flex flex-col gap-3 py-8 md:flex-row md:items-center lg:py-14`}>
        <div
          role="group"
          aria-label="Filter by trade direction"
          className="grid shrink-0 grid-cols-3 rounded-full bg-white p-1 ring-1 ring-[#06131d]/10 md:inline-flex md:w-fit"
        >
          {TYPE_TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              aria-pressed={type === t.key}
              onClick={() => {
                setType(t.key);
                setCategory("");
              }}
              className={`min-h-10 rounded-full px-5 text-sm font-semibold transition-colors ${focusRing} ${
                type === t.key ? "bg-[#06131d] text-white" : "text-[#0b2c3d] hover:text-[#b8440f]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <label className={`${field} relative flex items-center md:w-60`}>
          <span className="sr-only">Category</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="h-full w-full cursor-pointer appearance-none rounded-full bg-transparent py-3 pl-5 pr-10 outline-none"
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <Icon name="arrow" className="pointer-events-none absolute right-4 h-4 w-4 rotate-[135deg] text-[#06131d]/40" />
        </label>

        <label className={`${field} relative flex items-center md:ml-auto md:w-72`}>
          <span className="sr-only">Search products</span>
          <Icon name="search" className="pointer-events-none absolute left-5 h-4 w-4 text-[#06131d]/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCategory("");
            }}
            placeholder="Search products"
            className="h-full w-full rounded-full bg-transparent py-3 pl-12 pr-5 outline-none placeholder:text-[#06131d]/40"
          />
        </label>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "product" : "products"}
      </p>

      {!grouped && visible.length > 0 && (
        <div className={`${pad} flex items-center justify-between gap-4 pb-6`}>
          <p className="font-mono text-xs uppercase tracking-wider text-[#06131d]/55">
            Showing <span className="text-[#b8440f]">{visible.length}</span> of {items.length}
          </p>
          <button
            type="button"
            onClick={reset}
            className={`text-sm font-semibold text-[#0b2c3d] underline decoration-[#fa6a25] decoration-2 underline-offset-4 ${focusRing}`}
          >
            Clear filters
          </button>
        </div>
      )}

      {grouped ? (
        <>
          <section aria-labelledby="imports-heading">
            <GroupHead
              id="imports-heading"
              eyebrow="Import products"
              title="Global selections"
              body="Sourced from mills, farms and factories we have vetted, then shipped and cleared into Bangladesh by our own team."
              count={imports.length}
            />
            <Showcase items={imports} />
          </section>
          <section aria-labelledby="exports-heading" id="exports" className="pt-20 lg:pt-28">
            <GroupHead
              id="exports-heading"
              eyebrow="Export products"
              title="Local excellence"
              body="Bangladeshi goods graded, packed and documented for buyers abroad."
              count={exports.length}
            />
            <Showcase items={exports} />
            <ProgrammeFeature />
          </section>
        </>
      ) : visible.length > 0 ? (
        <>
          <Showcase items={visible} />
          {type === "export" && !category && !q && <ProgrammeFeature />}
        </>
      ) : (
        <div className={pad}>
          <div className="my-10 rounded-[2.25rem] bg-white px-6 py-20 text-center">
            <p className={`${s.display} text-[clamp(2rem,4vw,3rem)] text-[#0b2c3d]`}>Nothing matches that yet</p>
            <p className="mx-auto mt-4 max-w-sm leading-relaxed text-[#06131d]/60">
              We source to order, so if it isn&apos;t listed, ask us. Or clear the filters to see everything.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={reset}
                className={`min-h-12 rounded-full bg-[#06131d] px-6 text-sm font-semibold text-white hover:bg-[#fa6a25] ${focusRing}`}
              >
                Clear filters
              </button>
              <GhostButton href="/quote" dark>
                Request a product
              </GhostButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
