"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/works";

export default function CategoryFilter() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-6 border-b border-[var(--color-border)] pb-6">
      {categories.map((cat) => {
        const href = cat === "all" ? "/work" : `/work/${cat}`;
        const isActive = cat === "all" ? pathname === "/work" : pathname === `/work/${cat}`;
        return (
          <Link
            key={cat}
            href={href}
            className={`text-caption-label relative pb-1 capitalize ${
              isActive
                ? "text-[var(--color-text-primary)]"
                : "text-[var(--color-text-secondary)]"
            }`}
          >
            {cat}
            {isActive && (
              <span aria-hidden className="absolute -bottom-px left-0 h-px w-full bg-current" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
