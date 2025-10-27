#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🔍 Running Lighthouse Performance Check...\n");

const pages = ["/", "/products", "/blog", "/about", "/contact", "/services"];

const results = [];

for (const page of pages) {
  console.log(`Testing ${page}...`);

  try {
    const output = execSync(
      `npx lighthouse http://localhost:3076${page} --quiet --chrome-flags="--headless" --output=json --output-path=/tmp/lighthouse-${page.replace(
        /[^a-z0-9]/gi,
        "_"
      )}.json`,
      { encoding: "utf-8", maxBuffer: 1024 * 1024 * 10 }
    );

    const data = JSON.parse(
      fs.readFileSync(
        `/tmp/lighthouse-${page.replace(/[^a-z0-9]/gi, "_")}.json`,
        "utf8"
      )
    );

    const metrics = data.audits;
    const pageResult = {
      url: page,
      performance: Math.round(data.categories.performance.score * 100),
      LCP: Math.round(metrics["largest-contentful-paint"].numericValue),
      FCP: Math.round(metrics["first-contentful-paint"].numericValue),
      CLS: metrics["cumulative-layout-shift"].numericValue,
      TTI: Math.round(metrics["interactive"].numericValue),
      TBT: Math.round(metrics["total-blocking-time"].numericValue),
    };

    results.push(pageResult);

    console.log(`  Performance: ${pageResult.performance}/100`);
    console.log(`  LCP: ${pageResult.LCP}ms`);
    console.log(`  FCP: ${pageResult.FCP}ms`);
    console.log(`  CLS: ${pageResult.CLS.toFixed(3)}`);
    console.log(`  TTI: ${pageResult.TTI}ms`);
    console.log(`  TBT: ${pageResult.TBT}ms`);
    console.log("");
  } catch (error) {
    console.error(`Error testing ${page}:`, error.message);
  }
}

// Summary Table
console.log("\n📊 Performance Summary:");
console.log("=".repeat(100));
console.log(
  `URL`.padEnd(20) +
    `Perf`.padEnd(8) +
    `LCP`.padEnd(8) +
    `FCP`.padEnd(8) +
    `CLS`.padEnd(8) +
    `TTI`.padEnd(8) +
    `TBT`
);
console.log("=".repeat(100));

results.forEach((r) => {
  const status = r.performance >= 90 ? "✓" : r.performance >= 50 ? "⚠" : "✗";
  console.log(
    `${r.url}`.padEnd(20) +
      `${status} ${r.performance}`.padEnd(8) +
      `${r.LCP}ms`.padEnd(8) +
      `${r.FCP}ms`.padEnd(8) +
      `${r.CLS.toFixed(3)}`.padEnd(8) +
      `${r.TTI}ms`.padEnd(8) +
      `${r.TBT}ms`
  );
});

console.log("\n📈 Targets:");
console.log("  Performance: ≥ 90");
console.log("  LCP: ≤ 2500ms");
console.log("  FCP: ≤ 1800ms");
console.log("  CLS: ≤ 0.1");
console.log("  TTI: ≤ 3800ms");
console.log("  TBT: ≤ 200ms");

// Check if any page failed
const failed = results.filter(
  (r) => r.performance < 90 || r.LCP > 2500 || r.CLS > 0.1
);

if (failed.length > 0) {
  console.log(`\n⚠️  ${failed.length} page(s) need optimization`);
  process.exit(1);
} else {
  console.log("\n✅ All pages meet performance targets!");
  process.exit(0);
}
