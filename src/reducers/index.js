import { combineReducers } from "redux";
import niroReducer from "./niroReducer";
import skillsReducer from "./skillsReducer";
import contactReducer from "./contactReducer";
import resumeReducer from "./resumeReducer";


export default combineReducers({
  niroReducer: niroReducer,
  skillsReducer: skillsReducer,
  contactReducer: contactReducer,
  resumeReducer: resumeReducer,
});
