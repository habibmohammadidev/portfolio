/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'portfolio'; // Leave empty if using custom domain or username.github.io

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd && repoName ? `/${repoName}` : '',
  assetPrefix: isProd && repoName ? `/${repoName}` : '',
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;