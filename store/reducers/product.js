import {
  REQUEST_GET_PRODUCTS,
  REQUEST_GET_PRODUCTS_SUCCESS,
  REQUEST_GET_PRODUCTS_FAILURE,
} from '../types';

const INITIAL_STATE = {
  data: [],
  loading: true,
  error: false,
  text_error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_GET_PRODUCTS:
      return { ...state, loading: true };

    case REQUEST_GET_PRODUCTS_SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
        error: false,
        text_error: '',
      };

    case REQUEST_GET_PRODUCTS_FAILURE:
      return {
        data: [],
        loading: false,
        error: true,
        text_error: action.payload.text_error,
      };
    default:
      return state;
  }
};
