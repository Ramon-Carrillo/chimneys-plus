import type { Metadata } from "next";
import GallerySection from "@/components/home/GallerySection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse completed chimney, roofing, and exterior projects by Cascade Hearth & Roofing across Portland, OR and Pacific Northwest.",
};

export default function ProjectsPage() {
  return (
    <main>
      {/* ── Page hero ───────────────────────────────────────────── */}
      <section className="bg-brand-navy py-20 lg:py-24" aria-label="Projects hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/15 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-orange uppercase mb-6">
            Project Gallery
          </span>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Real Projects,{" "}
            <span className="text-brand-orange">Real Results</span>
          </h1>
          <p className="mt-5 mx-auto max-w-xl text-lg leading-relaxed text-white/60">
            A selection of chimney rebuilds, roof replacements, and exterior
            work we&rsquo;ve completed for homeowners in the local area.
          </p>
        </div>
      </section>

      {/* ── Gallery (reused from homepage) ──────────────────────── */}
      <GallerySection />
    </main>
  );
}
