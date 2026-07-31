"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { serviceCategories } from "@/lib/services";

const featured = serviceCategories.filter(
  (s) => s.slug === "residential" || s.slug === "commercial",
);

export default function CategoryHeroes() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      {featured.map((service, i) => (
        <motion.div
          key={service.slug}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <Link
            href={`/work/${service.slug}`}
            className="group relative block h-[60vh] w-full overflow-hidden md:h-[70vh]"
          >
            <Image
              src={service.image}
              alt={`${service.title} interiors`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(11,10,8,0.85) 0%, rgba(11,10,8,0.15) 45%, transparent 70%)",
              }}
            />
            <div className="absolute bottom-0 left-0 flex w-full flex-col gap-2 p-8 md:p-10">
              <span className="text-caption-label text-[var(--color-accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-section-heading text-[var(--color-text-primary)]">
                {service.title}
              </h3>
              <p className="text-body-copy max-w-xs text-[var(--color-text-primary)]/80">
                {service.summary}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
