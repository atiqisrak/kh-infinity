import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import Icon from "../Icons";
import { OriginList, productOrigins } from "../ui";
import s from "../v3.module.css";

// Light product grid for the /imports and /exports hubs (the /products catalogue
// tile, without the filters). Server component. Use on paper/white sections.

const ring =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#fa6a25] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2f4f6]";

function Tile({ p }: { p: Product }) {
  return (
    <Link
      href={`/products/${p.id}`}
      className={`group flex h-full flex-col rounded-3xl bg-white p-3 ring-1 ring-[#06131d]/[0.06] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(6,19,29,0.45)] hover:ring-[#fa6a25]/50 motion-reduce:hover:translate-y-0 ${ring}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#d5dee7]">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105 motion-reduce:group-hover:scale-100"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
            p.type === "export" ? "bg-[#fa6a25] text-white" : "bg-[#06131d]/75 text-white backdrop-blur"
          }`}
        >
          {p.type}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#d9531a]">{p.hsSection ?? p.category}</p>
        <h3 className="mt-1.5 text-lg font-semibold leading-tight tracking-tight text-[#0b2c3d]">{p.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#06131d]/60">{p.description}</p>
        <div className="mt-auto pt-4" />
        <div className="flex items-end justify-between gap-3 border-t border-[#06131d]/[0.08] pt-4">
          <div className="min-w-0 text-xs text-[#06131d]/60">
            <OriginList countries={productOrigins(p)} />
            {p.hsCode && <span className="mt-1 block font-mono text-[11px] text-[#06131d]/45">HS {p.hsCode}</span>}
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#06131d]/15 text-[#0b2c3d] transition group-hover:rotate-45 group-hover:border-[#fa6a25] group-hover:bg-[#fa6a25] group-hover:text-white">
            <Icon name="arrow" className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/** Orange photo tile linking to the Gulf potato programme */
export function ProgrammeTile() {
  return (
    <Link
      href="/products/potato-gulf"
      className={`group relative isolate flex h-full min-h-[340px] flex-col justify-end overflow-hidden rounded-3xl p-6 text-white ${ring}`}
    >
      <Image
        src="/images/potato-export/quality-checks.webp"
        alt=""
        fill
        sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 100vw"
        className="-z-20 object-cover transition duration-700 group-hover:scale-105 motion-reduce:group-hover:scale-100"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#b8440f] via-[#fa6a25]/70 to-[#fa6a25]/10" />
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/80">Export programme</p>
      <h3 className={`${s.display} mt-2 text-4xl`}>
        Potatoes
        <br />
        for the Gulf
      </h3>
      <span className="mt-5 inline-flex items-center gap-3 text-sm font-semibold">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#d9531a] transition group-hover:rotate-45">
          <Icon name="arrow" className="h-4 w-4" />
        </span>
        Specs, packing &amp; documents
      </span>
    </Link>
  );
}

export default function TradeGrid({ products, withProgramme = false }: { products: Product[]; withProgramme?: boolean }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <li key={p.id}>
          <Tile p={p} />
        </li>
      ))}
      {withProgramme && (
        <li>
          <ProgrammeTile />
        </li>
      )}
    </ul>
  );
}
