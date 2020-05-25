import React from "react";
import { SectionZeroContainer, ShowCaseInfo } from "./sectionZero.style";
import Image2 from "../../assets/image4.jpg";
import Button from "../Button/button.components";

const SectionZero = (props) => {
	return (
		<SectionZeroContainer img={Image2}>
			<img src={Image2} alt="chause" />
			<ShowCaseInfo>
				<h3>New COLLECTION</h3>
				<p>
					Our easiest chuck-on-and-go staples come with a serious
					style heritage  that’s liberating, sexy, comfy and supremely
					cool.{" "}
				</p>
				<Button>SHOP NEW ARRIVALS</Button>
			</ShowCaseInfo>
		</SectionZeroContainer>
	);
};

export default SectionZero;
