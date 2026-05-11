"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="bg-white fixed w-full top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex justify-between items-center py-3 md:py-2">
            <Link href="/" className="flex items-center z-50">
              <Image
                src="/images/brand/official_logo.svg"
                alt="K.H. Infinity"
                width={120}
                height={48}
                className="h-8 md:h-12 w-auto transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6 lg:space-x-8 items-center">
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/blog"
                  className="text-gray-700 font-medium hover:text-orange-500 transition-colors flex items-center"
                >
                  Resources
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/news"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    News
                  </Link>
                  <Link
                    href="/awards"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    Awards
                  </Link>
                  <Link
                    href="/events"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    Events
                  </Link>
                </div>
              </li>
              <li className="relative group">
                <Link
                  href="/products"
                  className="text-gray-700 font-medium hover:text-orange-500 transition-colors flex items-center"
                >
                  Products
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link
                    href="/products/sunflower-oil"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    Sunflower Oil
                  </Link>
                  <Link
                    href="/products/milk-powder"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    Milk Powder
                  </Link>
                  <Link
                    href="/products/pulses"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    Pulses
                  </Link>
                  <Link
                    href="/products/sugar"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    Sugar
                  </Link>
                  <Link
                    href="/products/soyabean-oil"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    Soyabean Oil
                  </Link>
                  <Link
                    href="/products/tarpaulin"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    Tarpaulin
                  </Link>
                  <Link
                    href="/products/potato"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    Potato
                  </Link>
                  <Link
                    href="/potato-export"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    Potato export (Gulf)
                  </Link>
                  <Link
                    href="/products/handicrafts"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    Handicrafts
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/industries"
                  className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/trade-routes"
                  className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
                >
                  Trade Routes
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>

            {/* Desktop CTA */}
            <Link
              href="/quote"
              className="hidden md:block bg-orange-600 text-white px-6 py-2.5 rounded-lg hover:bg-orange-700 transition-colors font-medium"
            >
              Request Quote
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden relative z-50 p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="flex flex-col w-6 h-6 justify-center space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-gray-700 transition-all ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-700 transition-all ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-700 transition-all ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden z-40 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 pt-20">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 p-2"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-6">
              <li>
                <Link
                  href="/about"
                  className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <ul className="ml-4 space-y-2 mt-1">
                  <li>
                    <Link
                      href="/potato-export"
                      className="block text-base text-gray-600 hover:text-orange-500 transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Potato export (Gulf)
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/trade-routes"
                  className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Trade Routes
                </Link>
              </li>
              <li>
                <div className="text-lg font-medium text-gray-900 py-2">
                  Resources
                </div>
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      href="/blog"
                      className="block text-base text-gray-600 hover:text-orange-500 transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news"
                      className="block text-base text-gray-600 hover:text-orange-500 transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awards"
                      className="block text-base text-gray-600 hover:text-orange-500 transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Awards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/events"
                      className="block text-base text-gray-600 hover:text-orange-500 transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Events
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                Contact Info
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+8801400893882"
                  className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                >
                  <i className="fas fa-phone w-5 mr-3 text-orange-500"></i>
                  <span>+880 1400893882</span>
                </a>
                <a
                  href="mailto:info@khi.com.bd"
                  className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                >
                  <i className="fas fa-envelope w-5 mr-3 text-orange-500"></i>
                  <span>info@khi.com.bd</span>
                </a>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/khinfinity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors text-2xl"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://linkedin.com/company/khinfinity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors text-2xl"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://instagram.com/khinfinity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors text-2xl"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </nav>

          <Link
            href="/quote"
            className="block w-full bg-orange-600 text-white text-center py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium mt-6"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request Quote
          </Link>
        </div>
      </div>
    </>
  );
}
