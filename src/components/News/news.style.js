import styled from "styled-components";

export const NewsContainer = styled.div`
	text-align: center;
	margin: 6rem 0;
	background: #000000ad;
	padding: 4rem 1rem;
	color: white;
	@media (max-width: 600px) {
		padding: 3rem 0;
	}
`;

export const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	justify-content: space-between;
	width: 500px;
	margin: 10px auto;
	padding-bottom: 10px;
	height: 45px;
	input {
		border: none;
		font-size: 15px;
		padding: 0 0.8rem;
		letter-spacing: 0.04em;
		width: 80%;
		color: black;
		height: 100%;
	}

	button {
		background-color: none;
		font-size: 20px;
		background: #28bfa3;
		width: 20%;
		border: none;
		color: white;
		letter-spacing: 0.04em;
		height: 100%;
	}

	@media (max-width: 600px) {
		width: 90%;
		margin: 0 auto;
		input {
			padding: 0 0.2rem;
			width: 75%;
		}
		button {
			width: 35%;
		}
	}
`;
