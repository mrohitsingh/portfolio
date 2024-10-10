/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  assetPrefix: 'https://mrohitsingh.in/',
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/css/:slug*', // Your custom path format
        destination: '/_next/static/css/:slug*', // The original path where the file is actually located
      },
      {
        source: '/js/:slug*', // Your custom path format
        destination: '/_next/static/js/:slug*', // The original path where the file is actually located
      },
      {
        source: '/js/:slug*', // Your custom path format
        destination: '/_next/static/chunks/:slug*', // The original path where the file is actually located
      },
      {
        source: '/pages/:slug*', // Your custom path format
        destination: '/_next/static/chunks/pages/:slug*', // The original path where the file is actually located
      },
    ];
  },
};

module.exports = nextConfig;
