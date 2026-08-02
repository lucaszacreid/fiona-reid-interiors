import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import CategoryHeroes from "@/components/sections/CategoryHeroes";
import RevealSection from "@/components/ui/RevealSection";
import Button from "@/components/ui/Button";
import { privacyStatement } from "@/lib/services";
import { offerings } from "@/lib/offerings";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Fiona Reid Interiors — Interior Designer in Glasgow",
  description:
    "Fiona Reid Interiors is a Glasgow-based interior design studio working on private residential, commercial, and hospitality projects across Scotland and the UK.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2000&q=80"
        tagline="Interiors considered, unhurried, and entirely your own."
      />

      <section className="container-luxe py-24 text-center md:py-32">
        <RevealSection className="content-max mx-auto flex max-w-2xl flex-col items-center gap-6">
          <p className="text-caption-label text-[var(--color-text-secondary)]">
            Interior Designer, Glasgow
          </p>
          <h2 className="text-page-title">
            Timeless interiors, considered from the ground up.
          </h2>
          <p className="text-body-copy text-[var(--color-text-secondary)]">
            Fiona Reid Interiors designs and creates timeless luxury interiors incorporating
            practicality and maximum comfort — an interior design studio based in Glasgow that
            specialises in residential interiors for private clients, developers and commercial
            clients in the UK and internationally.
          </p>
        </RevealSection>
      </section>

      <section className="container-luxe py-24 text-center md:py-32">
        <RevealSection className="content-max mx-auto flex max-w-2xl flex-col items-center gap-8">
          <p className="text-caption-label text-[var(--color-text-secondary)]">
            By Invitation
          </p>
          <h2 className="text-page-title">Held in confidence.</h2>
          <p className="text-body-copy text-[var(--color-text-secondary)]">{privacyStatement}</p>
          <Button href="/work">Our Approach</Button>
        </RevealSection>
      </section>

      <section className="bg-[var(--color-bg-secondary)] py-24 md:py-32">
        <div className="container-luxe">
          <RevealSection className="mb-12 md:mb-16">
            <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">
              What We Do
            </p>
            <h2 className="text-page-title">Residential &amp; commercial.</h2>
          </RevealSection>
        </div>
        <CategoryHeroes />
      </section>

      <section className="container-luxe py-24 md:py-32">
        <RevealSection className="mb-12 max-w-2xl md:mb-16">
          <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">Services</p>
          <h2 className="text-page-title">How we can help.</h2>
        </RevealSection>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {offerings.map((offering) => (
            <RevealSection key={offering.slug} className="flex flex-col gap-2">
              <h3 className="text-section-heading">{offering.title}</h3>
              <p className="text-body-copy text-[var(--color-text-secondary)]">
                {offering.summary}
              </p>
            </RevealSection>
          ))}
        </div>

        <RevealSection className="mt-12">
          <Button href="/services">All Services</Button>
        </RevealSection>
      </section>

      <section className="bg-[var(--color-bg-secondary)] py-24 md:py-32">
        <div className="container-luxe">
          <RevealSection className="mb-12 max-w-2xl md:mb-16">
            <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">
              Where We Work
            </p>
            <h2 className="text-page-title">Glasgow, London, and beyond.</h2>
            <p className="text-body-copy mt-6 text-[var(--color-text-secondary)]">
              Based in Glasgow&rsquo;s West End, with regular projects across London, Scotland,
              and the rest of the UK.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {locations.map((location) => (
              <RevealSection key={location.slug}>
                <Link
                  href={`/interior-designer-${location.slug}`}
                  className="text-caption-label group relative w-fit"
                >
                  Interior Designer in {location.city}
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:scale-x-100"
                  />
                </Link>
              </RevealSection>
            ))}
          </div>
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
