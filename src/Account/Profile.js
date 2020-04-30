import React, { useState } from "react";
import JoblyApi from "../JoblyApi";

/** Form for updating the profile; 
 *  requires a valid password;
 *  Username can not be updated;
 */

function Profile({ userInfo, updateUser }) {
  const [formData, setFormData] = useState(userInfo);
  const [messages, setMessages] = useState("")

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const submitUpdates = evt => {
    evt.preventDefault();
    async function submitChanges(){
      try {
        const updatedUser = await JoblyApi.updateUser(formData);
        setFormData(updatedUser);
        setMessages("Update successful!")
      }
      catch (err) {
        setMessages(`Update failed! ${err}`);
        console.debug(err);
      }
    }
    submitChanges();
  }


  return (
    <div>
      <h1> Profile </h1>
      <form className="ProfileForm" onSubmit={submitUpdates}>
        <div>
          <label htmlFor="username">Username: </label>
          <input disabled
            name="username"
            placeholder="username"
            value={formData.username}
            id="username"
          />
        </div>
        <div>
          <label htmlFor="first_name">First Name: </label>
          <input
            onChange={handleChange}
            name="first_name"
            placeholder="first_name"
            value={formData.first_name}
            id="firstName"
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name: </label>
          <input
            onChange={handleChange}
            name="last_name"
            placeholder="last_name"
            id="lastName"
            value={formData.last_name}
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
          <label htmlFor="photo_url">Photo URL: </label>
          <input
            onChange={handleChange}
            name="photo_url"
            placeholder="photoUrl"
            value={formData.photo_url}
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
      <div id="messageArea" >{messages}</div>
    </div>
  );
}

export default Profile;
