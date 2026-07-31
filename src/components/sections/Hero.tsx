"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_LUXE } from "@/lib/animations";

interface HeroProps {
  image: string;
  tagline?: string;
}

export default function Hero({ image, tagline }: HeroProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="hero-sentinel"
      className="relative h-[100dvh] w-full overflow-hidden bg-[var(--color-bg-dark)]"
    >
      <Image
        src={image}
        alt="Fiona Reid Interiors — featured project"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(28,28,26,0.25) 0%, transparent 50%)",
        }}
      />

      {tagline && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 1, delay: 0.6, ease: EASE_LUXE }}
          className="text-section-heading absolute bottom-24 left-1/2 w-full max-w-xl -translate-x-1/2 px-6 text-center text-[var(--color-text-inverse)]"
        >
          {tagline}
        </motion.p>
      )}

      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 h-12 w-px -translate-x-1/2 bg-[var(--color-text-inverse)]/60"
        style={{ transformOrigin: "top" }}
        animate={prefersReduced ? undefined : { scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
