import { Metadata } from "next";
import LanePage, { type LaneContent } from "@/components/v3/lanes/LanePage";

export const metadata: Metadata = {
  title:
    "Export to Middle East from Bangladesh - K.H. Infinity | Middle East Export Routes",
  description:
    "Export fresh produce, agricultural products, and handicrafts from Bangladesh to Middle East. Quality Bangladeshi products for Middle Eastern markets.",
  keywords:
    "export to Middle East, Bangladesh export, potato export, handicrafts export, Middle East trade, Bangladesh products",
  alternates: {
    canonical: "https://khi.com.bd/services/trade-routes/export-to-middle-east",
  },
  openGraph: {
    title: "Export to Middle East from Bangladesh - K.H. Infinity",
    description:
      "Export quality Bangladeshi products to Middle East markets with reliable service.",
    images: ["/images/products/potato.webp"],
    url: "https://khi.com.bd/services/trade-routes/export-to-middle-east",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Export to Middle East from Bangladesh - K.H. Infinity",
    description: "Export quality Bangladeshi products to Middle East markets.",
    images: ["/images/products/potato.webp"],
  },
};

const content: LaneContent = {
  slug: "export-to-middle-east",
  eyebrow: "Bangladesh → Middle East export lane",
  title: (
    <>
      Export to Middle East <br className="hidden sm:block" />
      from <span className="text-[#fa6a25]">Bangladesh</span>
    </>
  ),
  lead: "Quality Bangladeshi products exported to Middle Eastern markets with commitment to excellence and timely delivery.",
  heroImage: "/images/v3/truck-apron.webp",
  heroImageAlt: "Container truck parked on an open apron at dusk",
  quoteLabel: "Request export quote",
  stats: [
    { value: "3", label: "Product groups" },
    { value: "4", label: "Step export process" },
    { value: "GCC", label: "Gulf markets served" },
  ],
  overview: {
    title: "Bangladesh to Middle East Export",
    body: [
      "We specialize in exporting fresh produce, agricultural products, and handicrafts from Bangladesh to Middle Eastern countries. Our strong relationships with Middle Eastern buyers ensure reliable market access.",
      "All exports are handled with care, proper packaging, and complete documentation to meet Middle Eastern market requirements.",
    ],
    image: "/images/products/potato.webp",
    imageAlt: "Export products to Middle East",
    links: [
      {
        label: "Gulf-focused potato export hub",
        href: "/products/potato-gulf",
        note: "Grading, packing, documentation, and buyer FAQs in one place.",
      },
    ],
  },
  move: {
    title: "Products We Export to Middle East",
    intro: "Fresh produce, handicrafts, and agricultural products from Bangladesh.",
    groups: [
      {
        icon: "sprout",
        title: "Fresh Potatoes",
        body: "Premium quality potatoes protected during transport with our specialized packaging solutions.",
        links: [
          { label: "View Product", href: "/products/potato" },
          { label: "Gulf buyer landing page", href: "/products/potato-gulf" },
        ],
      },
      {
        icon: "award",
        title: "Handicrafts",
        body: "Authentic Bangladeshi handicrafts showcasing local artistry and cultural heritage.",
        links: [{ label: "View Product", href: "/products/handicrafts" }],
      },
      {
        icon: "leaf",
        title: "Agricultural Products",
        body: "Fresh produce and agricultural goods sourced from local Bangladeshi farms.",
      },
    ],
    productIds: ["potato", "handicrafts"],
  },
  facts: [
    ["Origin", "Bangladesh"],
    ["Destination", "Gulf markets, Middle East"],
    ["Direction", "Export"],
    ["We handle", "Quality control, export packaging, documentation, shipping"],
  ],
  process: {
    title: "Our Export Process",
    steps: [
      { title: "Quality Control", body: "Rigorous quality checks and grading to meet export standards" },
      { title: "Packaging", body: "Specialized export packaging for product protection" },
      { title: "Documentation", body: "Complete export documentation and compliance" },
      { title: "Shipping", body: "Efficient logistics and timely delivery to Middle East" },
    ],
  },
  why: {
    title: "Why Export Through Us?",
    items: [
      { title: "Quality Assurance", body: "Only export-grade quality products that meet international standards" },
      { title: "Buyer Network", body: "Established relationships with Middle Eastern buyers and distributors" },
      { title: "Export Support", body: "Complete support from sourcing to final delivery" },
    ],
  },
  faqs: [
    {
      q: "Which trade routes do you run?",
      a: "Imports from China and the Middle East into Bangladesh, and export lanes to the Gulf and GCC for fresh produce such as potatoes.",
    },
    {
      q: "Do you handle customs clearance in Bangladesh?",
      a: "Yes. We manage full clearance for B2B imports and exports, with the Total Tax Incidence (CD, RD, SD, VAT, AIT and AT) shown upfront per current NBR SROs and the Customs Tariff.",
    },
    {
      q: "Which payment terms do you accept?",
      a: "Letter of Credit (L/C), wire transfer, documentary collection and advance payment, agreed per contract.",
    },
  ],
  cta: {
    title: (
      <>
        Ready to export
        <br />
        to the <span className="text-[#fa6a25]">Middle East?</span>
      </>
    ),
    body: "Connect with quality buyers in Middle East and grow your export business.",
    image: "/images/v3/road-and-sea.webp",
    imageAlt: "Aerial view of a truck convoy on a forest road beside a loaded container ship",
    label: "Request export quote",
  },
};

export default function ExportToMiddleEastPage() {
  return <LanePage content={content} />;
}
