import styled from "styled-components";

export const CollectionContainer = styled.div`
	& .collectionPreview {
		display: flex;

		flex-wrap: wrap;

		margin: 1rem auto 11rem auto;
		width: 80%;
		justify-content: center;
		align-items: center;

		& .img {
			margin: 0.6rem;
			flex: 1 1 250px;
			display: flex;
			justify-content: center;
			flex-direction: column;
			flex-grow: 0;
			position: relative;

 & img {
 	width: 250px;
height: 300px;
 }
			& .buttons {
				opacity: 0;

width: 100%;
height: 100%;
position: absolute;
			}
			&:hover .buttons {
				display: flex;
				justify-content: center;
				
				align-items: center;
				background: #2f2f2fde;
				flex-direction: column;
				position: absolute;
				opacity: 1;
				transition: .16s ease-in;
			}
			&:hover .buttons a {
				width: 67%;

			}
			.buttons a button {
				background: black;
				border: 1px solid white;
				padding: 1rem;
				width: 101%;
				margin: 0 auto;
				color:white;

			}


		&
		}
	}

	& .collectionNav {
		/*	width: 20%;
		box-shadow: 0px 0px 1px 0.3px gray;

		height: 685px;*/
		& ul {
			padding-left: 0;
			display: flex;

			justify-content: center;
			li {
				margin: 0.96rem;
				border-bottom: 1px solid;
				text-align: center;
				list-style: none;

				a {
					text-decoration: none;
					color: black;
				}
			}
		}

		& h4 {
			text-align: center;
		}
	}
`;
