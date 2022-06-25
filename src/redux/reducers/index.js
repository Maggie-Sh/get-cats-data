import { combineReducers } from "redux";
import categoriesReducer from "./categories";

const reducers = combineReducers({
  categories: categoriesReducer,
});

export default reducers;
