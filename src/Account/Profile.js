import React, { useState } from "react";
import uuid from "uuid/v4";

/** Form for updating the profile; 
 *  requires a valid password;
 *  Username can not be updated;
 */

function Profile({ userInfo, updateUser }) {
  const [formData, setFormData] = useState({});

  console.log("USER INFO:", userInfo)

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const gatherInput = evt => {
    evt.preventDefault();
      updateUser({ ...formData, id: uuid() });
      setFormData({});
    }


  return (
    <div>
      <h1> Profile </h1>
      <form className="ProfileForm" onSubmit={gatherInput}>
        <div>
          <label htmlFor="username">Username: </label>
          <input disabled
            name="username"
            placeholder="username"
            value="TestUser"
            id="username"
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
        <div>
          <label htmlFor="photoUrl">Photo URL: </label>
          <input
            onChange={handleChange}
            name="photoUrl"
            placeholder="photoUrl"
            value={formData.photoUrl}
            id="photoUrl"
          />
        </div>
        <div>
          <label htmlFor="password">Re-enter Password: </label>
          <input
            onChange={handleChange}
            name="password"
            placeholder="password"
            value={formData.password}
            id="password"
          />
        </div>
   
        <button id="updateProfile">Save Changes</button>
      </form>
    </div>
  );
}

export default Profile;
