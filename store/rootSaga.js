import { all } from 'redux-saga/effects';

import product from './sagas/product';

export default function* rootSaga() {
  return yield all([product]);
}
