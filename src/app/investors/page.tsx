import { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema-helpers";
import V3Shell from "@/components/v3/V3Shell";
import PageHero from "@/components/v3/PageHero";
import CtaBand from "@/components/v3/CtaBand";
import { Section, NumberedGrid, RowTable, ListCard, FigureCards } from "@/components/v3/blocks";
import { PillButton, GhostButton, pad } from "@/components/v3/ui";
import s from "@/components/v3/v3.module.css";

export const metadata: Metadata = {
  title: "Investor & B2B Partnership Program - K.H. Infinity | Bulk Import Trading Bangladesh",
  description:
    "Partner with K.H. Infinity, Bangladesh's direct B2B bulk product importer. Secure wholesale trading partnerships from 1 Lakh BDT with a projected 14%–16% variable profit share, disbursed half-yearly.",
  keywords:
    "K.H. Infinity investor relations, B2B partnership Bangladesh, bulk import investment, wholesale trading partnership, profit share investment Bangladesh, sunflower oil import investment",
  alternates: { canonical: "https://khi.com.bd/investors" },
  openGraph: {
    title: "Partner with Bangladesh's Leading B2B Bulk Product Importer",
    description:
      "Secure, transparent wholesale trading partnerships starting from 1 Lakh BDT, featuring a projected 14%–16% variable profit share disbursed half-yearly.",
    images: ["/images/hubs/imports-hero.webp"],
    url: "https://khi.com.bd/investors",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner with Bangladesh's Leading B2B Bulk Product Importer",
    description:
      "Secure, transparent wholesale trading partnerships starting from 1 Lakh BDT, featuring a projected 14%–16% variable profit share disbursed half-yearly.",
    images: ["/images/hubs/imports-hero.webp"],
  },
};

const partnershipTerms: [string, string][] = [
  ["Minimum Investment", "1,000,000 BDT (1 Lakh BDT)"],
  ["Projected Return", "14% – 16% variable profit share per annum"],
  ["Disbursement Schedule", "Half-yearly — every 6 months"],
  ["Withdrawal Notice", "Minimum 90-day (3-month) written notice"],
  ["Disbursement Basis", "Net sourcing margins from active import cycles"],
];

const governancePillars = [
  {
    title: "Anticipate",
    body: "We deeply analyse global commodity trends and domestic buying habits to purchase only high-demand, non-cyclical food products that local processors actively seek.",
  },
  {
    title: "Communicate",
    body: "Clear, direct updates on bulk sourcing timelines, port clearance status, and audited half-yearly progress — no surprises.",
  },
  {
    title: "Measure",
    body: "We rigorously track cash flow margins, import turnaround speed, and transaction volumes to verify every supply cycle maximises asset turnover.",
  },
  {
    title: "Understand",
    body: "We treat investors as true strategic partners, leveraging our shared network to continuously expand trade routes and distribution channels.",
  },
];

const growthSectors = [
  {
    icon: "sprout" as const,
    title: "Bulk Dairy Processing",
    items: [
      "Bangladesh's $3B dairy market as addressable demand",
      "Skimmed Milk Powder (SMP) and whey protein direct from mills",
      "Supplies local value-added food manufacturers",
    ],
  },
  {
    icon: "basket" as const,
    title: "Premium Cooking Oils",
    items: [
      "High-grade sunflower seed oil imports",
      "Meets rising domestic demand for healthy edible oils",
      "Established buyer relationships across FMCG distributors",
    ],
  },
  {
    icon: "leaf" as const,
    title: "High-Margin Commodities",
    items: [
      "USDA-identified consumer growth categories",
      "Premium U.S. tree nuts — almonds and walnuts",
      "High-texture Medjool dates for premium retail shelf space",
    ],
  },
];

export default function InvestorsPage() {
  const crumbs = breadcrumbSchema([
    { name: "Home", url: "https://khi.com.bd/" },
    { name: "Investors", url: "https://khi.com.bd/investors" },
  ]);

  return (
    <V3Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />

      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Investors" }]}
        eyebrow="Investor & B2B Partnership"
        image="/images/hubs/imports-hero.webp"
        imageAlt="Bulk cargo shipment representing K.H. Infinity's B2B import trading operations"
        title={
          <>
            Partner with Bangladesh&rsquo;s
            <br />
            <span className="text-[#fa6a25]">leading bulk importer</span>
          </>
        }
        lead="Secure, transparent wholesale trading partnerships from 1 Lakh BDT — backed by active import cycles and audited half-yearly returns."
        actions={
          <>
            <PillButton href="/investors/onboarding#apply-form">Apply for Partnership</PillButton>
            <GhostButton href="/investors/portal">Access Investor Portal</GhostButton>
          </>
        }
        stats={[
          { value: "1L+", label: "Minimum entry (BDT)" },
          { value: "14–16%", label: "Projected annual return" },
          { value: "2×", label: "Disbursements per year" },
          { value: "90 days", label: "Withdrawal notice" },
        ]}
      />

      {/* How it works */}
      <Section
        id="how-it-works"
        tone="paper"
        eyebrow="How it works"
        title={
          <>
            Capital deployed into
            <br />
            <span className="text-[#fa6a25]">active import cycles</span>
          </>
        }
        intro="K.H. Infinity is a direct wholesale product importer — not a shipping or freight agency. Your capital enters working trade, not a fund."
        headSize="md"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-[#06131d]/[0.06] sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#06131d]/50">The model</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#06131d]/70">
              We use our internal supply chain and customs expertise to purchase high-demand commodities — sunflower seed oil,
              skimmed milk powder, premium potatoes — globally, importing them in bulk to supply local manufacturers and
              retail supermarkets. By partnering with KHI, investors deploy capital directly into active bulk sourcing
              cycles, generating stable asset-backed returns disbursed twice a year.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 ring-1 ring-[#06131d]/[0.06] sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#06131d]/50">Why it works</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#06131d]/70">
              This model bypasses traditional intermediary friction. Returns are tied to actual net transaction margins
              from real cargo — not notional valuations. Our in-house customs clearance team reduces clearance time and
              cost, directly protecting margin on every shipment. Partners receive half-yearly profit-share payments
              within 30 days of audit completion.
            </p>
          </div>
        </div>
      </Section>

      {/* Stats strip */}
      <section className="bg-[#0b2c3d] py-20 lg:py-28">
        <div className={pad}>
          <FigureCards
            items={[
              { value: "1L BDT", label: "Entry point", note: "Accessible to individual partners" },
              { value: "14–16%", label: "Target p.a.", note: "Variable, based on net margins" },
              { value: "H1 + H2", label: "Disbursement", note: "Within 30 days of audit" },
              { value: "90-day", label: "Exit notice", note: "Protects active cargo cycles" },
            ]}
          />
        </div>
      </section>

      {/* Partnership terms */}
      <Section
        id="terms"
        tone="white"
        eyebrow="Partnership terms"
        title="Core specifications"
        headSize="md"
        intro="All terms are defined in the partnership agreement signed at onboarding. Projected returns are variable and not guaranteed."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <RowTable
            title="Term sheet"
            rows={partnershipTerms}
          />
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl bg-[#f2f4f6] p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#06131d]/50">Disclaimer</p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#06131d]/70">
                Projected returns are variable and based on actual net trading margins from bulk import cycles.
                They are not fixed or guaranteed. Historical performance does not assure future results.
              </p>
            </div>
            <div className="rounded-3xl bg-[#06131d] p-6 sm:p-8 text-white">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">Ready to start?</p>
              <p className={`${s.display} mt-4 text-3xl`}>Onboard in under 10 minutes.</p>
              <p className="mt-3 text-sm text-white/60">Submit your inquiry, complete KYC, and access the secure portal.</p>
              <div className="mt-6">
                <Link
                  href="/investors/onboarding"
                  className="inline-flex items-center rounded-full bg-[#fa6a25] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d9531a]"
                >
                  Start Onboarding &amp; KYC →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Governance */}
      <Section
        id="governance"
        tone="mist"
        eyebrow="Investor relations"
        title={
          <>
            Four pillars of
            <br />
            our governance
          </>
        }
        headSize="md"
        intro="We manage our partnerships based on the industry's four pillars of professional investor relations management."
      >
        <NumberedGrid dark cols={4} items={governancePillars} />
      </Section>

      {/* Growth sectors */}
      <Section
        id="sectors"
        tone="ink"
        grid
        eyebrow="Where your capital goes"
        title={
          <>
            High-growth sectors
            <br />
            <span className="text-[#fa6a25]">your capital accesses</span>
          </>
        }
        intro="Your investment directly funds the import and local distribution of Bangladesh's highest-velocity bulk products."
        headSize="md"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {growthSectors.map((s) => (
            <ListCard key={s.title} icon={s.icon} title={s.title} items={s.items} />
          ))}
        </div>
      </Section>

      <CtaBand
        title={
          <>
            Ready to become a
            <br />
            KHI <span className="text-[#fa6a25]">strategic partner?</span>
          </>
        }
        body="Complete our compliance-ready onboarding to submit your partnership inquiry, or log in to the secure investor portal if you're already a verified partner."
        image="/images/hubs/imports-hero.webp"
        imageAlt="Bulk cargo vessel representing K.H. Infinity import operations"
        cta={{ label: "Start Onboarding", href: "/investors/onboarding" }}
      />
    </V3Shell>
  );
}
