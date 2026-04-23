import type { Metadata } from "next";
import {
  ShieldCheck,
  Wrench,
  HardHat,
  Clock,
  ThumbsUp,
  Droplets,
} from "lucide-react";
import ServicePageLayout, {
  type Benefit,
  type Problem,
} from "@/components/services/ServicePageLayout";

// ── SEO Metadata ──────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Chimney Repair & Rebuilds",
  description:
    "Expert chimney repair in Portland, OR — tuckpointing, crown repair, spalling brick, and full chimney rebuilds. Licensed & insured. Free estimates. Serving all of Pacific Northwest.",
  keywords: [
    "chimney repair Portland OR",
    "chimney repair Pacific Northwest",
    "chimney rebuild Portland OR",
    "tuckpointing Portland OR",
    "chimney crown repair Portland",
    "spalling brick chimney repair OR",
    "chimney mortar repair Portland",
    "chimney flashing repair Portland OR",
  ],
  openGraph: {
    title: "Chimney Repair & Rebuilds — Portland, OR | Cascade Hearth & Roofing",
    description:
      "Cracked crowns, spalling brick, deteriorated mortar — we fix it all. Licensed chimney repair specialists serving Portland & Pacific Northwest.",
    url: "/services/chimney-repair",
    type: "website",
  },
  alternates: {
    canonical: "/services/chimney-repair",
  },
};

// ── Page data ─────────────────────────────────────────────────────

const BENEFITS: Benefit[] = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    body: "Every technician carries full general liability and workers' compensation coverage. You're protected the moment our truck pulls up.",
  },
  {
    icon: HardHat,
    title: "CSIA-Certified Masonry Work",
    body: "Our chimney professionals hold current CSIA certifications — the national benchmark for safe, code-compliant chimney repair.",
  },
  {
    icon: Wrench,
    title: "Right Repair, Not the Biggest Job",
    body: "We diagnose before we quote. If tuckpointing fixes the problem, we won't upsell you on a full rebuild. Honest scoping saves you money.",
  },
  {
    icon: Droplets,
    title: "Climate-Tested Materials",
    body: "We use Type S masonry mortar and elastomeric crowns rated for freeze-thaw cycling — not the cheapest material that'll crack again next season.",
  },
  {
    icon: Clock,
    title: "Fast Scheduling",
    body: "Most non-emergency repairs are scheduled within the week. Urgent structural issues — we prioritize you.",
  },
  {
    icon: ThumbsUp,
    title: "Written Warranty",
    body: "Our repair work comes with a written workmanship warranty. If something we fixed fails, we come back and make it right.",
  },
];

const PROBLEMS: Problem[] = [
  {
    title: "Spalling Brick — Faces Flaking or Popping Off",
    description:
      "Water penetrates porous brick, freezes, expands, and breaks the face of the brick off from the inside. Once spalling starts it accelerates: exposed brick core absorbs even more water. Left unchecked it destabilizes the entire chimney stack.",
    solution:
      "We remove the damaged brick, clean the cavity, and install new matching brick using Type S mortar. On severe cases we apply a masonry consolidant to stabilize the remaining structure before re-facing.",
  },
  {
    title: "Deteriorated Mortar Joints — Water, Cold Air, and Carbon Monoxide",
    description:
      "Mortar is softer than brick and weathers first. When joints erode beyond 1/4\", water channels in, freeze-thaw damage spreads to the brick, and — critically — gaps in the firebox mortar can allow carbon monoxide to seep into living spaces.",
    solution:
      "Tuckpointing: we grind out the old mortar to at least 3/4\" depth and pack in new mortar matched to the original color and composition. The result looks new and — more importantly — is watertight and gas-tight.",
  },
  {
    title: "Cracked or Missing Chimney Crown",
    description:
      "The crown is the concrete cap that covers the top of the chimney masonry, leaving only the flue liner exposed. A cracked crown is the single most common entry point for water in local chimneys — water pours in, runs down the liner, and soaks the firebox.",
    solution:
      "For minor cracks we apply a flexible elastomeric crown coat. For severely cracked or missing crowns we form and pour a new crown with a drip edge, sloped to shed water away from the liner.",
  },
  {
    title: "Leaning or Offset Chimney — Structural Movement",
    description:
      "A chimney that visibly leans or has offset courses has usually lost its footing or suffered freeze-thaw heaving in the foundation. This is a life-safety issue — a failing chimney can collapse onto the roof or adjacent structure.",
    solution:
      "We conduct a full structural assessment and — where needed — perform a partial or full chimney rebuild from the roofline up, including new flashing, crown, and cap. We document everything with before/after photos.",
  },
  {
    title: "Damaged or Missing Flashing",
    description:
      "Flashing seals the joint between the chimney masonry and roof deck. When it corrodes, separates, or was never properly counter-flashed into the mortar joints, water runs straight down the interior chimney wall and into the attic or ceiling.",
    solution:
      "We remove the failed flashing and install two-piece step-and-counter flashing set in mortar joints and secured with roofing sealant — the correct method that holds through harsh winters.",
  },
  {
    title: "Efflorescence — White Staining on Brick",
    description:
      "Those white chalky deposits are mineral salts carried to the surface by water moving through the masonry. Efflorescence itself doesn't damage brick, but it's a reliable indicator that water is actively moving through your chimney wall.",
    solution:
      "We treat the staining with an acid-based efflorescence cleaner, identify and seal the water entry point (typically failed mortar joints or a cracked crown), then apply a vapor-permeable masonry water repellent.",
  },
];

// ── Page ──────────────────────────────────────────────────────────

export default function ChimneyRepairPage() {
  return (
    <ServicePageLayout
      serviceTitle="Chimney Repair"
      eyebrow="Chimney Repair & Rebuilds — Portland, OR"
      heading="Chimney Repair & Rebuilds in Portland & Pacific Northwest, OR"
      subheading="Spalling brick, cracked crowns, failed flashing, deteriorated mortar — we diagnose the root cause and fix it to last, using materials rated for harsh freeze-thaw cycles."
      description={[
        "Harsh winters are brutal on chimney masonry. Every freeze-thaw cycle forces water deeper into micro-cracks, expands them, and opens new ones. By the time you notice water stains on the ceiling or a leaning chimney stack, the damage has usually been building for years.",
        "We've been repairing chimneys in Portland and across Pacific Northwest since 2015. We've seen every failure mode — from minor mortar erosion that a day of tuckpointing resolves, to multi-course structural collapses that require a full rebuild from the roofline up. We diagnose before we quote, which means you only pay for what your chimney actually needs.",
        "All repair work uses materials specified for the local climate: Type S masonry mortar, elastomeric crown coatings, stainless-steel flashing, and vapor-permeable water repellents. We don't use products that look good in the short run but fail in the next hard winter.",
        "Every job includes before-and-after documentation and a written workmanship warranty. If something we fixed fails, we come back and make it right.",
      ]}
      benefits={BENEFITS}
      problems={PROBLEMS}
      relatedServices={[
        { title: "Chimney Inspections & Cleanings", href: "/services/chimney-inspection" },
        { title: "Chimney Liners & Caps", href: "/services/chimney" },
        { title: "Roofing Services", href: "/services/roofing" },
      ]}
    />
  );
}
