import React from "react";
import { HeaderContainer, Li, Logo, HeaderButton } from "./header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Header = (props) => {
	const Search = <FontAwesomeIcon icon={faSearch} />;
	return (
		<HeaderContainer>
			<div>
				<ul>
					<Li>NEW ARRIVALS</Li>
					<Li>SHOP</Li>
					<Li>COLLECTIONS</Li>
				</ul>
			</div>
			<div>
				<Logo>MODNIKKY</Logo>
			</div>
			<div>
				<ul>
					<HeaderButton>
						{" "}
						<span>{Search}</span>SEARCH
					</HeaderButton>
					<Li>SIGNIN</Li>
					<HeaderButton> BAG(2)</HeaderButton>
				</ul>
			</div>
		</HeaderContainer>
	);
};

export default Header;
