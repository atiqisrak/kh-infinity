import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import InvestorPortalLogin from "@/components/investors/InvestorPortalLogin";

export const metadata: Metadata = {
  title: "Secure Investor Portal - K.H. Infinity",
  description:
    "Log in to the K.H. Infinity Secure Partner & Investor Portal to access live import cycle tracking, financial KPIs, and half-yearly disbursement statements.",
  alternates: {
    canonical: "https://khi.com.bd/investors/portal",
  },
  robots: "noindex, follow",
  openGraph: {
    title: "KHI Secure Partner & Investor Portal",
    description:
      "Verified partners can log in securely to access detailed, audit-ready operational records.",
    url: "https://khi.com.bd/investors/portal",
    siteName: "K.H. Infinity",
    type: "website",
  },
};

const portalMetrics = [
  {
    icon: "fa-ship",
    title: "Live Import Cycle Tracking",
    description:
      "Real-time updates on active bulk cargo shipments, starting from global Ex-Works supplier handovers to customs clearance milestones at Chittagong Port.",
  },
  {
    icon: "fa-chart-pie",
    title: "Key Financial Performance Indicators (KPIs)",
    description:
      "Monthly tracking of active trading revenues, operating cash flows, cargo margins, and capital allocation budgets.",
  },
  {
    icon: "fa-store",
    title: "SME Door-to-Door Sourcing Logs",
    description:
      "Real-time transaction volumes and delivery updates for our mid-market retail clients.",
  },
  {
    icon: "fa-file-invoice-dollar",
    title: "Half-Yearly Disbursement Statements",
    description:
      "Digital, downloadable statements detailing your exact profit-share calculations and disbursement history.",
  },
];

export default function InvestorPortalPage() {
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Investors", href: "/investors" },
          { label: "Secure Portal" },
        ]}
      />

      {/* Main Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl font-bold mb-6 text-gray-800">
                KHI Secure Partner & Investor Portal
              </h1>
              <p className="text-gray-600 mb-6">
                To protect our wholesale trade secrets, shipping schedules,
                and commercial contract margins from competitive
                exploitation, we do not post raw transaction ledgers or
                sensitive cash flow data on the public web. Verified partners
                can log in securely below to access detailed, audit-ready
                operational records.
              </p>
              <p className="text-gray-600">
                Not yet a verified partner?{" "}
                <Link
                  href="/investors/onboarding"
                  className="text-orange-600 hover:text-orange-700 font-semibold"
                >
                  Complete onboarding and KYC
                </Link>{" "}
                to request portal access.
              </p>
            </div>
            <InvestorPortalLogin />
          </div>
        </div>
      </section>

      {/* GEO/AEO Question Heading */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            What metrics and tracking systems are visible inside the KHI
            secure portal?
          </h2>
          <p className="text-gray-600 mb-10">
            Once logged in, partners have unrestricted access to our
            automated Investor Relations Management Ledger, which includes:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {portalMetrics.map((metric) => (
              <div
                key={metric.title}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <i
                  className={`fas ${metric.icon} text-3xl text-orange-500 mb-4`}
                ></i>
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {metric.title}
                </h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
