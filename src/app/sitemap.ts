import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blog'
import { getProducts } from '@/lib/products'
import { getActiveJobs } from '@/lib/jobs'
import { routing } from '@/i18n/routing'

const CONTENT_UPDATED = '2026-08-07'

function withLocales(
  paths: { path: string; lastModified?: string; changeFrequency?: MetadataRoute.Sitemap[0]['changeFrequency']; priority?: number }[]
): MetadataRoute.Sitemap {
  const baseUrl = 'https://khi.com.bd'
  return routing.locales.flatMap((locale) =>
    paths.map(({ path, lastModified, changeFrequency, priority }) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: lastModified ?? CONTENT_UPDATED,
      changeFrequency: changeFrequency ?? 'monthly',
      priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((loc) => [loc, `${baseUrl}/${loc}${path}`])
        ),
      },
    }))
  )
}

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = withLocales([
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/imports', changeFrequency: 'weekly', priority: 0.95 },
    { path: '/exports', changeFrequency: 'weekly', priority: 0.95 },
    { path: '/products', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/faq', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/careers', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/blog', changeFrequency: 'daily', priority: 0.9 },
    { path: '/news', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/awards', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/events', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/quote', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/equal-opportunity', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/industries', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services/trade-routes', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/potato-gulf', changeFrequency: 'weekly', priority: 0.95 },
    { path: '/services/customs', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/services/sme-import-solutions', changeFrequency: 'monthly', priority: 0.85 },
  ])

  const blogPosts = getBlogPosts()
  const blogPages = withLocales(
    blogPosts.map((post) => ({
      path: `/blog/${post.id}`,
      lastModified: post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  const productPages = withLocales(
    getProducts().map((product) => ({
      path: `/products/${product.id}`,
      lastModified: product.updatedAt ?? CONTENT_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  const industryPages = withLocales(
    ['agriculture', 'fmcg', 'hospitality', 'manufacturing', 'retail'].map((slug) => ({
      path: `/industries/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  const tradeRoutePages = withLocales(
    ['import-from-china', 'import-from-middle-east', 'export-to-middle-east'].map((slug) => ({
      path: `/services/trade-routes/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  const activeJobs = getActiveJobs()
  const jobPages = withLocales(
    activeJobs.map((job) => ({
      path: `/careers/${job.id}`,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  )

  const jobApplyPages = withLocales(
    activeJobs.map((job) => ({
      path: `/careers/apply/${job.id}`,
      changeFrequency: 'weekly' as const,
      priority: 0.55,
    }))
  )

  return [
    ...mainPages,
    ...blogPages,
    ...productPages,
    ...industryPages,
    ...tradeRoutePages,
    ...jobPages,
    ...jobApplyPages,
  ]
}
