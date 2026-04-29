import Image from "next/image";
import HeroContent from "./HeroContent";

/**
 * HeroSection — React Server Component.
 *
 * Static shell only: the <section> container, background <Image>, and
 * gradient overlays are all rendered on the server. HeroContent is
 * also a server component (zero client JS) using CSS-only animations.
 *
 * The background image lives at /public/images/hero.jpg (2400×1600).
 * Self-hosting eliminates the third-party request to Unsplash on the
 * critical path; Next encodes AVIF/webp variants at request time and
 * caches them at the edge.
 */
export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[92vh] items-center overflow-hidden"
      aria-label="Welcome"
    >
      {/* ── Background image — LCP element ────────────────────────
           - fill + priority preloads it as part of the initial HTML
           - quality 80 because Next re-encodes to AVIF anyway, and
             the source JPEG is already optimised at q≈80
           - sizes="100vw" matches the full-width layout            */}
      <Image
        src="/images/hero.jpg"
        alt="A well-maintained home with a clean chimney and roof"
        fill
        priority
        quality={80}
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
