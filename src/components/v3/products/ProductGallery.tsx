"use client";

import Image from "next/image";
import { isRemoteImage } from "@/lib/image-src";
import { useState, useCallback } from "react";
import Lightbox from "@/components/v3/Lightbox";

// ─── Product photo viewer ──────────────────────────────────────────────────
// Dark detail hero: one large frame with thumbnail strip below.
// Click the main frame to open a full-screen lightbox.
// All images carry a KHI watermark overlay.
// Broken images (network / remote-pattern misses) are silently removed.

export default function ProductGallery({
  images,
  alt,
  badge,
}: {
  images: string[];
  alt: string;
  badge?: React.ReactNode;
}) {
  const [active, setActive]         = useState(0);
  const [lightboxOpen, setLightbox] = useState(false);
  const [lbIndex, setLbIndex]       = useState(0);   // index within goodImages
  const [failed, setFailed]         = useState<Set<string>>(new Set());

  const markFailed = useCallback((src: string) => {
    setFailed((prev) => {
      if (prev.has(src)) return prev;
      const next = new Set(prev);
      next.add(src);
      return next;
    });
  }, []);

  // Only pass images that actually loaded to the lightbox
  const goodImages = images.filter((src) => !failed.has(src));
  const lightboxImages = goodImages.map((src, i) => ({
    src,
    alt: i === 0 ? alt : `${alt} — image ${i + 1} of ${goodImages.length}`,
  }));

  // Clamp active index so it never points to a failed image slot
  const safeActive = failed.has(images[active] ?? "")
    ? goodImages.length > 0 ? images.indexOf(goodImages[0]) : 0
    : active;

  const openLightbox = useCallback(() => {
    if (goodImages.length === 0) return;
    const pos = goodImages.indexOf(images[safeActive] ?? "");
    setLbIndex(Math.max(0, pos));
    setLightbox(true);
  }, [goodImages, images, safeActive]);

  return (
    <>
      {/* ── main frame ─────────────────────────────────────────────────────── */}
      <div>
        <button
          type="button"
          onClick={openLightbox}
          aria-label={`View ${alt} full size`}
          className="group relative block aspect-square w-full overflow-hidden rounded-[2rem] bg-[#d5dee7] ring-1 ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fa6a25] sm:aspect-[5/4]"
          style={{ cursor: goodImages.length > 0 ? "zoom-in" : "default" }}
        >
          {images.map((src, i) => (
            <Image
              key={src}
              src={src}
              unoptimized={isRemoteImage(src)}
              alt={i === 0 ? alt : `${alt} — photo ${i + 1} of ${images.length}`}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 620px, 100vw"
              className={`object-cover transition-opacity duration-500 select-none ${
                i === safeActive && !failed.has(src) ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={i !== safeActive || undefined}
              onError={() => markFailed(src)}
              draggable={false}
            />
          ))}

          {/* KHI watermark — always shown on the main frame */}
          <div
            className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-black/40 px-2.5 py-1.5 backdrop-blur-sm"
            aria-hidden="true"
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={60}
              height={36}
              className="opacity-60 select-none object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
              aria-hidden="true"
            />
          </div>

          {/* Zoom hint on hover */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-full bg-black/50 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
              Click to enlarge
            </span>
          </div>

          {badge && <div className="absolute left-4 top-4">{badge}</div>}

          {images.length > 1 && (
            <span className="absolute bottom-4 left-4 rounded-full bg-[#06131d]/70 px-3 py-1 font-mono text-[11px] text-white backdrop-blur">
              {String(safeActive + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          )}
        </button>

        {/* ── thumbnails ───────────────────────────────────────────────────── */}
        {images.length > 1 && (
          <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
            {images.map((src, i) => {
              if (failed.has(src)) return null;
              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Select ${alt} image ${i + 1} of ${images.length}`}
                  aria-current={i === safeActive}
                  onContextMenu={(e) => e.preventDefault()}
                  className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-2xl outline-none ring-2 transition focus-visible:ring-[#fa6a25] sm:h-20 sm:w-24 ${
                    i === safeActive
                      ? "ring-[#fa6a25]"
                      : "ring-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={src}
                    unoptimized={isRemoteImage(src)}
                    alt={`${alt} thumbnail ${i + 1}`}
                    fill
                    sizes="96px"
                    className="object-cover select-none"
                    onError={() => markFailed(src)}
                    draggable={false}
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* ── lightbox ───────────────────────────────────────────────────────── */}
      {lightboxOpen && lightboxImages.length > 0 && (
        <Lightbox
          images={lightboxImages}
          index={lbIndex}
          onClose={() => setLightbox(false)}
          onPrev={() => setLbIndex((i) => (i - 1 + lightboxImages.length) % lightboxImages.length)}
          onNext={() => setLbIndex((i) => (i + 1) % lightboxImages.length)}
        />
      )}
    </>
  );
}
