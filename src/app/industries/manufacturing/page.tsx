import { Metadata } from "next";
import Link from "next/link";

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

export default function ManufacturingPage() {
  return (
    <div>
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
              Manufacturing & Industrial Solutions
            </h1>
            <p className="text-xl">
              Industrial raw materials and supplies for manufacturing
              businesses. Source quality materials and equipment to support your
              production needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Industrial Trade Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                We support manufacturing businesses by sourcing quality raw
                materials, equipment, and supplies from trusted international
                suppliers. Our focus on quality and reliability helps keep your
                production lines running efficiently.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From industrial materials to specialized equipment, we handle
                bulk procurement with competitive pricing and dependable supply
                chains.
              </p>
              <Link
                href="/quote"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Request Industrial Quote
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  Bulk
                </h3>
                <p className="text-gray-700 font-semibold">Procurement</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  Quality
                </h3>
                <p className="text-gray-700 font-semibold">Guaranteed</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  Global
                </h3>
                <p className="text-gray-700 font-semibold">Sourcing</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  Efficient
                </h3>
                <p className="text-gray-700 font-semibold">Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Industrial Materials We Source
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-tshirt"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Industrial Fabrics
              </h3>
              <p className="text-gray-600">
                Tarpaulin and industrial-grade fabrics for various manufacturing
                applications.
              </p>
              <Link
                href="/products/tarpaulin"
                className="mt-4 inline-block text-orange-500 hover:text-orange-600 font-semibold"
              >
                View Product →
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
                Industrial machinery and production equipment for manufacturing.
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
                High-quality raw materials and components for production needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-flask"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Chemicals & Compounds
              </h3>
              <p className="text-gray-600">
                Industrial chemicals and specialty compounds for manufacturing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-screwdriver"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Tools & Hardware
              </h3>
              <p className="text-gray-600">
                Hand tools, hardware, and manufacturing tools for your
                operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-microchip"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Electronic Components
              </h3>
              <p className="text-gray-600">
                Electronic parts and components for manufacturing and assembly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Why Manufacturers Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Quality Standards
              </h3>
              <p className="text-gray-600">
                Materials that meet international industrial quality standards
                and certifications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-truck"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Supply Chain Reliability
              </h3>
              <p className="text-gray-600">
                Dependable supply chains that keep your production lines
                running.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Cost Efficiency
              </h3>
              <p className="text-gray-600">
                Competitive pricing for bulk orders to optimize your production
                costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Source Industrial Materials?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get quality materials and equipment for your manufacturing
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
              href="/trade-routes"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              View Trade Routes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
