import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import Companies from "../Companies/Companies";
import Company from "../Company/Company";
import Jobs from "../Jobs/Jobs";
import Login from "../Account/Login";
import Profile from "../Account/Profile";

function Routes() {
  return (
    <Switch>
      <Route exact path="/companies"><Companies /></Route>
      <Route exact path="/jobs"><Jobs/></Route>
      <Route exact path="/companies/:company"><Company /></Route>
      <Route exact path="/login"><Login /></Route>
      <Route exact path="/profile"><Profile /></Route>
      <Route exact path="/"><Home /></Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
