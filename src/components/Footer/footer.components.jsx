import React from "react";
import { FooterContainer, SocialMediaWrapper, Rights } from "./footer.style";

const Footer = () => {
	return (
		<FooterContainer>
			<SocialMediaWrapper>
				<li>
					<a href="">Facebook</a>
				</li>
				<li>
					<a href="">Instagrame</a>
				</li>
				<li>
					<a href="">Github</a>
				</li>
				<li>
					<a href="">linkedIn</a>
				</li>
			</SocialMediaWrapper>
			<Rights>
				© Copyright {new Date().getFullYear()}. All rights reserved
			</Rights>
		</FooterContainer>
	);
};

export default Footer;
