import type { Metadata } from "next";
import {
  ShieldCheck,
  Search,
  HardHat,
  Clock,
  Flame,
  FileText,
} from "lucide-react";
import ServicePageLayout, {
  type Benefit,
  type Problem,
} from "@/components/services/ServicePageLayout";

// ── SEO Metadata ──────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Chimney Inspections & Cleanings",
  description:
    "NFPA 211 Level 1, 2 & 3 chimney inspections and annual cleanings in Madison, WI. CSIA-certified technicians. Remove creosote, prevent chimney fires. Free estimates.",
  keywords: [
    "chimney inspection Madison WI",
    "chimney cleaning Madison Wisconsin",
    "chimney sweep Madison WI",
    "chimney inspection Dane County",
    "CSIA certified chimney inspection Wisconsin",
    "Level 2 chimney inspection Madison",
    "annual chimney cleaning Madison WI",
    "creosote removal Madison Wisconsin",
    "chimney inspection near me Madison",
    "chimney sweep Waunakee WI",
    "chimney cleaning Sun Prairie WI",
    "fireplace inspection Madison WI",
  ],
  openGraph: {
    title: "Chimney Inspections & Cleanings — Madison, WI | Chimneys Plus",
    description:
      "CSIA-certified Level 1, 2 & 3 inspections and annual chimney cleanings in Madison & Dane County. Prevent fires, catch damage early. Free estimates.",
    url: "/services/chimney-inspection",
    type: "website",
  },
  alternates: {
    canonical: "/services/chimney-inspection",
  },
};

// ── Page data ─────────────────────────────────────────────────────

const BENEFITS: Benefit[] = [
  {
    icon: HardHat,
    title: "CSIA-Certified Inspectors",
    body: "Our inspectors hold current Chimney Safety Institute of America certifications and follow NFPA 211 inspection standards — the same protocols insurance companies and home buyers rely on.",
  },
  {
    icon: FileText,
    title: "Written Inspection Report",
    body: "Every inspection includes a detailed written report with photos of any deficiencies found. You'll have documentation to share with your insurance company or real estate agent.",
  },
  {
    icon: Search,
    title: "We Look Where Others Don't",
    body: "We inspect the firebox, smoke chamber, liner, crown, cap, flashing, and exterior masonry — not just the parts visible from the fireplace opening. Level 2 inspections include video scanning.",
  },
  {
    icon: Flame,
    title: "Creosote Removal Done Right",
    body: "We remove all three stages of creosote — including glazed Stage 3 creosote that standard brushes can't touch. Proper removal requires the right chemicals, not just rotary equipment.",
  },
  {
    icon: ShieldCheck,
    title: "Carbon Monoxide & Fire Prevention",
    body: "A blocked or cracked flue is a leading cause of residential fires and CO poisoning. Annual inspections catch these hazards before they become emergencies.",
  },
  {
    icon: Clock,
    title: "Convenient Scheduling",
    body: "Spring and fall slots book out fast — we recommend scheduling before the rush. We offer weekday and Saturday appointments across Madison and Dane County.",
  },
];

const PROBLEMS: Problem[] = [
  {
    title: "Stage 1–3 Creosote Buildup",
    description:
      "Every wood fire deposits creosote — a flammable byproduct of incomplete combustion — on the liner walls. Stage 1 is a light flaky deposit; Stage 3 is a hard, tar-like glaze that requires chemical treatment. The National Fire Protection Association reports that creosote buildup is the leading cause of chimney fires in the U.S.",
    solution:
      "Annual sweeping removes Stage 1 and most Stage 2 creosote. For glazed Stage 3 buildup we apply a chemical deglacier that converts the glaze to a brushable ash, then sweep and re-inspect the liner for heat damage from prior fires.",
  },
  {
    title: "Animal Nests & Debris Blocking the Flue",
    description:
      "Raccoons, squirrels, and chimney swifts regularly nest in uncapped flues. Nesting material is highly flammable, and a blocked flue forces combustion gases — including carbon monoxide — back into the living space instead of venting outside.",
    solution:
      "We remove the nesting material, clean any residue from the liner, and install a stainless-steel chimney cap sized to your flue. The cap prevents re-entry while still allowing normal draft.",
  },
  {
    title: "Damaged or Deteriorated Flue Liner",
    description:
      "Clay tile liners crack from heat stress and freeze-thaw cycling. A compromised liner allows carbon monoxide to migrate through mortar joints into adjacent walls, and — if a chimney fire occurs — allows heat to reach combustible framing rather than being contained in the flue.",
    solution:
      "A Level 2 video inspection identifies liner damage that isn't visible from inside the firebox. Depending on severity we recommend a stainless-steel liner relining or cast-in-place liner restoration.",
  },
  {
    title: "Smoke Chamber & Smoke Shelf Buildup",
    description:
      "The smoke chamber above the damper concentrates combustion gases before they enter the flue. It accumulates both creosote and loose debris, and its parged (coated) walls can spall away — creating rough surfaces that further trap deposits and slow draft.",
    solution:
      "We clean the smoke chamber with rotary tools and inspect the parging. Where the parging is cracked or missing, we apply a high-temperature refractory mortar restoration to restore the smooth, code-compliant surface.",
  },
  {
    title: "Improper Appliance Connection (Wood Stove or Insert)",
    description:
      "A wood stove or fireplace insert that's connected to the wrong flue size, or that's connected without a properly installed liner, is both inefficient and dangerous. Oversized flues create downdraft; undersized connections cause back-puffing and CO spillage.",
    solution:
      "We inspect the entire appliance connection — from the stove collar to the cap — and confirm that flue size, liner sizing, and clearances meet NFPA 211 and appliance manufacturer specifications. We provide a written compliance report.",
  },
];

// ── Page ──────────────────────────────────────────────────────────

export default function ChimneyInspectionPage() {
  return (
    <ServicePageLayout
      serviceTitle="Chimney Inspections & Cleanings"
      eyebrow="NFPA 211 Certified — Madison, WI"
      heading="Chimney Inspections & Cleanings in Madison & Dane County, WI"
      subheading="Annual chimney sweeping and NFPA 211 Level 1, 2, and 3 inspections by CSIA-certified technicians — the safest way to start every heating season in Wisconsin."
      description={[
        "The National Fire Protection Association recommends every chimney be inspected at least once per year — and for good reason. A clean, properly functioning flue is the difference between a cozy fire and a house fire. In Wisconsin, where wood-burning fireplaces and stoves get heavy seasonal use, skipping annual service is a risk no homeowner should take.",
        "Chimneys Plus performs NFPA 211 Level 1, 2, and 3 chimney inspections across Madison and Dane County. Level 1 covers accessible portions with no obstructions; Level 2 — required any time you buy or sell a home, change your heating appliance, or after any event that may have damaged the chimney — adds a video scan of the full liner length; Level 3 involves removal of components to access concealed areas. We carry the right equipment for all three.",
        "Our sweeping service removes creosote at all three stages of buildup, clears nesting material and debris, and leaves the firebox, smoke shelf, and smoke chamber clean. Booking annually in spring (after the heating season) or early fall (before it) keeps your chimney clean year-round and catches issues while they're small.",
        "Every inspection includes a detailed written report with photographs. If we find deficiencies, we'll explain exactly what we found, what the risk is, and what it will cost to fix — no pressure, no inflated urgency.",
      ]}
      benefits={BENEFITS}
      problems={PROBLEMS}
      relatedServices={[
        { title: "Chimney Repair & Rebuilds", href: "/services/chimney-repair" },
        { title: "Chimney Liners & Caps", href: "/services/chimney" },
        { title: "Fireplace & Stove Inserts", href: "/services/chimney" },
      ]}
    />
  );
}
