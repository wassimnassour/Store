import React from "react";
import * as All from "./components/index";
import { GLobelStyle } from "./globelStyle.style";
import { Provider } from "react-redux";
import { Store } from "./redux/index";
import { Route, Switch } from "react-router-dom";
import {
  HomePage,
  Product,
  CollectionPage,
  CartPage,
  ErrorPage,
} from "./pages/index";
import { SignIn, SignUp } from "./components/index";
const App = (props) => {
  return (
    <>
      <Provider store={Store}>
        <GLobelStyle />
        <All.Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/product/:productName" component={Product} />

            <Route
              path="/collection/:CollectionName"
              component={CollectionPage}
            />
            <Route path="/Cart" component={CartPage} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </main>
        <All.Footer />
      </Provider>
    </>
  );
};

export default App;
