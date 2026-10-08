"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CatalogItem } from "@/lib/parts-catalog";

// ─── CatalogModal ─────────────────────────────────────────────────────────
// Detail view for one catalogue item: large photo (with the item's other
// photos as thumbnails), then its full name, filter facets, a short
// description and enquiry actions.
// • ← / → step through the items in the current filter, Esc closes
// • Clicking the backdrop closes; focus moves into the dialog and back out

const WHATSAPP = "8801577081856";

interface CatalogModalProps {
  items: CatalogItem[];
  index: number;
  groupLabel: string;
  variantLabel: string;
  onClose: () => void;
  onStep: (delta: number) => void;
}

export default function CatalogModal({ items, index, groupLabel, variantLabel, onClose, onStep }: CatalogModalProps) {
  const item = items[index];
  const [photo, setPhoto] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const multi = items.length > 1;

  // New item → back to its first photo
  useEffect(() => setPhoto(0), [item?.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && multi) onStep(-1);
      else if (e.key === "ArrowRight" && multi) onStep(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onStep, multi]);

  // Lock page scroll and move focus into the dialog; restore both on close
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      opener?.focus?.();
    };
  }, []);

  if (!item) return null;
  const src = item.images[Math.min(photo, item.images.length - 1)];
  const enquiry = `Hello K.H. Infinity, I'd like a price for: ${item.name} (${item.group} · ${item.variant}).`;

  const arrow =
    "grid h-11 w-11 place-items-center rounded-full bg-[#06131d]/70 text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-[#fa6a25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fa6a25]";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="catalog-modal-title"
      aria-describedby="catalog-modal-desc"
      className="fixed inset-0 z-[9999] flex items-end justify-center bg-[#020a10]/85 backdrop-blur-md sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[100dvh] w-full max-w-3xl flex-col overflow-hidden bg-[#0b1a24] shadow-2xl ring-1 ring-white/10 sm:max-h-[92vh] sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── photo ─────────────────────────────────────────────────────── */}
        <div className="relative shrink-0 bg-white" onContextMenu={(e) => e.preventDefault()}>
          <div className="relative mx-auto aspect-[4/3] max-h-[52vh] w-full">
            <Image
              key={src}
              src={src}
              alt={item.images.length > 1 ? `${item.name} (photo ${photo + 1} of ${item.images.length})` : item.name}
              fill
              unoptimized
              sizes="(min-width: 768px) 768px, 100vw"
              className="select-none object-contain p-6 sm:p-8"
              draggable={false}
            />
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className={`${arrow} absolute right-3 top-3 h-10 w-10`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          {multi && (
            <>
              <button type="button" onClick={() => onStep(-1)} aria-label="Previous item" className={`${arrow} absolute left-3 top-1/2 -translate-y-1/2`}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button type="button" onClick={() => onStep(1)} aria-label="Next item" className={`${arrow} absolute right-3 top-1/2 -translate-y-1/2`}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}

          <span className="absolute bottom-3 left-3 rounded-full bg-[#06131d]/75 px-2.5 py-1 font-mono text-[10px] tabular-nums text-white/80">
            {index + 1} / {items.length}
          </span>
        </div>

        {/* ── details ───────────────────────────────────────────────────── */}
        <div className="overflow-y-auto px-5 pb-6 pt-5 sm:px-8 sm:pb-8">
          {item.images.length > 1 && (
            <div className="mb-5 flex gap-2 overflow-x-auto" role="group" aria-label="Photos of this item">
              {item.images.map((img, n) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setPhoto(n)}
                  aria-label={`Show photo ${n + 1}`}
                  aria-pressed={n === photo}
                  className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fa6a25] ${
                    n === photo ? "ring-2 ring-[#fa6a25]" : "opacity-60 ring-1 ring-white/10 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill unoptimized sizes="56px" className="object-contain p-1" />
                </button>
              ))}
            </div>
          )}

          <dl className="flex flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-1.5 rounded-full bg-[#fa6a25]/15 px-3 py-1 text-[#ff9a66] ring-1 ring-[#fa6a25]/30">
              <dt className="font-mono uppercase tracking-wider text-[10px] text-[#ff9a66]/70">{groupLabel}</dt>
              <dd className="font-semibold">{item.group}</dd>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-white/80 ring-1 ring-white/10">
              <dt className="font-mono uppercase tracking-wider text-[10px] text-white/45">{variantLabel}</dt>
              <dd className="font-semibold">{item.variant}</dd>
            </div>
          </dl>

          <h2 id="catalog-modal-title" className="mt-4 text-xl font-semibold leading-snug text-white sm:text-2xl">
            {item.name}
          </h2>
          <p id="catalog-modal-desc" className="mt-3 text-[15px] leading-relaxed text-white/65">
            {item.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-[#fa6a25] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d9531a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Request a quote
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(enquiry)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fa6a25]"
            >
              Ask on WhatsApp
            </a>
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-white/30">
            Photos are supplier product shots · stock and grades confirmed on quotation
          </p>
        </div>
      </div>
    </div>
  );
}
