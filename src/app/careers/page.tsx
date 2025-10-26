import { Metadata } from "next";
import Link from "next/link";
import { getActiveJobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Career Opportunities - K.H. Infinity | Join Our Global Trading Team",
  description:
    "Explore exciting career opportunities with K.H. Infinity. We're hiring for remote and hybrid positions in international trade, supply chain, sales, and operations. Competitive salaries and global opportunities.",
  keywords:
    "careers, jobs, hiring, international trade jobs, import export careers, remote jobs Bangladesh, trading jobs",
  openGraph: {
    title: "Career Opportunities - Join K.H. Infinity",
    description:
      "Explore exciting career opportunities in international trade with remote and hybrid positions.",
    images: ["/images/cover/kh1.webp"],
    url: "https://khinfinity.com/careers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Opportunities - Join K.H. Infinity",
    description:
      "Explore exciting career opportunities in international trade.",
    images: ["/images/cover/kh1.webp"],
  },
};

export default function CareersPage() {
  const activeJobs = getActiveJobs();

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-gray-900 text-gray-600 py-40"
        style={{
          backgroundImage: "url(/images/cover/kh4.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Career Opportunities</h1>
          <p className="text-xl max-w-3xl mb-8">
            Join our dynamic team and be part of the global import-export
            trading industry. We offer competitive salaries, remote work
            opportunities, and a culture of innovation.
          </p>
          <div className="flex gap-4">
            <Link
              href="#open-positions"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              View Open Positions
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Why Join K.H. Infinity?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Global Remote Work
              </h3>
              <p className="text-gray-600">
                Work from anywhere in the world with our fully remote
                opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Competitive Salaries
              </h3>
              <p className="text-gray-600">
                Market-competitive compensation packages and performance bonuses
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Career Growth
              </h3>
              <p className="text-gray-600">
                Professional development opportunities and career advancement
                paths
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-5xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Great Culture
              </h3>
              <p className="text-gray-600">
                Collaborative, diverse team working on exciting international
                projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">
              We currently have {activeJobs.length} positions open. Apply now
              and join our growing team!
            </p>
          </div>

          <div className="space-y-6">
            {activeJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1 mb-4 md:mb-0">
                    <Link
                      href={`/careers/${job.id}`}
                      className="text-2xl font-bold text-gray-800 hover:text-orange-500 transition-colors mb-2 inline-block"
                    >
                      {job.title}
                    </Link>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {job.department}
                      </span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {job.type === "remote"
                          ? "🌐 Remote"
                          : job.type === "hybrid"
                          ? "🔄 Hybrid"
                          : "🏢 On-Site"}
                      </span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-orange-500 font-bold text-lg mb-2">
                      {job.salary}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {job.experience} experience
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.slice(0, 3).map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-check text-orange-500 mt-1 mr-3 text-sm"></i>
                          <span className="text-gray-600">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">
                      What We&apos;re Looking For:
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-check text-orange-500 mt-1 mr-3 text-sm"></i>
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap items-center">
                  <Link
                    href={`/careers/${job.id}`}
                    className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/careers/apply/${job.id}`}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                  >
                    Apply Now
                  </Link>
                  <div className="text-gray-600">
                    <i className="fas fa-clock mr-2"></i>
                    Posted recently
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Our Benefits & Perks
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-8 rounded-lg">
              <div className="text-orange-500 text-4xl mb-4">
                <i className="fas fa-money-bill-wave"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Competitive Compensation
              </h3>
              <p className="text-gray-600">
                Market-competitive salaries with performance bonuses and
                quarterly incentives
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-lg">
              <div className="text-orange-500 text-4xl mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Health & Wellness
              </h3>
              <p className="text-gray-600">
                Comprehensive health insurance and wellness programs
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-lg">
              <div className="text-orange-500 text-4xl mb-4">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Learning & Development
              </h3>
              <p className="text-gray-600">
                Professional development budget and certification support
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-lg">
              <div className="text-orange-500 text-4xl mb-4">
                <i className="fas fa-plane"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Travel Opportunities
              </h3>
              <p className="text-gray-600">
                International business travel and networking opportunities
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-lg">
              <div className="text-orange-500 text-4xl mb-4">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Flexible Schedule
              </h3>
              <p className="text-gray-600">
                Flexible working hours and work-life balance support
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-lg">
              <div className="text-orange-500 text-4xl mb-4">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Recognition
              </h3>
              <p className="text-gray-600">
                Quarterly performance reviews and recognition programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don&apos;t see a role that fits? We&apos;re always interested in
            hearing from talented individuals. Send us your resume and
            we&apos;ll keep you in mind for future opportunities.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Submit Resume
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
