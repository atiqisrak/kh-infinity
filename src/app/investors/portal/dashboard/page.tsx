import { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getInvestorSession } from "@/lib/investor-auth";
import {
  getActiveShipments,
  getRecentKpis,
  getRecentSmeLogs,
  getDisbursementsForInvestor,
  formatBDT,
  formatMonthLabel,
} from "@/lib/investor-data";
import InvestorLogoutButton from "@/components/investors/InvestorLogoutButton";

export const metadata: Metadata = {
  title: "Investor Dashboard - K.H. Infinity",
  robots: "noindex, nofollow",
};

const stageStyles: Record<string, string> = {
  "Ex-Works Handover": "bg-gray-100 text-gray-700",
  "Ocean Freight": "bg-blue-100 text-blue-700",
  "Customs Clearance": "bg-orange-100 text-orange-700",
  Delivered: "bg-green-100 text-green-700",
};

const deliveryStatusStyles: Record<string, string> = {
  Delivered: "bg-green-100 text-green-700",
  "In Transit": "bg-blue-100 text-blue-700",
  Scheduled: "bg-gray-100 text-gray-600",
};

function shortDate(date: Date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function DashboardSkeleton() {
  return (
    <div className="pt-28 pb-16 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="h-8 w-64 bg-gray-200 rounded mb-10"></div>
        <div className="space-y-8">
          <div className="h-56 bg-gray-100 rounded-lg"></div>
          <div className="h-40 bg-gray-100 rounded-lg"></div>
          <div className="h-56 bg-gray-100 rounded-lg"></div>
          <div className="h-56 bg-gray-100 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

async function DashboardContent() {
  const session = await getInvestorSession();

  if (!session) {
    redirect("/investors/portal");
  }

  const [shipments, kpis, smeLogs, disbursements] = await Promise.all([
    getActiveShipments(),
    getRecentKpis(2),
    getRecentSmeLogs(),
    getDisbursementsForInvestor(session.email),
  ]);

  const [latestKpi, previousKpi] = kpis;

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-sm text-orange-600 font-semibold uppercase tracking-wide mb-1">
              {session.partnerType} Partner
            </p>
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome back, {session.name}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {session.role === "admin" && (
              <Link
                href="/investors/admin"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-5 py-2.5 rounded-lg hover:bg-gray-700 transition-colors font-semibold text-sm"
              >
                <i className="fas fa-user-shield"></i>
                Superadmin
              </Link>
            )}
            <InvestorLogoutButton />
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-10">
          <div className="flex items-start">
            <i className="fas fa-circle-info text-orange-500 text-xl mr-3 mt-0.5"></i>
            <p className="text-gray-700 text-sm">
              Figures below reflect our most recently reconciled operational
              and financial records. For statements or questions, contact
              your Relationship Manager at{" "}
              <a
                href="mailto:info@khi.com.bd"
                className="text-orange-600 hover:text-orange-700 font-semibold"
              >
                info@khi.com.bd
              </a>
              .
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Live Import Cycle Tracking */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <i className="fas fa-ship text-2xl text-orange-500"></i>
              <h2 className="text-lg font-bold text-gray-800">
                Live Import Cycle Tracking
              </h2>
            </div>
            {shipments.length === 0 ? (
              <p className="text-xs uppercase tracking-wide font-semibold text-gray-400">
                No active shipments right now
              </p>
            ) : (
              <div className="space-y-4">
                {shipments.map((shipment) => (
                  <div
                    key={shipment.shipmentRef}
                    className="border border-gray-100 rounded-lg p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div>
                        <p className="font-semibold text-gray-800">
                          {shipment.product}
                        </p>
                        <p className="text-xs text-gray-500">
                          {shipment.shipmentRef} &middot; {shipment.origin} →{" "}
                          {shipment.destination}
                        </p>
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          stageStyles[shipment.stage] ??
                          "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {shipment.stage}
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: `${shipment.progressPercent}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-400">
                      ETA {shortDate(shipment.etaDate)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Financial KPIs */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <i className="fas fa-chart-pie text-2xl text-orange-500"></i>
              <h2 className="text-lg font-bold text-gray-800">
                Key Financial Performance Indicators
              </h2>
            </div>
            {!latestKpi ? (
              <p className="text-xs uppercase tracking-wide font-semibold text-gray-400">
                No KPI data yet
              </p>
            ) : (
              <>
                <p className="text-xs text-gray-400 mb-4">
                  {formatMonthLabel(latestKpi.month)}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <KpiTile
                    label="Trading Revenue"
                    value={formatBDT(latestKpi.tradingRevenue)}
                    deltaLabel={
                      previousKpi
                        ? formatSignedDelta(
                            latestKpi.tradingRevenue -
                              previousKpi.tradingRevenue,
                            (n) => formatBDT(n)
                          )
                        : undefined
                    }
                  />
                  <KpiTile
                    label="Operating Cash Flow"
                    value={formatBDT(latestKpi.operatingCashFlow)}
                    deltaLabel={
                      previousKpi
                        ? formatSignedDelta(
                            latestKpi.operatingCashFlow -
                              previousKpi.operatingCashFlow,
                            (n) => formatBDT(n)
                          )
                        : undefined
                    }
                  />
                  <KpiTile
                    label="Cargo Margin"
                    value={`${latestKpi.cargoMarginPercent.toFixed(1)}%`}
                    deltaLabel={
                      previousKpi
                        ? formatSignedDelta(
                            latestKpi.cargoMarginPercent -
                              previousKpi.cargoMarginPercent,
                            (n) => `${n.toFixed(1)} pp`
                          )
                        : undefined
                    }
                  />
                  <div>
                    <p className="text-xs uppercase tracking-wide font-semibold text-gray-400 mb-1">
                      Capital Allocation Used
                    </p>
                    <p className="text-xl font-bold text-gray-800 mb-1">
                      {Math.round(
                        (latestKpi.capitalAllocationUsed /
                          latestKpi.capitalAllocationBudget) *
                          100
                      )}
                      %
                    </p>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{
                          width: `${Math.min(
                            100,
                            (latestKpi.capitalAllocationUsed /
                              latestKpi.capitalAllocationBudget) *
                              100
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* SME Sourcing Logs */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 overflow-x-auto">
            <div className="flex items-center gap-3 mb-4">
              <i className="fas fa-store text-2xl text-orange-500"></i>
              <h2 className="text-lg font-bold text-gray-800">
                SME Door-to-Door Sourcing Logs
              </h2>
            </div>
            {smeLogs.length === 0 ? (
              <p className="text-xs uppercase tracking-wide font-semibold text-gray-400">
                No sourcing activity yet
              </p>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-gray-400">
                    <th className="py-2 pr-4">Date</th>
                    <th className="py-2 pr-4">Client</th>
                    <th className="py-2 pr-4">Product</th>
                    <th className="py-2 pr-4">Volume</th>
                    <th className="py-2 pr-4">Amount</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {smeLogs.map((log, index) => (
                    <tr
                      key={`${log.clientName}-${index}`}
                      className="border-t border-gray-100"
                    >
                      <td className="py-3 pr-4 text-gray-600">
                        {shortDate(log.date)}
                      </td>
                      <td className="py-3 pr-4 font-semibold text-gray-800">
                        {log.clientName}
                      </td>
                      <td className="py-3 pr-4 text-gray-600">
                        {log.product}
                      </td>
                      <td className="py-3 pr-4 text-gray-600">
                        {log.volumeKg.toLocaleString("en-IN")} kg
                      </td>
                      <td className="py-3 pr-4 text-gray-600">
                        {formatBDT(log.amount)}
                      </td>
                      <td className="py-3">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            deliveryStatusStyles[log.deliveryStatus] ??
                            "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {log.deliveryStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Disbursement Statements */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 overflow-x-auto">
            <div className="flex items-center gap-3 mb-4">
              <i className="fas fa-file-invoice-dollar text-2xl text-orange-500"></i>
              <h2 className="text-lg font-bold text-gray-800">
                Half-Yearly Disbursement Statements
              </h2>
            </div>
            {disbursements.length === 0 ? (
              <p className="text-xs uppercase tracking-wide font-semibold text-gray-400">
                No disbursement statements yet for your account
              </p>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-gray-400">
                    <th className="py-2 pr-4">Period</th>
                    <th className="py-2 pr-4">Capital Base</th>
                    <th className="py-2 pr-4">Profit Share Rate</th>
                    <th className="py-2 pr-4">Profit Share Amount</th>
                    <th className="py-2 pr-4">Disbursed</th>
                    <th className="py-2">Statement Ref.</th>
                  </tr>
                </thead>
                <tbody>
                  {disbursements.map((statement) => (
                    <tr
                      key={statement.statementRef}
                      className="border-t border-gray-100"
                    >
                      <td className="py-3 pr-4 font-semibold text-gray-800">
                        {statement.period}
                      </td>
                      <td className="py-3 pr-4 text-gray-600">
                        {formatBDT(statement.capitalBase)}
                      </td>
                      <td className="py-3 pr-4 text-gray-600">
                        {statement.profitShareRatePercent}%
                      </td>
                      <td className="py-3 pr-4 text-gray-600">
                        {formatBDT(statement.profitShareAmount)}
                      </td>
                      <td className="py-3 pr-4 text-gray-600">
                        {shortDate(statement.disbursedAt)}
                      </td>
                      <td className="py-3 text-gray-400">
                        {statement.statementRef}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function formatSignedDelta(delta: number, format: (n: number) => string) {
  const sign = delta >= 0 ? "+" : "-";
  return {
    isPositive: delta >= 0,
    text: `${sign}${format(Math.abs(delta))} vs last month`,
  };
}

function KpiTile({
  label,
  value,
  deltaLabel,
}: {
  label: string;
  value: string;
  deltaLabel?: ReturnType<typeof formatSignedDelta>;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide font-semibold text-gray-400 mb-1">
        {label}
      </p>
      <p className="text-xl font-bold text-gray-800">{value}</p>
      {deltaLabel && (
        <p
          className={`text-xs font-semibold ${
            deltaLabel.isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          <i
            className={`fas fa-arrow-${
              deltaLabel.isPositive ? "up" : "down"
            } mr-1`}
          ></i>
          {deltaLabel.text}
        </p>
      )}
    </div>
  );
}

export default function InvestorDashboardPage() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardContent />
    </Suspense>
  );
}
