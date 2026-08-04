import Image from "next/image";
import RevealSection from "@/components/ui/RevealSection";
import { pressMentions } from "@/lib/press";

export default function PressStrip() {
  if (pressMentions.length === 0) return null;

  return (
    <section className="bg-[var(--color-accent)] py-14">
      <RevealSection className="container-luxe flex flex-col items-center gap-8">
        <p className="text-caption-label text-[var(--color-text-inverse)]/70">As Seen On</p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {pressMentions.map((press) => (
            <Image
              key={press.name}
              src={press.logo}
              alt={press.name}
              width={press.logoWidth}
              height={press.logoHeight}
              className="h-8 w-auto opacity-90 transition-opacity duration-300 hover:opacity-100"
            />
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
