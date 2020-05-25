import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer.js";
const Store = createStore(rootReducer, applyMiddleware());
export default Store;
