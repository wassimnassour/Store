import { createSelector } from "reselect";

const selectData = (state) => state.shop;
export const selctCollectionItems = createSelector(
	selectData,
	(shop) => shop.collection
);
export const s = createSelector(
	[selectData],
	(shop) => shop.collection.SearchModel
);
export const selectItemsForPreview = createSelector(
	selctCollectionItems,
	(collection) => Object.keys(collection).map((key) => collection[key])
);
