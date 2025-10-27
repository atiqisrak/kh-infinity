import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJob, jobPositions } from "@/lib/jobs";

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

  return {
    title: `${job.title} - Career Opportunities | K.H. Infinity`,
    description: `${job.description[0]}`,
    keywords: `careers, ${job.title.toLowerCase()}, ${
      job.type
    } jobs, ${job.department.toLowerCase()}, import export jobs`,
    openGraph: {
      title: `${job.title} - K.H. Infinity`,
      description: job.description[0],
      images: ["/images/cover/kh1.webp"],
      url: `https://khi.com.bd/careers/${job.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${job.title} - K.H. Infinity`,
      description: job.description[0],
      images: ["/images/cover/kh1.webp"],
    },
  };
}

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
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {/* Hero Section */}
      <section
        className="bg-gray-900 text-white py-32"
        style={{
          backgroundImage: "url(/images/cover/kh3.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <Link
            href="/careers"
            className="inline-flex items-center text-white hover:text-orange-300 transition-colors mb-6"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to All Positions
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{job.title}</h1>
          <div className="flex flex-wrap gap-4">
            <span className="bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm">
              <i className="fas fa-building mr-2"></i>
              {job.department}
            </span>
            <span className="bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm">
              <i className="fas fa-map-marker-alt mr-2"></i>
              {job.location}
            </span>
            <span className="bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm">
              <i className="fas fa-briefcase mr-2"></i>
              {job.type === "remote"
                ? "🌐 Remote"
                : job.type === "hybrid"
                ? "🔄 Hybrid"
                : "🏢 On-Site"}
            </span>
            <span className="bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm">
              <i className="fas fa-dollar-sign mr-2"></i>
              {job.salary}
            </span>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                About This Role
              </h2>
              {job.description.map((para, idx) => (
                <p
                  key={idx}
                  className="text-gray-600 mb-4 text-lg leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-4 text-xl flex-shrink-0"></i>
                    <span className="text-gray-700 text-lg">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Requirements & Qualifications
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-4 text-xl flex-shrink-0"></i>
                    <span className="text-gray-700 text-lg">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="mb-12 bg-orange-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                What We Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {job.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <i className="fas fa-check text-orange-500 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-lg text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Apply?</h3>
              <p className="text-xl mb-6">
                Send us your resume and cover letter to get started on your
                journey with K.H. Infinity.
              </p>
              <Link
                href={`/careers/apply/${job.id}`}
                className="inline-block bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
              >
                Apply for This Position
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3">
                    <i className="fas fa-info-circle text-orange-500 mr-2"></i>
                    Application Process
                  </h3>
                  <p className="text-gray-600">
                    Use our online application form to submit your resume and
                    cover letter. Shortlisted candidates will be contacted for
                    an initial interview.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3">
                    <i className="fas fa-clock text-orange-500 mr-2"></i>
                    Timeline
                  </h3>
                  <p className="text-gray-600">
                    We typically respond to applications within 2 weeks. Our
                    hiring process includes multiple interview rounds and a
                    final decision within 4-6 weeks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Jobs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Other Open Positions
          </h2>
          <div className="text-center">
            <Link
              href="/careers"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              View All Openings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
