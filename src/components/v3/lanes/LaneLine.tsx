import Flag from "../Flag";
import { ShipIcon } from "../ui";
import s from "../v3.module.css";
import type { LaneEnd } from "./lanes";

// A lane drawn as "CN ——⛴—— BD": the homepage "Lanes we run" motif. The ship
// sails once an ancestor <Reveal> marks itself in view (v3.module.css .ship /
// .wake); with reduced motion it rests at the destination. `delay` staggers
// several lanes in one Reveal.

const SIZES = {
  sm: { code: "text-3xl sm:text-4xl", gap: "gap-3 sm:gap-4", flag: "h-3 w-[18px]", scale: "" },
  lg: {
    code: "text-[clamp(3.5rem,11vw,8.5rem)]",
    gap: "gap-4 sm:gap-8",
    flag: "h-4 w-6 sm:h-5 sm:w-[30px]",
    scale: "sm:scale-150",
  },
} as const;

export default function LaneLine({
  from,
  to,
  size = "sm",
  delay = 0,
  showCities = true,
  className = "",
}: {
  from: LaneEnd;
  to: LaneEnd;
  size?: keyof typeof SIZES;
  delay?: number;
  showCities?: boolean;
  className?: string;
}) {
  const z = SIZES[size];
  return (
    <div className={className}>
      <div className={`flex items-center ${z.gap}`}>
        <span className={`${s.display} ${s.displayTight} ${z.code}`}>{from.code}</span>
        <span
          aria-hidden="true"
          className={`relative flex-1 bg-white/20 ${size === "lg" ? "h-[2px]" : "h-px"}`}
          style={{ "--d": `${delay}ms` } as React.CSSProperties}
        >
          <span className={`${s.wake} absolute inset-y-0 left-0 bg-[#fa6a25]`} />
          <span className="absolute -top-[5px] right-0 h-2.5 w-2.5 rounded-full border-2 border-[#fa6a25] bg-[#0b2c3d]" />
          <span className={`${s.ship} absolute -top-[13px] w-[30px]`}>
            <span className={`block origin-bottom ${z.scale}`}>
              <span className={`${s.shipBob} block`}>
                <ShipIcon />
              </span>
            </span>
          </span>
        </span>
        <span className="sr-only">to</span>
        <span className={`${s.display} ${s.displayTight} ${z.code} text-[#fa6a25]`}>{to.code}</span>
      </div>
      {showCities && (
        <div className={`flex justify-between text-white/60 ${size === "lg" ? "mt-4 text-sm" : "mt-2 text-xs"}`}>
          <span className="inline-flex items-center gap-2">
            <Flag code={from.code} className={z.flag} />
            {from.city}
          </span>
          <span className="inline-flex items-center gap-2">
            {to.city}
            <Flag code={to.code} className={z.flag} />
          </span>
        </div>
      )}
    </div>
  );
}
