import React, { useState, useEffect } from "react";
import JoblyApi from "../JoblyApi"
import CompanyCard from "./CompanyCard";

/* Renders a list of companies.*/
function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies(){
      let companiesData = await JoblyApi.request("companies");
      setCompanies(companiesData.companies)
    }
    fetchCompanies();
  },[]);
  
  return (
    <div className="CompaniesList">
      <div className="Company-card-area">
        {companies ? companies.map((company) => (
          <CompanyCard 
          company={company} />
        )):null}
      </div>
    </div>
  );
}

export default Companies;



// <form class="exa mple" action="action_page.php">
// <input type="text" placeholder="Search.." name="search">
// <button type="submit"><i class="fa fa-search"></i></button>
// </form>