"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

/** Paths whose links count as lead CTAs */
const CTA_PATH = /^\/(quote|contact)(\/|$|\?|#)/;

/**
 * Collects data-track-* attributes from the link and its ancestors (nearest
 * wins), e.g. data-track-item-name="iPhone 15 OLED" → { item_name: "..." }.
 */
function dataParams(el: Element): Record<string, string> {
  const out: Record<string, string> = {};
  for (let node: Element | null = el; node; node = node.parentElement) {
    if (!(node instanceof HTMLElement)) continue;
    for (const [key, value] of Object.entries(node.dataset)) {
      if (!key.startsWith("track") || key === "track") continue;
      const name = key.slice(5).replace(/[A-Z]/g, (c) => "_" + c.toLowerCase()).replace(/^_/, "");
      if (!(name in out)) out[name] = value ?? "";
    }
  }
  return out;
}

/** Where on the page a link sits: header / footer / main + its section (id or heading) */
function linkArea(link: Element): { area: string; section?: string } {
  if (link.closest("header")) return { area: "header" };
  if (link.closest("footer")) return { area: "footer" };
  const section = link.closest("section");
  const name =
    section?.id ||
    section?.getAttribute("aria-labelledby") ||
    section?.querySelector("h1, h2")?.textContent?.replace(/\s+/g, " ").trim().slice(0, 60);
  return { area: "main", section: name || undefined };
}

/**
 * Site-wide events from one delegated listener, so links need no code:
 * - whatsapp_click / phone_click / email_click (key events)
 * - cta_click: any link to /quote or /contact, with where it sits
 * - nav_click: other links in the header or footer menus
 * Plus route_change (GTM only) on every client-side navigation.
 */
export default function ClickTracker() {
  const pathname = usePathname();

  useEffect(() => {
    track("route_change", {}, { ga: false });
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const label = (link.textContent || link.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim().slice(0, 80);
      const { area, section } = linkArea(link);
      const params = { link_url: href, link_text: label, link_area: area, link_section: section, ...dataParams(link) };

      if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|chat\.whatsapp\.com)/i.test(href)) {
        track("whatsapp_click", params);
      } else if (href.startsWith("tel:")) {
        track("phone_click", params);
      } else if (href.startsWith("mailto:")) {
        track("email_click", params);
      } else if (CTA_PATH.test(href.replace(/^https?:\/\/(www\.)?khi\.com\.bd/, ""))) {
        track("cta_click", { ...params, cta_type: href.includes("contact") ? "contact" : "quote" });
      } else if (area !== "main") {
        track("nav_click", params);
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
