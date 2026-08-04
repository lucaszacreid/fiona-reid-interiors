import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import CategoryHeroes from "@/components/sections/CategoryHeroes";
import ProcessSteps from "@/components/sections/ProcessSteps";
import RevealSection from "@/components/ui/RevealSection";
import Button from "@/components/ui/Button";
import {
  IconListening,
  IconCompass,
  IconRelationship,
  IconCalendar,
  IconLightbulb,
  IconGallery,
} from "@/components/ui/icons";
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

const trustPillars = [
  {
    icon: IconListening,
    title: "Deep Listening",
    description: "We ask the right questions before we ever pick up a swatch.",
  },
  {
    icon: IconCompass,
    title: "Honest Design",
    description: "No trends that don't suit you, no scheme sold for the sake of selling it.",
  },
  {
    icon: IconRelationship,
    title: "Long-Term Relationships",
    description: "We're still here long after the furniture arrives.",
  },
];

const ctaPathways = [
  {
    icon: IconCalendar,
    headline: "Let's talk about your space",
    body: "A short intro call, no obligation. We'll explore if we're a good fit.",
    cta: "Schedule a Call",
    href: "/enquire",
    subtext: "Usually respond within 24 hours",
  },
  {
    icon: IconLightbulb,
    headline: "How we work together",
    body: "Learn about our collaborative approach and what to expect.",
    cta: "Read More",
    href: "/services",
    subtext: "5-min read",
    variant: "outline" as const,
  },
  {
    icon: IconGallery,
    headline: "See what we've created",
    body: "Browse the kind of residential, commercial, and hospitality work we do.",
    cta: "View Work",
    href: "/work",
    subtext: "By discipline, not by gallery",
    variant: "outline" as const,
  },
];

export default function Home() {
  return (
    <>
      <Hero
        image="/images/hero-landing.jpg"
        eyebrow="Bespoke Interior Design"
        tagline={"Beautifully considered.\nEffortlessly timeless."}
        subheadline="UK • Europe • United States"
        ctaLabel="Enquire Now"
        ctaHref="/enquire"
      />

      <section className="container-luxe py-24 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1fr] md:gap-20">
          <RevealSection className="flex flex-col gap-6">
            <p className="text-caption-label text-[var(--color-text-secondary)]">
              Why Fiona Reid?
            </p>
            <h2 className="text-page-title">Interiors, not decoration.</h2>
            <p className="text-body-copy text-[var(--color-text-secondary)]">
              Interiors aren&rsquo;t decoration — they&rsquo;re a reflection of how you live.
              Before anything is designed, we spend real time understanding you: your habits,
              your history with a space, the way light moves through your rooms across a day.
            </p>
            <p className="text-body-copy text-[var(--color-text-secondary)]">
              That&rsquo;s not a preamble to the process. It is the process. Every scheme that
              follows is built on what we learn in those first conversations, not on a trend or a
              template that happened to be in fashion that season.
            </p>
          </RevealSection>

          <div className="flex flex-col gap-10 border-t border-[var(--color-border)] pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-16">
            {trustPillars.map((pillar) => (
              <RevealSection key={pillar.title} className="flex gap-5">
                <pillar.icon className="h-7 w-7 shrink-0 text-[var(--color-accent)]" />
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-body-copy font-medium text-[var(--color-text-primary)]">
                    {pillar.title}
                  </h3>
                  <p className="text-body-copy text-[var(--color-text-secondary)]">
                    {pillar.description}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-24 text-center md:py-32">
        <RevealSection className="content-max mx-auto flex max-w-2xl flex-col items-center gap-8">
          <p className="text-caption-label text-[var(--color-text-secondary)]">By Invitation</p>
          <h2 className="text-page-title">Held in confidence.</h2>
          <p className="text-body-copy text-[var(--color-text-secondary)]">{privacyStatement}</p>
          <Button href="/work" variant="outline">
            Our Approach
          </Button>
        </RevealSection>
      </section>

      <section className="bg-[var(--color-bg-secondary)] py-24 md:py-32">
        <div className="container-luxe">
          <RevealSection className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">
                Recent Work
              </p>
              <h2 className="text-page-title">Residential &amp; commercial.</h2>
            </div>
          </RevealSection>
        </div>
        <CategoryHeroes />
        <div className="container-luxe mt-12 text-center">
          <RevealSection>
            <Button href="/work" variant="outline">
              See All Projects
            </Button>
          </RevealSection>
        </div>
      </section>

      <section className="container-luxe py-24 md:py-32">
        <RevealSection className="mb-12 max-w-2xl md:mb-16">
          <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">
            How We Work
          </p>
          <h2 className="text-page-title">A relationship, not a transaction.</h2>
        </RevealSection>

        <ProcessSteps />
      </section>

      <section className="bg-[var(--color-bg-secondary)] py-24 md:py-32">
        <div className="container-luxe">
          <RevealSection className="mb-12 max-w-2xl md:mb-16">
            <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">
              Services
            </p>
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
            <Button href="/services" variant="outline">
              All Services
            </Button>
          </RevealSection>
        </div>
      </section>

      <section className="py-24 md:py-32">
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

      <section className="container-luxe pb-24 md:pb-32">
        <RevealSection className="mb-12 text-center md:mb-16">
          <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">
            Ready to Begin?
          </p>
          <h2 className="text-page-title">Three ways to start.</h2>
        </RevealSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {ctaPathways.map((pathway) => (
            <RevealSection
              key={pathway.headline}
              className="flex flex-col gap-4 rounded border border-[var(--color-border)] p-8 transition-colors duration-300 hover:border-[var(--color-accent)]"
            >
              <pathway.icon className="h-7 w-7 text-[var(--color-accent)]" />
              <h3 className="text-section-heading">{pathway.headline}</h3>
              <p className="text-body-copy text-[var(--color-text-secondary)]">{pathway.body}</p>
              <div className="mt-2">
                <Button href={pathway.href} variant={pathway.variant ?? "solid"} className="w-full">
                  {pathway.cta}
                </Button>
              </div>
              <p className="text-caption-label text-[var(--color-text-secondary)]">
                {pathway.subtext}
              </p>
            </RevealSection>
          ))}
        </div>
      </section>
    </>
  );
}
