import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import Companies from "../Companies/Companies";
import Company from "../Company/Company";
import Jobs from "../Jobs/Jobs";
import Login from "../Account/Login"; 
import LogOut from "../Account/LogOut"; 
import Profile from "../Account/Profile";

// handles all routing for our app
function Routes() {
  return (
    <Switch>
      <Route exact path="/companies"><Companies /></Route>
      <Route exact path="/jobs"><Jobs/></Route>
      <Route exact path="/companies/:handle"><Company /></Route>
      <Route exact path="/profile"><Profile /></Route>
      <Route exact path="/login"><Login /></Route>
      <Route exact path="/logout"><LogOut /></Route>
      <Route exact path="/"><Home /></Route>
      {/* if no routes match exactly, redirect to home */}
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
