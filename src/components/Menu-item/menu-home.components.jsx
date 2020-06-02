import React from "react";
import img1 from "../../assets/Menu-home/1.jpg";
import img2 from "../../assets/Menu-home/2.jpg";
import img3 from "../../assets/Menu-home/3.jpg";
import { MenuHomeContainer } from "./menu-home.style";
const MenuItem = (props) => {
	const images = [img1, img2, img3];
	return (
		<MenuHomeContainer>
			{images.map((img) => (
				<img src={img} alt="fashion" key={Math.random() + 1} />
			))}
		</MenuHomeContainer>
	);
};

export default MenuItem;
