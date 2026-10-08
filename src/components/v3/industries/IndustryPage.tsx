import Image from "next/image";
import { isRemoteImage } from "@/lib/image-src";
import Link from "next/link";
import { getProduct } from "@/lib/products";
import Icon, { type IconName } from "../Icons";
import PageHero from "../PageHero";
import ProcessTrack, { type ProcessStep } from "../ProcessTrack";
import { ListCard, Section, labelCls } from "../blocks";
import { YARD_COLOURS } from "../sourcing";
import { ArrowLink, GhostButton, PillButton, SectionHead, focusRing, pad } from "../ui";
import V3Shell from "../V3Shell";
import s from "../v3.module.css";
import IndustryCta from "./IndustryCta";
import { sectors, type Sector } from "./sectors";

// Shared template for the five /industries/<sector> pages:
// hero (ink, product mosaic) → expertise (white, photo + highlight containers)
// → products (ink) → why us (mist) → optional process (sea) → other sectors → CTA.
// Each page passes its own copy; metadata stays in the page file.

export interface IndustryLink {
  label: string;
  href: string;
}

export interface IndustryItem {
  name: string;
  body: string;
  icon: IconName;
  /** Catalogue id: shows the product photo and a "View product" link */
  productId?: string;
  /** Overrides the default product link (e.g. an extra hub link) */
  links?: IndustryLink[];
}

export interface IndustryData {
  slug: Sector["slug"];
  hero: {
    eyebrow: string;
    title: React.ReactNode;
    lead: string;
    /** Four photos: large, tall, small, small */
    images: [string, string, string, string];
  };
  expertise: {
    title: React.ReactNode;
    paragraphs: React.ReactNode[];
    image: string;
    imageAlt: string;
    highlights: { value: string; label: string }[];
    quote: IndustryLink;
    extraLink?: IndustryLink;
  };
  products: { eyebrow: string; title: React.ReactNode; items: IndustryItem[] };
  benefits: { title: React.ReactNode; items: { title: string; body: string; icon: IconName }[] };
  process?: { title: React.ReactNode; steps: ProcessStep[] };
  cta: {
    title: React.ReactNode;
    body: string;
    primary: IndustryLink;
    secondary: IndustryLink;
    image?: string;
    imageAlt?: string;
  };
}

function MosaicTile({ src, className, sizes }: { src: string; className: string; sizes: string }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-[#0b2c3d] ${className}`}>
      <Image src={src} alt="" fill priority sizes={sizes} className="object-cover" />
    </div>
  );
}

function ItemCard({ item, index }: { item: IndustryItem; index: number }) {
  const product = item.productId ? getProduct(item.productId) : undefined;
  const links = item.links ?? (product ? [{ label: "View product", href: `/products/${product.id}` }] : []);

  return (
    <article className="flex h-full flex-col rounded-3xl bg-white/[0.04] p-3 ring-1 ring-white/10">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
        {product ? (
          <Image
            src={product.image}
            unoptimized={isRemoteImage(product.image)}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          // No catalogue page yet: a container in the sector's livery stands in for the photo
          <div
            aria-hidden="true"
            className={`${s.box} absolute inset-0 grid place-items-center`}
            style={{ "--c": YARD_COLOURS[(index + 1) % YARD_COLOURS.length] } as React.CSSProperties}
          >
            <Icon name={item.icon} className="h-14 w-14 text-white/90" />
          </div>
        )}
        {product && (
          <span className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-[#06131d]/75 text-white backdrop-blur">
            <Icon name={item.icon} className="h-5 w-5" />
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <h3 className="text-xl font-semibold tracking-tight">{item.name}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-white/65">{item.body}</p>
        {links.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-x-6 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`inline-flex min-h-10 items-center gap-2 text-sm font-semibold underline decoration-[#fa6a25] decoration-2 underline-offset-8 hover:text-[#fa6a25] ${focusRing}`}
                >
                  {l.label} <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default function IndustryPage({ data, children }: { data: IndustryData; children?: React.ReactNode }) {
  const sector = sectors.find((x) => x.slug === data.slug)!;
  const others = sectors.filter((x) => x.slug !== data.slug);
  const { hero, expertise, products, benefits, process, cta } = data;

  return (
    <V3Shell>
      {children}

      {/* ───────────── HERO ───────────── */}
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: sector.short, href: `/industries/${sector.slug}` }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        titleClassName="text-[clamp(2.75rem,5.4vw,5rem)]"
        lead={hero.lead}
        actions={
          <>
            <PillButton href={expertise.quote.href}>{expertise.quote.label}</PillButton>
            <GhostButton href="#sector-products">See what we supply</GhostButton>
          </>
        }
        aside={
          <div aria-hidden="true" className="grid h-[360px] grid-cols-6 grid-rows-6 gap-3 sm:h-[500px]">
            <MosaicTile src={hero.images[0]} className="col-span-4 row-span-4" sizes="(min-width: 1024px) 400px, 66vw" />
            <MosaicTile src={hero.images[1]} className="col-span-2 row-span-3" sizes="(min-width: 1024px) 200px, 33vw" />
            <div
              className={`${s.box} col-span-2 row-span-3 flex flex-col justify-between rounded-3xl p-4 sm:p-5`}
              style={{ "--c": "#fa6a25" } as React.CSSProperties}
            >
              <Icon name={sector.icon} className="h-9 w-9 text-white sm:h-11 sm:w-11" />
              <span className={`${s.display} ${s.displayTight} break-words text-[clamp(1.25rem,2.4vw,2rem)]`}>{sector.short}</span>
            </div>
            <MosaicTile src={hero.images[2]} className="col-span-2 row-span-2" sizes="(min-width: 1024px) 200px, 33vw" />
            <MosaicTile src={hero.images[3]} className="col-span-2 row-span-2" sizes="(min-width: 1024px) 200px, 33vw" />
          </div>
        }
      />

      {/* ───────────── EXPERTISE ───────────── */}
      <section aria-labelledby="expertise-heading" className="bg-white py-20 text-[#06131d] lg:py-28">
        <div className={`${pad} grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20`}>
          <div>
            <SectionHead dark size="md" eyebrow="Sector expertise" id="expertise-heading" title={expertise.title} />
            <div className="mt-6 grid max-w-xl gap-4 text-[17px] leading-relaxed text-[#06131d]/70">
              {expertise.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
              <PillButton href={expertise.quote.href} tone="ink">
                {expertise.quote.label}
              </PillButton>
              {expertise.extraLink && (
                <ArrowLink href={expertise.extraLink.href} dark>
                  {expertise.extraLink.label}
                </ArrowLink>
              )}
            </div>
          </div>

          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-[#d5dee7]">
              <Image
                src={expertise.image}
                alt={expertise.imageAlt}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
            {/* Highlights as a row of containers on the quay */}
            <dl className="mt-3 grid grid-cols-2 gap-3">
              {expertise.highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={`${s.box} flex min-h-[112px] flex-col-reverse justify-between px-5 py-4 text-white`}
                  style={{ "--c": YARD_COLOURS[i % YARD_COLOURS.length] } as React.CSSProperties}
                >
                  <dt className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">{h.label}</dt>
                  <dd className={`${s.display} ${s.displayTight} break-words text-[clamp(1.75rem,3.2vw,2.75rem)]`}>{h.value}</dd>
                </div>
              ))}
            </dl>
            <div aria-hidden="true" className="relative mt-2 h-3 overflow-hidden rounded-md bg-[#0b2c3d]">
              <div className="absolute inset-x-0 top-0 h-1 bg-[repeating-linear-gradient(135deg,#f5c518_0_10px,#1b1f24_10px_20px)]" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── PRODUCTS ───────────── */}
      <Section id="sector-products" tone="ink" grid eyebrow={products.eyebrow} title={products.title} headSize="md">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.items.map((item, i) => (
            <li key={item.name}>
              <ItemCard item={item} index={i} />
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ArrowLink href="/products">Browse the full catalogue</ArrowLink>
        </div>
      </Section>

      {/* ───────────── WHY US ───────────── */}
      <Section id="why" tone="mist" eyebrow="Why KHI" title={benefits.title} headSize="md">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((b) => (
            <li key={b.title}>
              <ListCard icon={b.icon} title={b.title} className="h-full">
                {b.body}
              </ListCard>
            </li>
          ))}
        </ul>
      </Section>

      {/* ───────────── PROCESS ───────────── */}
      {process && (
        <Section id="process" tone="sea" grid eyebrow="How it works" title={process.title} headSize="md">
          <ProcessTrack steps={process.steps} />
        </Section>
      )}

      {/* ───────────── OTHER SECTORS ───────────── */}
      <section aria-labelledby="others-heading" className="bg-[#f2f4f6] py-20 text-[#06131d] lg:py-24">
        <div className={pad}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="others-heading" className={`${s.display} text-[clamp(2rem,3.6vw,3rem)] text-[#0b2c3d]`}>
              Other industries we supply
            </h2>
            <div className="pb-1">
              <ArrowLink href="/industries" dark>
                All industries
              </ArrowLink>
            </div>
          </div>
          <ul className="mt-10 grid overflow-hidden rounded-3xl border border-[#06131d]/10 bg-white sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li
                key={o.slug}
                className="border-[#06131d]/10 max-lg:border-b max-lg:last:border-b-0 sm:max-lg:odd:border-r sm:max-lg:[&:nth-last-child(2)]:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <Link
                  href={o.href}
                  className={`group flex h-full items-center gap-4 p-5 transition-colors duration-300 hover:bg-[#fa6a25] hover:text-white sm:p-6 ${focusRing}`}
                >
                  <Icon name={o.icon} className="h-9 w-9 shrink-0 text-[#0b2c3d] group-hover:text-white" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-semibold leading-tight tracking-tight">{o.short}</span>
                    <span className={`${labelCls} mt-1 block text-[#d9531a] group-hover:text-white`}>
                      {o.products.slice(0, 3).join(" · ")}
                    </span>
                  </span>
                  <Icon
                    name="arrow"
                    className="h-4 w-4 shrink-0 text-[#06131d]/30 transition group-hover:rotate-45 group-hover:text-white"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <IndustryCta {...cta} />
    </V3Shell>
  );
}
