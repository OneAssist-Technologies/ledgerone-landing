/** @type {import('next').NextConfig} */
const nextConfig = {
  // Proxy /ledgerone app routes and backend APIs to their respective dev servers
  async rewrites() {
    return [
      {
        source: '/ledgerone/:path*',
        destination: 'http://localhost:3005/ledgerone/:path*',
      },
      {
        source: '/ledgeroneapi/:path*',
        destination: 'http://localhost:5000/ledgeroneapi/:path*',
      },
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
};

export default nextConfig;
