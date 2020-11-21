import styled from "styled-components";

export const CollectionContainer = styled.div`
	.collectionPreview {
		display: flex;
		flex-wrap: wrap;
		margin: 1rem auto 11rem auto;
		width: 86%;
		justify-content: center;
		align-items: center;

		.img {
			margin: 0.6rem;
			flex: 1 1 250px;
			display: flex;
			justify-content: center;
			flex-direction: column;
			flex-grow: 0;
			position: relative;
		}

		img {
			width: 250px;
			height: 300px;
		}
		.buttons {
			opacity: 0;
			width: 100%;
			height: 100%;
			position: absolute;

			&:hover {
				display: flex;
				justify-content: center;
				align-items: center;
				background: #2f2f2fde;
				flex-direction: column;
				position: absolute;
				opacity: 1;
				transition: 0.16s ease-in;
			}
			&:hover a {
				width: 67%;
			}
			& a button {
				background: black;
				border: 1px solid white;
				padding: 1rem;
				width: 101%;
				margin: 0 auto;
				color: white;
			}
		}
	}

	.collectionNav {
		display: flex;
		justify-content: center;
		margin-top: 40px;
		h2 {
			text-align: center;
			border: 2px solid black;
			border-radius: 4px;
			display: inline;
			padding: 10px;
		}
	}
`;
