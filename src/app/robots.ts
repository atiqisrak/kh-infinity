import { MetadataRoute } from 'next';

// AI crawlers we explicitly welcome. They share the "*" rules: a bot obeys only
// its most specific group, so a separate { allow: '/' } group would let it
// ignore the disallows below.
const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'PerplexityBot',
  'ClaudeBot',
  'anthropic-ai',
  'Applebot-Extended',
  'Google-Extended',
  'Amazonbot',
  'YouBot',
  'cohere-ai',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ['*', ...AI_BOTS],
        allow: '/',
        // Never block /_next/: Google needs those JS, CSS and font files to render pages
        disallow: ['/api/', '/out/', '/investors/portal', '/investors/admin'],
      },
    ],
    sitemap: [
      'https://khi.com.bd/sitemap.xml',
      'https://khi.com.bd/image-sitemap.xml',
    ],
  };
}
