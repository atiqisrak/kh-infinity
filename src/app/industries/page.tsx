import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/products";
import Icon from "@/components/v3/Icons";
import PageHero from "@/components/v3/PageHero";
import { ChipList, NumberedGrid, Section } from "@/components/v3/blocks";
import IndustryCta from "@/components/v3/industries/IndustryCta";
import SectorStack from "@/components/v3/industries/SectorStack";
import { sectors } from "@/components/v3/industries/sectors";
import { sourcingFacts } from "@/components/v3/sourcing";
import { GhostButton, PillButton, focusRing } from "@/components/v3/ui";
import V3Shell from "@/components/v3/V3Shell";
import s from "@/components/v3/v3.module.css";

export const metadata: Metadata = {
  title:
    "Industries We Serve - K.H. Infinity | Import Export Trading Solutions",
  description:
    "K.H. Infinity serves diverse industries with specialized import-export solutions. Our expertise spans FMCG, retail, hospitality, manufacturing, and agriculture sectors.",
  keywords:
    "industries served, FMCG import export, retail trading, hospitality supplies, manufacturing sourcing, agricultural products, Bangladesh trade",
  alternates: {
    canonical: "https://khi.com.bd/industries",
  },
  openGraph: {
    title: "Industries We Serve - K.H. Infinity",
    description:
      "Specialized import-export solutions for FMCG, retail, hospitality, manufacturing, and agriculture industries.",
    images: ["/images/cover/kh1.webp"],
    url: "https://khi.com.bd/industries",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve - K.H. Infinity",
    description: "Specialized import-export solutions for multiple industries.",
    images: ["/images/cover/kh1.webp"],
  },
};

const reasons = [
  {
    title: "Industry Expertise",
    body: "Deep knowledge of industry-specific requirements, regulations, and market dynamics.",
  },
  {
    title: "Quality Guaranteed",
    body: "Stringent quality control and compliance with international standards for every industry.",
  },
  {
    title: "Customized Solutions",
    body: "Tailored import-export solutions that align with your industry needs and business goals.",
  },
];

export default function IndustriesPage() {
  const products = getProducts();
  const { countries } = sourcingFacts(products);

  return (
    <V3Shell>
      {/* ───────────── HERO ───────────── */}
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        eyebrow="Industries"
        title={
          <>
            Industries
            <br />
            we <span className="text-[#fa6a25]">serve</span>
          </>
        }
        lead="From FMCG to agriculture, we provide specialized import-export solutions tailored to your industry needs."
        actions={
          <>
            <PillButton href="/quote">Request a quote</PillButton>
            <GhostButton href="#expertise">Explore sectors</GhostButton>
          </>
        }
        aside={<SectorStack />}
        stats={[
          { value: sectors.length, label: "Sectors supplied" },
          { value: products.length, label: "Product lines" },
          { value: countries.length, label: "Origin countries" },
          { value: new Set(products.map((p) => p.category)).size, label: "Product categories" },
        ]}
      />

      {/* ───────────── EXPERTISE ───────────── */}
      <Section
        id="expertise"
        tone="paper"
        eyebrow="Sectors"
        title={
          <>
            Our industry
            <br />
            expertise
          </>
        }
        intro="We have deep knowledge and experience across multiple industries, enabling us to provide specialized solutions that meet your unique requirements."
      >
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {sectors.map((sec, i) => (
            <li key={sec.slug} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
              <Link
                href={sec.href}
                className={`group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-[#06131d]/[0.06] transition hover:ring-[#fa6a25]/60 ${focusRing}`}
              >
                <div className={`relative overflow-hidden bg-[#d5dee7] ${i < 2 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <Image
                    src={sec.image}
                    alt={sec.imageAlt}
                    fill
                    sizes={i < 2 ? "(min-width: 1024px) 640px, (min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"}
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06131d]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-full bg-[#fa6a25] text-white">
                    <Icon name={sec.icon} className="h-6 w-6" />
                  </span>
                  <span className="absolute right-4 top-4 font-mono text-xs text-white/85">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className={`${s.display} text-[1.9rem] text-[#0b2c3d] transition-colors group-hover:text-[#d9531a]`}>
                    {sec.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#06131d]/70">{sec.description}</p>
                  <ChipList items={sec.products} dark className="mt-5" />
                  <span className="mt-auto flex items-center gap-2 pt-6 font-semibold text-[#0b2c3d] underline decoration-[#fa6a25] decoration-2 underline-offset-8 group-hover:text-[#d9531a]">
                    Learn More <Icon name="arrow" className="h-4 w-4 transition group-hover:rotate-45" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* ───────────── WHY US ───────────── */}
      <Section
        id="why"
        tone="sea"
        grid
        eyebrow="Why KHI"
        title={
          <>
            Why industry leaders
            <br />
            choose us
          </>
        }
        headSize="md"
      >
        <NumberedGrid items={reasons} dark={false} cols={3} />
      </Section>

      <IndustryCta
        title={
          <>
            Ready to start
            <br />
            <span className="text-[#fa6a25]">trading?</span>
          </>
        }
        body="Whether you're in FMCG, retail, hospitality, or manufacturing, we have the expertise to support your import-export needs."
        primary={{ label: "Request a Quote", href: "/quote" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </V3Shell>
  );
}
