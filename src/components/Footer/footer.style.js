import styled from "styled-components";

export const FooterContainer = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: black;
	color: #eee;
	padding: 25px;
	//media queries form Tablete
	@media (max-width: 800px) {
		flex-wrap: wrap;
		justify-content: center;
	}
`;
export const Rights = styled.span`
	font-size: 14px;
	text-align: left;
	align-content: flex-end;
	padding: 0 10px;
	//media queries form Tablete ANd Mobile
	@media (max-width: 800px) {
		flex-basis: 100%;
		margin: 10px 0 0;
		padding: 1px 0 0;
		text-align: center;
	}
`;

export const SocialMediaWrapper = styled.div`
	display: flex;
	//media queries form Tablete ANd Mobile
	li {
		font-size: 14px;
		list-style: none;
		margin: 0 10px;
		font-weight: 300;
		a {
			text-decoration: none;
			color: white;
		}
	}
	@media (max-width: 800px) {
		justify-content: center;
		margin: 10px;
	}
`;
