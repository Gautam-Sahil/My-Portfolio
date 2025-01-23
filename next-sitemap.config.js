// next-sitemap.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://gautamtiwari.top', 
  generateRobotsTxt: false, 
  sitemapSize: 7000, 
  changefreq: 'daily', 
  priority: 0.8,
  transform: async (config, path) => {
    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: path === '/about' ? 1.0 : config.priority || 0.8,
    };
  },
};
