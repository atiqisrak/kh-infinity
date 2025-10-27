import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "About Us - K.H. Infinity | Leading Import Export Company in Bangladesh",
  description:
    "Learn about K.H. Infinity's journey as a trusted import-export company in Bangladesh. Discover our mission, values, and commitment to excellence in global trade.",
  keywords:
    "K.H. Infinity, import export company Bangladesh, global trade partner, international business, trade certifications, customs expertise",
  openGraph: {
    title: "About K.H. Infinity - Your Trusted Global Trade Partner",
    description:
      "Learn about K.H. Infinity's journey as a trusted import-export company in Bangladesh. Discover our mission, values, and commitment to excellence in global trade.",
    images: ["/images/about-banner.jpg"],
    url: "https://khi.com.bd/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About K.H. Infinity - Your Trusted Global Trade Partner",
    description:
      "Learn about K.H. Infinity's journey as a trusted import-export company in Bangladesh. Discover our mission, values, and commitment to excellence in global trade.",
    images: ["/images/about-banner.jpg"],
  },
};

export default function AboutPage() {
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
          <h1 className="text-5xl font-bold mb-6">About K.H. Infinity</h1>
          <p className="text-xl">
            Your Trusted Partner in Global Trade Since 2018
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2018, K.H. Infinity has grown from a small trading
                company to a respected name in the global import-export
                industry. Our commitment to quality, reliability, and customer
                satisfaction has helped us build strong relationships with
                partners worldwide. We specialize in{" "}
                <Link
                  href="/products"
                  className="text-orange-500 hover:text-orange-600 font-semibold"
                >
                  premium products
                </Link>{" "}
                and{" "}
                <Link
                  href="/services"
                  className="text-orange-500 hover:text-orange-600 font-semibold"
                >
                  comprehensive services
                </Link>
                .
              </p>
              <p className="text-gray-600">
                Today, we serve clients across 15+ countries, facilitating
                seamless trade operations and delivering premium products to
                meet diverse market demands.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">5+</h3>
                <p className="text-gray-700">Years of Excellence</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">15+</h3>
                <p className="text-gray-700">Countries Served</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">70+</h3>
                <p className="text-gray-700">Successful Deliveries</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">10+</h3>
                <p className="text-gray-700">Global Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600">
                To facilitate seamless global trade by providing reliable,
                efficient, and cost-effective import-export solutions while
                maintaining the highest standards of quality and customer
                service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600">
                To become the most trusted name in international trade, known
                for our integrity, innovation, and commitment to excellence in
                connecting businesses across borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Certifications & Compliance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border p-6 rounded-lg text-center">
              <i className="fas fa-certificate text-4xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600">Quality Management System</p>
            </div>
            <div className="border p-6 rounded-lg text-center">
              <i className="fas fa-shield-alt text-4xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Trade License</h3>
              <p className="text-gray-600">Registered Import-Export Company</p>
            </div>
            <div className="border p-6 rounded-lg text-center">
              <i className="fas fa-check-circle text-4xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Customs Compliance</h3>
              <p className="text-gray-600">Authorized Economic Operator</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
