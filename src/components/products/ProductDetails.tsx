import { Product } from "@/lib/products";

interface ProductDetailsProps {
  product: Product;
  iconColor: string;
  iconColorHover: string;
  isImport: boolean;
  iconBg: string;
  borderColor: string;
}

export default function ProductDetails({
  product,
  iconColor,
  isImport,
  iconBg,
  borderColor,
}: ProductDetailsProps) {
  return (
    <section id="specifications" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <span
            className={`${
              isImport ? "text-green-700" : "text-orange-700"
            } font-semibold tracking-wider uppercase text-xs md:text-sm block mb-3 md:mb-4`}
          >
            Product Details
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Everything You Need to Know
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Specifications */}
          <div className={`bg-white p-6 md:p-8 rounded-2xl border-t-2 ${borderColor} border-x border-b border-gray-100 shadow-sm`}>
            <div className={`${iconColor} ${iconBg} w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-6`}>
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
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
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-800">
              Specifications
            </h3>
            <dl className="divide-y divide-gray-100">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4 py-3 first:pt-0">
                  <dt className="text-sm text-gray-500 shrink-0">{key}</dt>
                  <dd className="text-sm font-medium text-gray-800 text-right">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Benefits */}
          <div className={`${iconBg} p-6 md:p-8 rounded-2xl border border-black/5 shadow-sm`}>
            <div className={`${iconColor} bg-white w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-sm`}>
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
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
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-800">
              {isImport ? "Health Benefits" : "Key Features"}
            </h3>
            <ul className="space-y-3.5">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className={`w-5 h-5 ${iconColor} mt-0.5 shrink-0`}
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
                  <span className="text-sm text-gray-800">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Packaging */}
          <div className={`bg-white p-6 md:p-8 rounded-2xl border-t-2 ${borderColor} border-x border-b border-gray-100 shadow-sm`}>
            <div className={`${iconColor} ${iconBg} w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-6`}>
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
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
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-800">
              Packaging Options
            </h3>
            <ul className="space-y-3.5">
              {product.packaging.map((option, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className={`w-5 h-5 ${iconColor} mt-0.5 shrink-0`}
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
                  <span className="text-sm text-gray-700">{option}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
