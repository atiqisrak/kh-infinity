// One-off script to seed demo data for the investors feature: a partner
// account, an admin account, and a handful of investor inquiries — so the
// superadmin page (/investors/admin) and the investor dashboard have
// something real to show. Run with: node scripts/seed-investor-demo-data.mjs
import { readFileSync, existsSync } from "fs";
import { randomBytes, scryptSync } from "crypto";
import { MongoClient } from "mongodb";

function loadEnvLocal() {
  const path = new URL("../.env.local", import.meta.url);
  if (!existsSync(path)) return;
  const contents = readFileSync(path, "utf8");
  for (const line of contents.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

loadEnvLocal();

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "khi_investors";

if (!uri) {
  console.error("MONGODB_URI is not set (checked .env.local).");
  process.exit(1);
}

const DEMO_PARTNER = {
  email: "demo.partner@khinfinity.test",
  password: "InvestorDemo2026!",
  name: "Rahim Chowdhury",
  partnerType: "Individual",
  role: "partner",
};

const DEMO_ADMIN = {
  email: "demo.admin@khinfinity.test",
  password: "SuperAdminDemo2026!",
  name: "KHI Admin",
  partnerType: "Corporate",
  role: "admin",
};

const DEMO_INQUIRIES = [
  {
    partnerName: "Farhana Islam",
    capitalAllocation: "10,00,000 BDT",
    phone: "+8801711000001",
    email: "farhana.islam@example.com",
    partnerType: "Individual",
    status: "new",
  },
  {
    partnerName: "Meridian Trading Ltd.",
    capitalAllocation: "50,00,000 BDT",
    phone: "+8801711000002",
    email: "contact@meridiantrading.example.com",
    partnerType: "Corporate",
    status: "reviewed",
  },
  {
    partnerName: "Tanvir Ahmed",
    capitalAllocation: "5,00,000 BDT",
    phone: "+8801711000003",
    email: "tanvir.ahmed@example.com",
    partnerType: "Individual",
    status: "new",
  },
  {
    partnerName: "Bengal Agro Holdings",
    capitalAllocation: "1,20,00,000 BDT",
    phone: "+8801711000004",
    email: "invest@bengalagro.example.com",
    partnerType: "Corporate",
    status: "approved",
  },
  {
    partnerName: "Nusrat Jahan",
    capitalAllocation: "7,50,000 BDT",
    phone: "+8801711000005",
    email: "nusrat.jahan@example.com",
    partnerType: "Individual",
    status: "new",
  },
];

const DEMO_SHIPMENTS = [
  {
    shipmentRef: "KHI-2026-0142",
    product: "Almonds (California)",
    origin: "Oakland, USA",
    destination: "Chittagong Port",
    stage: "Ocean Freight",
    progressPercent: 55,
    etaDaysFromNow: 12,
  },
  {
    shipmentRef: "KHI-2026-0143",
    product: "Medjool Dates (Jordan)",
    origin: "Aqaba, Jordan",
    destination: "Chittagong Port",
    stage: "Customs Clearance",
    progressPercent: 82,
    etaDaysFromNow: 3,
  },
  {
    shipmentRef: "KHI-2026-0144",
    product: "Sunflower Oil (Ukraine)",
    origin: "Odesa, Ukraine",
    destination: "Mongla Port",
    stage: "Ex-Works Handover",
    progressPercent: 15,
    etaDaysFromNow: 34,
  },
  {
    shipmentRef: "KHI-2026-0139",
    product: "Chickpeas (Australia)",
    origin: "Melbourne, Australia",
    destination: "Chittagong Port",
    stage: "Delivered",
    progressPercent: 100,
    etaDaysFromNow: -5,
  },
];

const DEMO_KPIS = [
  {
    month: "2026-06",
    tradingRevenue: 42_500_000,
    operatingCashFlow: 9_800_000,
    cargoMarginPercent: 11.2,
    capitalAllocationBudget: 60_000_000,
    capitalAllocationUsed: 38_400_000,
  },
  {
    month: "2026-07",
    tradingRevenue: 47_900_000,
    operatingCashFlow: 11_650_000,
    cargoMarginPercent: 12.6,
    capitalAllocationBudget: 60_000_000,
    capitalAllocationUsed: 44_100_000,
  },
];

const DEMO_SME_LOGS = [
  {
    daysAgo: 1,
    clientName: "Rahman General Store",
    product: "Sugar",
    volumeKg: 2500,
    amount: 275_000,
    deliveryStatus: "Delivered",
  },
  {
    daysAgo: 2,
    clientName: "Nabil Enterprise",
    product: "Soyabean Oil",
    volumeKg: 1800,
    amount: 396_000,
    deliveryStatus: "Delivered",
  },
  {
    daysAgo: 3,
    clientName: "Sonali Traders",
    product: "Cumin",
    volumeKg: 600,
    amount: 312_000,
    deliveryStatus: "In Transit",
  },
  {
    daysAgo: 4,
    clientName: "Bismillah Store",
    product: "Chickpeas",
    volumeKg: 1200,
    amount: 168_000,
    deliveryStatus: "Delivered",
  },
  {
    daysAgo: 5,
    clientName: "Green Valley Mart",
    product: "Soy Sauce",
    volumeKg: 400,
    amount: 92_000,
    deliveryStatus: "Scheduled",
  },
  {
    daysAgo: 6,
    clientName: "Karim Bazar Store",
    product: "Sunflower Oil",
    volumeKg: 2200,
    amount: 484_000,
    deliveryStatus: "Delivered",
  },
];

const DEMO_DISBURSEMENTS = [
  {
    investorEmail: "demo.partner@khinfinity.test",
    period: "H2 2025",
    capitalBase: 10_000_000,
    profitShareRatePercent: 9.5,
    profitShareAmount: 950_000,
    disbursedDaysAgo: 190,
    statementRef: "KHI-DS-2025-H2-0001",
  },
  {
    investorEmail: "demo.partner@khinfinity.test",
    period: "H1 2026",
    capitalBase: 10_000_000,
    profitShareRatePercent: 10.2,
    profitShareAmount: 1_020_000,
    disbursedDaysAgo: 10,
    statementRef: "KHI-DS-2026-H1-0001",
  },
  {
    investorEmail: "farhana.islam@example.com",
    period: "H1 2026",
    capitalBase: 5_000_000,
    profitShareRatePercent: 10.2,
    profitShareAmount: 510_000,
    disbursedDaysAgo: 10,
    statementRef: "KHI-DS-2026-H1-0002",
  },
];

async function seedShipments(client, dbName) {
  const db = client.db(dbName);
  const collection = db.collection("investor_shipments");
  const now = Date.now();
  for (const shipment of DEMO_SHIPMENTS) {
    const { etaDaysFromNow, ...rest } = shipment;
    await collection.updateOne(
      { shipmentRef: shipment.shipmentRef },
      {
        $set: {
          ...rest,
          etaDate: new Date(now + etaDaysFromNow * 24 * 60 * 60 * 1000),
          updatedAt: new Date(),
        },
      },
      { upsert: true }
    );
  }
  console.log(`Upserted ${DEMO_SHIPMENTS.length} demo shipments.`);
}

async function seedKpis(client, dbName) {
  const db = client.db(dbName);
  const collection = db.collection("investor_kpis");
  for (const kpi of DEMO_KPIS) {
    await collection.updateOne(
      { month: kpi.month },
      { $set: kpi },
      { upsert: true }
    );
  }
  console.log(`Upserted ${DEMO_KPIS.length} demo monthly KPI records.`);
}

async function seedSmeLogs(client, dbName) {
  const db = client.db(dbName);
  const collection = db.collection("investor_sme_logs");
  const existing = await collection.countDocuments({ _seedDemo: true });
  if (existing > 0) {
    console.log(
      `Skipping SME logs: ${existing} demo entries already present.`
    );
    return;
  }
  const now = Date.now();
  const docs = DEMO_SME_LOGS.map(({ daysAgo, ...rest }) => ({
    ...rest,
    date: new Date(now - daysAgo * 24 * 60 * 60 * 1000),
    _seedDemo: true,
  }));
  await collection.insertMany(docs);
  console.log(`Inserted ${docs.length} demo SME sourcing logs.`);
}

async function seedDisbursements(client, dbName) {
  const db = client.db(dbName);
  const collection = db.collection("investor_disbursements");
  const now = Date.now();
  for (const statement of DEMO_DISBURSEMENTS) {
    const { disbursedDaysAgo, ...rest } = statement;
    await collection.updateOne(
      { statementRef: statement.statementRef },
      {
        $set: {
          ...rest,
          disbursedAt: new Date(now - disbursedDaysAgo * 24 * 60 * 60 * 1000),
        },
      },
      { upsert: true }
    );
  }
  console.log(`Upserted ${DEMO_DISBURSEMENTS.length} demo disbursements.`);
}

async function upsertUser(client, dbName, user) {
  const db = client.db(dbName);
  const _id = user.email.toLowerCase().trim();
  await db.collection("investor_users").updateOne(
    { _id },
    {
      $set: {
        _id,
        email: _id,
        name: user.name,
        partnerType: user.partnerType,
        passwordHash: hashPassword(user.password),
        active: true,
        role: user.role,
        createdAt: new Date(),
      },
    },
    { upsert: true }
  );
}

async function seedInquiries(client, dbName) {
  const db = client.db(dbName);
  const collection = db.collection("investor_inquiries");
  const existing = await collection.countDocuments({ _seedDemo: true });
  if (existing > 0) {
    console.log(
      `Skipping inquiries: ${existing} demo inquiries already present.`
    );
    return;
  }
  const now = Date.now();
  const docs = DEMO_INQUIRIES.map((inquiry, index) => ({
    ...inquiry,
    email: inquiry.email.toLowerCase().trim(),
    createdAt: new Date(now - index * 1000 * 60 * 60 * 24),
    _seedDemo: true,
  }));
  await collection.insertMany(docs);
  console.log(`Inserted ${docs.length} demo investor inquiries.`);
}

async function main() {
  const client = new MongoClient(uri);
  await client.connect();
  try {
    await upsertUser(client, dbName, DEMO_PARTNER);
    console.log(`Upserted partner account: ${DEMO_PARTNER.email}`);
    await upsertUser(client, dbName, DEMO_ADMIN);
    console.log(`Upserted admin account: ${DEMO_ADMIN.email}`);
    await seedInquiries(client, dbName);
    await seedShipments(client, dbName);
    await seedKpis(client, dbName);
    await seedSmeLogs(client, dbName);
    await seedDisbursements(client, dbName);
  } finally {
    await client.close();
  }

  console.log("\nDemo credentials (portal login at /investors/portal):");
  console.log(`  Partner — email: ${DEMO_PARTNER.email}  password: ${DEMO_PARTNER.password}`);
  console.log(`  Admin   — email: ${DEMO_ADMIN.email}  password: ${DEMO_ADMIN.password}`);
  console.log("\nAdmin dashboard: /investors/admin");
}

main().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
