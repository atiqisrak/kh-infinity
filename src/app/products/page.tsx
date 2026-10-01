import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/products";
import { breadcrumbSchema } from "@/lib/schema-helpers";
import CtaBand from "@/components/v3/CtaBand";
import Icon from "@/components/v3/Icons";
import Crumbs from "@/components/v3/Crumbs";
import ProductCatalogue, { type CatalogueItem } from "@/components/v3/products/ProductCatalogue";
import { CertCards, SourcingYard } from "@/components/v3/SourcingYard";
import { sourcingFacts } from "@/components/v3/sourcing";
import { shipmentDocs } from "@/components/v3/site";
import { Eyebrow, GhostButton, PillButton, SectionHead, pad, productOrigins } from "@/components/v3/ui";
import V3Shell from "@/components/v3/V3Shell";
import s from "@/components/v3/v3.module.css";

export const metadata: Metadata = {
  title: "Premium Import & Export Products - K.H. Infinity | Global Trade Solutions",
  description:
    "Explore our premium range of import and export products including sunflower oil, milk powder, pulses, sugar, and more. High-quality products sourced from trusted global suppliers.",
  keywords:
    "import products, export products, sunflower oil, milk powder, pulses, sugar, chickpeas, cumin, tarpaulin, K.H. Infinity, Bangladesh trade",
  alternates: { canonical: "https://khi.com.bd/products" },
  openGraph: {
    title: "Premium Import & Export Products - K.H. Infinity",
    description:
      "Explore our premium range of import and export products including sunflower oil, milk powder, pulses, sugar, and more.",
    images: ["/images/cover/kh1.webp"],
    url: "https://khi.com.bd/products",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Import & Export Products - K.H. Infinity",
    description: "Explore our premium range of import and export products.",
    images: ["/images/cover/kh1.webp"],
  },
};

const PAYMENT_TERMS = ["Letter of Credit (L/C)", "Wire transfer", "Documentary collection", "Advance payment"];
const TERMS = [
  { label: "Sea freight", value: "20–45 days", note: "Depending on origin port" },
  { label: "Air freight", value: "3–7 days", note: "For urgent or high-value lots" },
  { label: "Customs clearance", value: "2–5 days", note: "Working days, in-house team" },
];

export default function ProductsPage() {
  const products = getProducts();
  const { countries, certs } = sourcingFacts(products);
  const crumbs = breadcrumbSchema([
    { name: "Home", url: "https://khi.com.bd/" },
    { name: "Products", url: "https://khi.com.bd/products" },
  ]);
  const categories = new Set(products.map((p) => p.category));

  const items: CatalogueItem[] = products.map((p) => ({
    id: p.id,
    name: p.name,
    image: p.image,
    type: p.type,
    category: p.category,
    description: p.description,
    origins: productOrigins(p),
    hsCode: p.hsCode,
  }));

  const stats = [
    { value: products.filter((p) => p.type === "import").length, label: "Import lines" },
    { value: products.filter((p) => p.type === "export").length, label: "Export lines" },
    { value: countries.length, label: "Origin countries" },
    { value: categories.size, label: "Categories" },
  ];

  return (
    <V3Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        aria-labelledby="products-title"
        className={`${s.gridBg} relative overflow-hidden bg-[#06131d] pt-[104px] lg:pt-[124px]`}
      >
        <div className={`${pad} grid items-center gap-12 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-20`}>
          {/* Left: copy */}
          <div>
            <Crumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
            <div className="mt-8">
              <Eyebrow>Our collection</Eyebrow>
            </div>
            <h1 id="products-title" className={`${s.display} mt-5 text-[clamp(3rem,5.6vw,5.25rem)]`}>
              Premium import
              <br />
              &amp; export{" "}
              <span className="text-[#fa6a25]">products</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Carefully curated from mills, farms and packers we have vetted ourselves. Our{" "}
              <Link
                href="/services"
                className="font-semibold text-white underline decoration-[#fa6a25] decoration-2 underline-offset-4 hover:text-[#fa6a25]"
              >
                import-export services
              </Link>{" "}
              ensure quality and reliability at every step.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href="/quote">Request a quote</PillButton>
              <GhostButton href="#catalogue">Browse the catalogue</GhostButton>
            </div>
          </div>

          {/* Right: video hero */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#0b2c3d]">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/v3/ship-open-sea.webp"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/videos/hero-loop.mp4" type="video/mp4" />
              </video>
              {/* Vignette for chip legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06131d]/60 via-transparent to-transparent" />
              {/* Glass stat chips in the lower corners */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div className={`${s.glass} rounded-2xl px-4 py-3`}>
                  <p className={`${s.display} ${s.displayTight} text-4xl text-[#fa6a25]`}>
                    {products.length}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
                    Product lines
                  </p>
                </div>
                <div className={`${s.glass} rounded-2xl px-4 py-3 text-right`}>
                  <p className={`${s.display} ${s.displayTight} text-4xl text-white`}>
                    {countries.length}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
                    Origin countries
                  </p>
                </div>
              </div>
            </div>
            {/* Orange accent bar below the video card */}
            <div className="mt-3 flex gap-2">
              <div className="h-1 flex-1 rounded-full bg-[#fa6a25]" />
              <div className="h-1 w-12 rounded-full bg-white/15" />
              <div className="h-1 w-6 rounded-full bg-white/10" />
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <dl className={`${pad} grid grid-cols-2 lg:grid-cols-4`}>
          {stats.map((st, i) => (
            <div
              key={st.label}
              className={`flex flex-col-reverse border-t border-white/10 py-7 ${i > 0 ? "lg:border-l lg:pl-8" : ""} ${
                i % 2 === 1 ? "max-lg:border-l max-lg:pl-5" : ""
              }`}
            >
              <dt className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-white/55">{st.label}</dt>
              <dd className={`${s.display} ${s.displayTight} text-5xl`}>{st.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── MARQUEE PREVIEW RAIL ─────────────────────────────────── */}
      <div className="overflow-hidden bg-[#0b2c3d] py-8">
        <div className={`${pad} mb-5 flex items-center justify-between`}>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            All {products.length} lines — scroll to preview
          </p>
          <Link
            href="#catalogue"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#fa6a25] underline underline-offset-4 hover:text-white"
          >
            Filter &amp; browse →
          </Link>
        </div>
        <div className={`${s.productViewport} overflow-hidden`} aria-hidden="true">
          <div className={s.productTrack}>
            {[...products, ...products].map((p, i) => (
              <Link
                key={i}
                href={`/products/${p.id}`}
                tabIndex={-1}
                className="mx-2 flex w-52 shrink-0 flex-col gap-3 rounded-2xl bg-white/[0.06] p-3 ring-1 ring-white/10 transition hover:ring-[#fa6a25]/50"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-[#12506a]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="208px"
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                  <span
                    className={`absolute right-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      p.type === "export"
                        ? "bg-[#fa6a25] text-white"
                        : "bg-white/15 text-white/80"
                    }`}
                  >
                    {p.type}
                  </span>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">{p.category}</p>
                  <p className="text-sm font-semibold leading-snug">{p.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── CATALOGUE ────────────────────────────────────────────── */}
      <section id="catalogue" aria-label="Product catalogue" className="bg-[#f2f4f6] pb-20 text-[#06131d] lg:pb-28">
        <div className={pad}>
          <ProductCatalogue items={items} />
        </div>
      </section>

      {/* ── SOURCING & COMPLIANCE ────────────────────────────────── */}
      <section aria-labelledby="sourcing-heading" className="bg-white py-20 text-[#06131d] lg:py-28">
        <div className={`${pad} grid gap-14 xl:grid-cols-[0.8fr_1.2fr] xl:items-end xl:gap-16`}>
          <div>
            <SectionHead
              dark
              eyebrow="Sourcing & compliance"
              id="sourcing-heading"
              title={
                <>
                  Sourced from
                  <br />
                  <span className="text-[#fa6a25]">{countries.length}</span> countries
                </>
              }
            />
            <p className="mt-6 max-w-md text-[#06131d]/70">
              We buy from mills, farms and packers we have vetted ourselves. Every container in this yard is an
              origin we trade with. Hover or tap one to see what we bring in from there.
            </p>
          </div>
          <SourcingYard countries={countries} />
        </div>
        <div className={`${pad} mt-16`}>
          <CertCards certs={certs} />
        </div>
      </section>

      {/* ── BUYING TERMS ─────────────────────────────────────────── */}
      <section aria-labelledby="terms-heading" className={`${s.gridBg} bg-[#0b2c3d] py-20 lg:py-28`}>
        <div className={pad}>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHead
              eyebrow="Buying with KHI"
              id="terms-heading"
              title={
                <>
                  How orders
                  <br />
                  move
                </>
              }
            />
            <p className="max-w-md text-white/70 lg:pb-3">
              Every product ships with the same paperwork and the same clearance team. Here is what to expect
              once you confirm an order.
            </p>
          </div>

          <dl className="mt-12 grid gap-4 md:grid-cols-3">
            {TERMS.map((t) => (
              <div key={t.label} className="flex flex-col-reverse rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10">
                <dt>
                  <span className="block font-semibold">{t.label}</span>
                  <span className="mt-1 block text-sm text-white/55">{t.note}</span>
                </dt>
                <dd className={`${s.display} mb-4 text-5xl text-[#fa6a25]`}>{t.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">Payment terms</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {PAYMENT_TERMS.map((t) => (
                  <li key={t} className="rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-white/85">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">With every shipment</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {shipmentDocs.map((d) => (
                  <li
                    key={d}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-white/85"
                  >
                    <Icon name="receipt" className="h-4 w-4 text-[#fa6a25]" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Ready to source
            <br />
            these <span className="text-[#fa6a25]">products?</span>
          </>
        }
        body="Get competitive pricing and reliable delivery for any of our premium import or export products."
        image="/images/v3/road-and-sea.webp"
        imageAlt="Aerial view of a truck convoy on a forest road beside a loaded container ship"
      />
    </V3Shell>
  );
}
