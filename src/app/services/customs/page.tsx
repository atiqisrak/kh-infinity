import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/v3/CtaBand";
import Icon, { type IconName } from "@/components/v3/Icons";
import PageHero from "@/components/v3/PageHero";
import ProcessTrack from "@/components/v3/ProcessTrack";
import { CheckList, ChipList, Section, labelCls } from "@/components/v3/blocks";
import { GhostButton, PillButton, SectionHead, focusRing, pad } from "@/components/v3/ui";
import V3Shell from "@/components/v3/V3Shell";
import s from "@/components/v3/v3.module.css";
import { speakableWebPageSchema } from "@/lib/schema-helpers";

const canonical = "https://khi.com.bd/services/customs";
const orgName = "K.H. Infinity";
const orgUrl = "https://khi.com.bd";
const logoUrl = "https://khi.com.bd/images/brand/official_logo.svg";

export const metadata: Metadata = {
  title:
    "Customs Clearance Service Bangladesh | Trade Support & Documentation | K.H. Infinity",
  description:
    "Customs clearance and trade support for Bangladesh imports and exports: document preparation, HS guidance, duty and tax coordination, delay mitigation, and buyer readiness. Contact K.H. Infinity.",
  keywords:
    "customs clearance service Bangladesh, trade support customs, import export documentation Bangladesh, customs broker support Dhaka, NBR documentation, K.H. Infinity customs",
  alternates: { canonical },
  openGraph: {
    title: "Customs Clearance Service & Trade Support | K.H. Infinity",
    description:
      "End-to-end customs clearance support: invoices, packing lists, certificates, coordination with forwarders, and practical guidance for smooth release.",
    url: canonical,
    images: ["/images/cover/kh2.webp"],
    siteName: orgName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customs Clearance Service & Trade Support | K.H. Infinity",
    description:
      "Documentation, classification support, and clearance coordination for Bangladesh trade.",
    images: ["/images/cover/kh2.webp"],
  },
};

function CustomsJsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Customs clearance and trade documentation support",
    alternateName: "Customs Clearance Service",
    serviceType: "Customs clearance",
    description:
      "Comprehensive trade support for Bangladesh-bound or Bangladesh-origin shipments: import and export document preparation, tariff classification and duty coordination with your advisers, mitigation of common clearance delays, and buyer preparation guidance. Where Bangladesh law requires a licensed customs agent to file declarations, clients retain their appointed agent; we align document sets and timelines with that agent.",
    url: canonical,
    additionalType: "http://www.productontology.org/id/Customs_broker",
    category: "International trade services",
    areaServed: [
      { "@type": "Country", name: "Bangladesh" },
      { "@type": "Place", name: "Dhaka trade corridor" },
    ],
    provider: {
      "@type": "Organization",
      name: orgName,
      legalName: orgName,
      url: orgUrl,
      logo: logoUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Kader Tropical Height, Shop- G5, 10 Hatkhola Road, Tikatuli, Wari",
        addressLocality: "Dhaka",
        postalCode: "1203",
        addressCountry: "BD",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+8801577081856",
          email: "info@khi.com.bd",
          contactType: "customer service",
          areaServed: "BD",
          availableLanguage: ["English", "bn"],
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: `${orgUrl}/quote`,
      availability: "https://schema.org/InStock",
      description:
        "Pricing is agreed per shipment scope. Request a quotation for customs clearance and documentation support.",
      eligibleRegion: { "@type": "Country", name: "BD" },
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Typical customs clearance support workflow with K.H. Infinity",
    description:
      "High-level steps we coordinate with importers, exporters, and logistics partners for Bangladesh customs processes.",
    step: [
      {
        "@type": "HowToStep",
        name: "Intake and document checklist",
        text: "Confirm HS codes, commercial invoice, packing list, BL or AWB, and destination-specific certificates.",
      },
      {
        "@type": "HowToStep",
        name: "Pre-arrival preparation",
        text: "Align values, incoterms, and permits with your forwarder and regulatory requirements before cargo arrival.",
      },
      {
        "@type": "HowToStep",
        name: "Assessment and payment coordination",
        text: "Support coordination of duty, tax, and VAT assessments with your finance team and bank where applicable.",
      },
      {
        "@type": "HowToStep",
        name: "Examination and release",
        text: "Coordinate inspection slots, queries from authorities, and release once obligations are met.",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${orgUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${orgUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Customs clearance service",
        item: canonical,
      },
    ],
  };

  const speakable = speakableWebPageSchema({
    url: canonical,
    name: "Customs Clearance Service Bangladesh",
    dateModified: "2026-08-07",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }}
      />
    </>
  );
}

const included: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "doc",
    title: "Document preparation",
    body: "Commercial invoices, packing lists, certificates of origin, and permit copies organised for submission.",
  },
  {
    icon: "search",
    title: "Tariff classification support",
    body: "HS code alignment and liaison with your technical or legal advisers on duty preferences and SRO context.",
  },
  {
    icon: "calculator",
    title: "Duty, tax, and VAT coordination",
    body: "Structured handoffs to your finance and banking partners for assessment and payment milestones.",
  },
  {
    icon: "ship",
    title: "Import and export lanes",
    body: "Same discipline for inbound industrial and FMCG cargo and outbound agricultural and general exports.",
  },
];

const documentGroups: { icon: IconName; title: string; items: string[] }[] = [
  {
    icon: "receipt",
    title: "Commercial core",
    items: [
      "Commercial invoice",
      "Packing list",
      "Bill of lading / airway bill",
      "Letter of credit or purchase order (as applicable)",
    ],
  },
  {
    icon: "shield",
    title: "Origin and compliance",
    items: [
      "Certificate of origin",
      "Phytosanitary / product-specific certificates",
      "Insurance certificates",
      "Import registration or IRC references (imports)",
    ],
  },
  {
    icon: "handshake",
    title: "Partner handoffs",
    items: [
      "Freight forwarder instructions",
      "Delivery order coordination",
      "Bond or warehouse paperwork when relevant",
      "Export incentives documentation (exports)",
    ],
  },
];

const steps = [
  { title: "Intake", body: "Checklist of HS, values, incoterms, permits, and carrier documents." },
  { title: "Pre-arrival", body: "Resolve discrepancies early; pre-advise bank and insurer if needed." },
  { title: "Assessment", body: "Coordinate duty, VAT, and ancillary charges with your treasury." },
  { title: "Release", body: "Examination scheduling, query response, and handoff to delivery." },
];

const delayPoints = [
  "Invoice vs packing list quantity or weight mismatches",
  "HS code changes or SRO eligibility not reflected on documents",
  "Late or incomplete certificate sets for regulated products",
  "Bank or L/C discrepancies holding release",
  "Last-minute changes to consignee or notify party",
];

const buyerChecklist = [
  "Final commercial invoice in the name required by customs",
  "Accurate gross/net weights and carton counts",
  "HS codes agreed with your technical team",
  "Copies of registration, IRC, or export permits ready",
  "Named customs broker or agent contact (if appointed)",
  "Preferred incoterm and discharge port confirmed in writing",
];

const contactLink = `font-semibold text-[#0b2c3d] underline decoration-[#fa6a25] decoration-2 underline-offset-4 hover:text-[#d9531a] ${focusRing}`;

export default function CustomsClearanceServicePage() {
  return (
    <V3Shell>
      <CustomsJsonLd />

      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Customs clearance service", href: "/services/customs" },
        ]}
        eyebrow="Trade support"
        title={
          <>
            Customs clearance
            <br />
            service for <span className="text-[#fa6a25]">Bangladesh</span> trade
          </>
        }
        titleClassName="text-[clamp(2.75rem,5.4vw,5.25rem)]"
        lead={
          <p className="geo-anchor" data-speakable>
            Practical customs clearance support: document packs, HS and duty coordination with your advisers, fewer
            preventable delays, and a clear checklist for buyers and shippers—backed by K.H. Infinity&apos;s
            import-export operations experience.
          </p>
        }
        actions={
          <>
            <PillButton href="/quote">Request customs support quote</PillButton>
            <GhostButton href="/contact">Speak to our desk</GhostButton>
          </>
        }
        aside={
          <figure className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#0b2c3d] ring-1 ring-white/10">
              <Image
                src="/images/cover/kh2.webp"
                alt="Shipping containers and logistics supporting customs clearance for international trade"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06131d]/70 via-transparent to-transparent" />
            </div>
            {/* Clearance docket: the four stages as a stamped checklist */}
            <div
              className={`${s.glass} relative -mt-16 ml-4 mr-4 rounded-2xl p-5 sm:ml-auto sm:mr-6 sm:w-[300px]`}
              aria-hidden="true"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.14em] text-white/60">Clearance docket</p>
                <span className="grid h-9 w-9 -rotate-12 place-items-center rounded-full border-2 border-[#fa6a25] text-[#fa6a25]">
                  <Icon name="stamp" className="h-4 w-4" />
                </span>
              </div>
              <ol className="mt-3 grid grid-cols-4 gap-2">
                {steps.map((st, i) => (
                  <li key={st.title} className="text-center">
                    <span className="mx-auto grid h-8 w-8 place-items-center rounded-full bg-[#fa6a25] font-mono text-xs text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1.5 block text-[11px] leading-tight text-white/75">{st.title}</span>
                  </li>
                ))}
              </ol>
            </div>
          </figure>
        }
      />

      {/* ───────────── WHAT'S INCLUDED ───────────── */}
      <section aria-labelledby="included-heading" className="bg-white py-20 text-[#06131d] lg:py-28">
        <div className={`${pad} grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead
              dark
              eyebrow="What's included"
              id="included-heading"
              size="md"
              title={
                <>
                  What our customs
                  <br />
                  clearance support <span className="text-[#fa6a25]">includes</span>
                </>
              }
            />
            <p className="mt-6 max-w-md leading-relaxed text-[#06131d]/70">
              We help trading teams prepare complete, consistent paperwork and timelines around Bangladesh National
              Board of Revenue (NBR) processes. Where Bangladesh law requires a{" "}
              <strong className="font-semibold text-[#0b2c3d]">licensed customs agent or broker</strong> to file
              declarations on your behalf, you retain that relationship—we align our document set and milestones with
              their filing workflow.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {included.map((it) => (
              <li key={it.title} className="rounded-3xl bg-[#f2f4f6] p-6 sm:p-8">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#fa6a25]/10 text-[#d9531a]">
                  <Icon name={it.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#0b2c3d]">{it.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#06131d]/70">{it.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── DOCUMENTS ───────────── */}
      <Section
        id="documents"
        tone="paper"
        eyebrow="Paperwork"
        title={
          <>
            Documents we
            <br />
            routinely support
          </>
        }
        intro={<p>Grouped the way we check them: the commercial core, origin and compliance papers, and the handoffs to your logistics partners.</p>}
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {documentGroups.map((g) => (
            <div key={g.title} className="rounded-3xl bg-white p-6 ring-1 ring-[#06131d]/[0.06] sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#06131d] text-[#fa6a25]">
                  <Icon name={g.icon} className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-[#0b2c3d]">{g.title}</h3>
              </div>
              <ChipList items={g.items} dark icon="doc" className="mt-6" />
            </div>
          ))}
        </div>
      </Section>

      {/* ───────────── PROCESS ───────────── */}
      <Section
        id="process"
        tone="sea"
        grid
        eyebrow="Clearance timeline"
        title={
          <>
            From paperwork
            <br />
            to <span className="text-[#fa6a25]">release</span>
          </>
        }
        intro={
          <p>
            A practical workflow we coordinate with you and your logistics partners. Exact sequencing depends on port,
            mode, and product.
          </p>
        }
      >
        <ProcessTrack steps={steps} />
      </Section>

      {/* ───────────── DELAYS + CHECKLIST ───────────── */}
      <section aria-labelledby="delays-heading" className="bg-[#06131d] py-20 text-white lg:py-28">
        <div className={`${pad} grid gap-4 lg:grid-cols-2`}>
          <div className="rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 sm:p-8">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#fa6a25] text-white">
              <Icon name="clock" className="h-5 w-5" />
            </span>
            <h2 id="delays-heading" className={`${s.display} mt-6 text-[clamp(2rem,3.4vw,3rem)]`}>
              Common delay points we help mitigate
            </h2>
            <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {delayPoints.map((d, i) => (
                <li key={d} className="flex gap-4 py-4 text-[15px] leading-snug text-white/80">
                  <span className="font-mono text-sm text-[#fa6a25]">{String(i + 1).padStart(2, "0")}</span>
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-white/55">
              We emphasise parallel workstreams—finance, forwarder, and compliance—so one gap does not idle the whole
              clearance clock.
            </p>
          </div>

          <div className="rounded-3xl bg-[#f2f4f6] p-6 text-[#06131d] sm:p-8">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#06131d] text-[#fa6a25]">
              <Icon name="clipboard" className="h-5 w-5" />
            </span>
            <h2 className={`${s.display} mt-6 text-[clamp(2rem,3.4vw,3rem)] text-[#0b2c3d]`}>Buyer preparation checklist</h2>
            <CheckList items={buyerChecklist} className="mt-8" />
            <div className="mt-8 flex items-center gap-5 rounded-2xl bg-white p-5 ring-1 ring-[#06131d]/[0.06]">
              <span className={`${s.display} ${s.displayTight} shrink-0 text-5xl text-[#d9531a]`}>48–72h</span>
              <p className="text-sm leading-relaxed text-[#06131d]/70">
                Sending this pack 48–72 hours before arrival materially improves first-pass acceptance rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── OFFICE & CONTACT ───────────── */}
      <Section
        id="contact"
        tone="mist"
        eyebrow="Office and contact"
        title={
          <>
            Talk to the
            <br />
            customs desk
          </>
        }
        intro={
          <div className="flex flex-wrap gap-3">
            <PillButton href="/contact" tone="ink">
              Full contact page
            </PillButton>
            <GhostButton href="/faq" dark>
              Trade FAQ
            </GhostButton>
            <GhostButton href="/services" dark>
              All services
            </GhostButton>
          </div>
        }
      >
        <dl className="grid overflow-hidden rounded-3xl bg-white ring-1 ring-[#06131d]/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "pin" as const,
              label: "Head office",
              value: <>Kader Tropical Height, Shop- G5, 10 Hatkhola Road, Tikatuli, Wari, Dhaka 1203, Bangladesh</>,
            },
            {
              icon: "clock" as const,
              label: "Hours",
              value: (
                <>
                  Thursday–Tuesday: 9:00 AM – 8:00 PM
                  <br />
                  Wednesday: Closed
                </>
              ),
            },
            {
              icon: "phone" as const,
              label: "Phone",
              value: (
                <a href="tel:+8801577081856" className={contactLink}>
                  +880 1577081856
                </a>
              ),
            },
            {
              icon: "mail" as const,
              label: "Email",
              value: (
                <a href="mailto:info@khi.com.bd" className={contactLink}>
                  info@khi.com.bd
                </a>
              ),
            },
          ].map((c) => (
            <div
              key={c.label}
              className="flex flex-col gap-3 border-[#06131d]/10 p-6 max-lg:border-b sm:p-8 sm:max-lg:odd:border-r lg:border-r lg:last:border-r-0"
            >
              <dt className={`${labelCls} flex items-center gap-2 text-[#06131d]/50`}>
                <Icon name={c.icon} className="h-4 w-4 text-[#d9531a]" />
                {c.label}
              </dt>
              <dd className="text-[15px] leading-relaxed text-[#0b2c3d]">{c.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <CtaBand
        title={
          <>
            Ready to streamline
            <br />
            your next <span className="text-[#fa6a25]">clearance?</span>
          </>
        }
        body="Share shipment mode, HS chapter, and destination—we will outline documents, timelines, and how our team plugs into your broker and bank."
        image="/images/v3/customs-cta.webp"
        imageAlt="Stacked shipping containers at port"
        cta={{ label: "Request quote", href: "/quote" }}
      />
    </V3Shell>
  );
}
