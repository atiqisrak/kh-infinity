import Image from 'next/image'
import { Product } from '@/lib/products'
import type { ProductLabels } from '@/lib/product-labels'

interface ProductGalleryProps {
  product: Product
  labels: ProductLabels
}

export default function ProductGallery({ product, labels }: ProductGalleryProps) {
  const images = product.gallery ?? []
  if (images.length === 0) return null

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">
          {labels.gallery}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {images.map((src, index) => (
            <div
              key={src}
              className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100"
            >
              <Image
                src={src}
                alt={`${product.name} - ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
