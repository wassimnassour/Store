import styled from "styled-components";
export const FooterContainer = styled.footer`
	max-width: 1500px;
	display: flex;
	flex-direction: column;
	height: auto;
	margin: auto;
	font-weight: 400;

	bottom: 0;
	width: 100%;
`;

export const FooterWrapper = styled.div`
	display: flex;
	justify-content: space-around;

	& > h1 {
		font-size: 1rem;
		cursor: pointer;
	}
	& > ul {
		font-weight: 400;
		cursor: pointer;
		padding-left: 0;
		list-style: none;
	}
`;
export const FooterInfo = styled.div`
	& > h1 {
		font-size: 1rem;
	}
	& > ul {
		padding-left: 0;
		list-style: none;
	}
	& > ul > li {
		font-size: 12px;
		line-height: 12px;
		margin: 1.5rem 0;

		color: #1b1c1bc4;
	}
`;
