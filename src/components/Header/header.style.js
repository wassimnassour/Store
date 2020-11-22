import styled from "styled-components";
import { Link } from "react-router-dom";

export const A = styled(Link)`
	font-size: 0.9rem;
	line-height: 20px;
	margin-right: 2rem;
	list-style: none;
	text-decoration: none;
	font-family: "Noto Serif", serif;
	color: dark;
	cursor: pointer;
`;
export const Logo = styled.div`
	font-size: 35px;
	line-height: 70px;
	font-family: "Noto Serif", serif;
	margin: 0 1rem;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	${A} {
		font-size: 25px;
		color: black;
		font-weight: bold;
	}
	// Mobile
	@media (max-width: 600px) {
		margin: 0;
	}
`;

export const HeaderButton = styled.button`
	cursor: pointer;
	background: transparent;
	border: none;
	font-size: 0.9rem;
	color: white;
	font-size: 0.9rem;
	line-height: 20px;
	margin-right: 2rem;
	list-style: none;
	-webkit-text-decoration: none;
	text-decoration: none;
	font-family: "Noto Serif", serif;
	font-weight: 400;
	color: black;
	position: relative;
	span {
		margin-right: 0.3rem;
	}
	.cart {
		position: absolute;
		top: 0px;
		left: 18px;
		border-radius: 100%;
		width: 22px;
		height: 22px;
		text-align: center;
		color: white;
	}
`;
export const HeaderContainer = styled.header`
	box-shadow: 0 0 1px 2px #80808033;
	height: 10vh;
	z-index: 60;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: white;
	width: 100%;
	.header__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		height: 100%;
	}

	ul {
		@media (max-width: 900px) {
			display: none;
		}
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: baseline;

		li {
			list-style: none;
			a {
				color: black;
			}
		}

		${HeaderButton} {
			color: black;
			outline: none;
		}

		${Logo} {
			color: black;
			${A} {
				color: black;
			}
		}
	}
`;
