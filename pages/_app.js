import App from 'next/app';
import React from 'react';
import { Provider, connect } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import { Head, Layout } from '../components/Page';
import { Header, Drawer, Bag } from '../components/_UI';

import store from '../store';

class MyApp extends App {
  state = {
    typeModal: '',
    modalClassName: '',
  };

  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  onModalShoppingCart = () => {
    this.setState({
      typeModal: 'cart',
      modalClassName: 'drawer--visible',
    });
  };

  onModalSearch = () => {
    this.setState({
      typeModal: 'search',
      modalClassName: 'drawer--visible',
    });
  };

  onModalClose = () => {
    this.setState({
      modalClassName: 'drawer--closed',
    });
  };

  render() {
    const { Component, pageProps, cart } = this.props;

    const cartSize = cart.reduce((acc, p) => p.amount + acc, 0);

    return (
      <Provider store={store}>
        <Head />
        <Header
          onShoppingCart={this.onModalShoppingCart}
          onSearch={this.onModalSearch}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Drawer
          className={this.state.modalClassName}
          title={
            this.state.typeModal === 'cart'
              ? `Sacola (${cartSize})`
              : 'Buscar produto'
          }
          onClose={this.onModalClose}
        >
          <Bag isSearch={this.state.typeModal === 'search'} />
        </Drawer>
      </Provider>
    );
  }
}

const makeStore = () => store;

export default withRedux(makeStore)(
  connect((state) => ({
    cart: state.cart,
    products: state.product,
  }))(MyApp)
);
