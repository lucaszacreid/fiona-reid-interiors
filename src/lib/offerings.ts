export interface Offering {
  slug: string;
  title: string;
  summary: string;
  description: string;
  /**
   * TODO (client to confirm): the brief suggests the online consultation
   * starts "from £350" but asks us not to publish a figure until it's
   * confirmed. Showing "Price on enquiry" everywhere until then.
   */
  price: string;
}

export const offerings: Offering[] = [
  {
    slug: "online-design-consultation",
    title: "Online Design Consultation",
    summary: "1:1 guidance, wherever you are.",
    description:
      "A brand new service: 1:1 online design consultations — whether you're looking to refresh a single room, plan a full renovation, or just need guidance on colour palettes and decor.",
    price: "Price on enquiry",
  },
  {
    slug: "full-service-residential",
    title: "Full-Service Residential",
    summary: "Complete interior design and interior architecture.",
    description:
      "Large-scale residential projects requiring full interior design and interior architecture services, delivered from first sketch through to final placement.",
    price: "By project",
  },
  {
    slug: "developer-show-homes",
    title: "Developer Show Homes",
    summary: "Furnishing show homes for developers.",
    description:
      "Furnishing and dressing show homes for developers, tailored to the target buyer and the character of the development.",
    price: "On enquiry",
  },
  {
    slug: "commercial-interiors",
    title: "Commercial Interiors",
    summary: "Considered interiors for commercial spaces.",
    description:
      "Commercial projects given the same rigour and restraint as a private residence — offices, studios, and members' spaces.",
    price: "On enquiry",
  },
];
