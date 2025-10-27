/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Cache Components feature for Next.js 16
  cacheComponents: true,

  // Experimental features
  experimental: {
    // Enable filesystem caching for faster dev startup
    turbopackFileSystemCacheForDev: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    // Next.js 16 default: 4 hours (14400s) for reduced revalidation cost
    minimumCacheTTL: 14400,
    // Remove size 16 (used by only 4.2% of projects)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    // Next.js 16 default quality is now 75 (no longer 1-100 range)
    qualities: [75],
    // Security: block local IP optimization by default
    dangerouslyAllowLocalIP: false,
    // Limit redirect chains to 3 (reduces complexity)
    maximumRedirects: 3,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' cdnjs.cloudflare.com fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: cdnjs.cloudflare.com fonts.gstatic.com; connect-src 'self'; frame-src 'self' https://maps.google.com https://www.google.com;",
          },
        ],
      },
    ];
  },
  allowedDevOrigins: ["http://localhost:3076", "http://127.0.0.1:3076"],
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

module.exports = nextConfig;
