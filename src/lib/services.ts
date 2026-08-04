export interface ServiceCategory {
  slug: "residential" | "commercial" | "hospitality";
  title: string;
  summary: string;
  description: string[];
  image: string;
  /** Image's real pixel dimensions, so it renders at its native aspect ratio. */
  imageWidth: number;
  imageHeight: number;
}

export const privacyStatement =
  "The great majority of our work is undertaken under strict client confidentiality — private residences, members' spaces, and boutique hospitality projects that are rarely published or attributed. Rather than a gallery of past projects, what follows is an outline of the work we undertake within each discipline.";

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "residential",
    title: "Residential",
    summary: "Homes designed around how you actually live.",
    description: [
      "Private homes, from London townhouses to countryside estates, and international residences across Europe and the United States. We work directly with owners, and alongside their architects, on full renovations, new builds, and considered updates to existing interiors.",
      "Every commission begins with how a household actually lives — the way light moves through a room across a day, the objects worth building a space around, the habits a home needs to accommodate. Nothing is templated.",
      "Engagements are typically long-term and highly discreet, often running from first sketch through to the placement of the final object.",
    ],
    image: "/images/residential-hero.jpg",
    imageWidth: 735,
    imageHeight: 991,
  },
  {
    slug: "commercial",
    title: "Commercial",
    summary: "Workplaces given the same care as a home.",
    description: [
      "Boutique offices, private studios, and members' spaces designed with the same rigour and restraint as a private residence.",
      "We work closely with owners and operators who want a commercial space to feel considered rather than corporate — warm materials, low light, and an absence of clutter.",
      "Most commercial commissions are delivered under NDA on behalf of private companies and individuals, and are not published.",
    ],
    image: "/images/commercial-hero.jpg",
    imageWidth: 736,
    imageHeight: 920,
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    summary: "Spaces that hold guests a little longer.",
    description: [
      "Small hotels, private dining rooms, and members' clubs — spaces built in partnership with operators who value discretion as much as design.",
      "The brief is nearly always the same: a room that slows people down. Tactile fabrics, soft light, and a material palette that ages well under daily use.",
      "Given the sensitivities of ownership and brand, hospitality projects are rarely named publicly.",
    ],
    image: "/images/hospitality-hero.jpg",
    imageWidth: 735,
    imageHeight: 985,
  },
];

export const categories = ["all", "residential", "commercial", "hospitality"] as const;
export type Category = (typeof categories)[number];
