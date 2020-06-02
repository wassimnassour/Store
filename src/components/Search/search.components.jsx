import React from "react";
import {
	SearchFieldContainer,
	SearchField,
	SearchInputContainer,
	ItemContainer,
} from "./search.style";
import { AddSearchField } from "../../redux/index";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { BackDrop } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Search = ({ AddSearchField, clicked, items, openModel }) => {
	const Close = <FontAwesomeIcon icon={faTimes} />;
	return (
		<SearchFieldContainer openModel={openModel}>
			<SearchInputContainer>
				<SearchField
					type="text"
					placeholder="Search for Somthing....."
					onChange={(e) => AddSearchField(e.target.value)}
				/>

				<button onClick={clicked}>{Close}</button>
				<ItemContainer>
					{items
						? items.map((item) => (
								<div className="item">
									<h3>{item.name}</h3>
									<div className="item-image-link">
										<img
											src={item.imageUrl}
											alt={item.name}
										/>
										<div className="link">
											<Link
												to={`/product/${item.id}`}
												onClick={clicked}
											>
												View Product
											</Link>
										</div>
									</div>
								</div>
						  ))
						: null}
				</ItemContainer>
			</SearchInputContainer>
			<BackDrop clicked={clicked} />
		</SearchFieldContainer>
	);
};
const mapDispatchToProps = {
	AddSearchField: (text) => AddSearchField(text),
};
const mapStateToProps = (state) => ({
	items: state.shop.SearchResult,
	openModel: state.shop.SearchModel,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
