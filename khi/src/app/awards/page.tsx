import { Metadata } from "next";
import Link from "next/link";
import { getCertifications, getAwards, getTestimonials } from "@/lib/awards";

export const metadata: Metadata = {
  title: "Certifications & Awards - K.H. Infinity",
  description:
    "Explore our certifications, industry awards, and client testimonials that showcase K.H. Infinity's commitment to excellence in international trade.",
  keywords:
    "certifications, awards, ISO certification, trade licenses, client testimonials, K.H. Infinity achievements",
  openGraph: {
    title: "Certifications & Awards - K.H. Infinity",
    description:
      "Our certifications, awards, and client testimonials demonstrate our commitment to excellence.",
    url: "https://khi.com.bd/awards",
  },
};

export default function AwardsPage() {
  const certifications = getCertifications();
  const awards = getAwards();
  const testimonials = getTestimonials();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-orange-50 via-orange-100 to-white overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Certifications & Awards
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Recognized for excellence in international trade, quality
              management, and customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Certifications & Licenses
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our certifications and licenses demonstrate our compliance with
              international quality standards and regulatory requirements.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert) => {
                const issueDate = new Date(cert.issueDate).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                  }
                );
                return (
                  <div
                    key={cert.id}
                    className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <i className="fas fa-certificate text-2xl text-orange-500"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {cert.issuingBody}
                    </p>
                    <p className="text-gray-500 text-sm mb-3">
                      Issued: {issueDate}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Certificate #: {cert.certificateNumber}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Industry Recognition
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Acknowledged by industry leaders for our commitment to excellence
              and innovation in international trade.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {awards.map((award) => {
                const awardDate = new Date(award.date).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                  }
                );
                return (
                  <div
                    key={award.id}
                    className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                      <i className="fas fa-trophy text-2xl text-yellow-500"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                    <p className="text-orange-600 font-semibold text-sm mb-3">
                      {award.organization}
                    </p>
                    <p className="text-gray-600 text-sm mb-3">{awardDate}</p>
                    <p className="text-gray-600">{award.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Client Testimonials
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working
              with K.H. Infinity.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-user text-orange-500"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the K.H. Infinity difference. Let our certifications and
            track record speak for our commitment to your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Get in Touch
            </Link>
            <Link
              href="/quote"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-500 transition-colors font-semibold"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
