import React from "react";
import * as All from "./components/index";
import { GLobelStyle } from "./globelStyle.style";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import {
  HomePage,
  Product,
  CollectionPage,
  CartPage,
  ErrorPage,
} from "./pages/index";
import { SignIn, SignUp, Header, Footer } from "./components/index";
const App = ({ loading }) => {
  return (
    <>
      <GLobelStyle />
      <Header />
      {loading ? <All.Loading /> : null}
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route exact path="/product/:productName" component={Product} />

        <Route path="/collection/:CollectionName" component={CollectionPage} />
        <Route path="/Cart" component={CartPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.User.loading,
});
export default connect(mapStateToProps)(App);
