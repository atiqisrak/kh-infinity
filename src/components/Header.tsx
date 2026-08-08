"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import NavDropdown from "@/components/navigation/NavDropdown";
import MobileNavGroup from "@/components/navigation/MobileNavGroup";
import FlaticonIcon from "@/components/navigation/FlaticonIcon";
import {
  getProductsNavGroup,
  getServicesNavGroup,
  getResourcesNavGroup,
  getCompanyNavGroup,
  contactPhone,
  contactEmail,
} from "@/lib/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navGroups = useMemo(
    () => [
      getProductsNavGroup(),
      getServicesNavGroup(),
      getResourcesNavGroup(),
      getCompanyNavGroup(),
    ],
    []
  );

  const closeMobile = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <nav
            className="flex h-16 items-center justify-between gap-4"
            aria-label="Main navigation"
          >
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/images/brand/official_logo.svg"
                alt="K.H. Infinity"
                width={120}
                height={48}
                className="h-9 w-auto lg:h-11 transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop — lg+ only to avoid cramped tablet layout */}
            <ul className="hidden lg:flex flex-1 items-center justify-center gap-x-2 xl:gap-x-4">
              {navGroups.map((group) => (
                <NavDropdown key={group.id} group={group} />
              ))}
            </ul>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/quote"
                className="hidden sm:inline-flex items-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
              >
                Request Quote
              </Link>

              <button
                type="button"
                className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Toggle menu</span>
                <FlaticonIcon
                  name={isMobileMenuOpen ? "cross-small" : "menu-burger"}
                  className="text-lg"
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity lg:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobile}
        aria-hidden
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5">
          <span className="text-sm font-semibold text-gray-900">Menu</span>
          <button
            type="button"
            onClick={closeMobile}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
            aria-label="Close menu"
          >
            <FlaticonIcon name="cross-small" className="text-lg" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-1">
            {navGroups.map((group) => (
              <MobileNavGroup key={group.id} group={group} onNavigate={closeMobile} />
            ))}
          </ul>

          <div className="mt-6 border-t border-gray-100 pt-6 space-y-3">
            <a
              href={`tel:${contactPhone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-orange-600"
            >
              <FlaticonIcon name="phone-call" className="text-base text-orange-500" />
              {contactPhone}
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-orange-600"
            >
              <FlaticonIcon name="envelope" className="text-base text-orange-500" />
              {contactEmail}
            </a>
          </div>
        </nav>

        <div className="border-t border-gray-100 p-4">
          <Link
            href="/quote"
            onClick={closeMobile}
            className="block w-full rounded-lg bg-orange-600 py-3 text-center text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
          >
            Request Quote
          </Link>
        </div>
      </aside>
    </>
  );
}
