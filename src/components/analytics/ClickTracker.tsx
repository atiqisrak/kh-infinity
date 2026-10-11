"use client";

import { useEffect } from "react";
import { capture, track } from "@/lib/analytics";

const DOWNLOAD = /\.(pdf|xlsx?|docx?|csv|zip)(\?|#|$)/i;
const LEAD_PATHS = /^\/(quote|contact)(\/|\?|#|$)/;

/** Where on the page a link sits: an explicit data-placement, else the nearest landmark or section */
function placementOf(el: Element) {
  const tagged = el.closest<HTMLElement>("[data-placement]");
  if (tagged) return tagged.dataset.placement;
  const landmark = el.closest("header, footer, nav, dialog, [role=dialog], section");
  if (!landmark) return "body";
  const tag = landmark.tagName.toLowerCase();
  if (tag !== "section") return tag === "dialog" || landmark.getAttribute("role") === "dialog" ? "dialog" : tag;
  const labelledBy = landmark.getAttribute("aria-labelledby");
  const heading = labelledBy && document.getElementById(labelledBy)?.textContent;
  return (landmark.getAttribute("aria-label") || heading || landmark.id || "section").trim().slice(0, 60);
}

/**
 * Site-wide, delegated tracking, so individual links and forms need no code:
 * - whatsapp_click / phone_click / email_click → GA4 + GTM + PostHog
 * - cta_click (links to /quote, /contact), outbound_click, file_download → PostHog
 * - form_started: first field focused in a form, once per form per page → PostHog.
 *   Name forms with data-form="…"; it pairs with the form's *_submit event.
 */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const props = {
        link_url: href,
        link_text: (link.textContent || link.getAttribute("aria-label") || "").trim().slice(0, 80),
        placement: placementOf(link),
      };
      if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|chat\.whatsapp\.com)/i.test(href)) {
        track("whatsapp_click", props);
      } else if (href.startsWith("tel:")) {
        track("phone_click", props);
      } else if (href.startsWith("mailto:")) {
        track("email_click", props);
      } else if (DOWNLOAD.test(href)) {
        capture("file_download", props);
      } else if (link.host && link.host !== window.location.host) {
        capture("outbound_click", { ...props, link_domain: link.hostname });
      } else if (LEAD_PATHS.test(link.pathname)) {
        capture("cta_click", { ...props, destination: link.pathname });
      }
    };

    const started = new WeakSet<HTMLFormElement>();
    const onFocus = (e: FocusEvent) => {
      const form = (e.target as Element | null)?.closest?.("form");
      if (!form || started.has(form)) return;
      started.add(form);
      capture("form_started", {
        form: form.dataset.form || form.getAttribute("aria-label") || form.id || "unnamed",
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("focusin", onFocus);
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("focusin", onFocus);
    };
  }, []);
  return null;
}
