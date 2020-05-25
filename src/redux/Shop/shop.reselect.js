import { createSelector } from "reselect";

const selectData = (state) => state.shop;
export const selctCollectionItems = createSelector(
	selectData,
	(shop) => shop.collection
);
export const selectItemsForPreview = createSelector(
	selctCollectionItems,
	(collection) => Object.keys(collection).map((key) => collection[key])
);
