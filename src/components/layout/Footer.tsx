import Link from "next/link";
import { Phone, Mail, MapPin, Shield, ChevronRight, Flame } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "Free Estimate", href: "/contact" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white">

      {/* ── Pre-footer CTA strip ──────────────────────────────── */}
      <div className="bg-brand-orange">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading text-base font-bold text-white">
              Ready to schedule an inspection or get a free estimate?
            </p>
            <p className="text-sm text-white/80 mt-0.5">
              Serving {COMPANY.location.city}, {COMPANY.location.state} and all of {COMPANY.location.region}.
            </p>
          </div>
          <a
            href={COMPANY.phone.mainHref}
            className="shrink-0 flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-brand-orange transition-colors hover:bg-white/90 active:scale-95"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            {COMPANY.phone.main}
          </a>
        </div>
      </div>

      {/* ── Main footer body ─────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              prefetch={false} href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-orange transition-colors group-hover:bg-brand-orange-hover">
                <Flame className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-[14px] font-bold tracking-wider text-white uppercase">
                  {COMPANY.shortName}
                </span>
                <span className="text-[10px] font-medium tracking-[0.18em] text-brand-orange uppercase">
                  {COMPANY.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-xs">
              Serving {COMPANY.location.city} and {COMPANY.location.region} homeowners with expert chimney,
              roofing, and exterior services since day one. Honest work,
              fair prices, guaranteed.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-2 text-xs font-semibold text-brand-orange">
              <Shield className="h-3.5 w-3.5" />
              Licensed &amp; Insured
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-heading text-[11px] font-semibold uppercase tracking-widest text-white/70 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link
              prefetch={false}
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-orange transition-colors group"
                  >
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-brand-orange/40 group-hover:text-brand-orange transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="font-heading text-[11px] font-semibold uppercase tracking-widest text-white/70 mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.flatMap((s) =>
                s.items.map((item) => (
                  <li key={item}>
                    <Link
              prefetch={false}
                      href={s.href}
                      className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-orange transition-colors group"
                    >
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-brand-orange/40 group-hover:text-brand-orange transition-colors" />
                      {item}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Col 4: Contact + Service Areas */}
          <div>
            <h3 className="font-heading text-[11px] font-semibold uppercase tracking-widest text-white/70 mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4 mb-8">
              <li>
                <a
                  href={COMPANY.phone.mainHref}
                  className="flex items-start gap-3 group"
                  aria-label={`Main phone: ${COMPANY.phone.main}`}
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-orange/15 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                    {COMPANY.phone.main}
                    <span className="block text-xs text-white/55">Main line</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.phone.secondaryHref}
                  className="flex items-start gap-3 group"
                  aria-label={`Secondary phone: ${COMPANY.phone.secondary}`}
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/8 text-white/70 group-hover:bg-brand-orange/15 group-hover:text-brand-orange transition-colors">
                    <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                    {COMPANY.phone.secondary}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.emailHref}
                  className="flex items-start gap-3 group"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-orange/15 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Mail className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors break-all">
                    {COMPANY.email}
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-orange/15 text-brand-orange">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-white/70">
                    {COMPANY.location.city}, {COMPANY.location.state} &amp; {COMPANY.location.region}
                  </span>
                </div>
              </li>
            </ul>

            <h4 className="font-heading text-[11px] font-semibold uppercase tracking-widest text-white/55 mb-3">
              Service Areas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {COMPANY.location.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/12 bg-white/6 px-2.5 py-1 text-xs text-white/65"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-brand-orange/60" />
              {/* TODO: Replace with real license number once confirmed. Format: "Lic. #123456789" */}
              Licensed Contractor
            </span>
            <span>{COMPANY.location.city}, {COMPANY.location.state} {COMPANY.location.zip}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
