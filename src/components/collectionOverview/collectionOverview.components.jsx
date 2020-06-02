import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CollectionPreview } from "../index";
import { selectItemsForPreview } from "../../redux/index";
import { OverViewContainer, Preview, Title } from "./collectionOverview.style";
const CollectionOverview = ({ collection }) => {
	console.log(collection);
	return (
		<OverViewContainer>
			<Title>Collection</Title>
			<Preview>
				{collection.map(({ id, ...otherprops }) => (
					<CollectionPreview key={id} {...otherprops} />
				))}
			</Preview>
		</OverViewContainer>
	);
};
const mapStateToProps = createStructuredSelector({
	collection: selectItemsForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
