"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

type Params = Record<string, string | number | boolean | undefined>;

/** Fires `event` once when this mounts, e.g. product_view on a product page */
export function TrackView({ event, params }: { event: string; params: Params }) {
  const key = JSON.stringify(params);
  useEffect(() => {
    track(event, JSON.parse(key));
  }, [event, key]);
  return null;
}

/**
 * Place at the end of an article: fires `event` once when the reader scrolls
 * to it, e.g. blog_read_complete. Checks position on scroll rather than using
 * an IntersectionObserver, which misses a marker that a fast scroll jumps past.
 */
export function ReadTracker({ event, params }: { event: string; params: Params }) {
  const ref = useRef<HTMLDivElement>(null);
  const key = JSON.stringify(params);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const check = () => {
      frame = 0;
      if (el.getBoundingClientRect().top > window.innerHeight) return;
      track(event, JSON.parse(key));
      window.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [event, key]);
  return <div ref={ref} aria-hidden="true" />;
}
