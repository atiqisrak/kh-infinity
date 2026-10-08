"use client";

import { useLayoutEffect, useRef, useState } from "react";

// ─── YouTubeVideo ─────────────────────────────────────────────────────────
// Click-to-play YouTube embed. Shows the video's thumbnail until clicked, so
// no YouTube script, cookie or iframe loads with the page. Plays from the
// privacy-enhanced youtube-nocookie.com domain.
//
// With cacheComponents, Next.js keeps the previous page mounted inside a hidden
// <Activity> after navigation, so a playing iframe would keep its sound going.
// React runs effect cleanups when the page is hidden: blank the iframe there and
// fall back to the thumbnail.

export default function YouTubeVideo({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);

  useLayoutEffect(() => {
    if (!playing) return;
    const el = frame.current;
    return () => {
      if (el) el.src = "about:blank";
      setPlaying(false);
    };
  }, [playing]);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[#06131d]">
      {playing ? (
        <iframe
          ref={frame}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#fa6a25]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-[#fa6a25] text-white shadow-xl transition group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
              </svg>
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-10 text-left text-sm font-medium text-white">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}
