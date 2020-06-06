export const addItemToCart = (cartItems, addCart) => {
	const existItem = cartItems.find((cartItem) => cartItem.id === addCart.id);
	if (existItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === addCart.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...addCart, quantity: 1 }];
};

export const RemoveItemFromCart = (cartItems, ItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === ItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((item) => item.id !== ItemToRemove.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === ItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};
