import React from "react";
import { HeaderContainer, A, Logo, HeaderButton } from "./header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faUserCircle,
	faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { Search } from "../index";
import { withRouter } from "react-router-dom";
import { AddSearchField, CloseModal } from "../../redux/index";

import { connect } from "react-redux";

const Header = ({ location, AddSearchField, CloseModal, items, openModel }) => {
	const search = <FontAwesomeIcon icon={faSearch} />;
	const Account = <FontAwesomeIcon icon={faUserCircle} />;
	const Bag = <FontAwesomeIcon icon={faShoppingBag} />;
	const cheeck = location.pathname === "/" ? true : false;
	console.log(cheeck);
	return (
		<>
			<HeaderContainer
				color={cheeck ? "white" : "black"}
				boxShadow={cheeck}
			>
				<Logo>
					{" "}
					<A to="/">MODNIKKY</A>
				</Logo>
				<ul>
					<li>
						<A>NEW ARRIVALS</A>
					</li>
					<li>
						<A>SHOP</A>
					</li>

					<li>
						<A>COLLECTIONS</A>
					</li>
				</ul>

				<div></div>
				<Search clicked={CloseModal} open={openModel} />
				<ul>
					<li>
						<HeaderButton onClick={CloseModal}>
							<span>{search}</span>
						</HeaderButton>
					</li>
					<li>
						<A>{Account}</A>
					</li>

					<li>
						<HeaderButton>{Bag}</HeaderButton>
					</li>
				</ul>
			</HeaderContainer>
		</>
	);
};

const mapDispatchToProps = {
	AddSearchField: (text) => AddSearchField(text),
	CloseModal,
};
const mapStateToProps = (state) => ({
	items: state.shop.SearchResult,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
