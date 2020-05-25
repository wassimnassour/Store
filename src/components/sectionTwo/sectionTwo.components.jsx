import React from "react";
import { SectionTwoContainer, ShowCaseInfo } from "./sectionTwo.style";
import Women from "../../assets/women.jpg";
import { Button } from "../index";
const SectionTwo = (props) => {
	return (
		<SectionTwoContainer>
			<img src={Women} alt="women" />

			<ShowCaseInfo>
				<h3>New COLLECTION</h3>
				<p>
					Our easiest chuck-on-and-go staples come with a serious
					style heritage  that’s liberating, sexy, comfy and supremely
					cool.{" "}
				</p>
				<Button>SHOP NEW ARRIVALS</Button>
			</ShowCaseInfo>
		</SectionTwoContainer>
	);
};

export default SectionTwo;
