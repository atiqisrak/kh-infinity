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
} as const;

export type IconName = keyof typeof paths;

export default function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d={paths[name]} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
