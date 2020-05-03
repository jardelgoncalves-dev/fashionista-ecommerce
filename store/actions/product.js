import {
  REQUEST_GET_PRODUCTS,
  REQUEST_GET_PRODUCTS_SUCCESS,
  REQUEST_GET_PRODUCTS_FAILURE,
} from '../types';

export const requestGetProducts = () => ({
  type: REQUEST_GET_PRODUCTS,
});

export const getProductsSuccess = (payload) => ({
  type: REQUEST_GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsFailure = (payload) => ({
  type: REQUEST_GET_PRODUCTS_FAILURE,
  payload,
});
