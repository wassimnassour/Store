import styled from "styled-components";

export const ItemContainer = styled.div`
	height: 100%;
	width: 100%;
	& button {
		display: none;
	}

	& img {
		height: 100%;
		width: 100%;
	}
	&:hover button {
		display: block;
		position: absolute;
		background: #242424e6;
		width: 100%;
		height: 100%;
		left: 0;
		z-index: 100;
		top: 0;
		a {
			color: white;
			text-decoration: none;
			font-weight: bold;
			font-size: larger;
			border: 1px solid #ececec;
			padding: 0.4rem;
		}
	}

	@media (max-width: 600px) {
		& > img {
			flex: 1;
			background: red;
		}
	}
`;
