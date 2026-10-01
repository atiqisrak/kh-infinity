import type { Metadata } from "next";
import CtaBand from "@/components/v3/CtaBand";
import Icon, { type IconName } from "@/components/v3/Icons";
import PageHero from "@/components/v3/PageHero";
import ProcessTrack from "@/components/v3/ProcessTrack";
import { CheckList, NumberedGrid, Section } from "@/components/v3/blocks";
import { GhostButton, PillButton } from "@/components/v3/ui";
import V3Shell from "@/components/v3/V3Shell";
import s from "@/components/v3/v3.module.css";
import { speakableWebPageSchema } from "@/lib/schema-helpers";

export const metadata: Metadata = {
  title: "SME Import Solutions | Consolidated Shipping & LC Support | K.H. Infinity",
  description:
    "Door-to-door consolidated import solutions for Bangladesh SMEs. KHI handles LCs, customs clearance, LCL freight, and last-mile delivery from global B2B platforms.",
  alternates: { canonical: "https://khi.com.bd/services/sme-import-solutions" },
  openGraph: {
    title: "SME Import Solutions | K.H. Infinity",
    url: "https://khi.com.bd/services/sme-import-solutions",
    siteName: "K.H. Infinity",
    type: "website",
    images: ["/images/services/sme-import-hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/services/sme-import-hero.webp"],
  },
};

const tiers = [
  {
    name: "Micro",
    range: "Under $25,000",
    features: ["LCL consolidated shipping", "Basic customs documentation", "Door-to-door Dhaka delivery"],
  },
  {
    name: "Mid-Market",
    range: "$25,000 – $100,000",
    features: ["LC facilitation support", "Full NBR clearance", "Supplier verification", "TTI transparency"],
  },
  {
    name: "Standard",
    range: "$100,000+",
    features: ["Irrevocable LC management", "FCL or LCL options", "Dedicated account manager", "Multi-SKU consolidation"],
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to import via KHI SME Import Program",
  description: "Five-step consolidated import process for Bangladesh SMEs",
  step: [
    { "@type": "HowToStep", name: "Submit enquiry", text: "Share product links, order value, and LC status via quote form." },
    { "@type": "HowToStep", name: "Sourcing confirmation", text: "KHI verifies supplier, MOQ, and consolidates with other SME orders." },
    { "@type": "HowToStep", name: "LC & payment", text: "KHI facilitates LC documentation or advance payment per tier." },
    { "@type": "HowToStep", name: "Customs clearance", text: "Full NBR clearance with TTI calculation and BSTI compliance." },
    { "@type": "HowToStep", name: "Local delivery", text: "Door-to-door delivery to your warehouse or retail location." },
  ],
};

const tierIcons: IconName[] = ["box", "warehouse", "ship"];

// What the programme takes off an SME's plate, in the page's own words
const handled = [
  { title: "LC documentation", body: "Letter of Credit documentation facilitated, or advance payment, per tier." },
  { title: "NBR clearance", body: "Full NBR customs clearance with TTI calculation and BSTI compliance." },
  { title: "LCL consolidation", body: "Your order verified with the supplier and consolidated with other SME orders." },
  { title: "Last-mile delivery", body: "Door-to-door delivery to your warehouse or retail location." },
];

// The process track reads the same five steps as the HowTo schema
const steps = howToSchema.step.map((st) => ({ title: st.name, body: st.text }));

export default function SmeImportSolutionsPage() {
  const speakable = speakableWebPageSchema({
    url: "https://khi.com.bd/services/sme-import-solutions",
    name: "SME Import Solutions",
    dateModified: "2026-08-07",
  });

  return (
    <V3Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />

      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "SME import solutions" },
        ]}
        image="/images/services/sme-import-hero.webp"
        imageAlt="Warehouse worker inspecting labelled parcel shelves for consolidated SME import delivery"
        eyebrow="Consolidated door-to-door imports"
        title={
          <>
            SME import
            <br />
            <span className="text-[#fa6a25]">solutions</span>
          </>
        }
        lead={
          <p className="geo-anchor" data-speakable>
            K.H. Infinity&apos;s consolidated door-to-door import programme turns complex international trade into
            simple local delivery for Bangladesh SMEs. We handle Letter of Credit documentation, NBR customs clearance,
            LCL freight consolidation, and last-mile logistics—so you can source from Alibaba, Amazon, and global B2B
            platforms without navigating forex and LC barriers alone.
          </p>
        }
        actions={
          <>
            <PillButton href="/quote">Request SME import quote</PillButton>
            <GhostButton href="/services/customs" glass>
              Customs &amp; TTI support
            </GhostButton>
          </>
        }
      />

      {/* ───────────── TIERS (who it's for) ───────────── */}
      <Section
        id="tiers"
        tone="paper"
        eyebrow="Who it's for"
        title={
          <>
            Import
            <br />
            programme <span className="text-[#fa6a25]">tiers</span>
          </>
        }
        intro={<p>Three tiers by order value, from first LCL orders to multi-SKU programmes. Tell us your order value and LC status and we will recommend the right one.</p>}
      >
        <ul className="grid gap-4 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <li
              key={tier.name}
              className={`flex flex-col rounded-3xl p-6 sm:p-8 ${
                i === tiers.length - 1 ? "bg-[#06131d] text-white" : "bg-white text-[#06131d] ring-1 ring-[#06131d]/[0.06]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-mono text-sm ${i === tiers.length - 1 ? "text-[#fa6a25]" : "text-[#d9531a]"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`grid h-10 w-10 place-items-center rounded-full ${
                    i === tiers.length - 1 ? "bg-[#fa6a25] text-white" : "bg-[#fa6a25]/10 text-[#d9531a]"
                  }`}
                >
                  <Icon name={tierIcons[i]} className="h-5 w-5" />
                </span>
              </div>
              <h3 className={`${s.display} mt-6 text-5xl ${i === tiers.length - 1 ? "" : "text-[#0b2c3d]"}`}>{tier.name}</h3>
              <p className={`mt-2 font-semibold ${i === tiers.length - 1 ? "text-[#fa6a25]" : "text-[#d9531a]"}`}>{tier.range}</p>
              <div className={`mt-6 border-t pt-6 ${i === tiers.length - 1 ? "border-white/10" : "border-[#06131d]/10"}`}>
                <CheckList items={tier.features} dark={i !== tiers.length - 1} />
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* ───────────── PROCESS ───────────── */}
      <Section
        id="process"
        tone="sea"
        grid
        eyebrow="How it works"
        title={
          <>
            Five steps to
            <br />
            your <span className="text-[#fa6a25]">door</span>
          </>
        }
        intro={<p>{howToSchema.description}.</p>}
      >
        <ProcessTrack steps={steps} />
      </Section>

      {/* ───────────── WHAT WE HANDLE ───────────── */}
      <Section
        id="handled"
        tone="white"
        eyebrow="What we handle"
        title={
          <>
            The hard parts,
            <br />
            handled
          </>
        }
      >
        <NumberedGrid items={handled} />
      </Section>

      <CtaBand
        title={
          <>
            Ready to simplify
            <br />
            your next <span className="text-[#fa6a25]">import?</span>
          </>
        }
        body="Share your product source, estimated order value, and LC status—we will recommend the right tier."
        image="/images/v3/road-and-sea.webp"
        imageAlt="Aerial view of a truck convoy on a forest road beside a loaded container ship"
        cta={{ label: "Request SME import quote", href: "/quote" }}
      />
    </V3Shell>
  );
}
