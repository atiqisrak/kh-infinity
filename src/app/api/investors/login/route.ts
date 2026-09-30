import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import {
  InvestorUser,
  SESSION_COOKIE,
  createSession,
  verifyPassword,
} from "@/lib/investor-auth";

const GENERIC_ERROR = "Invalid email or password.";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password || typeof email !== "string" || typeof password !== "string") {
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
    }

    const db = await getDb();
    const user = await db
      .collection<InvestorUser>("investor_users")
      .findOne({ email: email.toLowerCase().trim(), active: true });

    if (!user || !verifyPassword(password, user.passwordHash)) {
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 401 });
    }

    const { token, expiresAt } = await createSession(user._id);

    const response = NextResponse.json({
      success: true,
      name: user.name,
    });
    response.cookies.set(SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: expiresAt,
    });
    return response;
  } catch (error) {
    console.error("Investor login error:", error);
    return NextResponse.json(
      { error: "Unable to sign in right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
