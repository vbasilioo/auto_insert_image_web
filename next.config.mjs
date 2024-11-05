/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ['cdn2.thecatapi.com'],
  },
}

export default nextConfig
