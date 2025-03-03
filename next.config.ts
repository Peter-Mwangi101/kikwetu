import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["ke.jumia.is"], // Add the domain(s) you want to allow
  },
  eslint: {
    // This setting will ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // WARNING: This will ignore all type errors during production builds!
    ignoreBuildErrors: true,
  },

};

export default nextConfig;
