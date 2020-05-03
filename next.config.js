const withImages = require('next-images');

module.exports = withImages({
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/product/vestido-transpasse-bow-tapeçaria': {
        page: '/product/[id]',
        query: { id: 'vestido-transpasse-bow-tapeçaria' },
      },
      '/product/regata-alcinha-folk-preto': {
        page: '/product/[id]',
        query: { id: 'regata-alcinha-folk-preto' },
      },
      '/product/top-cropped-suede-caramelo': {
        page: '/product/[id]',
        query: { id: 'top-cropped-suede-caramelo' },
      },
      '/product/bata-decote-fluid-mini-folk': {
        page: '/product/[id]',
        query: { id: 'bata-decote-fluid-mini-folk' },
      },
      '/product/t-shirt-leather-dull-marinho': {
        page: '/product/[id]',
        query: { id: 't-shirt-leather-dull-marinho' },
      },
      '/product/camisa-suede-span-burgundy': {
        page: '/product/[id]',
        query: { id: 'camisa-suede-span-burgundy' },
      },
      '/product/calça-classic-print-free-dots': {
        page: '/product/[id]',
        query: { id: 'calça-classic-print-free-dots' },
      },
      '/product/regata-alcinha-folk-off-white': {
        page: '/product/[id]',
        query: { id: 'regata-alcinha-folk-off-white' },
      },
      '/product/macaquinho-alfaiataria-peace-floral-red': {
        page: '/product/[id]',
        query: { id: 'macaquinho-alfaiataria-peace-floral-red' },
      },
      '/product/bolsa-flap-triangle-caramelo': {
        page: '/product/[id]',
        query: { id: 'bolsa-flap-triangle-caramelo' },
      },
      '/product/vestido-longo-float-tapeçaria': {
        page: '/product/[id]',
        query: { id: 'vestido-longo-float-tapeçaria' },
      },
      '/product/bata-decote-fluid-bohemian-preto': {
        page: '/product/[id]',
        query: { id: 'bata-decote-fluid-bohemian-preto' },
      },
      '/product/vestido-franzido-recortes-preto': {
        page: '/product/[id]',
        query: { id: 'vestido-franzido-recortes-preto' },
      },
      '/product/calça-comfort-tassel-paisley-gipsy-azul': {
        page: '/product/[id]',
        query: { id: 'calça-comfort-tassel-paisley-gipsy-azul' },
      },
      '/product/saia-denim-botões-indigo-escuro': {
        page: '/product/[id]',
        query: { id: 'saia-denim-botões-indigo-escuro' },
      },
      '/product/blusa-laço-istambul-laranja-queimado': {
        page: '/product/[id]',
        query: { id: 'blusa-laço-istambul-laranja-queimado' },
      },
      '/product/blusa-rib-stripes-bege': {
        page: '/product/[id]',
        query: { id: 'blusa-rib-stripes-bege' },
      },
      '/product/casaco-white-fur-off-white': {
        page: '/product/[id]',
        query: { id: 'casaco-white-fur-off-white' },
      },
      '/product/vestido-curto-festival-floral-vintage-vermelho': {
        page: '/product/[id]',
        query: { id: 'vestido-curto-festival-floral-vintage-vermelho' },
      },
      '/product/óculos-de-sol-bold-marrrom': {
        page: '/product/[id]',
        query: { id: 'óculos-de-sol-bold-marrrom' },
      },
      '/product/óculos-de-sol-aviador-vintage-cinza': {
        page: '/product/[id]',
        query: { id: 'óculos-de-sol-aviador-vintage-cinza' },
      },
      '/product/pulseira-stylish-dourado': {
        page: '/product/[id]',
        query: { id: 'pulseira-stylish-dourado' },
      },
    };
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
