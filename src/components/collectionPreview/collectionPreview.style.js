import styled from "styled-components";

export const PreviewContainer = styled.div`
	width: 18%;
	margin: 8px;
	max-height: 300px;
	position: relative;
	@media (max-width: 900px) {
		width: 35%;
	}
	@media (max-width: 700px) {
		width: 41%;
	}
	@media (max-width: 550px) {
		width: 80%;
	}
`;
