import SHOP_DATA from "./shop-data";
const INTAIL_STATE = {
	collection: SHOP_DATA,
};

export const shopReducer = (state = INTAIL_STATE, action) => {
	switch (action.type) {
		default: {
			return state;
		}
	}
};
