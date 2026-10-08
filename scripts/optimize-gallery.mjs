// Shrinks product-gallery photos in place so the repo and the page stay light.
//
//   pnpm optimize:gallery
//
// • WebP photos larger than 800px are resized to fit 800×800 and re-encoded at
//   quality 78 (catalogue cards show them at ~200px, the lightbox at ≤800px).
//   Photos already within 800px are left alone, so re-running never degrades them.
// • PNG / JPEG originals dropped in public/images/prod-gallery/ are converted to
//   a 1600px WebP next to them (originals are git-ignored).
//
// Run it before committing new photos, then `pnpm catalog:gallery`.

import sharp from 'sharp'
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname, relative, extname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const GALLERY = join(ROOT, 'public', 'images', 'prod-gallery')
const MAX = 800
const QUALITY = 78

sharp.cache(false)

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  )
}

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

let before = 0
let after = 0
let resized = 0

for (const file of walk(GALLERY)) {
  const ext = extname(file).toLowerCase()

  if (ext === '.webp') {
    // Read into memory first: on Windows, libvips keeps the file open and blocks the overwrite
    const input = readFileSync(file)
    const size = input.length
    const { width = 0, height = 0 } = await sharp(input).metadata()
    if (Math.max(width, height) <= MAX) continue
    const buf = await sharp(input)
      .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toBuffer()
    before += size
    after += Math.min(size, buf.length)
    if (buf.length < size) writeFileSync(file, buf)
    resized++
  } else if (['.png', '.jpg', '.jpeg'].includes(ext) && dirname(file) === GALLERY) {
    const out = join(GALLERY, `${slug(basename(file, extname(file)))}.webp`)
    if (existsSync(out)) continue
    await sharp(file).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out)
    console.log(`converted ${relative(GALLERY, file)} → ${relative(GALLERY, out)}`)
  }
}

const mb = (n) => (n / 1048576).toFixed(1)
console.log(`${resized} photos resized: ${mb(before)} MB → ${mb(after)} MB`)
