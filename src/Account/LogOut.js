import React, { useState, useContext } from "react";
import AuthContext from '../AuthContext';
import { Redirect } from "react-router-dom";

/** Sign Up Form for adding a new user */

function LogOut() {
  const {token, setToken} = useContext(AuthContext)
  setToken('');
  return Redirect("/");
}

export default LogOut;