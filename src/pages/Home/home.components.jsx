import React from "react";
import { HomePageContainer } from "./home.style";

import * as All from "../../components/index";

const HomePage = (props) => {
	return (
		<HomePageContainer>
			<All.Hero />
			<All.CollectionOverview />
			<All.News />
		</HomePageContainer>
	);
};

export default HomePage;
