import type { MetadataRoute } from 'next'

/**
 * sitemap.ts — generates /sitemap.xml at build time.
 *
 * Keep BASE in sync with SITE_URL in app/layout.tsx and the sitemap
 * URL in app/robots.ts. When the custom domain goes live, update all
 * three to the same value.
 *
 * Priority guide used here:
 *   1.0  — homepage
 *   0.9  — high-intent conversion pages (contact, services hub)
 *   0.85 — individual service detail pages
 *   0.8  — service category overviews, about
 *   0.6  — supporting pages (projects)
 */

const BASE = 'https://chimneys-plus.vercel.app'

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
