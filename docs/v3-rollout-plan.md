# v3 design rollout plan

Goal: carry the v3 homepage style (`src/app/_home`) to the rest of the site's main pages.

## 1. What "v3 style" means (source of truth: `src/app/_home`)

| Element | Homepage implementation |
|---|---|
| Palette | ink `#06131d`, sea `#0b2c3d`, teal `#12506a`, mist `#d5dee7`, paper `#f2f4f6`, orange `#fa6a25` / deep `#d9531a`. Orange is the only accent. |
| Type | Anton, uppercase, for display headings (`.display`, `.displayTight`). Inter for body. Mono for indices and labels. |
| Section head | `(NN)` mono index, then an eyebrow pill with an orange dot, then a big display H2. The lead paragraph sits right-aligned on lg. |
| Rhythm | Sections alternate dark (ink/sea with `.gridBg`) and light (mist/paper/white). `py-20 lg:py-28`, `max-w-[1320px]` container. |
| Controls | `PillButton` (orange or ink, white arrow disc that rotates on hover), `GhostButton`, orange-underline text links, a focus ring on everything. |
| Surfaces | `rounded-3xl` cards with `ring-1` hairlines, glass panels over photos, `<details>` accordions with a rotating plus icon. |
| Motifs | Hanging KH container, CSS `.box` containers, ships sailing lanes, flags, marquee ticker, photo "pills" inside text. |
| Motion | `Reveal` (in-view flag) with CSS-only animations, all turned off under `prefers-reduced-motion`. |
| Chrome | `SiteNav`: fixed, transparent over the hero, frosted once you scroll. Footer: ticker, "Let's move something", link columns, giant wordmark. |

## 2. Phase 0: extract a shared design system (do this first)

Everything is private to `_home` right now. Move it out so inner pages can reuse it without copying.

1. **Tokens in Tailwind.** Add the palette to `globals.css` as an `@theme` block (`--color-ink`, `--color-sea`, and so on) so pages write `bg-ink text-orange` instead of repeating hex values. Load Anton once in `layout.tsx` as `--font-display`.
2. **`src/components/v3/`** holding:
   - `ui.tsx`: `Eyebrow`, `SectionHead`, `PillButton`, `GhostButton`, `Pill`, `focusRing`, button classes
   - `Reveal`, `Icon` (add icons as needed), `Flag`, `HangingContainer`, `ShipIcon`, `ProductCard`
   - `v3.module.css`: the current `landing.module.css` minus the homepage-only bits
   - `SiteNav.tsx`, `SiteFooter.tsx` (footer pulled out of `HomePage.tsx`)
3. **New inner-page primitives:**
   - `PageHero`: full-bleed photo with `heroShade`, breadcrumbs, eyebrow, display H1, lead, CTAs, and an optional glance/stat strip underneath. Variants: `photo` (full height) and `compact` (about 60svh, for utility pages).
   - `Section`: `tone="ink" | "sea" | "mist" | "paper" | "white"`. Sets background, text colour and padding, and passes `dark` down to `SectionHead`.
   - `CtaBand`: the homepage "Ready to move your next shipment?" block, with configurable image and copy.
   - `Prose`: v3 typography for long text (legal pages, blog posts, careers): display H2s, orange-underlined links, mono captions.
   - `Field` / `Select` / `Textarea`: v3 form controls for Quote, Contact, Careers apply and the Investor inquiry form.
   - Restyle `Breadcrumbs` (mono, white/55 on a dark hero).
4. `HomePage.tsx` switches to the shared imports. **No visual change on `/`.** This is how we check the extraction worked.

## 3. Site chrome during migration

`SiteNav` has 5 flat links. The legacy `Header` has mega-dropdowns built from `lib/navigation.ts` (Products → Imports/Exports, Services, Resources).

- Extend `SiteNav` with dropdown panels built from the same `navigation.ts` groups: ink glass panels, product thumbnails, and on mobile a sheet with accordions.
- **Recommended approach:** change `SiteChrome`'s `BARE_ROUTES` into a `V3_ROUTES` matcher that grows as pages move over. Migrated pages render the new nav and footer themselves, and legacy pages keep the old chrome. Once every page in scope has moved, delete `Header.tsx`, `Footer.tsx`, `SiteChrome`, and the Font Awesome and Flaticon CDN stylesheets. That last step is also a performance win.
- Alternative: switch the chrome site-wide on day one. It's faster, but the fixed transparent nav would sit on top of legacy light heroes until each page is redone.

## 4. Pages, in priority order

### Tier 1: main nav and conversion paths
| Page | v3 treatment |
|---|---|
| **About** `/about` | Photo hero (ship-aerial). Story statement with photo pills, like the homepage about block. Khatunganj heritage timeline (2018 → today) as a horizontal track with a container marker. Values as numbered `reasons`-style grid on mist. Capabilities or certs band, reusing the cert cards. Team if we have assets. CTA band. |
| **Products** `/products` | Compact ink hero with an Import/Export count strip. Filter tabs (All / Import / Export / by category). Grid of v3 `ProductCard`s (static, not a marquee). Sourcing yard strip reused from the homepage. CTA. |
| **Product detail** `/products/[slug]` | Hero split: gallery on the left, glass spec card on the right with origin flags and type badge. Trade info as mono `dl` rows (like `potatoSpecs`). Quality and nutrition in tabs or accordions on paper. Related products rail. Quote CTA. Reuses the existing `components/products/*` logic, only the styling changes. |
| **Potato Gulf** `/products/potato-gulf` | Longest page (678 lines). Hero BD → GCC lane card, spec table, packaging and quality photo collage (existing `potato-export/*` images), process track, FAQ accordion. |
| **Services** `/services` | Hero using the modes triptych. Numbered services accordion (homepage pattern, expanded). "How it works" `ProcessTrack`. Trade lanes block. CTA. |
| **Customs** `/services/customs` | Hero with the stamp/port image. Documents chips, a clearance timeline, the duty/TTI explainer as a dark data card, FAQ. |
| **Trade routes** `/services/trade-routes` + 3 lane pages | Hub: lane cards with sailing ships (reuses the route animation). Each lane page: big `CN → BD` display lane hero, transit/mode stats strip, what we move on this lane (product cards), documents, FAQ. One shared `LanePage` template for all three. |
| **SME import** `/services/sme-import-solutions` | Hero, a "who it's for" grid, a process track, CTA. |
| **Industries** `/industries` + 5 sector pages | Hub: the homepage industry cards, larger with photos. Sector pages share one `IndustryPage` template: hero, pain points → our answer, products for this sector, lanes, CTA. |
| **Contact** `/contact` | Split layout: ink left panel with the big email and phone links and address (footer style), v3 form on the right in a paper card. Map in a rounded frame. |
| **Quote** `/quote` | A focused form page, stepped if it helps (product → quantity → destination → contact) using v3 fields. A glass "what happens next" side card. |

### Tier 2
Imports `/imports`, Exports `/exports` (hubs: hero, product grid, lane, CTA). Blog index `/blog` and post `/blog/[slug]`, using the homepage "Trade notes" layout plus `Prose`. FAQ `/faq`: grouped accordions and a sticky category list. Careers `/careers`, `/careers/[id]`, `/careers/apply/[id]`. Investors public landing `/investors`.

### Tier 3
News, Events, Awards, Privacy, Terms, Equal opportunity. These mostly get `PageHero compact` + `Section` + `Prose`. Before redesigning `/customs-clearance-service` and `/potato-export`, check whether they duplicate `/services/customs` and `/products/potato-gulf`. If they do, redirect them instead.

**Out of scope:** `/investors/portal/*` and `/investors/admin` (backoffice). They keep their current UI unless you want them done too.

## 5. Imagery

- **Already usable:** `public/images/v3/*`, `hubs/*`, `potato-export/*`, `products/*`, `blog/*`, `about/*`.
- **`/assets`:** most files are design references (mood board). They carry other companies' branding and text (Reflex, Marks Log, ADNOVS, Transocean, TSAR, Venus, and others), so they are used **only as layout inspiration and never shipped**. A few look like clean photos with no text:
  - `ref (13).jpg`: aerial of a container ship bow, portrait, 3584×5120. Good for Services and Trade routes heroes.
  - `ref (14).jpg`: container ship at open sea. Good for the About or Imports hero.
  - `ref (25).jpg`: looking up between orange containers. Good for the Products hero or a CTA.
  - `ref (29).jpg`: ship / truck / plane aerial triptych. Good for Services or SME.
  - `ref (30).jpg`: already in use as `truck-apron.webp`.
  - The licence for these is unknown, so confirm before shipping them.
- **Gaps to fill from Pexels/Unsplash** (same licence practice as `CREDITS.md`): customs/port officer with documents, warehouse racking, a Chattogram-style port crane yard, retail shelves, hotel kitchen, factory floor, farm field, Dhaka office/team.
- Pipeline: extend `scripts/build-v3-images.py` to crop and encode to webp at the target sizes into `public/images/v3/<page>/`, and log every image in `CREDITS.md`.

## 6. Guardrails for every page

- Keep each page's `metadata`, canonical, OG and JSON-LD exactly as they are. Change markup only, never SEO copy, unless asked.
- Server components by default. Only nav, filters and forms become client components.
- Test at 375, 768 and 1440 px: no horizontal scroll, and tap targets of at least 40px.
- Reduced motion: every animation has a static end state.
- Contrast: white on orange is fine for large text and buttons. Body text on mist uses `ink/70`.
- Run `pnpm build` and `pnpm lint` before each commit, plus a Lighthouse spot check with `scripts/lighthouse-check.js` on Tier 1 pages.

## 7. Delivery sequence (commits on `v3`)

1. Phase 0: design-system extraction and `/` refactor, with no visual change.
2. `SiteNav` dropdowns, `SiteFooter`, and the `V3_ROUTES` chrome switch.
3. About, Contact, Quote (simple pages that exercise the hero, forms and CTA).
4. Products hub, product detail, Potato Gulf.
5. Services hub, Customs, SME, the Trade routes hub and the `LanePage` template.
6. Industries hub and the `IndustryPage` template.
7. Tier 2 pages.
8. Tier 3 pages, then removal of the legacy chrome and CDN icon fonts.

## 8. Decisions (2026-09-30)

1. Chrome: per-route switch. `SiteChrome` holds `V3_EXACT`, `V3_PREFIXES` and `LEGACY_EXCEPTIONS`.
2. All 40 images in `/assets` may be used. Crops still leave out other companies' logos and text.
3. Investor portal and admin keep their current UI.
4. No `(01)` section numbering on inner pages. `SectionHead`'s `index` prop is optional, and only the homepage passes it.
5. Priority: products and product detail first.

## 9. Progress

- [x] Phase 0: shared system in `src/components/v3/`: `V3Shell`, `SiteNav` (with dropdowns from `nav.ts`), `SiteFooter`, `ui.tsx`, `CtaBand`, `Crumbs`, `SourcingYard` / `CertCards`, `sourcing.ts`, `site.ts`, `v3.module.css`
- [x] `/products`: hero mosaic, filterable catalogue, sourcing yard, buying terms, CTA
- [x] `/products/[slug]`: gallery hero, trade facts, spec sheet, nutrition, origin & quality, quote form, related products
- [ ] `/products/potato-gulf` (listed in `LEGACY_EXCEPTIONS` until it is redone)
- [ ] About, Contact, Quote
- [ ] Services + customs, SME, trade routes
- [ ] Industries
- [ ] Tier 2 / Tier 3
