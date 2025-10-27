import Link from "next/link";
import Image from "next/image";

const featuredProducts = [
  {
    id: 1,
    name: "Sunflower Seed Oil",
    description:
      "Premium quality sunflower seed oil sourced from trusted global suppliers. Perfect for cooking and food processing applications.",
    image: "/images/products/sunflower-oil.webp",
    href: "/products/sunflower-oil",
    type: "Import",
    typeColor: "bg-orange-100 text-orange-600",
  },
  {
    id: 2,
    name: "Skimmed Milk Powder",
    description:
      "High-quality skimmed milk powder with excellent nutritional value. Ideal for dairy products and food manufacturing.",
    image: "/images/products/milk-powder.webp",
    href: "/products/milk-powder",
    type: "Import",
    typeColor: "bg-orange-100 text-orange-600",
  },
  {
    id: 3,
    name: "Premium Potatoes",
    description:
      "Fresh, high-quality potatoes from Bangladesh's finest farms. Available in multiple varieties including premium and organic options.",
    image: "/images/products/potato.webp",
    href: "/products/potato",
    type: "Export",
    typeColor: "bg-green-100 text-green-600",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="py-20 bg-gray-50"
      aria-label="Featured Products"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-700 font-semibold text-sm tracking-wider uppercase">
            Our Products
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-2">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium range of imported and exported products,
            carefully selected to meet international quality standards. From
            <Link
              href="/products/sunflower-oil"
              className="text-orange-700 hover:text-orange-800 font-semibold"
            >
              {" "}
              cooking oils
            </Link>{" "}
            to
            <Link
              href="/products/milk-powder"
              className="text-orange-700 hover:text-orange-800 font-semibold"
            >
              {" "}
              dairy products
            </Link>{" "}
            and
            <Link
              href="/products/potato"
              className="text-orange-700 hover:text-orange-800 font-semibold"
            >
              {" "}
              fresh produce
            </Link>
            .
          </p>
        </div>

        <div className="relative">
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            aria-label="Featured Products"
          >
            {featuredProducts.map((product) => (
              <article key={product.id} className="group">
                <Link href={product.href} className="block">
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
                          {product.name}
                        </h4>
                        <span
                          className={`${product.typeColor} text-xs font-semibold px-3 py-1 rounded-full`}
                        >
                          {product.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="inline-flex items-center text-orange-700 font-semibold group-hover:text-orange-800 transition-colors">
                        <span className="relative">
                          Learn More
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </span>
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors group"
            >
              View All Products
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
