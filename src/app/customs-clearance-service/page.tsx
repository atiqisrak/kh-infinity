import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const canonical = "https://khi.com.bd/customs-clearance-service";
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
          telephone: "+8801400893882",
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
    </>
  );
}

export default function CustomsClearanceServicePage() {
  return (
    <div>
      <CustomsJsonLd />

      <section
        className="bg-gray-900 text-white py-28 md:py-40"
        style={{
          backgroundImage: "url(/images/cover/kh2.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="bg-black/60 p-6 md:p-8 rounded-lg max-w-3xl">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">
              Trade support
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Customs clearance service for Bangladesh trade
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              Practical customs clearance support: document packs, HS and duty
              coordination with your advisers, fewer preventable delays, and a
              clear checklist for buyers and shippers—backed by K.H.
              Infinity&apos;s import-export operations experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-block text-center bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Request customs support quote
              </Link>
              <Link
                href="/contact"
                className="inline-block text-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
              >
                Speak to our desk
              </Link>
            </div>
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
          <Link href="/services" className="hover:text-orange-500">
            Services
          </Link>
          <span className="mx-2" aria-hidden>
            /
          </span>
          <span className="text-gray-900 font-medium">
            Customs clearance service
          </span>
        </div>
      </nav>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                What our customs clearance support includes
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                We help trading teams prepare complete, consistent paperwork and
                timelines around Bangladesh National Board of Revenue (NBR)
                processes. Where Bangladesh law requires a{" "}
                <strong className="text-gray-800">
                  licensed customs agent or broker
                </strong>{" "}
                to file declarations on your behalf, you retain that
                relationship—we align our document set and milestones with their
                filing workflow.
              </p>
              <ul className="text-gray-600 space-y-3">
                <li className="flex gap-2">
                  <i className="fas fa-check text-orange-500 mt-1" aria-hidden />
                  <span>
                    <strong className="text-gray-800">Document preparation</strong>{" "}
                    — commercial invoices, packing lists, certificates of origin,
                    and permit copies organised for submission.
                  </span>
                </li>
                <li className="flex gap-2">
                  <i className="fas fa-check text-orange-500 mt-1" aria-hidden />
                  <span>
                    <strong className="text-gray-800">
                      Tariff classification support
                    </strong>{" "}
                    — HS code alignment and liaison with your technical or legal
                    advisers on duty preferences and SRO context.
                  </span>
                </li>
                <li className="flex gap-2">
                  <i className="fas fa-check text-orange-500 mt-1" aria-hidden />
                  <span>
                    <strong className="text-gray-800">
                      Duty, tax, and VAT coordination
                    </strong>{" "}
                    — structured handoffs to your finance and banking partners for
                    assessment and payment milestones.
                  </span>
                </li>
                <li className="flex gap-2">
                  <i className="fas fa-check text-orange-500 mt-1" aria-hidden />
                  <span>
                    <strong className="text-gray-800">
                      Import and export lanes
                    </strong>{" "}
                    — same discipline for inbound industrial and FMCG cargo and
                    outbound agricultural and general exports.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/cover/kh2.webp"
                alt="Shipping containers and logistics supporting customs clearance for international trade"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Documents we routinely support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Commercial core",
                items: [
                  "Commercial invoice",
                  "Packing list",
                  "Bill of lading / airway bill",
                  "Letter of credit or purchase order (as applicable)",
                ],
              },
              {
                title: "Origin and compliance",
                items: [
                  "Certificate of origin",
                  "Phytosanitary / product-specific certificates",
                  "Insurance certificates",
                  "Import registration or IRC references (imports)",
                ],
              },
              {
                title: "Partner handoffs",
                items: [
                  "Freight forwarder instructions",
                  "Delivery order coordination",
                  "Bond or warehouse paperwork when relevant",
                  "Export incentives documentation (exports)",
                ],
              },
            ].map((block) => (
              <div
                key={block.title}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <div className="text-orange-500 text-3xl mb-3">
                  <i className="fas fa-folder-open" aria-hidden />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {block.title}
                </h3>
                <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
            From paperwork to release
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            A practical workflow we coordinate with you and your logistics
            partners. Exact sequencing depends on port, mode, and product.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                n: "1",
                t: "Intake",
                d: "Checklist of HS, values, incoterms, permits, and carrier documents.",
              },
              {
                n: "2",
                t: "Pre-arrival",
                d: "Resolve discrepancies early; pre-advise bank and insurer if needed.",
              },
              {
                n: "3",
                t: "Assessment",
                d: "Coordinate duty, VAT, and ancillary charges with your treasury.",
              },
              {
                n: "4",
                t: "Release",
                d: "Examination scheduling, query response, and handoff to delivery.",
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                <i
                  className="fas fa-exclamation-triangle text-orange-500"
                  aria-hidden
                />
                Common delay points we help mitigate
              </h2>
              <ul className="text-gray-600 space-y-3 list-disc list-inside">
                <li>Invoice vs packing list quantity or weight mismatches</li>
                <li>
                  HS code changes or SRO eligibility not reflected on documents
                </li>
                <li>Late or incomplete certificate sets for regulated products</li>
                <li>Bank or L/C discrepancies holding release</li>
                <li>Last-minute changes to consignee or notify party</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                We emphasise parallel workstreams—finance, forwarder, and
                compliance—so one gap does not idle the whole clearance clock.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                <i className="fas fa-clipboard-list text-orange-500" aria-hidden />
                Buyer preparation checklist
              </h2>
              <ul className="text-gray-600 space-y-3 list-disc list-inside">
                <li>Final commercial invoice in the name required by customs</li>
                <li>Accurate gross/net weights and carton counts</li>
                <li>HS codes agreed with your technical team</li>
                <li>Copies of registration, IRC, or export permits ready</li>
                <li>Named customs broker or agent contact (if appointed)</li>
                <li>Preferred incoterm and discharge port confirmed in writing</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Sending this pack 48–72 hours before arrival materially improves
                first-pass acceptance rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Office and contact
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 text-gray-600">
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Head office</h3>
                <p>
                  Kader Tropical Height, Shop- G5, 10 Hatkhola Road, Tikatuli,
                  Wari, Dhaka 1203, Bangladesh
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Hours</h3>
                <p>Thursday–Tuesday: 9:00 AM – 8:00 PM</p>
                <p>Wednesday: Closed</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Phone</h3>
                <a
                  href="tel:+8801400893882"
                  className="text-orange-600 font-semibold hover:text-orange-700"
                >
                  +880 1400893882
                </a>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Email</h3>
                <a
                  href="mailto:info@khi.com.bd"
                  className="text-orange-600 font-semibold hover:text-orange-700"
                >
                  info@khi.com.bd
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 font-semibold"
              >
                Full contact page
              </Link>
              <Link
                href="/faq"
                className="inline-block border border-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-50 font-semibold"
              >
                Trade FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to streamline your next clearance?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-50">
            Share shipment mode, HS chapter, and destination—we will outline
            documents, timelines, and how our team plugs into your broker and
            bank.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Request quote
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              All services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
