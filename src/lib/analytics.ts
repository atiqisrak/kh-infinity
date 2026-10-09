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

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  const payload = { page_path: window.location.pathname, ...params };
  if (typeof w.gtag === "function") {
    w.gtag("event", event, payload);
  } else {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event, ...payload });
  }
}
