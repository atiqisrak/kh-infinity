import sitemap from "@/app/sitemap";

/**
 * IndexNow submission (Bing, Yandex, Naver, Seznam; Bing also feeds ChatGPT
 * search and Copilot). Replaces the old Google/Bing sitemap "ping" endpoints,
 * which were retired in 2023 and no longer do anything.
 *
 * Google does not support IndexNow. For Google, keep the sitemap submitted in
 * Search Console and use URL Inspection → Request indexing for key pages.
 *
 * Key file: /public/<INDEXNOW_KEY>.txt must contain exactly the key.
 */
export const INDEXNOW_KEY = "11c3018b975ceec3fcc72c711f595269";
const HOST = "khi.com.bd";

export async function pingSearchEngines(
  urls?: string[]
): Promise<{ indexnow: boolean; submitted: number }> {
  const urlList = (urls ?? sitemap().map((entry) => entry.url)).slice(0, 10000);

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
      signal: AbortSignal.timeout(10000),
    });
    // 200 = accepted, 202 = accepted, key validation pending
    return { indexnow: res.ok, submitted: urlList.length };
  } catch {
    return { indexnow: false, submitted: 0 };
  }
}
