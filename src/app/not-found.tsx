import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-32 text-center">
      {/* Big 404 */}
      <p
        className="font-heading text-[8rem] font-extrabold leading-none text-brand-navy/10 select-none"
        aria-hidden="true">
        404
      </p>

      <div className="-mt-6">
        <h1 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mt-3 max-w-sm text-muted-foreground">
          We couldn&rsquo;t find what you were looking for. It may have moved,
          or the link might be incorrect.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-5 py-3 text-sm font-bold text-brand-navy-dark transition-colors hover:bg-brand-orange-hover">
            Back to Home
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-5 py-3 text-sm font-bold text-foreground transition-colors hover:bg-muted">
            View Services
          </Link>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Or call us directly:{" "}
          <a
            href={COMPANY.phone.mainHref}
            className="inline-flex items-center gap-1.5 font-semibold text-brand-orange hover:underline">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {COMPANY.phone.main}
          </a>
        </p>
      </div>
    </main>
  );
}
