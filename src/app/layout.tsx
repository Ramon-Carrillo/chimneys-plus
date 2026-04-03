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
    default: "[Company Name] | [City], [State]",
    template: "%s | [Company Name] — [City], [State]",
  },
  description:
    "Expert chimney inspections, cleanings, repairs, rebuilds, and roofing services in [City], [State] and [Region]. Licensed & insured. Call [Phone Number] for a free estimate.",
  keywords: [
    "chimney repair [City] [State]",
    "chimney cleaning [City] [State]",
    "chimney inspection [Region]",
    "chimney sweep [City] [State]",
    "chimney liner replacement [State]",
    "chimney crown repair [City]",
    "chimney rebuild [State]",
    "fireplace insert installation [City]",
    "roofing contractor [City] [State]",
    "roofing [Region]",
    "siding contractor [City] [State]",
    "exterior services [City] [State]",
  ],
  authors: [{ name: "[Company Name]" }],
  creator: "[Company Name]",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    siteName: "[Company Name]",
    title: "[Company Name] | [City], [State]",
    description:
      "Licensed chimney and roofing specialists serving [City], [State] and all of [Region]. Inspections, cleanings, repairs, liners, inserts, roofing, and siding.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "[Company Name] — [City], [State]",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "[Company Name] | [City], [State]",
    description:
      "Licensed chimney and roofing specialists serving [City], [State] and all of [Region].",
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
    >
      <body className="min-h-full flex flex-col">
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
