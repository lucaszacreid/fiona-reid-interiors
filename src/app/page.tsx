import Hero from "@/components/sections/Hero";
import ServicesList from "@/components/sections/ServicesList";
import RevealSection from "@/components/ui/RevealSection";
import ImageReveal from "@/components/ui/ImageReveal";
import Button from "@/components/ui/Button";
import { works } from "@/lib/works";

export default function Home() {
  const featured = works.slice(0, 3);

  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2000&q=80"
        tagline="Interiors considered, unhurried, and entirely your own."
      />

      <section className="container-luxe py-24 md:py-32">
        <RevealSection className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">
              Selected Work
            </p>
            <h2 className="text-page-title">Recent projects.</h2>
          </div>
          <Button href="/work">View Work</Button>
        </RevealSection>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          <div className="md:row-span-2">
            <ImageReveal
              src={featured[0].coverImage}
              alt={featured[0].title}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="aspect-3/4 w-full"
            />
          </div>
          <div className="md:col-span-2">
            <ImageReveal
              src={featured[1].coverImage}
              alt={featured[1].title}
              sizes="(min-width: 768px) 66vw, 100vw"
              className="aspect-16/9 w-full"
            />
          </div>
          <div className="md:col-span-2">
            <ImageReveal
              src={featured[2].coverImage}
              alt={featured[2].title}
              sizes="(min-width: 768px) 66vw, 100vw"
              className="aspect-16/9 w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-secondary)] py-24 md:py-32">
        <div className="container-luxe">
          <RevealSection className="mb-12 md:mb-16">
            <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">
              What We Do
            </p>
            <h2 className="text-page-title">By category.</h2>
          </RevealSection>
          <ServicesList />
        </div>
      </section>

      <section className="container-luxe py-24 text-center md:py-32">
        <RevealSection>
          <p className="text-section-heading content-max max-w-2xl">
            &ldquo;Designing spaces that feel like you.&rdquo;
          </p>
          <div className="mt-10">
            <Button href="/enquire">Begin a Conversation</Button>
          </div>
        </RevealSection>
      </section>
    </>
  );
}
