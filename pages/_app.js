import App from 'next/app';
import React from 'react';

import { Head, Layout } from '../components/Page';
import { Header } from '../components/_UI';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head />
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
