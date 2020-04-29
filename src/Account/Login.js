import React, { useState, useContext } from "react";
import uuid from "uuid/v4";
import JoblyApi from "../JoblyApi"
import AuthContext from '../AuthContext';

/** Sign Up Form for adding a new user */

function Login({ addUser }) {
  const [formData, setFormData] = useState({});
  const [signUpPage, setLogInOrSignUp] = useState(false);
  const {token, setToken} = useContext(AuthContext)

  // handle changes in form to keep React happy
  const handleChange = evt => {
    const { name, value } = evt.target;
    console.log(name,value)
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  // add user to DB
  const gatherInput = evt => {
    evt.preventDefault();
    addUser({ ...formData, id: uuid() });
    setFormData({});
  }
  
  // log in the user, return token
  const handleLogIn = evt => {
    evt.preventDefault();
    async function fetchUser(){
      try{
      let userToken = await JoblyApi.logIn(formData);
      setToken(userToken);
      setFormData({});
      }catch(err){
        alert("INVALID LOG IN!")
      }
    }
    fetchUser();
  }


  let jsxLogIn;

  if (signUpPage === false) {
    jsxLogIn = (
      <form className="SignUpForm" onSubmit={handleLogIn}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            onChange={handleChange}
            name="username"
            placeholder="username"
            value={formData.username}
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            onChange={handleChange}
            name="password"
            placeholder="password"
            value={formData.password}
            id="password"
          />
        </div>
        <button>Submit</button>
      </form>
    )
  }

  if (signUpPage === true) {
    jsxLogIn = (
      <div>
        <form className="SignUpForm" onSubmit={gatherInput}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              name="username"
              placeholder="username"
              value="username"
              id="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              onChange={handleChange}
              name="password"
              placeholder="password"
              value={formData.password}
              id="password"
            />
          </div>
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input
              onChange={handleChange}
              name="firstName"
              placeholder="firstName"
              value={formData.firstName}
              id="firstName"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name: </label>
            <input
              onChange={handleChange}
              name="lastName"
              placeholder="lastName"
              id="lastName"
              value={formData.lastName}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              onChange={handleChange}
              name="email"
              placeholder="email"
              value={formData.email}
              id="email"
            />
          </div>
          <button id="addNewUser">Save Changes</button>
        </form>
      </div>)
  }

  const handleToggleLog = () => setLogInOrSignUp(false)
  const handleToggleSign = () => setLogInOrSignUp(true)

  return (
    <div>
      <button onClick={handleToggleLog}>Login</button>
      <button onClick={handleToggleSign}>SignUp</button>
      {jsxLogIn}
    </div>
  )
}

export default Login;
