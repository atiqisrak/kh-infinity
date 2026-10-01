import Link from "next/link";
import HangingContainer from "../HangingContainer";
import Icon from "../Icons";
import { YARD_COLOURS } from "../sourcing";
import { focusRing } from "../ui";
import s from "../v3.module.css";
import { sectors } from "./sectors";

// Hub hero aside: the five sectors stacked as containers on a quay, with the
// KH container being lowered onto the stack. Each container links to its page.
const LIVERY = [YARD_COLOURS[0], YARD_COLOURS[2], YARD_COLOURS[3], YARD_COLOURS[4], YARD_COLOURS[1]];

export default function SectorStack() {
  return (
    <div className="mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto">
      <div aria-hidden="true" className="ml-auto w-24 sm:w-32">
        <div className={s.sway}>
          <HangingContainer className="h-auto w-full drop-shadow-[0_18px_24px_rgba(0,0,0,0.4)]" />
        </div>
      </div>
      <ul className="mt-3 grid gap-2">
        {sectors.map((sec, i) => (
          <li key={sec.slug} style={{ marginLeft: `${[0, 6, 2, 8, 4][i]}%`, marginRight: `${[6, 0, 8, 2, 4][i]}%` }}>
            <Link
              href={sec.href}
              className={`${s.box} group flex min-h-14 items-center gap-3 px-5 py-3 text-white transition-[filter] hover:brightness-110 ${focusRing}`}
              style={{ "--c": LIVERY[i] } as React.CSSProperties}
            >
              <Icon name={sec.icon} className="h-6 w-6 shrink-0" />
              <span className={`${s.display} ${s.displayTight} flex-1 text-xl tracking-[0.04em] sm:text-2xl`}>{sec.short}</span>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-white/75 sm:inline">
                {sec.products.slice(0, 2).join(" · ")}
              </span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15 transition group-hover:rotate-45 group-hover:bg-white group-hover:text-[#d9531a]">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div aria-hidden="true" className="relative mt-2 h-3 overflow-hidden rounded-md bg-[#0b2c3d]">
        <div className="absolute inset-x-0 top-0 h-1 bg-[repeating-linear-gradient(135deg,#f5c518_0_10px,#1b1f24_10px_20px)]" />
      </div>
    </div>
  );
}
