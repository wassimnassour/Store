import { CartActionTypes } from "../redux/Cart/cart.types";
import { cartReducer } from "../redux/Cart/cart.reducer";

describe("Cart Reducer", () => {
	const intialState = {
		added: false,
		cartItems: [],
		hidden: false,
	};
	it("should return the intial state", () => {
		expect(cartReducer(undefined, {})).toEqual(intialState);
	});

	it("cheeck close model action ", () => {
		expect(
			cartReducer(intialState, {
				type: CartActionTypes.CLOSE_AND_OPEN_BAG,
			})
		).toEqual({ ...intialState, hidden: true });
	});
	it("cheeck add Item To Cart ", () => {
		expect(
			cartReducer(intialState, {
				type: CartActionTypes.ADD_TO_CART,
				payload: {
					id: 25,
					name: "Floral Dress",
					imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
					price: 80,
					quantity: 1,
				},
			})
		).toEqual({
			...intialState,
			cartItems: [
				{
					id: 25,
					name: "Floral Dress",
					imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
					price: 80,
					quantity: 1,
				},
			],
			added: true,
		});
	});

	it(" Remove Item To Cart ", () => {
		expect(
			cartReducer(
				{
					...intialState,
					cartItems: [
						{
							id: 25,
							name: "Floral Dress",
							imageUrl:
								"https://i.ibb.co/KV18Ysr/floral-skirt.png",
							price: 80,
							quantity: 1,
						},
					],
				},
				{
					type: CartActionTypes.REMOVE_ITEM_FROM_CART,
					payload: {
						id: 25,
						name: "Floral Dress",
						imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
						price: 80,
						quantity: 1,
					},
				}
			)
		).toEqual({
			...intialState,
			cartItems: [],
		});
	});
	it("cheeck remove alert ", () => {
		expect(
			cartReducer(intialState, {
				type: CartActionTypes.REMOVE_ALERT,
			})
		).toEqual({
			...intialState,
			added: false,
		});
	});

	it("cheeck remove alert ", () => {
		expect(
			cartReducer(intialState, {
				type: CartActionTypes.REMOVE_ALERT,
			})
		).toEqual({
			...intialState,
			added: false,
		});
	});
});
