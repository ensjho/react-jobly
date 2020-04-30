import React, { useState } from "react";
import './JobCard.css';
import JoblyApi from "../JoblyApi";

// todo: okay to import context here
// todo: use API call to update userInfo instead of pushing new job to userInfo

// details on a specific job, and button to apply for job
function JobCard({
  id, 
  title, 
  salary, 
  equity, 
  company_handle,
  username,
  hasApplied,
  setUserInfo
}){
  // state for button
  const[haveApplied, setHaveApplied] = useState(hasApplied);

  // apply for job, update user info with new job application
  const handleApply = evt => {
    async function applyForJob() {
      try {
        let result = await JoblyApi.apply(id, username); // send application to DB
        setHaveApplied(true); // set job as "applied" for button state
        setUserInfo(user => { // push new application to userInfo
          user.jobs.push({
            id,
            title,
            company_handle,
            state: "applied"
          });

          return user;
        })
      }
      catch (err) {
        alert("SOMETHING WENT WRONG!");
        // console.log(err);
      }
    }
    applyForJob();
  }

  return (
    <div className="JobCard" id={id}>
      <h3>{title}</h3>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      {haveApplied
        ? <button className="alreadyApplied" disabled>Applied!</button>
        : <button className="buttonApply" onClick={handleApply}>Apply</button>
      }
      
    </div>
  )
}

export default JobCard