import type { Metadata } from "next";
import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";
import { journalPosts } from "@/lib/journal";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes on interior design process, colour, and materials from Fiona Reid Interiors, Glasgow.",
  alternates: {
    canonical: "/journal",
  },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Journal", path: "/journal" },
]);

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function JournalPage() {
  return (
    <div className="pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <section className="container-luxe pb-16 md:pb-24">
        <RevealSection className="max-w-2xl">
          <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">Journal</p>
          <h1 className="text-page-title">Notes from the studio.</h1>
        </RevealSection>
      </section>

      <section className="container-luxe flex flex-col divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] pb-24 md:pb-32">
        {journalPosts.map((post) => (
          <RevealSection key={post.slug} className="py-12">
            <Link href={`/journal/${post.slug}`} className="group flex flex-col gap-3">
              <p className="text-caption-label text-[var(--color-text-secondary)]">
                {formatDate(post.date)}
              </p>
              <h2 className="text-section-heading transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                {post.title}
              </h2>
              <p className="text-body-copy max-w-2xl text-[var(--color-text-secondary)]">
                {post.excerpt}
              </p>
            </Link>
          </RevealSection>
        ))}
      </section>
    </div>
  );
}
