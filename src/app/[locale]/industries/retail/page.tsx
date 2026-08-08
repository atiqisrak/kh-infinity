import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Retail & E-commerce Import Export Solutions - K.H. Infinity | Trading for Retailers",
  description:
    "Supply chain solutions for retail businesses and e-commerce platforms. Source quality products at competitive prices with reliable delivery for your retail operations.",
  keywords:
    "retail import export, e-commerce sourcing, retail supply chain, online retail, retail trading Bangladesh, retail products",
  alternates: {
    canonical: "https://khi.com.bd/industries/retail",
  },
  openGraph: {
    title: "Retail & E-commerce Import Export Solutions - K.H. Infinity",
    description:
      "Supply chain solutions for retail businesses with quality products and reliable delivery.",
    images: ["/images/products/handicrafts.webp"],
    url: "https://khi.com.bd/industries/retail",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail & E-commerce Solutions - K.H. Infinity",
    description: "Supply chain solutions for retail businesses.",
    images: ["/images/products/handicrafts.webp"],
  },
};

export default function RetailPage() {
  return (
    <div>
      <section
        className="bg-gray-900 text-white py-40"
        style={{
          backgroundImage: "url(/images/products/handicrafts.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="bg-black/60 p-8 rounded-lg max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Retail & E-commerce Solutions
            </h1>
            <p className="text-xl">
              Complete supply chain solutions for retail businesses and online
              platforms. Source quality products at competitive prices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Retail Trade Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                We understand the unique needs of retail and e-commerce
                businesses. Our expertise helps retailers source quality
                products at competitive prices, ensuring your profit margins
                while delivering value to your customers.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From consumer goods to unique products, we help retailers expand
                their inventory and connect with international suppliers.
              </p>
              <Link
                href="/quote"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Request Retail Quote
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  Bulk
                </h3>
                <p className="text-gray-700 font-semibold">Orders</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">MOQ</h3>
                <p className="text-gray-700 font-semibold">Flexible</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  Fast
                </h3>
                <p className="text-gray-700 font-semibold">Delivery</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  24/7
                </h3>
                <p className="text-gray-700 font-semibold">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Retail Products We Handle
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-palette"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Handicrafts & Arts
              </h3>
              <p className="text-gray-600">
                Authentic handicrafts and cultural products for retail and gift
                shops.
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
                <i className="fas fa-shopping-basket"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Food Products
              </h3>
              <p className="text-gray-600">
                Cooking oils, dairy, sugar, and pulses for retail distribution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Fresh Produce
              </h3>
              <p className="text-gray-600">
                Premium fruits, vegetables, and agricultural products for
                retail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Benefits for Retailers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-tags"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Competitive Pricing
              </h3>
              <p className="text-gray-600">
                Best-in-market pricing that helps you maintain profit margins
                and stay competitive.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Fast Turnaround
              </h3>
              <p className="text-gray-600">
                Quick processing and delivery to keep your inventory fresh and
                meet customer demand.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                Retail-ready products that meet international quality standards
                for your customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Source for Your Retail Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get quality products at competitive prices for your retail or
            e-commerce platform.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Request Retail Quote
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
