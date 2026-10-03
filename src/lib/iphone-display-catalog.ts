// ─── iPhone display catalogue ──────────────────────────────────────────────
// Supplier product shots, self-hosted as WebP under
// public/images/prod-gallery/Display/webp/<brand>/. Each item's name is
// derived from the image filename, e.g.
//   DD-Soft-OLED-Screen-Replacement-For-iPhone-17-Pro-Max.webp
//   → brand "DD", panel "Soft OLED", model "iPhone 17 Pro Max"
// Multiple photos of the same brand + panel + model are grouped into one item.
//
// The file list lives in ./iphone-display-files.ts — regenerate it with
// `pnpm catalog:displays` after adding or renaming photos.
import { DISPLAY_IMAGE_FILES } from './iphone-display-files'

export interface DisplayCatalogItem {
  id: string
  /** Full display name, e.g. "DD Soft OLED Screen — iPhone 17 Pro Max" */
  name: string
  brand: string
  panel: string
  model: string
  images: string[]
}

// ─── filename → name parsing ───────────────────────────────────────────────

const WORD_FIXES: Record<string, string> = { max: 'Max', pro: 'Pro', plus: 'Plus', mini: 'mini', air: 'Air' }

/** "iPhone-12-iPhone-12Pro" → "iPhone 12 / 12 Pro"; "iPhone-16E" → "iPhone 16e" */
function parseModel(raw: string): string {
  const tokens = raw
    .split('-')
    .filter((t) => t.toLowerCase() !== 'iphone')
    .flatMap((t) => t.replace(/^(\d+)([A-Za-z]{2,})$/, '$1 $2').split(' '))

  const variants: string[][] = []
  for (const t of tokens) {
    if (/^\d+e?$/i.test(t) || /^X[SR]?$/i.test(t)) {
      variants.push([t.replace(/E$/, 'e')])
    } else if (variants.length) {
      variants[variants.length - 1].push(WORD_FIXES[t.toLowerCase()] ?? t)
    }
  }
  return `iPhone ${variants.map((v) => v.join(' ')).join(' / ')}`
}

function parseFilename(url: string) {
  const file = url.split('/').pop()!
  const stem = file.replace(/\.(jpe?g|png|webp)$/i, '').replace(/-\d+x\d*$/, '')
  const [, brand, panelRaw, modelRaw] =
    stem.match(/^([A-Z]+)-(.+?)-(?:Display-)?Screen-.*?(?:For|with)-(iPhone-.+)$/i) ?? []
  if (!brand) throw new Error(`Unrecognised catalogue filename: ${file}`)

  // Drop a trailing single-digit photo index ("-XS-Max-3", "-13Pro-MAX-1")
  const model = parseModel(modelRaw.replace(/-\d$/, ''))
  const panel = panelRaw.replace(/-/g, ' ')
  return { file, brand: brand.toUpperCase(), panel, model }
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function buildCatalog(urls: string[]): DisplayCatalogItem[] {
  const byKey = new Map<string, DisplayCatalogItem>()
  for (const url of urls) {
    const { brand, panel, model } = parseFilename(url)
    const id = slugify(`${brand} ${panel} ${model}`)
    const existing = byKey.get(id)
    if (existing) {
      existing.images.push(url)
    } else {
      byKey.set(id, { id, name: `${brand} ${panel} Screen — ${model}`, brand, panel, model, images: [url] })
    }
  }
  return [...byKey.values()]
}

export const iphoneDisplayCatalog: DisplayCatalogItem[] = buildCatalog(DISPLAY_IMAGE_FILES)

/** First image of the catalogue item with this id — throws if the id is wrong. */
export function catalogImage(id: string): string {
  const item = iphoneDisplayCatalog.find((i) => i.id === id)
  if (!item) throw new Error(`Unknown iPhone display catalogue id: ${id}`)
  return item.images[0]
}
