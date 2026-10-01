// Shared v3 building blocks: eyebrow, section head, buttons, product card.
// Palette: ink #06131d · sea #0b2c3d · teal #12506a · mist #d5dee7 · paper #f2f4f6 · orange #fa6a25 / #d9531a

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import Flag, { flagCodeFor } from "./Flag";
import Icon from "./Icons";
import s from "./v3.module.css";

export const pad = "mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10";

// Button system: text is always white on orange or ink. Hover deepens orange, or
// fills ink/outline/glass buttons with orange. Every control gets a visible focus ring.
export const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#fa6a25] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06131d]";
const btnPrimary = `bg-[#fa6a25] text-white hover:bg-[#d9531a] ${focusRing}`;
const btnInk = `bg-[#06131d] text-white hover:bg-[#fa6a25] ${focusRing}`;
const btnGhost = `border border-white/30 text-white hover:border-[#fa6a25] hover:bg-[#fa6a25] ${focusRing}`;
const btnGhostDark = `border border-[#06131d]/20 text-[#0b2c3d] hover:border-[#fa6a25] hover:bg-[#fa6a25] hover:text-white ${focusRing}`;

/** Section backgrounds. `dark` tells children which text colours to use. */
export const tones = {
  ink: { cls: "bg-[#06131d] text-white", dark: false },
  sea: { cls: "bg-[#0b2c3d] text-white", dark: false },
  mist: { cls: "bg-[#d5dee7] text-[#06131d]", dark: true },
  paper: { cls: "bg-[#f2f4f6] text-[#06131d]", dark: true },
  white: { cls: "bg-white text-[#06131d]", dark: true },
} as const;
export type Tone = keyof typeof tones;

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
        dark ? "bg-[#06131d]/[0.06] text-[#0b2c3d]" : "bg-white/10 text-white/80"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#fa6a25]" />
      {children}
    </span>
  );
}

/** `index` renders the homepage's "(01)" counter; inner pages leave it out. */
export function SectionHead({
  index,
  eyebrow,
  title,
  id,
  dark = false,
  className = "",
  size = "lg",
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  id: string;
  dark?: boolean;
  className?: string;
  size?: "lg" | "md";
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        {index && <span className={`font-mono text-xs ${dark ? "text-[#06131d]/45" : "text-white/40"}`}>({index})</span>}
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      </div>
      <h2
        id={id}
        className={`${s.display} mt-6 ${size === "lg" ? "text-[clamp(2.8rem,6.4vw,5.75rem)]" : "text-[clamp(2.2rem,4.4vw,3.75rem)]"} ${
          dark ? "text-[#0b2c3d]" : "text-white"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

export function PillButton({
  href,
  children,
  tone = "orange",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "orange" | "ink";
}) {
  const cls = `group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 font-semibold transition-colors duration-300 ${
    tone === "orange" ? btnPrimary : btnInk
  }`;
  const inner = (
    <>
      {children}
      <span
        className={`grid h-9 w-9 place-items-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45 ${
          tone === "orange" ? "text-[#d9531a]" : "text-[#06131d]"
        }`}
      >
        <Icon name="arrow" className="h-4 w-4" />
      </span>
    </>
  );
  return href.startsWith("#") ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function GhostButton({
  href,
  children,
  glass = false,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  glass?: boolean;
  /** On light backgrounds */
  dark?: boolean;
}) {
  const cls = `inline-flex items-center rounded-full px-6 py-3 font-semibold transition-colors duration-300 ${dark ? btnGhostDark : btnGhost} ${
    glass ? s.glass : ""
  }`;
  return href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("#") ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Orange-underlined text link with a trailing arrow */
export function ArrowLink({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-10 items-center gap-2 font-semibold underline decoration-[#fa6a25] decoration-2 underline-offset-8 hover:text-[#fa6a25] ${
        dark ? "text-[#0b2c3d]" : "text-white"
      } ${focusRing}`}
    >
      {children} <Icon name="arrow" className="h-4 w-4" />
    </Link>
  );
}

export function Pill({ src }: { src: string }) {
  return (
    <span className={s.pill} aria-hidden="true">
      <Image src={src} alt="" fill sizes="96px" className="object-cover" />
    </span>
  );
}

export function ShipIcon() {
  return (
    <svg viewBox="0 0 30 14" className="h-[14px] w-[30px]" aria-hidden="true">
      <path d="M1 8h28l-4 5H4.5z" fill="#fff" />
      <path d="M1 8h28l-.8 1H1.8z" fill="#fa6a25" />
      <rect x="5" y="4" width="4" height="4" fill="#fa6a25" />
      <rect x="9.5" y="4" width="4" height="4" fill="#12506a" />
      <rect x="14" y="4" width="4" height="4" fill="#fa6a25" />
      <rect x="9.5" y="1" width="4" height="3" fill="#d5dee7" />
      <rect x="21" y="1.5" width="4" height="6.5" fill="#fff" />
      <rect x="22" y="2.5" width="2" height="1.2" fill="#0b2c3d" />
    </svg>
  );
}

/** Where a product comes from: Bangladesh for exports, the first sourcing countries for imports */
export function productOrigins(p: Product, max = 2) {
  return p.type === "export" ? ["Bangladesh"] : p.sourcing.countries.slice(0, max);
}

export function OriginList({ countries, className = "" }: { countries: string[]; className?: string }) {
  return (
    <span className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${className}`}>
      {countries.map((c) => {
        const code = flagCodeFor(c);
        return (
          <span key={c} className="inline-flex items-center gap-1.5">
            {code && <Flag code={code} className="h-3 w-[18px]" />}
            {c}
          </span>
        );
      })}
    </span>
  );
}

/** Dark product tile (homepage marquee, related rails). `index` shows a 01/02 counter. */
export function ProductCard({
  product: p,
  index,
  tabbable = true,
  sizes = "300px",
}: {
  product: Product;
  index?: number;
  tabbable?: boolean;
  sizes?: string;
}) {
  return (
    <Link
      href={`/products/${p.id}`}
      tabIndex={tabbable ? undefined : -1}
      className={`group relative flex h-full flex-col rounded-3xl bg-white/[0.04] p-3 ring-1 ring-white/10 transition hover:bg-white/[0.08] hover:ring-[#fa6a25]/60 ${focusRing}`}
    >
      <div className="flex items-center justify-between px-2 pb-3 pt-1">
        <span className="font-mono text-sm text-white/50">{index !== undefined ? String(index + 1).padStart(2, "0") : p.category}</span>
        <TypeBadge type={p.type} />
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#d5dee7]">
        <Image src={p.image} alt={p.name} fill sizes={sizes} className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 items-end justify-between gap-3 px-2 pb-2 pt-4">
        <div>
          {index !== undefined && <p className="text-xs uppercase tracking-[0.14em] text-white/50">{p.category}</p>}
          <h3 className="mt-1 text-lg font-semibold leading-tight">{p.name}</h3>
          <OriginList countries={productOrigins(p)} className="mt-2 text-xs text-white/55" />
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 transition group-hover:rotate-45 group-hover:bg-[#fa6a25] group-hover:text-white">
          <Icon name="arrow" className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export function TypeBadge({ type, className = "" }: { type: Product["type"]; className?: string }) {
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
        type === "export" ? "bg-[#fa6a25] text-white" : "bg-white/10 text-white/80"
      } ${className}`}
    >
      {type}
    </span>
  );
}
