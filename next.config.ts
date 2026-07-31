import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unsplash placeholder imagery only — remove once real photography
    // is dropped into /public/images/.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
