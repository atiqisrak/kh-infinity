import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, getRelatedProducts, type Product } from "@/lib/products";
import { buildProductSchema, speakableWebPageSchema } from "@/lib/schema-helpers";
import Crumbs from "@/components/v3/Crumbs";
import Flag, { flagCodeFor } from "@/components/v3/Flag";
import HangingContainer from "@/components/v3/HangingContainer";
import Icon, { type IconName } from "@/components/v3/Icons";
import ProductGallery from "@/components/v3/products/ProductGallery";
import { certLogos, phone, shipmentDocs } from "@/components/v3/site";
import { certKey, YARD_COLOURS } from "@/components/v3/sourcing";
import { ArrowLink, Eyebrow, GhostButton, PillButton, ProductCard, SectionHead, focusRing, pad } from "@/components/v3/ui";
import V3Shell from "@/components/v3/V3Shell";
import s from "@/components/v3/v3.module.css";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const { products } = await import("@/lib/products");

  return products.map((product: any) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const productUrl = `https://khi.com.bd/products/${product.id}`;

  return {
    title: `${product.brand ? product.brand + " " : ""}${
      product.name
    } - K.H. Infinity | Premium ${
      product.type === "import" ? "Import" : "Export"
    } Product`,
    description: product.geoAnchor ?? product.description,
    keywords: `${product.name}, ${product.type} product, ${product.category}, K.H. Infinity, Bangladesh trade`,
    alternates: {
      canonical: productUrl,
    },
    openGraph: {
      title: `${product.brand ? product.brand + " " : ""}${
        product.name
      } - K.H. Infinity`,
      description: product.description,
      images: [product.image],
      url: productUrl,
      siteName: "K.H. Infinity",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.brand ? product.brand + " " : ""}${
        product.name
      } - K.H. Infinity`,
      description: product.description,
      images: [product.image],
    },
  };
}

function formatUpdatedAt(dateString?: string) {
  if (!dateString) return undefined;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function tradeFacts(product: Product) {
  const facts: { label: string; value: string }[] = [];
  if (product.hsCode) facts.push({ label: "HS code", value: product.hsCode });
  if (product.hsSection) facts.push({ label: "Tariff section", value: product.hsSection });
  if (product.ttiRange) facts.push({ label: "Total tax incidence", value: product.ttiRange });
  facts.push({
    label: product.type === "import" ? "Sourced from" : "Origin",
    value: product.sourcing.countries.join(", "),
  });
  const updated = formatUpdatedAt(product.updatedAt);
  if (updated) facts.push({ label: "Data verified", value: updated });
  return facts;
}

const labelCls = "font-mono text-[11px] uppercase tracking-[0.16em]";

// Light card with an icon disc, title and a check list
function ListCard({ icon, title, items }: { icon: IconName; title: string; items: string[] }) {
  return (
    <div className="rounded-3xl bg-white p-6 ring-1 ring-[#06131d]/[0.06] sm:p-8">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#fa6a25]/10 text-[#d9531a]">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-[#0b2c3d]">{title}</h3>
      </div>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-[#06131d]/75">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-[#fa6a25]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RowTable({ title, rows }: { title: string; rows: Record<string, string> }) {
  return (
    <div className="rounded-3xl bg-[#f2f4f6] p-6 sm:p-8">
      <h3 className={`${labelCls} text-[#06131d]/50`}>{title}</h3>
      <dl className="mt-4 divide-y divide-[#06131d]/10">
        {Object.entries(rows).map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-6 py-3">
            <dt className="text-sm text-[#06131d]/60">{k}</dt>
            <dd className="text-right text-sm font-semibold text-[#0b2c3d]">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

const inputCls =
  "w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-[15px] text-white placeholder:text-white/35 outline-none transition focus:border-[#fa6a25] focus:bg-white/[0.09] focus:ring-4 focus:ring-[#fa6a25]/20";

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);
  const isImport = product.type === "import";
  const gallery = product.images && product.images.length > 0 ? product.images : [product.image];
  const facts = tradeFacts(product);
  const origins = product.sourcing.countries;

  const productUrl = `https://khi.com.bd/products/${product.id}`;
  const structuredData = buildProductSchema(product);
  const speakableData = speakableWebPageSchema({
    url: productUrl,
    name: product.name,
    dateModified: product.updatedAt,
  });

  return (
    <V3Shell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(speakableData),
        }}
      />

      {/* ───────────── HERO ───────────── */}
      <section className={`${s.gridBg} relative overflow-hidden bg-[#06131d] pt-[104px] lg:pt-[124px]`}>
        <div className={pad}>
          <Crumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.category },
              { label: product.name },
            ]}
          />
        </div>

        <div className={`${pad} grid gap-10 pb-14 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-20`}>
          <ProductGallery
            images={gallery}
            alt={product.name}
            badge={
              <span
                className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                  isImport ? "bg-[#06131d]/75 text-white backdrop-blur" : "bg-[#fa6a25] text-white"
                }`}
              >
                {product.type}
              </span>
            }
          />

          <div>
            <Eyebrow>
              {isImport ? "Direct B2B import" : "Direct B2B export"}
              {product.hsCode && ` · HS ${product.hsCode}`}
            </Eyebrow>
            <h1 className={`${s.display} mt-5 text-[clamp(2.6rem,4.8vw,4.5rem)]`}>
              {product.brand && <span className="text-[#fa6a25]">{product.brand} </span>}
              {product.name}
            </h1>
            {product.geoAnchor && (
              <p
                className="geo-anchor mt-6 border-l-2 border-[#fa6a25] pl-4 text-base font-medium leading-relaxed text-white/85 sm:text-lg"
                data-speakable
              >
                {product.geoAnchor}
              </p>
            )}
            <p className="mt-4 max-w-xl leading-relaxed text-white/65">{product.description}</p>
            {product.geoHeading && <h2 className="sr-only">{product.geoHeading}</h2>}

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
              <span className={`${labelCls} text-white/40`}>{isImport ? "Origins" : "Origin"}</span>
              {origins.map((c) => {
                const code = flagCodeFor(c);
                return (
                  <span key={c} className="inline-flex items-center gap-1.5">
                    {code && <Flag code={code} className="h-3.5 w-[21px]" />}
                    {c}
                  </span>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href="#contact">Request a quote</PillButton>
              <GhostButton href="#specifications">View specifications</GhostButton>
            </div>
          </div>
        </div>

        {/* Trade facts strip */}
        {/* One column per fact on desktop (products carry 2–5 facts) */}
        <dl className={`${pad} grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-flow-col lg:grid-cols-none lg:auto-cols-fr lg:gap-x-0`}>
          {facts.map((f, i) => (
            <div key={f.label} className={`border-t border-white/10 py-6 pr-4 ${i > 0 ? "lg:border-l lg:pl-6" : ""}`}>
              <dt className={`${labelCls} text-white/45`}>{f.label}</dt>
              <dd className="mt-2 text-[15px] font-semibold leading-snug text-white">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {slug === "potato" && (
        <Link
          href="/products/potato-gulf"
          className={`group block bg-[#fa6a25] text-white transition-colors hover:bg-[#d9531a] ${focusRing}`}
        >
          <span className={`${pad} flex flex-wrap items-center justify-between gap-3 py-5`}>
            <span>
              <span className="font-semibold">Sourcing for Gulf &amp; GCC?</span>{" "}
              <span className="text-white/85">Open the potato export hub for logistics, documentation, and buyer FAQs.</span>
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#d9531a] transition group-hover:rotate-45">
              <Icon name="arrow" className="h-4 w-4" />
            </span>
          </span>
        </Link>
      )}

      {/* ───────────── DETAILS ───────────── */}
      <section id="specifications" aria-labelledby="details-heading" className="bg-[#f2f4f6] py-20 text-[#06131d] lg:py-28">
        <div className={pad}>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHead
              dark
              size="md"
              eyebrow="Product details"
              id="details-heading"
              title={
                <>
                  Everything you
                  <br />
                  need to know
                </>
              }
            />
            <p className="max-w-md text-[#06131d]/70 lg:pb-2">
              Specification, {isImport ? "benefits" : "features"} and packing for {product.name.toLowerCase()}. Need a
              different grade or pack size? Ask us and we will source to your spec.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            {/* Spec sheet */}
            <div className="rounded-3xl bg-[#06131d] p-6 text-white sm:p-8 lg:col-span-7">
              <div className="flex items-center justify-between gap-4">
                <h3 className={`${s.display} text-3xl`}>Specifications</h3>
                <span className={`${labelCls} text-white/40`}>{product.category}</span>
              </div>
              <dl className="mt-6 divide-y divide-white/10 border-y border-white/10">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                    <dt className={`${labelCls} text-white/45 sm:pt-0.5`}>{key}</dt>
                    <dd className="text-[15px] text-white/90">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-xs text-white/45">
                Specs are typical for current lots. Final values are confirmed on the contract and certificate of analysis.
              </p>
            </div>

            <div className="grid gap-4 lg:col-span-5">
              <ListCard icon="spark" title={isImport ? "Health benefits" : "Key features"} items={product.benefits} />
              <ListCard icon="box" title="Packaging options" items={product.packaging} />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── NUTRITION ───────────── */}
      {product.nutritionalInfo && (
        <section aria-labelledby="nutrition-heading" className="bg-white py-20 text-[#06131d] lg:py-28">
          <div className={`${pad} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
            <div>
              <SectionHead
                dark
                size="md"
                eyebrow="Nutrition facts"
                id="nutrition-heading"
                title={
                  <>
                    Nutritional
                    <br />
                    information
                  </>
                }
              />
              <p className="mt-6 max-w-sm text-[#06131d]/70">Typical values per 100 g, with storage and shelf-life notes.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <RowTable title="Per 100g serving" rows={product.nutritionalInfo.per100g} />
              <RowTable title="Additional info" rows={product.nutritionalInfo.additional} />
            </div>
          </div>
        </section>
      )}

      {/* ───────────── ORIGIN & QUALITY ───────────── */}
      <section aria-labelledby="quality-heading" className="bg-[#d5dee7] py-20 text-[#06131d] lg:py-28">
        <div className={pad}>
          <SectionHead
            dark
            size="md"
            eyebrow="Trust & compliance"
            id="quality-heading"
            title={
              <>
                Origin &amp; quality
                <br />
                standards
              </>
            }
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <div className="flex flex-col rounded-3xl bg-white/70 p-6 ring-1 ring-[#06131d]/[0.06] sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-[#0b2c3d]">Sourcing</h3>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#06131d]/70">
                Our {product.name.toLowerCase()} is sourced from premium producers in {origins.join(", ")}. We maintain
                strict quality standards and sustainable practices throughout our supply chain.
              </p>
              {/* Origins as containers on a quay, with the next one being lowered in */}
              <div className="mt-auto pt-8">
                <div aria-hidden="true" className="ml-auto w-28 sm:w-36">
                  <div className={s.sway}>
                    <HangingContainer className="h-auto w-full drop-shadow-[0_18px_24px_rgba(6,19,29,0.25)]" />
                  </div>
                </div>
                <ul className="mt-2 flex flex-wrap-reverse gap-2">
                  {origins.map((c, i) => {
                    const code = flagCodeFor(c);
                    return (
                      <li
                        key={c}
                        className={`${s.box} flex h-12 min-w-[150px] flex-1 items-center gap-2 px-4 sm:flex-none`}
                        style={{ "--c": YARD_COLOURS[i % YARD_COLOURS.length] } as React.CSSProperties}
                      >
                        {code && <Flag code={code} className="h-3.5 w-5" />}
                        <span className={`${s.display} ${s.displayTight} text-sm tracking-[0.04em] text-white`}>{c}</span>
                      </li>
                    );
                  })}
                </ul>
                <div aria-hidden="true" className="relative mt-2 h-3 overflow-hidden rounded-md bg-[#0b2c3d]">
                  <div className="absolute inset-x-0 top-0 h-1 bg-[repeating-linear-gradient(135deg,#f5c518_0_10px,#1b1f24_10px_20px)]" />
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-[#06131d]/[0.06] sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-[#0b2c3d]">Quality assurance</h3>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#06131d]/70">
                Every batch undergoes rigorous quality testing to ensure it meets international food safety standards.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {product.sourcing.certifications.map((cert) => {
                  const logo = certLogos[certKey(cert)];
                  return (
                    <li key={cert} className="flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-[#06131d]/[0.06]">
                      {logo ? (
                        <span className="relative h-11 w-11 shrink-0">
                          <Image src={logo.src} alt="" fill sizes="44px" className="object-contain" />
                        </span>
                      ) : (
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#fa6a25]/10 text-[#d9531a]">
                          <Icon name="shield" className="h-5 w-5" />
                        </span>
                      )}
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-[#0b2c3d]">{cert}</span>
                        {logo && <span className="block text-xs text-[#06131d]/55">{logo.note}</span>}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 border-t border-[#06131d]/10 pt-5">
                <p className={`${labelCls} text-[#06131d]/45`}>With every shipment</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {shipmentDocs.map((d) => (
                    <li
                      key={d}
                      className="inline-flex items-center gap-2 rounded-full border border-[#06131d]/12 bg-white px-3 py-1 text-xs text-[#0b2c3d]"
                    >
                      <Icon name="receipt" className="h-3.5 w-3.5 text-[#d9531a]" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── QUOTE ───────────── */}
      <section id="contact" aria-labelledby="quote-heading" className="relative isolate overflow-hidden bg-[#06131d] py-20 lg:py-28">
        <Image
          src="/images/v3/road-and-sea.webp"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06131d] via-[#06131d]/90 to-[#06131d]/60" />
        <div className={`${pad} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}>
          <div>
            <SectionHead
              eyebrow="Request a quote"
              id="quote-heading"
              title={
                <>
                  Get a price for
                  <br />
                  <span className="text-[#fa6a25]">{product.name}</span>
                </>
              }
              size="md"
            />
            <p className="mt-6 max-w-md text-white/70">
              Share your requirements and our trade team will respond within 24 hours.
            </p>
            <ul className="mt-8 grid max-w-md gap-3 text-sm text-white/75">
              {["Itemised landed cost before you commit", "Duty and TTI shown upfront", "Documents prepared and checked with you"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#fa6a25] text-white">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {t}
                  </li>
                )
              )}
            </ul>
            <a href={phone.href} className="mt-8 inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-[#fa6a25]">
              Or call {phone.display}
            </a>
          </div>

          <form className={`${s.glass} grid gap-5 rounded-[2rem] p-6 sm:p-8`}>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={`${labelCls} mb-2 block text-white/55`} htmlFor="name">
                  Name
                </label>
                <input type="text" id="name" className={inputCls} required autoComplete="name" />
              </div>
              <div>
                <label className={`${labelCls} mb-2 block text-white/55`} htmlFor="email">
                  Email
                </label>
                <input type="email" id="email" className={inputCls} required autoComplete="email" />
              </div>
            </div>
            <div>
              <label className={`${labelCls} mb-2 block text-white/55`} htmlFor="quantity">
                Required quantity
              </label>
              <input type="text" id="quantity" className={inputCls} required placeholder="e.g. 2 × 20ft containers" />
            </div>
            <div>
              <label className={`${labelCls} mb-2 block text-white/55`} htmlFor="message">
                Additional requirements
              </label>
              <textarea id="message" rows={4} className={inputCls} placeholder="Grade, packing, destination port…" />
            </div>
            <button
              type="submit"
              className={`group inline-flex items-center justify-between gap-3 rounded-full bg-[#fa6a25] py-2 pl-6 pr-2 font-semibold text-white transition-colors hover:bg-[#d9531a] ${focusRing}`}
            >
              Submit request
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#d9531a] transition-transform group-hover:rotate-45">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </button>
          </form>
        </div>
      </section>

      {/* ───────────── RELATED ───────────── */}
      {relatedProducts.length > 0 && (
        <section aria-labelledby="related-heading" className="border-t border-white/10 bg-[#0b2c3d] py-20 lg:py-28">
          <div className={pad}>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHead eyebrow="Explore more" id="related-heading" title="Related products" size="md" />
              <div className="pb-2">
                <ArrowLink href="/products">All products</ArrowLink>
              </div>
            </div>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p) => (
                <li key={p.id}>
                  <ProductCard product={p} sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </V3Shell>
  );
}
