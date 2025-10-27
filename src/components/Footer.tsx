import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/brand/official_logo_lite.svg"
              alt="K.H. Infinity"
              width={120}
              height={48}
              className="h-12 mb-6"
            />
            <p className="text-gray-400 mb-6">
              Your trusted partner in global trade, connecting businesses across
              borders with quality products and reliable services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/khinfinity"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://linkedin.com/company/khinfinity"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com/khinfinity"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/awards"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Awards
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products/sunflower-oil"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Sunflower Oil
                </Link>
              </li>
              <li>
                <Link
                  href="/products/milk-powder"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Milk Powder
                </Link>
              </li>
              <li>
                <Link
                  href="/products/pulses"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Pulses
                </Link>
              </li>
              <li>
                <Link
                  href="/products/sugar"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Sugar
                </Link>
              </li>
              <li>
                <Link
                  href="/products/handicrafts"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Handicrafts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-orange-500 mt-1 mr-3"></i>
                <span className="text-gray-400">
                  Kader Tropical Height, Shop- G5,
                  <br />
                  10 Hatkhola Road, Tikatuli,
                  <br />
                  Wari, Dhaka 1203, Bangladesh
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-orange-500 mr-3"></i>
                <a
                  href="tel:+8801400893882"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  +880 1400893882
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-orange-500 mr-3"></i>
                <a
                  href="mailto:info@khi.com.bd"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  info@khi.com.bd
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} K.H. Infinity. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
              >
                Privacy Statement
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/equal-opportunity"
                className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
              >
                Equal Opportunity Employer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
