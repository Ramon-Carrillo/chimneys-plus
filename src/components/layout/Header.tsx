"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, Flame } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { COMPANY, SERVICES } from "@/lib/constants";

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
  const [servicesHovered, setServicesHovered] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-brand-navy"
      animate={{
        boxShadow: scrolled
          ? "0 4px 24px rgba(0,0,0,0.40)"
          : "0 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.2 }}
    >
      {/* ── Announcement bar (desktop only) ───────────────────── */}
      <div className="hidden sm:block bg-brand-navy-dark border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 text-xs text-white/55">
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

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            aria-label="Primary navigation"
          >
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesHovered(true)}
                  onMouseLeave={() => setServicesHovered(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-brand-orange"
                        : "text-white/80 hover:text-white hover:bg-white/8"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={servicesHovered}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: servicesHovered ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-px"
                    >
                      <ChevronDown className="h-3.5 w-3.5" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {servicesHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.97 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-0 top-full pt-2 w-56"
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
                      </motion.div>
                    )}
                  </AnimatePresence>
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
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-brand-orange"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
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

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden flex items-center justify-center h-9 w-9 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile slide-down menu ────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden border-t border-white/10"
          >
            <nav
              className="px-4 py-4 space-y-1"
              aria-label="Mobile navigation"
            >
              {NAV_ITEMS.map((item) =>
                item.dropdown ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileServicesOpen((o) => !o)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {item.label}
                      <motion.span
                        animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden ml-3 mt-1 pl-3 border-l-2 border-brand-orange/30 space-y-0.5"
                        >
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
                              className="block rounded-lg px-3 py-2 text-sm text-white/65 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
