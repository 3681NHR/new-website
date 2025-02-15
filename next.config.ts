import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
<<<<<<< HEAD
              default-src 'self' 'wasm-unsafe-eval';
              script-src 'self' 'unsafe-inline' static.cloudflareinsights.com 'unsafe-eval';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https:;
              font-src 'self';
              connect-src 'self' data: cloudflareinsights.com;
=======
              default-src 'self' wasm-unsafe-eval;
              script-src 'self' 'unsafe-inline';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https:;
              font-src 'self';
              connect-src 'self' data:;
              script-src static.cloudflareinsights.com;
              connect-src cloudflareinsights.com;
>>>>>>> 071bafd (update (#23))
            `
              .replace(/\s{2,}/g, ' ')
              .trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
