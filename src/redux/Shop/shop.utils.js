export const SearchBox = (CollectionItems, SearchText) => {
	const { hats, sneakers, womens, mens, jackets } = CollectionItems;
	const items = [
		...hats.items,
		...sneakers.items,
		...womens.items,
		...mens.items,
		...jackets.items,
	];

	if (SearchText.length > 1) {
		return items.filter((item) =>
			item.name.toLowerCase().includes(SearchText.toLowerCase())
		);
	}
};
