// KH-branded 20ft container hanging from a crane hook — the v3 signature motif.
// Pure SVG so it stays crisp at any size and needs no photo.

const RIB_COUNT = 24;

export default function HangingContainer({ className }: { className?: string }) {
  const ribs = Array.from({ length: RIB_COUNT }, (_, i) => 98 + i * 19);

  return (
    <svg
      viewBox="0 -240 640 840"
      className={className}
      role="img"
      aria-label="An orange K.H. Infinity shipping container lifted by a crane hook"
    >
      <defs>
        <pattern
          id="khc-hazard"
          width="14"
          height="14"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect width="14" height="14" fill="#1b1f24" />
          <rect width="7" height="14" fill="#f5c518" />
        </pattern>
        <linearGradient id="khc-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.22" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id="khc-end" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#b8440f" />
          <stop offset="1" stopColor="#8f330b" />
        </linearGradient>
        <linearGradient id="khc-cable" x1="0" y1="-240" x2="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1b1f24" stopOpacity="0" />
          <stop offset="1" stopColor="#1b1f24" />
        </linearGradient>
      </defs>

      {/* Crane cable: fades out upward so it reads as running off-frame */}
      <path d="M314 -240 V0 M326 -240 V0" stroke="url(#khc-cable)" strokeWidth="3" />
      <line x1="314" y1="0" x2="314" y2="146" stroke="#1b1f24" strokeWidth="3" />
      <line x1="326" y1="0" x2="326" y2="146" stroke="#1b1f24" strokeWidth="3" />

      {/* Hook block */}
      <rect x="288" y="140" width="64" height="66" rx="9" fill="url(#khc-hazard)" />
      <rect x="288" y="140" width="64" height="66" rx="9" fill="none" stroke="#1b1f24" strokeWidth="4" />
      <circle cx="320" cy="217" r="11" fill="none" stroke="#1b1f24" strokeWidth="6" />

      {/* Slings: back pair lighter, front pair darker */}
      <path d="M320 226 L196 330 M320 226 L444 330" stroke="#4a525c" strokeWidth="2" />
      <path d="M320 226 L92 330 M320 226 L548 330" stroke="#1f252c" strokeWidth="3" />

      {/* Container side */}
      <rect x="80" y="330" width="480" height="206" rx="3" fill="#d9531a" />
      <rect x="92" y="344" width="456" height="178" fill="#fa6a25" />
      {ribs.map((x) => (
        <g key={x}>
          <rect x={x} y="344" width="5" height="178" fill="#ff8f57" opacity="0.5" />
          <rect x={x + 11} y="344" width="5" height="178" fill="#c24a14" opacity="0.55" />
        </g>
      ))}
      <rect x="80" y="330" width="480" height="14" fill="#b8440f" />
      <rect x="80" y="522" width="480" height="14" fill="#a63d0d" />
      <rect x="548" y="344" width="12" height="178" fill="url(#khc-end)" />
      <rect x="80" y="344" width="12" height="178" fill="#c24a14" />

      {/* Corner castings */}
      {[
        [78, 326],
        [542, 326],
        [78, 518],
        [542, 518],
      ].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="20" height="20" rx="2" fill="#7a2b09" />
      ))}

      {/* Livery */}
      <path d="M430 344 H548 V470 L498 522 H430 Z" fill="#fff" opacity="0.92" />
      <path
        d="M462 392 h40 l-14 -16 h16 l22 26 -22 26 h-16 l14 -16 h-40 z"
        fill="#fa6a25"
      />
      <text
        x="118"
        y="432"
        fill="#fff"
        style={{ fontFamily: "var(--font-display), Impact, sans-serif", fontSize: 56, letterSpacing: "1px" }}
      >
        K.H. INFINITY
      </text>
      <text
        x="121"
        y="466"
        fill="#fff"
        opacity="0.9"
        style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "3px" }}
      >
        IMPORT · EXPORT · DHAKA
      </text>
      <text
        x="121"
        y="500"
        fill="#fff"
        opacity="0.65"
        style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, letterSpacing: "2px" }}
      >
        KHIU 201 8 · 22G1 · MAX GROSS 30,480 KG
      </text>

      <rect x="80" y="330" width="480" height="206" fill="url(#khc-shade)" />
    </svg>
  );
}
