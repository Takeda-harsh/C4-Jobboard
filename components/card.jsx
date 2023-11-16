/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function JobCard({icon, time, type, title, company, country, background}) {
    return(
      <div className='card'>
        <div className='styled-icon' style={{backgroundColor:background}} >
          <img src={icon}/>
        </div>
        
        <div className='job-time-date'>
          <p>{time}</p> <span>.</span> <p>{type}</p>
        </div>
        <div className='details'>
          <h3>{title}</h3>
          <p>{company}</p>
          <h5>{country}</h5>
        </div>
          
        
      </div>
    );
  }