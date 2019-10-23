import React, { Component } from "react";
import "./FormEnd.css";
import ParkingIcon from "./parking-icon.png";

class FormEnd extends Component {
  render() {
    return (
      <div className="wrapper-end">
        <h2 className="end-header">Thank You!</h2>

        <div className="form-end-top">
          <p>
            We are so happy that you’ve successfully taken the first steps in
            seeking assistance with Safe Parking LA. We are already working on
            assessing your situation.
          </p>
          <p>
            Please allow for us to get back to you in approximately 24 hours.
          </p>
          <div className="img-park">
            <img src={ParkingIcon} alt="" />
          </div>
          <div className="middle-text">
            <p>
              Meanwhile, please refer to the maps of{" "}
              <span id="green-text">green street parking zones</span> for
              alternative overnight parking.
            </p>
            <p id="end-italic">
              *Always read signs and look out for “Real-time” hours
            </p>
          </div>
          <div className="btns">
            <a
              href="https://www.safeparkingla.org/green-streets"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              LA GREEN STREETS
            </a>

            <button className="btn btn-primary btn-lg">RESOURCES</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FormEnd;
