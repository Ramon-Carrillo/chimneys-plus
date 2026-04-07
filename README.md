# Chimneys Plus — Roofing & Exteriors Website

A modern, statically-rendered marketing website built for a chimney, roofing, and exterior services company serving Madison, WI and the surrounding Dane County area.

Built collaboratively through human-AI pair programming using [Claude Code](https://claude.ai/claude-code).

## About the Project

A fully static marketing site for a local chimney, roofing, and exterior services contractor. The site includes a homepage with hero, services overview, about section, project gallery, and testimonials; a services hub with category pages linking to individual service detail pages; a contact page with a validated form that delivers submissions via email; and SEO scaffolding (sitemap, robots.txt, Open Graph tags, structured keywords).

All business-specific content (company name, phone numbers, email, location, service areas) is centralized in a single constants file with placeholder tokens, making the site easy to white-label or customize for any similar business.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16.2.1](https://nextjs.org/) (App Router, static prerendering) |
| Language | TypeScript |
| UI | React 19, [Tailwind CSS v4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Forms | [React Hook Form](https://react-hook-form.com/) + [Zod v4](https://zod.dev/) validation |
| Contact delivery | [Formspree](https://formspree.io/) |
| Deployment | [Vercel](https://vercel.com/) |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Inter + Montserrat fonts, Header/Footer)
│   ├── page.tsx                # Homepage
│   ├── loading.tsx             # Loading state
│   ├── error.tsx               # Error boundary
│   ├── not-found.tsx           # 404 page
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── robots.ts               # Robots.txt config
│   ├── about/page.tsx          # About page
│   ├── contact/
│   │   ├── page.tsx            # Contact page
│   │   └── actions.ts          # Server Action — Zod validation + Formspree POST
│   ├── projects/page.tsx       # Projects / gallery page
│   └── services/
│       ├── page.tsx            # Services hub (all categories)
│       ├── chimney/page.tsx    # Chimney services detail
│       ├── chimney-inspection/page.tsx
│       ├── chimney-repair/page.tsx
│       ├── roofing/page.tsx    # Roofing services detail
│       └── exteriors/page.tsx  # Exteriors services detail
├── components/
│   ├── home/                   # Homepage sections (Hero, Services, About, Gallery, WhyChooseUs, CTA, Testimonials)
│   ├── layout/                 # Header, Footer, MobileNav
│   ├── contact/                # ContactForm (client component)
│   ├── services/               # ServicePageLayout (reusable RSC for all service detail pages)
│   ├── shared/                 # PhoneButton, ServiceCard
│   └── ui/                     # shadcn/ui primitives (Button, etc.)
├── hooks/
│   └── useScrolled.ts          # Scroll detection hook for header styling
└── lib/
    ├── constants.ts            # Company info, nav links, service lists (single source of truth)
    ├── services-data.ts        # Typed service catalog powering hub + detail pages
    └── utils.ts                # Tailwind `cn()` helper
```

## Key Architecture Decisions

- **All pages are statically prerendered** — no client-side data fetching, no database. The site builds to pure HTML/CSS/JS for maximum performance and SEO.
- **Centralized constants** — all company info (name, phone, email, location, service areas) lives in `src/lib/constants.ts`. To customize the site for a specific business, you only need to update this one file and the metadata in `layout.tsx`.
- **Reusable `ServicePageLayout`** — a single React Server Component powers every service detail page. Each page just passes its unique content (heading, benefits, problems, related services) as props. Zero client JS for service pages.
- **Server Action for contact** — the contact form uses a Next.js Server Action with Zod schema validation. Valid submissions are POSTed to Formspree, which forwards them via email. No API routes needed.
- **Tailwind CSS v4** — uses the new `@import "tailwindcss"` syntax in `globals.css` with no `tailwind.config.js`. Custom theme tokens (brand colors, fonts) are defined via CSS custom properties.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Customization

To use this site for a specific business, update the placeholder tokens:

1. **`src/lib/constants.ts`** — fill in company name, phone numbers, email, location, service areas, business hours, and license number
2. **`src/app/layout.tsx`** — update `metadataBase`, page titles, descriptions, and OG tags
3. **`public/`** — add real images (logo, hero photos, gallery images, OG image)
4. **`src/app/contact/actions.ts`** — update the Formspree form ID (or swap to a different email provider)

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, services overview, about, gallery, and testimonials |
| `/services` | Services hub — all categories with links to detail pages |
| `/services/chimney` | Chimney services detail |
| `/services/chimney-inspection` | Chimney inspection detail |
| `/services/chimney-repair` | Chimney repair detail |
| `/services/roofing` | Roofing services detail |
| `/services/exteriors` | Exterior services detail |
| `/about` | About the company |
| `/projects` | Project gallery |
| `/contact` | Contact form with validation |

## How It Was Built

This project was built entirely through human-AI collaboration using [Claude Code](https://claude.ai/claude-code). Every line of code was generated by the AI assistant based on the developer's direction — from the initial `create-next-app` scaffold all the way through to the genericized, launch-ready state.

The workflow:
- **The developer** defined the business, chose the services, described the pages needed, and provided design/UX feedback
- **The AI assistant** wrote all the code — components, layouts, server actions, SEO metadata, type definitions, and styling
- Iteration happened in real-time: if something wasn't right, the developer would say so and the assistant would adjust

No code was copy-pasted from templates or other projects. The architecture, component design, and content structure all emerged from the conversation.

## License

Private project. All rights reserved.
