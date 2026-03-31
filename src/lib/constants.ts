export const COMPANY = {
  name: "Chimneys Plus Roofing & Exteriors",
  shortName: "Chimneys Plus",
  phone: {
    main: "(608) 738-1268",
    secondary: "(608) 733-0097",
    mainHref: "tel:+16087381268",
    secondaryHref: "tel:+16087330097",
  },
  email: "chimneyspluswisco@gmail.com",
  emailHref: "mailto:chimneyspluswisco@gmail.com",
  location: {
    city: "Madison",
    state: "WI",
    region: "Dane County",
    serviceAreas: ["Madison", "Dane County", "Poynette", "Sun Prairie", "Middleton", "Waunakee"],
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
