/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  assetPrefix: 'https://mrohitsingh.in/',
  reactStrictMode: true,
};

module.exports = nextConfig;
