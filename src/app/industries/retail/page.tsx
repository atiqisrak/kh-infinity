import { Metadata } from "next";
import IndustryPage, { type IndustryData } from "@/components/v3/industries/IndustryPage";

export const metadata: Metadata = {
  title:
    "Retail & E-commerce Import Export Solutions - K.H. Infinity | Trading for Retailers",
  description:
    "Supply chain solutions for retail businesses and e-commerce platforms. Source quality products at competitive prices with reliable delivery for your retail operations.",
  keywords:
    "retail import export, e-commerce sourcing, retail supply chain, online retail, retail trading Bangladesh, retail products",
  alternates: {
    canonical: "https://khi.com.bd/industries/retail",
  },
  openGraph: {
    title: "Retail & E-commerce Import Export Solutions - K.H. Infinity",
    description:
      "Supply chain solutions for retail businesses with quality products and reliable delivery.",
    images: ["/images/products/handicrafts.webp"],
    url: "https://khi.com.bd/industries/retail",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail & E-commerce Solutions - K.H. Infinity",
    description: "Supply chain solutions for retail businesses.",
    images: ["/images/products/handicrafts.webp"],
  },
};

const data: IndustryData = {
  slug: "retail",
  hero: {
    eyebrow: "Retail & e-commerce",
    title: (
      <>
        Retail &amp; e-commerce <span className="text-[#fa6a25]">solutions</span>
      </>
    ),
    lead: "Complete supply chain solutions for retail businesses and online platforms. Source quality products at competitive prices.",
    images: [
      "/images/products/textiles.webp",
      "/images/products/pottery.webp",
      "/images/products/handicrafts.webp",
      "/images/products/woodcraft.webp",
    ],
  },
  expertise: {
    title: (
      <>
        Retail trade
        <br />
        expertise
      </>
    ),
    paragraphs: [
      "We understand the unique needs of retail and e-commerce businesses. Our expertise helps retailers source quality products at competitive prices, ensuring your profit margins while delivering value to your customers.",
      "From consumer goods to unique products, we help retailers expand their inventory and connect with international suppliers.",
    ],
    image: "/images/products/woodcraft.webp",
    imageAlt: "Hand-carved wooden owl figurines",
    highlights: [
      { value: "Bulk", label: "Orders" },
      { value: "MOQ", label: "Flexible" },
      { value: "Fast", label: "Delivery" },
      { value: "24/7", label: "Support" },
    ],
    quote: { label: "Request Retail Quote", href: "/quote" },
  },
  products: {
    eyebrow: "What we supply",
    title: (
      <>
        Retail products
        <br />
        we handle
      </>
    ),
    items: [
      {
        name: "Handicrafts & Arts",
        body: "Authentic handicrafts and cultural products for retail and gift shops.",
        icon: "store",
        productId: "handicrafts",
      },
      {
        name: "Food Products",
        body: "Cooking oils, dairy, sugar, and pulses for retail distribution.",
        icon: "basket",
      },
      {
        name: "Fresh Produce",
        body: "Premium fruits, vegetables, and agricultural products for retail.",
        icon: "leaf",
      },
    ],
  },
  benefits: {
    title: (
      <>
        Benefits for
        <br />
        retailers
      </>
    ),
    items: [
      {
        title: "Competitive Pricing",
        body: "Best-in-market pricing that helps you maintain profit margins and stay competitive.",
        icon: "chart",
      },
      {
        title: "Fast Turnaround",
        body: "Quick processing and delivery to keep your inventory fresh and meet customer demand.",
        icon: "clock",
      },
      {
        title: "Quality Guaranteed",
        body: "Retail-ready products that meet international quality standards for your customers.",
        icon: "check",
      },
    ],
  },
  cta: {
    title: (
      <>
        Ready to source for your
        <br />
        retail <span className="text-[#fa6a25]">business?</span>
      </>
    ),
    body: "Get quality products at competitive prices for your retail or e-commerce platform.",
    primary: { label: "Request Retail Quote", href: "/quote" },
    secondary: { label: "Contact Us", href: "/contact" },
  },
};

export default function RetailPage() {
  return <IndustryPage data={data} />;
}
