"use client";

import { useState } from "react";

interface JobApplicationFormProps {
  jobTitle: string;
  jobId: string;
}

export default function JobApplicationForm({
  jobTitle,
  jobId,
}: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    resumeUrl: "",
    coverLetter: "",
    portfolio: "",
    availability: "immediate",
    salaryExpectation: "",
    noticePeriod: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted for:", jobTitle, formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-500 text-green-700 px-6 py-8 rounded-lg mb-8">
        <div className="flex items-center">
          <i className="fas fa-check-circle text-4xl mr-4"></i>
          <div>
            <h3 className="font-bold text-2xl mb-2">Application Submitted!</h3>
            <p>
              Thank you for your interest in {jobTitle}. We&apos;ve received
              your application and will review it within 2 weeks. Our team will
              contact you via email if you&apos;re selected for the next round.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      {/* Personal Information */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Personal Information
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="country">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              required
            />
          </div>
        </div>
      </div>

      {/* Application Details */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Application Details
        </h2>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="resumeUrl">
              Resume/CV URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              id="resumeUrl"
              name="resumeUrl"
              value={formData.resumeUrl}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourprofile or Google Drive link"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              required
            />
            <p className="text-sm text-gray-500 mt-2">
              Please provide a link to your resume (LinkedIn, Google Drive,
              Dropbox, etc.)
            </p>
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="portfolio">
              Portfolio/Website (Optional)
            </label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              placeholder="https://yourportfolio.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="coverLetter">
              Cover Letter <span className="text-red-500">*</span>
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows={8}
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              required
            ></textarea>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Availability</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="availability">
              When can you start? <span className="text-red-500">*</span>
            </label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              required
            >
              <option value="immediate">Immediately Available</option>
              <option value="1month">Within 1 Month</option>
              <option value="2weeks">Within 2 Weeks</option>
              <option value="3months">Within 3 Months</option>
              <option value="negotiable">Negotiable</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="noticePeriod">
              Notice Period (if currently employed)
            </label>
            <input
              type="text"
              id="noticePeriod"
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleChange}
              placeholder="e.g., 30 days, 2 weeks"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 mb-2"
              htmlFor="salaryExpectation"
            >
              Expected Salary (Optional)
            </label>
            <input
              type="text"
              id="salaryExpectation"
              name="salaryExpectation"
              value={formData.salaryExpectation}
              onChange={handleChange}
              placeholder="e.g., $50,000 - $60,000 or Competitive"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
}
