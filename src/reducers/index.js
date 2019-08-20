import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import niroReducer from "./niroReducer";
import skillsReducer from "./skillsReducer";


export default combineReducers({
  item: itemReducer,
  niroReducer: niroReducer,
  skillsReducer: skillsReducer,
});
