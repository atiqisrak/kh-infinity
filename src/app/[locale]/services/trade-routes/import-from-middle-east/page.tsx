import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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

export default function ImportFromMiddleEastPage() {
  return (
    <div>
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
              Import from Middle East to Bangladesh
            </h1>
            <p className="text-xl">
              Premium food products and commodities sourced from Middle Eastern
              countries with quality assurance and Halal certification.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Middle East Import Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                We specialize in importing premium food products from Middle
                East to Bangladesh. Our focus includes cooking oils, dairy
                products, spices, and other high-quality commodities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                All our Middle East imports come with proper Halal certification
                and international quality standards to meet your business
                requirements.
              </p>
              <Link
                href="/quote"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Request Middle East Import Quote
              </Link>
            </div>
            <div>
              <Image
                src="/images/products/sunflower-oil.webp"
                alt="Food products from Middle East"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Products We Import from Middle East
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-oil-can"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Cooking Oils
              </h3>
              <p className="text-gray-600">
                Premium vegetable oils including sunflower, palm, and olive
                oils.
              </p>
              <Link
                href="/products/sunflower-oil"
                className="mt-4 inline-block text-orange-500 hover:text-orange-600 font-semibold"
              >
                View Products →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-cheese"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Dairy Products
              </h3>
              <p className="text-gray-600">
                High-quality dairy products including milk powder, cheese, and
                cream.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-pepper-hot"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Spices & Seasonings
              </h3>
              <p className="text-gray-600">
                Authentic Middle Eastern spices and seasonings for culinary use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Why Import from Middle East?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Halal Certified
              </h3>
              <p className="text-gray-600">
                All products come with proper Halal certification for Muslim
                markets
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                High-quality products meeting international standards
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-tags"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Competitive Pricing
              </h3>
              <p className="text-gray-600">
                Best-in-market pricing for premium Middle Eastern products
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Import from Middle East?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get premium food products and commodities from Middle East to
            Bangladesh.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Request Import Quote
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
