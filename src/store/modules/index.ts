import { combineReducers } from "redux";

import sidebar from "./sidebar/reducer";
import auth from "./auth/reducer";

export default combineReducers({
  sidebar,
  auth,
});
