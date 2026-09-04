import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/fa/products/tasvin',
        destination: '/fa/products/tasvia',
        permanent: true,
      },
      {
        source: '/en/products/tasvin',
        destination: '/en/products/tasvia',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
