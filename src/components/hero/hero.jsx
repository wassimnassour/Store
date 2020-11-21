import React from "react";
import { SectionZeroContainer, ShowCaseInfo } from "./hero.style";
import { Link } from "react-router-dom";
const Hero = (props) => {
	return (
		<SectionZeroContainer>
			<ShowCaseInfo>
				<h1>Make sure To Discover our New Products</h1>
				<Link to="collection/hats">SHOP NEW ARRIVALS</Link>
			</ShowCaseInfo>
		</SectionZeroContainer>
	);
};

export default Hero;
//
