/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['three'],
};

module.exports = {
  images: {
    domains: ["pbs.twimg.com"],
  },
};
