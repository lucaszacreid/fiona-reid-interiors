"use client";

import Script from "next/script";
import { useConsentStatus } from "@/lib/consent";

// TODO: paste real IDs into .env.local / Vercel env vars once available.
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const ADS_ID = process.env.NEXT_PUBLIC_ADS_CONVERSION_ID;

export default function Analytics() {
  const consent = useConsentStatus();

  if (consent !== "granted" || (!GA4_ID && !ADS_ID)) return null;

  const primaryId = GA4_ID || ADS_ID;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('consent', 'default', { ad_storage: 'granted', analytics_storage: 'granted' });
          ${GA4_ID ? `gtag('config', '${GA4_ID}');` : ""}
          ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
        `}
      </Script>
    </>
  );
}
