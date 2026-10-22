/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/ledgerone',
  trailingSlash: true,
  // Proxy local development requests to the React App and Express Backend
  async rewrites() {
    return {
      beforeFiles: [
        // Forward LedgerOne assets through the configured basePath
        {
          source: '/assets/:path*',
          destination: 'http://127.0.0.1:4175/assets/:path*',
        },
        // Express Backend APIs (both with and without basePath)
        {
          source: '/ledgeroneapi/:path*',
          destination: 'http://localhost:5007/ledgeroneapi/:path*',
          basePath: false,
        },
        {
          source: '/ledgeroneapi/:path*',
          destination: 'http://localhost:5007/ledgeroneapi/:path*',
        },
        {
          source: '/api/:path*',
          destination: 'http://localhost:5007/api/:path*',
          basePath: false,
        },
        {
          source: '/api/:path*',
          destination: 'http://localhost:5007/api/:path*',
        },
        // Legacy /app/:path* requests seamlessly proxy to Vite
        {
          source: '/app/:path*',
          destination: 'http://127.0.0.1:4175/ledgerone/:path*',
        },
        // Vite HMR and dev client roots if requested without /ledgerone prefix
        {
          source: '/@vite/:path*',
          destination: 'http://127.0.0.1:4175/@vite/:path*',
          basePath: false,
        },
        {
          source: '/@fs/:path*',
          destination: 'http://127.0.0.1:4175/@fs/:path*',
          basePath: false,
        },
      ],
      afterFiles: [],
      // Fallback: any route under /ledgerone not handled by Next.js landing page or static files
      // (e.g. /login, /register, /signup, /:organizationName, /tools/...) is proxied to Vite
      fallback: [
        {
          source: '/:path*',
          destination: 'http://127.0.0.1:4175/ledgerone/:path*',
        },
      ],
    };
  },
  async redirects() {
    return [
      {
        source: '/favicon.ico',
        destination: '/ledgerone/favicon.ico',
        permanent: false,
        basePath: false,
      },
      {
        source: '/favicon.svg',
        destination: '/ledgerone/favicon.ico',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
