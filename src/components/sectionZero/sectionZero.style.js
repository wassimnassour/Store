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
		height: 100%;
		z-index: -5;
		&:hover {
			background: #7974743b;
			opacity: 1;
			width: 100%;
			height: 100%;
			position: absolute;
		}
	}
`;

export const ShowCaseInfo = styled.div`
	height: 288px;

	color: black;

	position: absolute;

	top: 40%;

	left: 150px;

	width: 554px;
	& > h3 {
		font-weight: bold;
		font-size: 2.2rem;
	}
`;
