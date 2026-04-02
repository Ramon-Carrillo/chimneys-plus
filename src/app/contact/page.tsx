import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact [Company Name] in [City], [State]. Call [Phone Number] or send us a message for a free estimate on chimney, roofing, or exterior services.",
};

// ── Extended service areas for the contact page ───────────────────

// TODO: Replace with actual service areas
const SERVICE_AREAS = [
  "[City]",
  "[Area 1]",
  "[Area 2]",
  "[Area 3]",
  "[Area 4]",
  "[Area 5]",
  "[Area 6]",
  "[Area 7]",
  "[Area 8]",
  "[Area 9]",
  "[Area 10]",
  "[Region] (all)",
] as const;

// ─────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <main>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-20 lg:py-24" aria-label="Contact page hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/15 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-orange uppercase mb-6">
            Free Estimates
          </span>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Let&rsquo;s Talk About{" "}
            <span className="text-brand-orange">Your Project</span>
          </h1>
          <p className="mt-5 mx-auto max-w-xl text-lg leading-relaxed text-white/60">
            Send us a message or call directly. We respond within one business
            day and all estimates are free, no obligation.
          </p>
        </div>
      </section>

      {/* ── Main content ────────────────────────────────────────── */}
      <section
        className="bg-muted/30 py-16 lg:py-24"
        aria-label="Contact form and information">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_420px] lg:gap-14 items-start">

            {/* ── Left: form card ─────────────────────────────── */}
            <div className="rounded-2xl border border-border bg-white p-7 shadow-sm sm:p-10">
              <div className="mb-8">
                <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
                  Request a Free Estimate
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  All fields marked{" "}
                  <span className="text-brand-orange font-semibold" aria-hidden="true">*</span>{" "}
                  are required.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* ── Right: info sidebar ─────────────────────────── */}
            <aside className="flex flex-col gap-6" aria-label="Contact information">

              {/* Contact details */}
              <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                <h2 className="font-heading text-base font-bold text-foreground mb-5">
                  Reach Us Directly
                </h2>

                <ul className="flex flex-col gap-5">
                  {/* Phone 1 */}
                  <ContactDetail
                    icon={Phone}
                    label="Main line"
                    href={COMPANY.phone.mainHref}>
                    {COMPANY.phone.main}
                  </ContactDetail>

                  {/* Phone 2 */}
                  <ContactDetail
                    icon={Phone}
                    label="Secondary"
                    href={COMPANY.phone.secondaryHref}>
                    {COMPANY.phone.secondary}
                  </ContactDetail>

                  {/* Email */}
                  <ContactDetail
                    icon={Mail}
                    label="Email"
                    href={COMPANY.emailHref}>
                    {COMPANY.email}
                  </ContactDetail>

                  {/* Hours */}
                  <li className="flex items-start gap-3.5">
                    <span
                      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-orange-light text-brand-orange"
                      aria-hidden="true">
                      <Clock className="h-4.5 w-4.5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Hours
                      </p>
                      {/* TODO: Confirm actual business hours with client before launch */}
                      <p className="mt-0.5 text-sm text-foreground">
                        Mon – Fri: 7 am – 6 pm
                      </p>
                      <p className="text-sm text-foreground">
                        Sat: 8 am – 3 pm
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sun: Closed
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Trust badge */}
                <div className="mt-6 flex items-center gap-2 rounded-lg border border-brand-orange/20 bg-brand-orange-light px-4 py-3">
                  <Shield
                    className="h-4 w-4 shrink-0 text-brand-orange"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold text-brand-orange">
                    Licensed &amp; Insured · [Certification] · Free Estimates
                  </p>
                </div>
              </div>

              {/* Service areas */}
              <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin
                    className="h-4 w-4 text-brand-orange"
                    aria-hidden="true"
                  />
                  <h2 className="font-heading text-base font-bold text-foreground">
                    Service Areas
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  We serve {COMPANY.location.city} and all of {COMPANY.location.region}, including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-foreground">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
                {/*
                  ── Google Maps embed ──────────────────────────────────────
                  Replace this placeholder with a real embed from:
                  https://www.google.com/maps/embed/v1/place
                    ?key=YOUR_API_KEY
                    &q=[City],[State]

                  Or use the "Embed a map" option in Google Maps directly:
                  1. Search "[City], [State]" on maps.google.com
                  2. Share → Embed a map → Copy HTML
                  3. Paste the <iframe> below in place of this div

                  Example:
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!..."
                    className="w-full border-0"
                    height="280"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="[Company Name] service area — [City], [State]"
                  />
                  ────────────────────────────────────────────────────────
                */}
                <div
                  className="flex h-[260px] flex-col items-center justify-center gap-3 bg-muted/50"
                  aria-label="Map placeholder — Google Maps embed goes here">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-muted-foreground/25">
                    <MapPin
                      className="h-6 w-6 text-muted-foreground/40"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-muted-foreground">
                      {COMPANY.location.city}, {COMPANY.location.state} &amp; {COMPANY.location.region}
                    </p>
                    <p className="text-xs text-muted-foreground/60">
                      Google Maps embed — coming soon
                    </p>
                  </div>
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

// ── ContactDetail ─────────────────────────────────────────────────

type ContactDetailProps = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  href: string
  children: React.ReactNode
}

function ContactDetail({ icon: Icon, label, href, children }: ContactDetailProps) {
  return (
    <li className="flex items-start gap-3.5">
      <span
        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-orange-light text-brand-orange"
        aria-hidden="true">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <a
          href={href}
          className="mt-0.5 text-sm font-medium text-foreground transition-colors hover:text-brand-orange break-all">
          {children}
        </a>
      </div>
    </li>
  )
}
