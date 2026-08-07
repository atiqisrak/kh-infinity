import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "About Us - K.H. Infinity | Leading Import Export Company in Bangladesh",
  description:
    "Learn about K.H. Infinity's journey as a trusted import-export company in Bangladesh. Discover our mission, values, and commitment to excellence in global trade.",
  keywords:
    "K.H. Infinity, import export company Bangladesh, global trade partner, international business, trade certifications, customs expertise",
  alternates: {
    canonical: "https://khi.com.bd/about",
  },
  openGraph: {
    title: "About K.H. Infinity - Your Trusted Global Trade Partner",
    description:
      "Learn about K.H. Infinity's journey as a trusted import-export company in Bangladesh. Discover our mission, values, and commitment to excellence in global trade.",
    images: ["/images/about/about-banner.webp"],
    url: "https://khi.com.bd/about",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About K.H. Infinity - Your Trusted Global Trade Partner",
    description:
      "Learn about K.H. Infinity's journey as a trusted import-export company in Bangladesh. Discover our mission, values, and commitment to excellence in global trade.",
    images: ["/images/about/about-banner.webp"],
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-40 overflow-hidden">
        <Image
          src="/images/about/about-banner.webp"
          alt="Container cargo ship at sunset, representing K.H. Infinity global trade operations"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About K.H. Infinity</h1>
          <p className="text-xl max-w-2xl">
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
                Founded in 2018, K.H. Infinity operates from Tikatuli, Dhaka—within
                reach of the historic Khatunganj market, established in the 1850s and
                known as the &ldquo;Wall Street of the East.&rdquo; Named after Khatun
                Bibi, this trade network connects Bangladesh to global commerce via
                the Karnaphuli River and the Chaktai, Rajakhali, and Badarshah
                canals. KHI provides a formalized, contract-backed alternative to
                informal trust-only trading.
              </p>
              <p className="text-gray-600 mb-4">
                We are a <strong>direct B2B importer and wholesale distributor</strong>—we
                own physical inventory and manage NBR customs clearance, TTI
                transparency, and BSTI compliance as internal capabilities, not as a
                third-party logistics facilitator.
              </p>
              <p className="text-gray-600 mb-4">
                Our commitment to quality, reliability, and customer satisfaction has
                helped us build strong relationships with partners worldwide. Explore
                our{" "}
                <Link href="/imports" className="text-orange-500 hover:text-orange-600 font-semibold">
                  import operations
                </Link>
                ,{" "}
                <Link href="/exports" className="text-orange-500 hover:text-orange-600 font-semibold">
                  export programmes
                </Link>
                , and{" "}
                <Link href="/services" className="text-orange-500 hover:text-orange-600 font-semibold">
                  internal trade services
                </Link>
                .
              </p>
              <p className="text-gray-600">
                Today, we serve clients across 15+ countries, facilitating
                seamless trade operations and delivering premium products to
                meet diverse market demands.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hubs/imports-hero.webp"
                  alt="Shipping containers at port representing KHI import and export logistics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
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
