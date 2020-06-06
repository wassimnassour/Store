import styled from "styled-components";

export const CheckoutContainer = styled.div`
	width: 80%;

	height: auto;

	min-height: 564px;

	margin: 4rem auto;
	.subcontainer1 {
		display: flex;

		width: 100%;
		p {
			text-align: center;
			width: 25%;
		}
	}
	.subcontainer2 {
		display: flex;
	
		align-items: center;

		margin: 1rem auto;

		flex-direction: column;
	
		span {
			width: 25%;
			text-align: center;
		}
		img {
			width: 25%;
			height: 150px;
		}
		.itemWrapper {
			width: 100%;
			margin: 0.5rem;
			display: flex;

			align-items: center;
			.item {
				width: 100%;

				display: flex;

				align-items: center;
				.Arrow {
					padding: .1rem;
border: 1px solid;
margin: .3rem;

				}
			}
		}
	}
	.checkout {
	
width: 150px;

		margin: auto;

		margin-left: auto;

		margin-left: 80%;
		p {
			text-align:center;
		}
	 button{

	 	background:
#000000e6;

border: 1px solid;

padding: .6rem;

width: 150px;

font-size: 1rem;

font-weight: bold;

color:

    white;

}
	 }
	}
`;
