import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 py-32 text-center">
      <h1 className="text-5xl font-bold text-brand-navy">404</h1>
      <p className="text-muted-foreground">Page not found.</p>
      <Link href="/" className="text-brand-orange underline underline-offset-4">
        Back to Home
      </Link>
    </main>
  );
}
