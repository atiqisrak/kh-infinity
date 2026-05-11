import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Premium Import & Export Products - K.H. Infinity | Global Trade Solutions",
  description:
    "Explore our premium range of import and export products including sunflower oil, milk powder, pulses, sugar, and more. High-quality products sourced from trusted global suppliers.",
  keywords:
    "import products, export products, sunflower oil, milk powder, pulses, sugar, chickpeas, cumin, tarpaulin, K.H. Infinity, Bangladesh trade",
  alternates: {
    canonical: "https://khi.com.bd/products",
  },
  openGraph: {
    title: "Premium Import & Export Products - K.H. Infinity",
    description:
      "Explore our premium range of import and export products including sunflower oil, milk powder, pulses, sugar, and more. High-quality products sourced from trusted global suppliers.",
    images: ["/images/cover/kh1.webp"],
    url: "https://khi.com.bd/products",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Import & Export Products - K.H. Infinity",
    description:
      "Explore our premium range of import and export products including sunflower oil, milk powder, pulses, sugar, and more. High-quality products sourced from trusted global suppliers.",
    images: ["/images/cover/kh1.webp"],
  },
};

const importProducts = [
  {
    id: "sunflower-oil",
    name: "Sunflower Seed Oil",
    image: "/images/products/sunflower-oil.webp",
    description:
      "Premium quality sunflower seed oil with high nutritional value. Perfect companion to our soybean oil for diverse cooking needs.",
    relatedProducts: ["soyabean-oil"],
  },
  {
    id: "milk-powder",
    name: "Skimmed Milk Powder",
    image: "/images/products/milk-powder.webp",
    description:
      "High-quality skimmed milk powder with excellent nutritional value and consistent quality. Great for dairy processing alongside our sugar products.",
    relatedProducts: ["sugar"],
  },
  {
    id: "pulses",
    name: "Pulses",
    image: "/images/products/pulses.webp",
    description:
      "Premium quality lentils, chickpeas, and other pulses sourced from the finest producers. Complement with our specialty chickpeas and cumin for authentic flavors.",
    relatedProducts: ["chickpeas", "cumin"],
  },
  {
    id: "tarpaulin",
    name: "Tarpaulin",
    image: "/images/products/tarpaulin.webp",
    description:
      "Durable and weather-resistant tarpaulin for various industrial and commercial applications. Essential for protecting our potato exports during transport.",
    relatedProducts: ["potato"],
  },
  {
    id: "cumin",
    name: "Cumin",
    image: "/images/products/cumin.webp",
    description:
      "Premium quality cumin with a distinct aroma and flavor, sourced from trusted global suppliers. Perfect seasoning for our chickpeas and pulses.",
    relatedProducts: ["chickpeas", "pulses"],
  },
  {
    id: "sugar",
    name: "Sugar",
    image: "/images/products/sugar.webp",
    description:
      "Premium quality sugar with a distinct aroma and flavor, sourced from trusted global suppliers. Ideal for food processing with our milk powder.",
    relatedProducts: ["milk-powder"],
  },
  {
    id: "soyabean-oil",
    name: "Soyabean Oil",
    image: "/images/products/soyabean-oil.webp",
    description:
      "Premium quality soyabean oil with a distinct aroma and flavor, sourced from trusted global suppliers. Excellent alternative to our sunflower oil.",
    relatedProducts: ["sunflower-oil"],
  },
  {
    id: "chickpeas",
    name: "Chickpeas",
    image: "/images/products/chick-pea.webp",
    description:
      "Premium quality chickpeas with a distinct aroma and flavor, sourced from trusted global suppliers. Part of our comprehensive pulses collection.",
    relatedProducts: ["pulses"],
  },
];

const exportProducts = [
  {
    id: "potato",
    name: "Premium Potatoes",
    image: "/images/products/potato.webp",
    description:
      "Fresh, high-quality potatoes from Bangladesh's finest farms. Protected with our tarpaulin during export.",
    relatedProducts: ["tarpaulin"],
  },
  {
    id: "handicrafts",
    name: "Handicrafts",
    image: "/images/products/handicrafts.webp",
    description:
      "Authentic Bangladeshi handicrafts showcasing local artistry and cultural heritage. Complemented by our agricultural exports.",
    relatedProducts: ["potato"],
  },
];

export default function ProductsPage() {
  return (
    <div>
      {/* Products Hero */}
      <section className="relative pt-20 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-orange-500 font-medium tracking-wider uppercase text-xs sm:text-sm mb-3 md:mb-4 block">
              Our Collection
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-800 leading-tight">
              Premium Import & Export Products
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Discover our carefully curated selection of premium products,
              sourced from and delivered to global markets. Our{" "}
              <Link
                href="/services"
                className="text-orange-500 hover:text-orange-600 font-semibold"
              >
                import-export services
              </Link>{" "}
              ensure quality and reliability for all products.
            </p>
          </div>
        </div>
      </section>

      {/* Import Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="py-12">
            <span className="text-orange-500 font-medium tracking-wider uppercase text-sm block mb-2">
              Import Products
            </span>
            <h2 className="text-3xl font-bold text-gray-800">
              Global Selections
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {importProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-orange-600 text-xs font-medium px-3 py-1.5 rounded-full z-10">
                      Import
                    </span>
                  </div>
                  <div className="p-4 md:p-6">
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                      {product.description}
                    </p>
                    <div className="inline-flex items-center text-orange-500 font-medium text-xs md:text-sm group-hover:text-orange-600 transition-colors">
                      View Details
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Export Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-orange-500 font-medium tracking-wider uppercase text-sm block mb-2">
                Export Products
              </span>
              <h2 className="text-3xl font-bold text-gray-800">
                Local Excellence
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {exportProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group cursor-pointer"
              >
                <div className="relative bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-green-600 text-xs font-medium px-3 py-1.5 rounded-full z-10">
                      Export
                    </span>
                  </div>
                  <div className="p-4 md:p-6">
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                      {product.description}
                    </p>
                    <div className="inline-flex items-center text-orange-500 font-medium text-xs md:text-sm group-hover:text-orange-600 transition-colors">
                      View Details
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Source These Products?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Get competitive pricing and reliable delivery for any of our premium
            import or export products.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-orange-500 px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm sm:text-base"
            >
              Request a Quote
            </Link>
            <Link
              href="/industries/fmcg"
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold text-sm sm:text-base"
            >
              View Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
