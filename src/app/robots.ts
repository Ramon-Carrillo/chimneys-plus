import type { MetadataRoute } from 'next'

/**
 * robots.ts — generates /robots.txt at build time.
 *
 * Everything is publicly crawlable. The sitemap URL is absolute so
 * crawlers can find it regardless of which domain they arrive on.
 *
 * If you add auth-protected routes in the future, add them to the
 * `disallow` array (e.g. '/account', '/admin').
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://chimneysplus.com/sitemap.xml',
  }
}
