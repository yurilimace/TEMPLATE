import { combineReducers } from "redux";

import sidebarShow from "./sidebarShow/reducer";
import auth from "./auth/reducer";

export default combineReducers({
  sidebarShow,
  auth,
});
