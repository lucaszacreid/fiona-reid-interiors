export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We listen, we explore, we understand — a conversation about how you actually live, not a template.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Mood, materials, and vision come alive, shaped around your brief, your budget, and your timescale.",
  },
  {
    number: "03",
    title: "Creation",
    description:
      "We source, we design, we refine — every detail considered before anything is finished.",
  },
  {
    number: "04",
    title: "Living",
    description: "Your space, perfected. We're still here after the furniture arrives.",
  },
];
