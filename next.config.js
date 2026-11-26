/** @type {import('next').NextConfig} */
const nextConfig = {
  // The pre-launch password gate is gone; send old /gate links to the homepage.
  async redirects() {
    return [{ source: '/gate', destination: '/', permanent: false }]
  },
}

module.exports = nextConfig
