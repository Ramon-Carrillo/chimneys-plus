import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactCompiler disabled — causes hydration mismatches with framer-motion
  // reactCompiler: true,

  // ── Bundle optimisation ───────────────────────────────────────────────
  // Without this, every file that imports from `lucide-react`,
  // `framer-motion`, or `radix-ui` ships the entire package's bundle.
  // With it, Next rewrites the imports per-file at build time so only
  // the symbols you actually use travel down the wire. On this site
  // that's the difference between ~1 MB of unused JS and a few KB.
  experimental: {
    // framer-motion is no longer a dependency — its on-scroll animations
    // were replaced with a tiny IntersectionObserver wrapper
    // (components/ui/reveal.tsx) plus CSS keyframes. The few remaining
    // heavy package imports still benefit from per-file tree-shaking.
    optimizePackageImports: [
      "lucide-react",
      "radix-ui",
    ],
  },

  images: {
    // `qualities` was a whitelist of allowed `quality` prop values.
    // It was a footgun: any <Image quality={N}> where N wasn't in the
    // list returned HTTP 400 (INVALID_IMAGE_OPTIMIZE_REQUEST) and the
    // browser fell back to the un-optimised origin image. Removing it
    // lets Next use its built-in default (75) plus any explicit quality
    // overrides. Re-add only if you genuinely need to constrain values.

    // Modern formats first — saves 20-40% over PNG/JPEG on every image
    // route. AVIF is the default in Next 16 but spelling it out keeps
    // the contract explicit even if defaults change.
    formats: ["image/avif", "image/webp"],
    // No remote hosts needed — the hero image is now self-hosted at
    // /public/images/hero.jpg, and no other image in the site fetches
    // remotely. Add a pattern back if a future page needs an external
    // CDN image.
    remotePatterns: [],
  },
};

export default nextConfig;
