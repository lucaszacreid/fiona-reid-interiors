/**
 * Single source of truth for the studio's name/address/phone (NAP) and
 * other site-wide constants. Referenced by metadata, JSON-LD, the footer,
 * sitemap, and robots.txt so these details never drift out of sync.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fiona-reid-interiors.vercel.app";

export const business = {
  name: "Fiona Reid Interiors",
  telephone: "+447835708435",
  telephoneDisplay: "+44 7835 708435",
  email: "info@fionareidinteriors.co.uk",
  address: {
    street: "37 Otago Street",
    locality: "Glasgow",
    postalCode: "G12 8JJ",
    country: "GB",
    countryName: "United Kingdom",
  },
  addressDisplay: "37 Otago Street, Glasgow, G12 8JJ",
  instagram: "https://www.instagram.com/fionareidinteriors",
  areaServed: ["Glasgow", "London", "Scotland", "United Kingdom"],
  // Approximate coordinates for 37 Otago Street, Glasgow — confirm before
  // relying on this for precise mapping.
  geo: {
    latitude: 55.8735,
    longitude: -4.2951,
  },
};
