import React, { useEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import SignUp from "../components/SignUp";
import SingIn from "../components/SingIn";
import Home from "./Home";

import { useSelector, useDispatch } from "react-redux";
import {findMovies} from '../state/movies'

const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.findMovies);
  useEffect(() => {
    dispatch(findMovies());
  }, []);
 
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
