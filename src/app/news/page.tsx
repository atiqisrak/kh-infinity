import V3Shell from "@/components/v3/V3Shell";
import PageHero from "@/components/v3/PageHero";
import { Section } from "@/components/v3/blocks";
import CtaBand from "@/components/v3/CtaBand";
import Icon from "@/components/v3/Icons";
import { getIndustryNews, getCompanyNews } from "@/lib/news";
import type { NewsItem } from "@/lib/news";

function NewsCard({ news }: { news: NewsItem }) {
  const date = new Date(news.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="flex flex-col rounded-3xl bg-white p-6 ring-1 ring-black/5">
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="inline-flex items-center rounded-full bg-[#fa6a25]/10 px-3 py-1 text-xs font-semibold text-[#d9531a] uppercase tracking-wide">
          {news.category}
        </span>
        {news.source && (
          <span className="font-mono text-xs text-[#06131d]/50">{news.source}</span>
        )}
      </div>
      <h2 className="font-semibold text-[#0b2c3d] text-lg leading-snug mb-2">
        {news.title}
      </h2>
      <p className="text-sm text-[#06131d]/70 leading-relaxed line-clamp-3 flex-1">
        {news.excerpt}
      </p>
      <div className="mt-4 flex items-center justify-between gap-4">
        <span className="font-mono text-xs text-[#06131d]/45">{date}</span>
        {news.externalLink && (
          <a
            href={news.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-sm text-[#0b2c3d] underline decoration-[#fa6a25] decoration-2 underline-offset-8 hover:text-[#fa6a25]"
          >
            Read more <Icon name="arrow" className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}

function NewsGrid({ items, label }: { items: NewsItem[]; label: string }) {
  return (
    <div className="mb-14 last:mb-0">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#06131d]/50 mb-6">
        {label}
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((n) => (
          <NewsCard key={n.id} news={n} />
        ))}
      </div>
    </div>
  );
}

export default function NewsPage() {
  const industryNews = getIndustryNews();
  const companyNews = getCompanyNews();

  return (
    <V3Shell>
      <PageHero
        crumbs={[{ label: "News", href: "/news" }]}
        eyebrow="Market intelligence"
        title={
          <>
            Trade news &amp;
            <br />
            company updates
          </>
        }
        lead="Stay informed with the latest insights on international trade, industry trends, and announcements from K.H. Infinity."
      />

      <Section
        id="news"
        tone="paper"
        eyebrow="Latest coverage"
        title="What's happening"
      >
        <NewsGrid items={industryNews} label="Industry news" />
        <NewsGrid items={companyNews} label="Company news" />
      </Section>

      <CtaBand
        image="/images/v3/news-cta.webp"
        title="Stay informed"
        body="Connect with our trade team for market insights and updates tailored to your business."
        cta={{ label: "Contact us", href: "/contact" }}
      />
    </V3Shell>
  );
}
