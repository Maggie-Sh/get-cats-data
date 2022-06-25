import { combineReducers } from "redux";
import boxesReducer from "./boxes";
import clothesReducer from "./clothes";
import hatsReducer from "./hats";
import sinksReducer from "./sinks";
import spaceReducer from "./space";
import sunglassesReducer from "./sunglasses";
import tiesReducer from "./ties";
import categoriesReducer from "./categories";

const reducers = combineReducers({
  boxes: boxesReducer,
  clothes: clothesReducer,
  hats: hatsReducer,
  sinks: sinksReducer,
  space: spaceReducer,
  sunglasses: sunglassesReducer,
  ties: tiesReducer,
  categories: categoriesReducer,
});

export default reducers;
