"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import { EASE_LUXE } from "@/lib/animations";

interface HeroProps {
  image: string;
  tagline?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Hero({ image, tagline, subheadline, ctaLabel, ctaHref }: HeroProps) {
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
            "linear-gradient(to bottom, rgba(11,10,8,0.5) 0%, rgba(11,10,8,0.2) 45%, rgba(11,10,8,0.7) 100%)",
        }}
      />

      <div className="relative flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
        {tagline && (
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0 : 1, delay: 0.4, ease: EASE_LUXE }}
            className="text-hero-headline max-w-3xl text-[var(--color-text-primary)]"
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
            className="text-body-copy max-w-md text-[var(--color-text-primary)]/85"
          >
            {subheadline}
          </motion.p>
        )}

        {ctaLabel && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0 : 1, delay: 0.8, ease: EASE_LUXE }}
            className="mt-2"
          >
            <Button href={ctaHref}>{ctaLabel}</Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
