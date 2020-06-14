import SHOP_DATA from "./shop-data";
import { ShopActionTypes } from "./shop.type";
import { SearchBox } from "./shop.utils";

const INTAIL_STATE = {
	collection: SHOP_DATA,
	SearchModel: false,
	SearchField: "",
	SearchResult: [],
};

export const shopReducer = (state = INTAIL_STATE, action) => {
	switch (action.type) {
		case ShopActionTypes.OPEN_SEARCH_FIELD_TEXT:
			return {
				...state,
				SearchField: action.payload,
				SearchResult: SearchBox(state.collection, state.SearchField),
			};
		case ShopActionTypes.CLOSE_AND_OPEN_SEARCH_FIELD:
			return { ...state, SearchModel: !state.SearchModel };
		default: {
			return state;
		}
	}
};
