import { Product } from "@/lib/products";

interface NutritionalInfoProps {
  product: Product;
  colorClass: string;
}

export default function NutritionalInfo({
  product,
  colorClass,
}: NutritionalInfoProps) {
  if (!product.nutritionalInfo) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span
            className={`text-${colorClass}-600 font-medium tracking-wider uppercase text-sm block mb-4`}
          >
            Nutrition Facts
          </span>
          <h2 className="text-3xl font-bold text-gray-800">
            Nutritional Information
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                <svg
                  className={`w-6 h-6 mr-2 text-${colorClass}-500`}
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
                Per 100g Serving
              </h3>
              <div className="space-y-4">
                {Object.entries(product.nutritionalInfo.per100g).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between py-3 border-b border-gray-200"
                    >
                      <span className="text-gray-600">{key}</span>
                      <span className="font-semibold text-gray-800">
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                <svg
                  className={`w-6 h-6 mr-2 text-${colorClass}-500`}
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
                Additional Info
              </h3>
              <div className="space-y-4">
                {Object.entries(product.nutritionalInfo.additional).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between py-3 border-b border-gray-200"
                    >
                      <span className="text-gray-600">{key}</span>
                      <span className="font-semibold text-gray-800">
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
