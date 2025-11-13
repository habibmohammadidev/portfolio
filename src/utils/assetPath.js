const basePath = process.env.DEPLOY_TARGET === 'github-pages' ? '/portfolio' : '';

export const assetPath = (path) => `${basePath}${path}`;
