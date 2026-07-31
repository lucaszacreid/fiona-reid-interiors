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
          <Logo size={48} />
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

        <div className="flex flex-col gap-6 md:items-end md:text-right">
          <div>
            <p className="text-caption-label mb-1 text-[var(--color-text-secondary)]">
              Telephone
            </p>
            <a href="tel:+447835708435" className="text-caption-label">
              +44 7835 708435
            </a>
          </div>
          <div>
            <p className="text-caption-label mb-1 text-[var(--color-text-secondary)]">Email</p>
            <a href="mailto:info@fionareidinteriors.co.uk" className="text-caption-label">
              info@fionareidinteriors.co.uk
            </a>
          </div>
          <div>
            <p className="text-caption-label mb-1 text-[var(--color-text-secondary)]">Visit</p>
            <p className="text-caption-label">37 Otago Street, Glasgow, G12 8JJ</p>
          </div>
          <a
            href="https://www.instagram.com/fionareidinteriors"
            target="_blank"
            rel="noopener noreferrer"
            className="text-caption-label"
          >
            Instagram
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
