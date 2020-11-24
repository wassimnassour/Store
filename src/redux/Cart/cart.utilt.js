export const setItemToLocalStorge = (name, item) => {
	window.localStorage.setItem(name.toString(), JSON.stringify(item));
	return item;
};

export const addItemToCart = (cartItems, addCart) => {
	const existItem = cartItems.find((cartItem) => cartItem.id === addCart.id);
	if (existItem) {
		return setItemToLocalStorge(
			"cartItems",
			cartItems.map((cartItem) =>
				cartItem.id === addCart.id
					? {
							...cartItem,
							quantity: cartItem.quantity + 1,
					  }
					: cartItem
			)
		);
	}

	return setItemToLocalStorge("cartItems", [
		...cartItems,
		{ ...addCart, quantity: 1 },
	]);
};

export const RemoveItemFromCart = (cartItems, ItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === ItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return setItemToLocalStorge(
			"cartItems",
			cartItems.filter((item) => item.id !== ItemToRemove.id)
		);
	}

	return setItemToLocalStorge(
		"cartItems",
		cartItems.map((cartItem) =>
			cartItem.id === ItemToRemove.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
		)
	);
};
