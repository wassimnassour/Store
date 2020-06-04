import { ShopActionTypes } from "./shop.type";

export const AddSearchField = (item) => ({
	type: ShopActionTypes.OPEN_SEARCH_FIELD_TEXT,
	payload: item,
});
export const CloseModal = () => ({
	type: ShopActionTypes.CLOSE_AND_OPEN_SEARCH_FIELD,
});
