import styled from "styled-components";

export const ItemContainer = styled.div`
	& > img {
		width: 287px;
		height: 416px;
	}

	@media (max-width: 600px) {
		& > img {
			flex: 1;
			background: red;
		}
	}

	flex-wrap: wrap;
`;
