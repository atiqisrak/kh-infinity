import Image from "next/image";
import Link from "next/link";
import Icon from "../Icons";
import { focusRing } from "../ui";
import s from "../v3.module.css";
import LaneLine from "./LaneLine";
import type { LaneSummary } from "./lanes";

// Ink lane tile: photo, sailing lane line, label, description, product chips.
// Reads on light and dark sections. Wrap a grid of these in <Reveal> so the
// ships sail; pass `index` to stagger them.
export default function LaneCard({ lane, index = 0 }: { lane: LaneSummary; index?: number }) {
  return (
    <Link
      href={lane.href}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl bg-[#06131d] text-white ring-1 ring-white/10 transition hover:ring-[#fa6a25]/70 ${focusRing}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={lane.image}
          alt={lane.imageAlt}
          fill
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06131d] via-[#06131d]/20 to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
            lane.direction === "export" ? "bg-[#fa6a25] text-white" : `${s.glass} text-white`
          }`}
        >
          {lane.direction}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <LaneLine from={lane.from} to={lane.to} delay={index * 350} />
        <h3 className={`${s.display} mt-6 text-[2rem] group-hover:text-[#fa6a25]`}>{lane.label}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-white/70">{lane.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {lane.products.map((p) => (
            <li key={p} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
              {p}
            </li>
          ))}
        </ul>
        <span className="mt-auto flex items-center justify-between pt-6 text-sm font-semibold">
          Learn more
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition group-hover:rotate-45 group-hover:bg-[#fa6a25]">
            <Icon name="arrow" className="h-4 w-4" />
          </span>
        </span>
      </div>
    </Link>
  );
}
