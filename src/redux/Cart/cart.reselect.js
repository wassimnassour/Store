import { createSelector } from "reselect";

const selectCart = (state) => state.Cart;

export const SelectModal = createSelector([selectCart], (Cart) => Cart.hidden);
export const SelectCartItems = createSelector(
	selectCart,
	(Cart) => Cart.cartItems
);
export const Selecquantitiy = createSelector(selectCart, (Cart) =>
	Cart.cartItems.reduce((acc, cartItem) => cartItem.quantity + acc, 0)
);

export const SelecTotal = createSelector(selectCart, (cart) =>
	cart.cartItems.reduce(
		(acc, cartItem) => cartItem.price * cartItem.quantity + acc,
		0
	)
);
