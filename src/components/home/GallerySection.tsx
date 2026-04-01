'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, cubicBezier } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// ── Gallery data ──────────────────────────────────────────────────
//
// Placeholder images via picsum.photos (seed-based for consistency).
// Replace src strings with real project photos when available.
// width/height reflect the aspect ratio we want rendered; next/image
// uses these to reserve space and prevent layout shift.

type GalleryItem = {
  id: string
  src: string
  alt: string
  caption: string
  category: 'Chimney' | 'Roofing' | 'Exteriors'
  width: number
  height: number
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'chimney-rebuild-madison',
    src: 'https://picsum.photos/seed/chimney1/800/1060',
    alt: 'Rebuilt brick chimney on a Madison, WI home',
    caption: 'Chimney Rebuild – Madison, WI',
    category: 'Chimney',
    width: 800,
    height: 1060,
  },
  {
    id: 'roof-replacement-sun-prairie',
    src: 'https://picsum.photos/seed/roof1/800/600',
    alt: 'New architectural shingle roof on a Sun Prairie home',
    caption: 'Roof Replacement – Sun Prairie, WI',
    category: 'Roofing',
    width: 800,
    height: 600,
  },
  {
    id: 'chimney-liner-waunakee',
    src: 'https://picsum.photos/seed/liner1/800/700',
    alt: 'Stainless steel chimney liner installation in Waunakee',
    caption: 'Stainless Liner Install – Waunakee, WI',
    category: 'Chimney',
    width: 800,
    height: 700,
  },
  {
    id: 'siding-middleton',
    src: 'https://picsum.photos/seed/siding1/800/900',
    alt: 'New vinyl siding installation on a Middleton, WI home',
    caption: 'Vinyl Siding Replacement – Middleton, WI',
    category: 'Exteriors',
    width: 800,
    height: 900,
  },
  {
    id: 'chimney-crown-poynette',
    src: 'https://picsum.photos/seed/crown1/800/640',
    alt: 'New chimney crown pour on a Poynette home',
    caption: 'Crown Rebuild – Poynette, WI',
    category: 'Chimney',
    width: 800,
    height: 640,
  },
  {
    id: 'roof-repair-dane-county',
    src: 'https://picsum.photos/seed/roof2/800/820',
    alt: 'Storm damage roof repair in Dane County, WI',
    caption: 'Storm Damage Repair – Dane County, WI',
    category: 'Roofing',
    width: 800,
    height: 820,
  },
]

// ── Animation variants ────────────────────────────────────────────

const ease = cubicBezier(0.22, 1, 0.36, 1)

const headingVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

// ─────────────────────────────────────────────────────────────────

export default function GallerySection() {
  return (
    <section
      id='projects'
      className='bg-white py-20 lg:py-28'
      aria-labelledby='gallery-heading'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

        {/* ── Section header ──────────────────────────────────── */}
        <motion.div
          className='mx-auto max-w-2xl text-center mb-14 lg:mb-16'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-60px' }}
          variants={headingVariants}>
          <span className='inline-flex items-center rounded-full border border-brand-orange/25 bg-brand-orange-light px-4 py-1.5 text-xs font-bold tracking-widest text-brand-orange uppercase mb-5'>
            Our Work
          </span>

          <h2
            id='gallery-heading'
            className='font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem]'>
            Real Projects,{' '}
            <span className='text-brand-orange'>Real Results</span>
          </h2>

          <p className='mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg'>
            A sample of chimney, roofing, and exterior work we&rsquo;ve completed
            across Madison and Dane County.
          </p>
        </motion.div>

        {/* ── Masonry grid (CSS columns) ───────────────────────── */}
        <div className='columns-1 gap-5 sm:columns-2 lg:columns-3'>
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ───────────────────────────────────────── */}
        <motion.div
          className='mt-14 text-center'
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}>
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 rounded-md border-2 border-brand-navy px-6 py-3.5 text-sm font-bold text-brand-navy transition-all duration-200 hover:bg-brand-navy hover:text-white'>
            View All Projects
            <ArrowRight className='h-4 w-4' aria-hidden='true' />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

// ── GalleryCard ───────────────────────────────────────────────────

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  return (
    <motion.figure
      className='group relative mb-5 overflow-hidden rounded-2xl bg-muted [break-inside:avoid]'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}>
      {/* Image */}
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]'
        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
      />

      {/* Caption overlay */}
      <figcaption className='absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/75 via-black/40 to-transparent px-4 pb-4 pt-12 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
        <span className='text-sm font-semibold text-white leading-snug'>
          {item.caption}
        </span>
        <span className='shrink-0 rounded-full bg-brand-orange px-2.5 py-0.5 text-[11px] font-bold text-white'>
          {item.category}
        </span>
      </figcaption>
    </motion.figure>
  )
}
