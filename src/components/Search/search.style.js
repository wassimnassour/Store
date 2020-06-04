import styled from "styled-components";

export const SearchFieldContainer = styled.div`
	display: ${(props) => (props.openModel ? "" : "none")};

	width: 100%;

	height: auto;

	z-index: 5;

	position: absolute;

	left: 0;

	top: 0;
`;
export const SearchField = styled.input`
	margin: 15px 0;
	margin: 15px 0;

	width: 35%;

	height: 60px;

	color: black;

	font-size: 1rem;

	font-weight: bold;

	text-align: center;
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
	& > button {
		position: absolute;
		right: 28px;
		top: 15px;

		border: none;
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

export const ItemContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	width: 80%;
	flex-direction: row;d
	text-align: center;
	flex-wrap: wrap;
	margin: auto;

	& .item {
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
	& .item-image-link {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& img {
			height: 120px;
		}
		& .link {
			height: 100%;
			width: 100%;
			opacity: 0;
		}
	}
`;
