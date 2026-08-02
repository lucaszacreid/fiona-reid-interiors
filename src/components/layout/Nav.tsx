"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { fadeUp, stagger } from "@/lib/animations";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/enquire", label: "Enquire" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [overHero, setOverHero] = useState(isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const sentinel = document.getElementById("hero-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setOverHero(entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isHome]);

  const transparent = isHome && overHero && !menuOpen;

  return (
    <>
      <header
        data-hero={transparent ? "true" : "false"}
        className={`fixed top-0 left-0 z-50 w-full transition-colors duration-500 ${
          transparent
            ? "border-b border-transparent bg-transparent"
            : "border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]"
        }`}
      >
        <div className="container-luxe relative flex items-center justify-between py-6">
          <Link href="/" aria-label="Fiona Reid Interiors — home">
            <Logo priority size={38} />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-nav-item group relative pb-1 text-[var(--color-text-primary)]"
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-current transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="relative z-[70] flex h-5 w-5 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-[2px] w-5 bg-[var(--color-text-primary)] transition-transform duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-[var(--color-text-primary)] transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[var(--color-bg-dark)]"
          >
            <motion.nav
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-8"
            >
              {links.map((link) => (
                <motion.div key={link.href} variants={fadeUp}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-page-title text-[var(--color-text-primary)]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
