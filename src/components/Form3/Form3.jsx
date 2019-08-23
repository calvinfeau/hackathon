import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {updateUser} from "../../services/api"

class Form3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employerLocation: "",
      otherIncome: "",
      govIncome: {
        calworks: false,
        cashProgImmigrants: false,
        ebt: false,
        gr: false,
        medIncome: false,
        other: ""
      }
    };
  }

  componentDidMount() {
    var self = this;
    var userId = this.props.location.state.id;
    self.setState({userId: userId})
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleEmployment = e => {
    this.setState({ employed: this.strToBool(e.target.value) });
  };

  handleGovAssistance = e => {
    this.setState({ govAssistance: this.strToBool(e.target.value) });
  };

  handleGovIncome = e => {
    this.setState({ govIncome:{[e.target.name]: e.target.value}});
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit button hit')
    updateUser(this.state);
    this.setState({completed: true})
  }

  strToBool = value => {
    if (value && typeof value === "string") {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
    }
    return value;
  };

  render() {
    var employed;
    if(this.state.employed) {
      employed = 
      <div>
          <div className="form-group">
            <label className="form-check-label">
              Where is your employer located?
            <input
              className="form-control"
              type="text"
              name="employerLocation"
              onChange={this.handleChange}
              />
              </label>
          </div>
            <div className="form-group">
            <label className="form-check-label">
              Please list any other sources of income.
            </label>
            <textarea
              className="form-control"
              name="otherIncome"
              rows="3"
              onChange={this.handleChange}
            />
          </div>
      </div>
    }

    var gov;
    if(this.state.govAssistance) {
      gov = 
          <div className="form-group">

            <div>
              <p>Please select all that apply.</p>
            </div>
            <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                name="calworks"
                onChange={this.handleGovIncome}
              />
              CalWorks</label>
            </div>
            <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                name="cashProgImmigrants"
                onChange={this.handleGovIncome}
              />
                Cash Assistance Program for Immigrants
              </label>
            </div>
            <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                name="ebt"
                onChange={this.handleGovIncome}
              />
                Electronic Benefit Transfer (EBT)
              </label>
            </div>
            <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                name="gr"
                onChange={this.handleGovIncome}
              />
              General Relief (GR)</label>
            </div>
            <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                name="medIncome"
                onChange={this.handleGovIncome}
              />
                Supplemental Security Income Medi- Cal Advocacy Program
              </label>
              <div>
                <label className="form-check-label">
                  Please list any other sources of income.
                <textarea
                  className="form-control"
                  rows="3"
                  name="other"
                  onChange={this.handleChange}
                />
                </label>
              </div>
          </div>
        </div>
    }

    var form3;
    if(this.state.completed) {
        form3 = <Redirect to={{pathname: '/forms/4', state:{id: this.state.userId}}} />
    }
    else {
        form3 =
      <div>
        <div>
        <h3>INTEREST FORM</h3>
      </div>
      <div className="copy-top">
        <p id="p1">
          This form is the first step in the application process for a Safe
          Parking LA program.
        </p>
        <p id="p2">
          Please fill out <span>ALL</span>of the following information so we
          can best assist your specific needs.
        </p>
      </div>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <p>Are you currently employed?</p>
          <div>
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="radio"
              value="true"
              checked={this.state.employed === true}
              onChange={this.handleEmployment}
            />
            Yes</label>
          </div>
          <div className="form-group">
            <input
              className="form-check-input"
              type="radio"
              value="false"
              checked={this.state.employed === false}
              onChange={this.handleEmployment}
            />
            <label className="form-check-label">No</label>
          </div>
        </div>

        {employed}

        <div className="form-group">
          <p>
            Are you currently recieving any form of government assistance?
          </p>
          <div>
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="radio"
              value="true"
              checked={this.state.govAssistance === true}
              onChange={this.handleGovAssistance}
            />
            Yes</label>
          </div>
          <div className="form-group">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="radio"
              value="false"
              checked={this.state.govAssistance === false}
              onChange={this.handleGovAssistance}
            />
            No</label>
          </div>
        </div>

        {gov}

        <input
          className="btn btn-primary btn-lg"
          type="submit"
          value="NEXT"
        />
      </form>
      </div>
    }
    return (
      <div>
        {form3}
      </div>
    )
  }
}

export default Form3;
