/**
 * services-data.ts
 *
 * Single source of truth for the service catalog.
 * Used by:
 *  - /services hub page (category cards)
 *  - /services/[category] overview pages (service link lists)
 *  - Individual detail pages (breadcrumbs, related services)
 */

// ── Types ─────────────────────────────────────────────────────────

export type ServiceLink = {
  /** URL-safe slug for the detail page, e.g. "chimney-repair" */
  slug: string
  title: string
  href: string
  /** One sentence — used in overview cards and schema markup */
  description: string
}

export type ServiceCategory = {
  slug: string
  title: string
  href: string
  /** Short blurb for the hub page card */
  description: string
  services: ServiceLink[]
}

// ── Catalog ───────────────────────────────────────────────────────

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: 'chimney',
    title: 'Chimney Services',
    href: '/services/chimney',
    description:
      'Full-spectrum chimney care — from routine annual cleanings to complex full rebuilds — keeping every fireplace safe and code-compliant.',
    services: [
      {
        slug: 'chimney-inspection',
        title: 'Chimney Inspections & Cleanings',
        href: '/services/chimney-inspection',
        description:
          'NFPA 211 Level 1, 2, and 3 inspections plus annual sweepings to remove creosote and keep your flue clear.',
      },
      {
        slug: 'chimney-repair',
        title: 'Chimney Repair & Rebuilds',
        href: '/services/chimney-repair',
        description:
          'Tuckpointing, crown repair, spalling brick restoration, and full chimney rebuilds to stop water damage and restore structural integrity.',
      },
      {
        slug: 'chimney-liners',
        title: 'Chimney Liners & Caps',
        href: '/services/chimney',
        description:
          'Stainless-steel and cast-in-place liner installations sized for your appliance, plus caps and chase covers.',
      },
      {
        slug: 'fireplace-inserts',
        title: 'Fireplace & Wood Stove Inserts',
        href: '/services/chimney',
        description:
          'Wood, gas, and pellet insert installations with complete liner sizing and final clearance inspections.',
      },
    ],
  },
  {
    slug: 'roofing',
    title: 'Roofing',
    href: '/services/roofing',
    description:
      'Roof replacements, leak repairs, and storm-damage assessments using quality shingles rated for harsh local winters.',
    services: [
      {
        slug: 'roof-replacement',
        title: 'Roof Replacement',
        href: '/services/roofing',
        description:
          'Full tear-off and re-roof with architectural shingles and proper ice-and-water shield for local weather.',
      },
      {
        slug: 'roof-repair',
        title: 'Roof Repair',
        href: '/services/roofing',
        description:
          'Targeted repairs for leaks, missing shingles, damaged flashing, and post-storm damage.',
      },
      {
        slug: 'roof-inspection',
        title: 'Roof Inspection',
        href: '/services/roofing',
        description:
          'Comprehensive inspection with a written report — ideal before buying a home or after a major storm.',
      },
    ],
  },
  {
    slug: 'exteriors',
    title: 'Exteriors & Siding',
    href: '/services/exteriors',
    description:
      'Vinyl, fiber-cement, and wood siding installations and repairs to improve curb appeal and weatherproof your home.',
    services: [
      {
        slug: 'siding-installation',
        title: 'Siding Installation',
        href: '/services/exteriors',
        description:
          'Full siding replacement in vinyl, fiber cement, or wood — matched to your style and budget.',
      },
      {
        slug: 'siding-repair',
        title: 'Siding Repair',
        href: '/services/exteriors',
        description:
          "Patch, replace, or re-seal damaged panels to restore your home\u2019s weatherproof barrier.",
      },
    ],
  },
]

// ── Helper — flat list of all detail-page service links ───────────

export const ALL_SERVICES: ServiceLink[] = SERVICE_CATEGORIES.flatMap(
  (cat) => cat.services,
)

// ── Helper — find category by slug ────────────────────────────────

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((c) => c.slug === slug)
}
