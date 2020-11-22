import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
	SearchFieldContainer,
	SearchField,
	SearchInputContainer,
	ItemsContainer,
	SearchInput,
} from "./search.style";
import { AddSearchField } from "../../redux/index";
import { BackDrop } from "../index";
const Search = ({ AddSearchField, clicked, items, openModel }) => {
	const Close = <FontAwesomeIcon icon={faTimes} />;
	return (
		<SearchFieldContainer openModel={openModel}>
			<SearchInputContainer>
				<SearchInput>
					<SearchField
						type="text"
						placeholder="Search for Somthing....."
						onChange={(e) => AddSearchField(e.target.value)}
					/>
					<button onClick={clicked}>{Close}</button>
				</SearchInput>
				<ItemsContainer>
					{items
						? items.map((item) => (
								<div className="item" key={item.id}>
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
				</ItemsContainer>
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
