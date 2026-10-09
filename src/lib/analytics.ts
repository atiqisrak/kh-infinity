/**
 * Site analytics: GA4 (gtag.js, direct), Google Tag Manager and Clarity.
 *
 * track() sends an event to GA4 and pushes the same {event, ...params} to
 * GTM's dataLayer, so every event below is a GTM "Custom Event" trigger.
 * The full event list, parameters and GTM setup are in docs/analytics-events.md.
 *
 * Key events in GA4 (Admin → Events): quote_submit, contact_submit,
 * whatsapp_click, phone_click.
 */
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

/** Env value wins; "off" disables; otherwise the KHI default */
const tagId = (env: string | undefined, fallback: string) =>
  env === "off" ? undefined : env || fallback;

/** GA4 property, loaded directly via gtag.js */
export const GA_ID = tagId(process.env.NEXT_PUBLIC_GA_ID, "G-SGMRSY9PLE");
/** Google Tag Manager container */
export const GTM_ID = tagId(process.env.NEXT_PUBLIC_GTM_ID, "GTM-PDTJBJ95");
/** Microsoft Clarity (heatmaps + session recordings), project "K.H. Infinity website" */
export const CLARITY_ID = tagId(process.env.NEXT_PUBLIC_CLARITY_ID, "yuxcoe8fsr");

type Params = Record<string, string | number | boolean | undefined>;

/**
 * @param options.ga false = GTM dataLayer only (e.g. route_change, which GA4
 *   already covers with its own page_view)
 */
export function track(event: string, params: Params = {}, { ga = true }: { ga?: boolean } = {}) {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  const payload = { page_path: window.location.pathname, page_type: pageType(window.location.pathname), ...params };
  w.dataLayer = w.dataLayer || [];
  if (ga && typeof w.gtag === "function") w.gtag("event", event, payload);
  // GTM "Custom Event" triggers only see {event} pushes, not gtag() calls.
  // If GTM also has GA4 event tags for these, set NEXT_PUBLIC_GA_ID=off.
  if (GTM_ID || typeof w.gtag !== "function") w.dataLayer.push({ event, ...payload });
}

/** Coarse page template, sent with every event (GA4 dimension / GTM variable) */
export function pageType(path: string): string {
  if (path === "/") return "home";
  const [first, second] = path.split("/").filter(Boolean);
  switch (first) {
    case "products":
      return second ? "product" : "product_list";
    case "blog":
      return second ? "blog_post" : "blog_list";
    case "services":
    case "trade-routes":
    case "customs-clearance-service":
    case "imports":
    case "exports":
      return "service";
    case "about":
    case "awards":
    case "events":
    case "news":
      return "company";
    case "faq":
      return "faq";
    case "privacy":
    case "terms":
    case "equal-opportunity":
      return "legal";
    case "industries":
      return "industry";
    case "quote":
    case "contact":
      return first;
    case "investors":
      return "investors";
    case "careers":
      return "careers";
    default:
      return "other";
  }
}

/**
 * Funnel events for one form: form_start (first field touched, once),
 * then <submitEvent> on success or form_error on failure.
 */
export function formTracker(formName: string, submitEvent: string, extra: Params = {}) {
  let started = false;
  return {
    start() {
      if (started) return;
      started = true;
      track("form_start", { form_name: formName, ...extra });
    },
    submitted(params: Params = {}) {
      track(submitEvent, { form_name: formName, ...extra, ...params });
      started = false;
    },
    failed(message: string) {
      track("form_error", { form_name: formName, error_message: message.slice(0, 100), ...extra });
    },
  };
}
