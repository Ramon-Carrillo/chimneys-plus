import Image from "next/image";
import HeroContent from "./HeroContent";

/**
 * HeroSection — React Server Component.
 *
 * Static shell only: the <section> container, background <Image>, and
 * gradient overlays are all rendered on the server.  All Framer Motion
 * animations live in the HeroContent client component below.
 *
 * Swap the `src` string below with your own photo once you have one.
 * Any https://images.unsplash.com URL is already allowed in next.config.ts.
 */
export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[92vh] items-center overflow-hidden"
      aria-label="Welcome"
    >
      {/* ── Background image ──────────────────────────────────────
           fill + priority → LCP element, loaded immediately.
           Replace src with a real project photo when available.   */}
      {/*
        TODO: Replace this stock photo with a real Chimneys Plus project photo.
        Ideal shot: technician on a roof or a clean Wisconsin chimney against blue sky.
        Minimum size: 2400×1600px. Save to /public/images/hero.jpg and update src below.
        Good free sources: your own phone camera, or https://unsplash.com (search "chimney roof Wisconsin")
      */}
      <Image
        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2400&q=80"
        alt="A well-maintained home with a clean chimney and roof"
        fill
        priority
        quality={85}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* ── Gradient overlays ─────────────────────────────────────
           Layer 1: left → right  (text side stays readable)
           Layer 2: bottom → up   (depth / footer blend)
           Layer 3: top → down    (subtle top vignette)            */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/95 via-brand-navy-dark/72 to-brand-navy-dark/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/65 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-brand-navy-dark/25 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* ── Content area ─────────────────────────────────────────
           relative z-10 lifts content above the overlays.
           The HeroContent component positions its scroll indicator
           absolute relative to this section (nearest relative ancestor). */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <HeroContent />
      </div>
    </section>
  );
}
