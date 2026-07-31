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
    title: `${service.title} Interior Design`,
    description: `${service.summary} Glasgow-based ${service.title.toLowerCase()} interior design across Scotland and the UK.`,
    alternates: {
      canonical: `/work/${service.slug}`,
    },
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

      <section className="container-luxe flex flex-col gap-12 pb-24 md:flex-row md:items-start md:gap-16 md:pb-32">
        <div className="w-full shrink-0" style={{ maxWidth: service.imageWidth }}>
          <ImageReveal
            src={service.image}
            alt={`${service.title} interiors`}
            fill={false}
            width={service.imageWidth}
            height={service.imageHeight}
            sizes={`(min-width: 768px) ${service.imageWidth}px, 100vw`}
          />
        </div>

        <RevealSection className="flex flex-col gap-6 md:pt-4">
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
