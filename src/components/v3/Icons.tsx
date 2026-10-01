// Line icons for the v3 landing concept (24px grid, 1.6 stroke, currentColor).

const paths = {
  arrow: "M7 17 17 7M9 7h8v8",
  receipt: "M6 3h12v18l-3-2-3 2-3-2-3 2V3Zm3 5h6M9 12h6M9 16h3",
  stamp: "M9 4h6l-1 7h4a2 2 0 0 1 2 2v3H4v-3a2 2 0 0 1 2-2h4L9 4Zm-4 16h14",
  shield: "M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4",
  globe: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-9 9h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z",
  basket: "M4 9h16l-1.5 10a2 2 0 0 1-2 1.7h-9a2 2 0 0 1-2-1.7L4 9Zm4 0 3-5m5 5-3-5M9 13v4m3-4v4m3-4v4",
  store: "M4 9 5.5 4h13L20 9M4 9v11h16V9M4 9c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 2 3s2-1.3 2-3c0 1.7 1.3 3 3 3s3-1.3 3-3m-10 11v-5h4v5",
  chef: "M7 13.5A4 4 0 0 1 8 5.6a4 4 0 0 1 8 0 4 4 0 0 1 1 7.9V20H7v-6.5ZM7 17h10",
  factory: "M3 20V10l5 3V10l5 3V6l4-2v16M3 20h18M7 16h2m3 0h2m3 0h2",
  sprout: "M12 20v-8m0 0c0-3.3-2.7-6-6-6H4v1c0 3.3 2.7 5 6 5h2Zm0 0c0-2.8 2.2-5 5-5h3v1c0 2.8-2.2 4-5 4h-3M8 20h8",
  plus: "M12 5v14M5 12h14",
  check: "m5 12.5 4.5 4.5L19 7.5",
  box: "M20 7.5 12 3 4 7.5m16 0-8 4.5m8-4.5v9L12 21m0-9L4 7.5M12 12v9M4 7.5v9L12 21",
  spark: "M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6",
  ship: "M3 15h18l-2.5 4.5a2 2 0 0 1-1.8 1H7.3a2 2 0 0 1-1.8-1L3 15Zm3-1V9h12v5M9 9V5h6v4m-3-6v2",
  truck: "M2 6h11v10H2V6Zm11 4h4.5l3.5 3.5V16h-8m-9 0a2 2 0 1 0 4 0m9 0a2 2 0 1 0 4 0",
  plane: "M10.5 3.5 12 3l1.5.5V9l7 4v2l-7-2v4.5l2 1.5v1.5L12 20l-3.5.5V19l2-1.5V13l-7 2v-2l7-4V3.5Z",
  warehouse: "M3 20V9l9-5 9 5v11M7 20v-8h10v8M7 15h10",
  users: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6 9c0-3.3 2.7-6 6-6s6 2.7 6 6m1-9a3 3 0 1 0 0-6m2 15c0-2.6-1.4-4.8-3.5-5.6",
  handshake: "m11 7-3-3-5 5 3 3m5-5 2-2 3 1 5 5-4 4m-6-8-4 4m10 4-3 3-1.5-1.5M16 16l-3 3-1.5-1.5M13 13l-3 3-1.5-1.5",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  eye: "M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Zm9.5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  phone: "M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z",
  mail: "M3 6h18v12H3V6Zm0 0 9 7 9-7",
  pin: "M12 21s7-6.1 7-11.5a7 7 0 1 0-14 0C5 14.9 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v4l3 2",
  doc: "M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h6M10 17h6",
  chart: "M4 20V4m0 16h16M8 16v-5m4 5V8m4 8v-3m4 3V6",
  leaf: "M5 19c0-8 5-14 15-14 0 10-6 15-14 15m-1-1 8-8",
  award: "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-3.5-1-1.5 7 5-2.5 5 2.5-1.5-7",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 5 5",
  calculator: "M6 3h12v18H6V3Zm3 3h6v3H9V6Zm0 7h.01M12 13h.01M15 13h.01M9 17h.01M12 17h.01M15 17h.01",
  scale: "M12 4v16m-7 0h14M5 8h14M5 8l-2.5 6a3 3 0 0 0 5 0L5 8Zm14 0-2.5 6a3 3 0 0 0 5 0L19 8Z",
  clipboard:"M9 4h6v3H9V4Zm0 1.5H6.5A1.5 1.5 0 0 0 5 7v12.5A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V7a1.5 1.5 0 0 0-1.5-1.5H15M9 12h6M9 16h4",
} as const;

export type IconName = keyof typeof paths;

export default function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d={paths[name]} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
