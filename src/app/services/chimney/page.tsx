import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Wrench,
  Shield,
  Flame,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

// ── SEO Metadata ──────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Chimney Services",
  description:
    "Complete chimney services in Portland, OR — inspections, cleanings, repairs, rebuilds, liners, crowns, and fireplace inserts. CSIA certified. Free estimates. Pacific Northwest.",
  keywords: [
    "chimney services Portland OR",
    "chimney inspection Portland OR",
    "chimney cleaning Portland OR",
    "chimney repair Portland OR",
    "chimney liner installation Portland",
    "chimney crown repair OR",
    "fireplace insert installation Portland OR",
    "chimney company Portland OR",
    "chimney sweep Pacific Northwest",
  ],
  openGraph: {
    title: "Chimney Services — Portland, OR | Cascade Hearth & Roofing",
    description:
      "Full-service chimney care in Portland & Pacific Northwest — inspections, cleanings, repairs, liners, and inserts. CSIA certified. Free estimates.",
    url: "/services/chimney",
    type: "website",
  },
  alternates: {
    canonical: "/services/chimney",
  },
};

// ── Services offered ──────────────────────────────────────────────

const CHIMNEY_SERVICES = [
  {
    icon: Search,
    title: "Inspections & Cleanings",
    href: "/services/chimney-inspection",
    description:
      "NFPA 211 Level 1, 2, and 3 inspections plus annual sweepings to remove creosote, debris, and nesting material from your flue.",
    items: ["Level 1 · 2 · 3 Inspections", "Annual Sweeping", "Video Scanning", "Written Reports"],
  },
  {
    icon: Wrench,
    title: "Chimney Repair & Rebuilds",
    href: "/services/chimney-repair",
    description:
      "Tuckpointing, spalling brick repair, crown rebuild, flashing replacement, and full chimney rebuilds from the roofline up.",
    items: ["Tuckpointing", "Crown Repair & Rebuild", "Spalling Brick", "Full Rebuilds"],
  },
  {
    icon: Shield,
    title: "Liners & Caps",
    href: "/services/chimney",
    description:
      "Stainless-steel and cast-in-place liner installations sized to your appliance. Chase covers, caps, and dampers.",
    items: ["Stainless-Steel Liners", "Cast-in-Place Liners", "Cap Installation", "Damper Repair"],
  },
  {
    icon: Flame,
    title: "Fireplace & Stove Inserts",
    href: "/services/chimney",
    description:
      "Wood, gas, and pellet insert and freestanding stove installations with complete liner sizing and final clearance inspection.",
    items: ["Wood Inserts", "Gas Inserts", "Pellet Inserts", "Stove Installations"],
  },
] as const;

// ─────────────────────────────────────────────────────────────────

export default function ChimneyServicesPage() {
  return (
    <main>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-20 lg:py-24" aria-label="Chimney services hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/40">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/60">Chimney Services</span>
            </nav>

            <span className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/15 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-orange uppercase mb-6">
              CSIA Certified — {COMPANY.location.city}, {COMPANY.location.state}
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Chimney Services in{" "}
              <span className="text-brand-orange">{COMPANY.location.city} &amp; {COMPANY.location.region}</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              From the first annual inspection to a complete chimney rebuild,
              {COMPANY.shortName} handles every aspect of chimney care for local
              homeowners — safely, honestly, and to code.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-orange/30 transition-all hover:bg-brand-orange-hover">
                Get a Free Estimate
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={COMPANY.phone.mainHref}
                className="inline-flex items-center gap-2.5 rounded-md border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/20">
                <Phone className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                {COMPANY.phone.main}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service cards ────────────────────────────────────────── */}
      <section
        className="bg-white py-16 lg:py-24"
        aria-labelledby="chimney-services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="chimney-services-heading"
            className="font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl mb-10">
            What We Do
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {CHIMNEY_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <article
                  key={svc.title}
                  className="group flex flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-orange-light text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white"
                      aria-hidden="true">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {svc.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-5 flex-1">
                    {svc.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-6">
                    {svc.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-brand-orange" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange transition-colors hover:text-brand-orange-hover">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-16" aria-label="Chimney services CTA">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
            Ready to Schedule?
          </h2>
          <p className="mt-4 text-white/60">
            Free estimates, fast scheduling. Most inspections and cleanings can
            be booked within the week.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-orange-hover">
              Request a Free Estimate
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
