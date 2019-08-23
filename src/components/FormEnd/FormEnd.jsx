import React, { Component } from "react";
import "./FormEnd.css";
import ParkingIcon from "./parking-icon.png";

class FormEnd extends Component {
  render() {
    return (
      <div>
        <h2>Thank You!</h2>

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
        </div>
      </div>
    );
  }
}

export default FormEnd;
