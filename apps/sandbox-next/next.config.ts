// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: { reactCompiler: true },
  transpilePackages: [
    "@govui/icons-catalog",
    "@govui/colors-catalog",
    "@govui/typography-catalog",
    "@govui/cards-catalog",
    "@govui/buttons-catalog", 
    "@govui/inputs-catalog",
  ],
  experimental: {
    // Reduce el peso de iconos (tree-shake mejor los imports)
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
