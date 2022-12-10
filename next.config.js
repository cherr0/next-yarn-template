/** @type {import('next').NextConfig} */
const withInterceptStdout = require('next-intercept-stdout')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production'
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}

module.exports = withInterceptStdout(
  {
    ...nextConfig
  },
  (text) =>
    text.includes('Duplicate atom key') ||
    text.includes('non-boolean') ||
    text.includes('Expected server HTML') ||
    text.includes('ECONNREFUSED')
      ? ''
      : text
)
