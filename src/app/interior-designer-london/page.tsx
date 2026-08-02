import type { Metadata } from "next";
import LocationLanding from "@/components/sections/LocationLanding";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "london")!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: {
    canonical: "/interior-designer-london",
  },
};

export default function LondonPage() {
  return <LocationLanding location={location} />;
}
