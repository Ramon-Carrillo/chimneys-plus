import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, Star } from "lucide-react";
import { COMPANY } from "@/lib/constants";

/**
 * HeroContent — React Server Component.
 *
 * Previously this was a Client Component that ran framer-motion to
 * stagger-fade the headline / CTAs / trust signals on mount. Because
 * the hero is on the LCP critical path, that JS was a measurable
 * bottleneck — a marketing site shouldn't spin up an animation engine
 * just to play one entrance animation.
 *
 * The same visual effect is now achieved with CSS-only:
 *   - `animate-hero-fade` keyframes (defined in globals.css)
 *   - per-child `animation-delay` for the staggered cascade
 *   - `motion-reduce:animate-none` honours prefers-reduced-motion
 *
 * Net result: zero client JS for the hero text block, no hydration
 * cost, and the LCP image gets out the door faster.
 */

const TRUST_SIGNALS = [
  "Licensed & Insured",
  "CSIA",
  "Free Estimates",
  "Locally Owned & Operated",
] as const;

// Stagger cascade: each step fires 130 ms after the previous one,
// matching the framer-motion staggerChildren value we replaced.
const STAGGER_MS = 130;
const BASE_DELAY_MS = 100;

function delayStyle(step: number): React.CSSProperties {
  return { animationDelay: `${BASE_DELAY_MS + step * STAGGER_MS}ms` };
}

const FADE_CLS =
  "opacity-0 motion-safe:animate-hero-fade motion-reduce:opacity-100";

export default function HeroContent() {
  return (
    <>
      {/* ── Staggered content block ─────────────────────────────
          No motion.div wrapper anymore — each child runs its own
          CSS animation with a hand-tuned delay. */}
      <div className="max-w-2xl">

        {/* Eyebrow */}
        <div className={`mb-5 ${FADE_CLS}`} style={delayStyle(0)}>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/15 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-orange uppercase backdrop-blur-sm">
            {COMPANY.location.city} &amp; {COMPANY.location.region}, {COMPANY.location.state}
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[66px] ${FADE_CLS}`}
          style={delayStyle(1)}
        >
          Expert Chimney, Roofing{" "}
          <span className="text-brand-orange">&amp; Exterior Services</span>
          <span className="block mt-1 text-white">in {COMPANY.location.city} &amp; {COMPANY.location.region}, {COMPANY.location.state}</span>
        </h1>

        {/* Sub-headline */}
        <p
          className={`mt-6 max-w-xl text-[17px] leading-relaxed text-white/75 sm:text-lg ${FADE_CLS}`}
          style={delayStyle(2)}
        >
          {/* TODO: Update founding year and homeowner count */}
          Keeping your home safe, warm, and protected through harsh winters
          since 2015. Trusted by hundreds of local homeowners — from
          chimney inspections to full roof replacements.
        </p>

        {/* CTAs */}
        <div
          className={`mt-9 flex flex-wrap items-center gap-4 ${FADE_CLS}`}
          style={delayStyle(3)}
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-orange/30 transition-all duration-200 hover:bg-brand-orange-hover hover:shadow-xl hover:shadow-brand-orange/40 active:scale-[0.97]"
          >
            Get a Free Estimate
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

          <a
            href={COMPANY.phone.mainHref}
            className="inline-flex items-center gap-2.5 rounded-md border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/35 hover:bg-white/[0.16] active:scale-[0.97]"
          >
            <Phone className="h-4 w-4 shrink-0" strokeWidth={2.5} />
            Call {COMPANY.phone.main}
          </a>
        </div>

        {/* Review badge */}
        <div
          className={`mt-8 flex items-center gap-3 ${FADE_CLS}`}
          style={delayStyle(4)}
        >
          <div className="flex items-center gap-1" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-brand-orange text-brand-orange"
                strokeWidth={0}
                aria-hidden="true"
              />
            ))}
          </div>
          {/* TODO: Replace with real review count and link to Google/BBB profile */}
          <span className="text-sm font-semibold text-white">
            4.9 Stars
          </span>
          <span className="text-sm text-white/70">
            — 10+ Reviews on Google
          </span>
        </div>

        {/* Trust signals */}
        <ul
          className={`mt-4 flex flex-wrap gap-x-6 gap-y-2.5 ${FADE_CLS}`}
          style={delayStyle(5)}
          aria-label="Credentials and certifications"
        >
          {TRUST_SIGNALS.map((signal) => (
            <li key={signal} className="flex items-center gap-2 text-sm text-white/70">
              <CheckCircle2
                className="h-4 w-4 shrink-0 text-brand-orange"
                strokeWidth={2}
                aria-hidden="true"
              />
              {signal}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Scroll indicator ────────────────────────────────────
           Fades in late and bobs forever via two stacked CSS
           animations on the icon. */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-0 motion-safe:animate-hero-fade motion-reduce:opacity-100"
        style={{ animationDelay: "1400ms" }}
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/50">
          Scroll
        </span>
        <ChevronDown
          className="h-5 w-5 text-white/50 motion-safe:animate-hero-bob"
          strokeWidth={1.5}
        />
      </div>
    </>
  );
}
