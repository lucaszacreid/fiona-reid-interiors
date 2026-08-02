"use client";

import Script from "next/script";
import { useConsentStatus } from "@/lib/consent";

// TODO: paste real IDs into .env.local / Vercel env vars once available.
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const ADS_ID = process.env.NEXT_PUBLIC_ADS_CONVERSION_ID;
const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID;

export default function Analytics() {
  const consent = useConsentStatus();

  if (consent !== "granted") return null;

  const primaryId = GA4_ID || ADS_ID;

  return (
    <>
      {primaryId && (
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
      )}

      {HOTJAR_ID && (
        <Script id="hotjar-init" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      )}
    </>
  );
}
