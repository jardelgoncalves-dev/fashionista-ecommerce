import React from 'react';
import NextHead from 'next/head';

const Head = () => (
  <NextHead>
    <title>Fashionista</title>
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
      key="viewport"
    />
    <meta name="title" content="Fashionista E-commerce" />
    <meta name="description" content="Moda e Acessórios" />
    <meta name="author" content="Jardel Gonçalves" />
    <meta
      name="keywords"
      content="E-commerce, ecommerce, moda, moda feminina, acessórios, acessorios, mobile"
    />
    <link rel="stylesheet" href="/static/css/normalize.css" />
    <link rel="stylesheet" href="/static/css/main.min.css" />
    <link rel="shortcut icon" href="/static/images/favicon.ico" />
    <meta
      name="google-site-verification"
      content="xdknEXDWJqHoelgkuGlLaZjTyknQTYjispdPWGfvcSw"
    />
  </NextHead>
);

export default Head;
