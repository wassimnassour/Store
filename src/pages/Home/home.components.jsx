import React from "react";
import { HomePageContainer } from "./home.style";

import * as All from "../../components/index";

const HomePage = (props) => {
	return (
		<HomePageContainer>
			<All.SectionZero />
			<All.SectionOne />
			<All.SectionFour />
		</HomePageContainer>
	);
};

export default HomePage;
