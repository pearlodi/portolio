import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  env: {
  },
};

export default nextConfig;
