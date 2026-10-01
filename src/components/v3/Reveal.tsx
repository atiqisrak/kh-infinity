"use client";

import { createElement, useEffect, useState } from "react";

// Sets data-inview on its element the first time it scrolls into view. The motion
// itself lives in v3.module.css under `[data-inview]`, and only runs for
// users without prefers-reduced-motion — otherwise everything renders settled.

type Tag = "div" | "ul" | "ol" | "section";

export default function Reveal({
  as = "div",
  className,
  threshold = 0.3,
  children,
  ...rest
}: {
  as?: Tag;
  className?: string;
  threshold?: number;
  children: React.ReactNode;
} & React.AriaAttributes) {
  // Callback ref held in state (not a ref object) so the element is only read in the effect
  const [el, setEl] = useState<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [el, threshold]);

  return createElement(as, { ref: setEl, className, "data-inview": inView || undefined, ...rest }, children);
}
