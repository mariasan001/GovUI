import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: { reactCompiler: true }, 
  transpilePackages: [ 
                             "@govui/icons-catalog",
                             "@govui/colors-catalog",
                             "@govui/typography-catalog",
                             "@govui/cards-catalog",
                             
                     ]
};

export default nextConfig;
