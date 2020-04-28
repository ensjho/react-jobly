import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import JoblyApi from "../JoblyApi";

/* Renders a list of jobs.*/
function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs(){
      let jobsData = await JoblyApi.request("jobs");
      setJobs(jobsData.jobs);
    }
    fetchJobs();
  },[]);

  return (
    <div className="JobsList">
      <div className="Jobs-card-area">
        {jobs ? jobs.map((job) => (
          <JobCard 
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            company_handle={job.company_handle}
          />
        )):null}
      </div>
    </div>
  );
}

export default Jobs;



// <form class="exa mple" action="action_page.php">
// <input type="text" placeholder="Search.." name="search">
// <button type="submit"><i class="fa fa-search"></i></button>
// </form>