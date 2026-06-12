import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
  },
};

export default nextConfig;
