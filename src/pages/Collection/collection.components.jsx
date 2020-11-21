import React from "react";
import { CollectionContainer } from "./collection.style.js";
import { createStructuredSelector } from "reselect";
import { selectItemsForPreview } from "../../redux/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CollectionPage = ({ collections, match }) => {
	const collection = collections.find(
		(item) =>
			item.title.toLowerCase() ===
			match.params.CollectionName.toLowerCase()
	);

	return (
		<CollectionContainer>
			{collection ? (
				<div className="collectionNav">
					<h2>{match.params.CollectionName} Collection </h2>
				</div>
			) : null}
			{collection ? (
				<div className="collectionPreview">
					{collection.items.map((item) => (
						<div className="img" key={item.id}>
							<Link to={`/product/${item.id}`}>
								<img src={item.imageUrl} alt={item.name} />
								<div className="buttons">
									<Link to={`/product/${item.id}`}>
										<button>Shop Now </button>
									</Link>
								</div>
							</Link>
						</div>
					))}
				</div>
			) : (
				"somthing went wrong"
			)}
		</CollectionContainer>
	);
};
const mapStateToProps = createStructuredSelector({
	collections: selectItemsForPreview,
});

export default connect(mapStateToProps)(CollectionPage);
