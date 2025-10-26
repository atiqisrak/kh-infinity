import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Agriculture & Food Processing Solutions - K.H. Infinity | Agricultural Trading",
  description:
    "Agricultural products and processing materials for the agriculture and food processing industry. Export fresh produce and import essential inputs.",
  keywords:
    "agricultural trading, food processing, agricultural export, fresh produce, Bangladesh agricultural products, potato export, pulses import",
  openGraph: {
    title: "Agriculture & Food Processing Solutions - K.H. Infinity",
    description:
      "Agricultural products and processing materials for food processing industry.",
    images: ["/images/products/potato.webp"],
    url: "https://khinfinity.com/industries/agriculture",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agriculture & Food Processing Solutions - K.H. Infinity",
    description: "Agricultural products for food processing industry.",
    images: ["/images/products/potato.webp"],
  },
};

export default function AgriculturePage() {
  return (
    <div>
      <section
        className="bg-gray-900 text-white py-40"
        style={{
          backgroundImage: "url(/images/products/potato.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="bg-black/60 p-8 rounded-lg max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Agriculture & Food Processing Solutions
            </h1>
            <p className="text-xl">
              Agricultural products and processing materials. We export fresh
              produce and import essential inputs for the agriculture and food
              processing industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Agriculture Trade Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                We support the agriculture and food processing industry by
                exporting premium fresh produce and importing essential inputs
                for production and processing operations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From farm-fresh potatoes to imported pulses and processing
                materials, we ensure quality from field to factory.
              </p>
              <Link
                href="/quote"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Request Agriculture Quote
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  Fresh
                </h3>
                <p className="text-gray-700 font-semibold">Quality</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  Export
                </h3>
                <p className="text-gray-700 font-semibold">Ready</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  Trust
                </h3>
                <p className="text-gray-700 font-semibold">Built</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  Global
                </h3>
                <p className="text-gray-700 font-semibold">Network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Agricultural Products We Handle
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-seedling"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Fresh Potatoes
              </h3>
              <p className="text-gray-600">
                Premium quality potatoes exported from local Bangladesh farms.
              </p>
              <Link
                href="/products/potato"
                className="mt-4 inline-block text-orange-500 hover:text-orange-600 font-semibold"
              >
                View Product →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Pulses & Legumes
              </h3>
              <p className="text-gray-600">
                Imported high-quality pulses including lentils, chickpeas, and
                beans.
              </p>
              <Link
                href="/products/pulses"
                className="mt-4 inline-block text-orange-500 hover:text-orange-600 font-semibold"
              >
                View Product →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-wheat-awn"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Grains & Cereals
              </h3>
              <p className="text-gray-600">
                Premium grains and cereals for food processing and retail.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-pepper-hot"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Spices</h3>
              <p className="text-gray-600">
                Imported spices including cumin and other seasonings for
                processing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-layer-group"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Packaging Materials
              </h3>
              <p className="text-gray-600">
                Tarpaulin and protective packaging for agricultural export.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-tractor"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Farming Inputs
              </h3>
              <p className="text-gray-600">
                Essential inputs and materials for agricultural production.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Why Agricultural Businesses Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Only the finest agricultural products that meet export and
                processing standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Protected Transport
              </h3>
              <p className="text-gray-600">
                Specialized packaging and transport to ensure product quality
                during shipping.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Trusted Partners
              </h3>
              <p className="text-gray-600">
                Strong relationships with farmers, processors, and international
                buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Source Agricultural Products?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get fresh produce for export or quality inputs for your processing
            operations.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Request Quote
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
