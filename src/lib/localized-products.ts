import type { Locale } from '@/i18n/routing'
import type { Product } from './products'
import { getProduct, getProducts, getProductsByType, getRelatedProducts } from './products'
import { bnProductOverlays } from '@/content/products/bn'
import { bnTrustOverlays } from '@/content/products/bn-trust'

type ProductOverlay = Partial<
  Pick<
    Product,
    | 'name'
    | 'description'
    | 'benefits'
    | 'packaging'
    | 'qualityNote'
    | 'faqs'
    | 'documents'
    | 'processSteps'
    | 'useCases'
    | 'trustBadges'
    | 'geoAnchor'
    | 'geoHeading'
    | 'category'
    | 'nutritionalInfo'
  >
> & {
  specifications?: Record<string, string>
  specLabels?: Record<string, string>
  specValues?: Record<string, string>
  commercial?: Product['commercial']
  sourcing?: Partial<Product['sourcing']>
}

function applyOverlay(product: Product, overlay: ProductOverlay): Product {
  let specifications = product.specifications

  if (overlay.specifications) {
    specifications = overlay.specifications
  } else if (overlay.specLabels || overlay.specValues) {
    specifications = Object.fromEntries(
      Object.entries(product.specifications).map(([key, value]) => [
        overlay.specLabels?.[key] ?? key,
        overlay.specValues?.[key] ?? value,
      ])
    )
  }

  const sourcing = overlay.sourcing
    ? { ...product.sourcing, ...overlay.sourcing }
    : product.sourcing

  return {
    ...product,
    ...overlay,
    specifications,
    sourcing,
    commercial: overlay.commercial ?? product.commercial,
    nutritionalInfo: overlay.nutritionalInfo ?? product.nutritionalInfo,
  }
}

export function getLocalizedProduct(id: string, locale: Locale): Product | undefined {
  const product = getProduct(id)
  if (!product) return undefined
  if (locale === 'en') return product

  const trust = bnTrustOverlays[id]
  const productOverlay = bnProductOverlays[id]
  if (!trust && !productOverlay) return product
  const overlay = { ...trust, ...productOverlay }
  return applyOverlay(product, overlay)
}

export function getLocalizedProductName(id: string, locale: Locale): string | undefined {
  if (locale === 'en') return getProduct(id)?.name
  return bnProductOverlays[id]?.name ?? getProduct(id)?.name
}

export function getLocalizedProducts(locale: Locale): Product[] {
  return getProducts().map((p) => getLocalizedProduct(p.id, locale) ?? p)
}

export function getLocalizedProductsByType(
  type: 'import' | 'export',
  locale: Locale
): Product[] {
  return getProductsByType(type).map((p) => getLocalizedProduct(p.id, locale) ?? p)
}

export function getLocalizedRelatedProducts(
  product: Product,
  locale: Locale
): Product[] {
  return getRelatedProducts(product).map(
    (p) => getLocalizedProduct(p.id, locale) ?? p
  )
}
