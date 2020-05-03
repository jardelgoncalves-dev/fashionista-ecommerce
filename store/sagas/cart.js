import { takeLatest, all } from 'redux-saga/effects';

import { getProductsToCartSuccess } from '../actions/cart';
import { GET_PRODUCTS_TO_CART } from '../types';

function getToCart() {
  const data = localStorage.getItem('persist:@fashionista/persist')
    ? JSON.parse(localStorage.getItem('persist:@fashionista/persist'))
    : {};

  getProductsToCartSuccess(data.cart ? JSON.parse(data.cart) : []);
}

export default all([takeLatest(GET_PRODUCTS_TO_CART, getToCart)]);
