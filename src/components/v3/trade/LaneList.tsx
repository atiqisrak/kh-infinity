import Link from "next/link";
import Flag, { type FlagCode } from "../Flag";
import Reveal from "../Reveal";
import { ShipIcon, focusRing } from "../ui";
import s from "../v3.module.css";

// Trade-lane cards (the homepage "Lanes we run" pattern): a ship sails each lane
// once the list is on screen; static under reduced motion. Use on dark sections.

export interface Lane {
  from: { code: string; flag?: FlagCode; city: string };
  to: { code: string; flag?: FlagCode; city: string };
  label: string;
  note: string;
  href: string;
}

export default function LaneList({ lanes }: { lanes: Lane[] }) {
  return (
    <Reveal as="ul" className="grid gap-4">
      {lanes.map((r, i) => (
        <li key={r.href}>
          <Link
            href={r.href}
            className={`group grid items-center gap-4 rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 transition hover:bg-white/[0.09] hover:ring-[#fa6a25]/60 sm:grid-cols-[1fr_1.3fr] ${focusRing}`}
          >
            <div>
              <p className="font-semibold">{r.label}</p>
              <p className="mt-1 text-sm text-white/55">{r.note}</p>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <span className={`${s.display} text-4xl`}>{r.from.code}</span>
                <span className="relative h-px flex-1 bg-white/20" style={{ "--d": `${i * 350}ms` } as React.CSSProperties}>
                  <span className={`${s.wake} absolute inset-y-0 left-0 bg-[#fa6a25]`} />
                  <span className="absolute -top-[5px] right-0 h-2.5 w-2.5 rounded-full border-2 border-[#fa6a25] bg-[#0b2c3d]" />
                  <span className={`${s.ship} absolute -top-[13px] w-[30px]`}>
                    <span className={`${s.shipBob} block`}>
                      <ShipIcon />
                    </span>
                  </span>
                </span>
                <span className={`${s.display} text-4xl text-[#fa6a25]`}>{r.to.code}</span>
              </div>
              <div className="mt-2 flex justify-between gap-3 text-xs text-white/55">
                <span className="inline-flex items-center gap-1.5">
                  {r.from.flag && <Flag code={r.from.flag} className="h-3 w-[18px]" />}
                  {r.from.city}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  {r.to.flag && <Flag code={r.to.flag} className="h-3 w-[18px]" />}
                  {r.to.city}
                </span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </Reveal>
  );
}
