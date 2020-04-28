import React from "react";
import { Link } from "react-router-dom";

// TODO: add 'default_logo_url' to export in case other areas need this link too
// TODO: move CSS to separate file, and clean up class names to match component

// details for a specific company
function CompanyCard({company}){
  const {handle, name, description, logo_url} = company
  const default_logo_url = "https://pbs.twimg.com/profile_images/1110319067280269312/iEqpsbUA_400x400.png"
  return(
    <div style={{textAlign:"center", border: "solid", marginTop: 20, maxWidth: 400}}>
    <Link style={{textDecoration: "none", color:"black"}} className="Company" to={`/companies/${handle}`}>
      <div>{name}</div>
      <div>{description}</div>
      <img src={logo_url || default_logo_url}
           style={{width:30}} alt={`logo for ${name}`}></img>
    </Link>
    </div>
  )
}

export default CompanyCard;