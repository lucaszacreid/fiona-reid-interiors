"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import { EASE_LUXE } from "@/lib/animations";

interface HeroProps {
  image: string;
  eyebrow?: string;
  tagline?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Hero({
  image,
  eyebrow,
  tagline,
  subheadline,
  ctaLabel,
  ctaHref,
}: HeroProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="hero-sentinel"
      className="relative h-[70vh] w-full overflow-hidden bg-[var(--color-bg-dark)] md:h-[60vh]"
    >
      <Image
        src={image}
        alt="Interior design by Fiona Reid Interiors, Glasgow"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,10,8,0.55) 0%, rgba(11,10,8,0.25) 45%, rgba(11,10,8,0.72) 100%)",
        }}
      />

      <div className="relative flex h-full flex-col items-center justify-center gap-5 px-6 text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0 : 1, delay: 0.2, ease: EASE_LUXE }}
            className="text-caption-label text-[var(--color-accent)]"
          >
            {eyebrow}
          </motion.p>
        )}

        {tagline && (
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0 : 1, delay: 0.4, ease: EASE_LUXE }}
            className="text-hero-headline max-w-3xl text-[var(--color-text-primary)] whitespace-pre-line"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
          >
            {tagline}
          </motion.h1>
        )}

        {subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0 : 1, delay: 0.6, ease: EASE_LUXE }}
            className="text-nav-item text-[var(--color-text-primary)]/80"
          >
            {subheadline}
          </motion.p>
        )}

        {ctaLabel && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0 : 1, delay: 0.8, ease: EASE_LUXE }}
            className="mt-3"
          >
            <Button href={ctaHref} variant="ghost">
              {ctaLabel}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
