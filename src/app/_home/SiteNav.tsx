"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, phone } from "./content";
import s from "./landing.module.css";

// Fixed top bar: transparent over the hero, frosted ink once the page scrolls.
// Phones get a full-width sheet menu (closes on link tap, Escape, or backdrop tap).

export const NAV_HEIGHT = "h-[72px] lg:h-[84px]";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        solid ? "border-b border-white/10 bg-[#06131d]/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className={`mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 ${NAV_HEIGHT}`}>
        <Link href="/" className="shrink-0" aria-label="K.H. Infinity home" onClick={() => setOpen(false)}>
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
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
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
            className="border-t border-white/10 bg-[#06131d] px-4 pb-6 pt-2 shadow-2xl sm:px-6"
          >
            <ul className="divide-y divide-white/10">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`${s.display} flex items-center justify-between py-4 text-3xl text-white`}
                  >
                    {l.label}
                    <span className="text-lg text-[#fa6a25]">↗</span>
                  </Link>
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
