import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  CalendarDays,
  ShieldCheck,
  HardHat,
  Phone,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about [Company Name] — serving [City], [State] and [Region] with expert chimney and roofing services since [Year Founded].",
};

// ── Values ────────────────────────────────────────────────────────

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    body: "Every technician on our crew is covered by general liability and workers\u2019 compensation insurance. You take zero risk when we\u2019re on your property.",
  },
  {
    icon: HardHat,
    title: "[Certification]-Certified",
    body: "Our chimney professionals hold current [Certification] certifications \u2014 the national standard for safe, code-compliant chimney work.",
  },
  {
    icon: MapPin,
    title: "Locally Rooted",
    body: "We live in the same communities we serve. That means we understand local weather, building codes, and what your neighbors\u2019 homes actually need.",
  },
  {
    icon: CalendarDays,
    title: "[XX]+ Years of Experience",
    body: "Since [Year Founded] we\u2019ve built a track record of reliable work across [City] and [Region] \u2014 built on referrals, not on advertising spend.",
  },
] as const;

// ─────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero banner ─────────────────────────────────────────── */}
      <section className="bg-brand-navy py-20 lg:py-28" aria-label="About us hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/15 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-orange uppercase mb-6">
            About {COMPANY.shortName}
          </span>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {COMPANY.location.state}&rsquo;s Trusted{" "}
            <span className="text-brand-orange">Chimney &amp; Roofing</span>{" "}
            Specialists
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
            {/* TODO: Update with actual founding year and service area description */}
            Family-owned and locally operated in {COMPANY.location.city}, {COMPANY.location.state} since [Year Founded].
            Protecting {COMPANY.location.region} homes, one chimney at a time.
          </p>
        </div>
      </section>

      {/* ── Story ───────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="story-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <h2
                id="story-heading"
                className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                {/* TODO: Update with actual company founding story */}
                <p>
                  {COMPANY.shortName} was founded in {COMPANY.location.city} in [Year Founded] by a team of
                  tradespeople who believed homeowners deserved honest, skilled
                  chimney and roofing work without the runaround. What started
                  as a small chimney-focused crew has grown into a full-service
                  exterior contractor — but the original values haven&rsquo;t
                  changed a bit.
                </p>
                <p>
                  We&rsquo;re not a franchise. Every truck, every tool, and every
                  technician represents our name. That personal accountability is
                  why the majority of our business still comes from referrals —
                  neighbors recommending us to neighbors across {COMPANY.location.city} and the rest of {COMPANY.location.region}.
                </p>
                <p>
                  Harsh winters are hard on homes. Freeze-thaw cycles crack
                  mortar joints. Ice dams lift shingles. Wind drives water behind
                  siding. We&rsquo;ve seen every version of that damage, and we
                  know how to fix it for good — not just well enough to get through
                  another season.
                </p>
              </div>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {VALUES.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/40 p-6">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange-light text-brand-orange"
                    aria-hidden="true">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service areas ───────────────────────────────────────── */}
      <section className="bg-muted/40 py-16" aria-labelledby="areas-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="areas-heading"
            className="font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Where We Work
          </h2>
          <p className="mt-3 text-muted-foreground">
            We serve {COMPANY.location.city} and all of {COMPANY.location.region}, including:
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {COMPANY.location.serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
                {area}, {COMPANY.location.state}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-16" aria-label="Contact call to action">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-white/60">
            Free estimates, no pressure. Give us a call or send a message and
            we&rsquo;ll get back to you within one business day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-orange-hover">
              Get a Free Estimate
            </Link>
            <a
              href={COMPANY.phone.mainHref}
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-white/20">
              <Phone className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              {COMPANY.phone.main}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
