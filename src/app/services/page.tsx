import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import RevealSection from "@/components/ui/RevealSection";
import { offerings } from "@/lib/offerings";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Online design consultations, full-service residential interior design, developer show homes, and commercial interiors — from a Glasgow-based studio working across the UK.",
  alternates: {
    canonical: "/services",
  },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <section className="container-luxe pb-16 md:pb-24">
        <RevealSection className="max-w-2xl">
          <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">Services</p>
          <h1 className="text-page-title mb-8">What we offer.</h1>
          <p className="text-body-copy text-[var(--color-text-secondary)]">
            I am able to work on a multitude of different projects, from purely furnishing show
            homes for developers to commercial projects and large scale residential projects
            requiring full interior design and interior architecture services.
          </p>
        </RevealSection>
      </section>

      <section className="container-luxe flex flex-col divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] pb-24 md:pb-32">
        {offerings.map((offering, i) => (
          <RevealSection
            key={offering.slug}
            className="grid grid-cols-1 gap-6 py-12 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12"
          >
            <span className="text-hero-headline text-[var(--color-border)]" style={{ fontSize: "3rem" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-3">
              <h2 className="text-section-heading">{offering.title}</h2>
              <p className="text-body-copy text-[var(--color-text-secondary)]">
                {offering.description}
              </p>
              <p className="text-caption-label text-[var(--color-accent)]">{offering.price}</p>
            </div>
            <Link href="/enquire" className="text-caption-label group relative w-fit">
              Enquire
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:scale-x-100"
              />
            </Link>
          </RevealSection>
        ))}
      </section>

      <section className="container-luxe pb-24 text-center md:pb-32">
        <RevealSection className="content-max mx-auto flex max-w-2xl flex-col items-center gap-8">
          <p className="text-section-heading">
            &ldquo;The success of any design project is to reflect the client&rsquo;s
            aspirations.&rdquo;
          </p>
          <Button href="/enquire">Begin a Conversation</Button>
        </RevealSection>
      </section>
    </div>
  );
}
