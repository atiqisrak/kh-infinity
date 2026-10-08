// ─── Parts catalogues ──────────────────────────────────────────────────────
// Supplier product shots, self-hosted as WebP under public/images/prod-gallery/.
// Each catalogue item's name is derived from its image filename; extra photos
// of the same item (…-1, …-2, "… (1)") are grouped into one item. Photos whose
// filename names no product (hashes, "1-72.webp") are left out.
//
// The file list lives in ./gallery-files.ts — regenerate it with
// `pnpm catalog:gallery` after adding or renaming photos.
import { GALLERY_FILES } from './gallery-files'

export interface CatalogItem {
  id: string
  /** Full descriptive name, used for alt text and the lightbox */
  name: string
  /** Short card title, e.g. "iPhone 17 Pro Max" */
  title: string
  /** First filter facet — supplier brand, phone brand or part type */
  group: string
  /** Second filter facet — panel grade, battery grade or model family */
  variant: string
  images: string[]
}

export interface Catalog {
  items: CatalogItem[]
  /** Filter row labels for `group` and `variant` */
  groupLabel: string
  variantLabel: string
  /** Plural noun for the count line, e.g. "models" or "parts" */
  noun: string
}

// ─── shared filename helpers ───────────────────────────────────────────────

const TYPO_FIXES: [RegExp, string][] = [
  [/\bSevi(ce)?\b|\bSevice\b/gi, 'Service'],
  [/\bRepalcement\b/gi, 'Replacement'],
  [/\bAsscembly\b/gi, 'Assembly'],
  [/\bPixcel\b/gi, 'Pixel'],
  [/\bGoogleGoogle\b/g, 'Google'],
  [/\bSitcker\b/gi, 'Sticker'],
  [/\bdaugter\b/gi, 'daughter'],
]

const ACRONYMS = new Set(['LCD', 'OLED', 'USB', 'FHD', 'OEM', 'ORG', 'BGA', 'QFN', 'FPC', 'IPD', 'SSD', 'TFT', 'SATA', 'AAA', 'AMOLED', 'USA', 'PMIC'])

/** "Top-Case-w-US-Keyboard-SPACE-GRAY (1).webp" → "Top-Case-w-US-Keyboard-SPACE-GRAY" */
function stemOf(url: string) {
  return decodeURIComponent(url.split('/').pop()!)
    .replace(/(\.(jpe?g|png|webp))+$/i, '')
    .replace(/\s*\(\d+\)$/, '')
    .replace(/-\d+x\d*$/, '')
}

/** Supplier filenames are cut at ~60 characters, often mid-word */
const isTruncated = (stem: string) => stem.length >= 58

// Words a trailing "-1" can follow as part of a model name ("iPad-5", "Nord-5")
const MODEL_WORDS = /^(ipad|iphone|pixel|realme|oneplus|nord|note|ace|open|mini|air|pro|max|plus|fold|flip|play|galaxy|redmi|poco|narzo|gt|edge|mate|nova|honor|moto)$/i

/** Strips trailing photo indices ("-1", "-0", "-1-1") so extra photos group together */
function groupKey(stem: string) {
  let key = stem.replace(/-+$/, '')
  for (;;) {
    const m = key.match(/^(.*)-(\d)$/)
    if (!m) break
    const prev = m[1].split('-').pop()!
    // "iPad-Pro-12-9" is a screen size, but "…-2023-1" is a photo index
    if (MODEL_WORDS.test(prev) || (/^\d+$/.test(prev) && !/^(19|20)\d\d$/.test(prev))) break
    key = m[1]
  }
  return key
}

/** Hashes, timestamps and bare numbers carry no product name */
function isNamed(stem: string) {
  if (/placeholder|bg-design/i.test(stem)) return false
  return stem.split(/[-_\s]/).filter((t) => /^[A-Za-z]{3,}$/.test(t)).length >= 2
}

function titleCaseWord(w: string) {
  if (ACRONYMS.has(w.toUpperCase())) return w.toUpperCase()
  if (w.length > 3 && w === w.toUpperCase() && /[A-Z]/.test(w)) return w[0] + w.slice(1).toLowerCase()
  return w
}

const COMPLETE_LAST = /^(\d+[A-Za-z]?|\d+G|Pro|Max|Plus|Lite|Mini|mini|Air|Ultra|Fold|Flip|Black|White|Silver|Gold)$/

/** Hyphenated stem → readable name; truncated names lose their partial last word */
function humanize(key: string, truncated: boolean) {
  let tokens = key
    .replace(/(\d)(Pro|Max|Plus|Lite|Mini|Air)(?=-|$)/gi, '$1-$2') // "12Pro" → "12-Pro"
    .replace(/\bAir-310-5\b/i, 'Air-3-10-5') // "iPad-Air-310-5-inch"
    .split('-')
    .filter(Boolean)
  // Keep a last word that is complete on its own ("Pro", "12", "5G")
  if (truncated && tokens.length > 3 && !COMPLETE_LAST.test(tokens.at(-1)!)) tokens = tokens.slice(0, -1)
  let s = tokens.map(titleCaseWord).join(' ')
  s = s.replace(/\bPro 12 9\b(?! ?inch)/g, 'Pro 12.9-inch')
  // "10 9 inch" → '10.9-inch', "12 9inch" → '12.9-inch'
  s = s.replace(/\b(\d{1,2}) (\d) ?inch(es)?\b/gi, '$1.$2-inch').replace(/\b(\d{1,2}) ?inch(es)?\b/gi, '$1-inch')
  s = s.replace(/\bw\b/g, 'w/')
  for (const [re, fix] of TYPO_FIXES) s = s.replace(re, fix)
  return truncated ? `${s}…` : s
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

type Parsed = Pick<CatalogItem, 'title' | 'group' | 'variant'> & Partial<Pick<CatalogItem, 'id' | 'name'>>

/** Groups photos into items; `parse` returns null for photos to leave out */
function buildCatalog(prefix: string, urls: string[], parse: (key: string, name: string) => Parsed | null): CatalogItem[] {
  const byId = new Map<string, CatalogItem>()
  for (const url of urls) {
    const stem = stemOf(url)
    if (!isNamed(stem)) continue
    const key = groupKey(stem)
    const fallbackName = humanize(key, isTruncated(stem))
    const parsed = parse(key, fallbackName)
    if (!parsed) continue
    const id = parsed.id ?? slugify(`${prefix} ${key}`)
    const existing = byId.get(id)
    if (existing) existing.images.push(url)
    else byId.set(id, { name: fallbackName, ...parsed, id, images: [url] })
  }
  return [...byId.values()].sort(
    (a, b) => a.group.localeCompare(b.group) || a.title.localeCompare(b.title, 'en', { numeric: true }),
  )
}

/** Tokens from the first `start` match up to the first stop word */
function takeModel(name: string, start: RegExp, stop: RegExp) {
  const tokens = name.replace(/…$/, '').split(' ')
  const i = tokens.findIndex((t) => start.test(t))
  if (i < 0) return ''
  const out: string[] = []
  for (const t of tokens.slice(i)) {
    if (out.length && stop.test(t)) break
    out.push(t)
  }
  return out.join(' ')
}

// ─── iPhone displays ───────────────────────────────────────────────────────
// e.g. DD-Soft-OLED-Screen-Replacement-For-iPhone-17-Pro-Max.webp
//   → brand "DD", panel "Soft OLED", model "iPhone 17 Pro Max"

const WORD_FIXES: Record<string, string> = { max: 'Max', pro: 'Pro', plus: 'Plus', mini: 'mini', air: 'Air' }

/** "iPhone-12-iPhone-12Pro" → "iPhone 12 / 12 Pro"; "iPhone-16E" → "iPhone 16e" */
function parseIphoneModel(raw: string): string {
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

export const iphoneDisplayCatalog: CatalogItem[] = buildCatalog('iphone', GALLERY_FILES.iphoneDisplays, (key) => {
  const [, brand, panelRaw, modelRaw] =
    key.match(/^([A-Z]+)-(.+?)-(?:Display-)?Screen-.*?(?:For|with)-(iPhone-.+)$/i) ?? []
  if (!brand) throw new Error(`Unrecognised iPhone display filename: ${key}`)
  const model = parseIphoneModel(modelRaw)
  const panel = panelRaw.replace(/-/g, ' ')
  const b = brand.toUpperCase()
  return { id: slugify(`${b} ${panel} ${model}`), name: `${b} ${panel} Screen — ${model}`, title: model, group: b, variant: panel }
})

// ─── Android displays ──────────────────────────────────────────────────────

const PHONE_BRANDS: [RegExp, string][] = [
  [/\b(Samsung|Galaxy)\b/i, 'Samsung'],
  [/\b(Google|Pixel)\b/i, 'Google Pixel'],
  [/\bOnePlus\b/i, 'OnePlus'],
  [/\bRealme\b/i, 'Realme'],
  [/\b(Xiaomi|Redmi|POCO|Mi)\b/i, 'Xiaomi'],
  [/\bOPPO\b/i, 'OPPO'],
  [/\bHuawei\b/i, 'Huawei'],
  [/\bHonor\b/i, 'Honor'],
  [/\bMoto(rola)?\b/i, 'Motorola'],
  [/\biPhone/i, 'iPhone'],
]
const BRAND_START = /^(Samsung|Galaxy|Google|Pixel|OnePlus|Realme|Xiaomi|Redmi|POCO|Mi|OPPO|Huawei|Honor|Moto|MOTO|iPhone.*)$/i

const phoneBrand = (name: string) => PHONE_BRANDS.find(([re]) => re.test(name))?.[1]

/** "Galaxy S20 S20" → "Samsung Galaxy S20 / S20+", "Oppo A5" → "OPPO A5", "Pixel 4A" → "Google Pixel 4a" */
function tidyPhoneTitle(title: string, brand: string) {
  return title
    .replace(/^(Galaxy|Pixel|Redmi|POCO|Mi)\b/i, (w) => `${brand.split(' ')[0]} ${w[0].toUpperCase()}${w.slice(1)}`)
    .replace(/^google/i, 'Google')
    .replace(/^Oppo\b/, 'OPPO')
    .replace(/\bPoco\b/, 'POCO')
    .replace(/\bpro\b/g, 'Pro')
    .replace(/\bxl\b/gi, 'XL')
    .replace(/(Pixel \d)A\b/, '$1a')
    .replace(/\b(\w+) \1\b/, '$1 / $1+')
    .replace(/\b4G 5G\b/, '4G / 5G')
    .replace(/\b(A\d\d) (A\d\ds)\b/, '$1 / $2')
}

const DISPLAY_STOP = /^(ORG|OLED|LCD|AMOLED|Screen|Service|Display|Assembly|With|with|Digitizer|Premium|OEM|Touch|Black|Wholes|Comp|Complete|External|SKU\d+|Aftermarket|Supp|and)$/

export const androidDisplayCatalog: CatalogItem[] = buildCatalog('android', GALLERY_FILES.androidDisplays, (key, name) => {
  if (/ipad|camera/i.test(key)) return null
  const brand = phoneBrand(name)
  if (!brand) return null
  const title = tidyPhoneTitle(takeModel(name, BRAND_START, DISPLAY_STOP), brand)
  if (title.split(' ').length < 2) return null
  const variant = /OLED/i.test(key) ? 'OLED / AMOLED' : /Incell|TFT/i.test(key) ? 'Incell / TFT' : 'LCD'
  // One card per model and panel type, however many listings show it
  return { id: slugify(`android ${title} ${variant}`), title, group: brand, variant }
})

// ─── iPad displays (filed under Display/android) ───────────────────────────

const IPAD_STOP = /^(LCD|Display|Assembly|Aftermarket|Black|White|With|with|Digitizer)$/

export const ipadDisplayCatalog: CatalogItem[] = buildCatalog('ipad', GALLERY_FILES.androidDisplays, (key, name) => {
  if (!/ipad/i.test(key)) return null
  const title = takeModel(name, /^iPad$/i, IPAD_STOP)
    .replace(/\b(Ipad|ipad)\b/g, 'iPad')
    .replace(/^iPad iPad\b/, 'iPad')
    .replace(/ (Pad|iPad) /g, ' / iPad ')
    .replace(/\bmini\b|\bMini\b/g, 'mini')
    .replace(/\bair ?2\b/g, 'Air 2')
    .replace(/ only$/, '')
    .replace(/^(.+) \/ \1$/, '$1')
  const series = /iPad Pro/.test(title) ? 'iPad Pro' : /iPad Air/.test(title) ? 'iPad Air' : /iPad mini/.test(title) ? 'iPad mini' : 'iPad'
  const variant = /Assembly|Digitizer/i.test(key) ? 'LCD + digitizer' : 'LCD only'
  return { id: slugify(`ipad ${title} ${variant}`), title, group: series, variant }
})

// ─── Phone batteries ───────────────────────────────────────────────────────

const BATTERY_STOP = /^(ORG|Battery|Service|TI|Replacement|Pack|SKU\d+|USA|AAA|Quality|High|Shows|G\d{3}\w*)$/i

function batteryVariant(key: string) {
  if (/Diagnostic|TI-Solution/i.test(key)) return 'Diagnostic (TI)'
  if (/Genuine|Service-Pack|Sevice/i.test(key)) return 'Genuine service pack'
  if (/Aftermarket|AAA|High-Capacity/i.test(key)) return 'Aftermarket high-capacity'
  return 'ORG grade'
}

export const batteryCatalog: CatalogItem[] = buildCatalog('battery', GALLERY_FILES.batteries, (key, name) => {
  if (/connector|TI-Solution-Diagnostic/i.test(key)) return null
  const brand = phoneBrand(name)
  if (!brand) return null
  let title: string
  if (brand === 'iPhone') {
    const m = key
      .replace(/iPhone-?1212/i, 'iPhone-12-12')
      .match(/iPhone-?(.+?)(?:-(?:TI?|Sevice|Service|AAA|Shows|Replacement|ORG)\b.*|-$|$)/i)
    if (!m || !/^\d/.test(m[1])) return null
    title = parseIphoneModel(`iPhone-${m[1]}`)
  } else {
    title = tidyPhoneTitle(takeModel(name.replace(/\b\d+mAh /, ''), BRAND_START, BATTERY_STOP), brand)
    if (/Main/i.test(key)) title += ' (main)'
    if (/Secondary/i.test(key)) title += ' (secondary)'
  }
  if (title.split(' ').length < 2) return null
  const variant = batteryVariant(key)
  return { id: slugify(`battery ${title} ${variant}`), title, group: brand === 'iPhone' ? 'Apple iPhone' : brand, variant }
})

// ─── MacBook parts ─────────────────────────────────────────────────────────

const MACBOOK_PART_TYPES: [RegExp, string][] = [
  [/SSD|Super-?Drive|Hard-Drive/i, 'Storage'],
  [/Flex|Cable/i, 'Flex cables'],
  [/Top-Case/i, 'Top case & keyboard'],
  [/Bottom-Case/i, 'Bottom case'],
  [/Fan|Heat-Sink|Thermal/i, 'Cooling'],
  [/LCD|Display/i, 'Display'],
  [/Keyboard|Keycap|Touch-Bar/i, 'Keyboard'],
  [/Trackpad/i, 'Trackpad'],
  [/Battery/i, 'Battery'],
  [/Speaker|Microphone/i, 'Audio'],
  [/Board|Port|Connector|Socket/i, 'Boards & connectors'],
  [/\bIC\b|-IC-|Chip|Regulator|Controller|QFN|BGA-\d/i, 'ICs & chips'],
  [/Screw/i, 'Screws'],
  [/Film|Glass|Filter|Protect|Cover|Skin/i, 'Protection'],
  [/Stencil|Tool|Nerdtool|Sensor/i, 'Tools & sensors'],
]

function macbookFamily(key: string) {
  if (/Air/i.test(key)) return 'MacBook Air'
  if (/Pro/i.test(key)) return 'MacBook Pro'
  if (/Retina-12|MacBook-12|A1534/i.test(key)) return 'MacBook 12-inch'
  return 'All MacBooks'
}

export const macbookPartsCatalog: CatalogItem[] = buildCatalog('macbook', GALLERY_FILES.macbookParts, (key, name) => {
  const group = MACBOOK_PART_TYPES.find(([re]) => re.test(key))?.[1] ?? 'Other parts'
  // Fix "op-Case" style clipped first letters
  const title = name.replace(/^op Case/, 'Top Case').replace(/\bMacbook\b/g, 'MacBook')
  return { name: title, title, group, variant: macbookFamily(key) }
})

// ─── lookups ───────────────────────────────────────────────────────────────

/** First image of the catalogue item with this id — throws if the id is wrong. */
export function catalogImage(items: CatalogItem[], id: string): string {
  const item = items.find((i) => i.id === id)
  if (!item) throw new Error(`Unknown catalogue id: ${id}`)
  return item.images[0]
}
