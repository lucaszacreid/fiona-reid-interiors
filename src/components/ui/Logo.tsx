import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  priority?: boolean;
  className?: string;
}

export default function Logo({ variant = "dark", priority = false, className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Fiona Reid Interiors"
      width={160}
      height={35}
      priority={priority}
      className={`h-auto w-[120px] transition-[filter] duration-500 ${
        variant === "light" ? "invert" : ""
      } ${className}`}
    />
  );
}
