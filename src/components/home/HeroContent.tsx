"use client";

import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { COMPANY } from "@/lib/constants";

// ── Animation variants ────────────────────────────────────────────

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

// ── Trust signals ─────────────────────────────────────────────────

const TRUST_SIGNALS = [
  "Licensed & Insured",
  "CSIA Certified",
  "Free Estimates",
  "Locally Owned & Operated",
] as const;

// ─────────────────────────────────────────────────────────────────

export default function HeroContent() {
  return (
    <>
      {/* ── Staggered content block ──────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-2xl"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp} className="mb-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/15 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-orange uppercase backdrop-blur-sm">
            Madison &amp; Dane County, WI
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[66px]"
        >
          Expert Chimney, Roofing{" "}
          <span className="text-brand-orange">&amp; Exterior Services</span>
          <span className="block mt-1 text-white">in Madison &amp; Dane County, WI</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/65 sm:text-lg"
        >
          Keeping your home safe, warm, and protected through Wisconsin winters
          since 2005. Trusted by hundreds of Madison-area homeowners — from
          chimney inspections to full roof replacements.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-wrap items-center gap-4"
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
        </motion.div>

        {/* Trust signals */}
        <motion.ul
          variants={fadeUp}
          className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5"
          aria-label="Credentials and certifications"
        >
          {TRUST_SIGNALS.map((signal) => (
            <li key={signal} className="flex items-center gap-2 text-sm text-white/60">
              <CheckCircle2
                className="h-4 w-4 shrink-0 text-brand-orange"
                strokeWidth={2}
                aria-hidden="true"
              />
              {signal}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* ── Scroll indicator ─────────────────────────────────────
           Positions absolute within the parent <section> (relative).
           Excluded from the stagger chain — fades in separately. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.7,
            ease: "easeInOut",
            delay: 1.6,
          }}
        >
          <ChevronDown className="h-5 w-5 text-white/30" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </>
  );
}
