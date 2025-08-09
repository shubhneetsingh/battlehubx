/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add basePath if deploying to subpath
  // basePath: '/your-subpath',
  images: {
    domains: [], // Add your image domains here if needed
  },
  // Ensure this matches your directory structure
  experimental: {
    appDir: false, // Disable if using pages router
  },
}

module.exports = nextConfig
