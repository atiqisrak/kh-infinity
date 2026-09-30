import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/products";
import Crumbs from "@/components/v3/Crumbs";
import CtaBand from "@/components/v3/CtaBand";
import Icon from "@/components/v3/Icons";
import ProductCatalogue, { type CatalogueItem } from "@/components/v3/products/ProductCatalogue";
import { CertCards, SourcingYard } from "@/components/v3/SourcingYard";
import { sourcingFacts } from "@/components/v3/sourcing";
import { shipmentDocs } from "@/components/v3/site";
import { Eyebrow, GhostButton, PillButton, SectionHead, pad, productOrigins } from "@/components/v3/ui";
import V3Shell from "@/components/v3/V3Shell";
import s from "@/components/v3/v3.module.css";

export const metadata: Metadata = {
  title:
    "Premium Import & Export Products - K.H. Infinity | Global Trade Solutions",
  description:
    "Explore our premium range of import and export products including sunflower oil, milk powder, pulses, sugar, and more. High-quality products sourced from trusted global suppliers.",
  keywords:
    "import products, export products, sunflower oil, milk powder, pulses, sugar, chickpeas, cumin, tarpaulin, K.H. Infinity, Bangladesh trade",
  alternates: {
    canonical: "https://khi.com.bd/products",
  },
  openGraph: {
    title: "Premium Import & Export Products - K.H. Infinity",
    description:
      "Explore our premium range of import and export products including sunflower oil, milk powder, pulses, sugar, and more. High-quality products sourced from trusted global suppliers.",
    images: ["/images/cover/kh1.webp"],
    url: "https://khi.com.bd/products",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Import & Export Products - K.H. Infinity",
    description:
      "Explore our premium range of import and export products including sunflower oil, milk powder, pulses, sugar, and more. High-quality products sourced from trusted global suppliers.",
    images: ["/images/cover/kh1.webp"],
  },
};

// Hero mosaic: product photos from the catalogue (ids must exist in lib/products)
const MOSAIC = ["cumin", "medjool-dates", "almonds", "sugar"];

// Lead times and payment terms, as published in the FAQ
const TERMS = [
  { label: "Sea freight", value: "20–45 days", note: "Depending on origin port" },
  { label: "Air freight", value: "3–7 days", note: "For urgent or high-value lots" },
  { label: "Customs clearance", value: "2–5 days", note: "Working days, by our in-house team" },
];
const PAYMENT_TERMS = ["Letter of Credit (L/C)", "Wire transfer", "Documentary collection", "Advance payment"];

function MosaicTile({ src, className, sizes, priority = false }: { src?: string; className: string; sizes: string; priority?: boolean }) {
  if (!src) return null;
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-[#0b2c3d] ${className}`}>
      <Image src={src} alt="" fill priority={priority} sizes={sizes} className="object-cover" />
    </div>
  );
}

export default function ProductsPage() {
  const products = getProducts();
  const { countries, certs } = sourcingFacts(products);
  const categories = new Set(products.map((p) => p.category));
  const mosaic = MOSAIC.map((id) => products.find((p) => p.id === id)?.image);

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
      {/* ───────────── HERO ───────────── */}
      <section aria-labelledby="products-title" className={`${s.gridBg} relative overflow-hidden bg-[#06131d] pt-[104px] lg:pt-[124px]`}>
        <div className={`${pad} grid items-center gap-12 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-20`}>
          <div>
            <Crumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
            <div className="mt-8">
              <Eyebrow>Our collection</Eyebrow>
            </div>
            <h1 id="products-title" className={`${s.display} mt-5 text-[clamp(3rem,5.6vw,5.25rem)]`}>
              Premium import
              <br />
              &amp; export <span className="text-[#fa6a25]">products</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Discover our carefully curated selection of premium products, sourced from and delivered to global markets.
              Our{" "}
              <Link
                href="/services"
                className="font-semibold text-white underline decoration-[#fa6a25] decoration-2 underline-offset-4 hover:text-[#fa6a25]"
              >
                import-export services
              </Link>{" "}
              ensure quality and reliability for all products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href="/quote">Request a quote</PillButton>
              <GhostButton href="#catalogue">Browse the catalogue</GhostButton>
            </div>
          </div>

          {/* Photo mosaic; the orange container tile carries the line count */}
          <div aria-hidden="true" className="grid h-[380px] grid-cols-6 grid-rows-6 gap-3 sm:h-[520px]">
            <MosaicTile src={mosaic[0]} className="col-span-4 row-span-4" sizes="(min-width: 1024px) 400px, 66vw" priority />
            <MosaicTile src={mosaic[1]} className="col-span-2 row-span-3" sizes="(min-width: 1024px) 200px, 33vw" />
            <div
              className={`${s.box} col-span-2 row-span-3 flex flex-col justify-end rounded-3xl p-4 sm:p-5`}
              style={{ "--c": "#fa6a25" } as React.CSSProperties}
            >
              <span className={`${s.display} ${s.displayTight} text-5xl sm:text-6xl`}>{products.length}</span>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 sm:text-xs">Product lines</span>
            </div>
            <MosaicTile src={mosaic[2]} className="col-span-2 row-span-2" sizes="(min-width: 1024px) 200px, 33vw" />
            <MosaicTile src={mosaic[3]} className="col-span-2 row-span-2" sizes="(min-width: 1024px) 200px, 33vw" />
          </div>
        </div>

        <dl className={`${pad} grid grid-cols-2 lg:grid-cols-4`}>
          {stats.map((st, i) => (
            <div
              key={st.label}
              className={`flex flex-col-reverse border-t border-white/10 py-7 ${i > 0 ? "lg:border-l lg:pl-8" : ""} ${
                i % 2 === 1 ? "max-lg:border-l max-lg:pl-5" : ""
              }`}
            >
              <dt className="mt-2 text-xs uppercase tracking-[0.14em] text-white/55">{st.label}</dt>
              <dd className={`${s.display} ${s.displayTight} text-5xl`}>{st.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ───────────── CATALOGUE ───────────── */}
      <section id="catalogue" aria-label="Product catalogue" className="bg-[#f2f4f6] pb-20 text-[#06131d] lg:pb-28">
        <div className={pad}>
          <ProductCatalogue items={items} />
        </div>
      </section>

      {/* ───────────── SOURCING & COMPLIANCE ───────────── */}
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
              We buy from mills, farms and packers we have vetted ourselves. Every container in this yard is an origin
              we trade with. Hover or tap one to see what we bring in from there.
            </p>
          </div>
          <SourcingYard countries={countries} />
        </div>
        <div className={`${pad} mt-16`}>
          <CertCards certs={certs} />
        </div>
      </section>

      {/* ───────────── BUYING TERMS ───────────── */}
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
              Every product ships with the same paperwork and the same clearance team. Here is what to expect once you
              confirm an order.
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
