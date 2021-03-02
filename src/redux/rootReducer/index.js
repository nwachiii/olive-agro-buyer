import { combineReducers } from "redux";
import ThemeOptions from "./ThemeOptions";
import productReducer from "../product/productReducer";

export default combineReducers({
  ThemeOptions,
  product: productReducer,
});
