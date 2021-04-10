import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import SignUp from "../components/SignUp";
import SingIn from "../components/SingIn";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SingIn} />
        <Route exact path="" />
        <Route exact path="" />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
