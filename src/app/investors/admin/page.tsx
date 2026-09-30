import { Metadata } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { getInvestorSession } from "@/lib/investor-auth";
import { getDb } from "@/lib/mongodb";
import { getAllDisbursements, formatBDT } from "@/lib/investor-data";
import InvestorLogoutButton from "@/components/investors/InvestorLogoutButton";

export const metadata: Metadata = {
  title: "Superadmin - K.H. Infinity Investors",
  robots: "noindex, nofollow",
};

interface InvestorUserRow {
  _id: string;
  name: string;
  email: string;
  partnerType: string;
  role: string;
  active: boolean;
  createdAt: Date;
}

interface InvestorInquiryRow {
  _id: string;
  partnerName: string;
  email: string;
  phone: string;
  partnerType: string;
  capitalAllocation: string;
  status: string;
  createdAt: Date;
}

const statusStyles: Record<string, string> = {
  new: "bg-orange-100 text-orange-700",
  reviewed: "bg-blue-100 text-blue-700",
  approved: "bg-green-100 text-green-700",
};

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function AdminSkeleton() {
  return (
    <div className="pt-28 pb-16 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="h-8 w-80 bg-gray-200 rounded mb-10"></div>
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <div className="h-24 bg-gray-100 rounded-lg"></div>
          <div className="h-24 bg-gray-100 rounded-lg"></div>
          <div className="h-24 bg-gray-100 rounded-lg"></div>
        </div>
        <div className="h-64 bg-gray-100 rounded-lg mb-10"></div>
        <div className="h-64 bg-gray-100 rounded-lg mb-10"></div>
        <div className="h-64 bg-gray-100 rounded-lg"></div>
      </div>
    </div>
  );
}

async function AdminContent() {
  const session = await getInvestorSession();

  if (!session) {
    redirect("/investors/portal");
  }
  if (session.role !== "admin") {
    redirect("/investors/portal/dashboard");
  }

  const db = await getDb();
  const [users, inquiries, disbursements] = await Promise.all([
    db
      .collection<InvestorUserRow>("investor_users")
      .find()
      .sort({ createdAt: -1 })
      .toArray(),
    db
      .collection<InvestorInquiryRow>("investor_inquiries")
      .find()
      .sort({ createdAt: -1 })
      .toArray(),
    getAllDisbursements(),
  ]);

  const newInquiryCount = inquiries.filter((i) => i.status === "new").length;

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-sm text-orange-600 font-semibold uppercase tracking-wide mb-1">
              Superadmin
            </p>
            <h1 className="text-3xl font-bold text-gray-800">
              Investor Relations Backoffice
            </h1>
          </div>
          <InvestorLogoutButton />
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <p className="text-xs uppercase tracking-wide font-semibold text-gray-400 mb-2">
              Portal Accounts
            </p>
            <p className="text-3xl font-bold text-gray-800">{users.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <p className="text-xs uppercase tracking-wide font-semibold text-gray-400 mb-2">
              Total Inquiries
            </p>
            <p className="text-3xl font-bold text-gray-800">
              {inquiries.length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <p className="text-xs uppercase tracking-wide font-semibold text-gray-400 mb-2">
              New / Unreviewed
            </p>
            <p className="text-3xl font-bold text-orange-600">
              {newInquiryCount}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-100 mb-10 overflow-x-auto">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-800">
              Investor Inquiries
            </h2>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-gray-400">
                <th className="px-6 py-3">Partner</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Capital Allocation</th>
                <th className="px-6 py-3">Contact</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                    No inquiries yet.
                  </td>
                </tr>
              ) : (
                inquiries.map((inquiry) => (
                  <tr
                    key={String(inquiry._id)}
                    className="border-t border-gray-100"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {inquiry.partnerName}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {inquiry.partnerType}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {inquiry.capitalAllocation}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <div>{inquiry.email}</div>
                      <div className="text-gray-400">{inquiry.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          statusStyles[inquiry.status] ??
                          "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {inquiry.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {formatDate(inquiry.createdAt)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-100 mb-10 overflow-x-auto">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-800">
              Half-Yearly Disbursements (All Partners)
            </h2>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-gray-400">
                <th className="px-6 py-3">Investor Email</th>
                <th className="px-6 py-3">Period</th>
                <th className="px-6 py-3">Capital Base</th>
                <th className="px-6 py-3">Rate</th>
                <th className="px-6 py-3">Profit Share Amount</th>
                <th className="px-6 py-3">Disbursed</th>
                <th className="px-6 py-3">Statement Ref.</th>
              </tr>
            </thead>
            <tbody>
              {disbursements.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-400">
                    No disbursements recorded yet.
                  </td>
                </tr>
              ) : (
                disbursements.map((statement) => (
                  <tr
                    key={statement.statementRef}
                    className="border-t border-gray-100"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {statement.investorEmail}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {statement.period}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {formatBDT(statement.capitalBase)}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {statement.profitShareRatePercent}%
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {formatBDT(statement.profitShareAmount)}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {formatDate(statement.disbursedAt)}
                    </td>
                    <td className="px-6 py-4 text-gray-400">
                      {statement.statementRef}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-x-auto">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-800">
              Portal Accounts
            </h2>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-gray-400">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Created</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                    No accounts yet.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user._id} className="border-t border-gray-100">
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{user.email}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {user.partnerType}
                    </td>
                    <td className="px-6 py-4 text-gray-600 capitalize">
                      {user.role}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          user.active
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {user.active ? "Active" : "Disabled"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {formatDate(user.createdAt)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function InvestorAdminPage() {
  return (
    <Suspense fallback={<AdminSkeleton />}>
      <AdminContent />
    </Suspense>
  );
}
