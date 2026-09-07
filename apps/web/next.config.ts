import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    '/*': [
      './content/legacy/wordpress/post-index.json',
      './content/legacy/wordpress/posts/**/*.json',
    ],
  },
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

if (process.env.OPENNEXT_DEV === '1') {
  import('@opennextjs/cloudflare').then((m) => m.initOpenNextCloudflareForDev());
}
