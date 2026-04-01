import type { MetadataRoute } from 'next'

/**
 * sitemap.ts — generates /sitemap.xml at build time.
 *
 * Next.js resolves relative URLs against the metadataBase set in
 * app/layout.tsx (https://chimneysplus.com), so these paths become
 * fully-qualified URLs in the output automatically.
 *
 * Priority guide used here:
 *   1.0  — homepage
 *   0.9  — high-intent conversion pages (contact, services hub)
 *   0.85 — individual service detail pages
 *   0.8  — service category overviews, about
 *   0.6  — supporting pages (projects)
 */

const BASE = 'https://chimneysplus.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    // ── Core ────────────────────────────────────────────────────
    {
      url: BASE,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${BASE}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ── High-intent service detail pages ────────────────────────
    {
      url: `${BASE}/services/chimney-repair`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/services/chimney-inspection`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // ── Service category overviews ───────────────────────────────
    {
      url: `${BASE}/services/chimney`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/services/roofing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/services/exteriors`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ── Supporting pages ────────────────────────────────────────
    {
      url: `${BASE}/about`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${BASE}/projects`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
