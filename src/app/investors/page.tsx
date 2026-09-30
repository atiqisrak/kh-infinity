import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Investor & B2B Partnership Program - K.H. Infinity | Bulk Import Trading Bangladesh",
  description:
    "Partner with K.H. Infinity, Bangladesh's direct B2B bulk product importer. Secure wholesale trading partnerships from 1 Lakh BDT with a projected 14%–16% variable profit share, disbursed half-yearly.",
  keywords:
    "K.H. Infinity investor relations, B2B partnership Bangladesh, bulk import investment, wholesale trading partnership, profit share investment Bangladesh, sunflower oil import investment",
  alternates: {
    canonical: "https://khi.com.bd/investors",
  },
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

const partnershipTerms = [
  {
    feature: "Minimum Investment",
    detail: "1,000,000 BDT (1 Lakh BDT)",
    purpose:
      "Kept low to ensure accessible, inclusive entry for individual partners and micro-investors.",
  },
  {
    feature: "Projected Return",
    detail: "14% to 16% Variable Profit Share per annum",
    purpose:
      "Calculated directly based on net bulk product sales and trade margins from active import cycles.",
  },
  {
    feature: "Disbursement Schedule",
    detail: "Half-Yearly (Every 6 Months)",
    purpose:
      "Paid out directly to your registered bank account within 30 days of the mid-year and year-end audit reviews.",
  },
  {
    feature: "Withdrawal Notice",
    detail: "Minimum 90-Day (3-Month) Notice",
    purpose:
      "Required in writing to protect ongoing cargo shipments, customs clearance cash flows, and warehouse logistics.",
  },
  {
    feature: "Disbursement Basis",
    detail: "Net Sourcing Margins",
    purpose:
      "Profit distributions are tied to actual transaction margins, providing inflation-hedged, tangible asset returns.",
  },
];

const governancePillars = [
  {
    icon: "fa-binoculars",
    title: "Anticipate",
    description:
      "We deeply analyze global commodity trends and domestic buying habits to purchase only high-demand, non-cyclical food products that local food processors actively seek.",
  },
  {
    icon: "fa-comments",
    title: "Communicate",
    description:
      "We provide clear, direct communication regarding our bulk sourcing timelines, port clearance statuses, and audited half-yearly progress.",
  },
  {
    icon: "fa-chart-line",
    title: "Measure",
    description:
      "We rigorously track essential operational metrics—including cash flow margins, import turnaround speed, and transaction volumes—verifying that every supply cycle maximizes asset turnover.",
  },
  {
    icon: "fa-handshake",
    title: "Understand",
    description:
      "We treat our investors as true strategic partners, leveraging our shared network to continuously expand our trade routes and distribution channels.",
  },
];

const growthSectors = [
  {
    title: "The Bulk Dairy Processing Niche",
    description:
      "Fueling Bangladesh's $3 billion dairy market by sourcing premium Skimmed Milk Powder (SMP) and whey protein directly for local value-added food manufacturers.",
    icon: "fa-cheese",
  },
  {
    title: "Premium Cooking Oils",
    description:
      "Importing high-grade sunflower seed oil to meet the growing domestic demand for safe, healthy, and premium edible oils.",
    icon: "fa-bottle-droplet",
  },
  {
    title: "USDA-Identified Consumer Growth Commodities",
    description:
      "Financing our strategic portfolio expansion into high-margin bulk products like premium U.S. tree nuts (almonds and walnuts) and high-texture Medjool dates to capture premium retail shelf space.",
    icon: "fa-seedling",
  },
];

export default function InvestorsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-32 md:py-40 overflow-hidden">
        <Image
          src="/images/hubs/imports-hero.webp"
          alt="Bulk cargo shipment representing K.H. Infinity's B2B import trading operations"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="container relative z-10 mx-auto px-4">
          <p className="font-semibold uppercase text-sm mb-3 tracking-wide text-orange-400">
            Investor & B2B Partnership Program
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
            Partner with Bangladesh&rsquo;s Leading B2B Bulk Product Importer
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-100 mb-8">
            Capitalize on the booming demand for premium agricultural
            commodities. Secure, transparent wholesale trading partnerships
            starting from <strong>1 Lakh BDT</strong>, featuring a projected{" "}
            <strong>14% to 16% variable profit share</strong> disbursed
            half-yearly.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/investors/onboarding#apply-form"
              className="inline-flex items-center bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
            >
              Apply for Partnership
            </Link>
            <Link
              href="/investors/portal"
              className="inline-flex items-center bg-white/10 border border-white/40 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors font-semibold backdrop-blur-sm"
            >
              Access Secure Investor Portal
            </Link>
          </div>
        </div>
      </section>

      {/* GEO/AEO Question Heading */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            How does the K.H. Infinity (KHI) B2B Partnership Program work?
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>
              K.H. Infinity (KHI) is a direct wholesale product importer and
              bulk B2B supplier
            </strong>
            —we are not a shipping, logistics, or freight forwarding agency.
            We utilize our robust internal supply chain and customs expertise
            to purchase high-demand commodities (like sunflower seed oil,
            skimmed milk powder, and premium potatoes) globally, importing
            them in bulk to supply local manufacturing industries and retail
            supermarkets.
          </p>
          <p className="text-gray-600">
            By partnering with KHI, investors deploy capital directly into
            active bulk sourcing cycles. This model bypasses traditional
            intermediary friction, generating stable, asset-backed returns
            that are disbursed twice a year.
          </p>
        </div>
      </section>

      {/* Terms Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Core Partnership Terms & Specifications
          </h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="px-6 py-4 font-semibold">Feature</th>
                  <th className="px-6 py-4 font-semibold">
                    Specification Details
                  </th>
                  <th className="px-6 py-4 font-semibold">
                    Business Purpose & Protection
                  </th>
                </tr>
              </thead>
              <tbody>
                {partnershipTerms.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={
                      index !== partnershipTerms.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }
                  >
                    <td className="px-6 py-5 font-semibold text-gray-800 align-top whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="px-6 py-5 text-gray-700 align-top font-medium">
                      {row.detail}
                    </td>
                    <td className="px-6 py-5 text-gray-600 align-top">
                      {row.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 max-w-3xl">
            Projected returns are variable and based on actual net trading
            margins from bulk import cycles; they are not fixed or
            guaranteed. Historical performance does not assure future
            results.
          </p>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
            Our Investor Relations Governance Principles
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We manage our partnerships based on the industry&rsquo;s four
            pillars of professional investor relations management.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {governancePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="border p-6 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <i
                  className={`fas ${pillar.icon} text-4xl text-orange-500 mb-4`}
                ></i>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Sectors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
            High-Growth Sectors Your Capital Accesses
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Your investment directly funds the import and local distribution
            of Bangladesh&rsquo;s highest-velocity bulk products.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {growthSectors.map((sector) => (
              <div
                key={sector.title}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <i
                  className={`fas ${sector.icon} text-3xl text-orange-500 mb-4`}
                ></i>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {sector.title}
                </h3>
                <p className="text-gray-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-orange-600 rounded-2xl p-10 md:p-14 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Become a KHI Strategic Partner?
            </h2>
            <p className="text-orange-50 max-w-2xl mx-auto mb-8">
              Complete our compliance-ready onboarding process to submit your
              partnership inquiry, or log in to the secure investor portal if
              you&rsquo;re already a verified partner.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/investors/onboarding"
                className="inline-flex items-center bg-white text-orange-700 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
              >
                Start Onboarding & KYC
              </Link>
              <Link
                href="/investors/portal"
                className="inline-flex items-center border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
              >
                Access Secure Investor Portal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
