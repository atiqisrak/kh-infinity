import Link from "next/link";
import Reveal from "@/components/v3/Reveal";
import { ShipIcon, focusRing } from "@/components/v3/ui";
import s from "@/components/v3/v3.module.css";

// Trade-lane cards (the homepage "Lanes we run" pattern): code → code with a ship
// sailing the lane once it scrolls into view. Motion only runs without
// prefers-reduced-motion (see .ship / .wake in v3.module.css). For dark sections.

export interface Lane {
  from: { code: string; city: string };
  to: { code: string; city: string };
  label: string;
  note: string;
  href: string;
}

export default function ServiceLanes({ lanes }: { lanes: readonly Lane[] }) {
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
            <div aria-hidden="true">
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
              <div className="mt-2 flex justify-between text-xs text-white/55">
                <span>{r.from.city}</span>
                <span>{r.to.city}</span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </Reveal>
  );
}
