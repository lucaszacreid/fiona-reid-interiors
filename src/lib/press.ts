export interface PressMention {
  name: string;
  logo: string;
  /** Real pixel dimensions of the logo file, so it never renders skewed. */
  logoWidth: number;
  logoHeight: number;
}

export const pressMentions: PressMention[] = [
  {
    name: "Mayfair Times",
    logo: "/images/press-mayfair-times.png",
    logoWidth: 372,
    logoHeight: 216,
  },
];
