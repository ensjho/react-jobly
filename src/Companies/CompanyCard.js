import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({company}){
  const {handle, name, description, logo_url} = company
  const default_logo_url = "https://pbs.twimg.com/profile_images/1110319067280269312/iEqpsbUA_400x400.png"
  let logo = logo_url;
  return(
    <div style={{textAlign:"center", border: "solid", marginTop: 20, maxWidth: 400}}>
    <Link style={{textDecoration: "none", color:"black"}} className="Company" to={`/companies/${handle}`}>
      <div>{name}</div>
      <div>{description}</div>
      <img src={logo?logo_url:default_logo_url}
        style={{width:30}} ></img>
    </Link>
    </div>
  )
}

export default CompanyCard