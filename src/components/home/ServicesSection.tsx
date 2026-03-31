'use client'

import Link from 'next/link'
import { motion, cubicBezier } from 'framer-motion'
import {
  Search,
  Wrench,
  Shield,
  Flame,
  Home,
  Layers,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'

// ── Service card data ─────────────────────────────────────────────
//
// Descriptions are benefit-focused ("what it does for you") rather
// than feature-focused ("what we do").  Tags surface quick scannable
// details for visitors who skim before reading.

type ServiceItem = {
  icon: LucideIcon
  title: string
  description: string
  href: string
  tags: string[]
}

const SERVICES: ServiceItem[] = [
  {
    icon: Search,
    title: 'Chimney Inspections & Cleanings',
    description:
      'Know your chimney is safe before the first fire of the season. Our CSIA-certified Level 1, 2, and 3 inspections catch hidden cracks, blockages, and creosote buildup — the leading cause of chimney fires — before they become emergencies.',
    href: '/services/chimney',
    tags: ['Level 1 · 2 · 3', 'CSIA Certified', 'Annual Cleanings'],
  },
  {
    icon: Wrench,
    title: 'Chimney Repairs & Rebuilds',
    description:
      'Cracked crowns, spalling brick, and deteriorated mortar let water in every Wisconsin winter. We tuckpoint, patch, and — when needed — fully rebuild chimneys to restore structural integrity and stop the damage cycle.',
    href: '/services/chimney',
    tags: ['Tuckpointing', 'Crown Repair', 'Full Rebuilds'],
  },
  {
    icon: Shield,
    title: 'Chimney Liners & Caps',
    description:
      "A compromised liner exposes your home to carbon monoxide and fire. We install stainless-steel and cast-in-place liners sized to your appliance, and pour new crowns that shrug off Wisconsin's freeze-thaw cycles.",
    href: '/services/chimney',
    tags: ['Stainless Steel', 'Cast-in-Place', 'Cap Installation'],
  },
  {
    icon: Flame,
    title: 'Fireplace & Wood Stove Inserts',
    description:
      'An open fireplace loses up to 90% of its heat up the flue. A properly sized insert or freestanding stove turns that same firebox into an efficient heat source — and we handle the complete installation, liner sizing, and final clearance inspection.',
    href: '/services/chimney',
    tags: ['Wood', 'Gas', 'Pellet', 'Full Installation'],
  },
  {
    icon: Home,
    title: 'Roofing Services',
    description:
      'One call covers roof replacements, leak repairs, and post-storm assessments. We use quality shingles rated for Wisconsin winters and work directly with your insurance adjuster when storm damage is involved.',
    href: '/services/roofing',
    tags: ['Replacement', 'Repairs', 'Storm Damage', 'Insurance Claims'],
  },
  {
    icon: Layers,
    title: 'Siding & Exterior Work',
    description:
      'New siding is the fastest way to improve curb appeal and add a weatherproof barrier between your home and Wisconsin weather. We install and repair vinyl, fiber cement, and wood siding to match your style and budget.',
    href: '/services/exteriors',
    tags: ['Vinyl', 'Fiber Cement', 'Wood', 'Repairs'],
  },
]

// ── Animation variants ────────────────────────────────────────────

const headingVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
}

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
}

// ─────────────────────────────────────────────────────────────────

export default function ServicesSection() {
  return (
    <section
      id='services'
      className='bg-white py-20 lg:py-28'
      aria-labelledby='services-heading'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* ── Section header ──────────────────────────────────── */}
        <motion.div
          className='mx-auto max-w-2xl text-center mb-14 lg:mb-16'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-60px' }}
          variants={headingVariants}>
          <span className='inline-flex items-center rounded-full border border-brand-orange/25 bg-brand-orange-light px-4 py-1.5 text-xs font-bold tracking-widest text-brand-orange uppercase mb-5'>
            What We Do
          </span>

          <h2
            id='services-heading'
            className='font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem]'>
            Home Protection,{' '}
            <span className='text-brand-orange'>Top to Bottom</span>
          </h2>

          <p className='mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg'>
            Chimney crown to roof ridge to siding panels — one trusted local
            crew handles every part of your home&rsquo;s exterior.
          </p>
        </motion.div>

        {/* ── Service card grid ────────────────────────────────── */}
        <motion.div
          className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
          variants={gridVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}>
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>

        {/* ── Bottom nudge ─────────────────────────────────────── */}
        <motion.div
          className='mt-14 text-center'
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.15 }}>
          <p className='mb-4 text-sm text-muted-foreground'>
            Not sure what you need? We&rsquo;ll walk you through it — at no
            charge.
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 rounded-md bg-brand-navy px-6 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-navy-dark'>
            Schedule a Free Assessment
            <ArrowRight className='h-4 w-4' />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ── ServiceCard ───────────────────────────────────────────────────

function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon

  return (
    <motion.article
      variants={cardVariants}
      className={[
        'group relative flex flex-col rounded-2xl border border-border bg-white p-7',
        'shadow-sm',
        /* hover: lift + orange border + amplified shadow */
        'transition-all duration-300',
        'hover:-translate-y-1.5',
        'hover:border-brand-orange/35',
        'hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12),0_4px_16px_-4px_rgba(0,0,0,0.06)]',
      ].join(' ')}>
      {/* Left accent bar — slides in from 0 opacity on hover */}
      <span
        className='absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full bg-brand-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        aria-hidden='true'
      />

      {/* Icon badge */}
      <div
        className={[
          'mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl',
          'bg-brand-orange-light text-brand-orange',
          'transition-colors duration-300',
          'group-hover:bg-brand-orange group-hover:text-white',
        ].join(' ')}
        aria-hidden='true'>
        <Icon className='h-6 w-6' strokeWidth={1.75} />
      </div>

      {/* Title */}
      <h3 className='font-heading text-[17px] font-bold leading-snug text-foreground mb-3 transition-colors duration-200 group-hover:text-brand-navy'>
        {service.title}
      </h3>

      {/* Description — grows to push tags + link to bottom */}
      <p className='flex-1 text-sm leading-relaxed text-muted-foreground'>
        {service.description}
      </p>

      {/* Tags */}
      <div className='mt-4 flex flex-wrap gap-1.5' aria-label='Service types'>
        {service.tags.map((tag) => (
          <span
            key={tag}
            className='rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground'>
            {tag}
          </span>
        ))}
      </div>

      {/* Learn More */}
      <Link
        href={service.href}
        className='group/link mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange transition-colors duration-200 hover:text-brand-orange-hover'
        aria-label={`Learn more about ${service.title}`}>
        Learn More
        <ArrowRight
          className='h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5'
          aria-hidden='true'
        />
      </Link>
    </motion.article>
  )
}
