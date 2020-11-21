import styled from "styled-components";

export const SectionZeroContainer = styled.section`
	width: 100%;
	height: 85vh;
	@media (max-width: 700px) {
		height: 75vh;
	}
`;

export const ShowCaseInfo = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: black;
	@media (max-width: 600px) {
		height: 80%;
	}
	h1 {
		width: 60%;
		text-align: center;
		font-size: 2.7rem;
		@media (max-width: 600px) {
			width: 80%;
			font-size: 2rem;
		}
	}
	a {
		color: white;
		background: black;
		padding: 10px;
		border-radius: 6px;
		text-decoration: none;
		margin-top: 1rem;
		&:hover {
			padding: 12px;
			transition: 0.3s all cubic-bezier(0.25, 0.1, 0.24, 1.09);
		}
	}
`;
