"use client";

import { onCLS, onFCP, onLCP, onTTFB } from "web-vitals";

function reportMetric(metric: any) {
  console.log(`${metric.name}:`, metric.value, metric.id);
  // You can send to analytics here
}

if (typeof window !== "undefined") {
  onCLS(reportMetric);
  onFCP(reportMetric);
  onLCP(reportMetric);
  onTTFB(reportMetric);
}

