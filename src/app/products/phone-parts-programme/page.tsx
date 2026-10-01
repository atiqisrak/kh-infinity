import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/v3/CtaBand";
import { StatStrip } from "@/components/v3/PageHero";
import Crumbs from "@/components/v3/Crumbs";
import Icon from "@/components/v3/Icons";
import ProcessTrack, { type ProcessStep } from "@/components/v3/ProcessTrack";
import { CheckList, ChipList, FaqList, ListCard, RowTable, Section, labelCls } from "@/components/v3/blocks";
import { ArrowLink, Eyebrow, GhostButton, PillButton, SectionHead, pad } from "@/components/v3/ui";
import V3Shell from "@/components/v3/V3Shell";
import s from "@/components/v3/v3.module.css";

const canonical = "https://khi.com.bd/products/phone-parts-programme";
const ogImage = "/images/new/phone-parts-hero.webp";

export const metadata: Metadata = {
  title: "Phone Parts Programme | iPhone & Android Displays from China | K.H. Infinity",
  description:
    "OEM-grade iPhone and Android replacement displays direct from Shenzhen. Grade A OLED, Grade A LCD, and Grade B refurb tiers. Compatibility matrix, MOQ table, and in-house NBR customs clearance for Bangladesh importers.",
  keywords:
    "iPhone display Bangladesh, iPhone screen replacement Bangladesh, Android display importer Bangladesh, Samsung screen Bangladesh, OPPO display importer, Xiaomi screen Bangladesh, phone parts wholesale Bangladesh, mobile display OEM Shenzhen, HS 8524 Bangladesh, KHI phone parts",
  alternates: { canonical },
  openGraph: {
    title: "Phone Parts Programme | iPhone & Android Displays | K.H. Infinity",
    description:
      "Direct-from-Shenzhen iPhone and Android displays for Bangladesh electronics importers and repair wholesalers. Grade A OLED, Grade A LCD, Grade B refurb — with CE/RoHS compliance and in-house NBR clearance.",
    url: canonical,
    images: [ogImage],
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phone Parts Programme | iPhone & Android Displays | K.H. Infinity",
    description:
      "OEM-grade mobile displays from Shenzhen for Bangladesh's repair and wholesale market. Multiple grade tiers, compatibility matrix, and transparent landed cost.",
    images: [ogImage],
  },
};

function JsonLd() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://khi.com.bd/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://khi.com.bd/products" },
      { "@type": "ListItem", position: 3, name: "Phone Parts Programme", item: canonical },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const speakable = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: canonical,
    name: "Phone Parts Programme — iPhone & Android Displays | K.H. Infinity",
    dateModified: "2026-10-01",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".geo-anchor", "[data-speakable]"],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  );
}

const GRADE_TIERS = [
  {
    tag: "Grade A OLED",
    title: "Premium repair tier",
    body: "OEM-equivalent brightness, colour accuracy, and touch response. Recommended for flagship models (iPhone Pro, Samsung S series) where display quality is the selling point of the repair.",
    note: "90-day warranty. CE and RoHS certified. Best margin for premium workshop positioning.",
  },
  {
    tag: "Grade A LCD",
    title: "Mid-range volume tier",
    body: "High-quality LCD panels for mid-range iPhone and Android models. Accurate colour and reliable touch — suitable for the majority of Bangladesh repair-market volume.",
    note: "90-day warranty. Ideal for distributors supplying general repair workshops.",
  },
  {
    tag: "Grade B (Refurb)",
    title: "Budget repair tier",
    body: "Refurbished original panels that pass functional QC. Minor cosmetic variance possible. Suited for cost-sensitive repair markets where buyers prioritise lowest-landed-cost.",
    note: "30-day functional warranty. No cosmetic guarantee. Clearly labelled on packing.",
  },
];

const COMPATIBILITY: [string, React.ReactNode][] = [
  ["iPhone 11 series", "iPhone 11 · Grade A LCD"],
  ["iPhone 12 series", "iPhone 12, 12 Pro, 12 Pro Max · Grade A OLED / LCD"],
  ["iPhone 13 series", "iPhone 13, 13 Pro, 13 Pro Max · Grade A OLED / LCD"],
  ["iPhone 14 series", "iPhone 14, 14 Pro, 14 Pro Max · Grade A OLED / LCD"],
  ["iPhone 15 series", "iPhone 15, 15 Pro, 15 Pro Max · Grade A OLED"],
  ["Samsung Galaxy A", "A14, A34, A54 · AMOLED and IPS LCD"],
  ["Samsung Galaxy S", "S22, S23, S24 series · AMOLED Grade A"],
  ["OPPO A series", "A57, A77, A78 · IPS LCD Grade A / B"],
  ["Xiaomi / Redmi", "Redmi Note 12, 13; Note 11 Pro · IPS LCD Grade A / B"],
  ["Realme", "Realme C55, 11 Pro series · IPS LCD Grade A / B"],
];

const MOQ_ROWS: [string, React.ReactNode][] = [
  ["iPhone displays (any model)", "20 units minimum per model; mixed-model orders accepted at 100 units total"],
  ["Android displays (any model)", "20 units minimum per model; mixed-model orders accepted at 100 units total"],
  ["Programme order (mixed brands)", "200 units total — full compatibility matrix available on enquiry"],
  ["Sea freight lead time", "15–25 days Shenzhen → Chattogram"],
  ["Air freight lead time", "3–5 days for urgent or sample orders"],
  ["Customs clearance", "2–5 working days, handled in-house by KHI"],
];

const STEPS: ProcessStep[] = [
  { title: "Source", body: "Factory audit and model-specific order placed with Shenzhen OEM partner." },
  { title: "QC inspect", body: "Touch response, brightness, dead-pixel, and flex-connector checks on every batch before packing." },
  { title: "Pack", body: "Anti-static foam inserts, individual cartons, pallet consolidation for container efficiency." },
  { title: "Ship & clear", body: "Sea or air freight to Chattogram; KHI in-house team handles NBR customs, HS 8524.91.00 declaration, and CE/RoHS documentation." },
];

const CORE_DOCS = [
  "Commercial invoice",
  "Packing list",
  "Bill of lading or airway bill",
  "CE and RoHS compliance certificates",
  "Certificate of origin (China)",
];

const COMPLIANCE_NOTES = [
  "HS Code 8524.91.00 — flat panel displays for mobile handsets, BCT Chapter 85",
  "Imports subject to NBR customs duty, VAT, and supplementary duty as applicable",
  "CE and RoHS compliance documentation included with every shipment",
  "BSTI import registration may apply for bulk commercial lots — we advise on a shipment-specific basis",
];

const FAQS = [
  {
    q: "What iPhone models do you stock displays for?",
    a: "We cover iPhone 11 through iPhone 15 Pro Max across Grade A OLED, Grade A LCD, and Grade B refurb tiers. Availability per model is confirmed at time of order — contact our desk with your model list and quantities.",
  },
  {
    q: "What Android brands and models are available?",
    a: "Samsung Galaxy A series (A14, A34, A54), Samsung S series (S22, S23), OPPO A series (A57, A77, A78), Xiaomi Redmi Note 11, 12, 13, and Realme C and Pro series. Full compatibility matrix is shared at enquiry stage.",
  },
  {
    q: "What is the difference between Grade A and Grade B?",
    a: "Grade A panels (OLED and LCD) are OEM-equivalent in brightness, colour accuracy, and touch response, with a 90-day warranty. Grade B are refurbished original panels that pass functional QC but may carry minor cosmetic variance — they carry a 30-day functional warranty and no cosmetic guarantee. Grade B is clearly labelled on all packing.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "20 units per model for individual model orders. Mixed-model programme orders are accepted at 100 units total (any brand/model mix). Programme orders of 200 units or more unlock the full compatibility matrix and volume pricing.",
  },
  {
    q: "How long does delivery take?",
    a: "Sea freight from Shenzhen to Chattogram takes 15–25 days. Air freight for urgent or sample orders takes 3–5 days. Customs clearance in Chattogram is handled in-house and typically takes 2–5 working days after arrival.",
  },
  {
    q: "What customs HS code applies and what duties should I expect?",
    a: "Mobile phone displays are classified under HS Code 8524.91.00 (BCT Chapter 85). Total Tax Incidence includes customs duty, VAT, supplementary duty, and AIT as applicable under the Bangladesh Customs Tariff. We provide itemised TTI calculations before you commit to an order.",
  },
  {
    q: "Do you offer private labelling or custom packaging?",
    a: "We can discuss custom carton branding for programme orders of 500 units or more. Contact our desk to explore options — lead time for custom packaging is 2–3 weeks additional to standard production time.",
  },
];

const inlineLink =
  "font-semibold underline decoration-[#1d4ed8] decoration-2 underline-offset-4 hover:text-[#1e40af] outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] rounded-sm";

export default function PhonePartsProgrammePage() {
  return (
    <V3Shell>
      <JsonLd />

      {/* ───────────── HERO ───────────── */}
      <section aria-labelledby="phone-parts-title" className={`${s.gridBg} relative overflow-hidden bg-[#06131d] pt-[104px] lg:pt-[124px]`}>
        <div className={`${pad} grid items-center gap-12 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-20`}>
          <div>
            <Crumbs items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Phone Parts Programme" }]} />
            <div className="mt-8">
              <Eyebrow>Direct from Shenzhen OEM</Eyebrow>
            </div>
            <h1 id="phone-parts-title" className={`${s.display} mt-5 text-[clamp(2.8rem,5.4vw,5rem)]`}>
              OEM-grade mobile displays for <span className="text-[#1d4ed8]">Bangladesh importers</span>
            </h1>
            <p className="geo-anchor mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg" data-speakable>
              K.H. Infinity sources iPhone and Android replacement displays directly from Shenzhen OEM factories — Grade A OLED, Grade A LCD, and Grade B refurb tiers — and handles NBR customs clearance under HS 8524.91.00 in-house for electronics distributors and repair wholesalers across Bangladesh.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href="/quote">Request a quote</PillButton>
              <GhostButton href="#compatibility">View compatibility matrix</GhostButton>
            </div>
            <p className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <ArrowLink href="/products/iphone-displays">iPhone displays product page</ArrowLink>
              <ArrowLink href="/products/android-displays">Android displays product page</ArrowLink>
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#0b2c3d] aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ogImage}
              alt="Row of smartphone replacement display screens arranged on a dark surface"
              className="h-full w-full object-cover"
            />
            <div className={`${s.glass} absolute bottom-6 left-6 right-6 rounded-2xl p-5`}>
              <p className="text-xs uppercase tracking-[0.14em] text-white/60">Import lane</p>
              <div className="mt-3 flex items-center gap-3">
                <span className={`${s.display} text-3xl`}>CN</span>
                <span className="h-px flex-1 bg-[#1d4ed8]" />
                <span className={`${s.display} text-3xl text-[#1d4ed8]`}>BD</span>
              </div>
              <p className="mt-2 text-sm text-white/70">Shenzhen → Chattogram</p>
            </div>
          </div>
        </div>
        <StatStrip
          stats={[
            { value: "10+", label: "iPhone models covered" },
            { value: "4", label: "Android brands" },
            { value: "3", label: "Grade tiers" },
            { value: "15–25", label: "Days sea freight" },
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
                  Why electronics importers work with{" "}
                  <span className="text-[#1d4ed8]">K.H. Infinity</span>
                </>
              }
            />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#06131d]/70">
              We combine direct OEM factory relationships in Shenzhen with our in-house NBR customs clearance team in
              Dhaka. That means transparent TTI calculations before you commit, faster clearance at Chattogram, and a
              single desk for both supply and compliance questions.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#06131d]/70">
              Our grade system — A OLED, A LCD, and B refurb — is clearly documented on every carton and invoice, so
              your downstream repair shops and retailers know exactly what tier they are buying.
            </p>
            <div className="mt-8">
              <PillButton href="/quote" tone="ink">
                Share your model list and volume
              </PillButton>
            </div>
          </div>
          <div className="grid gap-4">
            <ListCard icon="shield" title="CE & RoHS certified">
              Every batch carries CE and RoHS documentation. CE certification covers electrical safety; RoHS confirms restricted-substance compliance — both required for commercial import into Bangladesh.
            </ListCard>
            <ListCard icon="award" title="In-house customs clearance">
              Our NBR-registered team handles HS 8524.91.00 declarations, duty calculations, and release from Chattogram port without a third-party agent — reducing clearance time and costs for our buyers.
            </ListCard>
          </div>
        </div>
      </section>

      {/* ───────────── GRADE TIERS ───────────── */}
      <Section
        id="grades"
        tone="mist"
        eyebrow="Quality tiers"
        headSize="md"
        title={
          <>
            Three grade tiers for every
            <br />
            <span className="text-[#1d4ed8]">repair market segment</span>
          </>
        }
        intro="Match the grade to your buyer's segment — premium workshop, general repair, or budget market — so margins stay healthy at every level."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {GRADE_TIERS.map((g) => (
            <article key={g.tag} className="flex flex-col rounded-3xl bg-white p-6 ring-1 ring-[#06131d]/[0.06] sm:p-8">
              <p className={`${labelCls} text-[#1d4ed8]`}>{g.tag}</p>
              <h3 className={`${s.display} mt-3 text-[1.9rem] text-[#0b2c3d]`}>{g.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#06131d]/70">{g.body}</p>
              <p className="mt-auto pt-6">
                <span className="flex gap-3 border-t border-[#06131d]/10 pt-4 text-sm leading-relaxed text-[#06131d]/60">
                  <span className={`${labelCls} shrink-0 pt-0.5 text-[#0b2c3d]`}>Note</span>
                  <span>{g.note}</span>
                </span>
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* ───────────── COMPATIBILITY ───────────── */}
      <section id="compatibility" aria-labelledby="compat-heading" className="bg-white py-20 text-[#06131d] lg:py-28">
        <div className={pad}>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHead
              dark
              size="md"
              eyebrow="Compatibility"
              id="compat-heading"
              title={
                <>
                  Model compatibility
                  <br />
                  <span className="text-[#1d4ed8]">at a glance</span>
                </>
              }
            />
            <p className="max-w-md text-[#06131d]/70 lg:pb-2">
              Full per-SKU compatibility spreadsheet is shared at enquiry stage. The table below shows our primary model
              coverage.
            </p>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <RowTable title="iPhone & Android coverage" rows={Object.fromEntries(COMPATIBILITY)} className="bg-[#f2f4f6]" />
            <RowTable title="MOQ & lead times" rows={Object.fromEntries(MOQ_ROWS)} className="bg-[#f2f4f6]" />
          </div>
          <p className="mt-6 text-sm text-[#06131d]/55">
            MOQs are per programme order. Individual model availability and grade mix confirmed at time of enquiry.{" "}
            <Link href="/quote" className={`${inlineLink} text-[#0b2c3d]`}>
              Send your model list
            </Link>{" "}
            and we will confirm stock and pricing within 24 hours.
          </p>
        </div>
      </section>

      {/* ───────────── PROCESS ───────────── */}
      <section id="process" aria-labelledby="process-heading" className={`${s.gridBg} bg-[#06131d] py-20 lg:py-28`}>
        <div className={pad}>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHead
              eyebrow="How it works"
              id="process-heading"
              title={
                <>
                  From Shenzhen factory
                  <br />
                  to <span className="text-[#1d4ed8]">your warehouse</span>
                </>
              }
            />
            <p className="max-w-md text-white/70 lg:pb-3">
              A consistent 4-step path from OEM factory to cleared cargo — every batch.
            </p>
          </div>

          <ProcessTrack steps={STEPS} />

          <div className="mt-20">
            <ol className="divide-y divide-white/10 border-y border-white/10">
              {[
                {
                  t: "Factory order & audit",
                  d: "Model list confirmed with Shenzhen OEM partner. Factory audit records and production schedule shared before payment.",
                },
                {
                  t: "QC inspection",
                  d: "Touch response, brightness uniformity, dead-pixel scan, and flex-connector integrity check on every unit before packing. Rejection rate and lot QC report available on request.",
                },
                {
                  t: "Packing & consolidation",
                  d: "Individual anti-static foam cartons; mixed-model pallets built for container efficiency. Grade clearly labelled on every carton and master pack.",
                },
                {
                  t: "Customs clearance (HS 8524.91.00)",
                  d: "KHI in-house NBR team files the import declaration, manages duty payment, and coordinates release from Chattogram port. CE and RoHS documents and packing list filed simultaneously.",
                },
              ].map((step, i) => (
                <li key={step.t} className="grid grid-cols-[3rem_1fr] gap-4 py-6">
                  <span className="font-mono text-sm text-[#1d4ed8]">{String(i + 1).padStart(2, "0")}</span>
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

      {/* ───────────── COMPLIANCE ───────────── */}
      <Section
        id="compliance"
        tone="sea"
        grid
        eyebrow="Import compliance"
        title={
          <>
            Customs, duties, and
            <br />
            <span className="text-[#1d4ed8]">documentation</span>
          </>
        }
        intro="Every shipment travels with a complete document set. Duty and TTI figures are shared upfront — no surprises at the port."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 sm:p-8">
            <h3 className="flex items-center gap-3 text-lg font-semibold">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1d4ed8]/20 text-[#60a5fa]">
                <Icon name="doc" className="h-5 w-5" />
              </span>
              Standard document set
            </h3>
            <ChipList items={CORE_DOCS} icon="receipt" className="mt-6" />
          </div>
          <div className="rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 sm:p-8">
            <h3 className="flex items-center gap-3 text-lg font-semibold">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1d4ed8]/20 text-[#60a5fa]">
                <Icon name="shield" className="h-5 w-5" />
              </span>
              Compliance notes
            </h3>
            <CheckList items={COMPLIANCE_NOTES} dark={false} className="mt-6" />
            <p className="mt-6 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/55">
              TTI is calculated per shipment based on declared value and applicable rates. We do not provide legal advice
              on import regulations — buyers should confirm final duty liability with their licensed customs agent.
            </p>
          </div>
        </div>
      </Section>

      {/* ───────────── BUYER ASSURANCE ───────────── */}
      <Section
        id="assurance"
        tone="white"
        eyebrow="Buyer assurance"
        headSize="md"
        title={
          <>
            Safety, reliability,
            <br />
            and <span className="text-[#1d4ed8]">buyer support</span>
          </>
        }
      >
        <div className="grid gap-4 md:grid-cols-3">
          <ListCard icon="award" title="Grade certification" className="bg-[#f2f4f6]">
            Every carton is grade-labelled (A OLED / A LCD / B) and backed by a lot QC report. No mixed grades in a
            single carton without explicit agreement.
          </ListCard>
          <ListCard icon="shield" title="Warranty terms" className="bg-[#f2f4f6]">
            Grade A: 90 days from delivery for manufacturing defects. Grade B: 30 days functional warranty; cosmetic
            variance is not covered. Claims handled directly through our trade desk.
          </ListCard>
          <ListCard icon="users" title="Dedicated trade desk" className="bg-[#f2f4f6]">
            English-language coordination for model list, samples, QC reports, shipment tracking, and customs
            milestones — single point of contact from order to cleared cargo.
          </ListCard>
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
                  Buyer
                  <br />
                  <span className="text-[#1d4ed8]">FAQs</span>
                </>
              }
            />
            <p className="mt-6 max-w-sm text-white/70">
              Common questions from Bangladesh electronics importers and repair wholesalers.
            </p>
            <div className="mt-8">
              <GhostButton href="/contact">Ask the import desk</GhostButton>
            </div>
          </div>
          <FaqList dark={false} items={FAQS} />
        </div>
      </section>

      <CtaBand
        title={
          <>
            Ready to source your next <span className="text-[#1d4ed8]">display shipment?</span>
          </>
        }
        body="Send your model list, grade preference, and target quantity — we will come back with availability and a landed-cost quote within 24 hours."
        image="/images/v3/ship-open-sea.webp"
        imageAlt="Loaded container ship sailing through open sea"
        cta={{ label: "Request phone parts quote", href: "/quote" }}
      />
    </V3Shell>
  );
}
