import type { Metadata } from "next";
import Link from "next/link";
import { Home, Wrench, Search, ArrowRight, Phone, CheckCircle2, ShieldCheck, HardHat, ThumbsUp, Clock } from "lucide-react";
import ServicePageLayout, { type Benefit, type Problem } from "@/components/services/ServicePageLayout";

// ── SEO Metadata ──────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Roofing Services",
  description:
    "Roof replacement, repair, and inspection in [City], [State] and [Region]. Licensed & insured roofing contractor. Storm damage, insurance claims, free estimates. [Phone Number].",
  keywords: [
    "roofing contractor [City] [State]",
    "roof replacement [City] [State]",
    "roof repair [City] [State]",
    "roof inspection [City] [State]",
    "storm damage roof repair [Region]",
    "insurance claim roofing [City]",
    "shingle replacement [City] [State]",
  ],
  openGraph: {
    title: "Roofing Services — [City], [State] | [Company Name]",
    description:
      "Roof replacement, repair, and storm-damage assessment in [City] & [Region]. Licensed & insured. Insurance claims welcome. Free estimates.",
    url: "/services/roofing",
    type: "website",
  },
  alternates: {
    canonical: "/services/roofing",
  },
};

// ── Page data ─────────────────────────────────────────────────────

const BENEFITS: Benefit[] = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    body: "Fully licensed and carrying general liability plus workers' compensation. You're protected from the first nail to final cleanup.",
  },
  {
    icon: HardHat,
    title: "Quality Shingles for Local Conditions",
    body: "We install architectural shingles with manufacturer ratings for wind and impact resistance — products designed for the ice, snow, and freeze-thaw conditions local homeowners deal with every year.",
  },
  {
    icon: Home,
    title: "Ice & Water Shield, Done Right",
    body: "Local code requires ice-and-water shield at eaves. We extend it further than code minimum wherever your roof geometry creates risk — valleys, penetrations, and low-slope transitions.",
  },
  {
    icon: ThumbsUp,
    title: "Insurance Claims Assistance",
    body: "Storm damage? We document everything thoroughly, meet your adjuster on-site, and provide the detailed scope insurance companies need. We've helped dozens of local homeowners get full replacement coverage.",
  },
  {
    icon: Search,
    title: "Honest Assessment First",
    body: "Not every roof with storm damage needs full replacement. We'll tell you honestly if targeted repairs extend your roof's life another 5–10 years — and we'll put that recommendation in writing.",
  },
  {
    icon: Clock,
    title: "Clean, Efficient Crews",
    body: "Our crews run magnetic sweeps, haul away all old material, and don't leave until the job site is clean. Most replacements on standard homes complete in a single day.",
  },
];

const PROBLEMS: Problem[] = [
  {
    title: "Missing, Cracked, or Curling Shingles",
    description:
      "Individual shingles fail from wind uplift, hail impact, or simply reaching the end of their service life. A single missing shingle can allow water to penetrate the roof deck within hours of the next rain event.",
    solution:
      "For isolated failures we match replacement shingles to your existing roof and install with proper nailing patterns and sealing. Where a significant portion of the roof shows the same failure mode, we discuss full replacement and the cost comparison.",
  },
  {
    title: "Ice Dams — Icicles and Attic Water Damage",
    description:
      "Ice dams form when attic heat melts snow on the upper roof, which refreezes at the cold eaves and backs water under the shingles. The water then works through the roof deck, soaking insulation and ceiling drywall. Homes with inadequate attic insulation or ventilation are especially prone.",
    solution:
      "We assess both the roofing and the underlying cause. Short-term: we remove the ice dam safely and install or extend ice-and-water shield at the eaves. Long-term: we document the attic ventilation issue and recommend the right insulation or soffit/ridge-vent correction.",
  },
  {
    title: "Flashing Failures — Skylights, Chimneys, and Valleys",
    description:
      "Flashing seals every roof penetration and change-of-plane. Improperly installed or corroded flashing — especially around chimneys and skylights — is one of the top causes of roof leaks that owners discover on interior ceilings, often years after the flashing first failed.",
    solution:
      "We remove failed flashing and reinstall using the correct step-flashing and counter-flashing method. Chimney flashing is set in mortar joints and sealed with elastomeric roofing sealant — not caulk. Skylight flashing is installed per manufacturer specs.",
  },
  {
    title: "Granule Loss and Aging Shingles",
    description:
      "Asphalt shingles lose granules as they age — you'll see them in the gutters. Heavy granule loss exposes the asphalt mat to UV, which accelerates deterioration. A roof losing significant granules is typically within 3–5 years of failure.",
    solution:
      "We document granule loss with a written assessment and help you plan ahead. Replacing a roof before it fails keeps the decision on your timeline and prevents the interior water damage that an emergency replacement can't undo.",
  },
];

// ── Page ──────────────────────────────────────────────────────────

export default function RoofingServicesPage() {
  return (
    <ServicePageLayout
      serviceTitle="Roofing"
      eyebrow="Licensed Roofing Contractor — [City], [State]"
      heading="Roofing Services in [City] & [Region], [State]"
      subheading="Roof replacements, repairs, and storm assessments using quality materials rated for harsh winters. Licensed, insured, and ready for insurance claims."
      description={[
        "Your roof is your home's first line of defense against the elements — and local weather is not gentle. Hailstorms in summer, ice dams in winter, wind events year-round. When the roof fails, water finds its way in fast, and the damage compounds with every passing week.",
        "We handle roofing across [City] and [Region] with the same approach we bring to chimney work: diagnose honestly, use the right materials, and stand behind the work. We install architectural shingles from manufacturers with strong wind and impact ratings, extend ice-and-water shield beyond code minimum at every high-risk location, and complete most residential replacements in a single day.",
        "For storm-damage claims, we work directly with insurance adjusters. We document the damage with photographs, provide a detailed scope of work, and meet your adjuster on-site so nothing gets missed. Many local homeowners have had full replacement claims approved that they weren't sure would be covered.",
        "Not every problem is a full replacement job. If targeted repairs can safely extend your roof's life five to ten years, we'll tell you — and price it accordingly.",
      ]}
      benefits={BENEFITS}
      problems={PROBLEMS}
      relatedServices={[
        { title: "Chimney Repair & Rebuilds", href: "/services/chimney-repair" },
        { title: "Chimney Inspections", href: "/services/chimney-inspection" },
        { title: "Siding & Exteriors", href: "/services/exteriors" },
      ]}
    />
  );
}
