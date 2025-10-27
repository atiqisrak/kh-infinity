import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equal Opportunity Employer - K.H. Infinity",
  description:
    "K.H. Infinity is an equal opportunity employer committed to diversity and inclusion",
  keywords:
    "K.H. Infinity, equal opportunity employer, diversity, inclusion, careers, employment",
  openGraph: {
    title: "Equal Opportunity Employer - K.H. Infinity",
    description:
      "K.H. Infinity is an equal opportunity employer committed to diversity and inclusion",
    url: "https://khi.com.bd/equal-opportunity",
  },
};

export default function EqualOpportunityPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-gray-900 text-white py-40"
        style={{
          backgroundImage: "url(/images/cover/kh3.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Equal Opportunity Employer
          </h1>
          <p className="text-xl">
            Diversity, Inclusion, and Equal Opportunities
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p>
              K.H. Infinity is an equal opportunity employer committed to
              creating a diverse and inclusive work environment. We provide
              equal employment opportunities (EEO) to all employees and
              applicants for employment without regard to race, color, religion,
              sex, national origin, age, disability, genetics, sexual
              orientation, gender identity or expression, or veteran status.
              K.H. Infinity complies with applicable state and local laws
              governing nondiscrimination in employment in every location in
              which the company has facilities. This policy applies to all terms
              and conditions of employment.
            </p>

            <p>
              K.H. Infinity explicitly prohibits any form of workplace
              harassment based on race, color, religion, gender, sexual
              orientation, gender identity or expression, national origin, age,
              genetic information, disability, or veteran status.
            </p>

            <p>
              We strive to provide an accessible, accommodating, and supportive
              environment for all individuals. If you require reasonable
              accommodation in the application or hiring process, please notify
              us.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
              OUR COMMITMENT TO DIVERSITY AND INCLUSION
            </h2>

            <p>
              At K.H. Infinity, we believe that diversity and inclusion are
              essential to our success. We are committed to:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Creating and maintaining a workplace culture that embraces
                diversity and inclusion
              </li>
              <li>
                Hiring and promoting qualified individuals based on merit,
                experience, and ability
              </li>
              <li>
                Providing equal opportunities for professional growth and
                development
              </li>
              <li>
                Ensuring fair treatment in all employment practices, including
                recruitment, hiring, compensation, benefits, promotions,
                transfers, and terminations
              </li>
              <li>
                Maintaining a work environment free from discrimination,
                harassment, and retaliation
              </li>
              <li>
                Accommodating individuals with disabilities throughout the
                employment process
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
              RECRUITMENT AND HIRING
            </h2>

            <p>
              We recruit, hire, train, promote, and provide benefits to
              qualified individuals without regard to race, color, religion,
              gender, national origin, age, disability, genetics, sexual
              orientation, gender identity or expression, veteran status, or any
              other legally protected status.
            </p>

            <p>
              Our recruitment process is designed to attract and select the most
              qualified candidates based on job-related qualifications, skills,
              and abilities. We encourage applications from individuals of all
              backgrounds who are interested in joining our team.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
              REASONABLE ACCOMMODATION
            </h2>

            <p>
              K.H. Infinity is committed to providing reasonable accommodations
              to qualified individuals with disabilities during the application
              and hiring process and during employment. If you need an
              accommodation, please contact our Human Resources department.
            </p>

            <p>
              We will work with you to identify and implement appropriate
              reasonable accommodations that will allow you to perform the
              essential functions of your position effectively.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
              NON-DISCRIMINATION POLICY
            </h2>

            <p>
              K.H. Infinity prohibits discrimination and harassment in the
              workplace in any form. This includes, but is not limited to:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Discriminatory employment decisions</li>
              <li>Harassment based on protected characteristics</li>
              <li>
                Retaliation against individuals who report discrimination or
                harassment
              </li>
              <li>Unfair treatment in any aspect of employment</li>
            </ul>

            <p>
              All employees, supervisors, and managers are expected to adhere to
              this policy and to contribute to maintaining a respectful and
              inclusive work environment.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
              REPORTING AND RESOLUTION
            </h2>

            <p>
              If you believe you have been subjected to discrimination,
              harassment, or any violation of our equal opportunity policies, we
              encourage you to report the matter immediately. All reports will
              be investigated promptly and thoroughly.
            </p>

            <p>
              K.H. Infinity will not tolerate retaliation against any individual
              who in good faith reports a concern or participates in an
              investigation.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
              EQUAL OPPORTUNITY ACROSS OPERATIONS
            </h2>

            <p>
              Our commitment to equal opportunity extends to all aspects of our
              operations, including:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Recruitment and selection</li>
              <li>Compensation and benefits</li>
              <li>Training and development</li>
              <li>Promotions and transfers</li>
              <li>Termination and layoffs</li>
              <li>Work assignments</li>
              <li>Performance evaluations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
              JOIN OUR TEAM
            </h2>

            <p>
              We are always looking for talented individuals who share our
              commitment to excellence and our values of integrity, diversity,
              and inclusion. Whether you are just starting your career or bring
              years of experience, we invite you to explore opportunities with
              K.H. Infinity.
            </p>

            <p>
              For current job openings and to learn more about careers at K.H.
              Infinity, please contact us at:
            </p>

            <div className="bg-gray-100 p-6 rounded-lg my-6">
              <p className="font-semibold mb-2">
                K.H. Infinity - Human Resources
              </p>
              <p>
                <i className="fas fa-map-marker-alt mr-2 text-orange-500"></i>
                Kader Tropical Height, Shop- G5, 10 Hatkhola Road, Tikatuli,
                Wari, Dhaka 1203, Bangladesh
              </p>
              <p className="mt-2">
                <i className="fas fa-phone mr-2 text-orange-500"></i>
                <a
                  href="tel:+8801400893882"
                  className="text-orange-500 hover:text-orange-600"
                >
                  +880 1400893882
                </a>
              </p>
              <p className="mt-2">
                <i className="fas fa-envelope mr-2 text-orange-500"></i>
                <a
                  href="mailto:info@khi.com.bd"
                  className="text-orange-500 hover:text-orange-600"
                >
                  info@khi.com.bd
                </a>
              </p>
              <p className="mt-2">
                <i className="fas fa-envelope mr-2 text-orange-500"></i>
                <a
                  href="mailto:careers@khi.com.bd"
                  className="text-orange-500 hover:text-orange-600"
                >
                  careers@khi.com.bd
                </a>
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
