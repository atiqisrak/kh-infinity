import Image from "next/image";
import { getProducts } from "@/lib/products";
import Crumbs from "../Crumbs";
import CtaBand from "../CtaBand";
import Icon, { type IconName } from "../Icons";
import { ChipList, FaqList, NumberedGrid, RowTable, Section, labelCls } from "../blocks";
import { StatStrip, type HeroStat } from "../PageHero";
import ProcessTrack, { type ProcessStep } from "../ProcessTrack";
import Reveal from "../Reveal";
import { shipmentDocs } from "../site";
import { ArrowLink, Eyebrow, GhostButton, PillButton, ProductCard, pad, tones, type Tone } from "../ui";
import V3Shell from "../V3Shell";
import s from "../v3.module.css";
import LaneCard from "./LaneCard";
import LaneLine from "./LaneLine";
import { getLane, lanes, type LaneSlug } from "./lanes";

// One template for the three trade-lane pages. Each page keeps its own copy,
// metadata and JSON-LD and passes its content in as `LaneContent`.
//
// Sections after the hero alternate light / dark automatically, so optional
// blocks (process, timeline) can come and go without two same-tone bands
// touching: overview · what we move · paperwork [· process] · why · other lanes · FAQ.

export interface LaneContent {
  slug: LaneSlug;
  eyebrow: string;
  /** The page H1 */
  title: React.ReactNode;
  lead: string;
  heroImage: string;
  heroImageAlt: string;
  quoteLabel: string;
  stats: HeroStat[];
  overview: {
    title: string;
    body: React.ReactNode[];
    image: string;
    imageAlt: string;
    /** Extra links under the copy */
    links?: { label: string; href: string; note?: string }[];
  };
  move: {
    title: string;
    intro?: string;
    groups: { title: string; icon: IconName; body: string; links?: { label: string; href: string }[] }[];
    /** Catalogue products on this lane (ids from lib/products) */
    productIds?: string[];
  };
  /** Lane facts shown next to the document list */
  facts: [string, React.ReactNode][];
  timeline?: { when: string; title: string; body: string }[];
  process?: { title: React.ReactNode; intro?: string; steps: ProcessStep[] };
  why: { title: React.ReactNode; items: { title: string; body: string }[] };
  faqs: { q: string; a: React.ReactNode }[];
  cta: { title: React.ReactNode; body: string; image: string; imageAlt: string; label: string };
}

const LIGHT: Tone[] = ["white", "mist", "paper"];
const DARK: Tone[] = ["sea", "ink"];

function LaneHero({ c }: { c: LaneContent }) {
  const lane = getLane(c.slug);
  return (
    <section aria-labelledby="lane-title" className={`${s.gridBg} relative overflow-hidden bg-[#06131d] pt-[104px] lg:pt-[124px]`}>
      <div className={pad}>
        <Crumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Trade routes", href: "/services/trade-routes" },
            { label: lane.label },
          ]}
        />
      </div>

      <div className={`${pad} grid gap-12 pb-14 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:pb-20`}>
        <div>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <Reveal threshold={0.1} className="mt-8 max-w-3xl">
            <LaneLine from={lane.from} to={lane.to} size="lg" delay={300} />
          </Reveal>
          <h1 id="lane-title" className={`${s.display} mt-10 text-[clamp(2.4rem,4.6vw,4.25rem)]`}>
            {c.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">{c.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PillButton href="/quote">{c.quoteLabel}</PillButton>
            <GhostButton href="/contact">Contact us</GhostButton>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#0b2c3d] sm:aspect-[16/10] lg:aspect-[4/5]">
          <Image src={c.heroImage} alt={c.heroImageAlt} fill priority sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06131d]/80 via-transparent to-transparent" />
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
              lane.direction === "export" ? "bg-[#fa6a25] text-white" : `${s.glass} text-white`
            }`}
          >
            {lane.direction} lane
          </span>
          <p className={`${s.display} absolute bottom-5 left-5 right-5 text-3xl sm:text-4xl`}>
            {lane.from.city} <span className="text-[#fa6a25]">→</span> {lane.to.city}
          </p>
        </div>
      </div>

      <StatStrip stats={c.stats} />
    </section>
  );
}

export default function LanePage({ content: c }: { content: LaneContent }) {
  const others = lanes.filter((l) => l.slug !== c.slug);
  const all = getProducts();
  const products = (c.move.productIds ?? [])
    .map((id) => all.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  // Alternate tones: even slots light, odd slots dark
  let li = 0;
  let di = 0;
  const toneAt = (slot: number): Tone => (slot % 2 === 0 ? LIGHT[li++ % LIGHT.length] : DARK[di++ % DARK.length]);

  type Block = { key: string; render: (tone: Tone) => React.ReactNode; darkOnly?: boolean };
  const blocks: Block[] = [];

  blocks.push({
    key: "overview",
    render: (tone) => (
      <section key="overview" id="overview" aria-labelledby="overview-heading" className={`${tones[tone].cls} py-20 lg:py-28`}>
        <div className={`${pad} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <Eyebrow dark>Lane overview</Eyebrow>
            <h2 id="overview-heading" className={`${s.display} mt-6 text-[clamp(2.2rem,4.4vw,3.75rem)] text-[#0b2c3d]`}>
              {c.overview.title}
            </h2>
            <div className="mt-6 grid max-w-xl gap-4 text-lg leading-relaxed text-[#06131d]/70">
              {c.overview.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {c.overview.links && (
              <ul className="mt-8 grid gap-4">
                {c.overview.links.map((l) => (
                  <li key={l.href} className="text-[#06131d]/70">
                    <ArrowLink dark href={l.href}>
                      {l.label}
                    </ArrowLink>
                    {l.note && <span className="mt-2 block text-[15px]">{l.note}</span>}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-10">
              <PillButton href="/quote" tone="ink">
                {c.quoteLabel}
              </PillButton>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#d5dee7]">
            <Image src={c.overview.image} alt={c.overview.imageAlt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
    ),
  });

  blocks.push({
    key: "move",
    darkOnly: true,
    render: (tone) => (
      <Section key="move" id="move" tone={tone} grid eyebrow="What we move" title={c.move.title} intro={c.move.intro} headSize="md">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.move.groups.map((g) => (
            <li key={g.title} className="flex flex-col rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 sm:p-7">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#fa6a25]/15 text-[#fa6a25]">
                <Icon name={g.icon} className="h-5 w-5" />
              </span>
              <h3 className={`${s.display} mt-5 text-[1.75rem]`}>{g.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">{g.body}</p>
              {g.links && (
                <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-5">
                  {g.links.map((l) => (
                    <ArrowLink key={l.href} href={l.href}>
                      {l.label}
                    </ArrowLink>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {products.length > 0 && (
          <div className="mt-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h3 className={`${labelCls} text-white/55`}>On this lane, from our catalogue</h3>
              <ArrowLink href="/products">All products</ArrowLink>
            </div>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p) => (
                <li key={p.id}>
                  <ProductCard product={p} sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>
    ),
  });

  blocks.push({
    key: "paperwork",
    render: (tone) => (
        <Section
          key="paperwork"
          id="paperwork"
          tone={tone}
          eyebrow={c.timeline ? "Documents & timing" : "Documents"}
          title={c.timeline ? "Paperwork & timeline" : "Paperwork on this lane"}
          intro="Every shipment moves with the same document set. We prepare and check it with you, and our in-house team handles customs clearance."
          headSize="md"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <RowTable title="Lane facts" rows={c.facts} />
            <div className="rounded-3xl bg-[#f2f4f6] p-6 sm:p-8">
              <h3 className={`${labelCls} text-[#06131d]/50`}>With every shipment</h3>
              <ChipList dark icon="receipt" items={shipmentDocs} className="mt-5" />
              <div className="mt-8">
                <ArrowLink dark href="/services/customs">
                  Customs clearance
                </ArrowLink>
              </div>
            </div>
          </div>

          {c.timeline && (
            <div className="mt-4 rounded-3xl bg-[#f2f4f6] p-6 sm:p-8">
              <h3 className={`${labelCls} text-[#06131d]/50`}>Typical timeline</h3>
              <ol className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {c.timeline.map((t, i) => (
                  <li key={t.when} className="relative border-t-2 border-[#06131d]/10 pt-5">
                    <span
                      aria-hidden="true"
                      className="absolute -top-[7px] left-0 h-3 w-3 rounded-full border-2 border-[#fa6a25] bg-white"
                      style={{ background: i === c.timeline!.length - 1 ? "#fa6a25" : undefined }}
                    />
                    <p className={`${s.display} text-3xl text-[#d9531a]`}>{t.when}</p>
                    <h4 className="mt-3 text-lg font-semibold tracking-tight text-[#0b2c3d]">{t.title}</h4>
                    <p className="mt-1 text-[15px] leading-relaxed text-[#06131d]/70">{t.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </Section>
    ),
  });

  if (c.process) {
    const proc = c.process;
    blocks.push({
      key: "process",
      darkOnly: true,
      render: (tone) => (
        <Section key="process" id="process" tone={tone} grid eyebrow="How it works" title={proc.title} intro={proc.intro} headSize="md">
          <ProcessTrack steps={proc.steps} />
        </Section>
      ),
    });
  }

  blocks.push({
    key: "why",
    render: (tone) => (
      <Section key="why" id="why" tone={tone} eyebrow="Why KHI" title={c.why.title} headSize="md">
        <NumberedGrid dark={tones[tone].dark} cols={c.why.items.length === 4 ? 4 : 3} items={c.why.items} />
      </Section>
    ),
  });

  blocks.push({
    key: "lanes",
    render: (tone) => (
      <Section
        key="lanes"
        id="other-lanes"
        tone={tone}
        eyebrow="Trade routes"
        title="Other lanes we run"
        intro={
          <ArrowLink dark={tones[tone].dark} href="/services/trade-routes">
            All trade routes
          </ArrowLink>
        }
        headSize="md"
      >
        <Reveal as="ul" threshold={0.2} className="grid gap-4 md:grid-cols-2">
          {others.map((l, i) => (
            <li key={l.slug}>
              <LaneCard lane={l} index={i} />
            </li>
          ))}
        </Reveal>
      </Section>
    ),
  });

  blocks.push({
    key: "faq",
    render: (tone) => (
      <Section key="faq" id="faq" tone={tone} eyebrow="FAQ" title="Questions buyers ask" headSize="md">
        <FaqList dark={tones[tone].dark} items={c.faqs} />
      </Section>
    ),
  });

  // Sanity: a dark-only block must land on a dark slot (odd index)
  if (process.env.NODE_ENV !== "production") {
    blocks.forEach((b, i) => {
      if (b.darkOnly && i % 2 === 0) console.warn(`LanePage: "${b.key}" needs a dark slot`);
    });
  }

  return (
    <V3Shell>
      <LaneHero c={c} />
      {blocks.map((b, i) => b.render(toneAt(i)))}
      <CtaBand
        title={c.cta.title}
        body={c.cta.body}
        image={c.cta.image}
        imageAlt={c.cta.imageAlt}
        cta={{ label: c.cta.label, href: "/quote" }}
      />
    </V3Shell>
  );
}
