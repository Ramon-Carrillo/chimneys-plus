'use client'

import { motion, cubicBezier } from 'framer-motion'
import {
  Zap,
  ShieldCheck,
  HardHat,
  ThumbsUp,
  Handshake,
  type LucideIcon,
} from 'lucide-react'

// ── Benefit data ──────────────────────────────────────────────────

type Benefit = {
  icon: LucideIcon
  title: string
  body: string
}

const BENEFITS: Benefit[] = [
  {
    icon: Zap,
    title: 'Fast Response',
    body: 'We answer the phone and aim to schedule your visit within 48 hours. For urgent issues like chimney leaks or storm damage, we prioritize same-week service.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    body: 'Fully licensed and carrying general liability plus workers\u2019 compensation. You\u2019re protected from the moment our truck pulls up.',
  },
  {
    icon: HardHat,
    title: '[Certification]-Certified Technicians',
    body: 'Our chimney professionals hold current [Certification] certifications \u2014 the national benchmark for safe, code-compliant chimney work.',
  },
  {
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
    body: 'We don\u2019t call a job done until you\u2019re satisfied. Every project ends with a walkthrough so you can see exactly what was done and ask questions.',
  },
  {
    icon: Handshake,
    title: 'Honest, Upfront Pricing',
    body: 'Free estimates with no hidden charges. We explain every line of the quote in plain language and won\u2019t recommend work you don\u2019t actually need.',
  },
]

// ── Animation variants ────────────────────────────────────────────

const ease = cubicBezier(0.22, 1, 0.36, 1)

const headingVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

// ─────────────────────────────────────────────────────────────────

export default function WhyChooseUs() {
  return (
    <section
      id='why-choose-us'
      className='bg-brand-navy py-20 lg:py-28'
      aria-labelledby='why-heading'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

        {/* ── Section header ──────────────────────────────────── */}
        <motion.div
          className='mx-auto max-w-2xl text-center mb-14 lg:mb-16'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-60px' }}
          variants={headingVariants}>
          <span className='inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/15 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-orange uppercase mb-5'>
            Why Choose Us
          </span>

          <h2
            id='why-heading'
            className='font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]'>
            The{' '}
            <span className='text-brand-orange'>Difference</span>
          </h2>

          <p className='mt-4 text-base leading-relaxed text-white/60 sm:text-lg'>
            Every contractor says they do quality work. Here&rsquo;s what
            actually sets us apart.
          </p>
        </motion.div>

        {/* ── Benefit cards ────────────────────────────────────── */}
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'
          variants={gridVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}>
          {BENEFITS.map((benefit) => (
            <BenefitCard key={benefit.title} benefit={benefit} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}

// ── BenefitCard ───────────────────────────────────────────────────

function BenefitCard({ benefit }: { benefit: Benefit }) {
  const Icon = benefit.icon

  return (
    <motion.div
      variants={cardVariants}
      className={[
        'group relative flex flex-col gap-4 rounded-2xl p-7',
        'border border-white/10 bg-white/5',
        'transition-all duration-300',
        'hover:border-brand-orange/40 hover:bg-white/10',
      ].join(' ')}>
      {/* Top accent line — slides in on hover */}
      <span
        className='absolute inset-x-8 top-0 h-[2px] rounded-b-full bg-brand-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        aria-hidden='true'
      />

      {/* Icon */}
      <div
        className={[
          'inline-flex h-12 w-12 items-center justify-center rounded-xl',
          'bg-brand-orange/15 text-brand-orange',
          'transition-colors duration-300',
          'group-hover:bg-brand-orange group-hover:text-white',
        ].join(' ')}
        aria-hidden='true'>
        <Icon className='h-6 w-6' strokeWidth={1.75} />
      </div>

      {/* Title */}
      <h3 className='font-heading text-[17px] font-bold leading-snug text-white'>
        {benefit.title}
      </h3>

      {/* Body */}
      <p className='text-sm leading-relaxed text-white/55'>{benefit.body}</p>
    </motion.div>
  )
}
