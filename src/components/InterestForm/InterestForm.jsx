import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { createUser } from "../../services/api";
import "./InterestForm.css";
import FormHeader from "../FormHeader/FormHeader";

class InterestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicant: "",
      birth: "",
      phone: "",
      email: "",
      driverId: "",
      driverStatus: "",
      drivable: true,
      id: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDriverStatus = e => {
    this.setState({ driverStatus: e.target.value });
  };

  handleDrivable = e => {
    this.setState({ drivable: this.strToBool(e.target.value) });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit button hit");
    createUser(this.state).then(item => {
      console.log("item._id: ", item._id);

      this.setState({ id: item._id });
      console.log("id added- to state: ", this.state.id);
      // window.location = '/forms/2'
    });
  };

  strToBool = value => {
    if (value && typeof value === "string") {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
    }
    return value;
  };

  render() {
    var driverIdInput;
    if (
      this.state.driverStatus &&
      this.state.driverStatus !== "Lost or Stolen"
    ) {
      driverIdInput = (
        <div>
          <label>
            Driver's License #
            <input
              type="text"
              required
              name="driverId"
              onChange={this.handleChange}
            />
          </label>
        </div>
      );
    }

    var form1;
    if (this.state.id) {
      form1 = (
        <Redirect to={{ pathname: "/forms/2", state: { id: this.state.id } }} />
      );
    } else {
      form1 = (
        <div>
          <FormHeader />

          <div>
            <form className="interest-form" onSubmit={this.handleSubmit}>
              <div className="boxes">
                <label>
                  <p>Applicant. First and last name of the vehicle driver.</p>
                  <input
                    type="text"
                    required
                    name="applicant"
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label className="form-check-label">
                  Date of Birth
                  <input
                    className="form-control"
                    type="date"
                    required
                    name="birth"
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label className="form-check-label">
                  Phone Number
                  <input
                    className="form-control"
                    type="text"
                    required
                    name="phone"
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label className="form-check-label">
                  Email Address
                  <input
                    className="form-control"
                    type="text"
                    required
                    name="email"
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="radio">
                <p>Driver's License Status:</p>
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Valid"
                    checked={this.state.driverStatus === "Valid"}
                    onChange={this.handleDriverStatus}
                  />
                  Valid
                </label>
              </div>
              <div className="radio">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Expired"
                    checked={this.state.driverStatus === "Expired"}
                    onChange={this.handleDriverStatus}
                  />
                  Expired
                </label>
              </div>
              <div className="radio">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Suspended"
                    checked={this.state.driverStatus === "Suspended"}
                    onChange={this.handleDriverStatus}
                  />
                  Suspended
                </label>
              </div>
              <div className="radio">
                <label className="form-check-label">
                  <input
                    className="form-check-input test"
                    type="radio"
                    value="Lost or Stolen"
                    checked={this.state.driverStatus === "Lost or Stolen"}
                    onChange={this.handleDriverStatus}
                  />
                  Lost or Stolen
                </label>
              </div>
              {driverIdInput}
              <div className="radio">
                <p>Is your vehicle driveable ?</p>
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="true"
                    checked={this.state.drivable === true}
                    onChange={this.handleDrivable}
                  />
                  Yes
                </label>
              </div>
              <div className="radio">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="false"
                    checked={this.state.drivable === false}
                    onChange={this.handleDrivable}
                  />
                  No
                </label>
              </div>
              <div className="next">
                <input
                  className="btn btn-primary btn-lg"
                  type="submit"
                  value="NEXT"
                />
              </div>
            </form>
          </div>
        </div>
      );
    }

    return <div>{form1}</div>;
  }
}

export default InterestForm;
