import { Product } from "@/lib/products";

interface ProductSpecificationsProps {
  product: Product;
  colorClass: string;
  isImport: boolean;
}

export default function ProductSpecifications({
  product,
  colorClass,
  isImport,
}: ProductSpecificationsProps) {
  return (
    <section id="specifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span
            className={`text-${colorClass}-600 font-medium tracking-wider uppercase text-sm block mb-4`}
          >
            Product Details
          </span>
          <h2 className="text-3xl font-bold text-gray-800">
            Everything You Need to Know
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Specifications */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:translate-y-[-4px]">
            <div className={`text-${colorClass}-500 text-3xl mb-6`}>
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Specifications
            </h3>
            <ul className="space-y-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key} className="flex items-start group">
                  <svg
                    className={`w-5 h-5 text-${colorClass}-500 mt-1 mr-3 transform group-hover:scale-110 transition-transform`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span
                    className={`group-hover:text-${colorClass}-600 transition-colors`}
                  >
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:translate-y-[-4px]">
            <div className={`text-${colorClass}-500 text-3xl mb-6`}>
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              {isImport ? "Health Benefits" : "Key Features"}
            </h3>
            <ul className="space-y-4">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start group">
                  <svg
                    className={`w-5 h-5 text-${colorClass}-500 mt-1 mr-3 transform group-hover:scale-110 transition-transform`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                  <span
                    className={`group-hover:text-${colorClass}-600 transition-colors`}
                  >
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Packaging */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:translate-y-[-4px]">
            <div className={`text-${colorClass}-500 text-3xl mb-6`}>
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Packaging Options
            </h3>
            <ul className="space-y-4">
              {product.packaging.map((option, index) => (
                <li key={index} className="flex items-start group">
                  <svg
                    className={`w-5 h-5 text-${colorClass}-500 mt-1 mr-3 transform group-hover:scale-110 transition-transform`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    ></path>
                  </svg>
                  <span
                    className={`group-hover:text-${colorClass}-600 transition-colors`}
                  >
                    {option}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
