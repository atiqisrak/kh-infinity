import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { potatoExportFaq } from "@/lib/potato-export-faq";
import CtaBand from "@/components/v3/CtaBand";
import { StatStrip } from "@/components/v3/PageHero";
import Crumbs from "@/components/v3/Crumbs";
import Icon from "@/components/v3/Icons";
import ProcessTrack, { type ProcessStep } from "@/components/v3/ProcessTrack";
import { CheckList, ChipList, FaqList, ListCard, RowTable, Section, labelCls } from "@/components/v3/blocks";
import { ArrowLink, Eyebrow, GhostButton, PillButton, SectionHead, pad } from "@/components/v3/ui";
import V3Shell from "@/components/v3/V3Shell";
import s from "@/components/v3/v3.module.css";

const canonical = "https://khi.com.bd/products/potato-gulf";
const ogImage = "/images/potato-export/hero.webp";

export const metadata: Metadata = {
  title:
    "Potato Export to Gulf & GCC from Bangladesh | K.H. Infinity — Premium Export Potatoes",
  description:
    "Export-grade Bangladesh potatoes for Gulf buyers: grading, mesh and jute packing, tarpaulin protection, documentation support, and reliable logistics to GCC markets.",
  keywords:
    "potato export Bangladesh, Gulf potato supplier, GCC potato import, Bangladesh potatoes export, premium potatoes Middle East, K.H. Infinity potato export, mesh bag potatoes export",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Potato Export to Gulf & GCC from Bangladesh | K.H. Infinity",
    description:
      "Grading, packing, QC, and export documentation for Gulf and GCC potato buyers sourcing from Bangladesh.",
    url: canonical,
    images: [ogImage],
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Potato Export to Gulf & GCC from Bangladesh | K.H. Infinity",
    description:
      "Export-grade potatoes, Gulf-focused logistics, and buyer-ready documentation.",
    images: [ogImage],
  },
};

function JsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: potatoExportFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://khi.com.bd/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Potato export (Gulf)",
        item: "https://khi.com.bd/products/potato-gulf",
      },
    ],
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: canonical,
    name: "Potato Export to Gulf & GCC from Bangladesh",
    dateModified: "2026-08-07",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".geo-anchor", "[data-speakable]"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
    </>
  );
}

// Published potato spec (matches the Premium Potatoes product profile)
const SPEC_ROWS: [string, React.ReactNode][] = [
  ["Variety", "Russet, Red, Yellow"],
  ["Size", "50–80 mm diameter"],
  ["Quality", "Grade A"],
  ["Storage", "Temperature controlled (programme)"],
];

const USE_CASES = [
  {
    icon: "store" as const,
    title: "Retail & hypermarkets",
    body: "Consistent 50–80 mm band, clean skin, Grade A presentation for shelf-ready programmes.",
    note: "Packs: 25 kg mesh for backroom; discuss smaller retail SKUs on enquiry.",
  },
  {
    icon: "warehouse" as const,
    title: "Wholesale & redistribution",
    body: "50 kg jute for volume lanes; ventilated stowage compatible with dry or reefer guidance from your line.",
    note: "Ideal for importers supplying municipal markets and secondary distributors.",
  },
  {
    icon: "chef" as const,
    title: "Foodservice & processing prep",
    body: "Russet, Red, and Yellow lines per our spec sheet—match variety to your menu or peeling line.",
    note: "Share fry colour, solids, or defect tolerances for tailored grading notes.",
  },
];

const STEPS: ProcessStep[] = [
  { title: "Intake", body: "Lot registration and baseline moisture and defect screening." },
  { title: "Grade & size", body: "Target Gulf retail or wholesale bands with documented tolerances." },
  { title: "Pack & protect", body: "Mesh, jute, and tarpaulin options matched to lane and buyer SOP." },
  { title: "Ship docs", body: "Invoice, packing list, BL/AWB, COO—plus destination-specific certs as required." },
];

const CORE_DOCS = ["Commercial invoice", "Packing list", "Bill of lading or airway bill", "Certificate of origin (as applicable)"];
const DESTINATION_DOCS = [
  "Phytosanitary certificate and import permits per country rules",
  "Additional certificates requested by your buyer or regulator",
  "Inspection company reports if mandated by contract",
];

const SNAPSHOTS = [
  {
    tag: "Wholesale GCC",
    title: "Mesh + jute mix",
    body: "25 kg mesh dominant lines with 50 kg jute for volume redistribution; Grade A, 50–80 mm.",
    qc: "Pre-load defect cap agreed with buyer; ventilated container stowage plan shared pre-booking.",
  },
  {
    tag: "Modern trade",
    title: "Presentation-first",
    body: "Tighter skin finish checks; consistent sizing within band for shelf display; optional added protection for long transits.",
    qc: "Enhanced visual sort; photo samples available on request ahead of first shipment.",
  },
  {
    tag: "Foodservice",
    title: "Variety-led",
    body: "Russet / Red / Yellow splits possible within programme MOQs; discuss fry and texture notes with our desk.",
    qc: "Variety segregation at pack line; lot labels for kitchen traceability.",
  },
];

const inlineLink =
  "font-semibold underline decoration-[#fa6a25] decoration-2 underline-offset-4 hover:text-[#d9531a] outline-none focus-visible:ring-2 focus-visible:ring-[#fa6a25] rounded-sm";

function Photo({ src, alt, className = "", sizes }: { src: string; alt: string; className?: string; sizes: string }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-[#0b2c3d] ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

export default function PotatoExportPage() {
  return (
    <V3Shell>
      <JsonLd />

      {/* ───────────── HERO: lane card over the photo collage ───────────── */}
      <section aria-labelledby="potato-title" className={`${s.gridBg} relative overflow-hidden bg-[#06131d] pt-[104px] lg:pt-[124px]`}>
        <div className={`${pad} grid items-center gap-12 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-20`}>
          <div>
            <Crumbs items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Potato", href: "/products/potato" }, { label: "Potato export (Gulf)", href: "/products/potato-gulf" }]} />
            <div className="mt-8">
              <Eyebrow>Gulf &amp; GCC buyers</Eyebrow>
            </div>
            <h1 id="potato-title" className={`${s.display} mt-5 text-[clamp(2.8rem,5.4vw,5rem)]`}>
              Potato export from Bangladesh built for <span className="text-[#fa6a25]">Gulf markets</span>
            </h1>
            <p className="geo-anchor mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg" data-speakable>
              Export-grade sorting, mesh and jute packing, tarpaulin-ready protection in transit, and documentation
              support from K.H. Infinity—aligned with our published potato specifications.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href="/quote">Request potato export quote</PillButton>
              <GhostButton href="/contact">Contact export desk</GhostButton>
            </div>
            <p className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <ArrowLink href="/products/potato">View full product specifications</ArrowLink>
              <ArrowLink href="/services/trade-routes/export-to-middle-east">Middle East export routes</ArrowLink>
            </p>
          </div>

          <div className="relative pb-4 pt-8 lg:pt-0">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-[#0b2c3d]">
              <Image
                src="/images/potato-export/hero.webp"
                alt="Farmer lifting freshly harvested potatoes from the soil"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <figure className="absolute left-3 top-0 w-[44%] min-w-[150px] max-w-[210px] rotate-[-3deg] overflow-hidden rounded-2xl bg-white p-2 shadow-2xl sm:left-6 lg:-top-8">
              <div className="relative aspect-[4/3]">
                <Image src="/images/potato-export/grading.webp" alt="Russet potatoes spilling from a jute sack" fill sizes="210px" className="object-contain" />
              </div>
              <figcaption className="whitespace-nowrap px-1 pb-1 pt-2 font-mono text-[11px] uppercase tracking-wide text-[#06131d]/60">
                50 kg jute · Grade A
              </figcaption>
            </figure>
            <div className={`${s.glass} mt-4 rounded-2xl p-5 sm:absolute sm:-bottom-4 sm:right-6 sm:mt-0 sm:w-[260px]`}>
              <p className="text-xs uppercase tracking-[0.14em] text-white/60">Export lane</p>
              <div className="mt-3 flex items-center gap-3">
                <span className={`${s.display} text-3xl`}>BD</span>
                <span className="h-px flex-1 bg-[#fa6a25]" />
                <span className={`${s.display} text-3xl text-[#fa6a25]`}>GCC</span>
              </div>
              <p className="mt-2 text-sm text-white/70">Gulf retail, wholesale &amp; foodservice</p>
            </div>
          </div>
        </div>
        <StatStrip
          stats={[
            { value: "3", label: "Varieties: Russet · Red · Yellow" },
            { value: "50–80", label: "Size band, mm diameter" },
            { value: "A", label: "Grade" },
            { value: "25/50", label: "kg mesh / jute packs" },
          ]}
        />
      </section>

      {/* ───────────── WHY KHI ───────────── */}
      <section id="intro" aria-labelledby="intro-heading" className="bg-white py-20 text-[#06131d] lg:py-28">
        <div className={`${pad} grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20`}>
          <div>
            <SectionHead
              dark
              size="md"
              eyebrow="Why KHI"
              id="intro-heading"
              title={
                <>
                  Why Gulf buyers work with <span className="text-[#fa6a25]">K.H. Infinity</span>
                </>
              }
            />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#06131d]/70">
              We combine farm-sourced Bangladesh potatoes with disciplined grading, export-oriented packing, and clear
              communication on documents and shipment timing—so procurement teams in the Gulf can plan retail and
              wholesale programmes with confidence.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#06131d]/70">
              Specifications for variety, size band, and Grade A quality match our{" "}
              <Link href="/products/potato" className={`${inlineLink} text-[#0b2c3d]`}>
                Premium Potatoes
              </Link>{" "}
              product profile (50–80&nbsp;mm, Russet / Red / Yellow).
            </p>
            <div className="mt-8">
              <PillButton href="/quote" tone="ink">
                Share your volume &amp; destination
              </PillButton>
            </div>
          </div>
          <Photo
            src="/images/potato-export/logistics.webp"
            alt="Premium export potatoes from Bangladesh"
            sizes="(min-width: 1024px) 480px, 100vw"
            className="aspect-[4/3] lg:aspect-[491/508]"
          />
        </div>
      </section>

      {/* ───────────── GRADES & USE CASES ───────────── */}
      <Section
        id="grades"
        tone="mist"
        eyebrow="Grades & sizes"
        headSize="md"
        title={
          <>
            Grades, sizes, and
            <br />
            <span className="text-[#fa6a25]">Gulf use cases</span>
          </>
        }
        intro="Align these profiles with your category plan—hypermarkets, wholesale, and foodservice each stress size consistency and skin integrity differently."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {USE_CASES.map((u) => (
            <ListCard key={u.title} icon={u.icon} title={u.title}>
              <p>{u.body}</p>
              <p className="mt-3 border-t border-[#06131d]/[0.08] pt-3 text-sm text-[#06131d]/55">{u.note}</p>
            </ListCard>
          ))}
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Photo
            src="/images/potato-export/gulf-retail.webp"
            alt="Yellow potatoes suitable for retail and Gulf programmes"
            sizes="(min-width: 1024px) 620px, 100vw"
            className="aspect-video lg:aspect-auto lg:min-h-[300px]"
          />
          <RowTable title="Published spec" rows={SPEC_ROWS} className="bg-white" />
        </div>
      </Section>

      {/* ───────────── SORTING, PACKING, QC ───────────── */}
      <section id="process" aria-labelledby="process-heading" className={`${s.gridBg} bg-[#06131d] py-20 lg:py-28`}>
        <div className={pad}>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHead
              eyebrow="Packhouse"
              id="process-heading"
              title={
                <>
                  Sorting, packing,
                  <br />
                  and <span className="text-[#fa6a25]">quality checks</span>
                </>
              }
            />
            <p className="max-w-md text-white/70 lg:pb-3">
              A repeatable path from intake to container-ready cargo—visualised below and detailed step by step.
            </p>
          </div>

          <ProcessTrack steps={STEPS} />

          <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="grid grid-cols-2 gap-3">
              <Photo src="/images/potato-export/grading.webp" alt="Potato grading and sorting for export" sizes="(min-width: 1024px) 280px, 50vw" className="aspect-[3/4]" />
              <Photo
                src="/images/potato-export/quality-checks.webp"
                alt="Quality inspection of export potatoes"
                sizes="(min-width: 1024px) 280px, 50vw"
                className="mt-10 aspect-[3/4]"
              />
            </div>
            <ol className="divide-y divide-white/10 border-y border-white/10">
              {[
                {
                  t: "Intake & lot ID",
                  d: "traceable batches tied to farm clusters and harvest window.",
                },
                {
                  t: "Sorting & grading",
                  d: "mechanical and visual steps to hit agreed size bands and defect caps.",
                },
                {
                  t: "Packing",
                  d: (
                    <>
                      25&nbsp;kg mesh or 50&nbsp;kg jute per programme; optional tarpaulin coverage for in-transit
                      protection (
                      <Link href="/products/tarpaulin" className={`${inlineLink} text-white`}>
                        tarpaulin product
                      </Link>
                      ).
                    </>
                  ),
                },
                {
                  t: "Pre-shipment QC",
                  d: "final inspection checkpoints aligned with buyer specs and destination requirements.",
                },
              ].map((step, i) => (
                <li key={step.t} className="grid grid-cols-[3rem_1fr] gap-4 py-6">
                  <span className="font-mono text-sm text-[#fa6a25]">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{step.t}</h3>
                    <p className="mt-1.5 leading-relaxed text-white/70">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────────── GULF MARKET REALITIES ───────────── */}
      <section id="gulf" aria-labelledby="gulf-heading" className="bg-[#f2f4f6] py-20 text-[#06131d] lg:py-28">
        <div className={`${pad} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
          <Photo
            src="/images/potato-export/export-packaging.webp"
            alt="Export packaging and tarpaulin protection for potatoes"
            sizes="(min-width: 1024px) 600px, 100vw"
            className="aspect-[1000/809] lg:order-2"
          />
          <div>
            <SectionHead
              dark
              size="md"
              eyebrow="Arrival condition"
              id="gulf-heading"
              title={
                <>
                  Built for Gulf
                  <br />
                  <span className="text-[#fa6a25]">market realities</span>
                </>
              }
            />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#06131d]/70">
              Gulf programmes prioritise predictable sizing, skin finish, and arrival condition after long sea legs. We
              plan packing and protective materials with those outcomes in mind and communicate harvest windows so you
              can align promotions and shelf dates.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#06131d]/70">
              Fresh table potatoes are whole produce; where your registration or retailer checklist asks for food-safety
              or handling attestations, share it early—we map what we can support on a shipment-specific basis.
            </p>
            <div className="mt-8">
              <ArrowLink href="/services/trade-routes/export-to-middle-east" dark>
                Explore our Middle East export route overview
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── SHIPPING & DOCUMENTATION ───────────── */}
      <Section
        id="shipping"
        tone="sea"
        grid
        eyebrow="Paperwork"
        title={
          <>
            Shipping and
            <br />
            <span className="text-[#fa6a25]">documentation</span>
          </>
        }
        intro="Exact document sets depend on the importing country and product registration status. The list below is typical—your logistics partner should confirm the final packet for each consignment."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 sm:p-8">
            <h3 className="flex items-center gap-3 text-lg font-semibold">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#fa6a25]/15 text-[#fa6a25]">
                <Icon name="doc" className="h-5 w-5" />
              </span>
              Core commercial documents
            </h3>
            <ChipList items={CORE_DOCS} icon="receipt" className="mt-6" />
          </div>
          <div className="rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 sm:p-8">
            <h3 className="flex items-center gap-3 text-lg font-semibold">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#fa6a25]/15 text-[#fa6a25]">
                <Icon name="leaf" className="h-5 w-5" />
              </span>
              Destination-specific (when required)
            </h3>
            <CheckList items={DESTINATION_DOCS} dark={false} className="mt-6" />
            <p className="mt-6 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/55">
              We coordinate with your nominated forwarder and authorities based on confirmed destination and HS
              treatment—we do not provide legal advice on foreign import law.
            </p>
          </div>
        </div>
      </Section>

      {/* ───────────── SAFETY & SUPPORT ───────────── */}
      <Section
        id="usp"
        tone="white"
        eyebrow="Buyer assurance"
        headSize="md"
        title={
          <>
            Safety, reliability,
            <br />
            and <span className="text-[#fa6a25]">buyer support</span>
          </>
        }
      >
        <div className="grid gap-4 md:grid-cols-3">
          <ListCard icon="award" title="Certifications profile" className="bg-[#f2f4f6]">
            <p>
              Our published potato sourcing references BSTI, export quality standards, and organic availability when
              confirmed for the crop year.
            </p>
            <p className="mt-3 text-sm text-[#06131d]/55">Request the current certificate pack for your tender.</p>
          </ListCard>
          <ListCard icon="shield" title="Cargo protection" className="bg-[#f2f4f6]">
            Tarpaulin and handling SOPs aim to reduce moisture ingress and mechanical damage—especially relevant for
            warm-climate destinations.
          </ListCard>
          <ListCard icon="users" title="Buyer support" className="bg-[#f2f4f6]">
            English-language coordination on specs, samples, inspection windows, and shipment milestones—single thread
            for operations and documentation questions.
          </ListCard>
        </div>
      </Section>

      {/* ───────────── PROGRAMME SNAPSHOTS ───────────── */}
      <Section
        id="proof"
        tone="mist"
        eyebrow="Programmes"
        headSize="md"
        title={
          <>
            Shipment-ready
            <br />
            <span className="text-[#fa6a25]">programme snapshots</span>
          </>
        }
        intro="Illustrative programme profiles we routinely align with for Gulf and GCC buyers—exact packs and docs are fixed per contract and lane."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {SNAPSHOTS.map((p) => (
            <article key={p.tag} className="flex flex-col rounded-3xl bg-white p-6 ring-1 ring-[#06131d]/[0.06] sm:p-8">
              <p className={`${labelCls} text-[#d9531a]`}>{p.tag}</p>
              <h3 className={`${s.display} mt-3 text-[1.9rem] text-[#0b2c3d]`}>{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#06131d]/70">{p.body}</p>
              <p className="mt-auto pt-6">
                <span className="flex gap-3 border-t border-[#06131d]/10 pt-4 text-sm leading-relaxed text-[#06131d]/60">
                  <span className={`${labelCls} shrink-0 pt-0.5 text-[#0b2c3d]`}>QC</span>
                  <span>{p.qc}</span>
                </span>
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* ───────────── FAQ ───────────── */}
      <section id="faq" aria-labelledby="faq-heading" className="bg-[#06131d] py-20 lg:py-28">
        <div className={`${pad} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
          <div>
            <SectionHead
              eyebrow="FAQ"
              id="faq-heading"
              size="md"
              title={
                <>
                  Gulf buyer
                  <br />
                  <span className="text-[#fa6a25]">FAQs</span>
                </>
              }
            />
            <p className="mt-6 max-w-sm text-white/70">
              Answers below mirror the structured data on this page for search engines and assistants.
            </p>
            <div className="mt-8">
              <GhostButton href="/contact">Ask the export desk</GhostButton>
            </div>
          </div>
          <FaqList dark={false} items={potatoExportFaq.map((f) => ({ q: f.question, a: f.answer }))} />
        </div>
      </section>

      <CtaBand
        title={
          <>
            Ready to programme your next <span className="text-[#fa6a25]">potato shipment?</span>
          </>
        }
        body="Send destination, annual or spot volume, preferred grades, and packing—we will respond with availability and next steps."
        image="/images/v3/ship-open-sea.webp"
        imageAlt="Loaded container ship sailing through open sea"
        cta={{ label: "Request export quote", href: "/quote" }}
      />
    </V3Shell>
  );
}
