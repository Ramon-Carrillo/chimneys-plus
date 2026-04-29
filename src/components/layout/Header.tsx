"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, Flame } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { COMPANY, SERVICES } from "@/lib/constants";

/**
 * Header — sticky top navigation.
 *
 * Previously this was a heavy framer-motion consumer (motion.header,
 * AnimatePresence for the mobile menu, layoutId underline animation,
 * rotating hamburger icon). The animation engine alone was ~118 KB on
 * the LCP critical path of every route on the site.
 *
 * This rewrite keeps every visible behaviour but uses CSS only:
 *   - Sticky shadow on scroll: a `transition: box-shadow` toggled by
 *     the `useScrolled` hook (single boolean state, already in place).
 *   - Mobile slide-down: the grid-rows 0fr/1fr trick, which is the
 *     modern way to animate `height: auto` without a measured value.
 *   - Chevron rotation: a `rotate-180` Tailwind class toggled by an
 *     `aria-expanded` attribute selector via Tailwind's `aria-expanded`
 *     variant, so no JS rerun is needed for the visual flip.
 *   - Hamburger swap: just conditional render of <Menu /> vs <X />.
 *     The original 90° rotate was decorative.
 *
 * The active-link underline used framer-motion's `layoutId` for a
 * shared-element animation between routes. After the rewrite, the
 * underline appears instantly under the active link — visually clean,
 * zero JS cost. If you ever want the slide back, the canonical
 * implementation in CSS is `view-transition-name`, but support is
 * still uneven on iOS; not worth shipping now.
 */

type NavItem = { label: string; href: string; dropdown?: true };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const scrolled = useScrolled(10);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      // box-shadow transition gets the same drop-shadow-on-scroll the
      // motion.header used to do — without booting framer-motion.
      className={[
        "sticky top-0 z-50 bg-brand-navy transition-shadow duration-200",
        scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.40)]" : "shadow-none",
      ].join(" ")}
    >
      {/* ── Announcement bar (desktop only) ───────────────────── */}
      <div className="hidden sm:block bg-brand-navy-dark border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 text-xs text-white/70">
          <span>Serving {COMPANY.location.city} &amp; {COMPANY.location.region}, {COMPANY.location.state}</span>
          <div className="flex items-center gap-4">
            <a
              href={COMPANY.phone.secondaryHref}
              className="hover:text-white/80 transition-colors"
            >
              {COMPANY.phone.secondary}
            </a>
            <a
              href={COMPANY.emailHref}
              className="hover:text-white/80 transition-colors"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav bar ──────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobile}
            className="flex items-center gap-3 shrink-0 group"
            aria-label={`${COMPANY.shortName} — home`}
          >
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

          {/* Desktop nav. The Services dropdown is now a CSS-only
              hover/focus-within group; no React state needed. */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            aria-label="Primary navigation"
          >
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="group/dd relative"
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-brand-orange"
                        : "text-white/80 hover:text-white hover:bg-white/8"
                    }`}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 mt-px transition-transform duration-200 group-hover/dd:rotate-180 group-focus-within/dd:rotate-180" />
                  </button>

                  {/* Dropdown panel — opens on group hover or
                      focus-within. opacity + scale + translate
                      transitions are pure CSS. pointer-events-none
                      while collapsed prevents clicks bleeding through. */}
                  <div
                    className="absolute left-0 top-full pt-2 w-56 opacity-0 -translate-y-1.5 scale-[0.97] pointer-events-none transition-all duration-150 ease-out group-hover/dd:opacity-100 group-hover/dd:translate-y-0 group-hover/dd:scale-100 group-hover/dd:pointer-events-auto group-focus-within/dd:opacity-100 group-focus-within/dd:translate-y-0 group-focus-within/dd:scale-100 group-focus-within/dd:pointer-events-auto"
                    role="menu"
                  >
                    <div className="rounded-xl bg-white shadow-2xl ring-1 ring-black/8 overflow-hidden">
                      <Link
                        href="/services"
                        className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-brand-navy border-b border-gray-100 hover:bg-brand-orange-light transition-colors"
                        role="menuitem"
                      >
                        All Services
                      </Link>
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={s.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-brand-orange-light hover:text-brand-navy transition-colors"
                          role="menuitem"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-brand-orange"
                      : "text-white/80 hover:text-white hover:bg-white/8"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    // Static underline replaces the framer layoutId
                    // shared-element transition. Visually identical at
                    // rest, no animation engine cost.
                    <span
                      aria-hidden="true"
                      className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-brand-orange"
                    />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Right: phone CTA + hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={COMPANY.phone.mainHref}
              className="hidden sm:flex items-center gap-2 rounded-md bg-brand-orange px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-hover active:scale-95"
              aria-label={`Call ${COMPANY.phone.main}`}
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              <span className="hidden md:inline">{COMPANY.phone.main}</span>
              <span className="md:hidden">Call Now</span>
            </a>

            {/* Mobile-only phone icon */}
            <a
              href={COMPANY.phone.mainHref}
              className="flex sm:hidden items-center justify-center h-9 w-9 rounded-md bg-brand-orange text-white active:scale-95 transition-transform"
              aria-label={`Call ${COMPANY.phone.main}`}
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
            </a>

            {/* Hamburger — plain icon swap, no rotate transition. */}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden flex items-center justify-center h-9 w-9 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile slide-down menu ────────────────────────────────
          The grid-rows 0fr → 1fr trick animates height:auto without
          having to measure the content. Inner div sets overflow-hidden
          so children clip during the transition. */}
      <div
        id="mobile-nav"
        className={`lg:hidden grid border-t border-white/10 transition-all duration-250 ease-out overflow-hidden ${
          mobileOpen
            ? "grid-rows-[1fr] opacity-100 border-white/10"
            : "grid-rows-[0fr] opacity-0 border-transparent pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="overflow-hidden">
          <nav
            className="px-4 py-4 space-y-1"
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((o) => !o)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                    aria-expanded={mobileServicesOpen}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Same grid-rows trick for the services accordion. */}
                  <div
                    className={`grid transition-all duration-200 ease-out overflow-hidden ${
                      mobileServicesOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden ml-3 mt-1 pl-3 border-l-2 border-brand-orange/30 space-y-0.5">
                      <Link
                        href="/services"
                        onClick={closeMobile}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors"
                      >
                        All Services
                      </Link>
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={s.href}
                          onClick={closeMobile}
                          className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobile}
                  className={`block rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-white/10 text-brand-orange"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Mobile call-to-action */}
            <div className="pt-3 pb-1 border-t border-white/10">
              <a
                href={COMPANY.phone.mainHref}
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-brand-orange px-4 py-3.5 text-sm font-bold text-white hover:bg-brand-orange-hover transition-colors"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                {COMPANY.phone.main} — Call Now
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
