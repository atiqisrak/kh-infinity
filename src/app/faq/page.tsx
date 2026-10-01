import { Metadata } from "next";
import Script from "next/script";
import { breadcrumbSchema, speakableWebPageSchema } from "@/lib/schema-helpers";
import V3Shell from "@/components/v3/V3Shell";
import PageHero from "@/components/v3/PageHero";
import { Section, FaqList, NumberedGrid } from "@/components/v3/blocks";
import CtaBand from "@/components/v3/CtaBand";
import { PillButton, GhostButton } from "@/components/v3/ui";

export const metadata: Metadata = {
  title: "Import Export FAQ — Bangladesh Trade, Customs & TTI | K.H. Infinity",
  description:
    "Answers to common B2B trade questions: Bangladesh customs clearance timelines, NBR TTI calculation, required import documents, payment terms (L/C vs T/T), and Gulf export logistics. From K.H. Infinity, direct B2B importer in Dhaka.",
  keywords:
    "import export FAQ Bangladesh, customs clearance FAQ, TTI calculation Bangladesh, how to import Bangladesh, Gulf potato export FAQ, L/C vs T/T Bangladesh, NBR customs documentation, BSTI FAQ",
  alternates: {
    canonical: "https://khi.com.bd/faq",
  },
  openGraph: {
    title: "Import Export FAQ — Bangladesh Trade, Customs & TTI | K.H. Infinity",
    description:
      "Customs clearance timelines, TTI calculation, required import documents, payment terms, and Gulf export logistics — answered by K.H. Infinity, direct B2B importer in Dhaka.",
    type: "website",
    url: "https://khi.com.bd/faq",
    siteName: "K.H. Infinity",
    images: ["/images/cover/kh1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Import Export FAQ — Bangladesh Trade & Customs | K.H. Infinity",
    description:
      "Customs timelines, NBR TTI calculation, required import docs, L/C vs T/T, and Gulf potato export logistics — answered from Dhaka.",
    images: ["/images/cover/kh1.webp"],
  },
};

const faqData = {
  import: {
    title: "Import Process",
    questions: [
      {
        question: "What is the typical timeline for importing goods?",
        answer: "The timeline varies depending on the product type and origin:",
        list: [
          "Sea freight: 20-45 days",
          "Air freight: 3-7 days",
          "Customs clearance: 2-5 business days",
        ],
      },
      {
        question: "What documents are required for importing?",
        answer: "Essential documents include:",
        list: [
          "Commercial Invoice",
          "Bill of Lading/Airway Bill",
          "Packing List",
          "Certificate of Origin",
          "Import License (if applicable)",
        ],
      },
    ],
  },
  export: {
    title: "Export Process",
    questions: [
      {
        question: "How do you ensure product quality for exports?",
        answer: "We implement a comprehensive quality control process:",
        list: [
          "Pre-production inspection",
          "During production quality checks",
          "Final inspection before shipping",
          "Quality certification where required",
        ],
      },
      {
        question: "Which countries do you export to?",
        answer: "We export to multiple regions including:",
        list: [
          "North America (USA, Canada)",
          "Europe (UK, Germany, France, etc.)",
          "Middle East (UAE, Saudi Arabia)",
          "Asia Pacific (Australia, Japan, Singapore)",
        ],
      },
    ],
  },
  documentation: {
    title: "Documentation",
    questions: [
      {
        question: "What are Incoterms and how do they affect my shipment?",
        answer: "Incoterms are international commercial terms that define:",
        list: [
          "Responsibility for shipping costs",
          "Insurance requirements",
          "Risk transfer points",
          "Customs clearance responsibilities",
        ],
        note: "Common terms include FOB, CIF, EXW, and DDP.",
      },
      {
        question: "Do you help with customs documentation?",
        answer: "Yes, we provide comprehensive customs documentation support:",
        list: [
          "Preparation of all required documents",
          "Customs declaration filing",
          "HS code classification",
          "Compliance verification",
        ],
      },
    ],
  },
  payment: {
    title: "Payment & Pricing",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods:",
        list: [
          "Letter of Credit (L/C)",
          "Wire Transfer",
          "Documentary Collection",
          "Advance Payment",
        ],
      },
      {
        question: "How are shipping costs calculated?",
        answer: "Shipping costs are determined by several factors:",
        list: [
          "Cargo volume and weight",
          "Shipping method (air/sea/land)",
          "Origin and destination",
          "Special handling requirements",
          "Insurance coverage",
        ],
        note: "Contact us for a detailed quote based on your specific requirements.",
      },
    ],
  },
  geo: {
    title: "Customs & Trade Intelligence",
    questions: [
      {
        question: "Does KHI handle customs clearance in Bangladesh?",
        answer:
          "Yes, K.H. Infinity manages full customs clearance for B2B imports and exports, providing transparency on Total Tax Incidence (TTI) including CD, RD, SD, VAT, AIT, and AT per current NBR SROs and the Bangladesh Customs Tariff First Schedule.",
      },
      {
        question: "What are the primary trade routes for KHI?",
        answer:
          "K.H. Infinity manages global B2B trade routes including imports from China and the Middle East to Bangladesh, and export lanes to the Gulf and GCC for fresh produce such as potatoes. See our trade routes hub for lane-specific documentation.",
      },
      {
        question: "What is Total Tax Incidence (TTI) and how does KHI calculate it?",
        answer:
          "TTI is the total landed cost multiplier for imports in Bangladesh, calculated as: Assessable Value (AV) = (C&F + Insurance + Landing) × Adjustment Rate; then CD, RD, SD, VAT, AIT, and AT are applied sequentially per NBR budget gazettes. KHI provides TTI modelling for procurement planning.",
      },
    ],
  },
};

export default function FAQPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: Object.values(faqData).flatMap((section) =>
      section.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${q.answer}${"list" in q && q.list ? "\n" + q.list.join("\n") : ""}${
            "note" in q && q.note ? "\n" + q.note : ""
          }`,
        },
      }))
    ),
  };

  const crumbs = breadcrumbSchema([
    { name: "Home", url: "https://khi.com.bd/" },
    { name: "FAQ", url: "https://khi.com.bd/faq" },
  ]);

  const speakable = speakableWebPageSchema({
    url: "https://khi.com.bd/faq",
    name: "Import Export FAQ — Bangladesh Trade, Customs & TTI",
    dateModified: "2026-08-07",
  });

  return (
    <V3Shell>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }}
      />

      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        eyebrow="Trade knowledge base"
        title={"Answers to your\nimport-export questions"}
        lead="Everything you need to know about importing, exporting, shipping, and working with K.H. Infinity."
      />

      <Section id="faq-questions" tone="paper" label="Frequently asked questions">
        <div className="space-y-14">
          {Object.entries(faqData).map(([key, category]) => (
            <div key={key}>
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#06131d]/50">
                {category.title}
              </p>
              <FaqList
                dark
                items={category.questions.map((q) => ({
                  q: q.question,
                  a: (
                    <>
                      <p>{q.answer}</p>
                      {"list" in q && q.list && (
                        <ul className="mt-3 space-y-1 pl-4">
                          {q.list.map((item) => (
                            <li key={item} className="list-disc">{item}</li>
                          ))}
                        </ul>
                      )}
                      {"note" in q && q.note && (
                        <p className="mt-3 font-medium text-[#0b2c3d]">{q.note}</p>
                      )}
                    </>
                  ),
                }))}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="faq-next-steps"
        tone="sea"
        eyebrow="Still have questions?"
        title="We're here to help"
        intro="Our team of trade specialists is ready to walk you through every step of your import or export journey."
      >
        <NumberedGrid
          dark={false}
          cols={3}
          items={[
            {
              title: "Talk to us",
              body: (
                <>
                  <p className="mb-6">Speak directly with an international trade specialist about your specific requirements.</p>
                  <PillButton href="/contact">Contact us</PillButton>
                </>
              ),
            },
            {
              title: "Explore services",
              body: (
                <>
                  <p className="mb-6">Browse our full range of import, export, and logistics services tailored for B2B trade.</p>
                  <PillButton href="/services">View services</PillButton>
                </>
              ),
            },
            {
              title: "Get a quote",
              body: (
                <>
                  <p className="mb-6">Request a landed-cost quote for your next shipment — product, quantity, and destination.</p>
                  <PillButton href="/quote">Request quote</PillButton>
                </>
              ),
            },
          ]}
        />
      </Section>

      <CtaBand
        image="/images/v3/faq-cta.webp"
        imageAlt="Tanker ship at sunset on open sea"
        title={
          <>
            Ready to move your{" "}
            <span className="text-[#fa6a25]">next shipment?</span>
          </>
        }
        body="Tell us the product, quantity and destination. We'll come back with a landed-cost quote within 24 hours."
        cta={{ label: "Get in touch", href: "/contact" }}
      />
    </V3Shell>
  );
}
