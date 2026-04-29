'use client'

/**
 * Root error.tsx — React Error Boundary
 *
 * Catches unexpected runtime errors in any route segment and shows
 * a recovery UI.  Must be a Client Component per Next.js docs.
 *
 * The `unstable_retry` prop re-renders the failed segment without
 * a full page reload (replaces the deprecated `reset` callback).
 */

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RotateCcw, Phone } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

type ErrorProps = {
  error: Error & { digest?: string }
  unstable_retry: () => void
}

export default function GlobalError({ error, unstable_retry }: ErrorProps) {
  useEffect(() => {
    // Replace with your error-monitoring service (Sentry, Datadog, etc.)
    console.error('[Error Boundary]', error)
  }, [error])

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-32 text-center">
      {/* Icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 mb-6">
        <AlertTriangle
          className="h-10 w-10 text-destructive"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      {/* Copy */}
      <h1 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-sm text-muted-foreground">
        We hit an unexpected error loading this page. Try refreshing, or reach
        out and we&rsquo;ll get it sorted.
      </p>

      {/* Digest (dev/support reference) */}
      {error.digest && (
        <p className="mt-2 text-xs text-muted-foreground/60">
          Error ID: <code className="font-mono">{error.digest}</code>
        </p>
      )}

      {/* Actions */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={unstable_retry}
          className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-5 py-3 text-sm font-bold text-brand-navy-dark transition-colors hover:bg-brand-orange-hover"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-5 py-3 text-sm font-bold text-foreground transition-colors hover:bg-muted"
        >
          Back to Home
        </Link>
      </div>

      {/* Fallback contact */}
      <p className="mt-10 text-sm text-muted-foreground">
        Need help right now?{' '}
        <a
          href={COMPANY.phone.mainHref}
          className="inline-flex items-center gap-1.5 font-semibold text-brand-orange hover:underline"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          {COMPANY.phone.main}
        </a>
      </p>
    </main>
  )
}
