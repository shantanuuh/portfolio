import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: {
      exclude: ['info'],
    },
  },
};

export default nextConfig;
