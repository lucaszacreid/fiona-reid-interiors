"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "solid" | "outline";
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

  const styles =
    variant === "solid"
      ? "bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:bg-[var(--color-accent-dark)] hover:shadow-[0_6px_24px_rgba(198,166,100,0.3)]"
      : "border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]";

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
