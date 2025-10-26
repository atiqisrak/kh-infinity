import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Hospitality & Food Service Solutions - K.H. Infinity | Hotel & Restaurant Supplies",
  description:
    "Bulk food products and supplies for hotels, restaurants, and catering businesses. Complete sourcing for cooking ingredients and specialty food items.",
  keywords:
    "hospitality supplies, food service, hotel supplies, restaurant sourcing, catering supplies, bulk food import Bangladesh",
  openGraph: {
    title: "Hospitality & Food Service Solutions - K.H. Infinity",
    description:
      "Complete sourcing solutions for hotels, restaurants, and catering businesses.",
    images: ["/images/products/milk-powder.webp"],
    url: "https://khinfinity.com/industries/hospitality",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitality & Food Service Solutions - K.H. Infinity",
    description: "Complete sourcing solutions for hospitality businesses.",
    images: ["/images/products/milk-powder.webp"],
  },
};

export default function HospitalityPage() {
  return (
    <div>
      <section
        className="bg-gray-900 text-white py-40"
        style={{
          backgroundImage: "url(/images/products/milk-powder.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="bg-black/60 p-8 rounded-lg max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Hospitality & Food Service Solutions
            </h1>
            <p className="text-xl">
              Bulk food products and supplies for hotels, restaurants, and
              catering businesses. Quality ingredients for your food service
              operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Hospitality Trade Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                We understand the critical needs of hospitality and food service
                businesses. From bulk ingredients to specialty items, we provide
                consistent quality products that help your operations run
                smoothly.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our network ensures reliable supply chains for hotels,
                restaurants, cafes, and catering services, with competitive
                pricing for bulk orders.
              </p>
              <Link
                href="/quote"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Request Hospitality Quote
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
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  Consistent
                </h3>
                <p className="text-gray-700 font-semibold">Supply</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  Food
                </h3>
                <p className="text-gray-700 font-semibold">Safety</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  Trust
                </h3>
                <p className="text-gray-700 font-semibold">Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Hospitality Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-oil-can"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Cooking Oils
              </h3>
              <p className="text-gray-600">
                Premium cooking oils including sunflower, soyabean, and palm
                oils for restaurants.
              </p>
              <Link
                href="/products/sunflower-oil"
                className="mt-4 inline-block text-orange-500 hover:text-orange-600 font-semibold"
              >
                View Products →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-cheese"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Dairy Products
              </h3>
              <p className="text-gray-600">
                High-quality milk powder and dairy products for food service
                operations.
              </p>
              <Link
                href="/products/milk-powder"
                className="mt-4 inline-block text-orange-500 hover:text-orange-600 font-semibold"
              >
                View Product →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-candy-cane"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sugar</h3>
              <p className="text-gray-600">
                Refined sugar and sweeteners for baking and beverage
                preparation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-pepper-hot"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Spices & Seasonings
              </h3>
              <p className="text-gray-600">
                Premium spices including cumin and other seasonings for
                authentic flavors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-seedling"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Grains & Pulses
              </h3>
              <p className="text-gray-600">
                High-quality pulses, chickpeas, and legumes for diverse menu
                offerings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-fish"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Fresh Produce
              </h3>
              <p className="text-gray-600">
                Premium potatoes and fresh produce for your kitchen operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Why Hospitality Businesses Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Food Safety Compliance
              </h3>
              <p className="text-gray-600">
                All products meet international food safety standards and
                certifications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Reliable Delivery
              </h3>
              <p className="text-gray-600">
                Consistent supply schedules that keep your operations running
                smoothly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-coins"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Bulk Pricing
              </h3>
              <p className="text-gray-600">
                Competitive pricing for bulk orders to support your bottom line.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Supply Your Hospitality Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get quality ingredients and supplies for your hotel, restaurant, or
            catering operations.
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
