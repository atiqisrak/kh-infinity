import Image from "next/image";
import Flag, { flagCodeFor } from "./Flag";
import Reveal from "./Reveal";
import { certLogos } from "./site";
import { YARD_COLOURS } from "./sourcing";
import s from "./v3.module.css";

// Port yard: one CSS container per origin country, dropped in and stacked on a
// quay. Hover/focus shows what we bring in from there. Use on light sections.
export function SourcingYard({ countries }: { countries: { name: string; items: string[] }[] }) {
  return (
    <Reveal threshold={0.25}>
      <ul aria-label="Origin countries" className="relative flex flex-wrap-reverse justify-center gap-2 pb-2">
        {countries.map((c, i) => {
          const code = flagCodeFor(c.name);
          return (
            <li
              key={c.name}
              tabIndex={0}
              aria-label={`${c.name}: ${c.items.join(", ")}`}
              className={`${s.yardBox} group w-[calc((100%-0.5rem)/2)] outline-none sm:relative sm:w-[calc((100%-1.5rem)/4)] sm:hover:z-30 sm:focus:z-30 lg:w-[calc((100%-2rem)/5)] xl:w-[calc((100%-1.5rem)/4)]`}
              style={{ "--d": `${i * 75}ms` } as React.CSSProperties}
            >
              <div
                className={`${s.box} flex h-11 items-center gap-2 px-3 transition-transform sm:h-12 duration-300 group-hover:-translate-y-1.5 group-focus:-translate-y-1.5`}
                style={{ "--c": YARD_COLOURS[i % YARD_COLOURS.length] } as React.CSSProperties}
              >
                {code && <Flag code={code} className="h-3 w-[18px] sm:h-3.5 sm:w-5" />}
                <span className={`${s.display} ${s.displayTight} truncate text-[13px] tracking-[0.04em] text-white sm:text-sm`}>
                  {c.name}
                </span>
                <span className="ml-auto font-mono text-[11px] text-white/75">{c.items.length}</span>
              </div>
              <div
                role="tooltip"
                className="pointer-events-none absolute bottom-full z-40 mb-2 translate-y-1 rounded-xl bg-[#06131d] px-3.5 py-2.5 text-xs text-white opacity-0 shadow-xl transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 max-sm:inset-x-0 sm:left-1/2 sm:w-max sm:max-w-[230px] sm:-translate-x-1/2"
              >
                <p className="flex items-center gap-2 font-semibold">
                  {code && <Flag code={code} className="h-3 w-[18px]" />}
                  {c.name}
                </p>
                <p className="mt-1 leading-relaxed text-white/70">{c.items.join(" · ")}</p>
              </div>
            </li>
          );
        })}
      </ul>
      {/* Quay edge with hazard striping */}
      <div aria-hidden="true" className="relative h-4 overflow-hidden rounded-md bg-[#0b2c3d]">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[repeating-linear-gradient(135deg,#f5c518_0_10px,#1b1f24_10px_20px)]" />
      </div>
      <p className="mt-3 text-right font-mono text-[11px] uppercase tracking-wider text-[#06131d]/45">
        Number = product lines from that origin
      </p>
    </Reveal>
  );
}

// Supplier certification cards with logo and the number of product lines covered
export function CertCards({ certs, className = "" }: { certs: [string, number][]; className?: string }) {
  return (
    <dl className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {certs.map(([name, count]) => {
        const logo = certLogos[name];
        return (
          <div
            key={name}
            className="group flex items-center gap-5 rounded-3xl bg-white p-5 ring-1 ring-[#06131d]/[0.06] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(6,19,29,0.35)]"
          >
            <div className="relative h-16 w-16 shrink-0">
              <Image src={logo.src} alt={`${name} logo`} fill sizes="64px" className="object-contain" />
            </div>
            <div className="min-w-0 flex flex-col-reverse">
              <dt className="text-xs leading-snug text-[#06131d]/55">
                <span className="block font-semibold text-[#0b2c3d]">{name}</span>
                {logo.note}
              </dt>
              <dd className="mb-1">
                <span className={`${s.display} ${s.displayTight} text-3xl text-[#0b2c3d]`}>{count}</span>
                <span className="ml-1.5 text-xs text-[#06131d]/55">lines</span>
              </dd>
            </div>
          </div>
        );
      })}
    </dl>
  );
}
