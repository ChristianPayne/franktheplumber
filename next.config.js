/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ['dummyimage.com'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  output: 'standalone',
  distDir: 'out'
}

module.exports = nextConfig