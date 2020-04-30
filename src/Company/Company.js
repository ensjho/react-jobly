import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../JoblyApi"
import JobCard from "../Jobs/JobCard";
import AuthContext from '../AuthContext';

// TODO: add loading logic for slower loading
// TODO: fix up CSS class names, place in separate file if necessary
// todo: ensure we're authorizing users to access

// company detail page with list of jobs for this company
function Company(){
  const {handle} = useParams();
  const [currentCompany, setCompany] = useState(null);
  const { userInfo, setUserInfo } = useContext(AuthContext)
  
  // Get list of jobs for this company from DB
  useEffect(() => {
    async function fetchCompany(){
      let companyData = await JoblyApi.getCompany(handle);
      setCompany(companyData);
    }
    fetchCompany();
  },[handle]);

  //render job cards on page
  const renderJobCards = () => {
    // mark jobs as "applied" if they were already applied for
    if (currentCompany.jobs && userInfo.jobs) {
      return currentCompany.jobs.map((job) => {
        let hasApplied = false;
        if (userInfo.jobs.find(appliedJob => appliedJob.id === job.id)){
          hasApplied = true;
        }
        return <JobCard
          username={userInfo.username} 
          id={job.id}
          key={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          company_handle={job.company_handle}
          hasApplied={hasApplied}
          setUserInfo={setUserInfo}
        />
    })
  }}
  

  // const renderJobCards = () => {
  //   return currentCompany.jobs.map((job) => {
  //     let hasApplied = false;
  //     if (userInfo.jobs.find(appliedJob => appliedJob.id === job.id)){
  //       hasApplied = true;
  //       console.log("HAS APPLIED IS TRUE")
  //     }

  //     return <JobCard
  //       username={userInfo.username} 
  //       id={job.id}
  //       key={job.id}
  //       title={job.title}
  //       salary={job.salary}
  //       equity={job.equity}
  //       company_handle={job.company_handle}
  //       hasApplied={hasApplied}
  //       handleApply={handleApply}
  //     />
  //   })
  // }

    return (
      <div className="singleCompany">
        <div>
          {currentCompany ? <h1>{currentCompany.name}</h1> : null}
          {currentCompany ? <div>{currentCompany.description}</div> : null}
        </div>
        <div className="jobList">
          <div className="Job-card-area">
            { currentCompany && userInfo.jobs ? renderJobCards() : null }
          </div>
        </div>
      </div>
    )
}

export default Company;


