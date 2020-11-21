import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { SideBarContainer, Button } from "./sideBar.style";

const SideBar = ({ open, togglebutton, history }) => {
	console.log(history, "history");
	return (
		<SideBarContainer onClick={togglebutton} open={open}>
			{!open && (
				<Button>
					<AiOutlineMenu className="svg" />
				</Button>
			)}

			{open && (
				<div className="sideBar__Wrapper">
					<div className="buttons">
						<Button
							open={open}
							onClick={() => history.push("/cart")}
						>
							<FontAwesomeIcon icon={faShoppingBag} />
						</Button>
						<Button onClick={togglebutton} open={open}>
							<AiOutlineClose className="svg" />
						</Button>
					</div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/collection/hats">Hats</Link>
						</li>
						<li>
							<Link to="/collection/sneakers">Sneakers</Link>
						</li>
						<li>
							<Link to="/collection/jackets">Jackets</Link>
						</li>
						<li>
							<Link to="/collection/womens">Womens</Link>
						</li>
						<li>
							<Link to="/collection/mens">Mens</Link>
						</li>
					</ul>
				</div>
			)}
		</SideBarContainer>
	);
};

export default withRouter(SideBar);
