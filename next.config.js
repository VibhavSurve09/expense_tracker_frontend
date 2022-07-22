/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API: process.env.NEXT_PUBLIC_BACKEND_API,
  },
};

module.exports = nextConfig;
