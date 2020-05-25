import React from "react";
import * as All from "./components/index";
import { GLobelStyle } from "./globelStyle.style";
import HomePage from "./pages/Home/home.components";

import { BrowserRouter as Router, Rout, Switch } from "react-router-dom";

const App = (props) => {
	return (
		<>
			<Router>
				<GLobelStyle />
				<All.Header />
				<HomePage />
			</Router>
		</>
	);
};

export default App;
