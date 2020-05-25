import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CollectionPreview } from "../index";
import { selectItemsForPreview } from "../../redux/index";
import { PreviewContainer, Preview, Title } from "./collectionOverview.style";
const CollectionOverview = ({ collection }) => {
	return (
		<PreviewContainer>
			<Title>NEW ARRIVALS</Title>
			<Preview>
				{collection.map(({ id, ...otherprops }) => (
					<CollectionPreview key={id} {...otherprops} />
				))}
			</Preview>
		</PreviewContainer>
	);
};
const mapStateToProps = createStructuredSelector({
	collection: selectItemsForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
