import React, { useState } from "react";
import { HeaderContainer, A, Logo, HeaderButton } from "./header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faUserCircle,
	faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	AddSearchField,
	CloseModal,
	OpenAndCloseModel,
	SelectModal,
	Selecquantitiy,
} from "../../redux/index";
import { Search, Cart, SideBar } from "../index";

const Header = ({
	location,
	AddSearchField,
	CloseModal,
	openModel,
	OpenAndCloseModel,
	BagModal,
	quantity,
}) => {
	const search = <FontAwesomeIcon icon={faSearch} />;
	const Account = <FontAwesomeIcon icon={faUserCircle} />;
	const Bag = <FontAwesomeIcon icon={faShoppingBag} />;
	const [open, setOpen] = useState(false);
	const togglebutton = () => {
		setOpen(!open);
	};
	return (
		<>
			<HeaderContainer>
				<div className="header__wrapper">
					<Logo>
						<A to="/">MODNIKKY</A>
					</Logo>
					<SideBar togglebutton={togglebutton} open={open} />
					<ul>
						<li>
							<A to="/collection/hats">hats</A>
						</li>
						<li>
							<A to="/collection/sneakers">Sneakers</A>
						</li>

						<li>
							<A to="/collection/jackets">Jackets</A>
						</li>
						<li>
							<A to="/collection/womens">Womens</A>
						</li>
						<li>
							<A to="/collection/mens">Mens</A>
						</li>
					</ul>
					<Search clicked={CloseModal} open={openModel} />
					<ul>
						<li>
							<HeaderButton onClick={CloseModal}>
								<span>{search}</span>
							</HeaderButton>
						</li>
						<li>
							<A to="/signin">{Account}</A>
						</li>

						<li>
							<Cart />
							<HeaderButton onClick={OpenAndCloseModel}>
								{Bag}
								<span className="cart">{quantity}</span>
							</HeaderButton>
						</li>
					</ul>
				</div>
			</HeaderContainer>
		</>
	);
};

const mapDispatchToProps = {
	AddSearchField: (text) => AddSearchField(text),
	CloseModal,
	OpenAndCloseModel,
};
const mapStateToProps = createStructuredSelector({
	BagModal: SelectModal,
	quantity: Selecquantitiy,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
