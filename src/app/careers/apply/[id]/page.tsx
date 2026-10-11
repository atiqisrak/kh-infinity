import type { Metadata } from "next";
import { getJob, jobPositions } from "@/lib/jobs";
import { notFound } from "next/navigation";
import V3Shell from "@/components/v3/V3Shell";
import PageHero from "@/components/v3/PageHero";
import { Section, CheckList, RowTable } from "@/components/v3/blocks";
import CareersApplyForm from "@/components/v3/forms/CareersApplyForm";

interface ApplyPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return jobPositions.map((job) => ({
    id: job.id,
  }));
}

export async function generateMetadata({
  params,
}: ApplyPageProps): Promise<Metadata> {
  const { id } = await params;
  const job = getJob(id);

  if (!job) {
    return { title: "Apply - K.H. Infinity" };
  }

  const applyUrl = `https://khi.com.bd/careers/apply/${job.id}`;

  return {
    title: `Apply for ${job.title} | K.H. Infinity Careers`,
    description: `Submit your application for ${job.title} at K.H. Infinity. ${job.department} · ${job.location}.`,
    alternates: { canonical: applyUrl },
    // Application form: keep out of the index, the job page is the one to rank
    robots: { index: false, follow: true },
    openGraph: {
      title: `Apply for ${job.title} | K.H. Infinity`,
      description: `Career application: ${job.title}`,
      url: applyUrl,
      siteName: "K.H. Infinity",
      type: "website",
      images: ["/images/cover/kh1.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: `Apply for ${job.title} | K.H. Infinity`,
      description: `Career application: ${job.title}`,
      images: ["/images/cover/kh1.webp"],
    },
  };
}

const typeLabel: Record<string, string> = {
  remote: "Remote",
  hybrid: "Hybrid",
  onsite: "On-Site",
};

export default async function ApplyPage({ params }: ApplyPageProps) {
  const { id } = await params;
  const job = getJob(id);

  if (!job) {
    notFound();
  }

  return (
    <V3Shell>
      <PageHero
        crumbs={[
          { label: "Careers", href: "/careers" },
          { label: job.title, href: `/careers/${job.id}` },
          { label: "Apply", href: `/careers/apply/${job.id}` },
        ]}
        eyebrow="Application"
        title={
          <>
            Apply for
            <br />
            {job.title}
          </>
        }
        lead="We review every application personally."
      />

      <Section id="apply-form" tone="white" label="Application form">
        <div className="grid gap-10 lg:grid-cols-[7fr_5fr] lg:gap-16">
          {/* Left: the form */}
          <div className="rounded-3xl bg-[#f2f4f6] p-8 ring-1 ring-black/5">
            <h2 className="mb-6 text-xl font-semibold tracking-tight text-[#0b2c3d]">
              Your application
            </h2>
            <CareersApplyForm jobId={job.id} jobTitle={job.title} />
          </div>

          {/* Right: role summary + process */}
          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <RowTable
              title="Role summary"
              rows={[
                ["Title", job.title],
                ["Department", job.department],
                ["Location", job.location],
                ["Work type", typeLabel[job.type] ?? job.type],
                ["Experience", job.experience],
                ["Salary", job.salary],
              ]}
            />
            <div className="rounded-3xl bg-[#f2f4f6] p-6 ring-1 ring-black/5 sm:p-8">
              <h3 className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#06131d]/50">
                What to expect
              </h3>
              <CheckList
                dark
                items={[
                  "We review all applications within two weeks",
                  "Shortlisted candidates are contacted by email",
                  "The interview process takes 2–4 weeks",
                  "All applicants receive a status update",
                ]}
              />
            </div>
          </div>
        </div>
      </Section>
    </V3Shell>
  );
}
