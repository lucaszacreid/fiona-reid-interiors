"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeIn } from "@/lib/animations";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "there";

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "generate_lead");
    // TODO: once the Google Ads conversion ID/label is available, fire it here:
    // window.gtag("event", "conversion", { send_to: "AW-XXXXXXXXX/XXXXXXXXXXXXXXXXXXXX" });
  }, []);

  return (
    <div className="container-luxe flex min-h-[70vh] flex-col items-center justify-center pt-32 pb-24 text-center">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-4"
      >
        <span className="text-2xl text-[var(--color-accent-dark)]">✦</span>
        <h1 className="text-page-title">Thank you, {name}.</h1>
        <p className="text-body-copy max-w-md text-[var(--color-text-secondary)]">
          We&rsquo;ll be in touch within 2 working days to arrange your consultation.
        </p>
        <div className="mt-6">
          <Button href="/">Return Home</Button>
        </div>
      </motion.div>
    </div>
  );
}
