import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/exclude",
  assetPrefix: "/exclude/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
