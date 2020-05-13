const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://www.fashionista.now.sh',
  pagesDirectory: `${__dirname}/pages`,
  targetDirectory: `${__dirname}/public/`,
});
