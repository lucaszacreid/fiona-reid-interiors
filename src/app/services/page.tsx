import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import RevealSection from "@/components/ui/RevealSection";
import { offerings } from "@/lib/offerings";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Online design consultations, full-service residential interior design, developer show homes, and commercial interiors — from a Glasgow-based studio working across the UK, Europe, and the United States.",
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

        <RevealSection className="mt-10 max-w-2xl border-l-2 border-[var(--color-accent)] pl-6">
          <p className="text-body-copy text-[var(--color-text-secondary)] italic">
            I&rsquo;m Fiona — mother of five, and for years now, an interior designer. My work is
            built on three things: trust, honesty, and relationships that outlast any single
            project. I don&rsquo;t believe in overselling a scheme or hiding behind jargon. Every
            client gets the same thing: an honest conversation, a clear process, and a space that
            actually reflects how they live. That&rsquo;s the whole approach.
          </p>
        </RevealSection>
      </section>

      <section className="container-luxe flex flex-col divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] pb-24 md:pb-32">
        {offerings.map((offering, i) => (
          <RevealSection key={offering.slug} className="flex flex-col gap-6 py-14">
            <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
              <div className="flex items-baseline gap-4">
                <span
                  className="text-hero-headline text-[var(--color-border)]"
                  style={{ fontSize: "2.5rem" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-section-heading">{offering.title}</h2>
              </div>
              <p className="text-caption-label text-[var(--color-accent)]">{offering.price}</p>
            </div>

            <p className="text-body-copy max-w-2xl text-[var(--color-text-secondary)]">
              {offering.description}
            </p>

            <div className="grid grid-cols-1 gap-8 pt-2 md:grid-cols-3">
              <div>
                <p className="text-caption-label mb-3 text-[var(--color-text-primary)]">
                  What&rsquo;s Included
                </p>
                <ul className="flex flex-col gap-2">
                  {offering.whatsIncluded.map((item) => (
                    <li
                      key={item}
                      className="text-body-copy text-[var(--color-text-secondary)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-caption-label mb-3 text-[var(--color-text-primary)]">
                  Timeline
                </p>
                <p className="text-body-copy text-[var(--color-text-secondary)]">
                  {offering.timeline}
                </p>
              </div>
              <div>
                <p className="text-caption-label mb-3 text-[var(--color-text-primary)]">
                  The Difference
                </p>
                <p className="text-body-copy text-[var(--color-text-secondary)]">
                  {offering.difference}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/enquire" variant="outline">
                Enquire Now
              </Button>
            </div>
          </RevealSection>
        ))}
      </section>

      <section className="container-luxe pb-24 md:pb-32">
        <RevealSection className="content-max mx-auto flex max-w-2xl flex-col gap-6">
          <p className="text-caption-label text-center text-[var(--color-text-secondary)]">
            How We Work Together
          </p>
          <p className="text-body-copy text-[var(--color-text-secondary)]">
            Every project starts the same way: with a conversation, not a proposal. We&rsquo;ll
            visit the space — or talk through drawings and photographs if it isn&rsquo;t ready yet
            — and from there put together a design fee, a working budget, and a timescale that&rsquo;s
            honest about what&rsquo;s realistic.
          </p>
          <p className="text-body-copy text-[var(--color-text-secondary)]">
            From that first conversation on, you&rsquo;re dealing with the same person throughout
            — not handed off to someone else once the details are agreed. Decisions get made
            together, over calls and site visits, not delivered as a finished scheme with no room
            for a second opinion. That&rsquo;s slower, sometimes. It&rsquo;s also how trust
            actually gets built, and why so many clients come back for the next room, the next
            house, the next project.
          </p>
        </RevealSection>
      </section>

      <section className="container-luxe pb-24 text-center md:pb-32">
        <RevealSection className="content-max mx-auto flex max-w-2xl flex-col items-center gap-8">
          <p className="text-section-heading">
            &ldquo;The success of any design project is to reflect the client&rsquo;s
            aspirations.&rdquo;
          </p>
          <Button href="/enquire">Enquire Now</Button>
        </RevealSection>
      </section>
    </div>
  );
}
