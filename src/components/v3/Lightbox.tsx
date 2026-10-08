"use client";

import Image from "next/image";
import { isRemoteImage } from "@/lib/image-src";
import { useEffect, useCallback } from "react";

// ─── types ───────────────────────────────────────────────────────────────────
export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

// ─── component ───────────────────────────────────────────────────────────────
export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const multi = images.length > 1;
  const clampedIndex = images.length > 0 ? Math.max(0, Math.min(index, images.length - 1)) : 0;
  const current = images[clampedIndex];

  // Keyboard navigation — hooks must come before any conditional return
  useEffect(() => {
    if (!images.length) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && multi) onPrev();
      else if (e.key === "ArrowRight" && multi) onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext, multi, images.length]);

  // Lock body scroll
  useEffect(() => {
    if (!images.length) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [images.length]);

  // Safe to return null after all hooks have been called
  if (!images.length || !current) return null;

  return (
    /* Backdrop — click outside image to close */
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* ── top bar ────────────────────────────────────────────────────────── */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-between px-4 py-3 pointer-events-none">
        {/* KHI logo */}
        <Image
          src="/images/logo.png"
          alt="K.H. Infinity"
          width={90}
          height={53}
          className="pointer-events-none select-none opacity-60 object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        {/* Counter */}
        {multi && (
          <span className="font-mono text-xs text-white/50 tabular-nums">
            {clampedIndex + 1}&thinsp;/&thinsp;{images.length}
          </span>
        )}
        {/* Close — pointer-events re-enabled */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* ── image ──────────────────────────────────────────────────────────── */}
      <div
        className="relative flex h-[80vh] max-h-[80vh] w-[92vw] max-w-5xl items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        /* Prevent right-click download of the raw URL */
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="relative h-full w-full">
          <Image
            key={current.src}
            src={current.src}
            unoptimized={isRemoteImage(current.src)}
            alt={current.alt}
            fill
            className="select-none object-contain"
            sizes="(min-width: 1024px) 80vw, 94vw"
            priority
            draggable={false}
          />

          {/* ── watermark ── always visible in lightbox ─────────────────── */}
          <div
            className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-2 rounded-lg bg-black/50 px-3 py-2 backdrop-blur-sm"
            aria-hidden="true"
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={80}
              height={47}
              className="select-none opacity-70 object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
              aria-hidden="true"
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">khi.com.bd</span>
          </div>
        </div>
      </div>

      {/* ── caption ────────────────────────────────────────────────────────── */}
      {current.alt && (
        <p className="mt-3 px-4 text-center text-sm text-white/50" aria-live="polite">
          {current.alt}
        </p>
      )}

      {/* ── prev / next ────────────────────────────────────────────────────── */}
      {multi && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:left-4"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:right-4"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
