"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

const services = [
  {
    slug: "residential",
    label: "Residential",
    description: "Homes designed around how you actually live.",
  },
  {
    slug: "commercial",
    label: "Commercial",
    description: "Workplaces given the same care as a home.",
  },
  {
    slug: "hospitality",
    label: "Hospitality",
    description: "Spaces that hold guests a little longer.",
  },
];

export default function ServicesList() {
  return (
    <ul className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
      {services.map((service) => (
        <motion.li
          key={service.slug}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <Link
            href={`/work/${service.slug}`}
            className="group flex flex-col gap-2 py-10 md:flex-row md:items-baseline md:justify-between"
          >
            <span className="text-page-title transition-colors duration-300 group-hover:text-[var(--color-accent-dark)]">
              {service.label}
            </span>
            <span className="text-body-copy max-w-sm text-[var(--color-text-secondary)]">
              {service.description}
            </span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
