"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  alt: string;
  accentBg: string;
  accentBorder: string;
}

export default function ProductGallery({
  images,
  alt,
  accentBg,
  accentBorder,
}: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const gallery = images.length > 0 ? images : ["/images/products/almonds.webp"];

  return (
    <div className="relative">
      <div
        className={`absolute -top-10 -right-10 w-40 h-40 md:w-56 md:h-56 ${accentBg} opacity-10 rounded-full blur-3xl pointer-events-none`}
        aria-hidden="true"
      />
      <div
        className={`absolute -bottom-8 -left-8 w-24 h-24 md:w-32 md:h-32 ${accentBg} opacity-10 rounded-full blur-2xl pointer-events-none`}
        aria-hidden="true"
      />

      <div className="relative bg-white p-3 md:p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50">
          <Image
            src={gallery[active]}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
            priority
          />
        </div>
      </div>

      {gallery.length > 1 && (
        <div className="relative mt-3 md:mt-4 flex gap-2.5 md:gap-3">
          {gallery.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`View photo ${index + 1} of ${gallery.length}`}
              aria-current={index === active}
              className={`relative w-14 h-14 md:w-16 md:h-16 shrink-0 overflow-hidden rounded-lg border-2 bg-gray-50 transition-colors ${
                index === active
                  ? accentBorder
                  : "border-transparent hover:border-gray-200"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
