import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

interface RelatedProductsProps {
  relatedProducts: Product[];
  textColor: string;
  iconColorHover: string;
}

export default function RelatedProducts({
  relatedProducts,
  textColor,
  iconColorHover,
}: RelatedProductsProps) {
  if (relatedProducts.length === 0) return null;

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gray-800">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-4">
                <Image
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">
                {relatedProduct.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-2">
                {relatedProduct.description.substring(0, 100)}...
              </p>
              <Link
                href={`/products/${relatedProduct.id}`}
                className={`${textColor} hover:${iconColorHover} font-semibold transition-colors`}
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
