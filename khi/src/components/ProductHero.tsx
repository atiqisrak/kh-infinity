import { Product } from "@/lib/products";

interface ProductHeroProps {
  product: Product;
  colorClass: string;
}

export default function ProductHero({ product, colorClass }: ProductHeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span
                className={`text-${colorClass}-600 font-medium tracking-wider uppercase text-sm block mb-4`}
              >
                Premium Quality
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                {product.brand && (
                  <span className={`text-${colorClass}-700`}>
                    {product.brand}{" "}
                  </span>
                )}
                {product.name}
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#specifications"
                className={`bg-${colorClass}-500 text-white px-8 py-3 rounded-lg hover:bg-${colorClass}-600 transition-all transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl`}
              >
                View Specifications
              </a>
              <a
                href="#contact"
                className={`border-2 border-${colorClass}-500 text-${colorClass}-500 px-8 py-3 rounded-lg hover:bg-${colorClass}-500 hover:text-white transition-all transform hover:translate-y-[-2px]`}
              >
                Request Quote
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="aspect-square relative overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div
              className={`absolute inset-0 bg-${colorClass}-200 rounded-3xl transform rotate-6 -z-10`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
