import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryFilter from "@/components/sections/CategoryFilter";
import Button from "@/components/ui/Button";
import ImageReveal from "@/components/ui/ImageReveal";
import RevealSection from "@/components/ui/RevealSection";
import { serviceCategories, categories, type Category } from "@/lib/services";

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
  const service = serviceCategories.find((s) => s.slug === category);
  if (!service) return {};
  return {
    title: `${service.title} — Fiona Reid Interiors`,
    description: service.summary,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const service = serviceCategories.find((s) => s.slug === category);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32">
      <section className="container-luxe pb-12 md:pb-16">
        <RevealSection className="max-w-2xl">
          <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">Work</p>
          <h1 className="text-page-title mb-6">{service.title}</h1>
          <p className="text-body-copy text-[var(--color-text-secondary)]">{service.summary}</p>
        </RevealSection>
        <div className="mt-12">
          <CategoryFilter />
        </div>
      </section>

      <div className="container-luxe">
        <div
          className="mx-auto w-full max-w-2xl"
          style={{ aspectRatio: `${service.imageWidth} / ${service.imageHeight}` }}
        >
          <ImageReveal
            src={service.image}
            alt={`${service.title} interiors`}
            sizes="(min-width: 768px) 42rem, 100vw"
            className="h-full w-full"
          />
        </div>
      </div>

      <section className="container-luxe py-24 md:py-32">
        <RevealSection className="content-max mx-auto flex max-w-2xl flex-col gap-6">
          {service.description.map((paragraph) => (
            <p key={paragraph} className="text-body-copy text-[var(--color-text-secondary)]">
              {paragraph}
            </p>
          ))}
          <div className="mt-4">
            <Button href="/enquire">Begin a Conversation</Button>
          </div>
        </RevealSection>
      </section>
    </div>
  );
}
