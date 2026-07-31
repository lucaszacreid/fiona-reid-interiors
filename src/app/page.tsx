import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CategoryHeroes from "@/components/sections/CategoryHeroes";
import RevealSection from "@/components/ui/RevealSection";
import Button from "@/components/ui/Button";
import { privacyStatement } from "@/lib/services";

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
