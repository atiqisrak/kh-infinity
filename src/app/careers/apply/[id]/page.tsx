import Link from "next/link";
import { getJob, jobPositions } from "@/lib/jobs";
import { notFound } from "next/navigation";
import JobApplicationForm from "@/components/JobApplicationForm";

interface ApplyPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return jobPositions.map((job) => ({
    id: job.id,
  }));
}

export default async function ApplyPage({ params }: ApplyPageProps) {
  const { id } = await params;
  const job = getJob(id);

  if (!job) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4">
          <Link
            href={`/careers/${id}`}
            className="inline-flex items-center text-white hover:text-orange-300 transition-colors mb-6"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Job Details
          </Link>
          <h1 className="text-4xl font-bold mb-4">Apply for {job.title}</h1>
          <p className="text-xl text-gray-300">
            {job.department} • {job.location} •{" "}
            {job.type === "remote"
              ? "🌐 Remote"
              : job.type === "hybrid"
              ? "🔄 Hybrid"
              : "🏢 On-Site"}
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <JobApplicationForm jobTitle={job.title} jobId={job.id} />
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-orange-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-4 text-gray-800">
              <i className="fas fa-info-circle text-orange-500 mr-2"></i>
              Application Process
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-orange-500 mr-3 mt-1"></i>
                <span>
                  We review all applications within 2 weeks of submission
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-orange-500 mr-3 mt-1"></i>
                <span>Shortlisted candidates will be contacted via email</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-orange-500 mr-3 mt-1"></i>
                <span>The interview process typically takes 2-4 weeks</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-orange-500 mr-3 mt-1"></i>
                <span>All candidates will receive a status update</span>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <Link
              href={`/careers/${id}`}
              className="inline-block text-orange-500 hover:text-orange-600 font-semibold"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Job Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
