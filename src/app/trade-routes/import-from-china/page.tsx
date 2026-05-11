import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Import from China to Bangladesh - K.H. Infinity | China Trade Routes",
  description:
    "Professional import services from China to Bangladesh. We source industrial products, equipment, and raw materials with quality assurance and efficient logistics.",
  keywords:
    "import from China, China to Bangladesh, industrial products, trade route, China imports, Bangladesh import, industrial equipment",
  alternates: {
    canonical: "https://khi.com.bd/trade-routes/import-from-china",
  },
  openGraph: {
    title: "Import from China to Bangladesh - K.H. Infinity",
    description:
      "Professional import services from China to Bangladesh with quality assurance.",
    images: ["/images/products/tarpaulin.webp"],
    url: "https://khi.com.bd/trade-routes/import-from-china",
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

export default function ImportFromChinaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-gray-900 text-white py-40"
        style={{
          backgroundImage: "url(/images/products/tarpaulin.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="bg-black/60 p-8 rounded-lg max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Import from China to Bangladesh
            </h1>
            <p className="text-xl">
              Leverage our expertise in China-Bangladesh trade routes for
              reliable industrial product imports.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                China-Bangladesh Trade Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                We specialize in importing industrial products, equipment, and
                raw materials from China to Bangladesh. Our established network
                and expertise ensure quality sourcing and smooth logistics.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With 5+ years of experience in China-Bangladesh trade, we handle
                everything from supplier verification to final delivery at your
                doorstep in Bangladesh.
              </p>
              <Link
                href="/quote"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Request China Import Quote
              </Link>
            </div>
            <div>
              <Image
                src="/images/products/tarpaulin.webp"
                alt="Industrial products from China"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Available */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Products We Import from China
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-tshirt"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Industrial Materials
              </h3>
              <p className="text-gray-600">
                Tarpaulin, fabrics, and industrial-grade materials for various
                applications.
              </p>
              <Link
                href="/products/tarpaulin"
                className="mt-4 inline-block text-orange-500 hover:text-orange-600 font-semibold"
              >
                View Tarpaulin →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Machinery & Equipment
              </h3>
              <p className="text-gray-600">
                Industrial machinery, tools, and equipment for manufacturing and
                production.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-boxes"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Raw Materials
              </h3>
              <p className="text-gray-600">
                High-quality raw materials and components for various
                manufacturing needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-flask"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Chemicals & Plastics
              </h3>
              <p className="text-gray-600">
                Industrial chemicals, plastic products, and specialty materials.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-laptop"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Electronics & Components
              </h3>
              <p className="text-gray-600">
                Electronic components, devices, and related products.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Tools & Hardware
              </h3>
              <p className="text-gray-600">
                Hand tools, hardware, and construction supplies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Our China Import Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Supplier Verification
              </h3>
              <p className="text-gray-600">
                We verify and audit Chinese suppliers to ensure quality
                standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Quality Inspection
              </h3>
              <p className="text-gray-600">
                Pre-shipment inspection in China by our quality team.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Shipping & Customs
              </h3>
              <p className="text-gray-600">
                We handle all shipping, documentation, and customs clearance.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Delivery</h3>
              <p className="text-gray-600">
                Final delivery to your warehouse or designated location in
                Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Typical Timeline
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-semibold mr-4 whitespace-nowrap">
                  Days 1-3
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Inquiry Processing
                  </h3>
                  <p className="text-gray-600">
                    Receive your inquiry, prepare quote, and confirm order
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-semibold mr-4 whitespace-nowrap">
                  Days 4-10
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Sourcing & Production
                  </h3>
                  <p className="text-gray-600">
                    Supplier coordination, production monitoring
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-semibold mr-4 whitespace-nowrap">
                  Days 11-14
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Quality Check
                  </h3>
                  <p className="text-gray-600">
                    Pre-shipment inspection and quality verification
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-semibold mr-4 whitespace-nowrap">
                  Days 15-30
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Shipping & Delivery
                  </h3>
                  <p className="text-gray-600">
                    Container booking, shipping, customs, and final delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Why Choose Us for China Imports?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Rigorous quality control and inspection at source in China
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-route"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Established Network
              </h3>
              <p className="text-gray-600">
                Trusted relationships with Chinese suppliers and manufacturers
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Documentation
              </h3>
              <p className="text-gray-600">
                Complete handling of all import documentation and customs
                clearance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Import from China?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get competitive pricing and reliable service for your
            China-Bangladesh import needs.
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
