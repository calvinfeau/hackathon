import React, { Component } from "react";

class Form3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employed: false,
      otherIncome: "",
      govAsistance: false,
      govIncome: "",
      employerLocation: ""
    };
  }

  handleChange = e => {
    // this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleEmployment = e => {
    this.setState({ employed: this.strToBool(e.target.value) });
  };

  handleGovAsistance = e => {
    this.setState({ govAsistance: this.strToBool(e.target.value) });
  };

  handleGovIncome = e => {
    this.setState({ govIncome: e.target.value });
  };

  strToBool = value => {
    if (value && typeof value === "string") {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
    }
    return value;
  };

  render() {
    return (
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
        <form>
          <div className="form-group">
            <p>Are you currently employed?</p>
            <div>
              <input
                className="form-check-input"
                type="radio"
                value="option1"
                checked={this.state.employed === true}
                onChange={this.handleEmployment}
              />
              <label className="form-check-label">Yes</label>
            </div>
            <div className="form-group">
              <input
                className="form-check-input"
                type="radio"
                value="option1"
                checked={this.state.employed === false}
                onChange={this.handleEmployment}
              />
              <label className="form-check-label">No</label>
            </div>
          </div>
          <div className="form-group">
            <label className="form-check-label">
              Where is your employer located?
            </label>
            <input
              className="form-control"
              type="text"
              name="employerLocation"
              onChange={this.handleChange}
            />
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
          <div className="form-group">
            <p>
              Are you currently recieving any form of government assistance?
            </p>
            <div>
              <input
                className="form-check-input"
                type="radio"
                value="option1"
                checked={this.state.govAsistance === true}
                onChange={this.handleGovAsistance}
              />
              <label className="form-check-label">Yes</label>
            </div>
            <div className="form-group">
              <input
                className="form-check-input"
                type="radio"
                value="option1"
                checked={this.state.govAsistance === false}
                onChange={this.handleGovAsistance}
              />
              <label className="form-check-label">No</label>
            </div>
          </div>
          <div className="form-group">
            <div>
              <p>Please select all that apply.</p>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value="CalWorks"
                checked={this.state.govIncome === "CalWorks"}
                onChange={this.handleGovIncome}
              />
              <label className="form-check-label">CalWorks</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value=""
                checked={
                  this.state.govIncome ===
                  "Cash Asisstance Program for Immigrants"
                }
                onChange={this.handleGovIncome}
              />
              <label className="form-check-label">
                Cash Assistance Program for Immigrants
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value=""
                checked={
                  this.state.govIncome === "Electronic Benefit Transfer (EBT)"
                }
                onChange={this.handleGovIncome}
              />
              <label className="form-check-label">
                Electronic Benefit Transfer (EBT)
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value=""
                checked={this.state.govIncome === "General Relief"}
                onChange={this.handleGovIncome}
              />
              <label className="form-check-label">General Relief (GR)</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value=""
                checked={
                  this.state.govIncome ===
                  "Supplemental Security Income Medi- Cal Advocacy Program"
                }
                onChange={this.handleGovIncome}
              />
              <label className="form-check-label">
                Supplemental Security Income Medi- Cal Advocacy Program
              </label>
              <div>
                <label className="form-check-label">
                  Please list any other sources of income.
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <input
            className="btn btn-primary btn-lg"
            type="submit"
            value="NEXT"
          />
        </form>
      </div>
    );
  }
}

export default Form3;
