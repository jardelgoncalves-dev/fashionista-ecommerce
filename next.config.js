const withImages = require('next-images');

module.exports = withImages({
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/product/vestido-transpasse-bow-tapeçaria': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/regata-alcinha-folk-preto': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/top-cropped-suede-caramelo': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/bata-decote-fluid-mini-folk': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/t-shirt-leather-dull-marinho': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/camisa-suede-span-burgundy': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/calça-classic-print-free-dots': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/regata-alcinha-folk-off-white': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/macaquinho-alfaiataria-peace-floral-red': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/bolsa-flap-triangle-caramelo': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/vestido-longo-float-tapeçaria': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/bata-decote-fluid-bohemian-preto': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/vestido-franzido-recortes-preto': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/calça-comfort-tassel-paisley-gipsy-azul': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/saia-denim-botões-indigo-escuro': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/blusa-laço-istambul-laranja-queimado': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/blusa-rib-stripes-bege': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/casaco-white-fur-off-white': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/vestido-curto-festival-floral-vintage-vermelho': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/óculos-de-sol-bold-marrrom': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/óculos-de-sol-aviador-vintage-cinza': {
        page: '/product/[id]',
        query: { id: '[id]' },
      },
      '/product/pulseira-stylish-dourado': {
        page: '/product/[id]',
        query: { id: '[id]' },
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
