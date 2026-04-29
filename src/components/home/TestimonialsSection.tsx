import { Star, Quote } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

// ── Testimonial data ─────────────────────────────────────────────
//
// TODO: Replace with real customer testimonials before launch.
// Ask the client for 3-5 Google/BBB reviews they'd like featured.
// Include first name, last initial, city, and the review text.

type Testimonial = {
  id: string
  name: string
  location: string
  rating: number
  text: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah M.',
    location: 'Portland, OR',
    rating: 5,
    text: '"[Paste a real 5-star Google review here. Ideal length: 2-3 sentences that mention a specific service like chimney inspection, repair, or roof replacement.]"',
  },
  {
    id: 'testimonial-2',
    name: 'David R.',
    location: 'Portland, OR',
    rating: 5,
    text: '"[Paste a real 5-star Google review here. Ideal: mentions professionalism, timeliness, or fair pricing.]"',
  },
  {
    id: 'testimonial-3',
    name: 'Jennifer K.',
    location: 'Portland, OR',
    rating: 5,
    text: '"[Paste a real 5-star Google review here. Ideal: mentions a specific neighborhood or the crew by name.]"',
  },
]

// ─────────────────────────────────────────────────────────────────

export default function TestimonialsSection() {
  return (
    <section
      id='testimonials'
      className='bg-muted/40 py-20 lg:py-28'
      aria-labelledby='testimonials-heading'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

        {/* ── Section header ──────────────────────────────────── */}
        <Reveal className='mx-auto max-w-2xl text-center mb-14 lg:mb-16'>
          <span className='inline-flex items-center rounded-full border border-brand-orange/25 bg-brand-orange-light px-4 py-1.5 text-xs font-bold tracking-widest text-accent-foreground uppercase mb-5'>
            Testimonials
          </span>

          <h2
            id='testimonials-heading'
            className='font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem]'>
            What Our{' '}
            <span className='text-brand-orange'>Customers Say</span>
          </h2>

          <p className='mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg'>
            Don&rsquo;t just take our word for it &mdash; hear from homeowners
            who&rsquo;ve trusted us with their chimney, roof, and exterior projects.
          </p>
        </Reveal>

        {/* ── Testimonial cards ────────────────────────────────── */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={testimonial.id} delay={i * 100}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

// ── TestimonialCard ──────────────────────────────────────────────

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className='relative flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md'>

      {/* Quote icon */}
      <Quote
        className='h-8 w-8 text-brand-orange/20 mb-4'
        strokeWidth={1.5}
        aria-hidden='true'
      />

      {/* Stars */}
      <div className='flex items-center gap-0.5 mb-4' aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className='h-4 w-4 fill-brand-orange text-brand-orange'
            strokeWidth={0}
            aria-hidden='true'
          />
        ))}
      </div>

      {/* Review text */}
      <p className='flex-1 text-sm leading-relaxed text-muted-foreground'>
        {testimonial.text}
      </p>

      {/* Attribution */}
      <footer className='mt-5 pt-5 border-t border-border'>
        <p className='text-sm font-semibold text-foreground'>
          {testimonial.name}
        </p>
        <p className='text-xs text-muted-foreground mt-0.5'>
          {testimonial.location}
        </p>
      </footer>
    </blockquote>
  )
}
