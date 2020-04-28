import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import JoblyApi from "../JoblyApi";
import Search from '../Search';

// TODO: CSS STUFF, LOADING STUFF

/* Renders a list of jobs.*/
function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});

  // Search for jobs. If no search query, then get all jobs,
  // otherwise search based on search query
  useEffect(() => {
    async function fetchJobs(){
      let jobsData = await JoblyApi.request("jobs", searchQuery);
      setJobs(jobsData.jobs);
    }
    fetchJobs();
  },[searchQuery]);

  return (
    <div>
      <Search doSearch={setSearchQuery}/>
      <div className="JobsList">
        <div className="Jobs-card-area">
          {jobs ? jobs.map((job) => (
            <JobCard 
            id={job.id}
            key={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            company_handle={job.company_handle}
            />
            )):null}
        </div>
      </div>
    </div>
  );
}

export default Jobs;



// <form class="exa mple" action="action_page.php">
// <input type="text" placeholder="Search.." name="search">
// <button type="submit"><i class="fa fa-search"></i></button>
// </form>