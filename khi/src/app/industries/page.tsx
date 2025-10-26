import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Industries We Serve - K.H. Infinity | Import Export Trading Solutions",
  description:
    "K.H. Infinity serves diverse industries with specialized import-export solutions. Our expertise spans FMCG, retail, hospitality, manufacturing, and agriculture sectors.",
  keywords:
    "industries served, FMCG import export, retail trading, hospitality supplies, manufacturing sourcing, agricultural products, Bangladesh trade",
  openGraph: {
    title: "Industries We Serve - K.H. Infinity",
    description:
      "Specialized import-export solutions for FMCG, retail, hospitality, manufacturing, and agriculture industries.",
    images: ["/images/cover/kh1.webp"],
    url: "https://khinfinity.com/industries",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve - K.H. Infinity",
    description: "Specialized import-export solutions for multiple industries.",
    images: ["/images/cover/kh1.webp"],
  },
};

export default function IndustriesPage() {
  const industries = [
    {
      name: "FMCG (Fast-Moving Consumer Goods)",
      description:
        "Complete sourcing solutions for food products, beverages, and household essentials. Our FMCG division specializes in cooking oils, dairy products, sugar, pulses, and spices.",
      image: "/images/products/sunflower-oil.webp",
      link: "/industries/fmcg",
      products: ["Sunflower Oil", "Milk Powder", "Sugar", "Pulses", "Cumin"],
      icon: "fas fa-shopping-cart",
    },
    {
      name: "Retail & E-commerce",
      description:
        "Supply chain solutions for retail businesses and online platforms. We help retailers source quality products at competitive prices with reliable delivery.",
      image: "/images/products/handicrafts.webp",
      link: "/industries/retail",
      products: ["Handicrafts", "Textiles", "Consumer Goods"],
      icon: "fas fa-store",
    },
    {
      name: "Hospitality & Food Service",
      description:
        "Bulk food products and supplies for hotels, restaurants, and catering businesses. We provide everything from cooking ingredients to specialty food items.",
      image: "/images/products/milk-powder.webp",
      link: "/industries/hospitality",
      products: ["Dairy Products", "Cooking Oils", "Spices"],
      icon: "fas fa-utensils",
    },
    {
      name: "Manufacturing & Industrial",
      description:
        "Industrial raw materials and supplies for manufacturing businesses. We source quality materials and equipment to support your production needs.",
      image: "/images/products/tarpaulin.webp",
      link: "/industries/manufacturing",
      products: ["Industrial Materials", "Raw Materials"],
      icon: "fas fa-industry",
    },
    {
      name: "Agriculture & Food Processing",
      description:
        "Agricultural products and processing materials. We export fresh produce and import essential inputs for the agriculture and food processing industry.",
      image: "/images/products/potato.webp",
      link: "/industries/agriculture",
      products: ["Fresh Potatoes", "Grains", "Pulses"],
      icon: "fas fa-tractor",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-gray-900 text-gray-600 py-40"
        style={{
          backgroundImage: "url(/images/cover/kh4.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl max-w-3xl">
            From FMCG to agriculture, we provide specialized import-export
            solutions tailored to your industry needs.
          </p>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Our Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have deep knowledge and experience across multiple industries,
              enabling us to provide specialized solutions that meet your unique
              requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link
                key={index}
                href={industry.link}
                className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${industry.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative text-6xl text-white opacity-80 group-hover:opacity-100 transition-opacity">
                      <i className={industry.icon}></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.products.map((product, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-orange-500 font-semibold group-hover:text-orange-600 transition-colors">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Why Industry Leaders Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Industry Expertise
              </h3>
              <p className="text-gray-600">
                Deep knowledge of industry-specific requirements, regulations,
                and market dynamics.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                Stringent quality control and compliance with international
                standards for every industry.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-users-cog"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Customized Solutions
              </h3>
              <p className="text-gray-600">
                Tailored import-export solutions that align with your industry
                needs and business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you&apos;re in FMCG, retail, hospitality, or manufacturing,
            we have the expertise to support your import-export needs.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Request a Quote
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
