import { Product } from "@/lib/products";
import Image from "next/image";

interface ProductHeroProps {
  product: Product;
  textColor: string;
  textColorStrong: string;
  bgColor: string;
  bgColorHover: string;
  borderColor: string;
  primaryColor: string;
}

export default function ProductHero({
  product,
  textColor,
  textColorStrong,
  bgColor,
  bgColorHover,
  borderColor,
  primaryColor,
}: ProductHeroProps) {
  return (
    <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div>
              <span
                className={`${textColor} font-medium tracking-wider uppercase text-xs md:text-sm block mb-3 md:mb-4`}
              >
                Premium Quality
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                {product.brand && (
                  <span className={textColorStrong}>{product.brand} </span>
                )}
                {product.name}
              </h1>
              <p className="mt-4 md:mt-6 text-base md:text-xl text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="#specifications"
                className={`${bgColor} text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:${bgColorHover} transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-sm md:text-base`}
              >
                View Specifications
              </a>
              <a
                href="#contact"
                className={`border-2 ${borderColor} ${textColor} px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:${bgColor} hover:text-white transition-all transform hover:-translate-y-0.5 text-sm md:text-base`}
              >
                Request Quote
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-4 md:p-8 rounded-3xl shadow-xl">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  priority
                />
              </div>
            </div>
            <div
              className={`absolute inset-0 ${
                primaryColor === "green" ? "bg-green-200" : "bg-orange-200"
              } rounded-3xl transform rotate-3 md:rotate-6 -z-10`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
