import { combineReducers } from "redux";
import { shopReducer } from "./Shop/shopReducer";
import { cartReducer } from "./Cart/cartReducer";
export const rootReducer = combineReducers({
	shop: shopReducer,
	Cart: cartReducer,
});
