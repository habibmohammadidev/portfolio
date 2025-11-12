/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';
const repoName = 'portfolio';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isGitHubPages ? `/${repoName}` : '',
  assetPrefix: isGitHubPages ? `/${repoName}` : '',
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