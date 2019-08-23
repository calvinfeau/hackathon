import React, { Component } from "react";
import "./FormHeader.css";

const FormHeader = props => {
  return (
    <div>
      <div className="form-4-header">
        <h3 id="head1">FIND YOUR SPOT</h3>
      </div>
      <div className="copy-top">
        <p id="p1">
          This form is the first step in the application process for a Safe
          Parking LA program.
        </p>
        <p id="p2">
          Please fill out <span id="span1">ALL</span> of the following
          information so we can best assist your specific needs.
        </p>
      </div>
    </div>
  );
};

export default FormHeader;
