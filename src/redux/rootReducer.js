import { combineReducers } from "redux";
import { shopReducer } from "./Shop/shopReducer";
export const rootReducer = combineReducers({
	shop: shopReducer,
});
