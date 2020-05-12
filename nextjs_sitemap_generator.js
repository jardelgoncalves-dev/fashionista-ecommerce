const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://www.jardelgoncalves-fashionista.netlify.app',
  pagesDirectory: `${__dirname}/pages`,
  targetDirectory: `${__dirname}/public/static/`,
});
