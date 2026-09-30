import Image from "next/image";
import { phone } from "./site";
import { GhostButton, PillButton, pad } from "./ui";
import s from "./v3.module.css";

// Full-bleed photo call to action. Defaults are the homepage's; pages override
// the copy and photo to fit their context.
export default function CtaBand({
  title = (
    <>
      Ready to move your <br className="hidden sm:block" />
      next <span className="text-[#fa6a25]">shipment?</span>
    </>
  ),
  body = "Tell us the product, quantity and destination. We'll come back with a landed-cost quote.",
  image = "/images/v3/ship-open-sea.webp",
  imageAlt = "Loaded container ship sailing through open sea",
  cta = { label: "Request a quote", href: "/quote" },
}: {
  title?: React.ReactNode;
  body?: string;
  image?: string;
  imageAlt?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section aria-labelledby="cta-heading" className="relative isolate overflow-hidden">
      <Image src={image} alt={imageAlt} fill sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06131d]/95 via-[#06131d]/75 to-[#06131d]/25" />
      <div className={`${pad} py-24 lg:py-36`}>
        <h2 id="cta-heading" className={`${s.display} max-w-4xl text-[clamp(3rem,7.5vw,7rem)]`}>
          {title}
        </h2>
        <p className="mt-6 max-w-lg text-lg text-white/75">{body}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <PillButton href={cta.href}>{cta.label}</PillButton>
          <GhostButton href={phone.href} glass>
            {phone.display}
          </GhostButton>
        </div>
      </div>
    </section>
  );
}
