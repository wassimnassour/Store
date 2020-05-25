import React from "react";
import { ItemContainer } from "./collectionItem.style";
const CollectionItem = ({ item: { name, id, imageUrl } }) => {
	return (
		<ItemContainer>
			<img src={imageUrl} />
		</ItemContainer>
	);
};

export default CollectionItem;
