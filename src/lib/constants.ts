export const COMPANY = {
  name: "Chimneys Plus Roofing & Exteriors",
  shortName: "Chimneys Plus",

  // TODO: Confirm exact founding year with client — used in Hero and About
  founded: 2005,

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
    // TODO: Confirm full list of service areas with client before launch
    serviceAreas: ["Madison", "Dane County", "Poynette", "Sun Prairie", "Middleton", "Waunakee"],
    zip: "53703", // TODO: Confirm correct zip code with client
  },

  // TODO: Add real Wisconsin contractor license number before launch.
  // Look it up at: https://dsps.wi.gov/Pages/Credentialing/CredentialSearch.aspx
  // Display format once you have it: "Lic. #123456789"
  license: null as string | null,

  // TODO: Confirm actual business hours with client before launch.
  // These are displayed on the Contact page sidebar.
  hours: {
    weekdays: "Mon \u2013 Fri: 7 am \u2013 6 pm",
    saturday: "Sat: 8 am \u2013 3 pm",
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
