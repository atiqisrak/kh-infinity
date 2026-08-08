import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import InvestorInquiryForm from "@/components/investors/InvestorInquiryForm";

export const metadata: Metadata = {
  title: "Investor Onboarding & KYC Compliance - K.H. Infinity",
  description:
    "Required KYC documentation and compliance steps for individual and institutional partners joining the K.H. Infinity B2B bulk import partnership program.",
  alternates: {
    canonical: "https://khi.com.bd/investors/onboarding",
  },
  openGraph: {
    title: "Compliance, KYC, & Partnership Application - K.H. Infinity",
    description:
      "Required documentation for individual and institutional partners under KHI's B2B partnership program.",
    url: "https://khi.com.bd/investors/onboarding",
    siteName: "K.H. Infinity",
    type: "website",
  },
};

const individualDocs = [
  "Photocopy of National ID (NID) or Valid Passport (confirming legal identity).",
  "One copy of a recent passport-sized photograph of the primary partner.",
  "Mandatory Nominee Declaration: designation of exactly one nominee is mandatory under local partnership guidelines.",
  "Photocopy of Nominee's NID or Passport (optional but highly recommended).",
  "One copy of a recent passport-sized photograph of the nominee.",
  "Physical or certified digital signatures of both the primary partner and the declared nominee.",
  "Photocopy of a recent bank statement (verifying the account title and routing numbers for half-yearly profit transfers).",
];

const corporateDocs = [
  "Board Resolution / Formal Authorization to Invest, signed by active company directors, proving corporate permission to allocate capital into KHI.",
  "List of authorized signatories complete with official specimen signatures.",
  "Constitutional documents: certified copies of the Memorandum and Articles of Association (MoA & AoA) for corporate entities, or registered Partnership Deeds for firms.",
  "Completed Corporate KYC Profile.",
  "Passport-sized photographs of the designated corporate representatives.",
];

export default function InvestorOnboardingPage() {
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Investors", href: "/investors" },
          { label: "Onboarding & KYC" },
        ]}
      />

      {/* Onboarding Title */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Compliance, Know Your Customer (KYC), & Partnership Application
          </h1>
          <p className="text-gray-600">
            To ensure full regulatory alignment under the laws of Bangladesh,
            KHI maintains strict compliance protocols. Before any B2B
            partnership agreement is finalized, the following documentation
            must be submitted by the applying individual or entity.
          </p>
        </div>
      </section>

      {/* Document Checklists */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Required Documents for Individual Partners
              </h2>
              <ol className="space-y-4">
                {individualDocs.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-100 text-orange-600 font-bold text-sm flex items-center justify-center mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{doc}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Required Documents for Institutional & Corporate Partners
              </h2>
              <ol className="space-y-4">
                {corporateDocs.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-100 text-orange-600 font-bold text-sm flex items-center justify-center mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{doc}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <InvestorInquiryForm />
        </div>
      </section>
    </div>
  );
}
