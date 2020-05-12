import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const SEO = ({ meta, title, subTitle, productName, productImage, siteUrl }) => (
  <Helmet
    htmlAttributes={{ lang: 'pt' }}
    title={title}
    titleTemplate={title && `%s | ${subTitle}`}
    meta={[
      {
        name: 'description',
        content: `Conheça esse produto incrivel: ${productName}`,
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:creator', content: 'Jardel Gonçalves' },
      { name: 'twitter:title', content: title },
      {
        name: 'twitter:description',
        content: `Conheça esse produto incrivel: ${productName}`,
      },
      { property: 'og:title', content: title },
      {
        property: 'og:description',
        content: `Conheça esse produto incrivel: ${productName}`,
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:url',
        content: `https://jardelgoncalves-fashionista.netlify.app/${siteUrl}`,
      },
      {
        property: 'og:image',
        content:
          productImage ||
          'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível',
      },
      { property: 'og:image:alt', content: productName },
      { property: 'og:image:type', content: 'image/jpg' },
      { property: 'og:image:width', content: '1365' },
      { property: 'og:image:height', content: '1365' },
    ].concat(meta)}
  />
);

SEO.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  productName: PropTypes.string,
  productImage: PropTypes.string,
  siteUrl: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  meta: [],
  subTitle: 'Produto',
  productName: '',
  productImage:
    'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível',
  siteUrl: '',
};

export default SEO;
