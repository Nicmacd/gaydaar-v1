/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 14
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
