export interface Offering {
  slug: string;
  title: string;
  summary: string;
  description: string;
  whatsIncluded: string[];
  timeline: string;
  difference: string;
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
      "A brand new service: 1:1 online design consultations — whether you're looking to refresh a single room, plan a full renovation, or just need guidance on colour palettes and decor. It's for anyone who wants an honest, experienced eye on their space without committing to a full project — a chance to talk through what's not working and leave with a clear direction. Because it's just the two of us on a call, there's no formality to work through; you ask what you actually want to ask.",
    whatsIncluded: [
      "A 60-minute video call",
      "Colour and material guidance tailored to your space",
      "A short follow-up summary with next steps",
    ],
    timeline: "Usually booked within a week of enquiry, with the session itself lasting about an hour.",
    difference: "No sales pitch, no upsell — just a straight answer to the question you called with.",
    price: "Price on enquiry",
  },
  {
    slug: "full-service-residential",
    title: "Full-Service Residential",
    summary: "Complete interior design and interior architecture.",
    description:
      "Large-scale residential projects requiring full interior design and interior architecture services, delivered from first sketch through to final placement. This is the deepest form of the relationship — months of close collaboration, site visits, and decisions made together, not for you. It's how the studio has come to work on homes valued well into eight figures, from Glasgow's West End to Mayfair.",
    whatsIncluded: [
      "Full interior design and interior architecture",
      "Site visits and on-site project management",
      "Sourcing, procurement, and final styling",
    ],
    timeline: "Typically 4–12 months depending on scope, agreed together after the first site visit.",
    difference: "The same hands-on attention whether the brief is one room or an entire house.",
    price: "By project",
  },
  {
    slug: "developer-show-homes",
    title: "Developer Show Homes",
    summary: "Furnishing show homes for developers.",
    description:
      "Furnishing and dressing show homes for developers, tailored to the target buyer and the character of the development. A show home has one job: to help a buyer picture themselves living there. That only works if the styling is honest to the building, not a generic template dropped in from elsewhere.",
    whatsIncluded: [
      "Full furnishing and styling",
      "Buyer-profile-led material and layout choices",
      "Coordination with the developer's sales timeline",
    ],
    timeline: "Aligned to the development's launch date — typically a 4–8 week turnaround.",
    difference: "Show homes that feel considered, not staged.",
    price: "On enquiry",
  },
  {
    slug: "commercial-interiors",
    title: "Commercial Interiors",
    summary: "Considered interiors for commercial spaces.",
    description:
      "Commercial projects given the same rigour and restraint as a private residence — offices, studios, and members' spaces. Clients come back for commercial work for the same reason they do for their homes: because the process is honest and the result holds up under daily use, not just on opening day.",
    whatsIncluded: [
      "Full interior design and specification",
      "Supplier and contractor coordination",
      "On-site delivery management",
    ],
    timeline: "By project — an initial scope conversation determines the realistic timescale.",
    difference: "A commercial space treated with the same care as someone's home.",
    price: "On enquiry",
  },
];
