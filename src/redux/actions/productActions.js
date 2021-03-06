import axios from "axios";
import {
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
} from "../types/productTypes";

//Fetch products
export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://www.api.oliveagro.org/api/product/list/all"
    );
    dispatch({
      type: PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAILURE,
    });
    console.log(error);
  }
};

//ADD PRODUCT
export const addProduct = (productObj) => {
  return (dispatch) => {
    dispatch(addProductRequest());
    axios
      .post("https://www.api.oliveagro.org/api/product/list/all", productObj)
      .then((response) => {
        const product = response.data;
        console.log(product);
        dispatch(addProductSuccess(product));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addProductRequest = () => {
  return {
    type: ADD_PRODUCT_REQUEST,
  };
};

export const addProductSuccess = (product) => {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const addProductFailure = (error) => {
  return {
    type: ADD_PRODUCT_FAILURE,
    payload: error,
  };
};
