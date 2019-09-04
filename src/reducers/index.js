import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import niroReducer from "./niroReducer";
import skillsReducer from "./skillsReducer";
import contactReducer from "./contactReducer";


export default combineReducers({
  item: itemReducer,
  niroReducer: niroReducer,
  skillsReducer: skillsReducer,
  contactReducer: contactReducer,
});
