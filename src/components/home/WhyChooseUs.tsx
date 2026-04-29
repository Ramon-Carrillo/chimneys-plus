import {
  Zap,
  ShieldCheck,
  HardHat,
  ThumbsUp,
  Handshake,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

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
    body: 'Fully licensed and carrying general liability plus workers’ compensation. You’re protected from the moment our truck pulls up.',
  },
  {
    icon: HardHat,
    title: 'CSIA-Certified Technicians',
    body: 'Our chimney professionals hold current CSIA certifications — the national benchmark for safe, code-compliant chimney work.',
  },
  {
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
    body: 'We don’t call a job done until you’re satisfied. Every project ends with a walkthrough so you can see exactly what was done and ask questions.',
  },
  {
    icon: Handshake,
    title: 'Honest, Upfront Pricing',
    body: 'Free estimates with no hidden charges. We explain every line of the quote in plain language and won’t recommend work you don’t actually need.',
  },
]

// ─────────────────────────────────────────────────────────────────

export default function WhyChooseUs() {
  return (
    <section
      id='why-choose-us'
      className='bg-brand-navy py-20 lg:py-28'
      aria-labelledby='why-heading'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

        {/* ── Section header ──────────────────────────────────── */}
        <Reveal className='mx-auto max-w-2xl text-center mb-14 lg:mb-16'>
          <span className='inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/15 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-orange uppercase mb-5'>
            Why Choose Us
          </span>

          <h2
            id='why-heading'
            className='font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]'>
            The{' '}
            <span className='text-brand-orange'>Difference</span>
          </h2>

          <p className='mt-4 text-base leading-relaxed text-white/70 sm:text-lg'>
            Every contractor says they do quality work. Here&rsquo;s what
            actually sets us apart.
          </p>
        </Reveal>

        {/* ── Benefit cards ────────────────────────────────────── */}
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 90}>
              <BenefitCard benefit={benefit} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

// ── BenefitCard ───────────────────────────────────────────────────

function BenefitCard({ benefit }: { benefit: Benefit }) {
  const Icon = benefit.icon

  return (
    <div
      className={[
        'group relative flex h-full flex-col gap-4 rounded-2xl p-7',
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
          'group-hover:bg-brand-orange group-hover:text-brand-navy-dark',
        ].join(' ')}
        aria-hidden='true'>
        <Icon className='h-6 w-6' strokeWidth={1.75} />
      </div>

      {/* Title */}
      <h3 className='font-heading text-[17px] font-bold leading-snug text-white'>
        {benefit.title}
      </h3>

      {/* Body */}
      <p className='text-sm leading-relaxed text-white/70'>{benefit.body}</p>
    </div>
  )
}
