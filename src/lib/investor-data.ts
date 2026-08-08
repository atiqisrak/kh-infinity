import { getDb } from "./mongodb";

export type ShipmentStage =
  | "Ex-Works Handover"
  | "Ocean Freight"
  | "Customs Clearance"
  | "Delivered";

export interface ImportShipment {
  shipmentRef: string;
  product: string;
  origin: string;
  destination: string;
  stage: ShipmentStage;
  progressPercent: number;
  etaDate: Date;
  updatedAt: Date;
}

export interface MonthlyKpi {
  month: string; // "2026-07"
  tradingRevenue: number;
  operatingCashFlow: number;
  cargoMarginPercent: number;
  capitalAllocationBudget: number;
  capitalAllocationUsed: number;
}

export type SmeDeliveryStatus = "Delivered" | "In Transit" | "Scheduled";

export interface SmeSourcingLog {
  date: Date;
  clientName: string;
  product: string;
  volumeKg: number;
  amount: number;
  deliveryStatus: SmeDeliveryStatus;
}

export interface DisbursementStatement {
  investorEmail: string;
  period: string; // "H1 2026"
  capitalBase: number;
  profitShareRatePercent: number;
  profitShareAmount: number;
  disbursedAt: Date;
  statementRef: string;
}

export async function getActiveShipments(limit = 5) {
  const db = await getDb();
  return db
    .collection<ImportShipment>("investor_shipments")
    .find({ stage: { $ne: "Delivered" } })
    .sort({ updatedAt: -1 })
    .limit(limit)
    .toArray();
}

export async function getRecentKpis(limit = 2) {
  const db = await getDb();
  return db
    .collection<MonthlyKpi>("investor_kpis")
    .find()
    .sort({ month: -1 })
    .limit(limit)
    .toArray();
}

export async function getRecentSmeLogs(limit = 6) {
  const db = await getDb();
  return db
    .collection<SmeSourcingLog>("investor_sme_logs")
    .find()
    .sort({ date: -1 })
    .limit(limit)
    .toArray();
}

export async function getDisbursementsForInvestor(email: string) {
  const db = await getDb();
  return db
    .collection<DisbursementStatement>("investor_disbursements")
    .find({ investorEmail: email.toLowerCase().trim() })
    .sort({ disbursedAt: -1 })
    .toArray();
}

export async function getAllDisbursements(limit = 50) {
  const db = await getDb();
  return db
    .collection<DisbursementStatement>("investor_disbursements")
    .find()
    .sort({ disbursedAt: -1 })
    .limit(limit)
    .toArray();
}

export function formatBDT(amount: number): string {
  return `${new Intl.NumberFormat("en-IN").format(Math.round(amount))} BDT`;
}

export function formatMonthLabel(month: string): string {
  const [year, monthNum] = month.split("-");
  const date = new Date(Number(year), Number(monthNum) - 1, 1);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}
