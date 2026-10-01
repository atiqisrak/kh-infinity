import V3Shell from "@/components/v3/V3Shell";
import PageHero from "@/components/v3/PageHero";
import { Section } from "@/components/v3/blocks";
import CtaBand from "@/components/v3/CtaBand";
import Icon from "@/components/v3/Icons";
import { getLocalEvents, getInternationalEvents } from "@/lib/events";
import type { TradeEvent } from "@/lib/events";

function EventCard({ event }: { event: TradeEvent }) {
  return (
    <div className="flex flex-col rounded-3xl bg-white p-6 ring-1 ring-black/5">
      <div className="flex items-center justify-between gap-2 mb-3">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
            event.locationType === "Local"
              ? "bg-[#fa6a25]/10 text-[#d9531a]"
              : "bg-[#0b2c3d]/10 text-[#0b2c3d]"
          }`}
        >
          {event.locationType}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#06131d]/45">
          {event.category}
        </span>
      </div>
      <p className="font-mono text-sm text-[#fa6a25] mb-1">{event.dates}</p>
      <h2 className="font-semibold text-[#0b2c3d] text-lg leading-snug mb-2">
        {event.name}
      </h2>
      <div className="flex items-center gap-1.5 text-sm text-[#06131d]/60 mb-3">
        <Icon name="pin" className="h-4 w-4 shrink-0 text-[#fa6a25]" />
        {event.location}
      </div>
      <p className="text-sm text-[#06131d]/70 leading-relaxed line-clamp-3 flex-1">
        {event.description}
      </p>
      {event.website && (
        <div className="mt-4">
          <a
            href={event.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-sm text-[#0b2c3d] underline decoration-[#fa6a25] decoration-2 underline-offset-8 hover:text-[#fa6a25]"
          >
            Learn more <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      )}
    </div>
  );
}

function EventGroup({ events, label }: { events: TradeEvent[]; label: string }) {
  if (events.length === 0) return null;
  return (
    <div className="mb-14 last:mb-0">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#06131d]/50 mb-6">
        {label}
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </div>
  );
}

export default function EventsPage() {
  const localEvents = getLocalEvents();
  const internationalEvents = getInternationalEvents();

  return (
    <V3Shell>
      <PageHero
        crumbs={[{ label: "Events" }]}
        eyebrow="Trade shows &amp; exhibitions"
        title={
          <>
            Events we attend
            <br />
            &amp; host
          </>
        }
        lead="Discover upcoming trade shows, exhibitions, and industry events where K.H. Infinity connects buyers and suppliers across Bangladesh and Asia."
      />

      <Section
        id="events"
        tone="paper"
        eyebrow="Upcoming calendar"
        title="On the events circuit"
      >
        <EventGroup events={localEvents} label="Bangladesh" />
        <EventGroup events={internationalEvents} label="International" />
      </Section>

      <CtaBand
        image="/images/v3/cargo-plane.jpg"
        title="Meet us at the next show"
        body="Our team attends leading trade shows to meet partners and stay ahead of industry trends. Reach out to arrange a meeting."
        cta={{ label: "Contact us", href: "/contact" }}
      />
    </V3Shell>
  );
}
