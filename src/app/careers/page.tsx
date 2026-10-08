import { Metadata } from "next";
import { getActiveJobs } from "@/lib/jobs";
import V3Shell from "@/components/v3/V3Shell";
import PageHero from "@/components/v3/PageHero";
import CtaBand from "@/components/v3/CtaBand";
import { Section, NumberedGrid, FigureCards } from "@/components/v3/blocks";
import { PillButton, GhostButton, ArrowLink } from "@/components/v3/ui";
import Icon from "@/components/v3/Icons";

export const metadata: Metadata = {
  title: "Career Opportunities - K.H. Infinity | Join Our Global Trading Team",
  description:
    "Explore exciting career opportunities with K.H. Infinity. We're hiring for remote and hybrid positions in international trade, supply chain, sales, and operations. Competitive salaries and global opportunities.",
  keywords:
    "careers, jobs, hiring, international trade jobs, import export careers, remote jobs Bangladesh, trading jobs",
  alternates: {
    canonical: "https://khi.com.bd/careers",
  },
  openGraph: {
    title: "Career Opportunities - Join K.H. Infinity",
    description:
      "Explore exciting career opportunities in international trade with remote and hybrid positions.",
    images: ["/images/cover/kh1.webp"],
    url: "https://khi.com.bd/careers",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Opportunities - Join K.H. Infinity",
    description:
      "Explore exciting career opportunities in international trade.",
    images: ["/images/cover/kh1.webp"],
  },
};

const typeLabel: Record<string, string> = {
  remote: "Remote",
  hybrid: "Hybrid",
  onsite: "On-Site",
};

export default function CareersPage() {
  const activeJobs = getActiveJobs();

  return (
    <V3Shell>
      <PageHero
        crumbs={[{ label: "Careers", href: "/careers" }]}
        eyebrow="Join the team"
        title={
          <>
            Build your career
            <br />
            in global trade
          </>
        }
        lead="Remote-first roles across trading, logistics, and operations."
        actions={
          <>
            <PillButton href="#positions">See open positions</PillButton>
            <GhostButton href="/about" glass>About KH Infinity</GhostButton>
          </>
        }
        image="/images/v3/careers-hero.webp"
        imageAlt="Truck on the apron of a busy port"
      />

      {/* Job listings */}
      <Section id="positions" tone="paper" eyebrow="Open roles" title={`${activeJobs.length} positions available`}>
        <div className="grid gap-6 lg:grid-cols-2">
          {activeJobs.map((job) => (
            <article
              key={job.id}
              className="rounded-3xl bg-white p-6 ring-1 ring-black/5 sm:p-8"
            >
              {/* Department chip */}
              <span className="inline-block rounded-full bg-[#0b2c3d]/[0.07] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-[#0b2c3d]">
                {job.department}
              </span>

              {/* Title */}
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-[#0b2c3d]">
                {job.title}
              </h2>

              {/* Location + type */}
              <div className="mt-3 flex flex-wrap items-center gap-4 font-mono text-sm text-[#06131d]/60">
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="pin" className="h-4 w-4 text-[#fa6a25]" />
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="clock" className="h-4 w-4 text-[#fa6a25]" />
                  {typeLabel[job.type] ?? job.type}
                </span>
              </div>

              {/* Brief description */}
              <p className="mt-4 text-[15px] leading-relaxed text-[#06131d]/70">
                {job.description[0].split(".")[0]}.
              </p>

              {/* CTA */}
              <div className="mt-6">
                <ArrowLink href={`/careers/${job.id}`} dark>
                  View role
                </ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Why work with us */}
      <Section id="why" tone="mist" eyebrow="Our culture" title="Why work with us">
        <NumberedGrid
          dark
          cols={3}
          items={[
            {
              title: "Remote-first culture",
              body: "We hire globally and trust our team to work from wherever they do their best thinking. Flexible hours, no time-zone policing.",
            },
            {
              title: "Global exposure",
              body: "Every role touches multiple countries, currencies, and trade lanes. You'll build skills that travel as well as our cargo does.",
            },
            {
              title: "Room to grow",
              body: "Clear career paths, a professional development budget, and leadership that invests in the people who move the business forward.",
            },
          ]}
        />
      </Section>

      {/* Stats */}
      <Section id="stats" tone="sea" eyebrow="KH Infinity in numbers" title="A team that moves the world">
        <FigureCards
          items={[
            { value: "30+", label: "Team members", note: "Across 6 countries" },
            { value: "12+", label: "Trade corridors", note: "Active import & export lanes" },
            { value: "8×", label: "Growth since 2020", note: "Revenue compound rate" },
          ]}
        />
      </Section>

      <CtaBand
        image="/images/v3/road-and-sea.webp"
        imageAlt="Open road meeting the ocean"
        title={
          <>
            Don&apos;t see <span className="text-[#fa6a25]">your role?</span>
          </>
        }
        body="Send us your CV anyway. We review unsolicited applications and reach out when the right opportunity comes up."
        cta={{ label: "Get in touch", href: "/contact" }}
      />
    </V3Shell>
  );
}
