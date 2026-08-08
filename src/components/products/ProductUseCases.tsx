import { Product } from '@/lib/products'
import type { ProductTheme } from '@/lib/product-theme'
import type { ProductLabels } from '@/lib/product-labels'

interface ProductUseCasesProps {
  product: Product
  theme: ProductTheme
  labels: ProductLabels
}

export default function ProductUseCases({
  product,
  theme,
  labels,
}: ProductUseCasesProps) {
  if (!product.useCases?.length) return null

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span
            className={`${theme.textColor} font-medium tracking-wider uppercase text-xs md:text-sm block mb-2`}
          >
            {labels.applications}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {labels.useCasesHeading}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {product.useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className={`${theme.iconColor} text-2xl mb-3`}>
                <i className="fas fa-industry" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{useCase.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
