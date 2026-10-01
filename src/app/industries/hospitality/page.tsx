import { Metadata } from "next";
import IndustryPage, { type IndustryData } from "@/components/v3/industries/IndustryPage";

export const metadata: Metadata = {
  title:
    "Hospitality & Food Service Solutions - K.H. Infinity | Hotel & Restaurant Supplies",
  description:
    "Bulk food products and supplies for hotels, restaurants, and catering businesses. Complete sourcing for cooking ingredients and specialty food items.",
  keywords:
    "hospitality supplies, food service, hotel supplies, restaurant sourcing, catering supplies, bulk food import Bangladesh",
  alternates: {
    canonical: "https://khi.com.bd/industries/hospitality",
  },
  openGraph: {
    title: "Hospitality & Food Service Solutions - K.H. Infinity",
    description:
      "Complete sourcing solutions for hotels, restaurants, and catering businesses.",
    images: ["/images/products/milk-powder.webp"],
    url: "https://khi.com.bd/industries/hospitality",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitality & Food Service Solutions - K.H. Infinity",
    description: "Complete sourcing solutions for hospitality businesses.",
    images: ["/images/products/milk-powder.webp"],
  },
};

const data: IndustryData = {
  slug: "hospitality",
  hero: {
    eyebrow: "Hotels, restaurants & catering",
    title: (
      <>
        Hospitality &amp; food service <span className="text-[#fa6a25]">solutions</span>
      </>
    ),
    lead: "Bulk food products and supplies for hotels, restaurants, and catering businesses. Quality ingredients for your food service operations.",
    images: [
      "/images/products/cumin-2.jpg",
      "/images/products/sunflower-oil-3.jpg",
      "/images/products/milk-powder.webp",
      "/images/products/chickpeas-2.jpg",
    ],
  },
  expertise: {
    title: (
      <>
        Hospitality trade
        <br />
        expertise
      </>
    ),
    paragraphs: [
      "We understand the critical needs of hospitality and food service businesses. From bulk ingredients to specialty items, we provide consistent quality products that help your operations run smoothly.",
      "Our network ensures reliable supply chains for hotels, restaurants, cafes, and catering services, with competitive pricing for bulk orders.",
    ],
    image: "/images/products/soyabean-oil-3.jpg",
    imageAlt: "Cooking oil in a glass bottle",
    highlights: [
      { value: "Bulk", label: "Orders" },
      { value: "Consistent", label: "Supply" },
      { value: "Food", label: "Safety" },
      { value: "Trust", label: "Guaranteed" },
    ],
    quote: { label: "Request Hospitality Quote", href: "/quote" },
  },
  products: {
    eyebrow: "What we supply",
    title: (
      <>
        Hospitality
        <br />
        products
      </>
    ),
    items: [
      {
        name: "Cooking Oils",
        body: "Premium cooking oils including sunflower, soyabean, and palm oils for restaurants.",
        icon: "leaf",
        productId: "sunflower-oil",
        links: [{ label: "View Products", href: "/products/sunflower-oil" }],
      },
      {
        name: "Dairy Products",
        body: "High-quality milk powder and dairy products for food service operations.",
        icon: "box",
        productId: "milk-powder",
      },
      {
        name: "Sugar",
        body: "Refined sugar and sweeteners for baking and beverage preparation.",
        icon: "box",
      },
      {
        name: "Spices & Seasonings",
        body: "Premium spices including cumin and other seasonings for authentic flavors.",
        icon: "spark",
      },
      {
        name: "Grains & Pulses",
        body: "High-quality pulses, chickpeas, and legumes for diverse menu offerings.",
        icon: "sprout",
      },
      {
        name: "Fresh Produce",
        body: "Premium potatoes and fresh produce for your kitchen operations.",
        icon: "chef",
      },
    ],
  },
  benefits: {
    title: (
      <>
        Why hospitality businesses
        <br />
        choose us
      </>
    ),
    items: [
      {
        title: "Food Safety Compliance",
        body: "All products meet international food safety standards and certifications.",
        icon: "shield",
      },
      {
        title: "Reliable Delivery",
        body: "Consistent supply schedules that keep your operations running smoothly.",
        icon: "clock",
      },
      {
        title: "Bulk Pricing",
        body: "Competitive pricing for bulk orders to support your bottom line.",
        icon: "chart",
      },
    ],
  },
  cta: {
    title: (
      <>
        Ready to supply your
        <br />
        hospitality <span className="text-[#fa6a25]">business?</span>
      </>
    ),
    body: "Get quality ingredients and supplies for your hotel, restaurant, or catering operations.",
    primary: { label: "Request Quote", href: "/quote" },
    secondary: { label: "Contact Us", href: "/contact" },
  },
};

export default function HospitalityPage() {
  return <IndustryPage data={data} />;
}
