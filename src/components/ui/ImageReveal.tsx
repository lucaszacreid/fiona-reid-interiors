"use client";

import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { EASE_LUXE, viewportOnce } from "@/lib/animations";

interface ImageRevealProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}

export default function ImageReveal({
  src,
  alt,
  fill = true,
  width,
  height,
  sizes = "100vw",
  priority = false,
  className = "",
  imgClassName = "",
}: ImageRevealProps) {
  const prefersReduced = useReducedMotion();

  const variants: Variants = {
    hidden: { clipPath: "inset(100% 0 0 0)" },
    visible: {
      clipPath: "inset(0% 0 0 0)",
      transition: { duration: prefersReduced ? 0 : 1.1, ease: EASE_LUXE },
    },
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className={`h-auto w-full object-cover ${imgClassName}`}
        />
      )}
    </motion.div>
  );
}
