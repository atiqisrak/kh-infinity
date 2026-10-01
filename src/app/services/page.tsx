import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema-helpers";
import CtaBand from "@/components/v3/CtaBand";
import Icon, { type IconName } from "@/components/v3/Icons";
import PageHero from "@/components/v3/PageHero";
import ProcessTrack from "@/components/v3/ProcessTrack";
import ServiceLanes from "@/components/v3/services/ServiceLanes";
import { CheckList, NumberedGrid, Section } from "@/components/v3/blocks";
import { ArrowLink, GhostButton, PillButton, SectionHead, pad } from "@/components/v3/ui";
import V3Shell from "@/components/v3/V3Shell";
import s from "@/components/v3/v3.module.css";
import { process, routes } from "@/app/_home/content";

export const metadata: Metadata = {
  title:
    "B2B Import Export Services Bangladesh | K.H. Infinity — Trade, Customs & SME Solutions",
  description:
    "K.H. Infinity's B2B trade services: global commodity sourcing, NBR customs clearance, TTI-transparent landed-cost quoting, SME consolidated imports, and Gulf export programmes. All managed in-house from Dhaka.",
  keywords:
    "import export services Bangladesh, customs clearance service Bangladesh, B2B trade services Dhaka, landed cost quote Bangladesh, SME import solutions, Gulf export Bangladesh, commodity sourcing Bangladesh, K.H. Infinity services",
  alternates: {
    canonical: "https://khi.com.bd/services",
  },
  openGraph: {
    title: "B2B Import Export Services | K.H. Infinity Bangladesh",
    description:
      "Global sourcing, in-house NBR customs clearance, TTI-transparent landed-cost quoting, SME consolidated imports, and Gulf export programmes — all managed from Dhaka.",
    images: ["/images/cover/kh1.webp"],
    url: "https://khi.com.bd/services",
    siteName: "K.H. Infinity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Import Export Services | K.H. Infinity Bangladesh",
    description:
      "In-house customs clearance, NBR TTI transparency, SME import solutions, and Gulf export programmes from Dhaka, Bangladesh.",
    images: ["/images/cover/kh1.webp"],
  },
};

const link = "font-semibold text-[#0b2c3d] underline decoration-[#fa6a25] decoration-2 underline-offset-4 hover:text-[#d9531a]";
const linkDark = "font-semibold text-white underline decoration-[#fa6a25] decoration-2 underline-offset-4 hover:text-[#fa6a25]";

interface ServiceItem {
  icon: IconName;
  title: string;
  body: React.ReactNode;
  items: string[];
  more?: { label: string; href: string };
}

const importServices: ServiceItem[] = [
  {
    icon: "globe",
    title: "Global sourcing",
    body: (
      <>
        Access our extensive network of verified suppliers across Asia, Europe, and the Americas. We handle everything
        from supplier verification to quality control for products like{" "}
        <Link href="/products/sunflower-oil" className={link}>
          sunflower oil
        </Link>{" "}
        and{" "}
        <Link href="/products/milk-powder" className={link}>
          milk powder
        </Link>
        .
      </>
    ),
    items: ["Supplier verification", "Quality inspection", "Price negotiation"],
  },
  {
    icon: "doc",
    title: "Documentation & compliance",
    body: "Expert handling of all import documentation and compliance requirements, ensuring smooth customs clearance.",
    items: ["Import licenses", "Customs documentation", "Regulatory compliance"],
    more: { label: "Customs clearance service hub", href: "/services/customs" },
  },
  {
    icon: "truck",
    title: "Logistics management",
    body: "End-to-end logistics solutions including transportation, warehousing, and last-mile delivery.",
    items: ["Freight forwarding", "Warehousing", "Distribution"],
  },
];

const exportServices: ServiceItem[] = [
  {
    icon: "target",
    title: "Market access",
    body: "Connect with international buyers and expand your market reach through our established network.",
    items: ["Market research", "Buyer connections", "Trade shows"],
  },
  {
    icon: "box",
    title: "Product preparation",
    body: (
      <>
        Complete product preparation services meeting international standards and requirements. We ensure quality for
        our{" "}
        <Link href="/products/potato" className={link}>
          potato exports
        </Link>{" "}
        and{" "}
        <Link href="/products/handicrafts" className={link}>
          handicrafts
        </Link>
        .
      </>
    ),
    items: ["Quality control", "Packaging", "Labeling"],
  },
  {
    icon: "handshake",
    title: "Trade finance",
    body: "Flexible trade finance solutions to support your export operations.",
    items: ["Letter of credit", "Export financing", "Risk management"],
  },
];

const regions = [
  "South Asia",
  "Southeast Asia",
  "Middle East",
  "Europe",
  "North America",
  "Africa",
  "Australia",
  "East Asia",
];

const facilities: { icon: IconName; label: string }[] = [
  { icon: "ship", label: "Chittagong Port, Bangladesh" },
  { icon: "warehouse", label: "Modern Warehousing Facilities" },
  { icon: "truck", label: "Distribution Centers" },
  { icon: "pin", label: "Regional Offices" },
];

const reasons = [
  { title: "Years of experience", body: "Extensive experience in international trade" },
  { title: "Strong network", body: "Established relationships with global partners" },
  { title: "Quality focus", body: "Commitment to product quality and standards" },
  { title: "Competitive pricing", body: "Best value for quality products" },
];

/** Homepage-style numbered accordion row, with icon, check list and optional link */
function ServiceRow({ svc, n, open }: { svc: ServiceItem; n: number; open?: boolean }) {
  return (
    <details className="group border-b border-[#06131d]/15" open={open}>
      <summary className="flex min-h-[44px] cursor-pointer items-center gap-4 py-6 sm:gap-6">
        <span className="font-mono text-sm text-[#06131d]/45 group-open:text-[#d9531a]">{String(n).padStart(2, "0")}</span>
        <h4 className="flex-1 text-xl font-semibold tracking-tight sm:text-2xl">{svc.title}</h4>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#06131d]/20 transition group-open:rotate-45 group-open:border-[#fa6a25] group-open:bg-[#fa6a25] group-open:text-white">
          <Icon name="plus" className="h-4 w-4" />
        </span>
      </summary>
      <div className="grid gap-6 pb-8 sm:grid-cols-[1.2fr_0.8fr] sm:pl-[3.25rem] sm:pr-14">
        <div>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#fa6a25]/10 text-[#d9531a]">
            <Icon name={svc.icon} className="h-5 w-5" />
          </span>
          <p className="mt-4 max-w-lg leading-relaxed text-[#06131d]/70">{svc.body}</p>
          {svc.more && (
            <div className="mt-5">
              <ArrowLink href={svc.more.href} dark>
                {svc.more.label}
              </ArrowLink>
            </div>
          )}
        </div>
        <CheckList items={svc.items} className="content-start sm:border-l sm:border-[#06131d]/10 sm:pl-6" />
      </div>
    </details>
  );
}

function ServiceGroup({ label, items, start, openFirst }: { label: string; items: ServiceItem[]; start: number; openFirst?: boolean }) {
  return (
    <div>
      <h3 className="flex items-center gap-3 pb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#06131d]/50">
        <span className="h-px w-6 bg-[#fa6a25]" />
        {label}
      </h3>
      <div className={`${s.accordion} border-t border-[#06131d]/15`}>
        {items.map((svc, i) => (
          <ServiceRow key={svc.title} svc={svc} n={start + i} open={openFirst && i === 0} />
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const crumbs = breadcrumbSchema([
    { name: "Home", url: "https://khi.com.bd/" },
    { name: "Services", url: "https://khi.com.bd/services" },
  ]);

  return (
    <V3Shell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="Import · Export · Customs"
        title={
          <>
            Our
            <br />
            <span className="text-[#fa6a25]">services</span>
          </>
        }
        lead={
          <>
            <p className="geo-anchor" data-speakable>
              K.H. Infinity is a direct B2B importer and wholesale distributor—not a 3PL facilitator. The services
              below are internal capabilities that support our core business of owning, sourcing, and distributing
              physical inventory with NBR customs clearance and TTI transparency.
            </p>
            <p className="mt-4 text-base text-white/60">
              From{" "}
              <Link href="/products/sunflower-oil" className={linkDark}>
                cooking oils
              </Link>{" "}
              to{" "}
              <Link href="/products/potato" className={linkDark}>
                agricultural exports
              </Link>
              , our internal logistics ensure reliable delivery.
            </p>
          </>
        }
        actions={
          <>
            <PillButton href="/quote">Request a quote</PillButton>
            <GhostButton href="#what-we-do">See all services</GhostButton>
          </>
        }
        aside={
          <figure className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#0b2c3d] ring-1 ring-white/10">
              <Image
                src="/images/v3/modes-triptych.webp"
                alt="Aerial triptych of a container ship, a truck on a road and a plane over the sea"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06131d]/80 via-transparent to-transparent" />
              <ul aria-hidden="true" className="absolute inset-x-0 bottom-0 grid grid-cols-3">
                {(["ship", "truck", "plane"] as const).map((m, i) => (
                  <li key={m} className="flex items-center gap-2 p-4 sm:p-5">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#fa6a25] text-white">
                      <Icon name={m} className="h-[18px] w-[18px]" />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-white/85">{["Sea", "Road", "Air"][i]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </figure>
        }
        stats={[
          { value: importServices.length, label: "Import services" },
          { value: exportServices.length, label: "Export services" },
          { value: regions.length, label: "Regions served" },
          { value: routes.length, label: "Trade lanes" },
        ]}
      />

      {/* ───────────── WHAT WE DO ───────────── */}
      <section id="what-we-do" aria-labelledby="what-we-do-heading" className="bg-[#f2f4f6] py-20 text-[#06131d] lg:py-28">
        <div className={`${pad} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead
              dark
              eyebrow="What we do"
              id="what-we-do-heading"
              title={
                <>
                  In and out
                  <br />
                  of <span className="text-[#fa6a25]">Bangladesh</span>
                </>
              }
            />
            <p className="mt-6 max-w-md text-[#06131d]/70">
              Three capabilities carry goods in, three carry them out. Open any service to see what it covers.
            </p>
            <div className="mt-8">
              <PillButton href="/contact" tone="ink">
                Talk to our team
              </PillButton>
            </div>
          </div>

          <div className="grid gap-12">
            <ServiceGroup label="Import services" items={importServices} start={1} openFirst />
            <ServiceGroup label="Export services" items={exportServices} start={importServices.length + 1} />
          </div>
        </div>
      </section>

      {/* ───────────── HOW IT WORKS ───────────── */}
      <Section
        id="process"
        tone="sea"
        grid
        eyebrow="How it works"
        title={
          <>
            From brief to
            <br />
            your warehouse
          </>
        }
        intro={
          <p>
            Five steps, one accountable team. You see every cost before you commit, and we stay with the cargo until it
            is released to you.
          </p>
        }
      >
        <ProcessTrack steps={process} />
      </Section>

      {/* ───────────── GLOBAL NETWORK ───────────── */}
      <Section
        id="network"
        tone="white"
        eyebrow="Global network"
        title={
          <>
            Our global
            <br />
            network
          </>
        }
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#f2f4f6] p-6 sm:p-8">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#06131d]/50">Regions we serve</h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-6">
              {regions.map((r) => (
                <li key={r} className="flex items-center gap-3 border-b border-[#06131d]/10 py-3.5 text-[15px] font-medium text-[#0b2c3d]">
                  <Icon name="pin" className="h-4 w-4 shrink-0 text-[#d9531a]" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-[#06131d] p-6 text-white sm:p-8">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">Key ports &amp; facilities</h3>
            <ul className="mt-6 grid gap-3">
              {facilities.map((f) => (
                <li key={f.label} className="flex items-center gap-4 rounded-2xl bg-white/[0.05] p-4 ring-1 ring-white/10">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fa6a25] text-white">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-semibold">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ───────────── TRADE LANES ───────────── */}
      <section aria-labelledby="lanes-heading" className="bg-[#06131d] py-20 text-white lg:py-28">
        <div className={`${pad} grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16`}>
          <div>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHead eyebrow="Trade routes" id="lanes-heading" title="Lanes we run" />
              <div className="pb-3">
                <ArrowLink href="/services/trade-routes">All trade routes</ArrowLink>
              </div>
            </div>
            <div className="mt-10">
              <ServiceLanes lanes={routes} />
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl lg:min-h-[420px]">
            <Image
              src="/images/v3/hero-ship-tall.webp"
              alt="Aerial view of a loaded container ship heading straight towards the camera"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06131d]/85 via-transparent to-transparent" />
            <p className={`${s.display} absolute bottom-6 left-6 right-6 text-4xl`}>
              Planned lanes.
              <br />
              <span className="text-[#fa6a25]">One partner.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── WHY CHOOSE US ───────────── */}
      <Section
        id="why"
        tone="mist"
        eyebrow="Why choose us"
        title={
          <>
            Why trade
            <br />
            with <span className="text-[#fa6a25]">KHI</span>
          </>
        }
        intro={
          <p>
            Whether you need{" "}
            <Link href="/products" className={link}>
              premium products
            </Link>{" "}
            or{" "}
            <Link href="/contact" className={link}>
              custom solutions
            </Link>
            , first-time importers can also start with our{" "}
            <Link href="/services/sme-import-solutions" className={link}>
              SME import solutions
            </Link>
            .
          </p>
        }
      >
        <NumberedGrid items={reasons} />
      </Section>

      <CtaBand
        title={
          <>
            Ready to start
            <br />
            <span className="text-[#fa6a25]">trading?</span>
          </>
        }
        body="Contact us today to discuss your import/export needs."
        image="/images/v3/services/ship-full-load.webp"
        imageAlt="Container ship fully loaded with stacked containers at sea"
      />
    </V3Shell>
  );
}
