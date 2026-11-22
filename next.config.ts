import type { NextConfig } from "next";

const nextConfig = {
  agentRules: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
} satisfies NextConfig & { agentRules?: boolean };

export default nextConfig;
