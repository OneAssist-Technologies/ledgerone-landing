/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/ledgerone',
  trailingSlash: false,
  // Proxy local development requests to the React App and Express Backend
  async rewrites() {
    return [
      {
        source: '/app/:path*',
        destination: 'http://localhost:3005/ledgerone/app/:path*',
      },
      {
        source: '/ledgeroneapi/:path*',
        destination: 'http://localhost:5007/ledgeroneapi/:path*',
      },
      {
        source: '/api/:path*',
        destination: 'http://localhost:5007/api/:path*',
      },
    ];
  },
};

export default nextConfig;
