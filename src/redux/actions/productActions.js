// import axios from "axios";
// import {
//   FETCH_PRODUCTS_REQUEST,
//   FETCH_PRODUCTS_SUCCESS,
//   FETCH_PRODUCTS_FAILURE,
//   ADD_PRODUCT_REQUEST,
//   ADD_PRODUCT_SUCCESS,
//   ADD_PRODUCT_FAILURE,
// } from "../types/productTypes";

// //FETCH PRODUCTS
// export const fetchProducts = () => {
//   const token = localStorage.getItem("token");

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   return (dispatch) => {
//     dispatch(fetchProductsRequest());
//     axios
//       .get("https://www.api.oliveagro.org/api/product/list/all", config)
//       .then((response) => {
//         // response.data is the products
//         const products = response.data;
//         dispatch(fetchProductsSuccess(products));
//       })
//       .catch((error) => {
//         // error.message is the error message
//         dispatch(fetchProductsFailure(error.message));
//       });
//   };
// };

// export const fetchProductsRequest = () => {
//   return {
//     type: FETCH_PRODUCTS_REQUEST,
//   };
// };

// export const fetchProductsSuccess = (products) => {
//   return {
//     type: FETCH_PRODUCTS_SUCCESS,
//     payload: products,
//   };
// };

// export const fetchProductsFailure = (error) => {
//   return {
//     type: FETCH_PRODUCTS_FAILURE,
//     payload: error,
//   };
// };

// //ADD PRODUCT
// export const addProduct = (productObj) => {
//   return (dispatch) => {
//     dispatch(addProductRequest());
//     axios
//       .post("https://www.api.oliveagro.org/api/product/list/all", productObj)
//       .then((response) => {
//         const product = response.data;
//         console.log(product);
//         dispatch(addProductSuccess(product));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

// export const addProductRequest = () => {
//   return {
//     type: ADD_PRODUCT_REQUEST,
//   };
// };

// export const addProductSuccess = (product) => {
//   return {
//     type: ADD_PRODUCT_SUCCESS,
//     payload: product,
//   };
// };

// export const addProductFailure = (error) => {
//   return {
//     type: ADD_PRODUCT_FAILURE,
//     payload: error,
//   };
// };

import axios from "axios";

export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
export const PRODUCTS_FAILURE = "PRODUCTS_FAILURE";

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
