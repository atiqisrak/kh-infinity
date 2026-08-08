import { getProductsByType } from './products'
import {
  getProductNavIcon,
  getResourceNavIcon,
  getServiceNavIcon,
  hubNavIcons,
} from './nav-icons'

export interface NavLink {
  label: string
  href: string
  icon: string
}

export interface NavGroup {
  id: string
  label: string
  href: string
  icon: string
  children: NavLink[]
}

interface NavLinkDef {
  labelKey: string
  href: string
  icon: string
  productName?: string
}

interface NavGroupDef {
  id: string
  labelKey: string
  href: string
  icon: string
  children: NavLinkDef[]
}

export const primaryLinkDefs = [
  { labelKey: 'about', href: '/about', icon: 'info' },
  { labelKey: 'industries', href: '/industries', icon: 'building' },
  { labelKey: 'faq', href: '/faq', icon: 'interrogation' },
]

const serviceLinkDefs: NavLinkDef[] = [
  { labelKey: 'allServices', href: '/services', icon: getServiceNavIcon('/services') },
  { labelKey: 'customs', href: '/services/customs', icon: getServiceNavIcon('/services/customs') },
  { labelKey: 'tradeRoutes', href: '/services/trade-routes', icon: getServiceNavIcon('/services/trade-routes') },
  {
    labelKey: 'smeImport',
    href: '/services/sme-import-solutions',
    icon: getServiceNavIcon('/services/sme-import-solutions'),
  },
]

const resourceLinkDefs: NavLinkDef[] = [
  { labelKey: 'blog', href: '/blog', icon: getResourceNavIcon('/blog') },
  { labelKey: 'news', href: '/news', icon: getResourceNavIcon('/news') },
  { labelKey: 'awards', href: '/awards', icon: getResourceNavIcon('/awards') },
  { labelKey: 'events', href: '/events', icon: getResourceNavIcon('/events') },
  { labelKey: 'careers', href: '/careers', icon: getResourceNavIcon('/careers') },
]

function resolveLink(
  def: NavLinkDef,
  t: (key: string) => string,
  productLabel?: string
): NavLink {
  return {
    label: productLabel ?? t(def.labelKey),
    href: def.href,
    icon: def.icon,
  }
}

function resolveGroup(
  def: NavGroupDef,
  t: (key: string) => string,
  productLabelFn?: (id: string, fallback: string) => string
): NavGroup {
  return {
    id: def.id,
    label: t(def.labelKey),
    href: def.href,
    icon: def.icon,
    children: def.children.map((child) => {
      const isProduct = child.productName !== undefined
      const label = isProduct && productLabelFn
        ? productLabelFn(child.labelKey, child.productName!)
        : t(child.labelKey)
      return resolveLink(child, t, label)
    }),
  }
}

export function getImportNavGroup(
  t: (key: string) => string,
  productLabelFn?: (id: string, fallback: string) => string
): NavGroup {
  const products = getProductsByType('import')
  const def: NavGroupDef = {
    id: 'imports',
    labelKey: 'imports',
    href: '/imports',
    icon: 'box-open',
    children: [
      { labelKey: 'allImports', href: '/imports', icon: hubNavIcons.allImports },
      ...products.map((p) => ({
        labelKey: p.id,
        href: `/products/${p.id}`,
        icon: getProductNavIcon(p.id),
        productName: p.name,
      })),
    ],
  }
  return resolveGroup(def, t, productLabelFn)
}

export function getExportNavGroup(
  t: (key: string) => string,
  productLabelFn?: (id: string, fallback: string) => string
): NavGroup {
  const products = getProductsByType('export')
  const def: NavGroupDef = {
    id: 'exports',
    labelKey: 'exports',
    href: '/exports',
    icon: 'plane-departure',
    children: [
      { labelKey: 'allExports', href: '/exports', icon: hubNavIcons.allExports },
      ...products.map((p) => ({
        labelKey: p.id,
        href: `/products/${p.id}`,
        icon: getProductNavIcon(p.id),
        productName: p.name,
      })),
      {
        labelKey: 'potatoGulf',
        href: '/products/potato-gulf',
        icon: getProductNavIcon('potato-gulf'),
      },
    ],
  }
  return resolveGroup(def, t, productLabelFn)
}

export function getServicesNavGroup(t: (key: string) => string): NavGroup {
  return resolveGroup(
    {
      id: 'services',
      labelKey: 'services',
      href: '/services',
      icon: 'settings-sliders',
      children: serviceLinkDefs,
    },
    t
  )
}

export function getResourcesNavGroup(t: (key: string) => string): NavGroup {
  return resolveGroup(
    {
      id: 'resources',
      labelKey: 'resources',
      href: '/blog',
      icon: 'book-bookmark',
      children: resourceLinkDefs,
    },
    t
  )
}

export const contactPhone = '+880 1400893882'
export const contactEmail = 'info@khi.com.bd'
