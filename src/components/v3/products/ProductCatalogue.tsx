"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Flag, { flagCodeFor } from "../Flag";
import Icon from "../Icons";
import s from "../v3.module.css";

// Filterable product grid for /products. Server-rendered with every product
// visible, grouped into Imports and Exports; the filters only narrow the view.

export interface CatalogueItem {
  id: string;
  name: string;
  image: string;
  type: "import" | "export";
  category: string;
  description: string;
  origins: string[];
  hsCode?: string;
}

type TypeFilter = "all" | "import" | "export";

const TYPE_TABS: { key: TypeFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "import", label: "Imports" },
  { key: "export", label: "Exports" },
];

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#fa6a25] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2f4f6]";

function Tile({ p }: { p: CatalogueItem }) {
  return (
    <Link
      href={`/products/${p.id}`}
      className={`group flex h-full flex-col rounded-3xl bg-white p-3 ring-1 ring-[#06131d]/[0.06] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(6,19,29,0.45)] hover:ring-[#fa6a25]/50 ${focusRing}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#d5dee7]">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
            p.type === "export" ? "bg-[#fa6a25] text-white" : "bg-[#06131d]/75 text-white backdrop-blur"
          }`}
        >
          {p.type}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#d9531a]">{p.category}</p>
        <h3 className="mt-1.5 text-lg font-semibold leading-tight tracking-tight text-[#0b2c3d]">{p.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#06131d]/60">{p.description}</p>
        <div className="mt-auto pt-4" />
        <div className="flex items-end justify-between gap-3 border-t border-[#06131d]/[0.08] pt-4">
          <div className="min-w-0 text-xs text-[#06131d]/60">
            <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {p.origins.map((c) => {
                const code = flagCodeFor(c);
                return (
                  <span key={c} className="inline-flex items-center gap-1.5">
                    {code && <Flag code={code} className="h-3 w-[18px]" />}
                    {c}
                  </span>
                );
              })}
            </span>
            {p.hsCode && <span className="mt-1 block font-mono text-[11px] text-[#06131d]/45">HS {p.hsCode}</span>}
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#06131d]/15 text-[#0b2c3d] transition group-hover:rotate-45 group-hover:border-[#fa6a25] group-hover:bg-[#fa6a25] group-hover:text-white">
            <Icon name="arrow" className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

// Export programme card closing the Exports group
function ProgrammeTile() {
  return (
    <Link
      href="/products/potato-gulf"
      className={`group relative isolate flex min-h-[340px] h-full flex-col justify-end overflow-hidden rounded-3xl p-6 text-white ${focusRing}`}
    >
      <Image
        src="/images/potato-export/hero.webp"
        alt=""
        fill
        sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 100vw"
        className="-z-20 object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#b8440f] via-[#fa6a25]/70 to-[#fa6a25]/10" />
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/80">Export programme</p>
      <h3 className={`${s.display} mt-2 text-4xl`}>
        Potatoes
        <br />
        for the Gulf
      </h3>
      <span className="mt-5 inline-flex items-center gap-3 text-sm font-semibold">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#d9531a] transition group-hover:rotate-45">
          <Icon name="arrow" className="h-4 w-4" />
        </span>
        Specs, packing &amp; documents
      </span>
    </Link>
  );
}

function Grid({ items, withProgramme = false }: { items: CatalogueItem[]; withProgramme?: boolean }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((p) => (
        <li key={p.id}>
          <Tile p={p} />
        </li>
      ))}
      {withProgramme && (
        <li>
          <ProgrammeTile />
        </li>
      )}
    </ul>
  );
}

function GroupHead({ id, eyebrow, title, count }: { id: string; eyebrow: string; title: string; count: number }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#06131d]/10 pb-5">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#06131d]/50">{eyebrow}</p>
        <h2 id={id} className={`${s.display} mt-2 text-[clamp(2rem,4vw,3.25rem)] text-[#0b2c3d]`}>
          {title}
        </h2>
      </div>
      <p className="font-mono text-xs uppercase tracking-wider text-[#06131d]/50">
        {count} {count === 1 ? "line" : "lines"}
      </p>
    </div>
  );
}

export default function ProductCatalogue({ items }: { items: CatalogueItem[] }) {
  const [type, setType] = useState<TypeFilter>("all");
  const [category, setCategory] = useState<string | null>(null);

  const inType = items.filter((p) => type === "all" || p.type === type);
  const categories = [...new Set(inType.map((p) => p.category))].sort();
  const visible = inType.filter((p) => !category || p.category === category);
  const grouped = type === "all" && !category;

  const imports = items.filter((p) => p.type === "import");
  const exports = items.filter((p) => p.type === "export");

  const chip = (active: boolean) =>
    `inline-flex min-h-10 items-center rounded-full px-4 text-sm font-medium transition-colors ${focusRing} ${
      active ? "bg-[#06131d] text-white" : "bg-white text-[#0b2c3d] ring-1 ring-[#06131d]/10 hover:ring-[#fa6a25]"
    }`;

  return (
    <div>
      {/* Filter bar: sticks under the fixed nav while browsing */}
      <div className="sticky top-[72px] z-20 -mx-4 mb-10 border-b border-[#06131d]/[0.08] bg-[#f2f4f6]/90 px-4 py-4 backdrop-blur-md sm:-mx-6 sm:px-6 lg:top-[84px] lg:-mx-10 lg:px-10">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
          <div role="group" aria-label="Filter by trade direction" className="inline-flex w-fit shrink-0 rounded-full bg-white p-1 ring-1 ring-[#06131d]/10">
            {TYPE_TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                aria-pressed={type === t.key}
                onClick={() => {
                  setType(t.key);
                  setCategory(null);
                }}
                className={`min-h-10 rounded-full px-5 text-sm font-semibold transition-colors ${focusRing} ${
                  type === t.key ? "bg-[#fa6a25] text-white" : "text-[#0b2c3d] hover:text-[#d9531a]"
                }`}
              >
                {t.label}
                <span className={`ml-1.5 font-mono text-[11px] ${type === t.key ? "text-white/80" : "text-[#06131d]/40"}`}>
                  {t.key === "all" ? items.length : t.key === "import" ? imports.length : exports.length}
                </span>
              </button>
            ))}
          </div>
          {/* One scrollable row of categories, faded at the edges */}
          <div
            role="group"
            aria-label="Filter by category"
            className={`${s.chipRail} -mx-4 flex min-w-0 flex-1 gap-2 overflow-x-auto px-4 py-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0`}
          >
            <button type="button" aria-pressed={!category} onClick={() => setCategory(null)} className={`${chip(!category)} shrink-0`}>
              All categories
            </button>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => setCategory(category === c ? null : c)}
                className={`${chip(category === c)} shrink-0 whitespace-nowrap`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "product" : "products"}
      </p>

      {grouped ? (
        <div className="grid gap-20">
          <section aria-labelledby="imports-heading">
            <GroupHead id="imports-heading" eyebrow="Import products" title="Global selections" count={imports.length} />
            <Grid items={imports} />
          </section>
          <section aria-labelledby="exports-heading" id="exports">
            <GroupHead id="exports-heading" eyebrow="Export products" title="Local excellence" count={exports.length} />
            <Grid items={exports} withProgramme />
          </section>
        </div>
      ) : visible.length > 0 ? (
        <Grid items={visible} withProgramme={type === "export" && !category} />
      ) : (
        <p className="rounded-3xl bg-white p-10 text-center text-[#06131d]/60">No products match these filters.</p>
      )}
    </div>
  );
}
