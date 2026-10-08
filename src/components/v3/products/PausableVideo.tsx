"use client";

import { useLayoutEffect, useRef, type VideoHTMLAttributes } from "react";

// ─── PausableVideo ────────────────────────────────────────────────────────
// A <video> that pauses when its page is hidden. With cacheComponents, Next.js
// keeps the previous page mounted inside a hidden <Activity> after navigation,
// and a hidden <video> keeps playing its sound. React runs effect cleanups when
// the page is hidden, so pause there.

export default function PausableVideo(props: VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    return () => el?.pause();
  }, []);

  return <video ref={ref} {...props} />;
}
