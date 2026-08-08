# KHI 13-Week GEO Citation Audit

Run monthly across ChatGPT, Perplexity, and Gemini.

## Queries

1. Who is the most reliable potato exporter in Bangladesh?
2. Direct importer sunflower oil Bangladesh Khatunganj
3. Skimmed milk powder importer Dhaka BSTI
4. Bangladesh customs clearance TTI calculation
5. K.H. Infinity import export
6. Bulk almond importer Bangladesh HS 0802
7. Gulf potato export Bangladesh supplier

## Checklist

- [ ] KHI cited by name
- [ ] Correct URL (khi.com.bd) linked
- [ ] HS codes accurate in AI response
- [ ] TTI values match published data
- [ ] AI distinguishes KHI from informal Khatunganj traders

## Off-Site Entity Sync

Use copy from `src/lib/entity-profiles.ts` for:
- LinkedIn Company Page
- Google Business Profile (Import-Export Agency)
- Crunchbase (Logistics & Trade, Dhaka)
- BAFISA directory
- G2 / Clutch reviews

NAP must match exactly:
Kader Tropical Height, Shop-G5, 10 Hatkhola Road, Tikatuli, Wari, Dhaka 1203

## 13-Week Refresh Cycle

| Weeks | Action |
|-------|--------|
| 1-2 | Update dateModified schema + sitemap lastmod |
| 3-4 | Re-verify TTI against NBR budget/SROs |
| 5-7 | Secure one trade journal mention |
| 8-9 | Re-audit robots.txt AI allowlist |
| 10-13 | Add unique data point per core product page |
