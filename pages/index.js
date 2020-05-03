import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Products, Loading } from '../components/_UI';

import * as ProductsAction from '../store/actions/product';

const Home = ({ products, requestGetProducts }) => {
  useEffect(() => {
    requestGetProducts();
  }, []);

  return products.loading ? <Loading /> : <Products data={products.data} />;
};

Home.propTypes = {
  products: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        color: PropTypes.string,
        on_sale: PropTypes.bool,
        actual_price: PropTypes.string,
        discount_percentage: PropTypes.string,
        image: PropTypes.string,
      })
    ),
    loading: PropTypes.bool,
    error: PropTypes.bool,
    text_error: '',
  }),
  requestGetProducts: PropTypes.func,
};

Home.defaultProps = {
  products: { products: [] },
  requestGetProducts: () => null,
};

const mapStateToProps = (state) => ({
  products: state.product,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ProductsAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
