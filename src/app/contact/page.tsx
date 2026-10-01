import { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/v3/Icons";
import Crumbs from "@/components/v3/Crumbs";
import { fieldLabelLight, inputLight, labelCls, submitCls, SubmitArrow } from "@/components/v3/blocks";
import { Eyebrow, SectionHead, focusRing, pad } from "@/components/v3/ui";
import V3Shell from "@/components/v3/V3Shell";
import s from "@/components/v3/v3.module.css";

export const metadata: Metadata = {
  title:
    "Contact K.H. Infinity | Global Trade Solutions - Import Export Company Bangladesh",
  description:
    "Get in touch with K.H. Infinity for all your import-export needs. Contact our team for inquiries about our products and services. Located in Dhaka, Bangladesh.",
  keywords:
    "contact K.H. Infinity, import export contact, global trade contact, Bangladesh trade contact, business inquiry",
  alternates: {
    canonical: "https://khi.com.bd/contact",
  },
  openGraph: {
    title: "Contact K.H. Infinity | Global Trade Solutions",
    description:
      "Get in touch with K.H. Infinity for all your import-export needs. Contact our team for inquiries about our products and services. Located in Dhaka, Bangladesh.",
    images: ["/images/cover/kh1.webp"],
    url: "https://khi.com.bd/contact",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact K.H. Infinity | Global Trade Solutions",
    description:
      "Get in touch with K.H. Infinity for all your import-export needs. Contact our team for inquiries about our products and services. Located in Dhaka, Bangladesh.",
    images: ["/images/cover/kh1.webp"],
  },
};

const EMAIL = "info@khi.com.bd";
const PHONE = { display: "+880 1577081856", href: "tel:+8801577081856" };
const ADDRESS = "Kader Tropical Height, Shop- G5, 10 Hatkhola Road, Tikatuli, Wari, Dhaka 1203, Bangladesh";

const HOURS: [string, string][] = [
  ["Thursday – Tuesday", "9:00 AM – 8:00 PM"],
  ["Wednesday", "Closed"],
];

const SOCIAL = [
  { label: "Facebook", href: "https://facebook.com/khinfinity" },
  { label: "LinkedIn", href: "https://linkedin.com/company/khinfinity" },
  { label: "Instagram", href: "https://instagram.com/khinfinity" },
  { label: "Twitter", href: "https://twitter.com/khinfinity" },
];

const heroLink = `font-semibold text-white underline decoration-[#fa6a25] decoration-2 underline-offset-4 hover:text-[#fa6a25] ${focusRing}`;
const bigLink = `group inline-flex w-fit max-w-full items-center gap-3 break-all text-2xl font-semibold tracking-tight transition-colors hover:text-[#fa6a25] sm:text-3xl ${focusRing}`;

export default function ContactPage() {
  return (
    <V3Shell>
      {/* ───────────── HERO: contact details + message form ───────────── */}
      <section aria-labelledby="contact-title" className={`${s.gridBg} relative overflow-hidden bg-[#06131d] pt-[104px] lg:pt-[124px]`}>
        <div className={`${pad} grid gap-12 pb-20 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:pb-28`}>
          <div>
            <Crumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
            <div className="mt-8">
              <Eyebrow>Get in touch</Eyebrow>
            </div>
            <h1 id="contact-title" className={`${s.display} mt-5 text-[clamp(3rem,6.4vw,6rem)]`}>
              Contact <span className="text-[#fa6a25]">us</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Get in touch with us for any inquiries about our{" "}
              <Link href="/products" className={heroLink}>
                products
              </Link>{" "}
              and{" "}
              <Link href="/services" className={heroLink}>
                services
              </Link>
              . We&apos;re here to help you with your import/export needs.
            </p>

            {/* Footer-style direct lines */}
            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8">
              <a href={`mailto:${EMAIL}`} className={bigLink}>
                {EMAIL}
                <Icon name="arrow" className="h-6 w-6 shrink-0 transition-transform group-hover:rotate-45" />
              </a>
              <a href={PHONE.href} className={`${bigLink} text-white/70`}>
                {PHONE.display}
                <Icon name="arrow" className="h-6 w-6 shrink-0 transition-transform group-hover:rotate-45" />
              </a>
            </div>
            <div className="mt-8 flex items-start gap-3 text-white/60">
              <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-[#fa6a25]" />
              <p className="max-w-sm text-sm leading-relaxed">
                <span className={`${labelCls} mb-1 block text-white/40`}>Head office</span>
                {ADDRESS}
              </p>
            </div>
          </div>

          {/* Message form (unchanged fields and behaviour) */}
          <div className="rounded-[2rem] bg-[#f2f4f6] p-6 text-[#06131d] sm:p-8 lg:self-start">
            <h2 className={`${s.display} text-[clamp(2rem,3.4vw,2.75rem)] text-[#0b2c3d]`}>Send us a message</h2>
            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className={fieldLabelLight} htmlFor="name">
                    Name
                  </label>
                  <input type="text" id="name" className={inputLight} required autoComplete="name" />
                </div>
                <div>
                  <label className={fieldLabelLight} htmlFor="email">
                    Email
                  </label>
                  <input type="email" id="email" className={inputLight} required autoComplete="email" />
                </div>
              </div>
              <div>
                <label className={fieldLabelLight} htmlFor="subject">
                  Subject
                </label>
                <input type="text" id="subject" className={inputLight} required />
              </div>
              <div>
                <label className={fieldLabelLight} htmlFor="message">
                  Message
                </label>
                <textarea id="message" rows={6} className={inputLight} required></textarea>
              </div>
              <button type="submit" className={`${submitCls} w-full focus-visible:ring-offset-[#f2f4f6] sm:w-auto sm:justify-self-start`}>
                Send message
                <SubmitArrow />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ───────────── FIND US ───────────── */}
      <section aria-labelledby="find-heading" className="bg-[#d5dee7] py-20 text-[#06131d] lg:py-28">
        <div className={pad}>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHead dark eyebrow="Office location" id="find-heading" title={<>Find us</>} />
            <p className="max-w-md text-[#06131d]/70 lg:pb-3">
              Visit our head office in Tikatuli, Wari, Dhaka. Check the business hours below before you come by.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            {/* Map in a rounded frame */}
            <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-white ring-1 ring-[#06131d]/[0.06] lg:col-span-8 lg:min-h-[480px]">
              <iframe
                title="Map showing the K.H. Infinity head office in Tikatuli, Dhaka"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Kader Tropical Height, Shop- G5, 10 Hatkhola Road, Tikatuli, Wari, Dhaka 1203, Bangladesh&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>

            <div className="grid gap-4 lg:col-span-4">
              <div className="rounded-3xl bg-white p-6 ring-1 ring-[#06131d]/[0.06] sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fa6a25]/10 text-[#d9531a]">
                    <Icon name="pin" className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-[#0b2c3d]">Head office</h3>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-[#06131d]/70">{ADDRESS}</p>
              </div>

              <div className="rounded-3xl bg-white p-6 ring-1 ring-[#06131d]/[0.06] sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fa6a25]/10 text-[#d9531a]">
                    <Icon name="clock" className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-[#0b2c3d]">Business hours</h3>
                </div>
                <dl className="mt-4 divide-y divide-[#06131d]/10 border-y border-[#06131d]/10">
                  {HOURS.map(([day, time]) => (
                    <div key={day} className="flex items-baseline justify-between gap-4 py-3.5">
                      <dt className="text-[15px] text-[#06131d]/65">{day}</dt>
                      <dd className="text-right text-[15px] font-semibold text-[#0b2c3d]">{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-3xl bg-[#06131d] p-6 text-white sm:p-8">
                <h3 className={`${labelCls} text-white/50`}>Connect with us</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {SOCIAL.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex min-h-10 items-center gap-2 rounded-full border border-white/20 px-4 text-sm font-semibold transition-colors hover:border-[#fa6a25] hover:bg-[#fa6a25] ${focusRing}`}
                      >
                        {l.label}
                        <Icon name="arrow" className="h-3.5 w-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </V3Shell>
  );
}
