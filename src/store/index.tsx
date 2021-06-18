import { createStore } from "redux";

import rootReducer from "./modules";
import { AppStore } from "./types";

const store: AppStore = createStore(rootReducer);
export default store;
