'use client'

import Link from 'next/link'
import { motion, cubicBezier } from 'framer-motion'
import { MapPin, CalendarDays, Users, ArrowRight } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

// ── Animation variants ────────────────────────────────────────────

const ease = cubicBezier(0.22, 1, 0.36, 1)

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

// ── Stats ─────────────────────────────────────────────────────────

const STATS = [
  { icon: CalendarDays, value: '10+', label: 'Years of Experience' },
  { icon: Users,        value: '[X,000]+', label: 'Homeowners Helped' },
  { icon: MapPin,       value: '[X]',   label: 'Service Areas' },
] as const

// ─────────────────────────────────────────────────────────────────

export default function AboutSection() {
  return (
    <section
      id='about'
      className='bg-muted/40 py-20 lg:py-28'
      aria-labelledby='about-heading'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center'>

          {/* ── Left: copy ──────────────────────────────────────── */}
          <motion.div
            variants={stagger}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, margin: '-60px' }}>

            <motion.span
              variants={fadeUp}
              className='inline-flex items-center gap-2 rounded-full border border-brand-orange/25 bg-brand-orange-light px-4 py-1.5 text-xs font-bold tracking-widest text-brand-orange uppercase mb-5'>
              <MapPin className='h-3.5 w-3.5' aria-hidden='true' />
              {COMPANY.location.city} &amp; {COMPANY.location.region}, {COMPANY.location.state}
            </motion.span>

            <motion.h2
              id='about-heading'
              variants={fadeUp}
              className='font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl'>
              Local Expertise,{' '}
              <span className='text-brand-orange'>Built on Trust</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className='mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg'>
              {/* TODO: Update with actual company history */}
              {COMPANY.name} has been protecting local homes since 2015.
              We&rsquo;re a locally owned, family-run operation —
              not a franchise — which means every crew member lives in the same
              community, deals with the same brutal winters, and takes
              the same pride in the work they leave behind.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className='mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg'>
              {/* TODO: Update with local service area examples */}
              From a routine chimney cleaning in Beaverton to a full roof
              replacement after a Pacific Northwest storm, we show up on time,
              explain what we&rsquo;re doing in plain language, and don&rsquo;t
              leave until the job is right. Our certified technicians
              carry every license and certification required by the state —
              so you never have to wonder whether the work meets code.
            </motion.p>

            <motion.div variants={fadeUp} className='mt-8'>
              <Link
                href='/about'
                className='inline-flex items-center gap-2 rounded-md bg-brand-navy px-6 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-navy-dark'>
                Our Full Story
                <ArrowRight className='h-4 w-4' aria-hidden='true' />
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right: stats ──────────────────────────────────────── */}
          <motion.div
            variants={stagger}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, margin: '-60px' }}
            className='grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1'>
            {STATS.map(({ icon: Icon, value, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className={[
                  'flex items-center gap-5 rounded-2xl border border-border bg-white p-6',
                  'shadow-sm transition-shadow duration-300 hover:shadow-md',
                ].join(' ')}>
                <div
                  className='flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-orange-light text-brand-orange'
                  aria-hidden='true'>
                  <Icon className='h-7 w-7' strokeWidth={1.75} />
                </div>
                <div>
                  <p className='font-heading text-3xl font-extrabold text-brand-navy leading-none'>
                    {value}
                  </p>
                  <p className='mt-1 text-sm text-muted-foreground'>{label}</p>
                </div>
              </motion.div>
            ))}

            {/* Service area callout */}
            <motion.div
              variants={fadeUp}
              className='rounded-2xl border border-brand-orange/20 bg-brand-orange-light p-6'>
              <p className='text-sm font-semibold text-brand-orange mb-2'>
                Serving all of {COMPANY.location.region}
              </p>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {COMPANY.location.serviceAreas.join(' · ')}
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
