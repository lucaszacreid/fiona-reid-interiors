import Button from "@/components/ui/Button";
import ImageReveal from "@/components/ui/ImageReveal";
import RevealSection from "@/components/ui/RevealSection";
import { offerings } from "@/lib/offerings";
import type { LocationData } from "@/lib/locations";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

export default function LocationLanding({ location }: { location: LocationData }) {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: location.heading, path: `/interior-designer-${location.slug}` },
  ]);

  return (
    <div className="pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <section className="container-luxe grid grid-cols-1 gap-12 pb-24 md:grid-cols-[45%_55%] md:gap-16 md:pb-32">
        <div className="w-full" style={{ maxWidth: location.heroImageWidth }}>
          <ImageReveal
            src={location.heroImage}
            alt={`Interior design in ${location.city} by Fiona Reid Interiors`}
            fill={false}
            width={location.heroImageWidth}
            height={location.heroImageHeight}
            sizes={`(min-width: 768px) ${location.heroImageWidth}px, 100vw`}
          />
        </div>

        <RevealSection className="flex flex-col gap-6">
          <p className="text-caption-label text-[var(--color-text-secondary)]">
            {location.city}
          </p>
          <h1 className="text-page-title max-w-lg">{location.heading}</h1>
          <p className="text-body-copy text-[var(--color-text-secondary)]">{location.intro}</p>

          <div>
            <p className="text-caption-label mb-3 text-[var(--color-text-secondary)]">
              Areas we work in
            </p>
            <p className="text-body-copy text-[var(--color-text-secondary)]">
              {location.nearbyAreas.join(" · ")}
            </p>
          </div>

          <div className="mt-2">
            <Button href="/enquire">Enquire Now</Button>
          </div>
        </RevealSection>
      </section>

      <section className="bg-[var(--color-bg-secondary)] py-24 md:py-32">
        <div className="container-luxe">
          <RevealSection className="mb-12 max-w-2xl md:mb-16">
            <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">
              What We Offer
            </p>
            <h2 className="text-section-heading">
              Services available in {location.city}.
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {offerings.map((offering) => (
              <RevealSection key={offering.slug} className="flex flex-col gap-2">
                <h3 className="text-body-copy font-medium text-[var(--color-text-primary)]">
                  {offering.title}
                </h3>
                <p className="text-body-copy text-[var(--color-text-secondary)]">
                  {offering.summary}
                </p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-24 text-center md:py-32">
        <RevealSection className="content-max mx-auto flex max-w-2xl flex-col items-center gap-8">
          <p className="text-section-heading">
            &ldquo;An interior design studio that specialises in residential interiors for
            private clients, developers and commercial clients in the UK and
            internationally.&rdquo;
          </p>
          <Button href="/enquire">Enquire Now</Button>
        </RevealSection>
      </section>
    </div>
  );
}
