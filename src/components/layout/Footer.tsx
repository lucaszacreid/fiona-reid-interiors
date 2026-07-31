import Link from "next/link";
import Logo from "@/components/ui/Logo";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/enquire", label: "Enquire" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-dark)] text-[var(--color-text-primary)]">
      <div className="container-luxe grid grid-cols-1 gap-12 py-20 md:grid-cols-3">
        <div className="flex flex-col gap-6">
          <Logo />
          <p className="text-section-heading text-[var(--color-text-primary)]">
            Designing spaces that feel like you.
          </p>
        </div>

        <nav className="flex flex-col gap-4 md:items-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-nav-item">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4 md:items-end">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-caption-label"
          >
            Instagram
          </a>
          <a href="mailto:hello@fionareidinteriors.co.uk" className="text-caption-label">
            hello@fionareidinteriors.co.uk
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--color-text-secondary)]/20 py-6">
        <p className="text-center text-[0.7rem] tracking-[0.15em] text-[var(--color-text-secondary)] uppercase">
          © {year} Fiona Reid Interiors — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
