import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { breadcrumbSchema, speakableWebPageSchema } from "@/lib/schema-helpers";
import CtaBand from "@/components/v3/CtaBand";
import Icon, { type IconName } from "@/components/v3/Icons";
import PageHero from "@/components/v3/PageHero";
import ProcessTrack from "@/components/v3/ProcessTrack";
import { Section, labelCls } from "@/components/v3/blocks";
import { GhostButton, Pill, PillButton, focusRing, pad } from "@/components/v3/ui";
import V3Shell from "@/components/v3/V3Shell";
import s from "@/components/v3/v3.module.css";

export const metadata: Metadata = {
  title:
    "About K.H. Infinity | Direct B2B Importer, Dhaka — Since 2018",
  description:
    "K.H. Infinity, founded 2018 in Tikatuli, Dhaka, is a direct B2B importer rooted in Khatunganj's trade legacy. We own inventory and handle NBR customs clearance, TTI transparency, and BSTI compliance in-house.",
  keywords:
    "K.H. Infinity about, KHI Dhaka, B2B importer Bangladesh, Khatunganj trade, import export company Dhaka, NBR customs clearance, TTI transparency, BSTI compliance, direct importer Bangladesh",
  alternates: {
    canonical: "https://khi.com.bd/about",
  },
  openGraph: {
    title: "About K.H. Infinity | Direct B2B Importer — Dhaka Since 2018",
    description:
      "Founded in 2018 in Tikatuli, Dhaka. K.H. Infinity owns physical inventory, manages NBR customs clearance in-house, and provides TTI transparency for B2B buyers across 15+ countries.",
    images: ["/images/about/about-banner.webp"],
    url: "https://khi.com.bd/about",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About K.H. Infinity | Direct B2B Importer — Dhaka Since 2018",
    description:
      "Founded 2018 in Tikatuli, Dhaka. Owned inventory, in-house NBR customs clearance, TTI transparency, and BSTI compliance. Roots in Khatunganj — the Wall Street of the East.",
    images: ["/images/about/about-banner.webp"],
  },
};

const STATS = [
  { value: "5+", label: "Years of excellence" },
  { value: "15+", label: "Countries served" },
  { value: "70+", label: "Successful deliveries" },
  { value: "10+", label: "Global partners" },
];

// Khatunganj heritage → KHI today. The KHI container rides the ProcessTrack rail.
const HERITAGE = [
  {
    title: "1850s",
    body: "Khatunganj market is established. Named after Khatun Bibi, it comes to be known as the “Wall Street of the East.”",
    owner: "Khatunganj",
  },
  {
    title: "Waterways",
    body: "Its trade network connects Bangladesh to global commerce via the Karnaphuli River and the Chaktai, Rajakhali and Badarshah canals.",
    owner: "Karnaphuli River",
  },
  {
    title: "2018",
    body: "K.H. Infinity is founded in Tikatuli, Dhaka, as a formalized, contract-backed alternative to informal trust-only trading.",
    owner: "Tikatuli, Dhaka",
  },
  {
    title: "Today",
    body: "We serve clients across 15+ countries, facilitating seamless trade operations and delivering premium products.",
    owner: "15+ countries",
  },
];

// What we run ourselves as a direct B2B importer
const IN_HOUSE: { icon: IconName; title: string; body: string }[] = [
  { icon: "warehouse", title: "Physical inventory", body: "We own the stock we sell, as a direct B2B importer and wholesale distributor." },
  { icon: "stamp", title: "NBR customs clearance", body: "Managed as an internal capability, not handed to a third-party facilitator." },
  { icon: "calculator", title: "TTI transparency", body: "Total tax incidence is part of how we price, so duty is out in the open." },
  { icon: "shield", title: "BSTI compliance", body: "Standards compliance is handled in-house, alongside clearance." },
];

const MISSION = [
  {
    icon: "target" as const,
    label: "Our mission",
    title: (
      <>
        Seamless
        <br />
        global <span className="text-[#fa6a25]">trade</span>
      </>
    ),
    body: "To facilitate seamless global trade by providing reliable, efficient, and cost-effective import-export solutions while maintaining the highest standards of quality and customer service.",
  },
  {
    icon: "eye" as const,
    label: "Our vision",
    title: (
      <>
        The most
        <br />
        <span className="text-[#fa6a25]">trusted</span> name
      </>
    ),
    body: "To become the most trusted name in international trade, known for our integrity, innovation, and commitment to excellence in connecting businesses across borders.",
  },
];

const CERTS: { icon: IconName; title: string; body: string }[] = [
  { icon: "award", title: "ISO 9001:2015", body: "Quality Management System" },
  { icon: "doc", title: "Trade License", body: "Registered Import-Export Company" },
  { icon: "stamp", title: "Customs Compliance", body: "Authorized Economic Operator" },
];

const inlineLink = `font-semibold text-[#0b2c3d] underline decoration-[#fa6a25] decoration-2 underline-offset-4 hover:text-[#d9531a] ${focusRing}`;

function AboutJsonLd() {
  const crumbs = breadcrumbSchema([
    { name: "Home", url: "https://khi.com.bd/" },
    { name: "About", url: "https://khi.com.bd/about" },
  ]);

  const speakable = speakableWebPageSchema({
    url: "https://khi.com.bd/about",
    name: "About K.H. Infinity — Direct B2B Importer Dhaka Since 2018",
    dateModified: "2026-08-07",
  });

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://khi.com.bd/#organization",
    name: "K.H. Infinity",
    alternateName: "KHI",
    url: "https://khi.com.bd",
    telephone: "+880 1577081856",
    email: "info@khi.com.bd",
    foundingDate: "2018",
    description:
      "Direct B2B importer and wholesale distributor in Bangladesh. Founded in 2018 in Tikatuli, Dhaka, with operational ties to Khatunganj — the historic wholesale market known as the Wall Street of the East. We own physical inventory and manage NBR customs clearance, Total Tax Incidence (TTI) transparency, and BSTI compliance in-house.",
    image: "https://khi.com.bd/images/about/about-banner.webp",
    logo: "https://khi.com.bd/images/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kader Tropical Height, Shop-G5, 10 Hatkhola Road, Tikatuli, Wari",
      addressLocality: "Dhaka",
      postalCode: "1203",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.7227,
      longitude: 90.4113,
    },
    areaServed: [
      { "@type": "Country", name: "Bangladesh" },
      { "@type": "Place", name: "Gulf Cooperation Council" },
    ],
    sameAs: [
      "https://facebook.com/khinfinity",
      "https://linkedin.com/company/khinfinity",
      "https://instagram.com/khinfinity",
    ],
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: "Trade License" },
      { "@type": "EducationalOccupationalCredential", name: "ISO 9001:2015" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }}
      />
    </>
  );
}

export default function AboutPage() {
  return (
    <V3Shell>
      <AboutJsonLd />
      {/* ───────────── HERO ───────────── */}
      <PageHero
        image="/images/about/about-banner.webp"
        imageAlt="Container cargo ship at sunset, representing K.H. Infinity global trade operations"
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]}
        eyebrow="Since 2018"
        title={
          <>
            About
            <br />
            K.H. <span className="text-[#fa6a25]">Infinity</span>
          </>
        }
        lead={<p className="geo-anchor" data-speakable>Your trusted partner in global trade since 2018. Founded in Tikatuli, Dhaka, K.H. Infinity is a direct B2B importer with in-house NBR customs clearance, TTI transparency, and BSTI compliance.</p>}
        actions={
          <>
            <PillButton href="/quote">Request a quote</PillButton>
            <GhostButton href="/contact" glass>
              Talk to our team
            </GhostButton>
          </>
        }
        stats={STATS}
      />

      {/* ───────────── OUR JOURNEY ───────────── */}
      <section aria-labelledby="journey-heading" className="bg-[#d5dee7] py-20 text-[#06131d] lg:py-28">
        <div className={pad}>
          <h2 id="journey-heading" className="sr-only">
            Our journey
          </h2>
          {/* Statement with photo pills, as in the homepage about block */}
          <p className="max-w-5xl text-[1.65rem] font-medium leading-[1.4] tracking-tight text-[#0b2c3d] sm:text-3xl lg:text-[2.6rem] lg:leading-[1.3]">
            Founded in 2018 in Tikatuli, Dhaka
            <Pill src="/images/hubs/imports-hero.webp" /> within reach of Khatunganj, the historic market
            <Pill src="/images/v3/ship-aerial.webp" /> known as the{" "}
            <span className="relative whitespace-nowrap">
              Wall Street of the East
              <span aria-hidden="true" className="absolute inset-x-0 -bottom-1 h-[0.14em] rounded-full bg-[#fa6a25]" />
            </span>
            .
          </p>

          <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:col-span-6">
              <Image
                src="/images/hubs/imports-hero.webp"
                alt="Shipping containers at port representing KHI import and export logistics"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 620px, 100vw"
              />
              <div className={`${s.glass} absolute bottom-4 left-4 rounded-2xl px-4 py-3 text-white sm:bottom-6 sm:left-6`}>
                <p className={`${labelCls} text-white/60`}>Direct B2B</p>
                <p className="mt-1 text-sm font-semibold">Importer &amp; wholesale distributor</p>
              </div>
            </div>
            <div className="space-y-5 text-[17px] leading-relaxed text-[#06131d]/75 lg:col-span-6 lg:pt-2">
              <p className={`${labelCls} text-[#06131d]/50`}>Our journey</p>
              <p>
                Established in the 1850s and named after Khatun Bibi, Khatunganj&apos;s trade network connects Bangladesh
                to global commerce. KHI provides a formalized, contract-backed alternative to informal trust-only trading.
              </p>
              <p>
                We are a <strong className="font-semibold text-[#0b2c3d]">direct B2B importer and wholesale distributor</strong>.
                We own physical inventory and manage NBR customs clearance, TTI transparency, and BSTI compliance as internal
                capabilities, not as a third-party logistics facilitator.
              </p>
              <p>
                Our commitment to quality, reliability, and customer satisfaction has helped us build strong relationships
                with partners worldwide. Explore our{" "}
                <Link href="/imports" className={inlineLink}>
                  import operations
                </Link>
                ,{" "}
                <Link href="/exports" className={inlineLink}>
                  export programmes
                </Link>
                , and{" "}
                <Link href="/services" className={inlineLink}>
                  internal trade services
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── HERITAGE TIMELINE ───────────── */}
      <Section
        id="heritage"
        tone="sea"
        grid
        eyebrow="Khatunganj heritage"
        title={
          <>
            From the canals
            <br />
            to <span className="text-[#fa6a25]">15+ countries</span>
          </>
        }
        intro="The trade tradition we grew up beside, and the company we built on it."
      >
        <ProcessTrack steps={HERITAGE} />
      </Section>

      {/* ───────────── IN-HOUSE ───────────── */}
      <Section
        id="in-house"
        tone="paper"
        eyebrow="How we operate"
        title={
          <>
            Owned, not
            <br />
            <span className="text-[#fa6a25]">outsourced</span>
          </>
        }
        intro="Inventory, clearance and compliance sit inside KHI, so one team answers for your goods."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {IN_HOUSE.map((c) => (
            <li key={c.title} className="rounded-3xl bg-white p-6 ring-1 ring-[#06131d]/[0.06] sm:p-7">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#fa6a25]/10 text-[#d9531a]">
                <Icon name={c.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-[#0b2c3d]">{c.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#06131d]/70">{c.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ───────────── MISSION & VISION ───────────── */}
      <section aria-label="Mission and vision" className={`${s.gridBg} bg-[#06131d] py-20 lg:py-28`}>
        <div className={`${pad} grid gap-4 lg:grid-cols-2`}>
          {MISSION.map((m) => (
            <article key={m.label} className="flex flex-col rounded-[2rem] bg-white/[0.05] p-7 ring-1 ring-white/10 sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <h2 className={`${labelCls} text-white/55`}>{m.label}</h2>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#fa6a25] text-white">
                  <Icon name={m.icon} className="h-5 w-5" />
                </span>
              </div>
              <p aria-hidden="true" className={`${s.display} mt-8 text-[clamp(2.4rem,4.6vw,4rem)]`}>
                {m.title}
              </p>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/75">{m.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ───────────── CERTIFICATIONS ───────────── */}
      <Section
        id="certifications"
        tone="mist"
        eyebrow="Certifications & compliance"
        title={
          <>
            Registered &amp;
            <br />
            <span className="text-[#fa6a25]">compliant</span>
          </>
        }
        intro="The registrations and standards behind every contract we sign."
      >
        <ul className="grid gap-4 md:grid-cols-3">
          {CERTS.map((c) => (
            <li key={c.title} className="flex items-center gap-5 rounded-3xl bg-white p-6 ring-1 ring-[#06131d]/[0.06] sm:p-7">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#0b2c3d] text-[#fa6a25]">
                <Icon name={c.icon} className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <h3 className={`${s.display} text-2xl text-[#0b2c3d]`}>{c.title}</h3>
                <p className="mt-1 text-sm text-[#06131d]/65">{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title={
          <>
            Trade with
            <br />
            <span className="text-[#fa6a25]">K.H. Infinity</span>
          </>
        }
        image="/images/v3/ship-aerial.webp"
        imageAlt="Aerial view of a container ship cutting through dark water"
      />
    </V3Shell>
  );
}
