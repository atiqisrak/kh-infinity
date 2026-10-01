import { Metadata } from "next";
import IndustryPage, { type IndustryData } from "@/components/v3/industries/IndustryPage";

export const metadata: Metadata = {
  title:
    "FMCG Import Export Solutions - K.H. Infinity | Fast-Moving Consumer Goods Trading",
  description:
    "Specialized FMCG import-export solutions for food products, beverages, and household essentials. We source and supply cooking oils, milk powder, sugar, pulses, and spices with quality assurance.",
  keywords:
    "FMCG import Bangladesh, fast moving consumer goods, food products supplier, cooking oils import, dairy products trading, food commodity trading, Bangladesh FMCG",
  alternates: {
    canonical: "https://khi.com.bd/industries/fmcg",
  },
  openGraph: {
    title: "FMCG Import Export Solutions - K.H. Infinity",
    description:
      "Specialized FMCG import-export solutions for food products with quality assurance.",
    images: ["/images/products/sunflower-oil.webp"],
    url: "https://khi.com.bd/industries/fmcg",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Import Export Solutions - K.H. Infinity",
    description: "Specialized FMCG import-export solutions for food products.",
    images: ["/images/products/sunflower-oil.webp"],
  },
};

const data: IndustryData = {
  slug: "fmcg",
  hero: {
    eyebrow: "Fast-moving consumer goods",
    title: (
      <>
        FMCG import export <span className="text-[#fa6a25]">solutions</span>
      </>
    ),
    lead: "Your trusted partner for sourcing and supplying fast-moving consumer goods across Bangladesh and globally.",
    images: [
      "/images/products/sunflower-oil-3.jpg",
      "/images/products/milk-powder.webp",
      "/images/products/sugar.webp",
      "/images/products/cumin.webp",
    ],
  },
  expertise: {
    title: (
      <>
        FMCG trading
        <br />
        expertise
      </>
    ),
    paragraphs: [
      "K.H. Infinity specializes in import and export of FMCG products, serving food manufacturers, retailers, distributors, and wholesalers across Bangladesh and beyond.",
      "Our FMCG division focuses on ensuring consistent supply, maintaining international quality standards, and providing competitive pricing for high-volume trade.",
    ],
    image: "/images/v3/industries/warehouse-forklift.webp",
    imageAlt: "Forklift moving a pallet of cartons down a warehouse aisle",
    highlights: [
      { value: "100+", label: "FMCG Products" },
      { value: "24hr", label: "Response Time" },
      { value: "15+", label: "Source Countries" },
      { value: "99%", label: "Quality Pass Rate" },
    ],
    quote: { label: "Request FMCG Quote", href: "/quote" },
  },
  products: {
    eyebrow: "What we supply",
    title: (
      <>
        Our FMCG
        <br />
        products
      </>
    ),
    items: [
      {
        name: "Cooking Oils",
        body: "Premium quality vegetable oils including sunflower oil and soybean oil for cooking and food processing.",
        icon: "leaf",
        productId: "sunflower-oil",
        links: [{ label: "View Details", href: "/products/sunflower-oil" }],
      },
      {
        name: "Dairy Products",
        body: "High-quality skimmed milk powder and other dairy products for food processing and retail.",
        icon: "box",
        productId: "milk-powder",
        links: [{ label: "View Details", href: "/products/milk-powder" }],
      },
      {
        name: "Sweeteners",
        body: "Refined white sugar and other sweeteners for food manufacturing and retail distribution.",
        icon: "box",
        productId: "sugar",
        links: [{ label: "View Details", href: "/products/sugar" }],
      },
      {
        name: "Grains & Legumes",
        body: "Premium pulses, lentils, chickpeas, and other legumes for retail and food processing.",
        icon: "sprout",
        productId: "pulses",
        links: [{ label: "View Details", href: "/products/pulses" }],
      },
      {
        name: "Spices",
        body: "High-quality spices including cumin and other seasonings for culinary and commercial use.",
        icon: "spark",
        productId: "cumin",
        links: [{ label: "View Details", href: "/products/cumin" }],
      },
    ],
  },
  benefits: {
    title: (
      <>
        Why FMCG businesses
        <br />
        choose us
      </>
    ),
    items: [
      {
        title: "Quality Compliance",
        body: "All our FMCG products meet international quality standards (ISO 22000, HACCP) and food safety regulations.",
        icon: "shield",
      },
      {
        title: "Reliable Supply Chain",
        body: "Consistent delivery schedules and inventory management to keep your FMCG operations running smoothly.",
        icon: "truck",
      },
      {
        title: "Competitive Pricing",
        body: "Best-in-market pricing for bulk FMCG orders, helping you maintain your profit margins.",
        icon: "chart",
      },
      {
        title: "Complete Documentation",
        body: "We handle all import/export documentation, customs clearance, and regulatory compliance.",
        icon: "doc",
      },
      {
        title: "Flexible Packaging",
        body: "Custom packaging options to meet your specific FMCG product requirements and brand standards.",
        icon: "warehouse",
      },
      {
        title: "Dedicated Support",
        body: "24/7 support team ready to assist with any FMCG trade inquiries or issues.",
        icon: "phone",
      },
    ],
  },
  process: {
    title: (
      <>
        Our FMCG import-export
        <br />
        process
      </>
    ),
    steps: [
      { title: "Inquiry & Quote", body: "Submit your FMCG requirements and receive a detailed quote within 24 hours." },
      { title: "Order Confirmation", body: "Review and approve the quote, sign the purchase order." },
      {
        title: "Sourcing & Quality Check",
        body: "We source products, conduct quality inspections, and prepare documentation.",
      },
      { title: "Delivery", body: "Shipment arranged, customs cleared, and products delivered to your door." },
    ],
  },
  cta: {
    title: (
      <>
        Ready to source
        <br />
        FMCG <span className="text-[#fa6a25]">products?</span>
      </>
    ),
    body: "Get competitive pricing on FMCG imports and exports. From cooking oils to dairy products, we've got you covered.",
    primary: { label: "Request FMCG Quote", href: "/quote" },
    secondary: { label: "Contact Us", href: "/contact" },
  },
};

export default function FMCGPage() {
  return <IndustryPage data={data} />;
}
