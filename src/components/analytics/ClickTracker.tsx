"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/** Sends whatsapp_click / phone_click / email_click for every matching link on the site */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const label = (link.textContent || link.getAttribute("aria-label") || "").trim().slice(0, 80);
      if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|chat\.whatsapp\.com)/i.test(href)) {
        track("whatsapp_click", { link_url: href, link_text: label });
      } else if (href.startsWith("tel:")) {
        track("phone_click", { link_url: href, link_text: label });
      } else if (href.startsWith("mailto:")) {
        track("email_click", { link_url: href, link_text: label });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
