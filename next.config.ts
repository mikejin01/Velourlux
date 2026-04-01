import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Velourlux",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
