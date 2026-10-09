/**
 * Sends a conversion event to GA4 (gtag.js) and, when present, to GTM's
 * dataLayer. Safe to call when neither is loaded.
 *
 * Mark these as key events in GA4 (Admin → Events):
 *   quote_submit, contact_submit, whatsapp_click, phone_click,
 *   email_click, investor_inquiry_submit, job_application_submit
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

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  const payload = { page_path: window.location.pathname, ...params };
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag === "function") w.gtag("event", event, payload);
  // GTM "Custom Event" triggers only see {event} pushes, not gtag() calls.
  // If GTM also has GA4 event tags for these, set NEXT_PUBLIC_GA_ID=off.
  if (GTM_ID || typeof w.gtag !== "function") w.dataLayer.push({ event, ...payload });
}
