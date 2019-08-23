import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Form4.css";

class Form4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
        <form id="form-4">
          <h3 className="secondary-header">Origin</h3>
          <div className="form-group form-4">
            <p>
              What are the main reasons for your current situation?{" "}
              <span>*Select All That Apply</span>
            </p>
            <div className="checkbox1">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Loss of Job"
                />
                <label className="form-check-label">Loss of Job</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Bills Higher than Earning"
                />
                <label className="form-check-label">
                  Bills Higher than Earning
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Eviction"
                />
                <label className="form-check-label">Eviction</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Abuse at Home"
                />
                <label className="form-check-label">Abuse at Home</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Incarceration"
                />
                <label className="form-check-label">Incarceration</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Sick/Disabled/Mental Illness"
                />
                <label className="form-check-label">
                  Sick/Disabled/Mental Illness
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Change in Family Status"
                />
                <label className="form-check-label">
                  Change in Family Status
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Substance Abuse"
                />
                <label className="form-check-label">Substance Abuse</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Lack of Affordable Housing"
                />
                <label className="form-check-label">
                  Lack of Affordable Housing
                </label>
              </div>
            </div>
            <div className="form-check other-box1" id="other-box1">
              <label className="form-check-label otherLabels">
                Other;{" "}
                <span className="fine-print">Please list Specific Reasons</span>
              </label>
              <textarea
                id="other-box"
                className="form-control other-box"
                rows="3"
              />
            </div>
            <div className="form-check other-box1">
              <label className="form-check-label otherLabels">
                Tell us your story in as much or as little detail as you feel
                comfortable sharing.
              </label>
              <textarea className="form-control other-box" rows="3" />
            </div>
            <div className="form-check">
              <h3 className="secondary-header">As It Stands</h3>
              <p>How long have you been sleeping in your vehicle?</p>
              <div className="vehicle-box">
                <div>
                  <input
                    type="radio"
                    value="Less than a month"
                    className="form-check-input"
                  />
                  <label className="form-check-label">Less than a month</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="Between two and six months"
                    className="form-check-input"
                  />
                  <label className="form-check-label">
                    Between two and six months
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="Six months to one year"
                    className="form-check-input"
                  />
                  <label className="form-check-label">
                    Six months to one year
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="More than one year"
                    className="form-check-input"
                  />
                  <label className="form-check-label">More than one year</label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-check-label">
                  Approximate start date of homelessness
                </label>
                <input type="date" className="form-control" />
              </div>
              <div className="form-check">
                <div className="test">
                  <p>
                    Do you have any major or immediate health concerns?
                    <span>*Select All That Apply</span>
                  </p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="None"
                    />
                    <label className="form-check-label">None</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Pregnancy"
                    />
                    <label className="form-check-label">Pregnancy</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Handicapped/Disabled"
                    />
                    <label className="form-check-label">
                      Handicapped/Disabled
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      Other;{" "}
                      <span className="fine-print">
                        Please list Specific Reasons
                      </span>
                    </label>
                    <textarea className="form-control" rows="3" />
                  </div>
                </div>
                <div className="emerg">
                  <div className="form-group emerg-grp">
                    <h3>Emergency Contact</h3>
                    <label className="form-check-label">
                      First, Last name:
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group emerg-grp">
                    <label className="form-check-label">Relationship:</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group emerg-grp">
                    <label className="form-check-label">Phone number:</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group emerg-grp">
                    <label className="form-check-label">Email:</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <input
                  className="btn btn-primary btn-lg"
                  type="submit"
                  value="NEXT"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form4;
