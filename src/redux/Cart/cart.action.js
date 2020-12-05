import { CartActionTypes } from "./cart.types";

export const OpenAndCloseModel = () => ({
	type: CartActionTypes.CLOSE_AND_OPEN_BAG,
});
export const AddToCart = (item) => ({
	type: CartActionTypes.ADD_TO_CART,
	payload: item,
});

export const RemoveItem = (item) => ({
	type: CartActionTypes.REMOVE_ITEM_FROM_CART,
	payload: item,
});
export const RemoveALert = (item) => ({
	type: CartActionTypes.REMOVE_ALERT,
});
