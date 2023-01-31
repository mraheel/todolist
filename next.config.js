/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {appDir: true},
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/todos',
  //       destination: 'http://localhost:4000/todos'
  //     },
  //   ]
  // },
}

module.exports = nextConfig
