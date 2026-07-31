export interface ServiceCategory {
  slug: "residential" | "commercial" | "hospitality";
  title: string;
  summary: string;
  description: string[];
  image: string;
}

/**
 * PLACEHOLDER IMAGERY — Unsplash mood shots stand in for the studio's own
 * photography. These are illustrative of the kind of space each discipline
 * covers, not photographs of specific client projects.
 */
const unsplash = (id: string) => `https://images.unsplash.com/${id}?w=1600&q=80`;

export const privacyStatement =
  "The great majority of our work is undertaken under strict client confidentiality — private residences, members' spaces, and boutique hospitality projects that are rarely published or attributed. Rather than a gallery of past projects, what follows is an outline of the work we undertake within each discipline.";

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "residential",
    title: "Residential",
    summary: "Homes designed around how you actually live.",
    description: [
      "Private homes, from London townhouses to countryside estates. We work directly with owners, and alongside their architects, on full renovations, new builds, and considered updates to existing interiors.",
      "Every commission begins with how a household actually lives — the way light moves through a room across a day, the objects worth building a space around, the habits a home needs to accommodate. Nothing is templated.",
      "Engagements are typically long-term and highly discreet, often running from first sketch through to the placement of the final object.",
    ],
    image: unsplash("photo-1618221195710-dd6b41faaea6"),
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
    image: unsplash("photo-1600566753086-00f18fb6b3ea"),
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
    image: unsplash("photo-1600607687939-ce8a6c25118c"),
  },
];

export const categories = ["all", "residential", "commercial", "hospitality"] as const;
export type Category = (typeof categories)[number];
