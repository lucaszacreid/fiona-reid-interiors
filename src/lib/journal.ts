export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  body: string[];
}

export const journalPosts: JournalPost[] = [
  {
    slug: "how-to-brief-an-interior-designer",
    title: "How to Brief an Interior Designer",
    excerpt:
      "What to have ready before your first design consultation, and why a good brief saves everyone time.",
    date: "2026-06-01",
    body: [
      "The success of any design project is to reflect the client's aspirations. That starts with a brief — and the better the brief, the faster a scheme comes together.",
      "Before a first site visit, it helps to have a few things ready: how you actually use each room day to day, any pieces you're keeping (furniture, art, a rug you love), and a rough sense of budget and timescale. None of this needs to be polished — a few notes and some reference photos are enough to start a real conversation.",
      "From there, a design scheme is put together after a site visit, or from architectural plans and photographs if the property isn't accessible yet. That visit is used to establish a design fee, a working budget, and a realistic timescale before any concepts are drawn up.",
      "Clients are sometimes surprised that the process starts with questions rather than mood boards. In practice, the mood boards mean far more once they're built around how a specific household actually lives.",
    ],
  },
  {
    slug: "choosing-a-colour-palette-for-a-glasgow-tenement",
    title: "Choosing a Colour Palette for a Glasgow Tenement",
    excerpt:
      "Period proportions, west-facing light, and how to choose a palette that respects both.",
    date: "2026-05-01",
    body: [
      "Glasgow's tenement flats share a set of qualities that most colour advice — written for new-build boxes with even light — simply doesn't account for: high ceilings, deep cornicing, tall windows, and light that can shift dramatically from room to room depending on aspect.",
      "A palette that works in a bright, south-facing bay window can feel flat and cold in a north-facing back bedroom in the same flat. Rather than choosing one palette for the whole property, it's worth testing tones room by room, at different times of day, before committing.",
      "Warmer, deeper tones tend to suit rooms with less natural light — they read as intentional rather than dim. Cooler, lighter tones can work well in the brighter rooms without washing out the original cornicing and ceiling roses that make these flats worth preserving in the first place.",
      "The aim is always the same: a scheme that feels like it belongs to the building, not one applied on top of it.",
    ],
  },
];
