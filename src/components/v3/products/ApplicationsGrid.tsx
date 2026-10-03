"use client";

import Image from "next/image";
import { isRemoteImage } from "@/lib/image-src";
import { useState, useCallback } from "react";
import Lightbox, { type LightboxImage } from "@/components/v3/Lightbox";

// ─── types ────────────────────────────────────────────────────────────────
interface Application {
  label: string;
  image: string;
  description: string;
}

// ─── ApplicationsGrid ─────────────────────────────────────────────────────
// Client component: renders the application-use-case card grid with
// • Lightbox on click
// • KHI watermark overlay on every image
// • Broken-image suppression (onError → hide card image gracefully)
export default function ApplicationsGrid({
  applications,
  productName,
}: {
  applications: Application[];
  productName: string;
}) {
  const [lightboxIndex, setLightbox] = useState<number | null>(null);
  const [failed, setFailed] = useState<Set<string>>(new Set());

  const markFailed = useCallback((src: string) => {
    setFailed((prev) => {
      if (prev.has(src)) return prev;
      const next = new Set(prev);
      next.add(src);
      return next;
    });
  }, []);

  // Build the images array that the lightbox will show
  // (only non-failed images, preserving order)
  const lightboxImages: LightboxImage[] = applications
    .filter((app) => !failed.has(app.image))
    .map((app) => ({
      src: app.image,
      alt: `${app.label} — ${productName}`,
    }));

  // Given an application index, find where it sits in lightboxImages
  const getLbIndex = (appIdx: number): number => {
    const appSrc = applications[appIdx]?.image;
    return lightboxImages.findIndex((img) => img.src === appSrc);
  };

  return (
    <>
      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {applications.map((app, i) => {
          const imageOk = !failed.has(app.image);
          const lbIdx   = getLbIndex(i);
          return (
            <li key={app.label}>
              <button
                type="button"
                onClick={() => imageOk && lbIdx >= 0 && setLightbox(lbIdx)}
                disabled={!imageOk}
                aria-label={imageOk ? `View ${app.label} full size` : app.label}
                className="group w-full text-left flex flex-col gap-3 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fa6a25]"
                style={{ cursor: imageOk ? "zoom-in" : "default" }}
              >
                {/* ── image card ─────────────────────────────────────────── */}
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white/[0.08]"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  {imageOk ? (
                    <>
                      <Image
                        src={app.image}
                        unoptimized={isRemoteImage(app.image)}
                        alt={`${app.label} — ${productName} application`}
                        fill
                        sizes="(min-width: 1280px) 220px, (min-width: 768px) 30vw, 45vw"
                        className="object-cover transition duration-500 group-hover:scale-105 select-none"
                        onError={() => markFailed(app.image)}
                        draggable={false}
                      />

                      {/* KHI watermark */}
                      <div
                        className="pointer-events-none absolute bottom-1.5 right-1.5 flex items-center rounded bg-black/40 px-1.5 py-1 backdrop-blur-sm"
                        aria-hidden="true"
                      >
                        <Image
                          src="/images/logo.png"
                          alt=""
                          width={40}
                          height={24}
                          className="opacity-55 select-none object-contain"
                          style={{ filter: "brightness(0) invert(1)" }}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Hover zoom hint */}
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                          Enlarge
                        </span>
                      </div>
                    </>
                  ) : (
                    /* Graceful fallback for broken images */
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-2">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white/20" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <path d="M3 16l5-5 4 4 3-3 6 6" />
                      </svg>
                      <span className="text-center text-[10px] text-white/25">Image unavailable</span>
                    </div>
                  )}
                </div>

                {/* ── text ───────────────────────────────────────────────── */}
                <div className="px-1 pb-1">
                  <p className="text-sm font-semibold text-white leading-snug">{app.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/50">{app.description}</p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Lightbox */}
      {lightboxIndex !== null && lightboxImages.length > 0 && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((i) => ((i ?? 0) - 1 + lightboxImages.length) % lightboxImages.length)}
          onNext={() => setLightbox((i) => ((i ?? 0) + 1) % lightboxImages.length)}
        />
      )}
    </>
  );
}
