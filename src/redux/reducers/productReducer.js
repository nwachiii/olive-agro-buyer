//

import {
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
} from "../types/productTypes";

const initialState = {
  token: localStorage.getItem("token"),
  loading: true,
  products: [],
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
      localStorage.setItem("token", payload.users.token);
      localStorage.setItem("newProduct", JSON.stringify(payload.products));
      const products = state.products.push(...payload.products);
      return {
        ...state,
        products,
        loading: false,
      };

    case ADD_PRODUCT_FAILURE:
      localStorage.removeItem("token");
      localStorage.removeItem("newProduct");
      return {
        ...state,
        loading: false,
        products: null,
        error: payload,
      };

    default:
      return state;
  }
}
