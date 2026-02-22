/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.copycommand.org' }],
        destination: 'https://copycommand.org/:path*',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
