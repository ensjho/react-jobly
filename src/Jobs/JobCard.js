import React from "react";
import './JobCard.css';

// details on a specific job, and button to apply for job
function JobCard({
  id, 
  title, 
  salary, 
  equity, 
  company_handle
}){

  return(
    <div className="JobCard" id={id}>
      <h3>{title}</h3>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <button className="buttonApply">Apply</button>
    </div>
  )
}

export default JobCard