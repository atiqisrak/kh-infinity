import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { hashPassword, InvestorUser, InvestorRole } from "@/lib/investor-auth";

/**
 * Internal endpoint for the KHI team to create investor portal accounts.
 * There is no public self-registration — accounts are provisioned directly
 * after onboarding/KYC review, matching the portal's stated access model.
 *
 * Call with: POST /api/investors/provision
 * Header:    x-admin-secret: <INVESTOR_ADMIN_SECRET>
 * Body:      { "email": "...", "password": "...", "name": "...", "partnerType": "Individual" | "Corporate", "role"?: "partner" | "admin" }
 */
export async function POST(request: NextRequest) {
  const adminSecret = process.env.INVESTOR_ADMIN_SECRET;
  const providedSecret = request.headers.get("x-admin-secret");

  if (!adminSecret || !providedSecret || providedSecret !== adminSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { email, password, name, partnerType, role } = await request.json();

    if (
      !email ||
      !password ||
      !name ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      typeof name !== "string"
    ) {
      return NextResponse.json(
        { error: "email, password, and name are required" },
        { status: 400 }
      );
    }

    if (password.length < 10) {
      return NextResponse.json(
        { error: "password must be at least 10 characters" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const db = await getDb();

    const existing = await db
      .collection("investor_users")
      .findOne({ email: normalizedEmail });
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists" },
        { status: 409 }
      );
    }

    const resolvedRole: InvestorRole = role === "admin" ? "admin" : "partner";

    await db.collection<InvestorUser>("investor_users").insertOne({
      _id: normalizedEmail,
      email: normalizedEmail,
      name,
      partnerType: partnerType === "Corporate" ? "Corporate" : "Individual",
      passwordHash: hashPassword(password),
      active: true,
      role: resolvedRole,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Investor provisioning error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
