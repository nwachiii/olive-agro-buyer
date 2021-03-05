import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
} from "./productTypes";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //Fetch Products
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: "",
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };

    //Add Product
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT_SUCCESS:
      const products = state.products.concat(action.payload);
      return {
        ...state,
        loading: false,
        products,
        error: "",
      };
    case ADD_PRODUCT_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
