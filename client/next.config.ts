import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: process.env.NEXT_PUBLIC_GATEWAY_URL ?? '',
          port: '',
          pathname: '/ipfs/**',
          search: '',
        },
      ],
    },
};

export default nextConfig;
