"use client";

import { useState, useRef } from "react";

const MAX_FILE_BYTES = 8 * 1024 * 1024;

export default function InvestorInquiryForm() {
  const [formData, setFormData] = useState({
    partnerName: "",
    capitalAllocation: "",
    phone: "",
    email: "",
    partnerType: "Individual",
  });
  const [kycFile, setKycFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file && file.size > MAX_FILE_BYTES) {
      setError("KYC file must be smaller than 8MB.");
      e.target.value = "";
      setKycFile(null);
      return;
    }
    setError("");
    setKycFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const payload = new FormData();
      payload.append("partnerName", formData.partnerName);
      payload.append("capitalAllocation", formData.capitalAllocation);
      payload.append("phone", formData.phone);
      payload.append("email", formData.email);
      payload.append("partnerType", formData.partnerType);
      if (kycFile) payload.append("kycFile", kycFile);

      const response = await fetch("/api/send-investor-inquiry", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      setFormData({
        partnerName: "",
        capitalAllocation: "",
        phone: "",
        email: "",
        partnerType: "Individual",
      });
      setKycFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to submit application"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        id="apply-form"
        className="bg-green-50 border border-green-500 text-green-700 px-6 py-8 rounded-lg"
      >
        <div className="flex items-start">
          <i className="fas fa-check-circle text-4xl mr-4 mt-1"></i>
          <div>
            <h3 className="font-bold text-2xl mb-2">Application Received</h3>
            <p>
              Thank you for your interest in partnering with K.H. Infinity.
              Our investor relations team will review your inquiry and reach
              out within 2–3 business days to guide you through the remaining
              KYC and agreement steps.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      id="apply-form"
      className="bg-white p-8 rounded-lg shadow-md space-y-6 scroll-mt-24"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-gray-800">
        Submit Your Digital Partnership Inquiry
      </h2>

      {error && (
        <div className="bg-red-50 border border-red-500 text-red-700 px-6 py-4 rounded-lg">
          <div className="flex items-center">
            <i className="fas fa-exclamation-circle text-2xl mr-3"></i>
            <p>{error}</p>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="partnerName">
            Partner/Entity Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="partnerName"
            name="partnerName"
            value={formData.partnerName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="partnerType">
            Partner Type <span className="text-red-500">*</span>
          </label>
          <select
            id="partnerType"
            name="partnerType"
            value={formData.partnerType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            required
          >
            <option value="Individual">Individual</option>
            <option value="Corporate">Corporate</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            className="block text-gray-700 mb-2"
            htmlFor="capitalAllocation"
          >
            Target Capital Allocation (Minimum 1 Lakh BDT){" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="capitalAllocation"
            name="capitalAllocation"
            value={formData.capitalAllocation}
            onChange={handleChange}
            placeholder="e.g., 5,00,000 BDT"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="phone">
            Phone Number (+880) <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+880 1XXXXXXXXX"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            required
          />
        </div>
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
        <label className="block text-gray-700 mb-2" htmlFor="kycFile">
          Upload KYC Zip File (NID, Photos, Bank Statement)
        </label>
        <input
          type="file"
          id="kycFile"
          name="kycFile"
          ref={fileInputRef}
          accept=".zip"
          onChange={handleFileChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-orange-50 file:text-orange-700 file:font-semibold hover:file:bg-orange-100"
        />
        <p className="text-sm text-gray-500 mt-2">
          Zipped scans up to 8MB. You may also email documents directly to{" "}
          <a
            href="mailto:info@khi.com.bd"
            className="text-orange-600 hover:text-orange-700 font-semibold"
          >
            info@khi.com.bd
          </a>{" "}
          if your file is larger.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <i className="fas fa-spinner fa-spin mr-2"></i>
            Submitting...
          </span>
        ) : (
          "Submit Application"
        )}
      </button>
    </form>
  );
}
