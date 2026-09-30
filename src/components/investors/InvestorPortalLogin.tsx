"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function InvestorPortalLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/investors/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Invalid email or password.");
      }

      router.push("/investors/portal/dashboard");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Invalid email or password."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <form className="space-y-5" onSubmit={handleSubmit}>
        {error && (
          <div className="bg-red-50 border border-red-500 text-red-700 px-4 py-3 rounded-lg text-sm">
            <div className="flex items-center">
              <i className="fas fa-exclamation-circle mr-2"></i>
              {error}
            </div>
          </div>
        )}
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="portal-username">
            Username / Email
          </label>
          <input
            type="email"
            id="portal-username"
            name="username"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="portal-password">
            Password
          </label>
          <input
            type="password"
            id="portal-password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <i className="fas fa-spinner fa-spin mr-2"></i>
              Signing in...
            </span>
          ) : (
            "Login Securely"
          )}
        </button>
        <p className="text-sm text-gray-500 text-center">
          Need access?{" "}
          <Link
            href="/investors/onboarding"
            className="text-orange-600 hover:text-orange-700 font-semibold"
          >
            Complete onboarding
          </Link>{" "}
          or contact your KHI Relationship Manager at{" "}
          <a
            href="mailto:info@khi.com.bd"
            className="text-orange-600 hover:text-orange-700 font-semibold"
          >
            info@khi.com.bd
          </a>
          .
        </p>
      </form>
    </div>
  );
}
