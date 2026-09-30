import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "khi_investors";

let clientPromise: Promise<MongoClient> | null = null;
let indexesReady: Promise<void> | null = null;

function getClientPromise(): Promise<MongoClient> {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (clientPromise) return clientPromise;

  // Reuse the client across hot reloads in dev so we don't exhaust connections.
  const globalWithMongo = global as typeof globalThis & {
    _khiMongoClientPromise?: Promise<MongoClient>;
  };

  if (process.env.NODE_ENV === "development") {
    if (!globalWithMongo._khiMongoClientPromise) {
      globalWithMongo._khiMongoClientPromise = new MongoClient(uri).connect();
    }
    clientPromise = globalWithMongo._khiMongoClientPromise;
  } else {
    clientPromise = new MongoClient(uri).connect();
  }

  return clientPromise;
}

async function ensureIndexes(db: Db): Promise<void> {
  await Promise.all([
    db
      .collection("investor_users")
      .createIndex({ email: 1 }, { unique: true }),
    db
      .collection("investor_sessions")
      .createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
    db.collection("investor_inquiries").createIndex({ createdAt: -1 }),
    db.collection("investor_shipments").createIndex({ updatedAt: -1 }),
    db.collection("investor_kpis").createIndex({ month: -1 }, { unique: true }),
    db.collection("investor_sme_logs").createIndex({ date: -1 }),
    db
      .collection("investor_disbursements")
      .createIndex({ investorEmail: 1, disbursedAt: -1 }),
  ]);
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  const db = client.db(dbName);

  if (!indexesReady) {
    indexesReady = ensureIndexes(db).catch((err) => {
      indexesReady = null;
      throw err;
    });
  }
  await indexesReady;

  return db;
}
