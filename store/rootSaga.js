import { all } from 'redux-saga/effects';

import product from './sagas/product';
import cart from './sagas/cart';

export default function* rootSaga() {
  return yield all([product, cart]);
}
