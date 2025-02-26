import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',
   reactStrictMode: true,
   images: {
     unoptimized: true
   },
   // Remove the dot from basePath
   basePath: '',
   assetPrefix: '',
   trailingSlash: true,
};

export default nextConfig;
