import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RevealSection from "@/components/ui/RevealSection";
import { journalPosts } from "@/lib/journal";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/journal/${post.slug}`,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: "Fiona Reid" },
    publisher: { "@type": "Organization", name: "Fiona Reid Interiors" },
    mainEntityOfPage: `${siteUrl}/journal/${post.slug}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Journal", item: `${siteUrl}/journal` },
      { "@type": "ListItem", position: 2, name: post.title, item: `${siteUrl}/journal/${post.slug}` },
    ],
  };

  return (
    <div className="pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <article className="container-luxe pb-24 md:pb-32">
        <RevealSection className="mx-auto mb-16 flex max-w-2xl flex-col gap-6">
          <Link href="/journal" className="text-caption-label text-[var(--color-text-secondary)]">
            Journal
          </Link>
          <p className="text-caption-label text-[var(--color-text-secondary)]">
            {formatDate(post.date)}
          </p>
          <h1 className="text-page-title">{post.title}</h1>
        </RevealSection>

        <RevealSection className="mx-auto flex max-w-2xl flex-col gap-6">
          {post.body.map((paragraph) => (
            <p key={paragraph} className="text-body-copy text-[var(--color-text-secondary)]">
              {paragraph}
            </p>
          ))}
        </RevealSection>
      </article>
    </div>
  );
}
