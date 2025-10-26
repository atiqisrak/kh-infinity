import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Import Export Services - K.H. Infinity | Global Trade Solutions Bangladesh",
  description:
    "Professional import-export services including product sourcing, quality assurance, documentation support, market access, and trade compliance. Your trusted partner in global trade.",
  keywords:
    "import export services, trade services, global trade solutions, product sourcing, quality assurance, trade documentation, market access, K.H. Infinity, Bangladesh",
  openGraph: {
    title: "Import Export Services - K.H. Infinity | Global Trade Solutions",
    description:
      "Professional import-export services including product sourcing, quality assurance, documentation support, market access, and trade compliance. Your trusted partner in global trade.",
    images: ["/images/cover/kh1.webp"],
    url: "https://khi.com.bd/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Import Export Services - K.H. Infinity | Global Trade Solutions",
    description:
      "Professional import-export services including product sourcing, quality assurance, documentation support, market access, and trade compliance. Your trusted partner in global trade.",
    images: ["/images/cover/kh1.webp"],
  },
};

export default function ServicesPage() {
  return (
    <div>
      {/* Services Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6 text-gray-800">
            Our Services
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Connecting global markets through professional import and export
            services, ensuring quality products and reliable partnerships. We
            handle everything from{" "}
            <Link
              href="/products/sunflower-oil"
              className="text-orange-500 hover:text-orange-600 font-semibold"
            >
              cooking oils
            </Link>{" "}
            to{" "}
            <Link
              href="/products/potato"
              className="text-orange-500 hover:text-orange-600 font-semibold"
            >
              fresh produce
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Import Services */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8">Import Services</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="text-orange-500 text-4xl mb-4">
                  <i className="fas fa-ship"></i>
                </div>
                <h4 className="text-xl font-bold mb-4">Global Sourcing</h4>
                <p className="text-gray-600 mb-4">
                  Access our extensive network of verified suppliers across
                  Asia, Europe, and the Americas. We handle everything from
                  supplier verification to quality control for products like{" "}
                  <Link
                    href="/products/sunflower-oil"
                    className="text-orange-500 hover:text-orange-600 font-semibold"
                  >
                    sunflower oil
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/products/milk-powder"
                    className="text-orange-500 hover:text-orange-600 font-semibold"
                  >
                    milk powder
                  </Link>
                  .
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Supplier verification
                  </li>
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Quality inspection
                  </li>
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Price negotiation
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="text-orange-500 text-4xl mb-4">
                  <i className="fas fa-file-contract"></i>
                </div>
                <h4 className="text-xl font-bold mb-4">
                  Documentation & Compliance
                </h4>
                <p className="text-gray-600 mb-4">
                  Expert handling of all import documentation and compliance
                  requirements, ensuring smooth customs clearance.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Import licenses
                  </li>
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Customs documentation
                  </li>
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Regulatory compliance
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="text-orange-500 text-4xl mb-4">
                  <i className="fas fa-truck"></i>
                </div>
                <h4 className="text-xl font-bold mb-4">Logistics Management</h4>
                <p className="text-gray-600 mb-4">
                  End-to-end logistics solutions including transportation,
                  warehousing, and last-mile delivery.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Freight forwarding
                  </li>
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Warehousing
                  </li>
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Distribution
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Export Services */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8">Export Services</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="text-orange-500 text-4xl mb-4">
                  <i className="fas fa-globe"></i>
                </div>
                <h4 className="text-xl font-bold mb-4">Market Access</h4>
                <p className="text-gray-600 mb-4">
                  Connect with international buyers and expand your market reach
                  through our established network.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Market research
                  </li>
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Buyer connections
                  </li>
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Trade shows
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="text-orange-500 text-4xl mb-4">
                  <i className="fas fa-box"></i>
                </div>
                <h4 className="text-xl font-bold mb-4">Product Preparation</h4>
                <p className="text-gray-600 mb-4">
                  Complete product preparation services meeting international
                  standards and requirements. We ensure quality for our{" "}
                  <Link
                    href="/products/potato"
                    className="text-orange-500 hover:text-orange-600 font-semibold"
                  >
                    potato exports
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/products/handicrafts"
                    className="text-orange-500 hover:text-orange-600 font-semibold"
                  >
                    handicrafts
                  </Link>
                  .
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Quality control
                  </li>
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Packaging
                  </li>
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Labeling
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="text-orange-500 text-4xl mb-4">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4 className="text-xl font-bold mb-4">Trade Finance</h4>
                <p className="text-gray-600 mb-4">
                  Flexible trade finance solutions to support your export
                  operations.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Letter of credit
                  </li>
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Export financing
                  </li>
                  <li>
                    <i className="fas fa-check text-orange-500 mr-2"></i>
                    Risk management
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Global Network */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-8">Our Global Network</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4">Regions We Serve</h4>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      <i className="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                      South Asia
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                      Southeast Asia
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                      Middle East
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                      Europe
                    </li>
                  </ul>
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      <i className="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                      North America
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                      Africa
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                      Australia
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                      East Asia
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">
                  Key Ports & Facilities
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    <i className="fas fa-anchor text-orange-500 mr-2"></i>
                    Chittagong Port, Bangladesh
                  </li>
                  <li>
                    <i className="fas fa-warehouse text-orange-500 mr-2"></i>
                    Modern Warehousing Facilities
                  </li>
                  <li>
                    <i className="fas fa-truck-loading text-orange-500 mr-2"></i>
                    Distribution Centers
                  </li>
                  <li>
                    <i className="fas fa-building text-orange-500 mr-2"></i>
                    Regional Offices
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-orange-500 text-4xl mb-4">
                <i className="fas fa-history"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Years of Experience</h3>
              <p className="text-gray-600">
                Extensive experience in international trade
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-4xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Strong Network</h3>
              <p className="text-gray-600">
                Established relationships with global partners
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-4xl mb-4">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Focus</h3>
              <p className="text-gray-600">
                Commitment to product quality and standards
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-4xl mb-4">
                <i className="fas fa-coins"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Best value for quality products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your import/export needs. Whether you
            need{" "}
            <Link
              href="/products"
              className="text-white hover:text-gray-200 font-semibold underline"
            >
              premium products
            </Link>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-white hover:text-gray-200 font-semibold underline"
            >
              custom solutions
            </Link>
            .
          </p>
          <Link
            href="/contact"
            className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
