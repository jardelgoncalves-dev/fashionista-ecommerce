import { takeLatest, all } from 'redux-saga/effects';

import { getProductsToCart } from '../actions/cart';
import { GET_PRODUCTS_TO_CART } from '../types';

function getProductToCart() {
  const data = JSON.parse(localStorage.getItem('cart'));
  getProductsToCart(data || []);
}

export default all([takeLatest(GET_PRODUCTS_TO_CART, getProductToCart)]);
