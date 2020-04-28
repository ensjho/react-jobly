import React, { useState, useEffect, useParams } from "react";
import axios from "axios";
import JoblyApi from "../JoblyApi"
import JobCard from "../Jobs/JobCard";

function Company(){
  const [company, setCompany] = useState([]);
  const { handle } = useParams();

  useEffect(() => {
    async function fetchCompany(){
      let companyData = await JoblyApi.getCompanies(handle);
      setCompany(companyData.company);
    }
    fetchCompany();
  },[]);
  
  return (
    <div className="singleCompany">
      <div>
        <h1>{company.name}</h1>
        <div>{company.description}</div>
      </div>
      <div className="jobList">
        <div className="Job-card-area">
          {company ? company.jobs.map((job) => (
            <JobCard job={job} />
          )):null}
        </div>
      </div>
    </div>
  );
}

export default Company;



