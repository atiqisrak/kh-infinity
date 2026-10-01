import Image from "next/image";
import Crumbs from "./Crumbs";
import { Eyebrow, pad } from "./ui";
import s from "./v3.module.css";

// Top of every inner v3 page. Two looks:
// - `image` set: full-bleed photo with the homepage's hero shade, copy bottom-left
// - no image: ink with the technical grid; `aside` fills the right column
// `stats` adds a figure strip under either. The H1 is `title`.

export interface HeroStat {
  value: React.ReactNode;
  label: string;
}

export function StatStrip({ stats, className = "" }: { stats: HeroStat[]; className?: string }) {
  const cols = stats.length >= 4 ? "lg:grid-cols-4" : stats.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";
  return (
    <dl className={`${pad} grid grid-cols-2 ${cols} ${className}`}>
      {stats.map((st, i) => (
        <div
          key={st.label}
          className={`flex flex-col-reverse border-t border-white/10 py-7 ${i > 0 ? "lg:border-l lg:pl-8" : ""} ${
            i % 2 === 1 ? "max-lg:border-l max-lg:pl-5" : ""
          }`}
        >
          <dt className="mt-2 text-xs uppercase tracking-[0.14em] text-white/55">{st.label}</dt>
          <dd className={`${s.display} ${s.displayTight} text-5xl`}>{st.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  actions,
  image,
  imageAlt = "",
  aside,
  stats,
  titleClassName = "text-[clamp(3rem,6.4vw,6rem)]",
}: {
  crumbs: { label: string; href?: string }[];
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  actions?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  /** Right-hand column (no-image look only) */
  aside?: React.ReactNode;
  stats?: HeroStat[];
  titleClassName?: string;
}) {
  const copy = (
    <div>
      <Crumbs items={crumbs} />
      {eyebrow && (
        <div className="mt-8">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h1 className={`${s.display} mt-5 ${titleClassName}`}>{title}</h1>
      {lead && <div className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">{lead}</div>}
      {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
    </div>
  );

  if (image) {
    return (
      <section className="relative isolate overflow-hidden bg-[#06131d]">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className={`${s.heroShade} absolute inset-0 -z-10`} />
        <div className={`${pad} flex min-h-[78svh] flex-col justify-end pb-14 pt-[120px] lg:min-h-[86svh] lg:pb-20`}>
          <div className="max-w-3xl">{copy}</div>
        </div>
        {stats && <StatStrip stats={stats} className="relative" />}
      </section>
    );
  }

  return (
    <section className={`${s.gridBg} relative overflow-hidden bg-[#06131d] pt-[104px] lg:pt-[124px]`}>
      <div
        className={`${pad} grid items-center gap-12 pb-14 lg:gap-16 lg:pb-20 ${aside ? "lg:grid-cols-[1.05fr_0.95fr]" : ""}`}
      >
        <div className={aside ? "" : "max-w-4xl"}>{copy}</div>
        {aside}
      </div>
      {stats && <StatStrip stats={stats} />}
    </section>
  );
}
