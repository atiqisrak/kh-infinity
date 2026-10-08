// ─── Blog auto-linker ──────────────────────────────────────────────────────
// Links the first mention of known terms in a post's body text to the matching
// K.H. Infinity product or service page, or to the official regulator site.
// • Only text inside <p>, <li> and <td> is touched — never headings, existing
//   links or code
// • Each target is linked at most once per post, and never if the post already
//   links to it
// • At most MAX_LINKS links are added per post, so the copy stays readable
// Add a term here when a new product, service or regulator page is worth linking.

const MAX_LINKS = 10;

interface Term {
  pattern: RegExp;
  href: string;
}

const term = (words: string, href: string): Term => ({ pattern: new RegExp(`\\b(?:${words})\\b`, "i"), href });

// Longer, more specific phrases first so they win over shorter ones
const TERMS: Term[] = [
  // Products
  term("iPhone (?:replacement )?(?:displays?|screens?)", "/products/iphone-displays"),
  term("Android (?:phone )?(?:displays?|screens?)", "/products/android-displays"),
  term("(?:phone|replacement|lithium-ion) batter(?:y|ies)", "/products/phone-batteries"),
  term("iPad (?:displays?|screens?|LCDs?)", "/products/ipad-displays"),
  term("MacBook (?:parts|displays?|batter(?:y|ies)|repair)", "/products/macbook-parts"),
  term("(?:phone |GaN |USB-C )?chargers?|power banks?", "/products/charging-accessories"),
  term("(?:TWS )?earbuds|audio accessories|Bluetooth speakers?", "/products/audio-accessories"),
  term("phone displays?|phone screens?|display assembl(?:y|ies)", "/products/phone-parts-programme"),
  term("sunflower (?:seed )?oil", "/products/sunflower-oil"),
  term("soya?bean oil", "/products/soyabean-oil"),
  term("(?:skimmed )?milk powder|SMP", "/products/milk-powder"),
  term("refined sugar|sugar imports?", "/products/sugar"),
  term("potato exports?|Gulf potato", "/products/potato-gulf"),
  term("potato(?:es)?", "/products/potato"),
  term("handicrafts?", "/products/handicrafts"),
  term("pulses|lentils", "/products/pulses"),
  term("chickpeas?", "/products/chickpeas"),
  term("cumin", "/products/cumin"),
  term("tarpaulins?", "/products/tarpaulin"),
  term("almonds?", "/products/almonds"),
  term("Medjool dates?", "/products/medjool-dates"),
  term("soy sauce", "/products/soy-sauce"),
  term("fuel tanks?", "/products/motorcycle-fuel-tanks"),
  term("body panels?", "/products/motorcycle-body-panels"),
  term("brake (?:parts|shoes|pads|components)", "/products/motorcycle-brake-parts"),
  // Guides
  term("Soft OLED|Hard OLED|Incell", "/blog/iphone-display-grades-soft-oled-hard-oled-incell"),
  term("UN38\\.3|dangerous goods", "/blog/phone-battery-import-bangladesh-un38-3-grades"),
  term("battery health|Unknown Part", "/blog/iphone-battery-health-diagnostic-ti-batteries"),
  term("A-number", "/blog/macbook-parts-a-number-sourcing-guide"),
  term("GaN|USB Power Delivery|USB PD", "/blog/phone-charger-import-bangladesh-gan-safety"),
  term("HS codes?|HS classification", "/blog/phone-parts-hs-codes-import-duty-bangladesh"),
  term("total tax incidence|TTI", "/blog/bangladesh-import-real-cost-tti"),
  // Services
  term("customs clearance|clearing agent", "/services/customs"),
  term("SME imports?|consolidated imports?", "/services/sme-import-solutions"),
  term("import(?:ing)? from China|China[- ]to[- ]Bangladesh", "/services/trade-routes/import-from-china"),
  term("landed[- ]cost (?:quote|quoting)", "/quote"),
  // Regulators and official sources
  term("National Board of Revenue|NBR", "https://nbr.gov.bd"),
  term("Bangladesh Customs", "https://bangladeshcustoms.gov.bd"),
  term("Bangladesh Bank", "https://www.bb.org.bd"),
  term("Bangladesh Food Safety Authority|BFSA", "https://bfsa.gov.bd"),
  term("Bangladesh Standards and Testing Institution|BSTI", "https://www.bsti.gov.bd"),
  term("Export Promotion Bureau|EPB", "https://epb.gov.bd"),
  term("Chatt?ogram Port Authority|Chittagong Port Authority", "https://cpa.gov.bd"),
  term("BEPZA", "https://www.bepza.gov.bd"),
  term("Department of Agricultural Extension", "https://dae.gov.bd"),
  term("Bangladesh Trade Portal", "https://www.bangladeshtradeportal.gov.bd"),
  term("SAFTA", "https://www.saarc-sec.org"),
  term("WTO", "https://www.wto.org"),
];

const INTERNAL_CLASS = "text-[#fa6a25] underline font-medium hover:text-[#d9531a]";

function anchor(href: string, text: string) {
  const external = href.startsWith("http");
  const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
  return `<a href="${href}" class="${INTERNAL_CLASS}"${attrs}>${text}</a>`;
}

/** Adds contextual internal and external links to rendered post HTML; `self` is the post's own path */
export function autolink(html: string, self: string): string {
  const existing = new Set([...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/\/$/, "")));
  existing.add(self);
  const used = new Set<string>();
  let added = 0;

  // Walk tags and text; track whether we're inside linkable text
  let inText = 0; // depth of <p>/<li>/<td>
  let blocked = 0; // depth of <a>/<h1-6>/<code>
  return html
    .split(/(<[^>]+>)/)
    .map((part) => {
      if (part.startsWith("<")) {
        const m = part.match(/^<(\/?)([a-z0-9]+)/i);
        if (m) {
          const close = m[1] === "/";
          const tag = m[2].toLowerCase();
          if (/^(p|li|td)$/.test(tag)) inText += close ? -1 : 1;
          if (/^(a|h[1-6]|code|pre)$/.test(tag)) blocked += close ? -1 : 1;
        }
        return part;
      }
      if (!inText || blocked || added >= MAX_LINKS || !part.trim()) return part;

      let text = part;
      for (const t of TERMS) {
        if (added >= MAX_LINKS) break;
        if (used.has(t.href) || existing.has(t.href)) continue;
        const match = text.match(t.pattern);
        if (!match || match.index === undefined) continue;
        // Link only the first match, and don't nest inside a link added to this text node
        const before = text.slice(0, match.index);
        if ((before.match(/<a /g)?.length ?? 0) > (before.match(/<\/a>/g)?.length ?? 0)) continue;
        text = before + anchor(t.href, match[0]) + text.slice(match.index + match[0].length);
        used.add(t.href);
        added++;
      }
      return text;
    })
    .join("");
}
