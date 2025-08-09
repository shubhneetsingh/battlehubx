/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'your-image-host.com'],
  },
};

module.exports = nextConfig;
