import { Product } from '@/lib/products'
import type { ProductTheme } from '@/lib/product-theme'
import type { ProductLabels } from '@/lib/product-labels'

interface ProductDocumentsProps {
  product: Product
  theme: ProductTheme
  labels: ProductLabels
}

export default function ProductDocuments({
  product,
  theme,
  labels,
}: ProductDocumentsProps) {
  if (!product.documents?.length) return null

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span
            className={`${theme.textColor} font-medium tracking-wider uppercase text-xs md:text-sm block mb-2`}
          >
            {labels.documentation}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {labels.docHeading}
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">{labels.docSubtext}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {product.documents.map((doc) => (
            <div
              key={doc.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`${theme.iconColor} text-2xl mb-3`}>
                <i className="fas fa-file-alt" aria-hidden />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{doc.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{doc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
