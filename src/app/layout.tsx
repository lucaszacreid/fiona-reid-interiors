import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CookieConsent from "@/components/layout/CookieConsent";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import Analytics from "@/components/analytics/Analytics";
import { business, siteUrl } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

const siteDescription =
  "Fiona Reid Interiors is a Glasgow-based interior design studio taking on private residential, commercial, and hospitality projects across the UK, Europe, and the United States — with recent work in London, Paris, New York, and the UAE.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fiona Reid Interiors — Interior Designer in Glasgow",
    template: "%s — Fiona Reid Interiors",
  },
  description: siteDescription,
  keywords: [
    "interior designer Glasgow",
    "interior design Scotland",
    "interior design UK",
    "luxury interior design",
    "international interior designer",
    "residential interior designer",
    "commercial interior design",
    "hospitality interior design",
    "interior designer Europe",
    "interior designer New York",
    "interior designer Paris",
    "interior designer UAE",
  ],
  authors: [{ name: "Fiona Reid Interiors" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Fiona Reid Interiors",
    title: "Fiona Reid Interiors — Interior Designer in Glasgow",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiona Reid Interiors — Interior Designer in Glasgow",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  image: `${siteUrl}/logo.png`,
  url: siteUrl,
  telephone: business.telephone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.locality,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.latitude,
    longitude: business.geo.longitude,
  },
  areaServed: business.areaServed,
  sameAs: [business.instagram],
  description: siteDescription,
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Online Design Consultation" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full-Service Residential Interior Design" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Developer Show Homes" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Interiors" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="flex min-h-screen flex-col pb-16 md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <ScrollProgress />
        <Nav />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <MobileStickyBar />
        <CookieConsent />
      </body>
    </html>
  );
}
