import React from "react";
import * as All from "./components/index";
import { GLobelStyle } from "./globelStyle.style";
import { Provider } from "react-redux";
import { Store } from "./redux/index";
import { Route, Switch } from "react-router-dom";
import { HomePage, Product } from "./pages/index";

const App = (props) => {
	return (
		<>
			<Provider store={Store}>
				<GLobelStyle />
				<All.Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/product/:productName" component={Product} />
				</Switch>
				<All.Footer />
			</Provider>
		</>
	);
};

export default App;
