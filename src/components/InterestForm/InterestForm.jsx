import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import {createUser} from "../../services/api";

import './InterestForm.css';

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
            drivable: true
        }
    }

    handleChange = e => {
        // this.props.updateMessage("");
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    handleDriverStatus = e => {
        this.setState({
            driverStatus: e.target.value
        })
    }

    handleDrivable = e => {
        this.setState({drivable: this.strToBool(e.target.value)
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('submit button hit')
        // this.isFormValid() ? 
        createUser(this.state).then(() => {
            window.location = '/form2'
        });
    }

    // isFormValid() {
    //     return 
    // }

    strToBool = (value) => {
        if (value && typeof value === 'string') {
          if (value.toLowerCase() === "true") return true;
          if (value.toLowerCase() === "false") return false;
        }
        return value;
     }

    render () {

        var driverIdInput;
        if(this.state.driverStatus && this.state.driverStatus !== 'Lost or Stolen') {
            driverIdInput = 
            <div>
                <label>Driver's License #
                <input type="text" required name="driverId" onChange={this.handleChange}/>
                </label>
            </div>
        }
        return (
            <div>
                <div>INTEREST FORM</div>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, magnam dolor doloribus excepturi quis obcaecati corrupti vero delectus consequuntur nam quod perspiciatis voluptatem repellendus reiciendis nostrum dolore nihil sequi ducimus.</div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Applicant. First and last name of the vehicle driver.
                            <input type="text" required name="applicant" onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div>
                            <label>Date of Birth
                            <input type="date" required name="birth" onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div>
                            <label>Phone Number
                            <input type="text" required name="phone" onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div>
                            <label>Email Address
                            <input type="text" required name="email" onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div className="radio">
                            Driver's License Status:
                        <label>
                            <input type="radio" value="Valid" 
                                        checked={this.state.driverStatus === 'Valid'} 
                                        onChange={this.handleDriverStatus} />
                            Valid
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="Expired" 
                                        checked={this.state.driverStatus === 'Expired'} 
                                        onChange={this.handleDriverStatus} />
                            Expired
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="Suspended" 
                                        checked={this.state.driverStatus === 'Suspended'} 
                                        onChange={this.handleDriverStatus} />
                            Suspended
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="Lost or Stolen" 
                                        checked={this.state.driverStatus === 'Lost or Stolen'} 
                                        onChange={this.handleDriverStatus} />
                            Lost or Stolen
                        </label>
                        </div>
                        {driverIdInput}
                        <div className="radio">
                            Is your vehicle driveable ?
                        <label>
                            <input type="radio" value="true"
                                        checked={this.state.drivable === true} 
                                        onChange={this.handleDrivable} />
                            Yes
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="false"
                                        checked={this.state.drivable === false} 
                                        onChange={this.handleDrivable} />
                            No
                        </label>
                        </div>
                        <input type="submit" value="NEXT" />
                    </form>
                </div>
            </div>
        ) 
    }
}



export default InterestForm;