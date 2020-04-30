import React, { useState, useEffect, useContext } from "react";
import JobCard from "./JobCard";
import JoblyApi from "../JoblyApi";
import Search from '../Search';
import AuthContext from '../AuthContext';

// TODO: CSS STUFF, LOADING STUFF

/* Renders a list of jobs.*/
function Jobs() {

  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});
  const { userInfo, setUserInfo } = useContext(AuthContext)

  // Search for jobs. If no search query, then get all jobs,
  // otherwise search based on search query
  useEffect(() => {
    async function fetchJobs(){
      let jobsData = await JoblyApi.request("jobs", searchQuery);
      setJobs(jobsData.jobs);
    }
    fetchJobs();
  },[searchQuery]);

  // render job cards on page
  const renderJobCards = () => {
    // mark jobs as "applied" if they were already applied for
    return jobs.map((job) => {
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
  }

  return (
    <div>
      <Search doSearch={setSearchQuery}/>
      <div className="JobsList">
        <div className="Jobs-card-area">
          {userInfo.jobs ? renderJobCards() : null}
        </div>
      </div>
    </div>
  );
}

export default Jobs;