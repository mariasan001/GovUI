import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: { reactCompiler: true }, 
  transpilePackages: ["@govui/icons-catalog"]
};

export default nextConfig;
