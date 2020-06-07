import React from "react";
import Error from "../../assets/2.png";
import { ErrorPageContainer } from "./error.style";
const ErrorPage = () => {
	return (
		<ErrorPageContainer>
			<img src={Error} alt="error in this page" />
			<h1>This Page Is not In The Map</h1>
		</ErrorPageContainer>
	);
};

export default ErrorPage;
