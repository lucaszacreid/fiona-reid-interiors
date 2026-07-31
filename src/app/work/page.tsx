import type { Metadata } from "next";
import CategoryFilter from "@/components/sections/CategoryFilter";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import RevealSection from "@/components/ui/RevealSection";
import { works } from "@/lib/works";

export const metadata: Metadata = {
  title: "Work — Fiona Reid Interiors",
  description: "A selection of residential, commercial, and hospitality projects.",
};

export default function WorkPage() {
  return (
    <div className="pt-32">
      <section className="container-luxe pb-12 md:pb-16">
        <RevealSection>
          <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">Portfolio</p>
          <h1 className="text-page-title mb-10">Selected Work</h1>
        </RevealSection>
        <CategoryFilter />
      </section>

      <section className="container-luxe pb-24 md:pb-32">
        <PortfolioGrid works={works} />
      </section>
    </div>
  );
}
