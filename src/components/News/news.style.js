import styled from "styled-components";

export const NewsContainer = styled.div`
	text-align: center;
	margin: 6rem 0;
	background: #000000ad;
	padding: 4rem;
	color: white;
`;

export const Input = styled.div`
	display: flex;
	justify-content: center;

	& > .s {
		display: flex;
		justify-content: space-between;
		width: 500px;
		margin: 10px;
		padding-bottom: 10px;
		& > input {
			border: none;
			font-size: 15px;
			line-height: 24px;
			padding: 0.8rem;
			letter-spacing: 0.04em;
			width: 80%;
			color: black;
		}

		& > button {
			background-color: none;
			font-size: 20px;
			line-height: 24px;
			background: #28bfa3;
			width: 20%;
			border: none;
			color: white;
			letter-spacing: 0.04em;
		}
	}
`;
