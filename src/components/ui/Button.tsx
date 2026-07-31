"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "text" | "outline";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "text",
  className = "",
  disabled = false,
}: ButtonProps) {
  const content = (
    <span className="group relative inline-flex items-center">
      <span className="text-caption-label">{children}</span>
      {variant === "text" && (
        <span
          aria-hidden
          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-text-primary)] transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:scale-x-100"
        />
      )}
    </span>
  );

  const sharedClassName = `inline-block ${
    variant === "outline"
      ? "border border-[var(--color-border)] px-8 py-3 transition-colors duration-300 hover:border-[var(--color-text-primary)]"
      : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={sharedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${sharedClassName} disabled:opacity-40`}
    >
      {content}
    </button>
  );
}
