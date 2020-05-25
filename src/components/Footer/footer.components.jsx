import React from "react";
import { FooterContainer  , FooterInfo ,FooterWrapper} from "./footer.style";
import { News } from "../index";
const Footer = (props) => {
	return (
		<FooterContainer>
			<News />
			<FooterWrapper>
			<FooterInfo>
				<h1>CUSTOMER SERVICE</h1>
				<ul>
					<li>CONTACT</li>
					<li>TRACK ORDER </li>
					<li> DELIVERY</li>
					<li></li>
				</ul>
			</FooterInfo>
			<FooterInfo>
				<h1>INFO</h1>
				<ul>
					<li>GIFT VOUCHERS</li>
					<li>SIZE QUIDE </li>
					<li> CAREERS AT MODNIKKY</li>
					<li>ABOUT US </li>
				</ul>
			</FooterInfo>
			<FooterInfo>
				<h1>FOLLOW US </h1>
				<ul>
					<li>FACEBOOK</li>
					<li>INSTAGRMAE </li>
					<li> TWITTER</li>
					
				</ul>
			</FooterInfo>
			<FooterInfo>
				<h1>Contact Us </h1>
				<ul>
					<li>nassourwassim@gmail.com</li>
					<li>+212641327128</li>
					<li> Casablanca</li>
					
				</ul>
			</FooterInfo>
			</FooterWrapper>
		</FooterContainer>
	);
};

export default Footer;
