import { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title:
    "Request a Quote - K.H. Infinity | Import Export Trading Company Bangladesh",
  description:
    "Request a quote for your import-export needs. Get competitive pricing on premium products including cooking oils, milk powder, sugar, pulses, and more. Fast response within 24 hours.",
  keywords:
    "request quote, import export quote, trade quote, shipping quote, product quote, K.H. Infinity, Bangladesh",
  alternates: {
    canonical: "https://khi.com.bd/quote",
  },
  openGraph: {
    title: "Request a Quote - K.H. Infinity | Import Export Company",
    description:
      "Request a quote for your import-export needs. Get competitive pricing on premium products. Fast response within 24 hours.",
    images: ["/images/cover/kh1.webp"],
    url: "https://khi.com.bd/quote",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote - K.H. Infinity",
    description:
      "Request a quote for your import-export needs. Get competitive pricing on premium products.",
    images: ["/images/cover/kh1.webp"],
  },
};

export default function QuotePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-gray-900 text-white py-40"
        style={{
          backgroundImage: "url(/images/cover/kh1.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Request a Quote</h1>
          <p className="text-xl max-w-3xl">
            Get competitive pricing and reliable delivery for your import-export
            needs. Complete the form below and we&apos;ll respond within 24
            hours.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Form */}
            <div className="md:col-span-2">
              <QuoteForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Why Request a Quote?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>Competitive pricing guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>Fast 24-hour response time</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>Customized solutions for your needs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Our Products
                </h3>
                <p className="text-gray-600 mb-4">
                  We specialize in importing and exporting:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-orange-500 mt-1 mr-3"></i>
                    <Link
                      href="/products/sunflower-oil"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Cooking Oils
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-orange-500 mt-1 mr-3"></i>
                    <Link
                      href="/products/milk-powder"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Dairy Products
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-orange-500 mt-1 mr-3"></i>
                    <Link
                      href="/products/potato"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Agricultural Products
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-orange-500 mt-1 mr-3"></i>
                    <Link
                      href="/products/pulses"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Grains & Legumes
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-orange-500 mt-1 mr-3"></i>
                    <Link
                      href="/products/handicrafts"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Handicrafts
                    </Link>
                  </li>
                </ul>
                <Link
                  href="/products"
                  className="block mt-4 text-orange-500 hover:text-orange-600 font-semibold"
                >
                  View All Products →
                </Link>
              </div>

              <div className="bg-white border-2 border-orange-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Need Help?
                </h3>
                <p className="text-gray-600 mb-4">
                  Have questions about our services or products?
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-orange-500 text-4xl mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Response</h3>
              <p className="text-gray-600">Quote delivered within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-4xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Partner</h3>
              <p className="text-gray-600">
                5+ years of experience in global trade
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-4xl mb-4">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="text-gray-600">International quality standards</p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-4xl mb-4">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Global Network</h3>
              <p className="text-gray-600">Serving 15+ countries worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
