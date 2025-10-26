"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  { id: 1, image: "/images/cover/kh1.webp" },
  { id: 2, image: "/images/cover/kh2.webp" },
  { id: 3, image: "/images/cover/kh3.webp" },
  { id: 4, image: "/images/cover/kh4.webp" },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero min-h-screen flex items-center relative overflow-hidden"
      aria-label="Hero Section"
    >
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 text-white animate-fade-in">
            Global Import Export Solutions: Bridging Markets with
            <span className="text-orange-500 animate-text-highlight">
              {" "}
              Quality Products
            </span>
          </h1>
          <p className="text-xl text-gray-100 mb-8 animate-slide-up">
            Your trusted partner in international trade and logistics. We
            specialize in import-export services, customs clearance, and global
            supply chain solutions, connecting Bangladesh with worldwide
            markets.
          </p>
          <div className="flex gap-4 animate-fade-in-up">
            <Link
              href="#products"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-all hover:scale-105"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
}
