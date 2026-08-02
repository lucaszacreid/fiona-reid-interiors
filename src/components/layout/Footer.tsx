import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { business } from "@/lib/site";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/enquire", label: "Enquire" },
];

const locations = [
  { href: "/interior-designer-glasgow", label: "Glasgow" },
  { href: "/interior-designer-london", label: "London" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-dark)] text-[var(--color-text-primary)]">
      <div className="container-luxe grid grid-cols-1 gap-12 py-20 md:grid-cols-4">
        <div className="flex flex-col gap-6">
          <Logo size={48} />
          <p className="text-section-heading text-[var(--color-text-primary)]">
            Designing spaces that feel like you.
          </p>
        </div>

        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-nav-item">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4">
          <p className="text-caption-label text-[var(--color-text-secondary)]">Locations</p>
          {locations.map((location) => (
            <Link key={location.href} href={location.href} className="text-nav-item">
              {location.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-6 md:items-end md:text-right">
          <div>
            <p className="text-caption-label mb-1 text-[var(--color-text-secondary)]">
              Telephone
            </p>
            <a href={`tel:${business.telephone}`} className="text-caption-label">
              {business.telephoneDisplay}
            </a>
          </div>
          <div>
            <p className="text-caption-label mb-1 text-[var(--color-text-secondary)]">Email</p>
            <a href={`mailto:${business.email}`} className="text-caption-label">
              {business.email}
            </a>
          </div>
          <div>
            <p className="text-caption-label mb-1 text-[var(--color-text-secondary)]">Visit</p>
            <p className="text-caption-label">{business.addressDisplay}</p>
          </div>
          <a
            href={business.instagram}
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
