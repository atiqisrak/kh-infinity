import type { Metadata } from "next";
import Link from "next/link";
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

export default function SmeImportSolutionsPage() {
  const speakable = speakableWebPageSchema({
    url: "https://khi.com.bd/services/sme-import-solutions",
    name: "SME Import Solutions",
    dateModified: "2026-08-07",
  });

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />

      <section className="pt-28 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            SME Import Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl geo-anchor" data-speakable>
            K.H. Infinity&apos;s consolidated door-to-door import programme turns complex
            international trade into simple local delivery for Bangladesh SMEs. We handle
            Letter of Credit documentation, NBR customs clearance, LCL freight consolidation,
            and last-mile logistics—so you can source from Alibaba, Amazon, and global B2B
            platforms without navigating forex and LC barriers alone.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Import programme tiers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div key={tier.name} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{tier.name}</h3>
                <p className="text-orange-600 font-semibold mb-4">{tier.range}</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-green-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to simplify your next import?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Share your product source, estimated order value, and LC status—we will recommend the right tier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 font-semibold"
            >
              Request SME import quote
            </Link>
            <Link
              href="/services/customs"
              className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 font-semibold"
            >
              Customs &amp; TTI support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
