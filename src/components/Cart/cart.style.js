import styled from "styled-components";

export const BagContainer = styled.div`
	display: ${(props) => (props.hidden ? "block" : "none")};
	margin: auto;
	background: white;
	height: 311px;
	width: 245px;
	position: fixed;
	top: 5%;
	right: 1%;
	border: 2px solid;
	z-index: 10;
	.button {
		button {
			width: 99%;

			background: black;

			height: 34px;

			color: white;

			border: 1px solid white;
		}
	}
`;
export const ItemContainer = styled.div`
	width: 90%;
	height: 95%;
	margin: auto;
	margin-top: 0.4rem;
`;
export const SubContainer = styled.div`
	width: 100%;
	height: 82%;
	overflow-y: scroll;
	margin-bottom: 0.9rem;
	.items {
		width: 100%;
		display: flex;
		height: 80px;
		margin-bottom: 15px;

		img {
			width: 30%;
		}
	}
`;
export const ItemDetailsContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10px 20px;
`;
