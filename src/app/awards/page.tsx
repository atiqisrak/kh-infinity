import { Metadata } from "next";
import V3Shell from "@/components/v3/V3Shell";
import PageHero from "@/components/v3/PageHero";
import { Section, FigureCards } from "@/components/v3/blocks";
import CtaBand from "@/components/v3/CtaBand";
import Icon from "@/components/v3/Icons";
import { getCertifications, getAwards, getTestimonials } from "@/lib/awards";

export const metadata: Metadata = {
  title: "Certifications & Awards - K.H. Infinity",
  description:
    "Explore our certifications, industry awards, and client testimonials that showcase K.H. Infinity's commitment to excellence in international trade.",
  keywords:
    "certifications, awards, ISO certification, trade licenses, client testimonials, K.H. Infinity achievements",
  alternates: {
    canonical: "https://khi.com.bd/awards",
  },
  openGraph: {
    title: "Certifications & Awards - K.H. Infinity",
    description:
      "Our certifications, awards, and client testimonials demonstrate our commitment to excellence.",
    url: "https://khi.com.bd/awards",
    siteName: "K.H. Infinity",
    type: "website",
    images: ["/images/cover/kh1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications & Awards - K.H. Infinity",
    description:
      "Our certifications, awards, and client testimonials demonstrate our commitment to excellence.",
    images: ["/images/cover/kh1.webp"],
  },
};

export default function AwardsPage() {
  const certifications = getCertifications();
  const awards = getAwards();
  const testimonials = getTestimonials();

  return (
    <V3Shell>
      <PageHero
        crumbs={[{ label: "About", href: "/about" }, { label: "Awards & Certifications", href: "/awards" }]}
        eyebrow="Our credentials"
        title={
          <>
            Certified, recognized,
            <br />
            trusted
          </>
        }
        lead="K.H. Infinity is recognized by international standards bodies, industry associations, and clients for our commitment to quality, compliance, and excellence in trade."
      />

      {/* Key stats */}
      <Section
        id="stats"
        tone="ink"
        grid
        eyebrow="By the numbers"
        title="A track record of trust"
      >
        <FigureCards
          items={[
            { value: "10+", label: "Years in trade", note: "Established presence in Bangladesh" },
            { value: "3", label: "Active certifications", note: "Including ISO 9001:2015" },
            { value: "3", label: "Industry awards", note: "Recognised by chambers and councils" },
            { value: "$50M", label: "Annual trade volume", note: "Milestone reached in 2025" },
          ]}
        />
      </Section>

      {/* Certifications */}
      <Section
        id="certifications"
        tone="paper"
        eyebrow="Compliance & standards"
        title="Certifications &amp; licences"
        intro="Our certifications and licences demonstrate compliance with international quality standards and regulatory requirements."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => {
            const issueDate = new Date(cert.issueDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            });
            return (
              <div
                key={cert.id}
                className="flex flex-col rounded-3xl bg-white p-6 ring-1 ring-black/5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#fa6a25]/10">
                  <Icon name="shield" className="h-5 w-5 text-[#d9531a]" />
                </div>
                <h3 className="font-semibold text-[#0b2c3d] text-lg leading-snug mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-[#06131d]/60 mb-2">{cert.issuingBody}</p>
                <p className="text-sm text-[#06131d]/50 mb-1">Issued: {issueDate}</p>
                <p className="font-mono text-xs text-[#06131d]/40 mt-auto pt-3">
                  {cert.certificateNumber}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Awards */}
      <Section
        id="awards"
        tone="sea"
        eyebrow="Industry recognition"
        title="Awards &amp; honours"
        intro="Acknowledged by industry leaders for outstanding performance in international trade and business excellence."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => {
            const awardDate = new Date(award.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            });
            return (
              <div
                key={award.id}
                className="flex flex-col rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#fa6a25]/15">
                  <Icon name="award" className="h-5 w-5 text-[#fa6a25]" />
                </div>
                <h3 className="font-semibold text-white text-lg leading-snug mb-1">
                  {award.title}
                </h3>
                <p className="text-sm text-[#fa6a25] font-semibold mb-2">{award.organization}</p>
                <p className="font-mono text-xs text-white/45 mb-3">{awardDate}</p>
                <p className="text-sm text-white/70 leading-relaxed">{award.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        id="testimonials"
        tone="white"
        eyebrow="Client voices"
        title="What our partners say"
        intro="Hear from the businesses that trust K.H. Infinity to manage their international trade operations."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col rounded-3xl bg-[#f2f4f6] p-6 ring-1 ring-black/5"
            >
              <span
                className="mb-4 block font-serif text-6xl leading-none text-[#fa6a25]"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="flex-1 text-[15px] leading-relaxed text-[#06131d]/80 italic mb-6">
                {t.quote}
              </p>
              <div className="border-t border-[#06131d]/10 pt-4">
                <p className="font-semibold text-[#0b2c3d] text-sm">{t.name}</p>
                <p className="text-xs text-[#06131d]/55 mt-0.5">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        image="/images/v3/tanker-sunset.webp"
        title="Trade with a trusted partner"
        body="Our certifications and track record speak for our commitment to quality and reliability in every shipment."
        cta={{ label: "Request a quote", href: "/quote" }}
      />
    </V3Shell>
  );
}
