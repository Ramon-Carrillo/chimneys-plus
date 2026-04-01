import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Flame, Home, Layers, ShieldCheck, HardHat, Phone } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/services-data";
import { COMPANY } from "@/lib/constants";

// ── SEO Metadata ──────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Chimney inspections, cleanings, repairs, rebuilds, liners, roofing, and siding in Madison, WI and Dane County. Licensed & insured. Free estimates. Call (608) 738-1268.",
  keywords: [
    "chimney services Madison WI",
    "chimney and roofing contractor Madison Wisconsin",
    "chimney inspection Madison WI",
    "chimney repair Madison WI",
    "roof replacement Madison WI",
    "siding contractor Madison WI",
    "exterior services Dane County",
    "Chimneys Plus services",
  ],
  openGraph: {
    title: "Chimney, Roofing & Exterior Services — Madison, WI | Chimneys Plus",
    description:
      "One crew for chimney, roofing, and siding in Madison & Dane County. Licensed & insured. Free estimates on all services.",
    url: "/services",
    type: "website",
  },
  alternates: {
    canonical: "/services",
  },
};

// ── Category icon map ─────────────────────────────────────────────

const CATEGORY_ICONS = {
  chimney:   Flame,
  roofing:   Home,
  exteriors: Layers,
} as const;

// ── Trust signals row ─────────────────────────────────────────────

const TRUST = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: HardHat,     label: "CSIA Certified" },
  { icon: ShieldCheck, label: "Free Estimates" },
  { icon: Phone,       label: "Fast Response" },
] as const;

// ─────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-20 lg:py-24" aria-label="Services hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/15 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-orange uppercase mb-6">
              Madison &amp; Dane County, WI
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3rem]">
              Home Protection,{" "}
              <span className="text-brand-orange">Top to Bottom</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              One licensed, insured crew handles chimney, roofing, and exterior
              work across Madison and Dane County — no subcontractors, no
              runaround.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-orange/30 transition-all duration-200 hover:bg-brand-orange-hover">
                Get a Free Estimate
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={COMPANY.phone.mainHref}
                className="inline-flex items-center gap-2.5 rounded-md border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-white/20">
                <Phone className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                {COMPANY.phone.main}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip ─────────────────────────────────────────── */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap divide-x divide-border">
            {TRUST.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 px-6 py-4 text-sm font-semibold text-foreground first:pl-0">
                <Icon
                  className="h-4 w-4 text-brand-orange"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Service categories ───────────────────────────────────── */}
      <section
        className="bg-muted/30 py-16 lg:py-24"
        aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2
              id="services-heading"
              className="font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              All Services
            </h2>
            <p className="mt-2 text-muted-foreground">
              Select a category to see every service we offer.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {SERVICE_CATEGORIES.map((cat) => {
              const Icon =
                CATEGORY_ICONS[cat.slug as keyof typeof CATEGORY_ICONS] ??
                Flame;
              return (
                <CategoryCard key={cat.slug} cat={cat} Icon={Icon} />
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section className="bg-brand-navy py-16" aria-label="Bottom call to action">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
            Not Sure What You Need?
          </h2>
          <p className="mt-4 text-white/60">
            We&rsquo;ll walk you through it — at no charge. A quick phone call
            or message is all it takes to get a clear answer.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-orange-hover">
              Contact Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={COMPANY.phone.mainHref}
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/20">
              <Phone className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              {COMPANY.phone.main}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// ── CategoryCard ──────────────────────────────────────────────────

function CategoryCard({
  cat,
  Icon,
}: {
  cat: (typeof SERVICE_CATEGORIES)[number];
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Icon + title */}
      <div className="flex items-start gap-4 mb-5">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-orange-light text-brand-orange transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white"
          aria-hidden="true">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground">
            {cat.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground mb-6">
        {cat.description}
      </p>

      {/* Service list */}
      <ul className="flex flex-col gap-2.5 mb-8 flex-1">
        {cat.services.map((s) => (
          <li key={s.slug}>
            <Link
              href={s.href}
              className="group/link flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-brand-orange">
              <ArrowRight
                className="h-3.5 w-3.5 shrink-0 text-brand-orange/40 transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:text-brand-orange"
                aria-hidden="true"
              />
              {s.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Category CTA */}
      <Link
        href={cat.href}
        className="inline-flex items-center gap-2 self-start rounded-md bg-brand-navy px-5 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-navy-dark">
        All {cat.title}
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
