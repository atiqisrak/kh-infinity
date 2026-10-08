import type { Metadata } from "next";
import Image from "next/image";
import { getProductsByType } from "@/lib/products";
import { breadcrumbSchema, speakableWebPageSchema } from "@/lib/schema-helpers";
import CtaBand from "@/components/v3/CtaBand";
import PageHero from "@/components/v3/PageHero";
import { ChipList, FigureCards, Section, labelCls } from "@/components/v3/blocks";
import { shipmentDocs } from "@/components/v3/site";
import { CertCards, SourcingYard } from "@/components/v3/SourcingYard";
import { sourcingFacts } from "@/components/v3/sourcing";
import LaneList, { type Lane } from "@/components/v3/trade/LaneList";
import TradeGrid from "@/components/v3/trade/TradeGrid";
import { ArrowLink, GhostButton, PillButton, SectionHead, pad } from "@/components/v3/ui";
import V3Shell from "@/components/v3/V3Shell";

export const metadata: Metadata = {
  title: "Import Operations | Commodities, Electronics & Auto Parts | K.H. Infinity",
  description:
    "Direct B2B import operations from K.H. Infinity: food commodities, motorcycle parts from India, and consumer electronics & phone parts from China — with NBR TTI transparency and in-house customs clearance.",
  alternates: { canonical: "https://khi.com.bd/imports" },
  openGraph: {
    title: "Import Operations | Commodities, Electronics & Auto Parts | K.H. Infinity",
    description:
      "Direct B2B imports into Bangladesh: food commodities, motorcycle parts (India), and consumer electronics & phone displays (China) with NBR TTI transparency and BSTI compliance.",
    url: "https://khi.com.bd/imports",
    siteName: "K.H. Infinity",
    type: "website",
    images: ["/images/hubs/imports-hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Import Operations | Commodities, Electronics & Auto Parts | K.H. Infinity",
    description:
      "Direct B2B imports: food commodities, motorcycle parts from India, iPhone & Android displays, audio and charging accessories from China — in-house NBR customs clearance.",
    images: ["/images/hubs/imports-hero.webp"],
  },
};

// Import lanes into Bangladesh (same lanes as the homepage "Lanes we run")
const LANES: Lane[] = [
  {
    from: { code: "CN", flag: "CN", city: "China" },
    to: { code: "BD", flag: "BD", city: "Chattogram" },
    label: "Import from China",
    note: "Consumer electronics, phone parts, industrial inputs",
    href: "/services/trade-routes/import-from-china",
  },
  {
    from: { code: "IN", flag: "IN", city: "India" },
    to: { code: "BD", flag: "BD", city: "Chattogram" },
    label: "Import from India",
    note: "Motorcycle parts, spices, agricultural goods",
    href: "/services/trade-routes",
  },
  {
    from: { code: "AE", flag: "AE", city: "Middle East" },
    to: { code: "BD", flag: "BD", city: "Chattogram" },
    label: "Import from the Middle East",
    note: "Dates, edible oils, dairy",
    href: "/services/trade-routes/import-from-middle-east",
  },
];

// Lead times, as published in the FAQ and on /products
const TIMES = [
  { value: "20–45 days", label: "Sea freight", note: "Depending on origin port" },
  { value: "3–7 days", label: "Air freight", note: "For urgent or high-value lots" },
  { value: "2–5 days", label: "Customs clearance", note: "Working days, by our in-house team" },
];

export default function ImportsPage() {
  const importProducts = getProductsByType("import");
  const { countries, certs } = sourcingFacts(importProducts);
  const categories = new Set(importProducts.map((p) => p.category));

  const schema = breadcrumbSchema([
    { name: "Home", url: "https://khi.com.bd/" },
    { name: "Import Operations", url: "https://khi.com.bd/imports" },
  ]);
  const speakable = speakableWebPageSchema({
    url: "https://khi.com.bd/imports",
    name: "Import Operations | K.H. Infinity",
    dateModified: "2026-10-01",
  });

  return (
    <V3Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />

      {/* ───────────── HERO ───────────── */}
      <PageHero
        image="/images/hubs/imports-hero.webp"
        imageAlt="Colourful shipping containers stacked at a port, representing bulk import logistics"
        crumbs={[{ label: "Home", href: "/" }, { label: "Import operations", href: "/imports" }]}
        eyebrow="Direct B2B Importer"
        title={
          <>
            Import <span className="text-[#fa6a25]">operations</span>
          </>
        }
        lead={
          <>
            <p className="geo-anchor" data-speakable>
              K.H. Infinity is the direct wholesale importer of bulk commodities, motorcycle parts from India, and consumer
              electronics &amp; phone parts from China in Bangladesh. We own physical inventory—not facilitate trades—and
              manage NBR customs clearance, TTI transparency, and BSTI compliance as internal capabilities from our
              Tikatuli, Dhaka hub.
            </p>
            <p className="mt-5">
              <ArrowLink href="/services/customs">Customs clearance &amp; TTI support</ArrowLink>
            </p>
          </>
        }
        actions={
          <>
            <PillButton href="/quote">Request a quote</PillButton>
            <GhostButton href="#catalogue" glass>
              Browse import lines
            </GhostButton>
          </>
        }
        stats={[
          { value: importProducts.length, label: "Import lines" },
          { value: countries.length, label: "Origin countries" },
          { value: categories.size, label: "Categories" },
          { value: "2–5", label: "Days to clear customs" },
        ]}
      />

      {/* ───────────── CATALOGUE ───────────── */}
      <Section
        id="catalogue"
        tone="paper"
        eyebrow="Import products"
        title={
          <>
            Import product
            <br />
            <span className="text-[#fa6a25]">catalogue</span>
          </>
        }
        intro="Every line is bought from producers abroad, landed in Chattogram and cleared by our own team. Open a product for specifications, HS code and packaging."
      >
        <TradeGrid products={importProducts} />
      </Section>

      {/* ───────────── SOURCING & COMPLIANCE ───────────── */}
      <section aria-labelledby="sourcing-heading" className="bg-white py-20 text-[#06131d] lg:py-28">
        <div className={`${pad} grid gap-14 xl:grid-cols-[0.8fr_1.2fr] xl:items-end xl:gap-16`}>
          <div>
            <SectionHead
              dark
              eyebrow="Sourcing & compliance"
              id="sourcing-heading"
              title={
                <>
                  Sourced from
                  <br />
                  <span className="text-[#fa6a25]">{countries.length}</span> countries
                </>
              }
            />
            <p className="mt-6 max-w-md text-[#06131d]/70">
              Each container in this yard is an origin we import from. Hover or tap one to see which lines we bring in
              from there.
            </p>
          </div>
          <SourcingYard countries={countries} />
        </div>
        <div className={`${pad} mt-16`}>
          <CertCards certs={certs} />
        </div>
      </section>

      {/* ───────────── LANES & LEAD TIMES ───────────── */}
      <Section
        id="lanes"
        tone="sea"
        grid
        eyebrow="How imports land"
        title={
          <>
            Lanes into
            <br />
            <span className="text-[#fa6a25]">Bangladesh</span>
          </>
        }
        intro="Planned lanes from origin to Chattogram, with clearance handled in-house so cargo moves straight on to your warehouse."
      >
        <div className="grid gap-4 xl:grid-cols-[1fr_320px]">
          <div className="grid content-start gap-4">
            <LaneList lanes={LANES} />
            <FigureCards items={TIMES} />
            <div className="rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10">
              <h3 className={`${labelCls} text-white/50`}>With every shipment</h3>
              <ChipList items={shipmentDocs} icon="receipt" className="mt-4" />
            </div>
            <p className="mt-2 xl:hidden">
              <ArrowLink href="/services/trade-routes">All trade routes</ArrowLink>
            </p>
          </div>
          <div className="relative hidden overflow-hidden rounded-3xl xl:block">
            <Image
              src="/images/v3/trade/container-stacks.webp"
              alt="Aerial view of stacked shipping containers at a port at dusk"
              fill
              sizes="320px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06131d]/85 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6">
              <ArrowLink href="/services/trade-routes">All trade routes</ArrowLink>
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        title={
          <>
            Source your next
            <br />
            <span className="text-[#fa6a25]">import</span>
          </>
        }
        body="Tell us the product, quantity and destination. We'll come back with a landed-cost quote."
        image="/images/v3/ship-open-sea.webp"
        imageAlt="Loaded container ship sailing through open sea"
      />
    </V3Shell>
  );
}
