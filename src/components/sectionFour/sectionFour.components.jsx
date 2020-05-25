import React from "react";

import { Button } from "../index";
import { SectionFourContainer, ShowCaseInfo } from "./sectionFour.style";
const sectionFour = (props) => {
	return (
		<SectionFourContainer>
			<ShowCaseInfo>
				<h3>New COLLECTION</h3>
				<p>
					Our easiest chuck-on-and-go staples come with a serious
					style heritage  that’s liberating, sexy, comfy and supremely
					cool.{" "}
				</p>
				<Button>SHOP NEW ARRIVALS</Button>
			</ShowCaseInfo>
		</SectionFourContainer>
	);
};

export default sectionFour;
