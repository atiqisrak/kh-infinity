# Analytics tracking plan

Three tools, each with one job:

| Tool | Job |
|---|---|
| **PostHog** (us.posthog.com, project 658693) | Product analytics: funnels, lead journeys, session replay, heatmaps, web vitals, errors |
| **GA4** (G-SGMRSY9PLE) + **GTM** (GTM-PDTJBJ95) | Acquisition reporting and Google Ads conversions |
| **Clarity** (yuxcoe8fsr) | Free heatmaps/recordings; overlaps PostHog replay, can be dropped later |

Code: `src/lib/analytics.ts` (`track`, `capture`, `identifyLead`),
`src/components/analytics/ClickTracker.tsx` (site-wide delegated tracking),
`src/instrumentation-client.ts` (PostHog init).

## Events

`track()` sends to GA4 + GTM + PostHog. `capture()` sends to PostHog only.

| Event | Sent by | When | Key properties |
|---|---|---|---|
| `quote_submit` | track | Quote form sent | product, quantity, destination, has_company, has_specifications |
| `contact_submit` | track | Contact form sent | |
| `investor_inquiry_submit` | track | Investor inquiry sent | partner_type, capital_allocation, has_kyc_file |
| `job_application_submit` | track | Job application sent | job_id, job_title, country, availability |
| `whatsapp_click` / `phone_click` / `email_click` | track | Any wa.me / tel: / mailto: link | link_text, placement |
| `cta_click` | capture | Link to /quote or /contact | link_text, placement, destination |
| `outbound_click` | capture | Link to another domain | link_domain, placement |
| `file_download` | capture | Link to pdf/xlsx/docx/csv/zip | link_url |
| `form_started` | capture | First field focused in a form | form |
| `form_submit_failed` | capture | Form API returned an error | form |
| `trade_route_search` | capture | Route finder used | origin_country, destination_country, lane_found |
| `catalog_item_view` | capture | Parts catalogue item opened | item_name, group, variant |
| `video_play` | capture | Product video played | video_id, video_title |
| `faq_feedback` | capture | FAQ helpful / not helpful | faq_section, faq_item, feedback |
| `investor_portal_login` / `_logout` | capture | Portal sign in / out | |

Automatic (PostHog): `$pageview`, `$pageleave` (with scroll depth), `$autocapture`,
`$web_vitals`, `$exception`, `$dead_click`, heatmaps, session replay.
Every PostHog event carries `site_section` (first URL segment, or `home`).

**placement** says where a click happened: a `data-placement` attribute on the link
or an ancestor, otherwise the nearest header / footer / nav / dialog / section
label. The floating WhatsApp button is `floating_button`.

## People

PostHog creates a person profile only on `identifyLead()`: quote, contact and
investor inquiry submissions, and investor portal sign-in. The email (lowercased)
is the person id, so the anonymous visits before the enquiry (source, UTM,
pages and products viewed) merge into that lead. Job applicants are not identified.

## Privacy

- Session replay masks every input. Investor portal and admin pages carry
  `ph-no-capture`, so they are blocked from replay and autocapture.
- Local dev sends nothing unless `NEXT_PUBLIC_POSTHOG_DEV=on`.

## Adding tracking

- A new form: add `data-form="name"` to the `<form>` (gives `form_started`),
  then call `track("name_submit", {...})` and, for leads, `identifyLead(email, {...})`.
- A conversion that should reach GA4: `track()`. Anything else: `capture()`.
- Use snake_case `object_action` names, and add the event to the table above.

## PostHog project settings (in the PostHog UI, not code)

- Session replay: on (Settings → Session replay)
- Heatmaps and web vitals autocapture: on (Settings → Autocapture)
- Exclude internal traffic: add the office IP under Settings → Filter out internal and test users

## Dashboards to build

1. **Lead funnel**: `$pageview` → `form_started` (form = quote) → `quote_submit`, broken down by `$initial_utm_source`
2. **Contact channels**: `whatsapp_click`, `phone_click`, `email_click`, `quote_submit`, `contact_submit` per week, broken down by `placement`
3. **Product interest**: `$pageview` where `site_section = products`, by `$pathname`; `quote_submit` by `product`
4. **Content → leads**: blog pageviews by post, and leads whose journey included a blog post
5. **Site health**: `$web_vitals` (LCP/INP/CLS) by `site_section`; `$exception` and `form_submit_failed` counts
