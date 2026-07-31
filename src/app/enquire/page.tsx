import type { Metadata } from "next";
import EnquiryForm from "@/components/sections/EnquiryForm";
import RevealSection from "@/components/ui/RevealSection";

export const metadata: Metadata = {
  title: "Enquire — Fiona Reid Interiors",
  description: "Begin a conversation about your next project.",
};

export default function EnquirePage() {
  return (
    <div className="container-luxe grid grid-cols-1 gap-16 pt-32 pb-24 md:grid-cols-[40%_60%] md:gap-12 md:pb-32">
      <RevealSection className="flex flex-col gap-8">
        <div>
          <p className="text-caption-label mb-4 text-[var(--color-text-secondary)]">Enquire</p>
          <h1 className="text-page-title">Begin a Conversation</h1>
        </div>
        <p className="text-body-copy max-w-sm text-[var(--color-text-secondary)]">
          Tell us a little about your project and we&rsquo;ll be in touch to arrange an initial
          conversation.
        </p>
        <div className="text-body-copy flex flex-col gap-1 text-[var(--color-text-secondary)]">
          <a
            href="mailto:info@fionareidinteriors.co.uk"
            className="hover:text-[var(--color-text-primary)]"
          >
            info@fionareidinteriors.co.uk
          </a>
          <a href="tel:+447835708435" className="hover:text-[var(--color-text-primary)]">
            +44 7835 708435
          </a>
          <p>37 Otago Street, Glasgow, G12 8JJ</p>
        </div>
      </RevealSection>

      <RevealSection>
        <EnquiryForm />
      </RevealSection>
    </div>
  );
}
