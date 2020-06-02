import React from "react";
import { PreviewContainer } from "./collectionPreview.style";
import { CollectionItem } from "../index";
const CollectionPreview = ({ title, items, id }) => {
	return (
		<PreviewContainer>
			{items
				.filter((item, ind) => ind < 1)
				.map((item) => (
					<CollectionItem key={id} title={title} item={item} />
				))}
		</PreviewContainer>
	);
};

export default CollectionPreview;
