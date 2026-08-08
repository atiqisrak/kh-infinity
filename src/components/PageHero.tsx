import Image from "next/image";
import type { ReactNode } from "react";

interface PageHeroProps {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  eyebrowClassName?: string;
}

export default function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  children,
  eyebrowClassName = "text-orange-400",
}: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden min-h-[420px] flex items-end">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/30" />
      <div className="container relative z-10 mx-auto px-4 text-white">
        {eyebrow ? (
          <p className={`font-semibold uppercase text-sm mb-2 tracking-wide ${eyebrowClassName}`}>
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl">{title}</h1>
        {children ? <div className="max-w-3xl text-lg text-gray-100">{children}</div> : null}
      </div>
    </section>
  );
}
