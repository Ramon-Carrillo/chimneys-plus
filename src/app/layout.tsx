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

export const metadata: Metadata = {
  metadataBase: new URL("https://chimneysplus.com"),
  title: {
    default: "Chimneys Plus Roofing & Exteriors | Madison, WI",
    template: "%s | Chimneys Plus — Madison, WI",
  },
  description:
    "Expert chimney inspections, cleanings, repairs, rebuilds, and roofing services in Madison, WI and Dane County. Licensed & insured. Call (608) 738-1268 for a free estimate.",
  keywords: [
    "chimney repair Madison WI",
    "chimney cleaning Madison Wisconsin",
    "chimney inspection Dane County",
    "chimney sweep Madison WI",
    "chimney liner replacement Wisconsin",
    "chimney crown repair Madison",
    "chimney rebuild Wisconsin",
    "fireplace insert installation Madison",
    "roofing contractor Madison WI",
    "roofing Dane County",
    "siding contractor Madison WI",
    "exterior services Madison Wisconsin",
    "Chimneys Plus Roofing",
    "Poynette WI chimney",
  ],
  authors: [{ name: "Chimneys Plus Roofing & Exteriors" }],
  creator: "Chimneys Plus Roofing & Exteriors",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chimneysplus.com",
    siteName: "Chimneys Plus Roofing & Exteriors",
    title: "Chimneys Plus Roofing & Exteriors | Madison, WI",
    description:
      "Licensed chimney and roofing specialists serving Madison, WI and all of Dane County. Inspections, cleanings, repairs, liners, inserts, roofing, and siding.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chimneys Plus Roofing & Exteriors — Madison, WI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimneys Plus Roofing & Exteriors | Madison, WI",
    description:
      "Licensed chimney and roofing specialists serving Madison, WI and all of Dane County.",
    images: ["/og-image.jpg"],
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
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
    </html>
  );
}
