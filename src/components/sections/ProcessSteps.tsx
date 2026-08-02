import RevealSection from "@/components/ui/RevealSection";
import { processSteps } from "@/lib/process";

export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
      {processSteps.map((step) => (
        <RevealSection key={step.number} className="flex flex-col gap-4">
          <span
            className="text-hero-headline text-[var(--color-border)]"
            style={{ fontSize: "3rem" }}
          >
            {step.number}
          </span>
          <h3 className="text-section-heading">{step.title}</h3>
          <p className="text-body-copy text-[var(--color-text-secondary)]">{step.description}</p>
        </RevealSection>
      ))}
    </div>
  );
}
