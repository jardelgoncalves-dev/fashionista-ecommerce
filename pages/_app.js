import App from 'next/app';
import Router from 'next/router';
import React from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import withRedux from 'next-redux-wrapper';

import { Head, Layout } from '../components/Page';
import { Header, Drawer, Bag } from '../components/_UI';

import { store, persistor } from '../store';
import * as CartAction from '../store/actions/cart';

class MyApp extends App {
  state = {
    typeModal: '',
    modalClassName: '',
    productsSearch: [],
    searchText: '',
  };

  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  componentDidMount() {
    const { getProductsToCart } = this.props;
    getProductsToCart();
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

  onSearch = (e) => {
    const { value } = e.target;
    const { products } = this.props;

    let data = [];
    if (value) {
      data = products.data.filter((p) => p.name.includes(value.toUpperCase()));
    }

    this.setState({
      productsSearch: data,
      searchText: value,
    });
  };

  goToProductPage = (id) => {
    Router.push(`/product/${id}`);
  };

  onRemoveProductToCart = ({ id }) => {
    const { removeProductToCart } = this.props;
    removeProductToCart(id);
  };

  onIncrementProduct = ({ id, amount }) => {
    const { updateAmount } = this.props;
    updateAmount(id, Number(amount) + 1);
  };

  onDecrementProduct = ({ id, amount }) => {
    const { updateAmount } = this.props;
    updateAmount(id, Number(amount) - 1);
  };

  render() {
    const { Component, pageProps, cart } = this.props;
    const cartSize = cart.reduce((acc, p) => p.amount + acc, 0);

    return (
      <Provider store={store}>
        <Head />
        <PersistGate loading={null} persistor={persistor}>
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
            <Bag
              isSearch={this.state.typeModal === 'search'}
              onSearch={this.onSearch}
              toProductPage={this.goToProductPage}
              onRemoveToCart={this.onRemoveProductToCart}
              onIncrement={this.onIncrementProduct}
              onDecrement={this.onDecrementProduct}
              data={
                this.state.typeModal === 'cart'
                  ? cart
                  : this.state.productsSearch
              }
            />
          </Drawer>
        </PersistGate>
      </Provider>
    );
  }
}

const makeStore = () => store;

const mapStateToProps = (state) => ({
  cart: state.cart,
  products: state.product,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartAction, dispatch);

export default withRedux(makeStore)(
  connect(mapStateToProps, mapDispatchToProps)(MyApp)
);
