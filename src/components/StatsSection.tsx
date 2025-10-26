"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 5, label: "Years Experience", suffix: "+" },
  { value: 10, label: "Global Partners", suffix: "+" },
  { value: 70, label: "Successful Deliveries", suffix: "+" },
  { value: 15, label: "Countries Served", suffix: "+" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step < steps) {
        setCount(Math.min(Math.floor(current), target));
      } else {
        setCount(target);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, hasStarted]);

  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-label="Company Statistics"
    >
      <div ref={sectionRef} className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2 min-h-[48px] flex items-center justify-center">
                {isVisible ? (
                  <Counter target={stat.value} suffix={stat.suffix} />
                ) : (
                  <>0{stat.suffix}</>
                )}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
