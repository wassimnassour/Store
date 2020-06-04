import React from "react";
import { SectionOneContainer, ShowCaseInfo } from "./sectionOne.style";

import { Button } from "../index";
const SectionOne = (props) => {
	return (
		<SectionOneContainer>
			<ShowCaseInfo>
				<h3>New COLLECTION</h3>
				<p>
					Our easiest chuck-on-and-go staples come with a serious
					style heritage  that’s liberating, sexy, comfy and supremely
					cool.{" "}
				</p>
				<Button>SHOP NEW ARRIVALS</Button>
			</ShowCaseInfo>
		</SectionOneContainer>
	);
};

export default SectionOne;
