import { Product } from "@/lib/products";

interface ProductNutritionProps {
  product: Product;
  iconColor: string;
  iconBg: string;
  borderColor: string;
}

export default function ProductNutrition({
  product,
  iconColor,
  iconBg,
  borderColor,
}: ProductNutritionProps) {
  if (!product.nutritionalInfo) return null;

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <span
            className={`${iconColor} font-semibold tracking-wider uppercase text-xs md:text-sm block mb-3 md:mb-4`}
          >
            Nutrition Facts
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Nutritional Information
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className={`bg-white rounded-2xl border-t-2 ${borderColor} border-x border-b border-gray-100 shadow-sm p-6 md:p-8`}>
              <h3 className="text-lg md:text-xl font-bold mb-5 md:mb-6 text-gray-800 flex items-center gap-3">
                <span className={`${iconColor} ${iconBg} w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}>
                  <svg
                    className="w-5 h-5"
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
                </span>
                Per 100g Serving
              </h3>
              <div className="divide-y divide-gray-100">
                {Object.entries(product.nutritionalInfo.per100g).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between py-3 first:pt-0"
                    >
                      <span className="text-sm text-gray-500">{key}</span>
                      <span className="text-sm font-bold text-gray-800">
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className={`bg-white rounded-2xl border-t-2 ${borderColor} border-x border-b border-gray-100 shadow-sm p-6 md:p-8`}>
              <h3 className="text-lg md:text-xl font-bold mb-5 md:mb-6 text-gray-800 flex items-center gap-3">
                <span className={`${iconColor} ${iconBg} w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </span>
                Additional Info
              </h3>
              <div className="divide-y divide-gray-100">
                {Object.entries(product.nutritionalInfo.additional).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between py-3 first:pt-0"
                    >
                      <span className="text-sm text-gray-500">{key}</span>
                      <span className="text-sm font-bold text-gray-800">
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
