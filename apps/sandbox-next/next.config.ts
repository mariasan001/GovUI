// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@govui/icons-catalog",
    "@govui/colors-catalog",
    "@govui/typography-catalog",
    "@govui/cards-catalog",
    "@govui/buttons-catalog",
    "@govui/inputs-catalog",
    "@govui/nav-catalog",
    "@govui/loaders-catalog",
    "@govui/login-catalog",
    "@govui/tooltips-catalog",
    "@govui/forms-catalog",
  ],
  experimental: {
    // Tree-shake más fino para lucide
    optimizePackageImports: ["lucide-react"],
    // reactCompiler: true, // si lo activas
  },
};

export default nextConfig;
