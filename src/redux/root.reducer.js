import { combineReducers } from "redux";
import { shopReducer } from "./Shop/shop.reducer";
import { cartReducer } from "./Cart/cart.reducer";
import { userReducer } from "./User/user.reducer";
export const rootReducer = combineReducers({
  shop: shopReducer,
  Cart: cartReducer,
  User: userReducer,
});
