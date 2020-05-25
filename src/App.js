import React from "react";
import * as All from "./components/index";
import { GLobelStyle } from "./globelStyle.style";
import { BrowserRouter as Router, Rout, Switch } from "react-router-dom";

const App = (props) => {
	return (
		<>
			<Router>
				<All.Header />
				<GLobelStyle />
			</Router>
		</>
	);
};

export default App;
