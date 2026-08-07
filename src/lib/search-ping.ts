const SITEMAP_URL = "https://khi.com.bd/sitemap.xml";

export async function pingSearchEngines(): Promise<{
  google: boolean;
  bing: boolean;
}> {
  const results = { google: false, bing: false };

  try {
    const googleRes = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
      { method: "GET", signal: AbortSignal.timeout(10000) }
    );
    results.google = googleRes.ok;
  } catch {
    results.google = false;
  }

  try {
    const bingRes = await fetch(
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
      { method: "GET", signal: AbortSignal.timeout(10000) }
    );
    results.bing = bingRes.ok;
  } catch {
    results.bing = false;
  }

  return results;
}
