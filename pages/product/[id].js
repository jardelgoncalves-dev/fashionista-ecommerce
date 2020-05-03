import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Product } from '../../components/_UI';

import { productNameToId } from '../../utils';

import * as ProductsAction from '../../store/actions/product';
import * as CartAction from '../../store/actions/cart';

const ProductPage = ({ products, requestGetProducts, addProductToCart }) => {
  const router = useRouter();
  const { id } = router.query;

  const [state, setState] = useState({
    size: '',
    sizeError: '',
    loading: false,
  });

  useEffect(() => {
    requestGetProducts();
  }, []);

  const productFind = useMemo(() => {
    if (id && products.data.length) {
      const productExists = products.data.find(
        (p) => productNameToId(`${p.name} ${p.color}`) === id
      );

      return productExists;
    }

    return null;
  }, [id, products.data]);

  const addToCart = (product) => {
    const { size } = state;

    const {
      name,
      color,
      image,
      actual_price,
      discount_percentage,
      installments,
    } = product;

    if (!size) {
      setState((old) => ({
        ...old,
        sizeError: 'É necessário escolher um tamanho.',
      }));
      return;
    }

    setState((old) => ({
      ...old,
      sizeError: '',
      loading: true,
    }));

    addProductToCart({
      id: productNameToId(`${name} ${color} ${size}`),
      name,
      image,
      size,
      amount: 1,
      color,
      actual_price,
      discount_percentage,
      installments,
    });

    setState((old) => ({
      ...old,
      loading: false,
    }));
  };

  const onSizeChange = (option) => {
    setState((old) => ({
      ...old,
      size: option.size,
    }));
  };

  return productFind ? (
    <Product
      image={productFind.image}
      color={productFind.color}
      name={productFind.name}
      actual_price={productFind.actual_price}
      sizes={productFind.sizes}
      discount_percentage={productFind.discount_percentage}
      installments={productFind.installments}
      addToCart={addToCart}
      onSelectSize={onSizeChange}
      error={state.sizeError}
      loading={state.loading}
    />
  ) : null;
};

ProductPage.propTypes = {
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
  addProductToCart: PropTypes.func,
};

ProductPage.defaultProps = {
  products: { products: [] },
  requestGetProducts: () => null,
  addProductToCart: () => null,
};

const mapStateToProps = (state) => ({
  products: state.product,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...ProductsAction, ...CartAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
