"use client";

import Image from "next/image";
import { useState, useMemo, useCallback } from "react";
import Lightbox, { type LightboxImage } from "@/components/v3/Lightbox";
import type { Catalog } from "@/lib/parts-catalog";

// ─── DisplayCatalog ───────────────────────────────────────────────────────
// Named, filterable grid of individual SKUs (model · group · variant).
// • Two rows of filter chips (e.g. brand + panel grade, part type + model family)
// • Click any card → lightbox across every photo in the current filter
// • Photos load directly (pre-optimized), skipping the Next.js image optimizer
// • Broken images keep the card and its name, just without the photo

const PAGE = 24;
const ALL = "All";

export default function DisplayCatalog({ catalog }: { catalog: Catalog }) {
  const { items, groupLabel, variantLabel, noun } = catalog;
  const [group, setGroup] = useState(ALL);
  const [variant, setVariant] = useState(ALL);
  const [expanded, setExpanded] = useState(false);
  // Track the open photo by src, not index: late load/error events reshape the list
  const [lbSrc, setLbSrc] = useState<string | null>(null);
  const [failed, setFailed] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState<Set<string>>(new Set());

  const addTo = useCallback(
    (setter: typeof setFailed) => (src: string) =>
      setter((prev) => {
        if (prev.has(src)) return prev;
        const next = new Set(prev);
        next.add(src);
        return next;
      }),
    [],
  );
  const markFailed = useMemo(() => addTo(setFailed), [addTo]);
  const markLoaded = useMemo(() => addTo(setLoaded), [addTo]);

  const groups = useMemo(() => [ALL, ...new Set(items.map((i) => i.group))], [items]);
  const variants = useMemo(() => [ALL, ...new Set(items.map((i) => i.variant))].sort((a, b) => (a === ALL ? -1 : b === ALL ? 1 : a.localeCompare(b))), [items]);

  const filtered = items.filter(
    (i) => (group === ALL || i.group === group) && (variant === ALL || i.variant === variant),
  );
  const visible = expanded ? filtered : filtered.slice(0, PAGE);

  // Photos of every filtered item whose cover photo has actually loaded,
  // so the lightbox only pages through images that render
  const lightboxImages: LightboxImage[] = filtered.flatMap((item) => {
    const photos = item.images.filter((src) => !failed.has(src));
    if (!photos.some((src) => loaded.has(src))) return [];
    return photos.map((src, n) => ({
      src,
      alt: photos.length > 1 ? `${item.name} (photo ${n + 1} of ${photos.length})` : item.name,
    }));
  });

  const lbIndex = lbSrc ? lightboxImages.findIndex((img) => img.src === lbSrc) : -1;
  const step = (delta: number) =>
    setLbSrc(lightboxImages[(lbIndex + delta + lightboxImages.length) % lightboxImages.length].src);

  const chip = (active: boolean) =>
    `rounded-full px-3.5 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fa6a25] ${
      active ? "bg-[#fa6a25] text-white" : "bg-white/5 text-white/70 ring-1 ring-white/10 hover:bg-white/10"
    }`;

  return (
    <>
      {/* ── filters ─────────────────────────────────────────────────────── */}
      <div className="mt-10 space-y-3">
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label={`Filter by ${groupLabel.toLowerCase()}`}>
          <span className="mr-1 w-14 font-mono text-[11px] uppercase tracking-wider text-white/40">{groupLabel}</span>
          {groups.map((g) => (
            <button key={g} type="button" aria-pressed={group === g} onClick={() => setGroup(g)} className={chip(group === g)}>
              {g}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label={`Filter by ${variantLabel.toLowerCase()}`}>
          <span className="mr-1 w-14 font-mono text-[11px] uppercase tracking-wider text-white/40">{variantLabel}</span>
          {variants.map((v) => (
            <button key={v} type="button" aria-pressed={variant === v} onClick={() => setVariant(v)} className={chip(variant === v)}>
              {v}
            </button>
          ))}
        </div>
        <p className="font-mono text-[11px] text-white/40" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? noun.replace(/s$/, "") : noun}
        </p>
      </div>

      {/* ── grid ────────────────────────────────────────────────────────── */}
      <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {visible.map((item) => {
          const src = item.images.find((s) => !failed.has(s));
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => src && loaded.has(src) && setLbSrc(src)}
                disabled={!src}
                aria-label={src ? `View ${item.name} full size` : item.name}
                className="group flex w-full flex-col gap-3 rounded-2xl bg-white/5 p-3 text-left ring-1 ring-white/10 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fa6a25]"
                style={{ cursor: src && loaded.has(src) ? "zoom-in" : "default" }}
              >
                <div
                  className={`relative aspect-square overflow-hidden rounded-xl ${src ? "bg-white" : "bg-white/[0.06]"}`}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  {src ? (
                    <>
                      <Image
                        src={src}
                        alt={item.name}
                        fill
                        // Gallery photos are pre-shrunk by `pnpm optimize:gallery`, so serve them as-is
                        // rather than spending an image-optimizer transformation on each of ~1,200 catalogue cards
                        unoptimized
                        loading="lazy"
                        sizes="(min-width: 1280px) 200px, (min-width: 640px) 30vw, 45vw"
                        className="select-none object-contain p-2 transition duration-500 group-hover:scale-105"
                        onLoad={() => markLoaded(src)}
                        onError={() => markFailed(src)}
                        draggable={false}
                      />
                      {item.images.length > 1 && (
                        <span className="absolute left-1.5 top-1.5 rounded-full bg-[#06131d]/70 px-2 py-0.5 font-mono text-[10px] text-white">
                          {item.images.length} photos
                        </span>
                      )}
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                          Enlarge
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-2">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white/20" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <rect x="6" y="2" width="12" height="20" rx="2.5" />
                        <path d="M10.5 18.5h3" strokeLinecap="round" />
                      </svg>
                      <span className="text-center text-[10px] text-white/30">Photo on request</span>
                    </div>
                  )}
                </div>

                <div className="px-1 pb-1">
                  <p className="line-clamp-3 text-sm font-semibold leading-snug text-white" title={item.name}>{item.title}</p>
                  <p className="mt-1 text-xs text-white/50">
                    <span className="font-semibold text-[#fa6a25]">{item.group}</span> · {item.variant}
                  </p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {filtered.length > PAGE && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="rounded-full bg-white/5 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fa6a25]"
          >
            {expanded ? "Show fewer" : `Show all ${filtered.length} ${noun}`}
          </button>
        </div>
      )}

      {lbIndex >= 0 && (
        <Lightbox
          images={lightboxImages}
          index={lbIndex}
          onClose={() => setLbSrc(null)}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
        />
      )}
    </>
  );
}
