import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from '../AuthContext';

// further study: can we make the logout link more like a button/form

// navigation at top of page
function Nav() {
  const { token } = useContext(AuthContext);

  return (
    <nav>
      {token ?<nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/companies">Companies</NavLink>
                <NavLink to="/jobs">Jobs</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/logout">Log out</NavLink>
              </nav>
             :<NavLink to="/login">LogIn</NavLink>}
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