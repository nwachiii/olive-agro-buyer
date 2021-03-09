//

import {
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
} from "../types/productTypes";

const initialState = {
  products: [],
  loading: true,
  error: [],
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        products: payload.products,
      };

    case PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case ADD_PRODUCT_SUCCESS:
      const products = state.products.push(...payload.products);
      return {
        ...state,
        products,
        loading: false,
      };

    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
