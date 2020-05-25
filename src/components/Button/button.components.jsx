import React from "react";
import { CusstumButton } from "./button.style";
const Button = ({ children }) => {
	console.log(children);
	return <CusstumButton>{children}</CusstumButton>;
};

export default Button;
