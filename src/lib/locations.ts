export interface LocationData {
  slug: "glasgow" | "london";
  city: string;
  heading: string;
  intro: string;
  nearbyAreas: string[];
  heroImage: string;
  heroImageWidth: number;
  heroImageHeight: number;
  metaTitle: string;
  metaDescription: string;
}

export const locations: LocationData[] = [
  {
    slug: "glasgow",
    city: "Glasgow",
    heading: "Interior Designer in Glasgow",
    intro:
      "Fiona Reid Interiors is based in Glasgow's West End, working directly with private clients, developers, and commercial clients across the city and further afield. Every project starts with a site visit and a conversation about how you actually want to live — not a template pulled from a mood board.",
    nearbyAreas: [
      "West End",
      "Kelvinside",
      "Dennistoun",
      "Bearsden",
      "Newton Mearns",
      "Milngavie",
    ],
    heroImage: "/images/residential-hero.jpg",
    heroImageWidth: 735,
    heroImageHeight: 991,
    metaTitle: "Interior Designer in Glasgow",
    metaDescription:
      "Fiona Reid Interiors is a Glasgow-based interior designer working on residential, commercial, and developer projects across Glasgow's West End, Kelvinside, Bearsden, and beyond.",
  },
  {
    slug: "london",
    city: "London",
    heading: "Interior Designer in London",
    intro:
      "Alongside the Glasgow studio, Fiona Reid Interiors works regularly across London — including full-service residential projects on some of the city's most significant private homes. Site visits and ongoing project management are arranged around each client's schedule.",
    nearbyAreas: ["Mayfair", "Knightsbridge", "Chelsea", "Notting Hill", "Kensington", "Belgravia"],
    heroImage: "/images/commercial-hero.jpg",
    heroImageWidth: 736,
    heroImageHeight: 920,
    metaTitle: "Interior Designer in London",
    metaDescription:
      "Fiona Reid Interiors works regularly across London on private residential interiors, including homes in Mayfair, Knightsbridge, Chelsea, and Notting Hill.",
  },
];
