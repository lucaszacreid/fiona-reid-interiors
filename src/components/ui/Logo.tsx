import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  priority?: boolean;
  className?: string;
}

export default function Logo({ variant = "dark", priority = false, className = "" }: LogoProps) {
  // The client-supplied mark is a single brand gold that reads on both light
  // and dark grounds, so `variant` no longer swaps colour — it's kept in the
  // API in case a future asset needs it.
  void variant;
  return (
    <Image
      src="/logo.png"
      alt="Fiona Reid Interiors"
      width={446}
      height={438}
      priority={priority}
      className={`h-16 w-auto ${className}`}
    />
  );
}
