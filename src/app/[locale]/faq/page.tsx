import { Metadata } from "next";
import FAQClient from "./FAQClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FAQ - K.H. Infinity Import Export",
  description:
    "Frequently asked questions about import/export services, documentation, shipping, and payment processes at K.H. Infinity. Get answers about international trade, customs, and logistics.",
  keywords:
    "FAQ, import export FAQ, shipping FAQ, customs documentation, international trade questions, logistics FAQ, freight forwarding",
  alternates: {
    canonical: "https://khi.com.bd/faq",
  },
  openGraph: {
    title: "FAQ - K.H. Infinity Import Export",
    description:
      "Frequently asked questions about import/export services, documentation, shipping, and payment processes at K.H. Infinity.",
    type: "website",
    url: "https://khi.com.bd/faq",
    siteName: "K.H. Infinity",
    images: ["/images/cover/kh1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - K.H. Infinity Import Export",
    description:
      "Frequently asked questions about import/export services, documentation, shipping, and payment processes at K.H. Infinity.",
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
  // Generate FAQ structured data for SEO
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

  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <FAQClient faqData={faqData} />
    </>
  );
}
