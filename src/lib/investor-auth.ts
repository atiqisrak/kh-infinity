import { randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { getDb } from "./mongodb";

export const SESSION_COOKIE = "khi_investor_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

export type InvestorRole = "partner" | "admin";

export interface InvestorUser {
  _id: string;
  email: string;
  name: string;
  partnerType: string;
  passwordHash: string;
  active: boolean;
  role: InvestorRole;
  createdAt: Date;
}

interface InvestorSession {
  _id: string;
  userId: string;
  createdAt: Date;
  expiresAt: Date;
}

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const hashBuffer = Buffer.from(hash, "hex");
  const suppliedBuffer = scryptSync(password, salt, 64);
  return (
    hashBuffer.length === suppliedBuffer.length &&
    timingSafeEqual(hashBuffer, suppliedBuffer)
  );
}

export async function createSession(userId: string) {
  const db = await getDb();
  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
  await db.collection<InvestorSession>("investor_sessions").insertOne({
    _id: token,
    userId,
    createdAt: new Date(),
    expiresAt,
  });
  return { token, expiresAt };
}

export async function destroySession(token: string) {
  const db = await getDb();
  await db
    .collection<InvestorSession>("investor_sessions")
    .deleteOne({ _id: token });
}

export interface InvestorSessionInfo {
  email: string;
  name: string;
  partnerType: string;
  role: InvestorRole;
}

export async function getInvestorSession(): Promise<InvestorSessionInfo | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const db = await getDb();
  const session = await db
    .collection<InvestorSession>("investor_sessions")
    .findOne({ _id: token, expiresAt: { $gt: new Date() } });
  if (!session) return null;

  const user = await db
    .collection<InvestorUser>("investor_users")
    .findOne({ _id: session.userId, active: true });
  if (!user) return null;

  return {
    email: user.email,
    name: user.name,
    partnerType: user.partnerType,
    role: user.role ?? "partner",
  };
}
