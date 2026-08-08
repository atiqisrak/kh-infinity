import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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

const fmcgProducts = [
  {
    id: "sunflower-oil",
    name: "Cooking Oils",
    description:
      "Premium quality vegetable oils including sunflower oil and soybean oil for cooking and food processing.",
    icon: "fas fa-oil-can",
    link: "/products/sunflower-oil",
  },
  {
    id: "milk-powder",
    name: "Dairy Products",
    description:
      "High-quality skimmed milk powder and other dairy products for food processing and retail.",
    icon: "fas fa-milk",
    link: "/products/milk-powder",
  },
  {
    id: "sugar",
    name: "Sweeteners",
    description:
      "Refined white sugar and other sweeteners for food manufacturing and retail distribution.",
    icon: "fas fa-candy-cane",
    link: "/products/sugar",
  },
  {
    id: "pulses",
    name: "Grains & Legumes",
    description:
      "Premium pulses, lentils, chickpeas, and other legumes for retail and food processing.",
    icon: "fas fa-seedling",
    link: "/products/pulses",
  },
  {
    id: "cumin",
    name: "Spices",
    description:
      "High-quality spices including cumin and other seasonings for culinary and commercial use.",
    icon: "fas fa-pepper-hot",
    link: "/products/cumin",
  },
];

export default function FMCGPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-gray-900 text-white py-40"
        style={{
          backgroundImage: "url(/images/products/sunflower-oil.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="bg-black/60 p-8 rounded-lg max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              FMCG Import Export Solutions
            </h1>
            <p className="text-xl">
              Your trusted partner for sourcing and supplying fast-moving
              consumer goods across Bangladesh and globally.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                FMCG Trading Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                K.H. Infinity specializes in import and export of FMCG products,
                serving food manufacturers, retailers, distributors, and
                wholesalers across Bangladesh and beyond.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our FMCG division focuses on ensuring consistent supply,
                maintaining international quality standards, and providing
                competitive pricing for high-volume trade.
              </p>
              <Link
                href="/quote"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Request FMCG Quote
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  100+
                </h3>
                <p className="text-gray-700 font-semibold">FMCG Products</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  24hr
                </h3>
                <p className="text-gray-700 font-semibold">Response Time</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">15+</h3>
                <p className="text-gray-700 font-semibold">Source Countries</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">99%</h3>
                <p className="text-gray-700 font-semibold">Quality Pass Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our FMCG Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Our FMCG Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fmcgProducts.map((product) => (
              <Link
                key={product.id}
                href={product.link}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 group"
              >
                <div className="text-orange-500 text-5xl mb-4">
                  <i className={product.icon}></i>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-4 text-orange-500 font-semibold group-hover:text-orange-600">
                  View Details →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why FMCG Businesses Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Why FMCG Businesses Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Quality Compliance
              </h3>
              <p className="text-gray-600">
                All our FMCG products meet international quality standards (ISO
                22000, HACCP) and food safety regulations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Reliable Supply Chain
              </h3>
              <p className="text-gray-600">
                Consistent delivery schedules and inventory management to keep
                your FMCG operations running smoothly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-coins"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Competitive Pricing
              </h3>
              <p className="text-gray-600">
                Best-in-market pricing for bulk FMCG orders, helping you
                maintain your profit margins.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-file-contract"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Complete Documentation
              </h3>
              <p className="text-gray-600">
                We handle all import/export documentation, customs clearance,
                and regulatory compliance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-warehouse"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Flexible Packaging
              </h3>
              <p className="text-gray-600">
                Custom packaging options to meet your specific FMCG product
                requirements and brand standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Dedicated Support
              </h3>
              <p className="text-gray-600">
                24/7 support team ready to assist with any FMCG trade inquiries
                or issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FMCG Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Our FMCG Import-Export Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Inquiry & Quote
              </h3>
              <p className="text-gray-600">
                Submit your FMCG requirements and receive a detailed quote
                within 24 hours.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Order Confirmation
              </h3>
              <p className="text-gray-600">
                Review and approve the quote, sign the purchase order.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Sourcing & Quality Check
              </h3>
              <p className="text-gray-600">
                We source products, conduct quality inspections, and prepare
                documentation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Delivery</h3>
              <p className="text-gray-600">
                Shipment arranged, customs cleared, and products delivered to
                your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Source FMCG Products?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get competitive pricing on FMCG imports and exports. From cooking
            oils to dairy products, we&apos;ve got you covered.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Request FMCG Quote
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
