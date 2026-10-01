"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavEntry } from "./nav";
import { phone } from "./site";
import s from "./v3.module.css";

// Fixed top bar: transparent over the hero, frosted ink once the page scrolls.
// Desktop: groups open a panel under the bar (hover, click or keyboard; Escape or
// an outside click closes it). Phones get a full-width sheet with accordions.

export const NAV_HEIGHT = "h-[72px] lg:h-[84px]";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true">
      <path d="m3 4.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Panel columns: a list longer than 6 links (or the only column) takes two tracks
const colSpan = (col: NonNullable<NavEntry["columns"]>[number], count: number) => (count === 1 || col.links.length > 6 ? 2 : 1);

function isActive(pathname: string, entry: NavEntry) {
  const hrefs = [entry.href, ...(entry.columns ?? []).flatMap((c) => c.links.map((l) => l.href))];
  return hrefs.some((h) => h !== "/" && (pathname === h || pathname.startsWith(`${h}/`)));
}

export default function SiteNav({ entries }: { entries: NavEntry[] }) {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  // When hover just opened a panel, the click that follows must not close it again
  const hoverOpenedAt = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything when the route changes
  useEffect(() => {
    setOpen(false);
    setPanel(null);
  }, [pathname]);

  useEffect(() => {
    if (!panel) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPanel(null);
    const onDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setPanel(null);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [panel]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  // Hover opens with no delay; leaving waits a beat so the pointer can cross the gap
  const hoverOpen = (id: string | null) => {
    clearTimeout(hoverTimer.current);
    if (id) {
      if (panel !== id) hoverOpenedAt.current = Date.now();
      setPanel(id);
    }
    else hoverTimer.current = setTimeout(() => setPanel(null), 160);
  };

  const solid = scrolled || open || panel !== null;
  const activeEntry = entries.find((e) => e.label === panel);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        solid ? "border-b border-white/10 bg-[#06131d]/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
      onMouseLeave={() => hoverOpen(null)}
    >
      <div className={`mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 ${NAV_HEIGHT}`}>
        <Link href="/" className="shrink-0" aria-label="K.H. Infinity home">
          <Image
            src="/images/brand/official_logo_lite.svg"
            alt="K.H. Infinity"
            width={96}
            height={57}
            priority
            className="h-10 w-auto lg:h-12"
          />
        </Link>

        <nav
          aria-label="Main"
          className={`hidden items-center gap-1 rounded-full px-2 py-1.5 transition lg:flex ${solid ? "bg-white/[0.04] ring-1 ring-white/10" : s.glass}`}
        >
          {entries.map((e) => {
            const active = isActive(pathname, e);
            const base = `inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition hover:bg-white/10 hover:text-white ${
              active || panel === e.label ? "bg-white/10 text-white" : "text-white/80"
            }`;
            return e.columns ? (
              <button
                key={e.label}
                type="button"
                className={base}
                aria-expanded={panel === e.label}
                aria-controls="nav-panel"
                onClick={() =>
                  setPanel((p) => (p === e.label && Date.now() - hoverOpenedAt.current > 500 ? null : e.label))
                }
                onMouseEnter={() => hoverOpen(e.label)}
              >
                {e.label}
                <Chevron open={panel === e.label} />
              </button>
            ) : (
              <Link
                key={e.label}
                href={e.href}
                className={base}
                aria-current={active ? "page" : undefined}
                onMouseEnter={() => hoverOpen(null)}
              >
                {e.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/quote"
            className="hidden rounded-full bg-[#fa6a25] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#d9531a] sm:inline-flex"
          >
            Request a quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`${s.glass} grid h-11 w-11 place-items-center rounded-full lg:hidden`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop panel */}
      {activeEntry?.columns && (
        <div
          id="nav-panel"
          className="absolute inset-x-0 top-full hidden border-b border-white/10 bg-[#06131d]/95 shadow-2xl backdrop-blur-xl lg:block"
          onMouseEnter={() => hoverOpen(activeEntry.label)}
        >
          <div className="mx-auto grid max-w-[1320px] grid-cols-12 gap-10 px-10 py-10">
            <div className="col-span-3 border-r border-white/10 pr-8">
              <p className={`${s.display} text-4xl leading-none`}>{activeEntry.label}</p>
              {activeEntry.blurb && <p className="mt-3 text-sm leading-relaxed text-white/60">{activeEntry.blurb}</p>}
              <Link
                href={activeEntry.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-[#fa6a25] decoration-2 underline-offset-8 hover:text-[#fa6a25]"
              >
                {activeEntry.overview ?? `All ${activeEntry.label.toLowerCase()}`} <span aria-hidden="true">↗</span>
              </Link>
            </div>
            {/* Long lists (or a lone column) split into two sub-columns */}
            <div
              className="col-span-9 grid gap-x-8 gap-y-6"
              style={{ gridTemplateColumns: `repeat(${activeEntry.columns.reduce((n, c) => n + colSpan(c, activeEntry.columns!.length), 0)}, minmax(0, 1fr))` }}
            >
              {activeEntry.columns.map((col) => (
                <div key={col.title} style={{ gridColumn: `span ${colSpan(col, activeEntry.columns!.length)}` }}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">{col.title}</p>
                  <ul className={`mt-3 grid gap-1 ${colSpan(col, activeEntry.columns!.length) > 1 ? "grid-cols-2 gap-x-4" : ""}`}>
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className={`group flex items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-white/[0.06] ${
                            pathname === l.href ? "bg-white/[0.06]" : ""
                          }`}
                        >
                          {l.image && (
                            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10">
                              <Image src={l.image} alt="" fill sizes="40px" className="object-cover" />
                            </span>
                          )}
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-white group-hover:text-[#fa6a25]">{l.label}</span>
                            {l.note && <span className="block truncate text-xs text-white/50">{l.note}</span>}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Phone / tablet sheet */}
      {open && (
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-[72px] -z-10 bg-[#06131d]/60 backdrop-blur-sm"
          />
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="max-h-[calc(100svh-72px)] overflow-y-auto border-t border-white/10 bg-[#06131d] px-4 pb-6 pt-2 shadow-2xl sm:px-6"
          >
            <ul className={`${s.accordion} divide-y divide-white/10`}>
              {entries.map((e) => (
                <li key={e.label}>
                  {e.columns ? (
                    <details className="group">
                      <summary className={`${s.display} flex cursor-pointer items-center justify-between py-4 text-3xl text-white`}>
                        {e.label}
                        <span className="text-lg text-[#fa6a25] transition group-open:rotate-45">+</span>
                      </summary>
                      <div className="pb-4">
                        <Link href={e.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-[#fa6a25]">
                          {e.overview ?? `All ${e.label.toLowerCase()}`} ↗
                        </Link>
                        {e.columns.map((col) => (
                          <div key={col.title} className="mt-2">
                            {e.columns!.length > 1 && (
                              <p className="pt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">{col.title}</p>
                            )}
                            <ul>
                              {col.links.map((l) => (
                                <li key={l.href}>
                                  <Link
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="flex min-h-11 items-center text-[15px] text-white/80 hover:text-white"
                                  >
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={e.href}
                      onClick={() => setOpen(false)}
                      className={`${s.display} flex items-center justify-between py-4 text-3xl text-white`}
                    >
                      {e.label}
                      <span className="text-lg text-[#fa6a25]">↗</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-5 grid gap-3">
              <Link
                href="/quote"
                onClick={() => setOpen(false)}
                className="rounded-full bg-[#fa6a25] py-3.5 text-center font-semibold text-white hover:bg-[#d9531a]"
              >
                Request a quote
              </Link>
              <a href={phone.href} className="rounded-full border border-white/20 py-3.5 text-center font-semibold text-white">
                {phone.display}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
