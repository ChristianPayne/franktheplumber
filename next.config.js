/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  /* config options here */
  env: {
    
  },
  images: {
    domains: ['dummyimage.com'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // experimental: {
  //   runtime: 'nodejs',
  //   serverComponents: true,
  // },
}

module.exports = nextConfig