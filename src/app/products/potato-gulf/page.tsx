import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PotatoExportFAQ from "@/components/potato-export/PotatoExportFAQ";
import { potatoExportFaq } from "@/lib/potato-export-faq";

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

export default function PotatoExportPage() {
  return (
    <div>
      <JsonLd />

      <section
        className="bg-gray-900 text-white py-28 md:py-40"
        style={{
          backgroundImage: "url(/images/potato-export/hero.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="bg-black/60 p-6 md:p-8 rounded-lg max-w-3xl">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">
              Gulf &amp; GCC buyers
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Potato export from Bangladesh built for Gulf markets
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              Export-grade sorting, mesh and jute packing, tarpaulin-ready
              protection in transit, and documentation support from K.H.
              Infinity—aligned with our published potato specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-block text-center bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Request potato export quote
              </Link>
              <Link
                href="/contact"
                className="inline-block text-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
              >
                Contact export desk
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-300">
              <Link
                href="/products/potato"
                className="text-orange-400 hover:text-orange-300 underline-offset-2 hover:underline"
              >
                View full product specifications
              </Link>
              {" · "}
              <Link
                href="/services/trade-routes/export-to-middle-east"
                className="text-orange-400 hover:text-orange-300 underline-offset-2 hover:underline"
              >
                Middle East export routes
              </Link>
            </p>
          </div>
        </div>
      </section>

      <nav
        className="bg-white border-b border-gray-200 py-3 text-sm text-gray-600"
        aria-label="Breadcrumb"
      >
        <div className="container mx-auto px-4">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>
          <span className="mx-2" aria-hidden>
            /
          </span>
          <span className="text-gray-900 font-medium">Potato export</span>
        </div>
      </nav>

      <section id="intro" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Why Gulf buyers work with K.H. Infinity
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                We combine farm-sourced Bangladesh potatoes with disciplined
                grading, export-oriented packing, and clear communication on
                documents and shipment timing—so procurement teams in the Gulf
                can plan retail and wholesale programmes with confidence.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Specifications for variety, size band, and Grade A quality match
                our{" "}
                <Link
                  href="/products/potato"
                  className="text-orange-600 font-semibold hover:text-orange-700"
                >
                  Premium Potatoes
                </Link>{" "}
                product profile (50–80&nbsp;mm, Russet / Red / Yellow).
              </p>
              <Link
                href="/quote"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Share your volume &amp; destination
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/potato-export/logistics.webp"
                alt="Premium export potatoes from Bangladesh"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="grades" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Grades, sizes, and Gulf use cases
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Align these profiles with your category plan—hypermarkets,
            wholesale, and foodservice each stress size consistency and skin
            integrity differently.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-4xl mb-3">
                <i className="fas fa-store" aria-hidden />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Retail &amp; hypermarkets
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Consistent 50–80&nbsp;mm band, clean skin, Grade A presentation
                for shelf-ready programmes.
              </p>
              <p className="text-gray-500 text-sm">
                Packs: 25&nbsp;kg mesh for backroom; discuss smaller retail
                SKUs on enquiry.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-4xl mb-3">
                <i className="fas fa-warehouse" aria-hidden />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Wholesale &amp; redistribution
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                50&nbsp;kg jute for volume lanes; ventilated stowage compatible
                with dry or reefer guidance from your line.
              </p>
              <p className="text-gray-500 text-sm">
                Ideal for importers supplying municipal markets and secondary
                distributors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-4xl mb-3">
                <i className="fas fa-utensils" aria-hidden />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Foodservice &amp; processing prep
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Russet, Red, and Yellow lines per our spec sheet—match variety
                to your menu or peeling line.
              </p>
              <p className="text-gray-500 text-sm">
                Share fry colour, solids, or defect tolerances for tailored
                grading notes.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/potato-export/gulf-retail.webp"
                alt="Yellow potatoes suitable for retail and Gulf programmes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-md">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-100 text-gray-800">
                  <tr>
                    <th className="p-4 font-semibold">Attribute</th>
                    <th className="p-4 font-semibold">Published spec</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-gray-800">Variety</td>
                    <td className="p-4">Russet, Red, Yellow</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-gray-800">Size</td>
                    <td className="p-4">50–80&nbsp;mm diameter</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-gray-800">Quality</td>
                    <td className="p-4">Grade A</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-medium text-gray-800">Storage</td>
                    <td className="p-4">Temperature controlled (programme)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Sorting, packing, and quality checks
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            A repeatable path from intake to container-ready cargo—visualised
            below and detailed step by step.
          </p>
          <div className="mb-12 max-w-4xl mx-auto bg-orange-50 rounded-xl p-6 border border-orange-100">
            <Image
              src="/images/potato-export/supply-chain.svg"
              alt="Diagram: farm to packhouse to port to Gulf markets"
              width={800}
              height={120}
              className="w-full h-auto"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
            <div className="grid gap-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/potato-export/grading.webp"
                  alt="Potato grading and sorting for export"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/potato-export/quality-checks.webp"
                  alt="Quality inspection of export potatoes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <ul className="space-y-4 text-gray-600 text-lg">
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">1.</span>
                  <span>
                    <strong className="text-gray-800">Intake &amp; lot ID</strong>{" "}
                    — traceable batches tied to farm clusters and harvest window.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">2.</span>
                  <span>
                    <strong className="text-gray-800">Sorting &amp; grading</strong>{" "}
                    — mechanical and visual steps to hit agreed size bands and
                    defect caps.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">3.</span>
                  <span>
                    <strong className="text-gray-800">Packing</strong> — 25&nbsp;kg
                    mesh or 50&nbsp;kg jute per programme; optional tarpaulin
                    coverage for in-transit protection (
                    <Link
                      href="/products/tarpaulin"
                      className="text-orange-600 hover:text-orange-700 font-semibold"
                    >
                      tarpaulin product
                    </Link>
                    ).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">4.</span>
                  <span>
                    <strong className="text-gray-800">Pre-shipment QC</strong> —
                    final inspection checkpoints aligned with buyer specs and
                    destination requirements.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                n: "1",
                t: "Intake",
                d: "Lot registration and baseline moisture and defect screening.",
              },
              {
                n: "2",
                t: "Grade & size",
                d: "Target Gulf retail or wholesale bands with documented tolerances.",
              },
              {
                n: "3",
                t: "Pack & protect",
                d: "Mesh, jute, and tarpaulin options matched to lane and buyer SOP.",
              },
              {
                n: "4",
                t: "Ship docs",
                d: "Invoice, packing list, BL/AWB, COO—plus destination-specific certs as required.",
              },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.n}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {step.t}
                </h3>
                <p className="text-gray-600 text-sm">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gulf" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Built for Gulf market realities
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Gulf programmes prioritise predictable sizing, skin finish, and
                arrival condition after long sea legs. We plan packing and
                protective materials with those outcomes in mind and communicate
                harvest windows so you can align promotions and shelf dates.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Fresh table potatoes are whole produce; where your registration
                or retailer checklist asks for food-safety or handling
                attestations, share it early—we map what we can support on a
                shipment-specific basis.
              </p>
              <Link
                href="/services/trade-routes/export-to-middle-east"
                className="inline-block text-orange-600 font-semibold hover:text-orange-700"
              >
                Explore our Middle East export route overview →
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/potato-export/export-packaging.webp"
                alt="Export packaging and tarpaulin protection for potatoes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="shipping" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
            Shipping and documentation
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Exact document sets depend on the importing country and product
            registration status. The list below is typical—your logistics partner
            should confirm the final packet for each consignment.
          </p>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                <i className="fas fa-file-alt text-orange-500" aria-hidden />
                Core commercial documents
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Commercial invoice</li>
                <li>Packing list</li>
                <li>Bill of lading or airway bill</li>
                <li>Certificate of origin (as applicable)</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                <i className="fas fa-leaf text-orange-500" aria-hidden />
                Destination-specific (when required)
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Phytosanitary certificate and import permits per country rules</li>
                <li>Additional certificates requested by your buyer or regulator</li>
                <li>Inspection company reports if mandated by contract</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                We coordinate with your nominated forwarder and authorities based
                on confirmed destination and HS treatment—we do not provide
                legal advice on foreign import law.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="usp" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Safety, reliability, and buyer support
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-certificate" aria-hidden />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Certifications profile
              </h3>
              <p className="text-gray-600 mb-3">
                Our published potato sourcing references BSTI, export quality
                standards, and organic availability when confirmed for the crop
                year.
              </p>
              <p className="text-sm text-gray-500">
                Request the current certificate pack for your tender.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-shield-alt" aria-hidden />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Cargo protection
              </h3>
              <p className="text-gray-600">
                Tarpaulin and handling SOPs aim to reduce moisture ingress and
                mechanical damage—especially relevant for warm-climate
                destinations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-headset" aria-hidden />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Buyer support
              </h3>
              <p className="text-gray-600">
                English-language coordination on specs, samples, inspection
                windows, and shipment milestones—single thread for operations and
                documentation questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Shipment-ready programme snapshots
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Illustrative programme profiles we routinely align with for Gulf and
            GCC buyers—exact packs and docs are fixed per contract and lane.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold uppercase text-orange-600 mb-2">
                Wholesale GCC
              </p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Mesh + jute mix
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                25&nbsp;kg mesh dominant lines with 50&nbsp;kg jute for volume
                redistribution; Grade A, 50–80&nbsp;mm.
              </p>
              <p className="text-gray-500 text-xs">
                QC: pre-load defect cap agreed with buyer; ventilated container
                stowage plan shared pre-booking.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold uppercase text-orange-600 mb-2">
                Modern trade
              </p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Presentation-first
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Tighter skin finish checks; consistent sizing within band for
                shelf display; optional added protection for long transits.
              </p>
              <p className="text-gray-500 text-xs">
                QC: enhanced visual sort; photo samples available on request
                ahead of first shipment.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold uppercase text-orange-600 mb-2">
                Foodservice
              </p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Variety-led
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Russet / Red / Yellow splits possible within programme MOQs;
                discuss fry and texture notes with our desk.
              </p>
              <p className="text-gray-500 text-xs">
                QC: variety segregation at pack line; lot labels for kitchen
                traceability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Gulf buyer FAQs
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Answers below mirror the structured data on this page for search
            engines and assistants.
          </p>
          <PotatoExportFAQ />
        </div>
      </section>

      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to programme your next potato shipment?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-50">
            Send destination, annual or spot volume, preferred grades, and
            packing—we will respond with availability and next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Request export quote
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
