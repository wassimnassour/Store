import styled from "styled-components";

export const SideBarContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	z-index: 60;
	ul {
		height: 100%;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-left: 0;

		li {
			padding: 1rem;
			font-size: 1.5rem;
			a {
				color: white;
				font-size: 1.4rem;
				transition: 0.3s all;
			}
		}
		button {
			margin: 2rem;
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

	// laptop
	@media (min-width: 850px) {
		display: none;
	}
	// tablet
	@media (max-width: 800px) {
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
	z-index: 66;
	margin-right: 2rem;
	border: none;
	background: none;
	font-size: 4.2rem;
	outline: none;
	position: absolute;
	.svg {
		font-size: 2.8rem;
	}
	${({ open }) =>
		open && {
			transition: " .3s all",
			transform: "rotateZ(360deg)",
			right: "33%",
			top: "2rem",
			color: "white",
		}};
	// Tablet
	@media (max-width: 800px) {
		margin-right: 1rem;
		${({ open }) =>
			open && {
				right: "0%",
				top: "2%",
				position: "fixed",
			}};
	}
=
`;
