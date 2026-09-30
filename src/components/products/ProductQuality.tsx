import { Product } from "@/lib/products";

interface ProductQualityProps {
  product: Product;
  iconColor: string;
  iconBg: string;
  borderColor: string;
}

export default function ProductQuality({
  product,
  iconColor,
  iconBg,
  borderColor,
}: ProductQualityProps) {
  return (
    <section className="relative py-12 md:py-20 bg-gray-50 overflow-hidden">
      <svg
        className="absolute top-8 right-6 w-24 h-24 text-gray-200 opacity-60 pointer-events-none hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="3" fill="currentColor" />
        <circle cx="40" cy="20" r="3" fill="currentColor" />
        <circle cx="60" cy="20" r="3" fill="currentColor" />
        <circle cx="20" cy="40" r="3" fill="currentColor" />
        <circle cx="40" cy="40" r="3" fill="currentColor" />
        <circle cx="60" cy="40" r="3" fill="currentColor" />
        <circle cx="20" cy="60" r="3" fill="currentColor" />
        <circle cx="40" cy="60" r="3" fill="currentColor" />
        <circle cx="60" cy="60" r="3" fill="currentColor" />
      </svg>
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <span
            className={`${iconColor} font-semibold tracking-wider uppercase text-xs md:text-sm block mb-3 md:mb-4`}
          >
            Trust & Compliance
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Origin &amp; Quality Standards
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className={`bg-white rounded-2xl border-t-2 ${borderColor} border-x border-b border-gray-100 shadow-sm p-6 md:p-8`}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`${iconColor} ${iconBg} w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}>
                <i className="fas fa-globe text-base"></i>
              </span>
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Sourcing
              </h3>
            </div>
            <p className="text-gray-600 mb-5 text-sm md:text-base">
              Our {product.name.toLowerCase()} is sourced from premium producers
              in {product.sourcing.countries.join(", ")}. We maintain strict
              quality standards and sustainable practices throughout our supply
              chain.
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sourcing.countries.map((country) => (
                <span
                  key={country}
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${iconBg} ${iconColor}`}
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
          <div className={`bg-white rounded-2xl border-t-2 ${borderColor} border-x border-b border-gray-100 shadow-sm p-6 md:p-8`}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`${iconColor} ${iconBg} w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}>
                <i className="fas fa-certificate text-base"></i>
              </span>
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Quality Assurance
              </h3>
            </div>
            <p className="text-gray-600 mb-5 text-sm md:text-base">
              Every batch undergoes rigorous quality testing to ensure it meets
              international food safety standards.
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sourcing.certifications.map((cert) => (
                <span
                  key={cert}
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${iconBg} ${iconColor}`}
                >
                  <i className="fas fa-check-circle"></i>
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
