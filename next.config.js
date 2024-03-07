/** @type {import('next').NextConfig} */
const nextConfig = {
  server: {
    port: 3033,
  },
  reactStrictMode: true,
  images: {
    domains: ['strapi.bonusgame168.com', 'localhost']
  }
}

module.exports = nextConfig
