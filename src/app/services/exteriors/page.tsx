import type { Metadata } from "next";
import { ShieldCheck, Layers, Wrench, ThumbsUp, Clock, Home } from "lucide-react";
import ServicePageLayout, { type Benefit, type Problem } from "@/components/services/ServicePageLayout";

// ── SEO Metadata ──────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Siding & Exterior Services",
  description:
    "Siding installation and repair in Madison, WI — vinyl, fiber cement, and wood. Licensed & insured exterior contractor serving Dane County. Free estimates.",
  keywords: [
    "siding contractor Madison WI",
    "vinyl siding installation Madison Wisconsin",
    "fiber cement siding Madison WI",
    "siding repair Madison WI",
    "exterior contractor Dane County",
    "siding replacement Madison Wisconsin",
    "James Hardie siding Madison WI",
    "siding company Middleton WI",
    "siding contractor Waunakee WI",
    "exterior services Madison Wisconsin",
  ],
  openGraph: {
    title: "Siding & Exterior Services — Madison, WI | Chimneys Plus",
    description:
      "Vinyl, fiber cement, and wood siding installation and repair across Madison & Dane County. Licensed & insured. Free estimates.",
    url: "/services/exteriors",
    type: "website",
  },
  alternates: {
    canonical: "/services/exteriors",
  },
};

// ── Page data ─────────────────────────────────────────────────────

const BENEFITS: Benefit[] = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    body: "Full Wisconsin contractor licensing and insurance coverage on every exterior project. No subcontractors — the crew that starts your job finishes it.",
  },
  {
    icon: Layers,
    title: "Three Siding Systems",
    body: "We install vinyl, fiber cement (James Hardie and equivalents), and wood siding. We'll help you choose the right material for your budget, aesthetic, and the thermal demands of Wisconsin winters.",
  },
  {
    icon: Home,
    title: "Whole-Exterior Thinking",
    body: "Siding doesn't end at the panel. We address trim, soffits, fascia, and the water-resistive barrier behind the siding — the details that determine whether your new siding actually keeps water out.",
  },
  {
    icon: Wrench,
    title: "Repairs, Not Just Replacements",
    body: "If storm damage, rot, or impact has affected individual panels or sections, we can often repair rather than replace the full exterior — saving you significant cost.",
  },
  {
    icon: ThumbsUp,
    title: "Clean Jobsite, Every Day",
    body: "We protect your landscaping, clean up daily, and leave your property in better shape than we found it. Our crews take pride in job-site appearance.",
  },
  {
    icon: Clock,
    title: "Efficient Scheduling",
    body: "Most single-story siding jobs complete in 3–5 days. We coordinate around your schedule and keep you informed at every step.",
  },
];

const PROBLEMS: Problem[] = [
  {
    title: "Cracked, Warped, or Rotted Siding Panels",
    description:
      "Wisconsin's wide temperature swings cause vinyl to expand and contract significantly. Improper installation without adequate nailing slots leads to buckling. Wood siding rots when the water-resistive barrier behind it is breached. Both problems let water into the wall cavity, where it damages sheathing and framing silently.",
    solution:
      "We remove the affected panels, inspect the sheathing and WRB behind them, repair any moisture damage found, and install replacement panels using proper nailing and expansion clearances. If the damage is widespread, we discuss full replacement economics.",
  },
  {
    title: "Failed Caulking at Joints, Windows, and Trim",
    description:
      "Caulk at window surrounds, corner posts, and trim-to-siding joints dries out and cracks within 5–10 years. When it fails, water enters the gap on every rain event and runs down inside the wall.",
    solution:
      "We remove all old caulk, clean the joint surfaces, and apply a paintable exterior-grade polyurethane or silicone caulk matched to your siding type. On fiber cement installations we use sealant specified by the manufacturer to maintain the warranty.",
  },
  {
    title: "Storm or Impact Damage",
    description:
      "Hail, falling branches, and high-wind debris leave dents, cracks, and holes in siding that compromise both weatherproofing and appearance. Insurance often covers this damage — but only if it's properly documented.",
    solution:
      "We photograph and document all damage, help you file your insurance claim with a detailed scope of work, and install replacement panels that match your existing siding in profile and color.",
  },
  {
    title: "Fading, Chalking, or Dated Appearance",
    description:
      "Vinyl fades over 15–20 years; older aluminum siding chalks badly. Beyond curb appeal, severely faded siding often indicates the UV inhibitors in the material have broken down, leaving it brittle and prone to cracking in cold weather.",
    solution:
      "Full siding replacement with a modern vinyl or fiber cement product resets the clock entirely. We help you select colors and profiles that complement your roofline and neighborhood, and can install insulated vinyl for an added R-value benefit.",
  },
];

// ── Page ──────────────────────────────────────────────────────────

export default function ExteriorsServicesPage() {
  return (
    <ServicePageLayout
      serviceTitle="Siding & Exterior"
      eyebrow="Exterior Contractor — Madison, WI"
      heading="Siding & Exterior Services in Madison & Dane County, WI"
      subheading="Vinyl, fiber cement, and wood siding installation and repair — a weatherproof barrier and a better-looking home, built to handle Wisconsin seasons."
      description={[
        "New siding does two things: it improves your home's appearance immediately, and — when installed correctly — it creates a continuous weatherproof barrier that keeps water and air infiltration out for 20 to 40 years. In Madison's climate, that second job matters more than the first.",
        "Chimneys Plus installs vinyl, fiber cement (including James Hardie products), and wood siding across Madison and Dane County. We're not a siding-only company — we understand the whole exterior envelope, which means we address the details that siding-only contractors often skip: the water-resistive barrier, the flashing at windows and doors, and the expansion gaps that keep vinyl from buckling in summer heat.",
        "For existing homes with localized damage, we offer targeted repairs rather than pushing full replacement when it isn't warranted. If storm damage, rot, or impact has affected a section of your siding, we match the replacement material to your existing installation and repair only what needs it.",
        "All our exterior work is performed by our own crew — not subcontractors — and carries our standard workmanship warranty.",
      ]}
      benefits={BENEFITS}
      problems={PROBLEMS}
      relatedServices={[
        { title: "Roofing Services", href: "/services/roofing" },
        { title: "Chimney Repair & Rebuilds", href: "/services/chimney-repair" },
        { title: "Chimney Inspections", href: "/services/chimney-inspection" },
      ]}
    />
  );
}
