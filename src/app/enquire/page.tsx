import type { Metadata } from "next";
import EnquiryForm from "@/components/sections/EnquiryForm";
import RevealSection from "@/components/ui/RevealSection";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enquire",
  description:
    "Get in touch with Fiona Reid Interiors, Glasgow. Begin a conversation about your residential, commercial, or hospitality project.",
  alternates: {
    canonical: "/enquire",
  },
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
          <a href={`mailto:${business.email}`} className="hover:text-[var(--color-text-primary)]">
            {business.email}
          </a>
          <a href={`tel:${business.telephone}`} className="hover:text-[var(--color-text-primary)]">
            {business.telephoneDisplay}
          </a>
          <p>{business.addressDisplay}</p>
        </div>
      </RevealSection>

      <RevealSection>
        <EnquiryForm />
      </RevealSection>
    </div>
  );
}
