import styled from "styled-components";

export const ProductContainer = styled.div``;
export const ItemContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 65%;
	height: 620px;
	margin: 76px auto;
	@media (max-width: 900px) {
		flex-wrap: wrap;
	}
`;
export const ItemImageContainer = styled.div`
	width: 45%;
	height: 75%;
	img {
		width: 100%;

		height: 100%;
	}
	@media (max-width: 900px) {
		width: 55%;
	}
	@media (max-width: 700px) {
		width: 100%;
	}
`;
export const ItemInfo = styled.div`
	text-align: center;
	font-size: 14px;
	width: 30%;
	margin: 10px;
	button {
		color: white;
		background: black;
		padding: rem;
		height: 2.8rem;
		width: 15rem;
		border: 2px solid white;
		border-radius: 5px;
		&:hover {
			background: white;
			color: black;
			border: 2px solid black;
		}
	}
	@media (max-width: 1000px) {
		width: 40%;
	}
	@media (max-width: 700px) {
		width: 95%;
	}
`;
