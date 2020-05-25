import styled from "styled-components";

export const SectionZeroContainer = styled.section`
	width: 100vw;
	height: 100vh;
	& > img {
		background-size: cover;
		background-repeat: no-repeat;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 109%;
		z-index: -5;
	}
`;

export const ShowCaseInfo = styled.div`
	height: 288px;

	color: white;

	position: absolute;

	top: 67%;

	left: 150px;

	width: 554px;
	& > h3 {
		font-weight: bold;
		font-size: 2.2rem;
	}
`;
