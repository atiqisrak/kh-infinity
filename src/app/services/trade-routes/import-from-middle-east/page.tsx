import { Metadata } from "next";
import LanePage, { type LaneContent } from "@/components/v3/lanes/LanePage";

export const metadata: Metadata = {
  title:
    "Import from Middle East to Bangladesh - K.H. Infinity | Middle East Trade Routes",
  description:
    "Import premium food products, oils, and dairy from Middle East to Bangladesh. Quality sourcing with Halal certification and international standards.",
  keywords:
    "import from Middle East, Middle East to Bangladesh, food products, cooking oils, dairy import, Halal products, Middle East trade",
  alternates: {
    canonical: "https://khi.com.bd/services/trade-routes/import-from-middle-east",
  },
  openGraph: {
    title: "Import from Middle East to Bangladesh - K.H. Infinity",
    description:
      "Import premium food products from Middle East to Bangladesh with quality assurance.",
    images: ["/images/products/sunflower-oil.webp"],
    url: "https://khi.com.bd/services/trade-routes/import-from-middle-east",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Import from Middle East to Bangladesh - K.H. Infinity",
    description: "Import premium food products from Middle East to Bangladesh.",
    images: ["/images/products/sunflower-oil.webp"],
  },
};

const content: LaneContent = {
  slug: "import-from-middle-east",
  eyebrow: "Middle East → Bangladesh import lane",
  title: (
    <>
      Import from Middle East <br className="hidden sm:block" />
      to <span className="text-[#fa6a25]">Bangladesh</span>
    </>
  ),
  lead: "Premium food products and commodities sourced from Middle Eastern countries with quality assurance and Halal certification.",
  heroImage: "/images/v3/tanker-sunset.webp",
  heroImageAlt: "Tanker sailing across calm water at sunset",
  quoteLabel: "Request Middle East import quote",
  stats: [
    { value: "3", label: "Product groups" },
    { value: "Halal", label: "Certified imports" },
    { value: "2–5", label: "Working days customs clearance" },
  ],
  overview: {
    title: "Middle East Import Expertise",
    body: [
      "We specialize in importing premium food products from Middle East to Bangladesh. Our focus includes cooking oils, dairy products, spices, and other high-quality commodities.",
      "All our Middle East imports come with proper Halal certification and international quality standards to meet your business requirements.",
    ],
    image: "/images/products/sunflower-oil.webp",
    imageAlt: "Food products from Middle East",
  },
  move: {
    title: "Products We Import from Middle East",
    intro: "Premium food products and commodities from Middle Eastern countries.",
    groups: [
      {
        icon: "chef",
        title: "Cooking Oils",
        body: "Premium vegetable oils including sunflower, palm, and olive oils.",
        links: [{ label: "View Products", href: "/products/sunflower-oil" }],
      },
      {
        icon: "store",
        title: "Dairy Products",
        body: "High-quality dairy products including milk powder, cheese, and cream.",
      },
      {
        icon: "leaf",
        title: "Spices & Seasonings",
        body: "Authentic Middle Eastern spices and seasonings for culinary use.",
      },
    ],
    productIds: ["medjool-dates"],
  },
  facts: [
    ["Origin", "Middle East"],
    ["Destination", "Chattogram, Bangladesh"],
    ["Direction", "Import"],
    ["Certification", "Halal certified, international quality standards"],
  ],
  why: {
    title: "Why Import from Middle East?",
    items: [
      { title: "Halal Certified", body: "All products come with proper Halal certification for Muslim markets" },
      { title: "Premium Quality", body: "High-quality products meeting international standards" },
      { title: "Competitive Pricing", body: "Best-in-market pricing for premium Middle Eastern products" },
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
        Ready to import from
        <br />
        the <span className="text-[#fa6a25]">Middle East?</span>
      </>
    ),
    body: "Get premium food products and commodities from Middle East to Bangladesh.",
    image: "/images/v3/lanes/ship-broadside.webp",
    imageAlt: "Container ship stacked with containers sailing past a coastline",
    label: "Request import quote",
  },
};

export default function ImportFromMiddleEastPage() {
  return <LanePage content={content} />;
}
