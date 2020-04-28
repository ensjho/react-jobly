import React from "react";

function JobCard({id, 
               title, 
               salary, 
               equity, 
               company_handle}){

  return(
    <div className="JobCard" id={id}>
      <h3>JOB</h3>
      <div>{title}</div>
      <div>{salary}</div>
      <div>{equity}</div>
      <button>Apply</button>
    </div>
  )
}

export default JobCard