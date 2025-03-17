/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    })
    return config
  },
  // Add these configurations
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add any image domains you're using
  },
}

export default nextConfig;