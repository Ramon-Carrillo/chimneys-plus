import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // TODO: Replace with your actual domain before launch
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Cascade Hearth & Roofing | Portland, OR",
    template: "%s | Cascade Hearth & Roofing — Portland, OR",
  },
  description:
    "Expert chimney inspections, cleanings, repairs, rebuilds, and roofing services in Portland, OR and Pacific Northwest. Licensed & insured. Call (503) 555-0100 for a free estimate.",
  keywords: [
    "chimney repair Portland OR",
    "chimney cleaning Portland OR",
    "chimney inspection Pacific Northwest",
    "chimney sweep Portland OR",
    "chimney liner replacement OR",
    "chimney crown repair Portland",
    "chimney rebuild OR",
    "fireplace insert installation Portland",
    "roofing contractor Portland OR",
    "roofing Pacific Northwest",
    "siding contractor Portland OR",
    "exterior services Portland OR",
  ],
  authors: [{ name: "Cascade Hearth & Roofing" }],
  creator: "Cascade Hearth & Roofing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    siteName: "Cascade Hearth & Roofing",
    title: "Cascade Hearth & Roofing | Portland, OR",
    description:
      "Licensed chimney and roofing specialists serving Portland, OR and all of Pacific Northwest. Inspections, cleanings, repairs, liners, inserts, roofing, and siding.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cascade Hearth & Roofing — Portland, OR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cascade Hearth & Roofing | Portland, OR",
    description:
      "Licensed chimney and roofing specialists serving Portland, OR and all of Pacific Northwest.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Skip-to-content — visible only on keyboard focus */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-brand-orange focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main-content" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
