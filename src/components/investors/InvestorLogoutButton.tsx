"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";
import { capture, identifyLead } from "@/lib/analytics";
import type { InvestorSessionInfo } from "@/lib/investor-auth";

/** Also identifies the signed-in investor in PostHog, since it renders on every portal page */
export default function InvestorLogoutButton({ user }: { user: InvestorSessionInfo }) {
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const { email, name, partnerType, role } = user;

  useEffect(() => {
    identifyLead(email, { name, partner_type: partnerType, investor_role: role });
  }, [email, name, partnerType, role]);

  const handleLogout = async () => {
    setIsSigningOut(true);
    try {
      await fetch("/api/investors/logout", { method: "POST" });
    } finally {
      capture("investor_portal_logout");
      posthog.reset();
      router.push("/investors/portal");
      router.refresh();
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isSigningOut}
      className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-sm disabled:opacity-50"
    >
      <i className="fas fa-arrow-right-from-bracket"></i>
      {isSigningOut ? "Signing out..." : "Sign Out"}
    </button>
  );
}
