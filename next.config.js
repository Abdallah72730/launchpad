/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
  
  // Optimize images
  images: {
    domains: [],
    unoptimized: false,
  },
  
  // Ensure trailing slashes for consistent routing
  trailingSlash: false,
};

module.exports = nextConfig;
