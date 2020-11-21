import React from "react";
import { SideBarContainer, Button } from "./sideBar.style";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const SideBar = ({ open, togglebutton }) => {
	return (
		<SideBarContainer onClick={togglebutton} open={open}>
			<Button onClick={togglebutton} open={open}>
				{!open ? (
					<AiOutlineMenu className="svg" />
				) : (
					<AiOutlineClose className="svg" />
				)}
			</Button>{" "}
			{open && (
				<div className="sideBar__Wrapper">
					<ul>
						<li>
							<Link to="/collection/hats">hats</Link>
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

export default SideBar;
