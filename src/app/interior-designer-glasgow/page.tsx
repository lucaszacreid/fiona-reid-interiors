import type { Metadata } from "next";
import LocationLanding from "@/components/sections/LocationLanding";
import { locations } from "@/lib/locations";

const location = locations.find((l) => l.slug === "glasgow")!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: {
    canonical: "/interior-designer-glasgow",
  },
};

export default function GlasgowPage() {
  return <LocationLanding location={location} />;
}
