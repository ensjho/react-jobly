import React, { useState } from "react";
import uuid from "uuid/v4";

/** Sign Up Form for adding a new user */

function Login({ addUser }) {
  const [formData, setFormData] = useState({});

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const gatherInput = evt => {
    evt.preventDefault();
    addUser({ ...formData, id: uuid() });
    setFormData({});
  }

return (
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
  </div>
  );
}

export default Login;
