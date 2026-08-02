"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useConsentStatus } from "@/lib/consent";

const HIDDEN_ROUTES = ["/enquire", "/thank-you"];

export default function MobileStickyBar() {
  const pathname = usePathname();
  // Stay out of the way while the cookie banner is still asking for a decision.
  const consent = useConsentStatus();

  if (consent === null || HIDDEN_ROUTES.includes(pathname)) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] border-t border-[var(--color-border)] bg-[var(--color-bg-primary)] p-4 md:hidden">
      <Link
        href="/enquire"
        className="text-caption-label flex w-full items-center justify-center border border-[var(--color-accent)] py-3 text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-text-inverse)]"
      >
        Book a Consultation
      </Link>
    </div>
  );
}
