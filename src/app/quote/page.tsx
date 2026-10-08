import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Crumbs from "@/components/v3/Crumbs";
import Icon, { type IconName } from "@/components/v3/Icons";
import QuoteForm from "@/components/v3/quote/QuoteForm";
import { CheckList, Section, labelCls } from "@/components/v3/blocks";
import { Eyebrow, GhostButton, PillButton, focusRing, pad } from "@/components/v3/ui";
import V3Shell from "@/components/v3/V3Shell";
import s from "@/components/v3/v3.module.css";

export const metadata: Metadata = {
  title:
    "Request a Quote - K.H. Infinity | Import Export Trading Company Bangladesh",
  description:
    "Request a quote for your import-export needs. Get competitive pricing on premium products including cooking oils, milk powder, sugar, pulses, and more. Fast response within 24 hours.",
  keywords:
    "request quote, import export quote, trade quote, shipping quote, product quote, K.H. Infinity, Bangladesh",
  alternates: {
    canonical: "https://khi.com.bd/quote",
  },
  openGraph: {
    title: "Request a Quote - K.H. Infinity | Import Export Company",
    description:
      "Request a quote for your import-export needs. Get competitive pricing on premium products. Fast response within 24 hours.",
    images: ["/images/cover/kh1.webp"],
    url: "https://khi.com.bd/quote",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote - K.H. Infinity",
    description:
      "Request a quote for your import-export needs. Get competitive pricing on premium products.",
    images: ["/images/cover/kh1.webp"],
  },
};

const NEXT_STEPS = [
  "We'll review your request within 24 hours",
  "Our team will prepare a detailed quote for you",
  "You'll receive pricing, delivery details, and next steps",
];

const WHY_QUOTE = [
  "Competitive pricing guaranteed",
  "Transparent pricing with no hidden fees",
  "Fast 24-hour response time",
  "Customized solutions for your needs",
];

const PRODUCT_LINKS = [
  { label: "Cooking Oils", href: "/products/sunflower-oil" },
  { label: "Dairy Products", href: "/products/milk-powder" },
  { label: "Agricultural Products", href: "/products/potato" },
  { label: "Grains & Legumes", href: "/products/pulses" },
  { label: "Handicrafts", href: "/products/handicrafts" },
];

const TRUST: { icon: IconName; title: string; body: string }[] = [
  { icon: "clock", title: "Fast response", body: "Quote delivered within 24 hours" },
  { icon: "handshake", title: "Trusted partner", body: "5+ years of experience in global trade" },
  { icon: "check", title: "Quality assured", body: "International quality standards" },
  { icon: "globe", title: "Global network", body: "Serving 15+ countries worldwide" },
];

export default function QuotePage() {
  return (
    <V3Shell>
      {/* ───────────── HERO ───────────── */}
      <section aria-labelledby="quote-title" className="relative isolate overflow-hidden bg-[#06131d] pt-[104px] lg:pt-[124px]">
        <Image
          src="/images/v3/quote-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06131d] via-[#06131d]/90 to-[#06131d]/55" />
        <div className={`${pad} grid items-center gap-12 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-24`}>
          <div>
            <Crumbs items={[{ label: "Home", href: "/" }, { label: "Request a quote", href: "/quote" }]} />
            <div className="mt-8">
              <Eyebrow>Response within 24 hours</Eyebrow>
            </div>
            <h1 id="quote-title" className={`${s.display} mt-5 text-[clamp(3rem,6.4vw,6rem)]`}>
              Request
              <br />a <span className="text-[#fa6a25]">quote</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Get competitive pricing and reliable delivery for your import-export needs. Complete the form below and
              we&apos;ll respond within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href="#quote-form">Start your request</PillButton>
              <GhostButton href="/contact" glass>
                Contact us
              </GhostButton>
            </div>
          </div>

          {/* What happens next */}
          <aside aria-labelledby="next-heading" className={`${s.glass} rounded-[2rem] p-6 sm:p-8`}>
            <h2 id="next-heading" className={`${labelCls} text-white/60`}>
              What happens next?
            </h2>
            <ol className="mt-6 grid gap-6">
              {NEXT_STEPS.map((step, i) => (
                <li key={step} className="relative flex items-start gap-4">
                  {i < NEXT_STEPS.length - 1 && (
                    <span aria-hidden="true" className="absolute left-5 top-11 h-[calc(100%-1.25rem)] w-px bg-white/15" />
                  )}
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-mono text-sm ${
                      i === 0 ? "bg-[#fa6a25] text-white" : "bg-white/10 text-white ring-1 ring-white/20"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-2 text-[15px] leading-snug text-white/85">{step}</p>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      {/* ───────────── FORM ───────────── */}
      <section id="quote-form" aria-labelledby="quote-form-heading" className="bg-[#f2f4f6] py-20 text-[#06131d] lg:py-28">
        <div className={`${pad} grid gap-6 lg:grid-cols-12 lg:gap-8`}>
          <div className="lg:col-span-8">
            <QuoteForm />
          </div>

          <div className="grid gap-4 lg:col-span-4 lg:self-start">
            <div className="rounded-3xl bg-white p-6 ring-1 ring-[#06131d]/[0.06] sm:p-8">
              <h2 className="text-lg font-semibold tracking-tight text-[#0b2c3d]">Why request a quote?</h2>
              <CheckList items={WHY_QUOTE} className="mt-5" />
            </div>

            <div className="rounded-3xl bg-white p-6 ring-1 ring-[#06131d]/[0.06] sm:p-8">
              <h2 className="text-lg font-semibold tracking-tight text-[#0b2c3d]">Our products</h2>
              <p className="mt-2 text-[15px] text-[#06131d]/65">We specialize in importing and exporting:</p>
              <ul className="mt-4 divide-y divide-[#06131d]/10 border-y border-[#06131d]/10">
                {PRODUCT_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`group flex min-h-12 items-center justify-between gap-4 py-2 text-[15px] font-medium text-[#0b2c3d] transition-colors hover:text-[#d9531a] ${focusRing}`}
                    >
                      {l.label}
                      <Icon name="arrow" className="h-4 w-4 text-[#06131d]/35 transition group-hover:rotate-45 group-hover:text-[#d9531a]" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/products"
                className={`mt-5 inline-flex items-center gap-2 font-semibold text-[#0b2c3d] underline decoration-[#fa6a25] decoration-2 underline-offset-8 hover:text-[#d9531a] ${focusRing}`}
              >
                View all products <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl bg-[#06131d] p-6 text-white sm:p-8">
              <h2 className={`${s.display} text-3xl`}>Need help?</h2>
              <p className="mt-2 text-[15px] text-white/70">Have questions about our services or products?</p>
              <div className="mt-6">
                <PillButton href="/contact">Contact us</PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── WHY CHOOSE US ───────────── */}
      <Section
        id="why"
        tone="sea"
        grid
        eyebrow="Why choose us"
        title={
          <>
            Why buyers
            <br />
            <span className="text-[#fa6a25]">choose KHI</span>
          </>
        }
      >
        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((t) => (
            <li key={t.title} className="border-t border-white/15 pt-5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white/[0.06] text-[#fa6a25] ring-1 ring-white/10">
                <Icon name={t.icon} className="h-5 w-5" />
              </span>
              <h3 className={`${s.display} mt-5 text-[1.75rem]`}>{t.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">{t.body}</p>
            </li>
          ))}
        </ul>
      </Section>
    </V3Shell>
  );
}
