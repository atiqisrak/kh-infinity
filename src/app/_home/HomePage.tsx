import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";
import { getProducts } from "@/lib/products";
import { getBlogPosts } from "@/lib/blog";
import { contactEmail } from "@/lib/navigation";
import Flag, { flagCodeFor } from "./Flag";
import HangingContainer from "./HangingContainer";
import HeroModes from "./HeroModes";
import ProcessTrack from "./ProcessTrack";
import SiteNav from "./SiteNav";
import Reveal from "./Reveal";
import Icon from "./Icons";
import {
  certLogos,
  faqs,
  glance,
  phone,
  industries,
  journey,
  potatoSpecs,
  shipmentDocs,
  reasons,
  routes,
  services,
  tickerWords,
} from "./content";
import s from "./landing.module.css";

// Homepage (v3 design): deep-sea navy base, KH orange as the only accent,
// aerial photography, condensed display type, hanging-container motif.
// Title, description, canonical and OG tags come from the root layout.

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

// ── data derived from the product catalogue ───────────────────────────────
const COUNTRY_ALIASES: Record<string, string> = { "United States": "USA" };
const CERT_ALIASES: Record<string, string> = {
  "BSTI Certified": "BSTI",
  "Halal Certified": "Halal",
  "Halal available": "Halal",
};
function sourcingFacts(products: ReturnType<typeof getProducts>) {
  const byCountry = new Map<string, Set<string>>();
  const certs = new Map<string, number>();
  for (const p of products) {
    for (const c of p.sourcing.countries) {
      const name = COUNTRY_ALIASES[c] ?? c;
      if (name === "Bangladesh") continue;
      if (!byCountry.has(name)) byCountry.set(name, new Set());
      byCountry.get(name)!.add(p.name);
    }
    for (const c of new Set(p.sourcing.certifications.map((x) => CERT_ALIASES[x] ?? x))) {
      if (c in certLogos) certs.set(c, (certs.get(c) ?? 0) + 1);
    }
  }
  return {
    // Biggest origins first, so they land at the bottom of the yard stack
    countries: [...byCountry.entries()]
      .map(([name, items]) => ({ name, items: [...items] }))
      .sort((a, b) => b.items.length - a.items.length || a.name.localeCompare(b.name)),
    certs: [...certs.entries()].sort((a, b) => b[1] - a[1]),
  };
}

// Container liveries for the sourcing yard (white text stays legible on all of them)
const YARD_COLOURS = ["#fa6a25", "#0b2c3d", "#12506a", "#b8440f", "#3d6b85", "#d9531a", "#1f3a4d", "#56697a"];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

// ── small building blocks ─────────────────────────────────────────────────
function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
        dark ? "bg-[#06131d]/[0.06] text-[#0b2c3d]" : "bg-white/10 text-white/80"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#fa6a25]" />
      {children}
    </span>
  );
}

function SectionHead({
  index,
  eyebrow,
  title,
  id,
  dark = false,
  className = "",
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  id: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <span className={`font-mono text-xs ${dark ? "text-[#06131d]/45" : "text-white/40"}`}>({index})</span>
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      </div>
      <h2
        id={id}
        className={`${s.display} mt-6 text-[clamp(2.8rem,6.4vw,5.75rem)] ${dark ? "text-[#0b2c3d]" : "text-white"}`}
      >
        {title}
      </h2>
    </div>
  );
}

// Button system: text is always white on orange or ink. Hover deepens orange, or
// fills ink/outline/glass buttons with orange. Every control gets a visible focus ring.
const focusRing = "outline-none focus-visible:ring-2 focus-visible:ring-[#fa6a25] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06131d]";
const btnPrimary = `bg-[#fa6a25] text-white hover:bg-[#d9531a] ${focusRing}`;
const btnInk = `bg-[#06131d] text-white hover:bg-[#fa6a25] ${focusRing}`;
const btnGhost = `border border-white/30 text-white hover:border-[#fa6a25] hover:bg-[#fa6a25] ${focusRing}`;

function PillButton({
  href,
  children,
  tone = "orange",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "orange" | "ink";
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 font-semibold transition-colors duration-300 ${
        tone === "orange" ? btnPrimary : btnInk
      }`}
    >
      {children}
      <span
        className={`grid h-9 w-9 place-items-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45 ${
          tone === "orange" ? "text-[#d9531a]" : "text-[#06131d]"
        }`}
      >
        <Icon name="arrow" className="h-4 w-4" />
      </span>
    </Link>
  );
}

function GhostButton({ href, children, glass = false }: { href: string; children: React.ReactNode; glass?: boolean }) {
  const cls = `inline-flex items-center rounded-full px-6 py-3 font-semibold transition-colors duration-300 ${btnGhost} ${
    glass ? s.glass : ""
  }`;
  return href.startsWith("tel:") || href.startsWith("mailto:") ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

function Pill({ src }: { src: string }) {
  return (
    <span className={s.pill} aria-hidden="true">
      <Image src={src} alt="" fill sizes="96px" className="object-cover" />
    </span>
  );
}

type Product = ReturnType<typeof getProducts>[number];

function ProductCard({ product: p, index, tabbable }: { product: Product; index: number; tabbable: boolean }) {
  const origins = p.type === "export" ? ["Bangladesh"] : p.sourcing.countries.slice(0, 2);
  return (
    <Link
      href={`/products/${p.id}`}
      tabIndex={tabbable ? undefined : -1}
      className="group relative flex h-full flex-col rounded-3xl bg-white/[0.04] p-3 ring-1 ring-white/10 transition hover:bg-white/[0.08] hover:ring-[#fa6a25]/60"
    >
      <div className="flex items-center justify-between px-2 pb-3 pt-1">
        <span className="font-mono text-sm text-white/50">{String(index + 1).padStart(2, "0")}</span>
        <span
          className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
            p.type === "export" ? "bg-[#fa6a25] text-white" : "bg-white/10 text-white/80"
          }`}
        >
          {p.type}
        </span>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#d5dee7]">
        <Image src={p.image} alt={p.name} fill sizes="300px" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 items-end justify-between gap-3 px-2 pb-2 pt-4">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-white/50">{p.category}</p>
          <h3 className="mt-1 text-lg font-semibold leading-tight">{p.name}</h3>
          <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/55">
            {origins.map((c) => {
              const code = flagCodeFor(c);
              return (
                <span key={c} className="inline-flex items-center gap-1.5">
                  {code && <Flag code={code} className="h-3 w-[18px]" />}
                  {c}
                </span>
              );
            })}
          </p>
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 transition group-hover:rotate-45 group-hover:bg-[#fa6a25] group-hover:text-white">
          <Icon name="arrow" className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

function ShipIcon() {
  return (
    <svg viewBox="0 0 30 14" className="h-[14px] w-[30px]" aria-hidden="true">
      <path d="M1 8h28l-4 5H4.5z" fill="#fff" />
      <path d="M1 8h28l-.8 1H1.8z" fill="#fa6a25" />
      <rect x="5" y="4" width="4" height="4" fill="#fa6a25" />
      <rect x="9.5" y="4" width="4" height="4" fill="#12506a" />
      <rect x="14" y="4" width="4" height="4" fill="#fa6a25" />
      <rect x="9.5" y="1" width="4" height="3" fill="#d5dee7" />
      <rect x="21" y="1.5" width="4" height="6.5" fill="#fff" />
      <rect x="22" y="2.5" width="2" height="1.2" fill="#0b2c3d" />
    </svg>
  );
}

function footerColumns(products: Product[]) {
  return [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Industries", href: "/industries" },
        { label: "Investors", href: "/investors" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: services.map((svc) => ({ label: svc.title, href: svc.href })),
    },
    {
      title: "Products",
      links: [
        ...products.slice(0, 5).map((p) => ({ label: p.name, href: `/products/${p.id}` })),
        { label: "All products", href: "/products" },
      ],
    },
  ];
}

const pad = "mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10";

export default function HomePage() {
  const products = getProducts();
  const { countries, certs } = sourcingFacts(products);
  const [featured, ...rest] = [...getBlogPosts()].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <main id="top" className={`${s.root} ${anton.variable}`}>
      <SiteNav />

      {/* ───────────── HERO (sea / road / air) ───────────── */}
      <HeroModes>
        <div className="max-w-3xl">
          <Eyebrow>Import · Export · Since 2018</Eyebrow>
          {/* Sized off both width and height so the hero always fits one screen */}
          <h1 className={`${s.display} mt-5 text-[clamp(3.2rem,min(10.5vw,15svh),9rem)]`}>
            Trading
            <br />
            the world<span className="text-[#fa6a25]">.</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
            Import, export and everything in between. One partner for the goods your business runs on.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <PillButton href="/quote">Request a quote</PillButton>
            <GhostButton href="/products">Browse products</GhostButton>
          </div>
        </div>
      </HeroModes>

      {/* ───────────── AT A GLANCE ───────────── */}
      <section aria-label="K.H. Infinity at a glance" className="overflow-hidden border-t border-white/10 bg-[#06131d]">
        <Reveal as="ul" className={`${pad} grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-[repeat(4,minmax(0,1fr))_230px]`}>
          {glance.map((g, i) => (
            <li
              key={g.label}
              className={`flex flex-col py-8 pr-4 lg:px-8 lg:py-10 ${i > 0 ? "lg:border-l lg:border-white/10" : "lg:pl-0"} ${
                i % 2 === 1 ? "max-lg:border-l max-lg:border-white/10 max-lg:pl-5" : ""
              } ${i > 1 ? "max-lg:border-t max-lg:border-white/10" : ""}`}
            >
              <p className={`${s.display} ${s.displayTight} text-5xl sm:text-6xl`}>{g.value ?? countries.length}</p>
              <p className="mt-2 min-h-[2lh] text-xs uppercase tracking-[0.14em] text-white/55 sm:min-h-0">{g.label}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="hidden h-9 w-9 shrink-0 place-items-center rounded-full bg-white/[0.06] text-[#fa6a25] ring-1 ring-white/10 sm:grid">
                  <Icon name={g.icon} className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0">
                  <p className="min-h-[2lh] text-sm font-semibold leading-snug sm:min-h-0">{g.title}</p>
                  <p className="mt-0.5 text-xs leading-snug text-white/55 lg:min-h-[2lh]">{g.body}</p>
                </div>
              </div>
            </li>
          ))}
          {/* D: a KH container lowers into its bay on the crane cable, then swings to rest */}
          <li aria-hidden="true" className="relative hidden border-l border-white/10 xl:block">
            {/* Cable runs off the top edge (section clips it), so it reads as hung from the crane above */}
            <div className={`${s.dropHang} absolute -inset-x-2 bottom-4`}>
              <div className="relative">
                <span className="absolute bottom-[99%] left-1/2 h-[480px] w-[6px] -translate-x-1/2 border-x border-[#1b1f24]" />
                <HangingContainer fadeCable={false} className="h-auto w-full" />
              </div>
            </div>
          </li>
        </Reveal>
      </section>

      {/* ───────────── SHIP · CLEAR · DELIVER ───────────── */}
      <section aria-labelledby="journey-heading" className="relative grid h-[80svh] min-h-[540px] grid-cols-3">
        {journey.map((panel) => (
          <div key={panel.step} className="group relative overflow-hidden border-r border-[#06131d] last:border-r-0">
            <Image
              src={panel.image}
              alt={panel.alt}
              fill
              sizes="34vw"
              className="object-cover transition duration-[1.6s] ease-out group-hover:scale-105"
            />
            <div className={`${s.panelShade} absolute inset-0`} />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6 lg:p-8">
              <span className="font-mono text-xs text-[#fa6a25] sm:text-sm">{panel.step}</span>
              <h3 className={`${s.display} mt-1 text-2xl sm:text-4xl lg:text-5xl`}>{panel.title}</h3>
              <p className="mt-2 hidden max-w-xs text-sm leading-relaxed text-white/75 sm:block">{panel.body}</p>
            </div>
          </div>
        ))}
        <h2
          id="journey-heading"
          className="pointer-events-none absolute inset-x-0 top-[30%] text-center text-[clamp(1.3rem,5vw,5rem)] font-light uppercase tracking-[0.42em] text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]"
        >
          End&nbsp;to&nbsp;end
        </h2>
      </section>

      {/* ───────────── ABOUT + WHY KHI ───────────── */}
      <section aria-labelledby="why-heading" className="relative overflow-hidden bg-[#d5dee7] text-[#06131d]">
        <div className={`${pad} pb-20 pt-20 lg:pt-28`}>
          {/* Copy stays in the left half so the crane cable has a clear run down the centre */}
          <div className="max-w-[calc(50%-3rem)] max-lg:max-w-none">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#06131d]/45">(01)</span>
              <Eyebrow dark>About K.H. Infinity</Eyebrow>
            </div>
            {/* One colour, one weight; small photo pills carry the rhythm instead of greyed-out words */}
            <p className="mt-6 text-[1.65rem] font-medium leading-[1.4] tracking-tight text-[#0b2c3d] sm:text-3xl lg:text-[2.3rem] lg:leading-[1.35]">
              Since 2018 we&apos;ve moved premium
              <Pill src="/images/v3/ship-aerial.webp" /> commodities between world markets
              <Pill src="/images/v3/modes-triptych.webp" /> and Bangladesh, with sourcing, shipping and customs
              <Pill src="/images/v3/containers-orange.webp" /> handled{" "}
              <span className="relative whitespace-nowrap">
                under one roof
                <span aria-hidden="true" className="absolute inset-x-0 -bottom-1 h-[0.14em] rounded-full bg-[#fa6a25]" />
              </span>
              .
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0b2c3d] underline decoration-[#fa6a25] decoration-2 underline-offset-8"
            >
              Our story <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative mt-4 md:mt-16 lg:mt-24">
            {/* Phones: container stacks above the headline. md+: it hangs in front of the words,
                its base sitting just below the headline's baseline (-84% of its own height). */}
            <div className="pointer-events-none mx-auto w-[min(80vw,520px)] md:absolute md:left-1/2 md:top-full md:z-10 md:-translate-x-1/2 md:-translate-y-[84%]">
              <div className={s.sway}>
                <HangingContainer className="h-auto w-full drop-shadow-[0_30px_40px_rgba(6,19,29,0.25)]" />
              </div>
            </div>
            <h2
              id="why-heading"
              className={`${s.display} ${s.displayTight} flex justify-between text-[clamp(5rem,19vw,17rem)] text-white`}
              aria-label="Why K.H. Infinity?"
            >
              <span aria-hidden="true">Why</span>
              <span aria-hidden="true">KHI?</span>
            </h2>
          </div>

          <div className="relative mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <div key={r.title} className="border-t border-[#06131d]/20 pt-5">
                <span className="font-mono text-sm text-[#d9531a]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className={`${s.display} mt-3 text-[1.75rem] text-[#0b2c3d]`}>{r.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#06131d]/70">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── HOW IT WORKS ───────────── */}
      <section aria-labelledby="process-heading" className={`${s.gridBg} bg-[#0b2c3d] py-20 lg:py-28`}>
        <div className={pad}>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHead index="02" eyebrow="How it works" id="process-heading" title={<>From brief to<br />your warehouse</>} />
            <p className="max-w-md text-white/70 lg:pb-3">
              Five steps, one accountable team. You see every cost before you commit, and we stay with the cargo until it
              is released to you.
            </p>
          </div>

          <ProcessTrack />
        </div>
      </section>

      {/* ───────────── PRODUCTS ───────────── */}
      <section aria-labelledby="products-heading" className="bg-[#06131d] py-20 lg:py-28">
        <div className={`${pad} flex flex-col justify-between gap-8 lg:flex-row lg:items-end`}>
          <SectionHead
            index="03"
            eyebrow="Product portfolio"
            id="products-heading"
            title={
              <>
                What we <span className="text-[#fa6a25]">move</span>
              </>
            }
          />
          <div className="max-w-md lg:pb-3">
            <p className="text-white/70">
              {products.length} product lines across edible oils, dairy, grains, spices, nuts and industrial goods,
              imported into Bangladesh or exported to the Gulf.
            </p>
            <Link
              href="/products"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-white underline decoration-[#fa6a25] decoration-2 underline-offset-8 hover:text-[#fa6a25]"
            >
              View all products <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Self-scrolling marquee: the list renders twice and the track slides by 50%.
            The second copy is hidden from assistive tech and the tab order. */}
        <div className={`${s.productViewport} mt-12 overflow-hidden pb-4`}>
          <div className={`${s.productTrack} gap-4 pr-4`}>
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex gap-4" aria-label={copy === 0 ? "Products" : undefined} aria-hidden={copy === 1 || undefined}>
                {products.map((p, i) => (
                  <li key={p.id} className="w-[270px] shrink-0 sm:w-[300px]">
                    <ProductCard product={p} index={i} tabbable={copy === 0} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── SOURCING & COMPLIANCE ───────────── */}
      <section aria-labelledby="sourcing-heading" className="bg-[#f2f4f6] py-20 text-[#06131d] lg:py-28">
        <div className={`${pad} grid gap-14 xl:grid-cols-[0.8fr_1.2fr] xl:items-end xl:gap-16`}>
          <div>
            <SectionHead
              dark
              index="04"
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
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-[#06131d]/10 pt-6">
              {[
                { value: countries.length, label: "Origin countries" },
                { value: products.length, label: "Product lines" },
                { value: certs.length, label: "Certification schemes" },
              ].map((f) => (
                <div key={f.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-xs text-[#06131d]/55">{f.label}</dt>
                  <dd className={`${s.display} ${s.displayTight} text-4xl text-[#0b2c3d]`}>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* B: port yard — one container per origin, dropped in and stacked */}
          <Reveal threshold={0.25}>
            <ul aria-label="Origin countries" className="relative flex flex-wrap-reverse justify-center gap-2 pb-2">
              {countries.map((c, i) => {
                const code = flagCodeFor(c.name);
                return (
                  <li
                    key={c.name}
                    tabIndex={0}
                    aria-label={`${c.name}: ${c.items.join(", ")}`}
                    className={`${s.yardBox} group w-[calc((100%-0.5rem)/2)] outline-none sm:relative sm:w-[calc((100%-1.5rem)/4)] sm:hover:z-30 sm:focus:z-30 lg:w-[calc((100%-2rem)/5)] xl:w-[calc((100%-1.5rem)/4)]`}
                    style={{ "--d": `${i * 75}ms` } as React.CSSProperties}
                  >
                    <div
                      className={`${s.box} flex h-11 items-center gap-2 px-3 transition-transform sm:h-12 duration-300 group-hover:-translate-y-1.5 group-focus:-translate-y-1.5`}
                      style={{ "--c": YARD_COLOURS[i % YARD_COLOURS.length] } as React.CSSProperties}
                    >
                      {code && <Flag code={code} className="h-3 w-[18px] sm:h-3.5 sm:w-5" />}
                      <span className={`${s.display} ${s.displayTight} truncate text-[13px] tracking-[0.04em] text-white sm:text-sm`}>
                        {c.name}
                      </span>
                      <span className="ml-auto font-mono text-[11px] text-white/75">{c.items.length}</span>
                    </div>
                    <div
                      role="tooltip"
                      className="pointer-events-none absolute bottom-full z-40 mb-2 translate-y-1 rounded-xl bg-[#06131d] px-3.5 py-2.5 text-xs text-white opacity-0 shadow-xl transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 max-sm:inset-x-0 sm:left-1/2 sm:w-max sm:max-w-[230px] sm:-translate-x-1/2"
                    >
                      <p className="flex items-center gap-2 font-semibold">
                        {code && <Flag code={code} className="h-3 w-[18px]" />}
                        {c.name}
                      </p>
                      <p className="mt-1 leading-relaxed text-white/70">{c.items.join(" · ")}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            {/* Quay edge with hazard striping */}
            <div aria-hidden="true" className="relative h-4 overflow-hidden rounded-md bg-[#0b2c3d]">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-[repeating-linear-gradient(135deg,#f5c518_0_10px,#1b1f24_10px_20px)]" />
            </div>
            <p className="mt-3 text-right font-mono text-[11px] uppercase tracking-wider text-[#06131d]/45">
              Number = product lines from that origin
            </p>
          </Reveal>
        </div>

        {/* Compliance band */}
        <div className={`${pad} mt-20 lg:mt-24`}>
          <div className="flex flex-col justify-between gap-4 border-t border-[#06131d]/10 pt-10 lg:flex-row lg:items-end">
            <h3 className={`${s.display} text-[clamp(2rem,3.5vw,3rem)] text-[#0b2c3d]`}>Certified at origin</h3>
            <p className="max-w-md text-[#06131d]/65">
              Supplier certifications we hold our partners to, counted across the product lines they cover.
            </p>
          </div>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certs.map(([name, count]) => {
              const logo = certLogos[name];
              return (
                <div
                  key={name}
                  className="group flex items-center gap-5 rounded-3xl bg-white p-5 ring-1 ring-[#06131d]/[0.06] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(6,19,29,0.35)]"
                >
                  <div className="relative h-16 w-16 shrink-0">
                    <Image src={logo.src} alt={`${name} logo`} fill sizes="64px" className="object-contain" />
                  </div>
                  <div className="min-w-0 flex flex-col-reverse">
                    <dt className="text-xs leading-snug text-[#06131d]/55">
                      <span className="block font-semibold text-[#0b2c3d]">{name}</span>
                      {logo.note}
                    </dt>
                    <dd className="mb-1">
                      <span className={`${s.display} ${s.displayTight} text-3xl text-[#0b2c3d]`}>{count}</span>
                      <span className="ml-1.5 text-xs text-[#06131d]/55">lines</span>
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-[11px] uppercase tracking-wider text-[#06131d]/45">With every shipment</span>
            {shipmentDocs.map((d) => (
              <span
                key={d}
                className="inline-flex items-center gap-2 rounded-full border border-[#06131d]/12 bg-white px-3.5 py-1.5 text-sm text-[#0b2c3d]"
              >
                <Icon name="receipt" className="h-4 w-4 text-[#d9531a]" />
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── EXPORT SPOTLIGHT ───────────── */}
      <section aria-labelledby="export-heading" className="relative overflow-hidden bg-[#06131d] py-20 lg:py-28">
        <div className={`${pad} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}>
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
              <Image
                src="/images/hubs/exports-hero.webp"
                alt="Farmer lifting freshly harvested potatoes from the soil"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
            <figure className="absolute -top-6 left-3 w-[46%] min-w-[168px] max-w-[220px] rotate-[-3deg] overflow-hidden rounded-2xl bg-white p-2 shadow-2xl sm:left-8">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/potato-export/grading.webp"
                  alt="Russet potatoes spilling from a jute sack"
                  fill
                  sizes="220px"
                  className="object-contain"
                />
              </div>
              <figcaption className="whitespace-nowrap px-1 pb-1 pt-2 font-mono text-[11px] uppercase tracking-wide text-[#06131d]/60">
                50 kg jute · Grade A
              </figcaption>
            </figure>
            <div className={`${s.glass} mt-4 rounded-2xl p-5 sm:absolute sm:-bottom-6 sm:right-8 sm:mt-0 sm:w-[250px]`}>
              <p className="text-xs uppercase tracking-[0.14em] text-white/60">Export lane</p>
              <div className="mt-3 flex items-center gap-3">
                <span className={`${s.display} text-3xl`}>BD</span>
                <span className="h-px flex-1 bg-[#fa6a25]" />
                <span className={`${s.display} text-3xl text-[#fa6a25]`}>GCC</span>
              </div>
              <p className="mt-2 text-sm text-white/70">UAE · Saudi Arabia · Gulf retail</p>
            </div>
          </div>

          <div>
            <SectionHead
              index="05"
              eyebrow="Export spotlight"
              id="export-heading"
              title={
                <>
                  Bangladeshi potatoes,
                  <br />
                  <span className="text-[#fa6a25]">Gulf-ready</span>
                </>
              }
            />
            <p className="mt-6 max-w-lg text-white/70">
              Graded, packed and documented for Gulf retail and wholesale programmes, with protection for hot-climate
              transit built into every load.
            </p>
            <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {potatoSpecs.map((spec) => (
                <div key={spec.label} className="grid grid-cols-[120px_1fr] gap-4 py-3.5 text-sm sm:grid-cols-[150px_1fr]">
                  <dt className="font-mono text-xs uppercase tracking-wider text-white/45">{spec.label}</dt>
                  <dd className="text-white/85">{spec.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href="/products/potato-gulf">View export programme</PillButton>
              <GhostButton href="/quote">Request a spec sheet</GhostButton>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── INDUSTRIES ───────────── */}
      <section aria-labelledby="industries-heading" className="bg-[#d5dee7] py-20 text-[#06131d] lg:py-28">
        <div className={pad}>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHead dark index="06" eyebrow="Industries" id="industries-heading" title={<>Who we<br />supply</>} />
            <p className="max-w-md text-[#06131d]/70 lg:pb-3">
              Distributors, retailers, kitchens and factories rely on us for steady supply, consistent specs and clean
              paperwork.
            </p>
          </div>
          <ul className="mt-12 grid overflow-hidden rounded-3xl border border-[#06131d]/10 bg-white/60 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((ind, i) => (
              <li key={ind.name} className="border-[#06131d]/10 max-lg:border-b sm:max-lg:odd:border-r lg:min-h-[330px] lg:border-r lg:last:border-r-0">
                {/* Same skeleton in every card (number/arrow → icon → name → 2-line body → products
                    pinned to the bottom), so columns align whatever the copy length. */}
                <Link
                  href={ind.href}
                  className={`group flex h-full flex-col p-6 transition-colors duration-300 hover:bg-[#fa6a25] hover:text-white ${focusRing}`}
                >
                  <span className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#06131d]/45 group-hover:text-white/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      name="arrow"
                      className="h-4 w-4 text-[#06131d]/30 transition group-hover:rotate-45 group-hover:text-white"
                    />
                  </span>
                  {/* Phones: icon beside the text (compact rows). Desktop: stacked column. */}
                  <div className="mt-4 flex items-start gap-4 lg:mt-8 lg:block">
                    <span className="shrink-0 text-[#0b2c3d] group-hover:text-white">
                      <Icon name={ind.icon} className="h-10 w-10 lg:h-11 lg:w-11" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold leading-tight tracking-tight lg:mt-8">{ind.name}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#06131d]/65 group-hover:text-white/90 lg:mt-2 lg:min-h-[2lh]">
                        {ind.body}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 border-t border-[#06131d]/10 pt-4 font-mono text-[11px] uppercase tracking-wider text-[#d9531a] group-hover:border-white/30 group-hover:text-white lg:mt-auto">
                    {ind.products}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── SERVICES ───────────── */}
      <section aria-labelledby="services-heading" className="bg-[#f2f4f6] py-20 text-[#06131d] lg:py-28">
        <div className={`${pad} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}>
          <div className="lg:sticky lg:top-10 lg:self-start">
            <SectionHead
              dark
              index="07"
              eyebrow="Services"
              id="services-heading"
              title={
                <>
                  One partner,
                  <br />
                  every border
                </>
              }
            />
            <p className="mt-6 max-w-md text-[#06131d]/70">
              From finding the right supplier to clearing the last document at port, we run the whole chain so you only
              deal with one team.
            </p>
            <div className="mt-8">
              <PillButton href="/contact" tone="ink">
                Talk to our team
              </PillButton>
            </div>
          </div>

          <div className={`${s.accordion} border-t border-[#06131d]/15`}>
            {services.map((svc, i) => (
              <details key={svc.title} className="group border-b border-[#06131d]/15" open={i === 0}>
                <summary className="flex cursor-pointer items-center gap-6 py-6">
                  <span className="font-mono text-sm text-[#06131d]/45 group-open:text-[#d9531a]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="flex-1 text-xl font-semibold tracking-tight sm:text-2xl">{svc.title}</h3>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-[#06131d]/20 transition group-open:rotate-45 group-open:border-[#fa6a25] group-open:bg-[#fa6a25] group-open:text-white">
                    <Icon name="plus" className="h-4 w-4" />
                  </span>
                </summary>
                <div className="pb-7 pl-[3.25rem] pr-12">
                  <p className="max-w-lg leading-relaxed text-[#06131d]/70">{svc.body}</p>
                  <Link
                    href={svc.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0b2c3d] underline decoration-[#fa6a25] decoration-2 underline-offset-4"
                  >
                    Learn more <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── TRADE LANES ───────────── */}
      <section aria-labelledby="routes-heading" className="bg-[#0b2c3d] py-20 lg:py-28">
        <div className={`${pad} grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16`}>
          <div>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHead index="08" eyebrow="Trade routes" id="routes-heading" title="Lanes we run" />
              <Link
                href="/services/trade-routes"
                className="inline-flex items-center gap-2 pb-3 text-sm font-semibold text-white/80 hover:text-white"
              >
                All trade routes <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
            <Reveal className="mt-10 grid gap-4">
              {routes.map((r, i) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group grid items-center gap-4 rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 transition hover:bg-white/[0.09] hover:ring-[#fa6a25]/60 sm:grid-cols-[1fr_1.3fr]"
                >
                  <div>
                    <p className="font-semibold">{r.label}</p>
                    <p className="mt-1 text-sm text-white/55">{r.note}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-4">
                      <span className={`${s.display} text-4xl`}>{r.from.code}</span>
                      {/* C: a ship sails the lane once the section is on screen, wake trailing */}
                      <span className="relative h-px flex-1 bg-white/20" style={{ "--d": `${i * 350}ms` } as React.CSSProperties}>
                        <span className={`${s.wake} absolute inset-y-0 left-0 bg-[#fa6a25]`} />
                        <span className="absolute -top-[5px] right-0 h-2.5 w-2.5 rounded-full border-2 border-[#fa6a25] bg-[#0b2c3d]" />
                        <span className={`${s.ship} absolute -top-[13px] w-[30px]`}>
                          <span className={`${s.shipBob} block`}>
                            <ShipIcon />
                          </span>
                        </span>
                      </span>
                      <span className={`${s.display} text-4xl text-[#fa6a25]`}>{r.to.code}</span>
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-white/55">
                      <span>{r.from.city}</span>
                      <span>{r.to.city}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </Reveal>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl lg:min-h-[420px]">
            <Image
              src="/images/v3/tanker-sunset.webp"
              alt="Tanker sailing across calm water at sunset"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06131d]/85 via-transparent to-transparent" />
            <p className={`${s.display} absolute bottom-6 left-6 right-6 text-4xl`}>
              Planned lanes.
              <br />
              <span className="text-[#fa6a25]">One partner.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── INSIGHTS ───────────── */}
      <section aria-labelledby="insights-heading" className="bg-[#f2f4f6] py-20 text-[#06131d] lg:py-28">
        <div className={pad}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead dark index="09" eyebrow="Insights" id="insights-heading" title="Trade notes" />
            <PillButton href="/blog" tone="ink">
              All articles
            </PillButton>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            {/* Featured: full-bleed photo, display-type title */}
            <Link
              href={`/blog/${featured.id}`}
              className={`group relative isolate flex min-h-[440px] flex-col justify-end overflow-hidden rounded-[2rem] p-6 text-white sm:p-8 lg:col-span-7 lg:min-h-[540px] ${focusRing}`}
            >
              <Image
                src={featured.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="-z-20 object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06131d] via-[#06131d]/55 to-[#06131d]/0" />
              <div className="absolute left-6 right-6 top-6 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8">
                <span className={`${s.glass} rounded-full px-3 py-1 text-xs font-semibold`}>{featured.category}</span>
                <span className="font-mono text-xs uppercase tracking-wider text-white/75">Featured</span>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-white/65">{formatDate(featured.date)}</p>
              <h3 className={`${s.display} mt-3 max-w-xl text-[clamp(2rem,3.4vw,3.25rem)]`}>{featured.title}</h3>
              <p className="mt-3 line-clamp-2 max-w-lg text-[15px] text-white/75">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-3 text-sm font-semibold">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#fa6a25] transition group-hover:rotate-45 group-hover:bg-white group-hover:text-[#d9531a]">
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
                Read the article
              </span>
            </Link>

            {/* Numbered editorial list */}
            <ol className="flex flex-col divide-y divide-[#06131d]/10 rounded-[2rem] bg-white px-6 ring-1 ring-[#06131d]/[0.06] sm:px-8 lg:col-span-5">
              {rest.map((post, i) => (
                <li key={post.id} className="flex-1">
                  <Link href={`/blog/${post.id}`} className={`group flex h-full gap-5 py-7 ${focusRing}`}>
                    <span className={`${s.display} ${s.displayTight} text-4xl text-[#06131d]/15 transition group-hover:text-[#fa6a25]`}>
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#06131d]/50">
                        <span className="text-[#d9531a]">{post.category}</span>·<span>{formatDate(post.date)}</span>
                      </p>
                      <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight transition group-hover:text-[#d9531a]">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-[#06131d]/60">{post.excerpt}</p>
                      <div className="mt-auto flex items-end justify-between gap-4 pt-5">
                        <span className="relative h-16 w-28 overflow-hidden rounded-full">
                          <Image src={post.image} alt="" fill sizes="112px" className="object-cover" />
                        </span>
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#06131d]/15 transition group-hover:rotate-45 group-hover:border-[#fa6a25] group-hover:bg-[#fa6a25] group-hover:text-white">
                          <Icon name="arrow" className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section aria-labelledby="faq-heading" className="bg-white py-20 text-[#06131d] lg:py-28">
        <div className={`${pad} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
          <div>
            <SectionHead dark index="10" eyebrow="FAQ" id="faq-heading" title={<>Good<br />questions</>} />
            <p className="mt-6 max-w-sm text-[#06131d]/70">
              The things buyers ask us most. More answers on the{" "}
              <Link href="/faq" className="font-semibold text-[#0b2c3d] underline decoration-[#fa6a25] decoration-2 underline-offset-4">
                full FAQ
              </Link>
              .
            </p>
          </div>
          <div className={`${s.accordion} divide-y divide-[#06131d]/10 rounded-3xl bg-[#f2f4f6] px-6 sm:px-8`}>
            {faqs.map((f, i) => (
              <details key={f.q} className="group" open={i === 0}>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6">
                  <h3 className="text-lg font-semibold tracking-tight">{f.q}</h3>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white transition group-open:rotate-45 group-open:bg-[#fa6a25] group-open:text-white">
                    <Icon name="plus" className="h-4 w-4" />
                  </span>
                </summary>
                <p className="-mt-1 max-w-2xl pb-6 leading-relaxed text-[#06131d]/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section aria-labelledby="cta-heading" className="relative isolate overflow-hidden">
        <Image
          src="/images/v3/ship-open-sea.webp"
          alt="Loaded container ship sailing through open sea"
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06131d]/95 via-[#06131d]/75 to-[#06131d]/25" />
        <div className={`${pad} py-24 lg:py-36`}>
          <h2 id="cta-heading" className={`${s.display} max-w-4xl text-[clamp(3rem,7.5vw,7rem)]`}>
            Ready to move your <br className="hidden sm:block" />
            next <span className="text-[#fa6a25]">shipment?</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-white/75">
            Tell us the product, quantity and destination. We&apos;ll come back with a landed-cost quote.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <PillButton href="/quote">Request a quote</PillButton>
            <GhostButton href={phone.href} glass>
              {phone.display}
            </GhostButton>
          </div>
        </div>
      </section>

      {/* ───────────── FOOTER ───────────── */}
      <footer className={`${s.gridBg} relative overflow-hidden bg-[#06131d]`}>
        <div className="overflow-hidden border-b border-white/10 py-5" aria-hidden="true">
          <div className={s.marquee}>
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0">
                {tickerWords.map((w) => (
                  <span
                    key={`${copy}-${w}`}
                    className={`${s.display} ${s.displayTight} flex items-center px-6 text-4xl text-white/85 sm:text-5xl`}
                  >
                    {w}
                    <span className="ml-12 text-[#fa6a25]">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={`${pad} grid gap-14 pb-10 pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-24`}>
          <div className="lg:col-span-6">
            <p className={`${s.display} text-[clamp(2.8rem,6vw,5.5rem)]`}>
              Let&apos;s move
              <br />
              <span className="text-[#fa6a25]">something.</span>
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${contactEmail}`}
                className={`group inline-flex w-fit items-center gap-3 text-2xl font-semibold tracking-tight transition-colors hover:text-[#fa6a25] sm:text-3xl ${focusRing}`}
              >
                {contactEmail}
                <Icon name="arrow" className="h-6 w-6 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href={phone.href}
                className={`group inline-flex w-fit items-center gap-3 text-2xl font-semibold tracking-tight text-white/70 transition-colors hover:text-[#fa6a25] sm:text-3xl ${focusRing}`}
              >
                {phone.display}
                <Icon name="arrow" className="h-6 w-6 transition-transform group-hover:rotate-45" />
              </a>
            </div>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/50">
              Kader Tropical Height, Shop G5, 10 Hatkhola Road, Tikatuli, Wari, Dhaka 1203, Bangladesh
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6">
            {footerColumns(products).map((col) => (
              <div key={col.title}>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">{col.title}</p>
                <ul className="mt-3 text-sm">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={`inline-flex min-h-10 items-center text-white/75 transition-colors hover:text-[#fa6a25] ${focusRing}`}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Oversized wordmark, bleeding off both edges */}
        <p
          aria-hidden="true"
          className={`${s.display} ${s.displayTight} pointer-events-none select-none whitespace-nowrap text-center text-[19vw] text-white/[0.05]`}
        >
          K.H. Infinity
        </p>

        <div className={`${pad} flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/45`}>
          <span>© K.H. Infinity · Trading the world since 2018</span>
          <span className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="inline-flex min-h-10 items-center hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="inline-flex min-h-10 items-center hover:text-white">
              Terms
            </Link>
            <span>ISO 22000 mark: Wikimedia Commons, CC BY-SA 4.0</span>
            <a
              href="#top"
              className={`grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-[#fa6a25] hover:bg-[#fa6a25] ${focusRing}`}
              aria-label="Back to top"
            >
              <Icon name="arrow" className="h-4 w-4 -rotate-45" />
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}
