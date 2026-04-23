export const COMPANY = {
  name: "Cascade Hearth & Roofing",
  shortName: "Cascade Hearth & Roofing",
  tagline: "Chimney, roofing, and exterior services you can trust", // e.g. "Roofing & Exteriors"

  // TODO: Replace with actual founding year
  founded: 2015,

  phone: {
    main: "(503) 555-0100",
    secondary: "(503) 555-0150",
    mainHref: "tel:+15035550100",
    secondaryHref: "tel:+15035550100",
  },
  email: "hello@cascadehearth.example",
  emailHref: "mailto:hello@cascadehearth.example",

  location: {
    city: "Portland",
    state: "OR",
    region: "Pacific Northwest",
    serviceAreas: ["Portland", "Beaverton", "Lake Oswego", "Tigard", "Hillsboro", "Gresham"],
    zip: "97201",
  },

  // TODO: Add real contractor license number before launch.
  license: "CCB# 123456" as string | null,

  // TODO: Confirm actual business hours before launch.
  hours: {
    weekdays: "Mon \u2013 Fri: 7am – 6pm",
    saturday: "Sat: 8am – 4pm",
    sunday:   "Sun: Closed",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "chimney",
    label: "Chimney Services",
    href: "/services/chimney",
    items: [
      "Chimney Inspections",
      "Chimney Cleanings",
      "Chimney Repairs",
      "Chimney Rebuilds",
      "Chimney Liners",
      "Chimney Crowns",
      "Fireplace & Stove Inserts",
    ],
  },
  {
    slug: "roofing",
    label: "Roofing",
    href: "/services/roofing",
    items: ["Roof Replacement", "Roof Repair", "Roof Inspection"],
  },
  {
    slug: "exteriors",
    label: "Exteriors",
    href: "/services/exteriors",
    items: ["Siding Installation", "Siding Repair", "Exterior Services"],
  },
] as const;
