import React, { useEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import SignUp from "../components/SignUp";
import SingIn from "../components/SingIn";
import Home from "./Home";

import { useSelector, useDispatch } from "react-redux";
import Profile from "../components/Profile";
import { fetchMe } from "../state/users";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchMe());
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SingIn} />
        <Route exact path="/user/profile" component={Profile} />
        <Route exact path="" />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
