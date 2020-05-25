import styled from "styled-components";

export const NewsContainer = styled.div`
	text-align: center;
	margin: 5rem;g
`;

export const Input = styled.div`
	display: flex;
	justify-content: center;

	& > .s {
		display: flex;
		justify-content: space-between;
		width: 400px;
		margin: 10px;
		padding-bottom: 10px;
		& > input {
			border: none;
			font-size: 15px;
			line-height: 24px;

			letter-spacing: 0.04em;
			width: 80%;
			color: #8c8c8c;
		}

		& > button {
			background-color: none;
			font-size: 20px;
			line-height: 24px;
			background: transparent;

			border: none;

			letter-spacing: 0.04em;
		}
		box-shadow: 0px 3px 2px -2.2px gray;
	}
`;
