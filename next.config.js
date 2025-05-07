/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['local.promptrecovery.co.uk'],
  basePath: process.env.PAGES_BASE_PATH,
  distDir: 'build',
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ['react-icons'], // <=== enables tree-shaking for react-icons - see https://nextjs.org/docs/app/api-reference/config/next-config-js/optimizePackageImports
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
