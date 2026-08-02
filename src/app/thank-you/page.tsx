import type { Metadata } from "next";
import { Suspense } from "react";
import ThankYouContent from "@/components/sections/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <Suspense fallback={null}>
      <ThankYouContent />
    </Suspense>
  );
}
