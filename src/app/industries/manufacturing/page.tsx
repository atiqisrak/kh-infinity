import { Metadata } from "next";
import IndustryPage, { type IndustryData } from "@/components/v3/industries/IndustryPage";

export const metadata: Metadata = {
  title:
    "Manufacturing & Industrial Solutions - K.H. Infinity | Industrial Sourcing",
  description:
    "Industrial raw materials and supplies for manufacturing businesses. Source quality materials and equipment to support your production needs.",
  keywords:
    "manufacturing supplies, industrial materials, raw materials sourcing, industrial equipment, manufacturing Bangladesh, industrial import",
  alternates: {
    canonical: "https://khi.com.bd/industries/manufacturing",
  },
  openGraph: {
    title: "Manufacturing & Industrial Solutions - K.H. Infinity",
    description:
      "Industrial raw materials and supplies for manufacturing businesses.",
    images: ["/images/products/tarpaulin.webp"],
    url: "https://khi.com.bd/industries/manufacturing",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing & Industrial Solutions - K.H. Infinity",
    description: "Industrial materials for manufacturing businesses.",
    images: ["/images/products/tarpaulin.webp"],
  },
};

const data: IndustryData = {
  slug: "manufacturing",
  hero: {
    eyebrow: "Industrial sourcing",
    title: (
      <>
        Manufacturing &amp; industrial <span className="text-[#fa6a25]">solutions</span>
      </>
    ),
    lead: "Industrial raw materials and supplies for manufacturing businesses. Source quality materials and equipment to support your production needs.",
    images: [
      "/images/v3/industries/welder-steel.webp",
      "/images/products/tarpaulin-2.jpg",
      "/images/products/tarpaulin.webp",
      "/images/v3/containers-orange.webp",
    ],
  },
  expertise: {
    title: (
      <>
        Industrial trade
        <br />
        expertise
      </>
    ),
    paragraphs: [
      "We support manufacturing businesses by sourcing quality raw materials, equipment, and supplies from trusted international suppliers. Our focus on quality and reliability helps keep your production lines running efficiently.",
      "From industrial materials to specialized equipment, we handle bulk procurement with competitive pricing and dependable supply chains.",
    ],
    image: "/images/products/tarpaulin-3.jpg",
    imageAlt: "Trailer load secured under a blue tarpaulin cover",
    highlights: [
      { value: "Bulk", label: "Procurement" },
      { value: "Quality", label: "Guaranteed" },
      { value: "Global", label: "Sourcing" },
      { value: "Efficient", label: "Delivery" },
    ],
    quote: { label: "Request Industrial Quote", href: "/quote" },
  },
  products: {
    eyebrow: "What we source",
    title: (
      <>
        Industrial materials
        <br />
        we source
      </>
    ),
    items: [
      {
        name: "Industrial Fabrics",
        body: "Tarpaulin and industrial-grade fabrics for various manufacturing applications.",
        icon: "box",
        productId: "tarpaulin",
      },
      {
        name: "Machinery & Equipment",
        body: "Industrial machinery and production equipment for manufacturing.",
        icon: "factory",
      },
      {
        name: "Raw Materials",
        body: "High-quality raw materials and components for production needs.",
        icon: "warehouse",
      },
      {
        name: "Chemicals & Compounds",
        body: "Industrial chemicals and specialty compounds for manufacturing.",
        icon: "scale",
      },
      {
        name: "Tools & Hardware",
        body: "Hand tools, hardware, and manufacturing tools for your operations.",
        icon: "clipboard",
      },
      {
        name: "Electronic Components",
        body: "Electronic parts and components for manufacturing and assembly.",
        icon: "spark",
      },
    ],
  },
  benefits: {
    title: (
      <>
        Why manufacturers
        <br />
        choose us
      </>
    ),
    items: [
      {
        title: "Quality Standards",
        body: "Materials that meet international industrial quality standards and certifications.",
        icon: "award",
      },
      {
        title: "Supply Chain Reliability",
        body: "Dependable supply chains that keep your production lines running.",
        icon: "truck",
      },
      {
        title: "Cost Efficiency",
        body: "Competitive pricing for bulk orders to optimize your production costs.",
        icon: "calculator",
      },
    ],
  },
  cta: {
    title: (
      <>
        Ready to source industrial
        <br />
        <span className="text-[#fa6a25]">materials?</span>
      </>
    ),
    body: "Get quality materials and equipment for your manufacturing operations.",
    primary: { label: "Request Quote", href: "/quote" },
    secondary: { label: "View Trade Routes", href: "/services/trade-routes" },
    image: "/images/v3/road-and-sea.webp",
    imageAlt: "Aerial view of a truck convoy on a forest road beside a loaded container ship",
  },
};

export default function ManufacturingPage() {
  return <IndustryPage data={data} />;
}
