/**
 * Root loading.tsx
 *
 * Shown by React Suspense while a route segment streams in.
 * All current pages are statically prerendered so this appears
 * only during dev hot-reloads or if a page ever becomes dynamic.
 *
 * Uses a neutral pulse skeleton that matches the site's navy/white
 * palette without importing any client-side JS.
 */

export default function Loading() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading page content"
      className="flex flex-col"
    >
      {/* Hero skeleton */}
      <div className="bg-brand-navy py-20 lg:py-28 animate-pulse">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-5">
            <div className="h-5 w-40 rounded-full bg-white/15" />
            <div className="space-y-3">
              <div className="h-10 w-3/4 rounded-lg bg-white/15" />
              <div className="h-10 w-1/2 rounded-lg bg-white/15" />
            </div>
            <div className="h-5 w-full rounded bg-white/10" />
            <div className="h-5 w-5/6 rounded bg-white/10" />
            <div className="flex gap-4 pt-2">
              <div className="h-12 w-44 rounded-lg bg-brand-orange/30" />
              <div className="h-12 w-36 rounded-lg bg-white/15" />
            </div>
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-pulse">
          {/* Section header */}
          <div className="mx-auto max-w-lg text-center mb-12 space-y-3">
            <div className="mx-auto h-5 w-28 rounded-full bg-muted" />
            <div className="mx-auto h-8 w-2/3 rounded-lg bg-muted" />
            <div className="mx-auto h-5 w-4/5 rounded bg-muted" />
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-muted/40 p-7 space-y-4"
              >
                <div className="h-12 w-12 rounded-xl bg-muted" />
                <div className="h-5 w-3/4 rounded bg-muted" />
                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-muted" />
                  <div className="h-4 w-5/6 rounded bg-muted" />
                  <div className="h-4 w-4/6 rounded bg-muted" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
