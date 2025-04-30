/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["local.promptrecovery.co.uk"],
  basePath: process.env.PAGES_BASE_PATH,
  distDir: 'build',
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: { unoptimized: true }
};

module.exports = nextConfig;