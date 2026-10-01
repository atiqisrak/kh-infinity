import { Metadata } from "next";
import LanePage, { type LaneContent } from "@/components/v3/lanes/LanePage";

export const metadata: Metadata = {
  title: "Import from China to Bangladesh - K.H. Infinity | China Trade Routes",
  description:
    "Professional import services from China to Bangladesh. We source industrial products, equipment, and raw materials with quality assurance and efficient logistics.",
  keywords:
    "import from China, China to Bangladesh, industrial products, trade route, China imports, Bangladesh import, industrial equipment",
  alternates: {
    canonical: "https://khi.com.bd/services/trade-routes/import-from-china",
  },
  openGraph: {
    title: "Import from China to Bangladesh - K.H. Infinity",
    description:
      "Professional import services from China to Bangladesh with quality assurance.",
    images: ["/images/products/tarpaulin.webp"],
    url: "https://khi.com.bd/services/trade-routes/import-from-china",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Import from China to Bangladesh - K.H. Infinity",
    description: "Professional import services from China to Bangladesh.",
    images: ["/images/products/tarpaulin.webp"],
  },
};

const content: LaneContent = {
  slug: "import-from-china",
  eyebrow: "China → Bangladesh import lane",
  title: (
    <>
      Import from China <br className="hidden sm:block" />
      to <span className="text-[#fa6a25]">Bangladesh</span>
    </>
  ),
  lead: "Leverage our expertise in China-Bangladesh trade routes for reliable industrial product imports.",
  heroImage: "/images/v3/ship-aerial.webp",
  heroImageAlt: "Aerial view of a loaded container ship at sea",
  quoteLabel: "Request China import quote",
  stats: [
    { value: "5+", label: "Years in China–Bangladesh trade" },
    { value: "30", label: "Days, typical inquiry to delivery" },
    { value: "6", label: "Product groups" },
    { value: "4", label: "Steps, supplier to your door" },
  ],
  overview: {
    title: "China-Bangladesh Trade Expertise",
    body: [
      "We specialize in importing industrial products, equipment, and raw materials from China to Bangladesh. Our established network and expertise ensure quality sourcing and smooth logistics.",
      "With 5+ years of experience in China-Bangladesh trade, we handle everything from supplier verification to final delivery at your doorstep in Bangladesh.",
    ],
    image: "/images/products/tarpaulin.webp",
    imageAlt: "Industrial products from China",
  },
  move: {
    title: "Products We Import from China",
    intro: "Industrial products, equipment, and raw materials sourced from China.",
    groups: [
      {
        icon: "box",
        title: "Industrial Materials",
        body: "Tarpaulin, fabrics, and industrial-grade materials for various applications.",
        links: [{ label: "View Tarpaulin", href: "/products/tarpaulin" }],
      },
      {
        icon: "factory",
        title: "Machinery & Equipment",
        body: "Industrial machinery, tools, and equipment for manufacturing and production.",
      },
      {
        icon: "warehouse",
        title: "Raw Materials",
        body: "High-quality raw materials and components for various manufacturing needs.",
      },
      {
        icon: "spark",
        title: "Chemicals & Plastics",
        body: "Industrial chemicals, plastic products, and specialty materials.",
      },
      {
        icon: "calculator",
        title: "Electronics & Components",
        body: "Electronic components, devices, and related products.",
      },
      {
        icon: "clipboard",
        title: "Tools & Hardware",
        body: "Hand tools, hardware, and construction supplies.",
      },
    ],
    productIds: ["tarpaulin", "soy-sauce"],
  },
  facts: [
    ["Origin", "China"],
    ["Destination", "Chattogram, Bangladesh"],
    ["Direction", "Import"],
    ["We handle", "Supplier verification, pre-shipment inspection, shipping, customs clearance, delivery"],
  ],
  timeline: [
    { when: "Days 1–3", title: "Inquiry Processing", body: "Receive your inquiry, prepare quote, and confirm order" },
    { when: "Days 4–10", title: "Sourcing & Production", body: "Supplier coordination, production monitoring" },
    { when: "Days 11–14", title: "Quality Check", body: "Pre-shipment inspection and quality verification" },
    { when: "Days 15–30", title: "Shipping & Delivery", body: "Container booking, shipping, customs, and final delivery" },
  ],
  process: {
    title: "Our China Import Process",
    steps: [
      { title: "Supplier Verification", body: "We verify and audit Chinese suppliers to ensure quality standards." },
      { title: "Quality Inspection", body: "Pre-shipment inspection in China by our quality team." },
      { title: "Shipping & Customs", body: "We handle all shipping, documentation, and customs clearance." },
      { title: "Delivery", body: "Final delivery to your warehouse or designated location in Bangladesh." },
    ],
  },
  why: {
    title: "Why Choose Us for China Imports?",
    items: [
      { title: "Quality Assurance", body: "Rigorous quality control and inspection at source in China" },
      { title: "Established Network", body: "Trusted relationships with Chinese suppliers and manufacturers" },
      { title: "Documentation", body: "Complete handling of all import documentation and customs clearance" },
    ],
  },
  faqs: [
    {
      q: "How long does an import take?",
      a: "Sea freight typically takes 20–45 days and air freight 3–7 days, depending on origin. Customs clearance in Bangladesh then takes 2–5 working days.",
    },
    {
      q: "What documents do I need to import?",
      a: "Usually a commercial invoice, bill of lading or airway bill, packing list, certificate of origin and an import licence where applicable. We prepare and check them with you.",
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
        Ready to import
        <br />
        from <span className="text-[#fa6a25]">China?</span>
      </>
    ),
    body: "Get competitive pricing and reliable service for your China-Bangladesh import needs.",
    image: "/images/v3/ship-open-sea.webp",
    imageAlt: "Loaded container ship sailing through open sea",
    label: "Request import quote",
  },
};

export default function ImportFromChinaPage() {
  return <LanePage content={content} />;
}
