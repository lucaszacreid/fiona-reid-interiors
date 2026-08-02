import type { Metadata } from "next";
import Link from "next/link";
import CategoryFilter from "@/components/sections/CategoryFilter";
import ImageReveal from "@/components/ui/ImageReveal";
import RevealSection from "@/components/ui/RevealSection";
import { privacyStatement, serviceCategories } from "@/lib/services";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Residential, commercial, and hospitality interior design by a Glasgow-based studio — see the kind of work we undertake within each discipline.",
  alternates: {
    canonical: "/work",
  },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
]);

export default function WorkPage() {
  return (
    <div className="pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <section className="container-luxe pb-12 md:pb-16">
        <RevealSection className="max-w-2xl">
          <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">Work</p>
          <h1 className="text-page-title mb-8">By discipline, not by gallery.</h1>
          <p className="text-body-copy text-[var(--color-text-secondary)]">{privacyStatement}</p>
        </RevealSection>
        <div className="mt-12">
          <CategoryFilter />
        </div>
      </section>

      <section className="container-luxe flex flex-col gap-20 pb-24 md:gap-28 md:pb-32">
        {serviceCategories.map((service, i) => (
          <RevealSection
            key={service.slug}
            className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16"
          >
            <div className="w-full shrink-0" style={{ maxWidth: service.imageWidth }}>
              <ImageReveal
                src={service.image}
                alt={`${service.title} interiors`}
                fill={false}
                width={service.imageWidth}
                height={service.imageHeight}
                sizes={`(min-width: 768px) ${service.imageWidth}px, 100vw`}
                className="h-auto w-full"
              />
            </div>
            <div className="flex flex-col gap-5 md:pt-4">
              <p className="text-caption-label text-[var(--color-text-secondary)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="text-section-heading">{service.title}</h2>
              <p className="text-body-copy text-[var(--color-text-secondary)]">
                {service.description[0]}
              </p>
              <Link href={`/work/${service.slug}`} className="text-caption-label group relative w-fit">
                Explore {service.title}
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:scale-x-100"
                />
              </Link>
            </div>
          </RevealSection>
        ))}
      </section>
    </div>
  );
}
