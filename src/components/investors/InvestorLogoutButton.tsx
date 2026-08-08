"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InvestorLogoutButton() {
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleLogout = async () => {
    setIsSigningOut(true);
    try {
      await fetch("/api/investors/logout", { method: "POST" });
    } finally {
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
