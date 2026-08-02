"use client";

import { setConsent, useConsentStatus } from "@/lib/consent";

export default function CookieConsent() {
  const consent = useConsentStatus();

  if (consent !== null) return null;

  const decide = (status: "granted" | "denied") => {
    setConsent(status);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-[var(--color-border)] bg-[var(--color-bg-dark)] px-6 py-6 md:px-10">
      <div className="container-luxe flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-body-copy max-w-xl text-[var(--color-text-secondary)]">
          We use cookies only to understand how visitors use this site and to measure enquiries.
          Nothing is set unless you accept.
        </p>
        <div className="flex shrink-0 gap-4">
          <button
            type="button"
            onClick={() => decide("denied")}
            className="text-caption-label text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide("granted")}
            className="text-caption-label border border-[var(--color-border)] px-6 py-3 transition-colors hover:border-[var(--color-text-primary)]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
