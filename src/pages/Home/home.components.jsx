import React from "react";
import { HomePageContainer } from "./home.style";

import * as All from "../../components/index";

const HomePage = (props) => {
	return (
		<HomePageContainer>
			<All.SectionZero />

			<All.MenuItem />
			<All.SectionOne />
			<All.CollectionOverview />
			<All.SectionFour />
		</HomePageContainer>
	);
};

export default HomePage;
