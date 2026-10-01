// Content blocks for inner v3 pages. All are server components.

import Icon, { type IconName } from "./Icons";
import { SectionHead, pad, tones, type Tone } from "./ui";
import s from "./v3.module.css";

export const labelCls = "font-mono text-[11px] uppercase tracking-[0.16em]";

/**
 * Page section: background tone, standard padding and container. Pass `head`
 * for the usual eyebrow + display title (+ optional `intro` paragraph on the
 * right). The heading id is derived from `id`.
 */
export function Section({
  id,
  tone = "ink",
  grid = false,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  headSize = "lg",
  label,
}: {
  id: string;
  tone?: Tone;
  /** Faint technical grid (dark tones only) */
  grid?: boolean;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  headSize?: "lg" | "md";
  /** aria-label when the section has no visible title */
  label?: string;
}) {
  const t = tones[tone];
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      aria-label={title ? undefined : label}
      className={`${t.cls} ${grid ? s.gridBg : ""} py-20 lg:py-28 ${className}`}
    >
      <div className={pad}>
        {title && eyebrow && (
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHead dark={t.dark} eyebrow={eyebrow} id={headingId} title={title} size={headSize} />
            {intro && <div className={`max-w-md lg:pb-3 ${t.dark ? "text-[#06131d]/70" : "text-white/70"}`}>{intro}</div>}
          </div>
        )}
        {children && <div className={title ? "mt-12" : ""}>{children}</div>}
      </div>
    </section>
  );
}

/** Check-marked list */
export function CheckList({ items, dark = true, className = "" }: { items: React.ReactNode[]; dark?: boolean; className?: string }) {
  return (
    <ul className={`grid gap-3 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className={`flex items-start gap-3 text-[15px] leading-snug ${dark ? "text-[#06131d]/75" : "text-white/80"}`}>
          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-[#fa6a25]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Light card: icon disc, title, check list or free content */
export function ListCard({
  icon,
  title,
  items,
  children,
  className = "",
}: {
  icon: IconName;
  title: string;
  items?: React.ReactNode[];
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-3xl bg-white p-6 ring-1 ring-[#06131d]/[0.06] sm:p-8 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fa6a25]/10 text-[#d9531a]">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-[#0b2c3d]">{title}</h3>
      </div>
      {items && <CheckList items={items} className="mt-5" />}
      {children && <div className="mt-4 text-[15px] leading-relaxed text-[#06131d]/70">{children}</div>}
    </div>
  );
}

/** Key/value rows (spec tables, nutrition, lane facts) */
export function RowTable({
  title,
  rows,
  dark = false,
  className = "",
}: {
  title?: string;
  rows: Record<string, React.ReactNode> | [string, React.ReactNode][];
  /** true = on a dark background */
  dark?: boolean;
  className?: string;
}) {
  const entries = Array.isArray(rows) ? rows : Object.entries(rows);
  return (
    <div className={`rounded-3xl p-6 sm:p-8 ${dark ? "bg-white/[0.05] ring-1 ring-white/10" : "bg-[#f2f4f6]"} ${className}`}>
      {title && <h3 className={`${labelCls} ${dark ? "text-white/50" : "text-[#06131d]/50"}`}>{title}</h3>}
      <dl className={`${title ? "mt-4" : ""} divide-y ${dark ? "divide-white/10" : "divide-[#06131d]/10"}`}>
        {entries.map(([k, v]) => (
          <div key={k} className="grid gap-1 py-3.5 sm:grid-cols-[minmax(120px,40%)_1fr] sm:gap-6">
            <dt className={`${labelCls} sm:pt-0.5 ${dark ? "text-white/45" : "text-[#06131d]/50"}`}>{k}</dt>
            <dd className={`text-[15px] ${dark ? "text-white/90" : "font-medium text-[#0b2c3d]"}`}>{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/**
 * Numbered feature cards (the homepage "Why KHI" pattern): orange mono number,
 * display title, body. Works on light and dark tones.
 */
export function NumberedGrid({
  items,
  dark = true,
  cols = 4,
}: {
  items: { title: string; body: React.ReactNode }[];
  dark?: boolean;
  cols?: 2 | 3 | 4;
}) {
  const grid = cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";
  return (
    <div className={`grid gap-x-10 gap-y-10 ${grid}`}>
      {items.map((r, i) => (
        <div key={r.title} className={`border-t pt-5 ${dark ? "border-[#06131d]/20" : "border-white/15"}`}>
          <span className={`font-mono text-sm ${dark ? "text-[#d9531a]" : "text-[#fa6a25]"}`}>{String(i + 1).padStart(2, "0")}</span>
          <h3 className={`${s.display} mt-3 text-[1.75rem] ${dark ? "text-[#0b2c3d]" : "text-white"}`}>{r.title}</h3>
          <div className={`mt-3 text-[15px] leading-relaxed ${dark ? "text-[#06131d]/70" : "text-white/70"}`}>{r.body}</div>
        </div>
      ))}
    </div>
  );
}

/** Big-figure cards for dark sections (lead times, capacities) */
export function FigureCards({ items }: { items: { value: string; label: string; note?: string }[] }) {
  const cols = items.length >= 4 ? "md:grid-cols-2 lg:grid-cols-4" : items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  return (
    <dl className={`grid gap-4 ${cols}`}>
      {items.map((t) => (
        <div key={t.label} className="flex flex-col-reverse rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10">
          <dt>
            <span className="block font-semibold">{t.label}</span>
            {t.note && <span className="mt-1 block text-sm text-white/55">{t.note}</span>}
          </dt>
          <dd className={`${s.display} mb-4 text-5xl text-[#fa6a25]`}>{t.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Rounded chips; `icon` puts a small receipt/check icon in each */
export function ChipList({
  items,
  dark = false,
  icon,
  className = "",
}: {
  items: string[];
  /** true = on a light background */
  dark?: boolean;
  icon?: IconName;
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((d) => (
        <li
          key={d}
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm ${
            dark ? "border border-[#06131d]/12 bg-white text-[#0b2c3d]" : "border border-white/15 text-white/85"
          }`}
        >
          {icon && <Icon name={icon} className={`h-4 w-4 ${dark ? "text-[#d9531a]" : "text-[#fa6a25]"}`} />}
          {d}
        </li>
      ))}
    </ul>
  );
}

/**
 * FAQ accordion (native <details>). First item open. `dark` = light background.
 * Emit FAQPage JSON-LD separately if the page needs it.
 */
export function FaqList({
  items,
  dark = true,
  className = "",
}: {
  items: { q: string; a: React.ReactNode }[];
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${s.accordion} divide-y rounded-3xl px-6 sm:px-8 ${
        dark ? "divide-[#06131d]/10 bg-[#f2f4f6] text-[#06131d]" : "divide-white/10 bg-white/[0.05] text-white ring-1 ring-white/10"
      } ${className}`}
    >
      {items.map((f, i) => (
        <details key={f.q} className="group" open={i === 0}>
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-6">
            <h3 className="text-lg font-semibold tracking-tight">{f.q}</h3>
            <span
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition group-open:rotate-45 group-open:bg-[#fa6a25] group-open:text-white ${
                dark ? "bg-white" : "bg-white/10"
              }`}
            >
              <Icon name="plus" className="h-4 w-4" />
            </span>
          </summary>
          <div className={`-mt-1 max-w-2xl pb-6 leading-relaxed ${dark ? "text-[#06131d]/70" : "text-white/70"}`}>{f.a}</div>
        </details>
      ))}
    </div>
  );
}

/** Mid-page link band in KH orange (e.g. "Sourcing for the Gulf? Open the hub") */
export function OrangeBand({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#fa6a25] text-white">
      <div className={`${pad} py-5`}>{children}</div>
    </div>
  );
}

// ── Form controls ─────────────────────────────────────────────────────────
// Dark: on ink/sea or inside a glass card. Light: on paper/white.
export const inputDark =
  "w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-[15px] text-white placeholder:text-white/35 outline-none transition focus:border-[#fa6a25] focus:bg-white/[0.09] focus:ring-4 focus:ring-[#fa6a25]/20";
export const inputLight =
  "w-full rounded-2xl border border-[#06131d]/12 bg-white px-4 py-3 text-[15px] text-[#06131d] placeholder:text-[#06131d]/35 outline-none transition focus:border-[#fa6a25] focus:ring-4 focus:ring-[#fa6a25]/15";
export const fieldLabelDark = `${labelCls} mb-2 block text-white/55`;
export const fieldLabelLight = `${labelCls} mb-2 block text-[#06131d]/55`;
/** Orange submit button with the rotating arrow disc (use on <button>) */
export const submitCls =
  "group inline-flex items-center justify-between gap-3 rounded-full bg-[#fa6a25] py-2 pl-6 pr-2 font-semibold text-white transition-colors hover:bg-[#d9531a] disabled:opacity-60 outline-none focus-visible:ring-2 focus-visible:ring-[#fa6a25] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06131d]";
export function SubmitArrow() {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#d9531a] transition-transform group-hover:rotate-45">
      <Icon name="arrow" className="h-4 w-4" />
    </span>
  );
}
