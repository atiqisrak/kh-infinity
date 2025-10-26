import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Export to Middle East from Bangladesh - K.H. Infinity | Middle East Export Routes",
  description:
    "Export fresh produce, agricultural products, and handicrafts from Bangladesh to Middle East. Quality Bangladeshi products for Middle Eastern markets.",
  keywords:
    "export to Middle East, Bangladesh export, potato export, handicrafts export, Middle East trade, Bangladesh products",
  openGraph: {
    title: "Export to Middle East from Bangladesh - K.H. Infinity",
    description:
      "Export quality Bangladeshi products to Middle East markets with reliable service.",
    images: ["/images/products/potato.webp"],
    url: "https://khinfinity.com/trade-routes/export-to-middle-east",
  },
  twitter: {
    card: "summary_large_image",
    title: "Export to Middle East from Bangladesh - K.H. Infinity",
    description: "Export quality Bangladeshi products to Middle East markets.",
    images: ["/images/products/potato.webp"],
  },
};

export default function ExportToMiddleEastPage() {
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
              Export to Middle East from Bangladesh
            </h1>
            <p className="text-xl">
              Quality Bangladeshi products exported to Middle Eastern markets
              with commitment to excellence and timely delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Bangladesh to Middle East Export
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                We specialize in exporting fresh produce, agricultural products,
                and handicrafts from Bangladesh to Middle Eastern countries. Our
                strong relationships with Middle Eastern buyers ensure reliable
                market access.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                All exports are handled with care, proper packaging, and
                complete documentation to meet Middle Eastern market
                requirements.
              </p>
              <Link
                href="/quote"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Request Export Quote
              </Link>
            </div>
            <div>
              <Image
                src="/images/products/potato.webp"
                alt="Export products to Middle East"
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
            Products We Export to Middle East
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
                Premium quality potatoes protected during transport with our
                specialized packaging solutions.
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
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Handicrafts
              </h3>
              <p className="text-gray-600">
                Authentic Bangladeshi handicrafts showcasing local artistry and
                cultural heritage.
              </p>
              <Link
                href="/products/handicrafts"
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
                Agricultural Products
              </h3>
              <p className="text-gray-600">
                Fresh produce and agricultural goods sourced from local
                Bangladeshi farms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Our Export Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Quality Control
              </h3>
              <p className="text-gray-600">
                Rigorous quality checks and grading to meet export standards
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Packaging
              </h3>
              <p className="text-gray-600">
                Specialized export packaging for product protection
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Documentation
              </h3>
              <p className="text-gray-600">
                Complete export documentation and compliance
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Shipping</h3>
              <p className="text-gray-600">
                Efficient logistics and timely delivery to Middle East
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Why Export Through Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Only export-grade quality products that meet international
                standards
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Buyer Network
              </h3>
              <p className="text-gray-600">
                Established relationships with Middle Eastern buyers and
                distributors
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-box-open"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Export Support
              </h3>
              <p className="text-gray-600">
                Complete support from sourcing to final delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Export to Middle East?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with quality buyers in Middle East and grow your export
            business.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Request Export Quote
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
