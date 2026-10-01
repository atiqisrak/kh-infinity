import Image from "next/image";
import { GhostButton, PillButton, pad } from "../ui";
import s from "../v3.module.css";

// CtaBand layout with a second, page-specific link (contact, trade routes)
// instead of the phone number. Kept local until CtaBand takes a `secondary` prop.
export default function IndustryCta({
  title,
  body,
  primary,
  secondary,
  image = "/images/v3/ship-open-sea.webp",
  imageAlt = "Loaded container ship sailing through open sea",
}: {
  title: React.ReactNode;
  body: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section aria-labelledby="cta-heading" className="relative isolate overflow-hidden">
      <Image src={image} alt={imageAlt} fill sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06131d]/95 via-[#06131d]/75 to-[#06131d]/25" />
      <div className={`${pad} py-24 lg:py-36`}>
        <h2 id="cta-heading" className={`${s.display} max-w-4xl text-[clamp(2.75rem,7vw,6.5rem)]`}>
          {title}
        </h2>
        <p className="mt-6 max-w-lg text-lg text-white/75">{body}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <PillButton href={primary.href}>{primary.label}</PillButton>
          <GhostButton href={secondary.href} glass>
            {secondary.label}
          </GhostButton>
        </div>
      </div>
    </section>
  );
}
