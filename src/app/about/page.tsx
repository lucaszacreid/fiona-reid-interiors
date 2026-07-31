import type { Metadata } from "next";
import ImageReveal from "@/components/ui/ImageReveal";
import RevealSection from "@/components/ui/RevealSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Fiona Reid Interiors, a Glasgow-based interior design studio. Our philosophy, approach, and process for residential, commercial, and hospitality projects.",
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
      <section className="container-luxe grid grid-cols-1 gap-12 pb-24 md:grid-cols-[45%_55%] md:gap-16 md:pb-32">
        <ImageReveal
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400&q=80"
          alt="Fiona Reid in the studio"
          className="aspect-3/4 w-full md:aspect-auto md:h-full"
        />

        <RevealSection className="flex flex-col gap-6">
          <p className="text-caption-label text-[var(--color-text-secondary)]">About</p>
          <h1 className="text-page-title max-w-lg">Designing spaces that feel like you.</h1>

          <div className="text-body-copy flex flex-col gap-5 text-[var(--color-text-secondary)]">
            <p>
              Fiona founded the studio on a simple belief: that a home should feel considered,
              never contrived — a place that reveals itself slowly rather than announcing itself
              all at once.
            </p>
            <p>
              Every project begins with the client, not a mood board — their habits, their
              collections, the way light moves through their rooms across a day.
            </p>
            <p>
              Based in Glasgow, the studio takes on residential, commercial, and hospitality
              projects across Scotland and further afield throughout the UK, with a small team
              involved from first sketch to final placement.
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
        <RevealSection>
          <p className="text-section-heading content-max mx-auto max-w-2xl">
            &ldquo;Restraint is not the absence of luxury — it is the clearest expression of it.&rdquo;
          </p>
        </RevealSection>
      </section>
    </div>
  );
}
