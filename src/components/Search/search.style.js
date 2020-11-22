import styled from "styled-components";

export const SearchFieldContainer = styled.div`
	display: ${(props) => (props.openModel ? "" : "none")};
	width: 100%;
	height: auto;
	z-index: 5;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 100;
`;
export const SearchField = styled.input`
	margin: 15px 0;
	width: 50%;
	height: 60px;
	color: black;
	font-size: 1rem;
	font-weight: bold;
	text-align: center;
	justify-content: center;
	margin-right: 20px;
`;

export const SearchInputContainer = styled.div`
	background: white;
	z-index: 100;
	display: flex;
	justify-content: center;
	width: 100%;
	background: white;
	z-index: 100;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	position: fixed;
`;
export const SearchInput = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 70%;
	margin: 0 auto;
	button {
		border: none;
		background: none;
		font-size: 30px;
		height: 100%;
		padding-left: 60px;
	}
	@media (max-width: 600px) {
		position: absolute;
		top: 0;
	}
`;

export const BackDropContainer = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: -10;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const ItemsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	width: 80%;
	flex-direction: row;
	text-align: center;
	flex-wrap: wrap;
	margin: auto;

	.item {
		margin: 25px 0;
		margin: auto;
		height: 225px;
		width: 200px;
		position: relative;
		box-shadow: 0px 0px 2px black;
		margin: 11px;
		text-align: center;
		&:hover .item-image-link .link {
			position: absolute;
			opacity: 1;
			height: 100%;
			width: 100%;
			top: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #242424e6;
			& a {
				text-decoration: none;
				color: white;
				border: 1px solid #ececec;
				padding: 0.4rem;
			}
		}
	}
	.item-image-link {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		img {
			height: 120px;
		}
		.link {
			height: 100%;
			width: 100%;
			opacity: 0;
		}
	}
	@media (max-width: 600px) {
		position: absolute;
		top: 20%;
	}
`;
