import React from "react";
import * as All from "./components/index";
import { GLobelStyle } from "./globelStyle.style";
import { Provider } from "react-redux";
import { Store } from "./redux/index";
import { Route, Switch } from "react-router-dom";
import { HomePage, Product, CollectionPage, CartPage } from "./pages/index";

const App = (props) => {
	return (
		<>
			<Provider store={Store}>
				<GLobelStyle />
				<All.Header />
				<Switch>
					<Route exact path="/" component={HomePage} />

					<Route
						exact
						path="/product/:productName"
						component={Product}
					/>

					<Route
						path="/collection/:CollectionName"
						component={CollectionPage}
					/>
					<Route path="/Cart" component={CartPage} />
					<Route
						path="*"
						render={() => <h1>this page is not found</h1>}
					/>
				</Switch>
				<All.Footer />
			</Provider>
		</>
	);
};

export default App;
