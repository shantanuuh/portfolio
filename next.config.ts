import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: {
      exclude: ['info'],
    },
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
