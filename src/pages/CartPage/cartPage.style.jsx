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

		padding-bottom: 15px;
		border-bottom: 1px solid grey;
		span {
			width: 25%;
			text-align: center;
		}
		img {
			width: 25%;
			height: 170px;
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
					padding: 0.1rem;
					border: 1px solid;
					margin: 0.3rem;
				}
			}
		}
	}
	.checkout {
		width: 150px;
		margin: auto;
		margin-left: 80%;
		p {
			text-align: center;
		}
		button {
			background: #000000e6;

			border: 1px solid;

			padding: 0.6rem;

			width: 150px;

			font-size: 1rem;

			font-weight: bold;

			color: white;
		}
	}
	@media (max-width: 600px) {
		width: 95%;
		.checkout {
			margin-left: 50%;
		}
		.subcontainer2 {
			img {
				height: 90px;
			}
		}
	}
`;
