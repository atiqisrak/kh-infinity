# Analytics events (GA4 + GTM)

How tracking works on khi.com.bd, every event the site sends, and how to use
them in Google Tag Manager.

- **GA4** `G-SGMRSY9PLE` is loaded directly (gtag.js). It already receives
  every event below, with no GTM tag needed.
- **GTM** `GTM-PDTJBJ95` receives the same events as dataLayer pushes
  (`{event: "quote_submit", form_name: "quote", ...}`), so each one is a
  **Custom Event** trigger. Use GTM for ad platforms and extra tools.
- **Clarity** `yuxcoe8fsr` records sessions and heatmaps.

Code: `src/lib/analytics.ts` (`track()`, `pageType()`, `formTracker()`),
`src/components/analytics/` (loader, click/route tracker, view/read trackers).

> **Do not add GA4 Event tags in GTM for these events.** GA4 already gets them
> directly, so a GTM GA4 tag would count everything twice. To manage GA4 from
> GTM instead, set `NEXT_PUBLIC_GA_ID=off` in Vercel first.

---

## Events

Every event also carries `page_path` and `page_type`
(`home`, `product`, `product_list`, `blog_post`, `blog_list`, `service`,
`industry`, `company`, `quote`, `contact`, `faq`, `investors`, `careers`,
`legal`, `other`).

### Leads (GA4 key events)

| Event | Fires when | Parameters |
|---|---|---|
| `quote_submit` | /quote form or a product page enquiry form is sent successfully | `form_name` (`quote` / `product_enquiry`), `product_name`, `product_id` (product pages), `destination` (/quote) |
| `contact_submit` | /contact message is sent successfully | `form_name` (`contact`) |
| `whatsapp_click` | any WhatsApp link (floating button, catalogue "Ask on WhatsApp", …) | `link_url`, `link_text`, `link_area`, `link_section`, `item_id` / `item_name` (catalogue) |
| `phone_click` | any `tel:` link | same as above |
| `email_click` | any `mailto:` link | same as above |
| `investor_inquiry_submit` | investor inquiry form sent | — |
| `job_application_submit` | job application sent | — |

### Lead funnel

| Event | Fires when | Parameters |
|---|---|---|
| `cta_click` | any link to /quote or /contact | `cta_type` (`quote` / `contact`), `link_text`, `link_area` (`header` / `footer` / `main`), `link_section`, `item_id` / `item_name` (catalogue) |
| `form_start` | first field typed in a lead form (once per form) | `form_name`, `product_id` / `product_name` (product enquiry) |
| `form_error` | a lead form fails to send | `form_name`, `error_message` |

Funnel: `cta_click` → `form_start` → `quote_submit` / `contact_submit`
(or `form_error`).

### Products and catalogues

| Event | Fires when | Parameters |
|---|---|---|
| `product_view` | a product page opens | `product_id`, `product_name`, `product_category`, `product_type` (`import` / `export`) |
| `catalog_item_view` | a parts catalogue item opens in the detail view (or ← / → to the next) | `item_id`, `item_name`, `item_group`, `item_variant` |
| `catalog_filter` | a parts catalogue filter chip is picked | `catalog_name`, `filter_type` (e.g. Brand), `filter_value` |
| `product_filter` | /products direction tab or category is changed | `filter_type` (`direction` / `category`), `filter_value` |
| `search` | /products search, once typing pauses (1.2 s, 2+ chars) | `search_term`, `results_count`, `search_location` |
| `video_play` | a product video is played | `video_id`, `video_title` |

`search` with `results_count = 0` = products buyers look for that are not listed.

### Content and navigation

| Event | Fires when | Parameters |
|---|---|---|
| `blog_read_complete` | reader reaches the end of a blog post | `article_id`, `article_category` |
| `route_search` | trade-routes route finder is submitted | `origin`, `destination`, `route_found`, `route_name` |
| `nav_click` | any other link in the header or footer menus | `link_url`, `link_text`, `link_area` |
| `route_change` | every page view, including in-app navigation. **GTM only** (not sent to GA4, which has its own `page_view`) | `page_path`, `page_type` |

### Adding context to any link

Any element can add parameters to the clicks inside it with `data-track-*`
attributes, e.g. `<div data-track-item-name="iPhone 15 OLED">` adds
`item_name` to `whatsapp_click` / `cta_click` for links inside it.

---

## GTM setup

### 1. Variables

**Variables → Configure** (built-in): tick *Page Path*, *Page URL*,
*Referrer*, *Event*.

**Variables → New → Data Layer Variable**, one per parameter you want to use
in tags (Data Layer Version 2). Recommended names:

| Variable name | Data Layer Variable Name |
|---|---|
| `dlv - page_type` | `page_type` |
| `dlv - form_name` | `form_name` |
| `dlv - product_id` | `product_id` |
| `dlv - product_name` | `product_name` |
| `dlv - product_category` | `product_category` |
| `dlv - item_id` | `item_id` |
| `dlv - item_name` | `item_name` |
| `dlv - cta_type` | `cta_type` |
| `dlv - link_text` | `link_text` |
| `dlv - link_area` | `link_area` |
| `dlv - search_term` | `search_term` |
| `dlv - article_category` | `article_category` |

### 2. Triggers (Trigger type: Custom Event)

| Trigger name | Event name | Use regex |
|---|---|---|
| `CE - Lead submitted` | `quote_submit\|contact_submit` | ✅ |
| `CE - Quote submitted` | `quote_submit` | |
| `CE - Contact submitted` | `contact_submit` | |
| `CE - Chat or call` | `whatsapp_click\|phone_click` | ✅ |
| `CE - CTA click` | `cta_click` | |
| `CE - Form start` | `form_start` | |
| `CE - Product view` | `product_view` | |
| `CE - Catalogue item view` | `catalog_item_view` | |
| `CE - Page view (all, incl. in-app)` | `route_change` | |

Use `CE - Page view (all, incl. in-app)` instead of the built-in "All Pages"
trigger for anything that must fire on every page: the site navigates without
full reloads, so "All Pages" only fires on the first page of a visit.

### 3. Tags worth adding

These are the tags where GTM adds value on top of the direct GA4 setup.

**Google Ads (when you run Google Ads)**
1. *Conversion Linker*: trigger **All Pages**.
2. *Google Ads Conversion Tracking*, one per conversion action you create in
   Google Ads (Goals → Conversions → Website, "Use Google Tag Manager"):
   - "Quote request": trigger `CE - Quote submitted`
   - "Contact message": trigger `CE - Contact submitted`
   - "WhatsApp / call": trigger `CE - Chat or call` (count *One* per click in
     Google Ads settings)
3. *Google Ads Remarketing*: trigger `CE - Page view (all, incl. in-app)`;
   add `product_id` / `page_type` as custom parameters to build audiences
   such as "viewed phone parts, no quote".

Alternatively, link GA4 to Google Ads (GA4 Admin → Google Ads links) and
import the GA4 key events as conversions; then you only need the Conversion
Linker.

**Meta Pixel (when you run Facebook / Instagram ads)**
1. *Custom HTML* tag with the Pixel base code; trigger
   `CE - Page view (all, incl. in-app)` (sends `PageView` on every page).
2. *Custom HTML* `<script>fbq('track','Lead',{content_name:{{dlv - form_name}}});</script>`,
   trigger `CE - Lead submitted`.
3. *Custom HTML* `<script>fbq('track','Contact');</script>`, trigger
   `CE - Chat or call`.
4. *Custom HTML* `<script>fbq('track','ViewContent',{content_ids:[{{dlv - product_id}}],content_name:{{dlv - product_name}}});</script>`,
   trigger `CE - Product view`.

Use Tag Sequencing (Advanced settings → "Fire a tag before") so the base code
fires before tags 2–4.

**LinkedIn Insight Tag (B2B ads)**: LinkedIn's tag template, trigger All
Pages; add a conversion with trigger `CE - Lead submitted`.

> **CSP:** the site's Content-Security-Policy (`next.config.js`) already allows
> Google Ads, Meta Pixel and LinkedIn. Any other vendor must be added there
> first, or the browser blocks its tag. Check the console in Preview mode for
> "Refused to load" errors.

### 4. Test and publish

1. **Preview** → enter `https://khi.com.bd` (disable ad blockers for the site).
2. Click a WhatsApp link, open a catalogue item, start a quote: each event
   appears in the left column; click it to see its Data Layer values and
   which tags fired.
3. **Submit** → name the version (e.g. "Ads conversions + Meta Pixel") →
   **Publish**.

---

## GA4 setup

### Key events
Admin → Data display → Events: mark as key event `quote_submit`,
`contact_submit`, `whatsapp_click`, `phone_click`.

`purchase`, `qualify_lead` and `close_convert_lead` (from GA4's lead
generation template) are **offline sales steps**: nothing on the website can
send them. Either leave them unused, or send them later from your CRM with
the GA4 Measurement Protocol when a lead is qualified or closes.

### Custom dimensions
Event parameters only show in reports after they are registered.
Admin → Data display → Custom definitions → Create custom dimension,
scope **Event**, dimension name = event parameter:

`page_type`, `form_name`, `product_id`, `product_name`, `product_category`,
`item_name`, `item_group`, `cta_type`, `link_area`, `link_section`,
`article_category`, `results_count` (or as a custom metric), `route_found`,
`filter_type`, `filter_value`.

(`search_term`, `link_text`, `link_url`, `video_title` are built into GA4.)

### Enhanced measurement
Admin → Data streams → KH Infinity → Enhanced measurement:
- **Page views → "Page changes based on browser history events": ON**
  (needed for in-app navigation).
- **Form interactions: OFF**: the site sends its own `form_start` /
  `quote_submit` / `contact_submit`; GA's automatic form events would
  duplicate them.
- Scrolls, outbound clicks, file downloads, video engagement: keep ON.

### Useful explorations
- **Funnel**: `cta_click` → `form_start` → `quote_submit`, broken down by
  `page_type`, to see where quote requests drop off.
- **Products**: `product_view` and `catalog_item_view` by `product_name` /
  `item_name`, against `quote_submit` / `whatsapp_click` from the same pages.
- **Unmet demand**: `search` where `results_count` = 0, by `search_term`.
- **Content that converts**: sessions with `blog_read_complete`, by
  `article_category`, that later have a key event.
