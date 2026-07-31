import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryFilter from "@/components/sections/CategoryFilter";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import RevealSection from "@/components/ui/RevealSection";
import { works, categories, type Category } from "@/lib/works";

type WorkCategory = Exclude<Category, "all">;

const validCategories = categories.filter((c): c is WorkCategory => c !== "all");

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const label = category.charAt(0).toUpperCase() + category.slice(1);
  return {
    title: `${label} — Fiona Reid Interiors`,
    description: `${label} interior design projects by Fiona Reid Interiors.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!validCategories.includes(category as WorkCategory)) {
    notFound();
  }

  const filtered = works.filter((w) => w.category === category);

  return (
    <div className="pt-32">
      <section className="container-luxe pb-12 md:pb-16">
        <RevealSection>
          <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">Portfolio</p>
          <h1 className="text-page-title mb-10 capitalize">{category}</h1>
        </RevealSection>
        <CategoryFilter />
      </section>

      <section className="container-luxe pb-24 md:pb-32">
        <PortfolioGrid works={filtered} />
      </section>
    </div>
  );
}
