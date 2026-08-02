import type { Metadata } from "next";
import ImageReveal from "@/components/ui/ImageReveal";
import RevealSection from "@/components/ui/RevealSection";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

export const metadata: Metadata = {
  title: "About Fiona Reid",
  description:
    "Fiona Reid is a Glasgow-based interior designer and mother of five whose career has taken her across the world — from learning the craft on site to leading interiors on homes worth over £90 million in Mayfair and across Europe.",
  alternates: {
    canonical: "/about",
  },
};

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin with how you actually live. Conversations, site visits, and a brief that reflects your rhythm, not a template.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Concepts, material palettes, and drawings developed in close collaboration — refined until every detail earns its place.",
  },
  {
    number: "03",
    title: "Realisation",
    description:
      "On-site delivery managed closely with trusted makers and contractors, so the finished space matches the drawing.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <section className="container-luxe grid grid-cols-1 gap-12 pb-24 md:grid-cols-[45%_55%] md:gap-16 md:pb-32">
        <ImageReveal
          src="/images/IMG_8444.jpg"
          alt="Fiona Reid, founder of Fiona Reid Interiors"
          className="aspect-3/4 w-full md:aspect-auto md:h-full"
        />

        <RevealSection className="flex flex-col gap-6">
          <p className="text-caption-label text-[var(--color-text-secondary)]">About</p>
          <h1 className="text-page-title max-w-lg">Designing spaces that feel like you.</h1>
          <p className="text-body-copy text-[var(--color-text-secondary)]">
            An interior design studio based in Glasgow that specialises in residential interiors
            for private clients, developers and commercial clients in the UK and internationally.
          </p>

          <div className="text-body-copy flex flex-col gap-5 text-[var(--color-text-secondary)]">
            <p>
              Fiona is a mother of five whose career in design has taken her across the world. She
              didn&rsquo;t come to the industry through design school — she learned the craft the
              traditional way, starting from the ground up and building an understanding of a
              room from construction through to its smallest final detail.
            </p>
            <p>
              That grounding still shapes every project the studio takes on today. Fiona has gone
              on to lead interiors on residences in Mayfair valued in excess of £90 million,
              alongside private homes and developments across Europe — each one approached with
              the same hands-on care as her very first projects.
            </p>
            <p>
              The success of any design project is to reflect the client&rsquo;s aspirations. A
              design scheme is put together after a site visit, or architectural plans and
              photographs, to then establish a design fee, budget and timescales.
            </p>
          </div>
        </RevealSection>
      </section>

      <section className="container-luxe pb-24 md:pb-32">
        <RevealSection className="mb-12 md:mb-16">
          <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">
            How We Work
          </p>
          <h2 className="text-section-heading">The Process</h2>
        </RevealSection>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {steps.map((step) => (
            <RevealSection key={step.number} className="flex flex-col gap-4">
              <span className="text-hero-headline text-[var(--color-border)]" style={{ fontSize: "3.5rem" }}>
                {step.number}
              </span>
              <h3 className="text-section-heading">{step.title}</h3>
              <p className="text-body-copy text-[var(--color-text-secondary)]">
                {step.description}
              </p>
            </RevealSection>
          ))}
        </div>
      </section>

      <ImageReveal
        src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=2000&q=80"
        alt="Studio project detail"
        className="h-[60vh] w-full md:h-[70vh]"
      />

      <section className="container-luxe py-24 text-center md:py-32">
        <RevealSection className="content-max mx-auto flex max-w-2xl flex-col items-center gap-6">
          <p className="text-section-heading">
            &ldquo;My aim is to create beautiful, timeless interiors tailored to the specific
            requirements of each individual client, taking into account location, context, brief
            and personal taste of the client.&rdquo;
          </p>
          <p className="text-caption-label text-[var(--color-text-secondary)]">Fiona Reid</p>
        </RevealSection>
      </section>
    </div>
  );
}
