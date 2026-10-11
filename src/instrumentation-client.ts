import posthog from "posthog-js";

// PostHog product analytics. Tracking plan: docs/analytics.md
// Local dev does not send events (keeps the production project clean);
// set NEXT_PUBLIC_POSTHOG_DEV=on in .env.local to test tracking locally.

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
const isDev = process.env.NODE_ENV === "development";

if (!projectToken || !host) {
  if (isDev) console.warn("PostHog disabled: set NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN and NEXT_PUBLIC_POSTHOG_HOST");
} else {
  posthog.init(projectToken, {
    api_host: host,
    defaults: "2026-01-30",
    // Anonymous visitors stay cheap events; a person profile is created on
    // identifyLead(), and their earlier anonymous visits merge into it.
    person_profiles: "identified_only",
    capture_exceptions: true,
    capture_performance: { web_vitals: true },
    capture_dead_clicks: true,
    enable_heatmaps: true,
    // Replays never record what people type; investor portal pages are
    // blocked entirely with the ph-no-capture class.
    session_recording: { maskAllInputs: true },
    opt_out_capturing_by_default: isDev && process.env.NEXT_PUBLIC_POSTHOG_DEV !== "on",
    debug: isDev,
    // site_section ("products", "blog", "home"…) on every event, for breakdowns
    before_send: (event) => {
      if (event) event.properties.site_section = window.location.pathname.split("/")[1] || "home";
      return event;
    },
  });
}
