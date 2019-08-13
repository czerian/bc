import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import niroReducer from "./niroReducer";

export default combineReducers({
  item: itemReducer,
  niroReducer: niroReducer,
});
