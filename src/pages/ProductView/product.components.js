import React from "react";
import { ItemContainer, ItemImageContainer, ItemInfo } from "./product.style";
import { selectItemsForPreview } from "../../redux/index";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { AddToCart } from "../../redux/index";
const Product = ({ collection, location, match, AddToCart, quantity }) => {
	const items = collection.map((item) => item.items).flat();
	const item = items.find((item) => item.id == match.params.productName);

	return (
		<ItemContainer>
			{item ? (
				<>
					<ItemImageContainer>
						<img src={item.imageUrl} alt={item.name} />
					</ItemImageContainer>
					<ItemInfo>
						<h1>{item.name}</h1>
						<h4>Price: {item.price}$</h4>
						<button onClick={() => AddToCart(item)}>
							{" "}
							add TO Cart
						</button>
					</ItemInfo>
				</>
			) : (
				"	this  Product is not in the list"
			)}
		</ItemContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	collection: selectItemsForPreview,
});
const mapDispatchToProps = {
	AddToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
