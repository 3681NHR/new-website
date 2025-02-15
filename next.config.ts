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
<<<<<<< HEAD
<<<<<<< HEAD
              default-src 'self' 'wasm-unsafe-eval';
              script-src 'self' 'unsafe-inline' static.cloudflareinsights.com 'unsafe-eval';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https:;
              font-src 'self';
              connect-src 'self' data: cloudflareinsights.com;
=======
=======
>>>>>>> 9c45d3b (add CSP)
=======
>>>>>>> 1009d45 (fix CSP)
              default-src 'self' wasm-unsafe-eval;
=======
              default-src 'self';
>>>>>>> ea43748 (add CSP)
=======
              default-src 'self' wasm-unsafe-eval;
>>>>>>> 1fdc1e3 (fix CSP)
              script-src 'self' 'unsafe-inline';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https:;
              font-src 'self';
<<<<<<< HEAD
<<<<<<< HEAD
              connect-src 'self' data:;
              script-src static.cloudflareinsights.com;
              connect-src cloudflareinsights.com;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 071bafd (update (#23))
=======
=======
>>>>>>> c331b46 (lint)
=======
>>>>>>> ea43748 (add CSP)
<<<<<<< HEAD
>>>>>>> 9c45d3b (add CSP)
=======
=======
              connect-src 'self' data:;
>>>>>>> 1fdc1e3 (fix CSP)
<<<<<<< HEAD
>>>>>>> 1009d45 (fix CSP)
=======
=======
>>>>>>> f475597 (lint)
>>>>>>> c331b46 (lint)
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
