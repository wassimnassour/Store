import React from "react";
import { BackDropContainer } from "./backdrop.style";
const BackDrop = ({ show, clicked }) => {
	return <BackDropContainer show={true} onClick={clicked} />;
};

export default BackDrop;
