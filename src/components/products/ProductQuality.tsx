import { Product } from "@/lib/products";

interface ProductQualityProps {
  product: Product;
  iconColor: string;
}

export default function ProductQuality({
  product,
  iconColor,
}: ProductQualityProps) {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gray-800">
          Origin & Quality Standards
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">
              Sourcing
            </h3>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              Our {product.name.toLowerCase()} is sourced from premium producers
              in {product.sourcing.countries.join(", ")}. We maintain strict
              quality standards and sustainable practices throughout our supply
              chain.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className={`fas fa-globe ${iconColor} mt-1 mr-3`}></i>
                <span>Multiple sourcing countries for reliable supply</span>
              </li>
              <li className="flex items-start">
                <i className={`fas fa-certificate ${iconColor} mt-1 mr-3`}></i>
                <span>International quality certifications</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">
              Quality Assurance
            </h3>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              Every batch undergoes rigorous quality testing to ensure it meets
              international food safety standards.
            </p>
            <ul className="space-y-4">
              {product.sourcing.certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <i
                    className={`fas fa-check-circle ${iconColor} mt-1 mr-3`}
                  ></i>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
