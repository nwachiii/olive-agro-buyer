import axios from "axios";
import { PRODUCTS_SUCCESS, PRODUCTS_FAILURE } from "../types/productTypes";

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

//Get ImageUrl from Cloudinary
export const getImageUrl = async ({ imageUrl }) => {
  const image = new FormData();
  image.append("image", imageUrl);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "https://www.api.oliveagro.org/api/users/upload",
      image,
      config
    );
    console.log(res.data.image);
    return res.data.image;
  } catch (error) {
    console.log(error);
  }
};

// const getCacUrl = async () => {
//   const image = new FormData();
//   image.append("image", cac);
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   try {
//     const res = await axios.post(
//       "https://www.api.oliveagro.org/api/users/upload",
//       image,
//       config
//     );
//     return res.data.image;
//   } catch (error) {
//     console.log(error);
//   }
// };
