import React from "react";
import { BackDropContainer } from "./backdrop.style";
const BackDrop = ({ show, clicked }) => {
	return <BackDropContainer show={show} onClick={clicked} />;
};

export default BackDrop;
