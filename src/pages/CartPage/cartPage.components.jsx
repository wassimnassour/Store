import React from "react";
import { CheckoutContainer } from "./cartPage.style";
import { createStructuredSelector } from "reselect";

import {
	AddToCart,
	SelectCartItems,
	SelecTotal,
	RemoveItem,
} from "../../redux/index";
import { connect } from "react-redux";
const CartPage = ({ cartItems, Total, RemoveItem, AddToCart }) => {
	return (
		<CheckoutContainer>
			<div className=" subcontainer1">
				<p>image</p>
				<p>name</p>
				<p>price</p>
				<p>quantity</p>
			</div>
			<div className="subcontainer2">
				{cartItems ? (
					cartItems.map((item) => (
						<div className="itemWrapper" key={item.id}>
							<div className="item">
								<img src={item.imageUrl} alt={item.name} />
								<span>{item.name}</span>
								<span>{item.price}$</span>
								<span>
									<span
										onClick={() => RemoveItem(item)}
										className="Arrow"
									>
										{" "}
										&#8592;
									</span>
									<span>{item.quantity}</span>
									<span
										onClick={() => AddToCart(item)}
										className="Arrow"
									>
										&#8594;
									</span>
								</span>
							</div>
						</div>
					))
				) : (
					<h1>no item found here</h1>
				)}
			</div>
			<div className="checkout">
				<p>Total:{Total}$</p>
				<button>Checkout</button>
			</div>
		</CheckoutContainer>
	);
};
const mapDispatchToProps = {
	RemoveItem,
	AddToCart,
};
const mapstateToProps = createStructuredSelector({
	cartItems: SelectCartItems,
	Total: SelecTotal,
});
export default connect(mapstateToProps, mapDispatchToProps)(CartPage);
