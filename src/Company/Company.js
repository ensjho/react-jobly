import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../JoblyApi"
import JobCard from "../Jobs/JobCard";

// TODO: add loading logic for slower loading
// TODO: fix up CSS class names, place in separate file if necessary

// company detail page with list of jobs for this company
function Company(){
  const {handle} = useParams();
  const [currentCompany, setCompany] = useState(null);
  
  // Get list of jobs for this company from DB
  useEffect(() => {
    async function fetchCompany(){
      let companyData = await JoblyApi.getCompany(handle);
      setCompany(companyData);
    }
    fetchCompany();
  },[handle]);

    return (
      <div className="singleCompany">
        <div>
          {currentCompany ? <h1>{currentCompany.name}</h1> : null}
          {currentCompany ? <div>{currentCompany.description}</div> : null}
        </div>
        <div className="jobList">
          <div className="Job-card-area">
            {currentCompany ? 
              currentCompany.jobs.map(job => (
                <JobCard             
                  id={job.id}
                  title={job.title}
                  salary={job.salary}
                  equity={job.equity}
                  company_handle={job.company_handle}
                />))
              : null
            }
          </div>
        </div>
      </div>
    )
}

export default Company;


