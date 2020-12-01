import styled from "styled-components";

export const SideBarContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 60;
	height: 100%;
	ul {
		height: 75%;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-left: 0;

		li {
			padding: 10px;
			font-size: 15px;
			a {
				color: white;
				font-size: 20px;
				transition: 0.3s all;
			}
		}
		button {
			margin: 20px;
			outline: none;
		}
	}
	.sideBar__Wrapper {
		background: black;
		position: fixed;
		right: 0;
		height: 100vh;
		top: 0;
		bottom: 0;
		width: 62%;
	}
	.buttons {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		margin: 0 auto;
		height: 84px;
		margin-top: 28px;
	}
	// laptop
	@media (min-width: 900px) {
		display: none;
	}
	// tablet
	@media (max-width: 900px) {
		.sideBar__Wrapper {
			width: 66%;
		}
	}
	// Mobile
	@media (max-width: 600px) {
		.sideBar__Wrapper {
			width: 70%;
		}
	}
`;

export const Button = styled.button`
color: black;
background: none;
border: none;
font-size: 30px;
outline:none;
		${({ open }) =>
			open && {
				transition: " .3s all",
				transform: "rotateZ(360deg)",
				color: "white",
				padding: "29px",
			}};*/
	// Tablet
/*	@media (max-width: 800px) {
		margin-right: 1rem;
		${({ open }) =>
			open && {
				right: "0%",
				top: "2%",
				position: "fixed",
			}};
	}*/

`;
