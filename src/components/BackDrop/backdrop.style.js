import styled from "styled-components";

export const BackDropContainer = styled.div`
	display: ${(props) => (props.show ? "" : "none")};
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 40;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.5);
`;
