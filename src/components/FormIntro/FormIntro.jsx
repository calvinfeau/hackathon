import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Step1 from "./step1-icon.png";
import "./FormIntro.css";

const FormIntro = props => {
  return (
    <div className="form-int-div">
      <div className="intro-wrap">
        <h2 id="intro-head">Brief Intro</h2>
        <p className="p-top">
          This is the beginning of the process to be part of a Safe Parking LA
          program.
        </p>
        <p className="p-top">
          It should take about 10 minutes maximum in order to finish this
          initial form. Upon submission, we will look into your general
          situation to figure out how we can best serve your needs.
        </p>
        <p id="p-bold">
          We will need more technical information if and when accepted- but
          let’s not worry about that right now. :)
        </p>
        <div className="img-intro">
          <img src={Step1} alt="a form" />
        </div>
      </div>
      <div className="button">
        <button className="btn btn-primary btn-lg">Proceed</button>
      </div>
    </div>
  );
};

export default FormIntro;
