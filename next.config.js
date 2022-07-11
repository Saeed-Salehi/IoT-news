/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.npr.org"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
