"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "solid",
  className = "",
  disabled = false,
}: ButtonProps) {
  const base =
    "text-caption-label inline-flex items-center justify-center rounded px-8 py-3.5 text-center transition-all duration-300";

  const variantStyles = {
    solid:
      "bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:bg-[var(--color-accent-dark)] hover:shadow-[0_6px_24px_rgba(198,166,100,0.3)]",
    outline:
      "border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
    // Permanent thin gold border on a transparent ground — for CTAs sitting
    // directly over photography (e.g. the homepage hero), where a solid
    // fill or a neutral border would fight the image.
    ghost:
      "border border-[var(--color-accent)] bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text-inverse)] hover:shadow-[0_6px_24px_rgba(198,166,100,0.35)]",
  };

  const styles = variantStyles[variant];

  const sharedClassName = `${base} ${styles} ${disabled ? "pointer-events-none opacity-40" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={sharedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={sharedClassName}>
      {children}
    </button>
  );
}
