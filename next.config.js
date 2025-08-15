/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Update this to your specific domains
      },
    ],
  },
  // Remove all experimental flags
}

module.exports = nextConfig