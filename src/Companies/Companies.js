import React, { useState, useEffect } from "react";
import JoblyApi from "../JoblyApi"
import CompanyCard from "./CompanyCard";
import Search from '../Search';

// TODO: add a loading message for slowing loading

/* Renders a list of companies.*/
function Companies() {
  const [companies, setCompanies] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});

  // Search for jobs. If no search query, then get all jobs,
  // otherwise search based on search query
  useEffect(() => {
    async function fetchCompanies(){
      let companiesData = await JoblyApi.request("companies", searchQuery);
      setCompanies(companiesData.companies);
    }
    fetchCompanies();
  },[searchQuery]);

  // use class names with captials when referring to components, and put within its own CSS file for that component
  return (
    <div className="Companies">
      <Search doSearch={setSearchQuery}/>
      <div className="Companies-list">
        <div className="Companies-card-area">
          {companies.map((company) => (
            <CompanyCard company={company} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Companies;