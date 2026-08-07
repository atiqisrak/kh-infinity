"use client";

import { useState } from "react";
import Link from "next/link";

export default function TradeRoutesPage() {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
  });

  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setShowResult(false);
  };

  const getRouteInfo = () => {
    if (formData.origin && formData.destination) {
      if (
        formData.origin === "China" &&
        formData.destination === "Bangladesh"
      ) {
        return {
          link: "/services/trade-routes/import-from-china",
          message:
            "We specialize in importing industrial products from China to Bangladesh.",
          products: ["Tarpaulin", "Industrial Equipment"],
        };
      }
      if (
        formData.origin === "Middle East" &&
        formData.destination === "Bangladesh"
      ) {
        return {
          link: "/services/trade-routes/import-from-middle-east",
          message:
            "We import premium food products from Middle East to Bangladesh.",
          products: ["Cooking Oils", "Dairy Products", "Spices"],
        };
      }
      if (
        formData.origin === "Bangladesh" &&
        formData.destination === "Middle East"
      ) {
        return {
          link: "/services/trade-routes/export-to-middle-east",
          message: "We export fresh produce and handicrafts to Middle East.",
          products: ["Potatoes", "Handicrafts", "Agricultural Products"],
        };
      }
    }
    return null;
  };

  const countries = [
    "Bangladesh",
    "China",
    "India",
    "Middle East",
    "USA",
    "UK",
    "Australia",
    "Thailand",
    "Malaysia",
    "Singapore",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-gray-900 text-white py-40"
        style={{
          backgroundImage: "url(/images/cover/kh3.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Trade Routes & Connections
          </h1>
          <p className="text-xl max-w-3xl">
            Discover our global trade network and find the right route for your
            import-export needs.
          </p>
        </div>
      </section>

      {/* Route Finder Tool */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
              Find Your Trade Route
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Select origin and destination to find available trade routes,
              products, and services.
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="origin">
                    Origin Country
                  </label>
                  <select
                    id="origin"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-500"
                  >
                    <option value="">Select origin</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="destination"
                  >
                    Destination Country
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-500"
                  >
                    <option value="">Select destination</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={!formData.origin || !formData.destination}
                className="w-full bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Find Route
              </button>
            </form>

            {showResult && getRouteInfo() && (
              <div className="mt-8 bg-green-50 border border-green-500 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Route Found!
                </h3>
                <p className="text-gray-700 mb-4">{getRouteInfo()!.message}</p>
                <div className="mb-4">
                  <strong className="text-gray-800">Products Available:</strong>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {getRouteInfo()!.products.map((product, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={getRouteInfo()!.link}
                  className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            )}

            {!formData.origin || !formData.destination ? (
              <div className="mt-8 bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  How It Works
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>
                      Select your origin and destination countries above
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>View available trade routes and products</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>
                      Get detailed information about the route and services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>Request a quote or contact us for assistance</span>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Popular Trade Routes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/services/trade-routes/import-from-china"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="relative h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <i className="fas fa-map-marked-alt text-white text-6xl opacity-80 group-hover:opacity-100 transition-opacity"></i>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors">
                  Import from China
                </h3>
                <p className="text-gray-600 mb-4">
                  Industrial products, equipment, and raw materials sourced from
                  China.
                </p>
                <div className="text-orange-500 font-semibold group-hover:text-orange-600">
                  Learn More →
                </div>
              </div>
            </Link>

            <Link
              href="/services/trade-routes/import-from-middle-east"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="relative h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <i className="fas fa-map-marked-alt text-white text-6xl opacity-80 group-hover:opacity-100 transition-opacity"></i>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors">
                  Import from Middle East
                </h3>
                <p className="text-gray-600 mb-4">
                  Premium food products and commodities from Middle Eastern
                  countries.
                </p>
                <div className="text-orange-500 font-semibold group-hover:text-orange-600">
                  Learn More →
                </div>
              </div>
            </Link>

            <Link
              href="/services/trade-routes/export-to-middle-east"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <i className="fas fa-map-marked-alt text-white text-6xl opacity-80 group-hover:opacity-100 transition-opacity"></i>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors">
                  Export to Middle East
                </h3>
                <p className="text-gray-600 mb-4">
                  Fresh produce, handicrafts, and agricultural products from
                  Bangladesh.
                </p>
                <div className="text-orange-500 font-semibold group-hover:text-orange-600">
                  Learn More →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Our Routes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Why Choose Our Trade Routes?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-route"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Established Routes
              </h3>
              <p className="text-gray-600">
                Well-established connections and partnerships across the globe
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Optimized logistics for timely delivery
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-file-invoice"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Documentation
              </h3>
              <p className="text-gray-600">
                Complete handling of all trade documentation
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-tag"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Competitive Rates
              </h3>
              <p className="text-gray-600">
                Best-in-market pricing for all routes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Help Finding Your Route?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our trade experts can help you find the best route and solution for
            your needs.
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
