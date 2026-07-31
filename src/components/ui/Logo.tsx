import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  priority?: boolean;
  className?: string;
  /** Rendered height in px — width is derived from the mark's real aspect ratio. */
  size?: number;
}

const LOGO_ASPECT = 446 / 438;

export default function Logo({
  variant = "dark",
  priority = false,
  className = "",
  size = 40,
}: LogoProps) {
  // The client-supplied mark is a single brand gold that reads on both light
  // and dark grounds, so `variant` no longer swaps colour — it's kept in the
  // API in case a future asset needs it.
  void variant;
  return (
    <Image
      src="/logo.png"
      alt="Fiona Reid Interiors"
      width={Math.round(size * LOGO_ASPECT)}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
