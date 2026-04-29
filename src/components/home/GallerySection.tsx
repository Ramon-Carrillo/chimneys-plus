import Link from 'next/link'
import { ArrowRight, Camera } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

// ─────────────────────────────────────────────────────────────────
//
// TODO: Once real project photos are available, restore the full
// masonry gallery. See git history for the previous implementation
// with GalleryCard components and picsum.photos placeholders.
//
// SHOT LIST to collect from client (aim for 6-10 photos):
//   - Chimney rebuild or tuckpointing (before AND after if possible)
//   - Chimney crown repair or new cap installation
//   - Roof replacement (aerial or from ladder)
//   - Siding project (full side of house)
//   - Fireplace insert installation
//   - Crew working on a local home (with homeowner permission)
//
// Save photos to /public/images/gallery/ and update this component.

export default function GallerySection() {
  return (
    <section
      id='projects'
      className='bg-white py-20 lg:py-28'
      aria-labelledby='gallery-heading'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

        {/* ── Section header ──────────────────────────────────── */}
        <Reveal className='mx-auto max-w-2xl text-center mb-14 lg:mb-16'>
          <span className='inline-flex items-center rounded-full border border-brand-orange/25 bg-brand-orange-light px-4 py-1.5 text-xs font-bold tracking-widest text-accent-foreground uppercase mb-5'>
            Our Work
          </span>

          <h2
            id='gallery-heading'
            className='font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem]'>
            Real Projects,{' '}
            <span className='text-brand-orange'>Real Results</span>
          </h2>

          <p className='mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg'>
            We&rsquo;re building our project gallery with photos from real chimney,
            roofing, and exterior work we&rsquo;ve completed for local homeowners.
          </p>
        </Reveal>

        {/* ── Coming-soon placeholder ─────────────────────────── */}
        <Reveal
          delay={150}
          className='mx-auto max-w-lg text-center rounded-2xl border-2 border-dashed border-border bg-muted/30 px-8 py-16'>
          <div className='mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-orange-light text-accent-foreground'>
            <Camera className='h-8 w-8' strokeWidth={1.5} aria-hidden='true' />
          </div>
          <h3 className='font-heading text-lg font-bold text-foreground mb-2'>
            Project Photos Coming Soon
          </h3>
          <p className='text-sm leading-relaxed text-muted-foreground mb-6'>
            Want to see examples of our work in person? Get in touch and
            we&rsquo;ll share before-and-after photos from jobs in your area.
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 rounded-md bg-brand-navy px-6 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-navy-dark'>
            Request Project Examples
            <ArrowRight className='h-4 w-4' aria-hidden='true' />
          </Link>
        </Reveal>

      </div>
    </section>
  )
}
