export interface Work {
  id: string;
  title: string;
  location: string;
  category: "residential" | "commercial" | "hospitality";
  coverImage: string;
  images: string[];
  description: string;
  year: number;
}

/**
 * PLACEHOLDER DATA — Unsplash images stand in for real project photography.
 * Replace `coverImage` / `images` with paths under /public/images/ once the
 * client supplies final photography, and swap the Lorem Ipsum descriptions
 * for real project copy.
 */
const unsplash = (id: string) => `https://images.unsplash.com/${id}?w=1600&q=80`;

export const works: Work[] = [
  {
    id: "belgravia-townhouse",
    title: "Belgravia Townhouse",
    location: "London, UK",
    category: "residential",
    coverImage: unsplash("photo-1618221195710-dd6b41faaea6"),
    images: [
      unsplash("photo-1618221195710-dd6b41faaea6"),
      unsplash("photo-1600210492493-0946911123ea"),
      unsplash("photo-1600585154340-be6161a56a0c"),
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A full reimagining of a Georgian townhouse, balancing period detail with a calm, contemporary material palette throughout every room.",
    year: 2024,
  },
  {
    id: "the-lindwall-suite",
    title: "The Lindwall Suite",
    location: "Bath, UK",
    category: "hospitality",
    coverImage: unsplash("photo-1600607687939-ce8a6c25118c"),
    images: [
      unsplash("photo-1600607687939-ce8a6c25118c"),
      unsplash("photo-1631679706909-1844bbd07221"),
      unsplash("photo-1560448204-e02f11c3d0e2"),
      unsplash("photo-1616486338812-3dadae4b4ace"),
    ],
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A boutique hotel suite conceived as a quiet retreat — tactile fabrics, soft light, and considered restraint.",
    year: 2023,
  },
  {
    id: "atelier-office",
    title: "Atelier Office",
    location: "Bristol, UK",
    category: "commercial",
    coverImage: unsplash("photo-1600566753086-00f18fb6b3ea"),
    images: [
      unsplash("photo-1600566753086-00f18fb6b3ea"),
      unsplash("photo-1616137466211-f939a420be84"),
      unsplash("photo-1556909114-f6e7ad7d3136"),
    ],
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco. A workspace designed to feel more like a considered home than an office — warm materials, low light, no clutter.",
    year: 2024,
  },
  {
    id: "hillside-retreat",
    title: "Hillside Retreat",
    location: "Cotswolds, UK",
    category: "residential",
    coverImage: unsplash("photo-1615874959474-d609969a20ed"),
    images: [
      unsplash("photo-1615874959474-d609969a20ed"),
      unsplash("photo-1600210492493-0946911123ea"),
      unsplash("photo-1618221195710-dd6b41faaea6"),
    ],
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse. A countryside renovation grounded in natural stone, linen, and long views out over the valley.",
    year: 2022,
  },
  {
    id: "meridian-restaurant",
    title: "Meridian Restaurant",
    location: "London, UK",
    category: "hospitality",
    coverImage: unsplash("photo-1631679706909-1844bbd07221"),
    images: [
      unsplash("photo-1631679706909-1844bbd07221"),
      unsplash("photo-1600607687939-ce8a6c25118c"),
      unsplash("photo-1556909114-f6e7ad7d3136"),
    ],
    description:
      "Excepteur sint occaecat cupidatat non proident. A dining room built around warm timber, low banquettes, and a material palette that ages well.",
    year: 2023,
  },
  {
    id: "canalside-apartment",
    title: "Canalside Apartment",
    location: "Manchester, UK",
    category: "residential",
    coverImage: unsplash("photo-1600585154340-be6161a56a0c"),
    images: [
      unsplash("photo-1600585154340-be6161a56a0c"),
      unsplash("photo-1560448204-e02f11c3d0e2"),
      unsplash("photo-1615874959474-d609969a20ed"),
    ],
    description:
      "Curabitur pretium tincidunt lacus, ut interdum tellus elit sed risus. A compact apartment opened up with a restrained palette and considered joinery.",
    year: 2024,
  },
  {
    id: "harborview-lobby",
    title: "Harborview Lobby",
    location: "Bristol, UK",
    category: "commercial",
    coverImage: unsplash("photo-1616486338812-3dadae4b4ace"),
    images: [
      unsplash("photo-1616486338812-3dadae4b4ace"),
      unsplash("photo-1616137466211-f939a420be84"),
      unsplash("photo-1600566753086-00f18fb6b3ea"),
    ],
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. A reception space designed to slow visitors down — stone, soft light, and a single considered gesture.",
    year: 2022,
  },
];

export const categories = ["all", "residential", "commercial", "hospitality"] as const;
export type Category = (typeof categories)[number];
