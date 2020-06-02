import React from "react";
import { ItemContainer } from "./collectionItem.style";
import { Link } from "react-router-dom";
const CollectionItem = ({ item: { name, id, imageUrl }, title }) => {
	console.log(title);
	return (
		<ItemContainer>
			<img src={imageUrl} key={id} alt={title} />
			<button className="button">
				<Link to={`product/${title}`}>View {title}</Link>
			</button>
		</ItemContainer>
	);
};

export default CollectionItem;
