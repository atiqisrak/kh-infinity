import { Product } from "@/lib/products";
import ProductGallery from "./ProductGallery";

interface ProductHeroProps {
  product: Product;
  textColor: string;
  textColorStrong: string;
  bgColor: string;
  bgColorHover: string;
  borderColor: string;
  primaryColor: string;
  badgeBg: string;
  badgeText: string;
}

export default function ProductHero({
  product,
  textColor,
  textColorStrong,
  bgColor,
  bgColorHover,
  borderColor,
  badgeBg,
  badgeText,
}: ProductHeroProps) {
  const gallery = product.images && product.images.length > 0 ? product.images : [product.image];

  return (
    <section className="relative pt-8 md:pt-12 pb-12 md:pb-20 bg-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 55%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 55%)",
        }}
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div>
              <span
                className={`${badgeBg} ${badgeText} inline-block font-semibold tracking-wide uppercase text-[11px] md:text-xs px-3 py-1 rounded-full mb-4 md:mb-5`}
              >
                {product.type === "import" ? "Direct B2B Import" : "Direct B2B Export"}
                {product.hsCode && ` · HS ${product.hsCode}`}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                {product.brand && (
                  <span className={textColorStrong}>{product.brand} </span>
                )}
                {product.name}
              </h1>
              {product.geoAnchor && (
                <p
                  className={`mt-4 md:mt-6 pl-4 border-l-2 ${borderColor} text-base md:text-lg text-gray-700 leading-relaxed geo-anchor font-medium`}
                  data-speakable
                >
                  {product.geoAnchor}
                </p>
              )}
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                {product.description}
              </p>
              {product.geoHeading && (
                <h2 className="sr-only">{product.geoHeading}</h2>
              )}
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="#specifications"
                className={`${bgColor} text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:${bgColorHover} transition-colors font-medium text-sm md:text-base`}
              >
                View Specifications
              </a>
              <a
                href="#contact"
                className={`border ${borderColor} ${textColor} px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:${bgColor} hover:text-white transition-colors font-medium text-sm md:text-base`}
              >
                Request Quote
              </a>
            </div>
          </div>
          <ProductGallery
            images={gallery}
            alt={product.name}
            accentBg={bgColor}
            accentBorder={borderColor}
          />
        </div>
      </div>
    </section>
  );
}
