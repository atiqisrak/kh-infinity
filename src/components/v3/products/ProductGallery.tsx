"use client";

import Image from "next/image";
import { useState } from "react";

// Product photo viewer for the dark detail hero: one large frame, thumbnails below.
export default function ProductGallery({ images, alt, badge }: { images: string[]; alt: string; badge?: React.ReactNode }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#d5dee7] ring-1 ring-white/10 sm:aspect-[5/4]">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={i === 0 ? alt : `${alt}, photo ${i + 1}`}
            fill
            priority={i === 0}
            sizes="(min-width: 1024px) 620px, 100vw"
            className={`object-cover transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== active || undefined}
          />
        ))}
        {badge && <div className="absolute left-4 top-4">{badge}</div>}
        {images.length > 1 && (
          <span className="absolute bottom-4 right-4 rounded-full bg-[#06131d]/70 px-3 py-1 font-mono text-[11px] text-white backdrop-blur">
            {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View photo ${i + 1} of ${images.length}`}
              aria-current={i === active}
              className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-2xl outline-none ring-2 transition focus-visible:ring-[#fa6a25] sm:h-20 sm:w-24 ${
                i === active ? "ring-[#fa6a25]" : "ring-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
