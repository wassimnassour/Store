import React from "react";
import { OverViewContainer } from "./collectionPreview.style";
import { CollectionItem } from "../index";
const CollectionPreview = ({ items, id }) => {
	return (
		<OverViewContainer>
			{items
				.filter((item, ind) => ind < 1)
				.map((item) => (
					<CollectionItem key={id} item={item} />
				))}
		</OverViewContainer>
	);
};

export default CollectionPreview;
