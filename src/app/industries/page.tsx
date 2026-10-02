import { Metadata } from "next";
import Link from "next/link";
import { getProducts } from "@/lib/products";
import { breadcrumbSchema, speakableWebPageSchema } from "@/lib/schema-helpers";
import Icon from "@/components/v3/Icons";
import PageHero from "@/components/v3/PageHero";
import { ChipList, NumberedGrid, Section } from "@/components/v3/blocks";
import CtaBand from "@/components/v3/CtaBand";
import IndustryCta from "@/components/v3/industries/IndustryCta";
import SectorStack from "@/components/v3/industries/SectorStack";
import { sectors } from "@/components/v3/industries/sectors";
import { sourcingFacts } from "@/components/v3/sourcing";
import { GhostButton, PillButton, focusRing, pad } from "@/components/v3/ui";
import V3Shell from "@/components/v3/V3Shell";
import s from "@/components/v3/v3.module.css";

export const metadata: Metadata = {
  title: "Industries We Serve - K.H. Infinity | Import Export Trading Solutions",
  description:
    "K.H. Infinity serves diverse industries with specialized import-export solutions. Our expertise spans FMCG, retail, hospitality, manufacturing, and agriculture sectors.",
  keywords:
    "industries served, FMCG import export, retail trading, hospitality supplies, manufacturing sourcing, agricultural products, Bangladesh trade",
  alternates: { canonical: "https://khi.com.bd/industries" },
  openGraph: {
    title: "Industries We Serve - K.H. Infinity",
    description: "Specialized import-export solutions for FMCG, retail, hospitality, manufacturing, and agriculture.",
    images: ["/images/cover/kh1.webp"],
    url: "https://khi.com.bd/industries",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve - K.H. Infinity",
    description:
      "Specialized B2B import-export solutions for FMCG, retail, hospitality, manufacturing, and agriculture sectors in Bangladesh.",
    images: ["/images/cover/kh1.webp"],
  },
};

const reasons = [
  {
    title: "Industry Expertise",
    body: "Deep knowledge of industry-specific requirements, regulations, and market dynamics built over a decade of active trading.",
  },
  {
    title: "Quality Assured",
    body: "Stringent pre-shipment inspection and compliance with international standards for every consignment.",
  },
  {
    title: "Built Around You",
    body: "Tailored import-export solutions — minimum order quantities, payment terms, and lead times aligned to your operations.",
  },
];


export default function IndustriesPage() {
  const products = getProducts();
  const { countries } = sourcingFacts(products);

  const crumbs = breadcrumbSchema([
    { name: "Home", url: "https://khi.com.bd/" },
    { name: "Industries", url: "https://khi.com.bd/industries" },
  ]);

  const speakable = speakableWebPageSchema({
    url: "https://khi.com.bd/industries",
    name: "Industries We Serve — K.H. Infinity",
    dateModified: "2026-08-07",
  });

  return (
    <V3Shell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }}
      />
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        eyebrow="Industries"
        title={
          <>
            Industries
            <br />
            we <span className="text-[#fa6a25]">serve</span>
          </>
        }
        lead="From FMCG to agriculture, we provide specialized import-export solutions tailored to your industry needs."
        actions={
          <>
            <PillButton href="/quote">Request a quote</PillButton>
            <GhostButton href="#expertise">Explore sectors</GhostButton>
          </>
        }
        aside={<SectorStack />}
        stats={[
          { value: sectors.length, label: "Sectors supplied" },
          { value: products.length, label: "Product lines" },
          { value: countries.length, label: "Origin countries" },
          { value: new Set(products.map((p) => p.category)).size, label: "Product categories" },
        ]}
      />

      {/* ── SECTOR CARDS ──────────────────────────────────────────── */}
      <section id="expertise" aria-labelledby="expertise-heading" className="bg-[#06131d] py-20 lg:py-28">
        <div className={pad}>
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#fa6a25]" />
                Sectors
              </span>
              <h2 id="expertise-heading" className={`${s.display} mt-4 text-[clamp(2.4rem,4.8vw,4rem)]`}>
                Our industry
                <br />
                expertise
              </h2>
            </div>
            <p className="max-w-sm text-white/60 lg:pb-2">
              Hover any sector to see what products we trade and how we support that specific supply chain.
            </p>
          </div>

          {/* Asymmetric grid: first 2 wide, last 3 narrower */}
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {sectors.map((sec, i) => (
              <li key={sec.slug} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
                <Link
                  href={sec.href}
                  className={`group relative flex overflow-hidden rounded-3xl ${
                    i < 2 ? "min-h-[380px]" : "min-h-[500px]"
                  } ${focusRing}`}
                >
                  {/* Background video */}
                  <div className="absolute inset-0 z-[1]">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={sec.image}
                      className="h-full w-full object-cover"
                    >
                      <source src={`/images/new/${sec.slug.charAt(0).toUpperCase() + sec.slug.slice(1)}-Loop.mp4`} type="video/mp4" />
                    </video>
                  </div>

                  {/* Permanent dark gradient (text legibility) */}
                  <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#06131d]/95 via-[#06131d]/50 to-[#06131d]/10" />

                  {/* Orange fill slides up on hover */}
                  <div className="absolute inset-0 z-[3] translate-y-full bg-[#fa6a25] transition-transform duration-500 ease-out group-hover:translate-y-0" />

                  {/* Content layer */}
                  <div className="relative z-[4] flex w-full flex-col justify-end p-6 sm:p-8">
                    {/* Corner index */}
                    <span className="absolute right-5 top-5 font-mono text-xs text-white/35 transition group-hover:opacity-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Icon disc — fades on hover */}
                    <span className="mb-4 inline-grid h-11 w-11 place-items-center self-start rounded-full bg-[#fa6a25] text-white transition-opacity duration-300 group-hover:opacity-0">
                      <Icon name={sec.icon} className="h-5 w-5" />
                    </span>

                    {/* Sector name */}
                    <h3
                      className={`${s.display} text-[clamp(1.8rem,3vw,2.4rem)] text-white transition-colors`}
                    >
                      {sec.short}
                    </h3>

                    {/* Description — visible at rest, white on orange on hover */}
                    <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-white/70 transition-colors group-hover:text-white/90">
                      {sec.description}
                    </p>

                    {/* Products chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {sec.products.map((prod) => (
                        <span
                          key={prod}
                          className="rounded-full border border-white/25 px-2.5 py-0.5 text-[11px] text-white/70 transition group-hover:border-white/40 group-hover:text-white"
                        >
                          {prod}
                        </span>
                      ))}
                    </div>

                    {/* CTA arrow — slides in on hover */}
                    <span className="mt-5 inline-flex translate-y-3 items-center gap-2 font-semibold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Explore sector
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHAT WE MOVE ─────────────────────────────────────────── */}
      <section aria-labelledby="what-we-move" className="bg-[#f2f4f6] py-20 text-[#06131d] lg:py-28">
        <div className={pad}>
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#06131d]/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b2c3d]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#fa6a25]" />
                Products per sector
              </span>
              <h2 id="what-we-move" className={`${s.display} mt-4 text-[clamp(2.4rem,4.8vw,4rem)] text-[#0b2c3d]`}>
                What we move
                <br />
                for each sector
              </h2>
            </div>
            <p className="max-w-sm text-[#06131d]/60 lg:pb-2">
              A snapshot of the goods we regularly source and ship for each industry vertical.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sec) => {
              const sectorProducts = products.filter((p) =>
                sec.products.some((name) =>
                  p.name.toLowerCase().includes(name.toLowerCase()) ||
                  p.category.toLowerCase().includes(sec.slug.toLowerCase())
                )
              );
              return (
                <Link
                  key={sec.slug}
                  href={sec.href}
                  className={`group flex flex-col rounded-3xl bg-white p-6 ring-1 ring-[#06131d]/[0.06] transition hover:ring-[#fa6a25]/50 sm:p-7 ${focusRing}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fa6a25]/10 text-[#d9531a]">
                      <Icon name={sec.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-[#0b2c3d] transition group-hover:text-[#d9531a]">
                      {sec.short}
                    </h3>
                  </div>
                  <ChipList items={sec.products} dark className="mt-5" />
                  {sectorProducts.length > 0 && (
                    <p className="mt-4 text-xs text-[#06131d]/45">
                      {sectorProducts.length} matching product{sectorProducts.length !== 1 ? "s" : ""} in catalogue
                    </p>
                  )}
                  <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-[#0b2c3d] underline decoration-[#fa6a25] decoration-2 underline-offset-8 group-hover:text-[#d9531a]">
                    View sector <Icon name="arrow" className="h-4 w-4 transition group-hover:rotate-45" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────── */}
      <Section
        id="why"
        tone="sea"
        grid
        eyebrow="Why KHI"
        title={
          <>
            Why industry leaders
            <br />
            choose us
          </>
        }
        headSize="md"
      >
        <NumberedGrid items={reasons} dark={false} cols={3} />
      </Section>

      <IndustryCta
        title={
          <>
            Ready to start
            <br />
            <span className="text-[#fa6a25]">trading?</span>
          </>
        }
        body="Whether you're in FMCG, retail, hospitality, or manufacturing, we have the expertise to support your import-export needs."
        primary={{ label: "Request a Quote", href: "/quote" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </V3Shell>
  );
}
