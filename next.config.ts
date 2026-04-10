import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactCompiler disabled — causes hydration mismatches with framer-motion
  // reactCompiler: true,
  images: {
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
