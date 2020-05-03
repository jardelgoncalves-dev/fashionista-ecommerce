import produce from 'immer';

import {
  GET_PRODUCTS_TO_CART,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_TO_CART,
  UPDATE_AMOUNT_PRODUCT,
  GET_PRODUCTS_TO_CART_SUCCESS,
} from '../types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS_TO_CART:
      return state;

    case GET_PRODUCTS_TO_CART_SUCCESS:
      return action.products;

    case ADD_PRODUCT_TO_CART:
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
          return;
        }
        draft.push({
          ...action.product,
          amount: 1,
        });
      });
    case REMOVE_PRODUCT_TO_CART:
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case UPDATE_AMOUNT_PRODUCT: {
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
};
