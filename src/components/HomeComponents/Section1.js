import React from 'react';
import {Link} from "react-router-dom";

const Section1 = () => {
    return ( 
      <div id="section1">
        <div>
          <div id="title">
              Nobody&nbsp;Plans
              To&nbsp;Be&nbsp;Homeless
          </div>
          <img />
          <div id="intro">
            <span>
              Safe Parking programs are a safe and legal homelessness intervention to stabilize and connect to resources for people who are living in&nbsp;their&nbsp;vehicles.
            </span>
            <span>
              All program locations include access to  a restroom facility and the security of&nbsp;a&nbsp;guard.
            </span>
          </div>
          <div id="buttons">
              <Link to="/form">FIND YOUR SPOT</Link>
              <Link to="/profile">RETRIEVE&nbsp;YOUR&nbsp;APPLICATION</Link>
          </div>
        </div>
      </div>
     );
};
 
export default Section1;