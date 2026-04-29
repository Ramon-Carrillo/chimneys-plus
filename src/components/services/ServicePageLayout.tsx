/**
 * ServicePageLayout — RSC
 *
 * Reusable shell for every individual service detail page.
 * Pass page-specific data through props; zero client JS required.
 *
 * Sections rendered (in order):
 *   1. Hero
 *   2. Intro copy
 *   3. Benefits grid (why choose us for THIS service)
 *   4. Problems & Solutions
 *   5. Related services strip
 *   6. CTA banner
 */

import Link from 'next/link'
import { CheckCircle2, Phone, ArrowRight, type LucideIcon } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

// ── Types ─────────────────────────────────────────────────────────

export type Benefit = {
  icon: LucideIcon
  title: string
  body: string
}

export type Problem = {
  title: string
  /** What causes it / what it looks like */
  description: string
  /** How we fix it */
  solution: string
}

export type RelatedService = {
  title: string
  href: string
}

export type ServicePageProps = {
  /** "Chimney Repair" — used in the breadcrumb and H1 */
  serviceTitle: string
  /** Orange pill above H1 */
  eyebrow: string
  /** Full H1 — keep under 60 chars */
  heading: string
  /** Sentence(s) below the H1 */
  subheading: string
  /** 2-4 paragraphs of body copy rendered below hero */
  description: string[]
  benefits: Benefit[]
  problems: Problem[]
  relatedServices?: RelatedService[]
}

// ─────────────────────────────────────────────────────────────────

export default function ServicePageLayout({
  serviceTitle,
  eyebrow,
  heading,
  subheading,
  description,
  benefits,
  problems,
  relatedServices,
}: ServicePageProps) {
  return (
    <main>
      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section
        className='bg-brand-navy py-20 lg:py-28'
        aria-label={`${serviceTitle} hero`}>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl'>
            {/* Breadcrumb */}
            <nav
              aria-label='Breadcrumb'
              className='mb-6 flex items-center gap-2 text-xs text-white/75'>
              <Link href='/' className='hover:text-white/70 transition-colors'>
                Home
              </Link>
              <span aria-hidden='true'>/</span>
              <Link
                href='/services'
                className='hover:text-white/70 transition-colors'>
                Services
              </Link>
              <span aria-hidden='true'>/</span>
              <span className='text-white/75'>{serviceTitle}</span>
            </nav>

            {/* Eyebrow */}
            <span className='inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/15 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-orange uppercase mb-6'>
              {eyebrow}
            </span>

            {/* H1 */}
            <h1 className='font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.2rem] leading-[1.06]'>
              {heading}
            </h1>

            {/* Subheading */}
            <p className='mt-5 max-w-2xl text-lg leading-relaxed text-white/75'>
              {subheading}
            </p>

            {/* CTAs */}
            <div className='mt-9 flex flex-wrap gap-4'>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3.5 text-sm font-bold text-brand-navy-dark shadow-lg shadow-brand-orange/30 transition-all duration-200 hover:bg-brand-orange-hover hover:shadow-xl hover:shadow-brand-orange/40'>
                Get a Free Estimate
                <ArrowRight className='h-4 w-4' aria-hidden='true' />
              </Link>
              <a
                href={COMPANY.phone.mainHref}
                className='inline-flex items-center gap-2.5 rounded-md border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/35 hover:bg-white/[0.16]'>
                <Phone className='h-4 w-4 shrink-0' strokeWidth={2.5} aria-hidden='true' />
                {COMPANY.phone.main}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Intro copy ───────────────────────────────────────── */}
      <section className='bg-white py-16 lg:py-20'>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:px-8'>
          <div className='space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg'>
            {description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Benefits grid ────────────────────────────────────── */}
      <section
        className='bg-muted/40 py-16 lg:py-20'
        aria-labelledby='benefits-heading'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2
              id='benefits-heading'
              className='font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl'>
              Why Choose Us for{' '}
              <span className='text-brand-orange'>{serviceTitle}</span>
            </h2>
          </div>

          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {benefits.map((b) => (
              <BenefitCard key={b.title} benefit={b} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Problems & Solutions ─────────────────────────────── */}
      <section
        className='bg-white py-16 lg:py-20'
        aria-labelledby='problems-heading'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-12'>
            <span className='inline-flex items-center rounded-full border border-brand-orange/25 bg-brand-orange-light px-4 py-1.5 text-xs font-bold tracking-widest text-accent-foreground uppercase mb-4'>
              Common Issues
            </span>
            <h2
              id='problems-heading'
              className='font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl'>
              Problems We See &amp; How We Fix Them
            </h2>
            <p className='mt-3 max-w-2xl text-muted-foreground'>
              Local weather can be hard on exterior masonry and roofing. Here
              are the issues we encounter most often — and exactly what we do
              about them.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            {problems.map((p) => (
              <ProblemCard key={p.title} problem={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Related services ─────────────────────────────────── */}
      {relatedServices && relatedServices.length > 0 && (
        <section className='bg-muted/40 py-12' aria-label='Related services'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <p className='text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-5'>
              Related Services
            </p>
            <div className='flex flex-wrap gap-3'>
              {relatedServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className='inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand-orange/40 hover:text-brand-orange'>
                  {s.title}
                  <ArrowRight className='h-3.5 w-3.5' aria-hidden='true' />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. CTA banner ───────────────────────────────────────── */}
      <section
        className='bg-brand-navy py-16 lg:py-20'
        aria-label='Call to action'>
        <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl'>
            Ready to Schedule Your{' '}
            <span className='text-brand-orange'>{serviceTitle}?</span>
          </h2>
          <p className='mt-4 text-white/75'>
            Free estimates, no obligation. We serve {COMPANY.location.city} and all of{' '}
            {COMPANY.location.region} and typically respond within one business day.
          </p>
          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 rounded-md bg-brand-orange px-7 py-3.5 text-sm font-bold text-brand-navy-dark shadow-lg shadow-brand-orange/30 transition-all duration-200 hover:bg-brand-orange-hover'>
              Request a Free Estimate
              <ArrowRight className='h-4 w-4' aria-hidden='true' />
            </Link>
            <a
              href={COMPANY.phone.mainHref}
              className='inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-white/20'>
              <Phone className='h-4 w-4' strokeWidth={2.5} aria-hidden='true' />
              {COMPANY.phone.main}
            </a>
          </div>
          <p className='mt-5 text-xs text-white/35'>
            Serving {COMPANY.location.serviceAreas.join(' · ')} &amp; all of{' '}
            {COMPANY.location.region}, {COMPANY.location.state}
          </p>
        </div>
      </section>
    </main>
  )
}

// ── BenefitCard ───────────────────────────────────────────────────

function BenefitCard({ benefit }: { benefit: Benefit }) {
  const Icon = benefit.icon
  return (
    <div className='group flex flex-col gap-4 rounded-2xl border border-border bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md'>
      <div
        className='inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange-light text-accent-foreground transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-brand-navy-dark'
        aria-hidden='true'>
        <Icon className='h-6 w-6' strokeWidth={1.75} />
      </div>
      <h3 className='font-heading text-[16px] font-bold leading-snug text-foreground'>
        {benefit.title}
      </h3>
      <p className='text-sm leading-relaxed text-muted-foreground'>{benefit.body}</p>
    </div>
  )
}

// ── ProblemCard ───────────────────────────────────────────────────

function ProblemCard({ problem }: { problem: Problem }) {
  return (
    <div className='rounded-2xl border border-border bg-white p-7 shadow-sm'>
      {/* Problem header */}
      <div className='flex items-start gap-3 mb-4'>
        <span
          className='mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold'
          aria-hidden='true'>
          !
        </span>
        <h3 className='font-heading text-base font-bold text-foreground leading-snug'>
          {problem.title}
        </h3>
      </div>
      <p className='text-sm leading-relaxed text-muted-foreground mb-5'>
        {problem.description}
      </p>

      {/* Solution */}
      <div className='flex items-start gap-3 rounded-xl bg-muted/60 px-4 py-3.5'>
        <CheckCircle2
          className='mt-0.5 h-4 w-4 shrink-0 text-brand-orange'
          strokeWidth={2}
          aria-hidden='true'
        />
        <p className='text-sm leading-relaxed text-foreground'>
          <span className='font-semibold'>Our fix: </span>
          {problem.solution}
        </p>
      </div>
    </div>
  )
}
