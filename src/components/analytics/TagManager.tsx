import Script from "next/script";
import ClickTracker from "./ClickTracker";
import { CLARITY_ID, GA_ID, GTM_ID } from "@/lib/analytics";

/**
 * Analytics loader. IDs and their env overrides live in src/lib/analytics.ts:
 * - GA4 via gtag.js (G-SGMRSY9PLE). GA4 is NOT also configured inside GTM;
 *   if you move it there, set NEXT_PUBLIC_GA_ID=off to avoid double counting.
 * - Google Tag Manager (GTM-PDTJBJ95). Its <noscript> fallback is
 *   GtmNoScript below, rendered first thing in <body> by the root layout.
 * - Microsoft Clarity (yuxcoe8fsr).
 * CSP allowances live in next.config.js.
 * Script ids must not match a global the snippet uses: <script id="clarity">
 * becomes window.clarity and breaks the Clarity loader.
 */

/** GTM fallback for visitors without JavaScript; belongs right after <body> */
export function GtmNoScript() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}

export default function TagManager() {
  if (!GA_ID && !GTM_ID && !CLARITY_ID) return null;
  return (
    <>
      {CLARITY_ID && (
        <Script id="ms-clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
        </Script>
      )}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      {GTM_ID && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}
      <ClickTracker />
    </>
  );
}
