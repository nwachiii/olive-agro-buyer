// import auth from "./auth";
import ThemeOptions from "./ThemeOptions";
import productReducer from "./productReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // auth,
  ThemeOptions,
  productList: productReducer,
});

export default rootReducer;
