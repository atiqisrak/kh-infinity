import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

interface RelatedProductsProps {
  relatedProducts: Product[];
  textColor: string;
  iconColorHover: string;
}

export default function RelatedProducts({ relatedProducts }: RelatedProductsProps) {
  if (relatedProducts.length === 0) return null;

  return (
    <section className="relative py-12 md:py-20 bg-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at top, black, transparent 60%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top, black, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-orange-700 font-semibold text-xs md:text-sm tracking-wider uppercase block mb-3 md:mb-4">
            Explore More
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Related Products
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {relatedProducts.map((relatedProduct) => {
            const typeColor =
              relatedProduct.type === "import"
                ? "bg-green-100 text-green-700"
                : "bg-orange-100 text-orange-700";
            return (
              <article key={relatedProduct.id} className="group">
                <Link href={`/products/${relatedProduct.id}`} className="block">
                  <div className="overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={85}
                      />
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <h3 className="text-base md:text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <span
                          className={`${typeColor} text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 capitalize`}
                        >
                          {relatedProduct.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedProduct.description}
                      </p>
                      <span className="inline-flex items-center text-orange-700 text-sm font-semibold group-hover:text-orange-800 transition-colors">
                        View Details
                        <svg
                          className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform"
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
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
