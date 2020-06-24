import React from "react";
import {
  HeaderContainer,
  A,
  Logo,
  HeaderButton,
  UserDetails,
} from "./header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserCircle,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { Search, Cart } from "../index";
import { withRouter } from "react-router-dom";
import {
  AddSearchField,
  CloseModal,
  OpenAndCloseModel,
  SelectModal,
  Selecquantitiy,
} from "../../redux/index";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

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
  const cheeck = location.pathname === "/" ? true : false;
  return (
    <>
      <HeaderContainer color={cheeck ? "white" : "black"} boxShadow={cheeck}>
        <Logo>
          {" "}
          <A to="/">MODNIKKY</A>
        </Logo>
        <ul>
          <li>
            <A to="/collection/hats">NEW ARRIVALS</A>
          </li>
          <li>
            <A to="/collection/hats">SHOP</A>
          </li>

          <li>
            <A to="/collection/hats">COLLECTIONS</A>
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
            <Cart />
            <HeaderButton onClick={OpenAndCloseModel}>
              {Bag}

              <span className="cart">{quantity}</span>
            </HeaderButton>
          </li>
          <li>
            {false ? (
              <UserDetails>
                User Profile <span className="icon-arrow-right"> &#62;</span>
              </UserDetails>
            ) : (
              <A to="/signin">{Account}</A>
            )}
          </li>
        </ul>
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
