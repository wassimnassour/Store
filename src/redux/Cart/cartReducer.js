import { CartActionTypes } from "./cart.types";
import { addItemToCart, RemoveItemFromCart } from "./cart.utilt";
const INTIAL_STATE = {
	hidden: false,
	cartItems: [],
};
export const cartReducer = (state = INTIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.CLOSE_AND_OPEN_BAG:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_TO_CART:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case CartActionTypes.REMOVE_ITEM_FROM_CART:
			return {
				...state,
				cartItems: RemoveItemFromCart(state.cartItems, action.payload),
			};
		default:
			return {
				...state,
			};
	}
};
