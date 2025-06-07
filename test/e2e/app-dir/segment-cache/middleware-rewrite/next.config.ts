import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    clientSegmentCache: true,
    validateRSCRequestHeaders: true,
  },
}

export default nextConfig
