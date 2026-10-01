import { Metadata } from "next";
import IndustryPage, { type IndustryData } from "@/components/v3/industries/IndustryPage";

export const metadata: Metadata = {
  title:
    "Agriculture & Food Processing Solutions - K.H. Infinity | Agricultural Trading",
  description:
    "Agricultural products and processing materials for the agriculture and food processing industry. Export fresh produce and import essential inputs.",
  keywords:
    "agricultural trading, food processing, agricultural export, fresh produce, Bangladesh agricultural products, potato export, pulses import",
  alternates: {
    canonical: "https://khi.com.bd/industries/agriculture",
  },
  openGraph: {
    title: "Agriculture & Food Processing Solutions - K.H. Infinity",
    description:
      "Agricultural products and processing materials for food processing industry.",
    images: ["/images/products/potato.webp"],
    url: "https://khi.com.bd/industries/agriculture",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agriculture & Food Processing Solutions - K.H. Infinity",
    description: "Agricultural products for food processing industry.",
    images: ["/images/products/potato.webp"],
  },
};

const data: IndustryData = {
  slug: "agriculture",
  hero: {
    eyebrow: "Agriculture & food processing",
    title: (
      <>
        Agriculture &amp; food processing <span className="text-[#fa6a25]">solutions</span>
      </>
    ),
    lead: "Agricultural products and processing materials. We export fresh produce and import essential inputs for the agriculture and food processing industry.",
    images: [
      "/images/potato-export/export-packaging.webp",
      "/images/products/pulses.webp",
      "/images/products/yellow-potato.webp",
      "/images/products/chickpeas-2.jpg",
    ],
  },
  expertise: {
    title: (
      <>
        Agriculture trade
        <br />
        expertise
      </>
    ),
    paragraphs: [
      "We support the agriculture and food processing industry by exporting premium fresh produce and importing essential inputs for production and processing operations.",
      "From farm-fresh potatoes to imported pulses and processing materials, we ensure quality from field to factory.",
    ],
    image: "/images/potato-export/grading.webp",
    imageAlt: "Burlap sack of fresh potatoes",
    highlights: [
      { value: "Fresh", label: "Quality" },
      { value: "Export", label: "Ready" },
      { value: "Trust", label: "Built" },
      { value: "Global", label: "Network" },
    ],
    quote: { label: "Request Agriculture Quote", href: "/quote" },
    extraLink: { label: "Potato export for Gulf & GCC buyers", href: "/products/potato-gulf" },
  },
  products: {
    eyebrow: "What we supply",
    title: (
      <>
        Agricultural products
        <br />
        we handle
      </>
    ),
    items: [
      {
        name: "Fresh Potatoes",
        body: "Premium quality potatoes exported from local Bangladesh farms.",
        icon: "sprout",
        productId: "potato",
        links: [
          { label: "View Product", href: "/products/potato" },
          { label: "Gulf export overview", href: "/products/potato-gulf" },
        ],
      },
      {
        name: "Pulses & Legumes",
        body: "Imported high-quality pulses including lentils, chickpeas, and beans.",
        icon: "leaf",
        productId: "pulses",
      },
      {
        name: "Grains & Cereals",
        body: "Premium grains and cereals for food processing and retail.",
        icon: "basket",
      },
      {
        name: "Spices",
        body: "Imported spices including cumin and other seasonings for processing.",
        icon: "spark",
      },
      {
        name: "Packaging Materials",
        body: "Tarpaulin and protective packaging for agricultural export.",
        icon: "box",
      },
      {
        name: "Farming Inputs",
        body: "Essential inputs and materials for agricultural production.",
        icon: "factory",
      },
    ],
  },
  benefits: {
    title: (
      <>
        Why agricultural businesses
        <br />
        choose us
      </>
    ),
    items: [
      {
        title: "Premium Quality",
        body: "Only the finest agricultural products that meet export and processing standards.",
        icon: "award",
      },
      {
        title: "Protected Transport",
        body: "Specialized packaging and transport to ensure product quality during shipping.",
        icon: "truck",
      },
      {
        title: "Trusted Partners",
        body: "Strong relationships with farmers, processors, and international buyers.",
        icon: "handshake",
      },
    ],
  },
  cta: {
    title: (
      <>
        Ready to source agricultural
        <br />
        <span className="text-[#fa6a25]">products?</span>
      </>
    ),
    body: "Get fresh produce for export or quality inputs for your processing operations.",
    primary: { label: "Request Quote", href: "/quote" },
    secondary: { label: "Contact Us", href: "/contact" },
    image: "/images/v3/containers-orange.webp",
    imageAlt: "Looking up between stacked orange shipping containers",
  },
};

export default function AgriculturePage() {
  return <IndustryPage data={data} />;
}
