import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w.ladicdn.com",
      },
      {
        protocol: "https",
        hostname: "static.ladipage.net",
      },
    ],
  },
};

export default nextConfig;
