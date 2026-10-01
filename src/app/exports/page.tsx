import type { Metadata } from "next";
import Image from "next/image";
import { getProduct, getProductsByType } from "@/lib/products";
import { breadcrumbSchema, speakableWebPageSchema } from "@/lib/schema-helpers";
import CtaBand from "@/components/v3/CtaBand";
import PageHero from "@/components/v3/PageHero";
import { ChipList, RowTable, Section, labelCls } from "@/components/v3/blocks";
import { shipmentDocs } from "@/components/v3/site";
import LaneList from "@/components/v3/trade/LaneList";
import TradeGrid from "@/components/v3/trade/TradeGrid";
import { ArrowLink, GhostButton, PillButton, SectionHead, pad } from "@/components/v3/ui";
import V3Shell from "@/components/v3/V3Shell";
import s from "@/components/v3/v3.module.css";

export const metadata: Metadata = {
  title: "Export Operations | Premium Bangladesh Exports | K.H. Infinity",
  description:
    "Direct B2B export operations from K.H. Infinity: premium potatoes, Gulf-market potato programmes, and Bangladeshi handicrafts with full export documentation.",
  alternates: { canonical: "https://khi.com.bd/exports" },
  openGraph: {
    title: "Export Operations | Premium Bangladesh Exports | K.H. Infinity",
    description:
      "B2B export programmes from Bangladesh: Gulf-market potatoes with SPS documentation and Bangladeshi handicrafts — graded, packed, and export-certified from Dhaka.",
    url: "https://khi.com.bd/exports",
    siteName: "K.H. Infinity",
    type: "website",
    images: ["/images/hubs/exports-hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Export Operations | Premium Bangladesh Exports | K.H. Infinity",
    description:
      "B2B export programmes from Bangladesh: Gulf-market potatoes with SPS documentation and Bangladeshi handicrafts with full export certification.",
    images: ["/images/hubs/exports-hero.webp"],
  },
};

// Hero collage: the Gulf lane over export product photos
function HeroCollage() {
  return (
    <div className="relative pb-6 pt-6 lg:pt-0">
      <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-[#0b2c3d]">
        <Image
          src="/images/hubs/exports-hero.webp"
          alt="Premium Bangladesh potatoes prepared for Gulf export shipment"
          fill
          priority
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
        />
      </div>
      <figure className="absolute -top-2 left-3 w-[42%] min-w-[150px] max-w-[210px] rotate-[-3deg] overflow-hidden rounded-2xl bg-white p-2 shadow-2xl sm:left-6 lg:-top-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image src="/images/products/handicrafts.webp" alt="" fill sizes="210px" className="object-cover" />
        </div>
        <figcaption className="whitespace-nowrap px-1 pb-1 pt-2 font-mono text-[11px] uppercase tracking-wide text-[#06131d]/60">
          Handmade in Bangladesh
        </figcaption>
      </figure>
      <div className={`${s.glass} mt-4 rounded-2xl p-5 sm:absolute sm:-bottom-2 sm:right-6 sm:mt-0 sm:w-[250px]`}>
        <p className="text-xs uppercase tracking-[0.14em] text-white/60">Export lane</p>
        <div className="mt-3 flex items-center gap-3">
          <span className={`${s.display} text-3xl`}>BD</span>
          <span className="h-px flex-1 bg-[#fa6a25]" />
          <span className={`${s.display} text-3xl text-[#fa6a25]`}>GCC</span>
        </div>
        <p className="mt-2 text-sm text-white/70">Gulf, GCC &amp; global markets</p>
      </div>
    </div>
  );
}

export default function ExportsPage() {
  const exportProducts = getProductsByType("export");
  const potato = getProduct("potato");

  const schema = breadcrumbSchema([
    { name: "Home", url: "https://khi.com.bd/" },
    { name: "Export Operations", url: "https://khi.com.bd/exports" },
  ]);
  const speakable = speakableWebPageSchema({
    url: "https://khi.com.bd/exports",
    name: "Export Operations | K.H. Infinity",
    dateModified: "2026-10-01",
  });

  return (
    <V3Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />

      {/* ───────────── HERO ───────────── */}
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Export operations" }]}
        eyebrow="Direct B2B Exporter"
        title={
          <>
            Export <span className="text-[#fa6a25]">operations</span>
          </>
        }
        titleClassName="text-[clamp(3rem,5.6vw,5.25rem)]"
        lead={
          <>
            <p className="geo-anchor" data-speakable>
              K.H. Infinity manages direct export of premium Bangladeshi commodities to Gulf, GCC, and global markets.
              Formalized, contract-backed export programmes replace informal Khatunganj trust-only trading with SPS
              documentation and temperature-controlled logistics.
            </p>
            <p className="mt-5">
              <ArrowLink href="/products/potato-gulf">Potato export (Gulf) specialty hub</ArrowLink>
            </p>
          </>
        }
        actions={
          <>
            <PillButton href="/quote">Request a quote</PillButton>
            <GhostButton href="#catalogue">Browse export lines</GhostButton>
          </>
        }
        aside={<HeroCollage />}
      />

      {/* ───────────── CATALOGUE ───────────── */}
      <Section
        id="catalogue"
        tone="paper"
        eyebrow="Export products"
        title={
          <>
            Export product
            <br />
            <span className="text-[#fa6a25]">catalogue</span>
          </>
        }
        intro="Bangladeshi produce and crafts, packed and documented for the destination market. Open a product for specifications and packaging."
      >
        <TradeGrid products={exportProducts} withProgramme />
      </Section>

      {/* ───────────── GULF POTATO PROGRAMME ───────────── */}
      <section aria-labelledby="programme-heading" className="relative overflow-hidden bg-[#06131d] py-20 lg:py-28">
        <div className={`${pad} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}>
          <div className="grid grid-cols-5 grid-rows-[auto_auto] gap-3">
            <div className="relative col-span-3 row-span-2 min-h-[320px] overflow-hidden rounded-3xl sm:min-h-[440px]">
              <Image
                src="/images/potato-export/export-packaging.webp"
                alt="Export packaging and tarpaulin protection for potatoes"
                fill
                sizes="(min-width: 1024px) 360px, 60vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 aspect-square overflow-hidden rounded-3xl">
              <Image src="/images/potato-export/grading.webp" alt="Potato grading and sorting for export" fill sizes="(min-width: 1024px) 240px, 40vw" className="object-cover" />
            </div>
            <div className="relative col-span-2 aspect-square overflow-hidden rounded-3xl">
              <Image src="/images/potato-export/gulf-retail.webp" alt="Yellow potatoes suitable for retail and Gulf programmes" fill sizes="(min-width: 1024px) 240px, 40vw" className="object-cover" />
            </div>
          </div>

          <div>
            <SectionHead
              eyebrow="Export spotlight"
              id="programme-heading"
              size="md"
              title={
                <>
                  Gulf potato
                  <br />
                  <span className="text-[#fa6a25]">export programme</span>
                </>
              }
            />
            <p className="mt-6 max-w-lg text-white/70">
              Our dedicated potato export hub covers Gulf retail specifications, tarpaulin protection, grading, and full
              export documentation for GCC buyers.
            </p>
            {potato && (
              <RowTable
                dark
                title="Published spec"
                rows={[...Object.entries(potato.specifications), ["Packing", potato.packaging.join(" · ")]]}
                className="mt-8"
              />
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href="/products/potato-gulf">View potato export (Gulf) hub</PillButton>
              <GhostButton href="/products/potato">Product specifications</GhostButton>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── LANE & DOCUMENTS ───────────── */}
      <Section
        id="lane"
        tone="sea"
        grid
        eyebrow="Export lane"
        title={
          <>
            Bangladesh to
            <br />
            <span className="text-[#fa6a25]">the Gulf</span>
          </>
        }
        intro="Contract-backed programmes from Bangladesh to Gulf and GCC buyers, with the paperwork prepared before the cargo leaves."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <LaneList
            lanes={[
              {
                from: { code: "BD", flag: "BD", city: "Bangladesh" },
                to: { code: "AE", flag: "AE", city: "Gulf markets" },
                label: "Export to the Middle East",
                note: "Fresh potatoes, produce",
                href: "/services/trade-routes/export-to-middle-east",
              },
            ]}
          />
          <div className="rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10">
            <h3 className={`${labelCls} text-white/50`}>With every shipment</h3>
            <ChipList items={shipmentDocs} icon="receipt" className="mt-4" />
          </div>
        </div>
      </Section>

      <CtaBand
        title={
          <>
            Buying from
            <br />
            <span className="text-[#fa6a25]">Bangladesh?</span>
          </>
        }
        body="Send destination, volume and packing. We'll respond with availability and next steps."
        image="/images/v3/road-and-sea.webp"
        imageAlt="Aerial view of a truck convoy on a forest road beside a loaded container ship"
      />
    </V3Shell>
  );
}
