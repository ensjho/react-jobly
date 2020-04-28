import React from "react";
import { NavLink } from "react-router-dom";

// navigation at top of page
function Nav() {
  
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  )
}
// end

export default Nav;


  // const loggedIn = () => {
  //   return (
  //   <nav>
  //     <NavLink to="/">Home</NavLink>
  //     <NavLink to="/companies">Companies</NavLink>
  //     <NavLink to="/job">Jobs</NavLink>
  //     <NavLink to="/profile">Profile</NavLink>
  //     <NavLink to="/login">Login</NavLink>
  // </nav>
  // )
  // }
  // const loggedOut = (
  //   <nav>
  //     <NavLink to="/">Home</NavLink>
  //     <NavLink to="/login">Log In</NavLink>
  //   </nav>
  // )