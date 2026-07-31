import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import ScrollProgress from "@/components/layout/ScrollProgress";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fiona-reid-interiors.vercel.app";

const siteDescription =
  "Fiona Reid Interiors is a Glasgow-based interior design studio taking on private residential, commercial, and hospitality projects across Scotland and the UK.";

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
    "luxury interior design",
    "residential interior designer",
    "commercial interior design Glasgow",
    "hospitality interior design",
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
  name: "Fiona Reid Interiors",
  image: `${siteUrl}/logo.png`,
  url: siteUrl,
  telephone: "+447835708435",
  email: "info@fionareidinteriors.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "37 Otago Street",
    addressLocality: "Glasgow",
    postalCode: "G12 8JJ",
    addressCountry: "GB",
  },
  areaServed: ["Glasgow", "Scotland", "United Kingdom"],
  sameAs: ["https://www.instagram.com/fionareidinteriors"],
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <Nav />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
