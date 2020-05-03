import { call, put, takeLatest, all } from 'redux-saga/effects';

import { api } from '../../services';
import { getProductsSuccess, getProductsFailure } from '../actions/product';
import { REQUEST_GET_PRODUCTS } from '../types';

function* fetchProducts() {
  try {
    const response = yield call(api.get, 'catalog');
    yield put(
      getProductsSuccess({
        data: response.data,
      })
    );
  } catch (err) {
    yield put(
      getProductsFailure({
        text_error: 'Ocorreu um erro ao buscar os produtos',
      })
    );
  }
}

export default all([takeLatest(REQUEST_GET_PRODUCTS, fetchProducts)]);
