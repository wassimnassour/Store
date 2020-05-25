import React from "react";
import * as All from "./components/index";
import { GLobelStyle } from "./globelStyle.style";
import HomePage from "./pages/Home/home.components";

import { BrowserRouter as Router, Rout, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./redux/index";
const App = (props) => {
	return (
		<>
			<Provider store={Store}>
				<Router>
					<GLobelStyle />
					<All.Header />

					<HomePage />
					<All.Footer />
				</Router>
			</Provider>
		</>
	);
};

export default App;
