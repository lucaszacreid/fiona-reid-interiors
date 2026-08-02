import { useSyncExternalStore } from "react";

export type ConsentStatus = "granted" | "denied";

const STORAGE_KEY = "fri-cookie-consent";
export const CONSENT_EVENT = "fri-consent-changed";

export function getConsent(): ConsentStatus | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

export function setConsent(status: ConsentStatus) {
  window.localStorage.setItem(STORAGE_KEY, status);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: status }));
}

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  return () => window.removeEventListener(CONSENT_EVENT, callback);
}

function getServerSnapshot(): ConsentStatus | null {
  return null;
}

/**
 * Reads consent status via useSyncExternalStore rather than
 * useState+useEffect, since localStorage is only available on the client —
 * this avoids a hydration mismatch between the server's "unknown" snapshot
 * and the client's real one.
 */
export function useConsentStatus(): ConsentStatus | null {
  return useSyncExternalStore(subscribe, getConsent, getServerSnapshot);
}
