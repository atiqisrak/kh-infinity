import Link from "next/link";
import { getProducts } from "@/lib/products";
import { contactEmail } from "@/lib/navigation";
import Icon from "./Icons";
import { phone, services, tickerWords } from "./site";
import { focusRing, pad } from "./ui";
import s from "./v3.module.css";

function footerColumns() {
  const products = getProducts();
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

export default function SiteFooter() {
  return (
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
          {footerColumns().map((col) => (
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
  );
}
