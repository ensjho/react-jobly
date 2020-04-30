import { useContext } from "react";
import AuthContext from '../AuthContext';
import { Redirect } from "react-router-dom";

/** Log out: clear token context state, and remove token from local storage */

function LogOut() {
  const {setToken} = useContext(AuthContext)
  localStorage.removeItem('token');
  setToken('');
  return Redirect("/");
}

export default LogOut;