import React from "react";
import { BagContainer } from "./cart.style";
import { createStructuredSelector } from "reselect";
import {
	ItemDetailsContainer,
	ItemContainer,
	SubContainer,
} from "./cart.style";
import {
	OpenAndCloseModel,
	SelectModal,
	SelectCartItems,
} from "../../redux/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Cart = ({ AddToCart, hidden, cartItems, OpenAndCloseModel }) => {
	return (
		<BagContainer hidden={hidden}>
			<ItemContainer>
				<SubContainer>
					{cartItems.map((item) => (
						<div className="items" key={item.id}>
							<img src={item.imageUrl} alt={item.name} />
							<ItemDetailsContainer>
								<span>{item.name}</span>
								<span>
									{item.price}$ x {item.quantity}
								</span>
							</ItemDetailsContainer>
						</div>
					))}
				</SubContainer>

				<div className="button">
					<Link to="/cart">
						<button onClick={OpenAndCloseModel}>Checkout</button>
					</Link>
				</div>
			</ItemContainer>
		</BagContainer>
	);
};
const mapDispatchToProps = {
	OpenAndCloseModel,
};
const mapstateToProps = createStructuredSelector({
	hidden: SelectModal,
	cartItems: SelectCartItems,
});
export default connect(mapstateToProps, mapDispatchToProps)(Cart);
