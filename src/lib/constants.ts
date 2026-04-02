export const COMPANY = {
  name: "[Company Name]",
  shortName: "[Company Name]",
  tagline: "[Company Tagline]", // e.g. "Roofing & Exteriors"

  // TODO: Replace with actual founding year
  founded: 0,

  phone: {
    main: "[Phone Number]",
    secondary: "[Secondary Phone]",
    mainHref: "tel:+10000000000",
    secondaryHref: "tel:+10000000000",
  },
  email: "[email@example.com]",
  emailHref: "mailto:email@example.com",

  location: {
    city: "[City]",
    state: "[State]",
    region: "[Region]",
    serviceAreas: ["[City]", "[Area 1]", "[Area 2]", "[Area 3]", "[Area 4]", "[Area 5]"],
    zip: "[ZIP Code]",
  },

  // TODO: Add real contractor license number before launch.
  license: null as string | null,

  // TODO: Confirm actual business hours before launch.
  hours: {
    weekdays: "Mon \u2013 Fri: [Hours]",
    saturday: "Sat: [Hours]",
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
