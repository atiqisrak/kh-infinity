"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Ahmed Hossain",
    position: "Procurement Director, Premium Foods International",
    quote:
      "K.H. Infinity's expertise in sourcing quality sunflower oil from global markets has been game-changing for our business. Their dedication to quality and timely delivery ensures we never run out of stock.",
  },
  {
    name: "Fatima Rahman",
    position: "Operations Manager, Dairy Solutions Ltd",
    quote:
      "We've been importing milk powder through K.H. Infinity for over three years. Their thorough quality checks and efficient logistics make them our trusted partner in international trade.",
  },
  {
    name: "Karim Uddin",
    position: "Export Manager, Fresh Produce Corp",
    quote:
      "Exporting premium Bangladeshi potatoes has become effortless with K.H. Infinity. Their understanding of export regulations and commitment to maintaining product quality is outstanding.",
  },
  {
    name: "Ayesha Begum",
    position: "Supply Chain Director, Modern Retail Group",
    quote:
      "K.H. Infinity handles our complex import requirements with remarkable precision. From customs clearance to warehouse delivery, they make international trade look easy.",
  },
  {
    name: "Tariq Islam",
    position: "Business Owner, Healthy Living Store",
    quote:
      "As a small business owner, I was worried about importing goods internationally. K.H. Infinity guided me through every step and made the process so simple. Highly professional team!",
  },
  {
    name: "Rashida Khan",
    position: "Quality Assurance Lead, Food Industries Ltd",
    quote:
      "The quality of products we receive through K.H. Infinity consistently exceeds our expectations. Their vetting process ensures we get only the best commodities in the market.",
  },
  {
    name: "Hasan Ali",
    position: "Logistics Coordinator, Global Trade Partners",
    quote:
      "K.H. Infinity's network of international suppliers is impressive. They always find the best prices without compromising on quality - exactly what you need in import-export business.",
  },
  {
    name: "Meher Malik",
    position: "CEO, Organic Harvest Bangladesh",
    quote:
      "Exporting our organic handicrafts through K.H. Infinity has opened up new markets for us. Their professional approach and attention to product packaging ensures our goods reach customers in perfect condition.",
  },
  {
    name: "Zubair Ahmed",
    position: "Procurement Head, Mega Trading Co",
    quote:
      "Dealing with multiple suppliers used to be a nightmare until we partnered with K.H. Infinity. They now handle all our imports, and we've reduced our procurement time by 40%. Excellent service!",
  },
  {
    name: "Sabrina Chowdhury",
    position: "Operations Director, Consumer Products Ltd",
    quote:
      "K.H. Infinity's documentation team is incredibly thorough. Customs clearance happens smoothly because they ensure every document is perfect. This reliability saves us both time and money.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isMobile, setIsMobile] = useState(false);
  const maxSlides = testimonials.length;

  // Create enough duplicates for smooth infinite scrolling
  const displayTestimonials = Array.from(
    { length: maxSlides * 3 },
    (_, i) => testimonials[i % maxSlides]
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // Continue sliding through the middle set (maxSlides items)
        if (next >= maxSlides * 2) {
          // Reset to the start of the middle set (maxSlides position)
          return maxSlides;
        }
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [maxSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(maxSlides + index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next >= maxSlides * 2) {
        return maxSlides;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevPos = prev - 1;
      if (prevPos < maxSlides) {
        return maxSlides * 2 - 1;
      }
      return prevPos;
    });
  };

  const translatePercent = isMobile ? 100 : 50;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-medium tracking-wider uppercase text-sm block mb-4">
            What Our Clients Say
          </span>
          <h2 className="text-4xl font-bold text-gray-800">
            Client Testimonials
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-lg px-2 md:px-4">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * ${translatePercent}%))`,
              }}
            >
              {displayTestimonials.slice(maxSlides).map((testimonial, idx) => (
                <div
                  key={`${testimonial.name}-${idx}`}
                  className="flex-shrink-0 w-full md:w-1/2 px-2"
                >
                  <div className="bg-gray-50 p-4 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all h-full">
                    <div className="flex items-start mb-3 md:mb-4">
                      <div className="text-orange-500 text-2xl md:text-4xl mr-2 md:mr-3 flex-shrink-0">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-sm md:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-xs md:text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs md:text-base leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden absolute left-1 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-4 bg-white p-1.5 md:p-2 rounded-full shadow-lg hover:shadow-xl transition-all text-gray-600 hover:text-orange-500 z-10"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="hidden absolute right-1 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-4 bg-white p-1.5 md:p-2 rounded-full shadow-lg hover:shadow-xl transition-all text-gray-600 hover:text-orange-500 z-10"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 gap-1.5 md:gap-2">
            {testimonials.map((_, index) => {
              const position = currentIndex - maxSlides;
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 md:h-2.5 rounded-full transition-all ${
                    position === index
                      ? "bg-orange-500 w-6 md:w-8"
                      : "bg-gray-300 hover:bg-orange-300 w-2 md:w-2.5"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
