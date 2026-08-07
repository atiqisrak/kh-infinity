import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/blog';
import { getProducts } from '@/lib/products';
import { getActiveJobs } from '@/lib/jobs';

const CONTENT_UPDATED = '2026-08-07';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://khi.com.bd';

  const mainPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: CONTENT_UPDATED, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/imports`, lastModified: CONTENT_UPDATED, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/exports`, lastModified: CONTENT_UPDATED, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/products`, lastModified: CONTENT_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/careers`, lastModified: CONTENT_UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: CONTENT_UPDATED, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/news`, lastModified: CONTENT_UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/awards`, lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/events`, lastModified: CONTENT_UPDATED, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/quote`, lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: CONTENT_UPDATED, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: CONTENT_UPDATED, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/equal-opportunity`, lastModified: CONTENT_UPDATED, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/industries`, lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/trade-routes`, lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/products/potato-gulf`, lastModified: CONTENT_UPDATED, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services/customs`, lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/services/sme-import-solutions`, lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
  ];

  const blogPosts = getBlogPosts();
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const productPages = getProducts().map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: product.updatedAt ?? CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const industryPages: MetadataRoute.Sitemap = [
    'agriculture', 'fmcg', 'hospitality', 'manufacturing', 'retail',
  ].map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const tradeRoutePages: MetadataRoute.Sitemap = [
    'import-from-china',
    'import-from-middle-east',
    'export-to-middle-east',
  ].map((slug) => ({
    url: `${baseUrl}/services/trade-routes/${slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const activeJobs = getActiveJobs();
  const jobPages = activeJobs.map((job) => ({
    url: `${baseUrl}/careers/${job.id}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const jobApplyPages = activeJobs.map((job) => ({
    url: `${baseUrl}/careers/apply/${job.id}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: 'weekly' as const,
    priority: 0.55,
  }));

  return [
    ...mainPages,
    ...blogPages,
    ...productPages,
    ...industryPages,
    ...tradeRoutePages,
    ...jobPages,
    ...jobApplyPages,
  ];
}
