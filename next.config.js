/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: [],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  output: 'standalone',
  distDir: 'out'
}

module.exports = nextConfig