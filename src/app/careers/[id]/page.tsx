import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getJob, jobPositions } from "@/lib/jobs";
import V3Shell from "@/components/v3/V3Shell";
import PageHero from "@/components/v3/PageHero";
import CtaBand from "@/components/v3/CtaBand";
import { Section, CheckList, ListCard, RowTable } from "@/components/v3/blocks";
import { PillButton, GhostButton } from "@/components/v3/ui";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return jobPositions.map((job) => ({
    id: job.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const job = getJob(id);

  if (!job) {
    return {
      title: "Job Not Found - K.H. Infinity",
    };
  }

  const jobUrl = `https://khi.com.bd/careers/${job.id}`;

  return {
    title: `${job.title} - Career Opportunities | K.H. Infinity`,
    description: `${job.description[0]}`,
    keywords: `careers, ${job.title.toLowerCase()}, ${job.type} jobs, ${job.department.toLowerCase()}, import export jobs`,
    alternates: {
      canonical: jobUrl,
    },
    openGraph: {
      title: `${job.title} - K.H. Infinity`,
      description: job.description[0],
      images: ["/images/cover/kh1.webp"],
      url: jobUrl,
      siteName: "K.H. Infinity",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${job.title} - K.H. Infinity`,
      description: job.description[0],
      images: ["/images/cover/kh1.webp"],
    },
  };
}

const typeLabel: Record<string, string> = {
  remote: "Remote",
  hybrid: "Hybrid",
  onsite: "On-Site",
};

export default async function JobDetailPage({ params }: PageProps) {
  const { id } = await params;
  const job = getJob(id);

  if (!job) {
    notFound();
  }

  // Structured data for job posting
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description.join(" "),
    datePosted: "2025-01-01T00:00:00.000Z",
    validThrough: "2025-12-31T00:00:00.000Z",
    employmentType:
      job.type === "remote"
        ? "REMOTE"
        : job.type === "hybrid"
        ? "PART_TIME"
        : "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "K.H. Infinity",
      sameAs: "https://khi.com.bd",
      logo: "https://khi.com.bd/images/logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location.split(",")[0] || job.location,
        addressCountry: "BD",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        value: job.salary,
      },
    },
    workHours: "Full Time",
    qualifications: job.requirements,
    responsibilities: job.responsibilities,
    benefits: job.benefits,
  };

  return (
    <V3Shell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageHero
        crumbs={[
          { label: "Careers", href: "/careers" },
          { label: job.title, href: `/careers/${job.id}` },
        ]}
        eyebrow={job.department}
        title={job.title}
        lead={job.description[0].split(".")[0] + "."}
        actions={
          <>
            <PillButton href={`/careers/apply/${job.id}`}>Apply now</PillButton>
            <GhostButton href="/careers" glass>All openings</GhostButton>
          </>
        }
      />

      {/* Role details + responsibilities / requirements / benefits */}
      <Section id="role" tone="white" label="Role details">
        <div className="grid gap-10 lg:grid-cols-[7fr_5fr] lg:gap-16">
          {/* Left: specs + responsibilities */}
          <div className="space-y-10">
            <RowTable
              title="Role details"
              rows={[
                ["Department", job.department],
                ["Location", job.location],
                ["Work type", typeLabel[job.type] ?? job.type],
                ["Experience", job.experience],
                ["Salary", job.salary],
              ]}
            />
            <div>
              <h2 className="mb-6 text-xl font-semibold tracking-tight text-[#0b2c3d]">
                Key responsibilities
              </h2>
              <CheckList dark items={job.responsibilities} />
            </div>
          </div>

          {/* Right: requirements + benefits */}
          <div className="space-y-6">
            <ListCard
              icon="check"
              title="What we're looking for"
              items={job.requirements}
            />
            {job.benefits.length > 0 && (
              <ListCard
                icon="award"
                title="What you get"
                items={job.benefits}
              />
            )}
          </div>
        </div>
      </Section>

      {/* Apply CTA */}
      <Section id="apply-cta" tone="sea" label="Apply for this role">
        <div className="flex flex-wrap justify-center gap-4">
          <PillButton href={`/careers/apply/${job.id}`}>
            Apply for this role
          </PillButton>
          <GhostButton href="/careers" glass>All openings</GhostButton>
        </div>
      </Section>

      <CtaBand
        image="/images/v3/ship-aerial.webp"
        imageAlt="Container ship seen from above"
        title={
          <>
            Questions before <span className="text-[#fa6a25]">applying?</span>
          </>
        }
        body="Our team is happy to answer any questions you have before you submit your application."
        cta={{ label: "Contact us", href: "/contact" }}
      />
    </V3Shell>
  );
}
