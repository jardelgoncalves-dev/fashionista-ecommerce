import {
  GET_PRODUCTS_TO_CART,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_TO_CART,
  UPDATE_AMOUNT_PRODUCT,
} from '../types';

export const getProductsToCart = () => ({
  type: GET_PRODUCTS_TO_CART,
});

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  product,
});

export const removeProductToCart = (id) => ({
  type: REMOVE_PRODUCT_TO_CART,
  id,
});

export const updateAmount = (id, amount) => ({
  type: UPDATE_AMOUNT_PRODUCT,
  id,
  amount,
});
