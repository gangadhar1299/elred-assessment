/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['randomuser.me', 'newpublicbucket.s3.us-east-2.amazonaws.com']
  },
  async redirects () {
    return [
      { source: '/', destination: '/products/categories', permanent: true },
      { source: '/products', destination: '/products/categories', permanent: true }
    ]
  }
}

module.exports = nextConfig
