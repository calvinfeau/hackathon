import React, { Component } from "react";
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
            drivable: null
        }
    }

    handleChange = e => {
        // this.props.updateMessage("");
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    render () {
        return (
            <div>
                <div>INTEREST FORM</div>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, magnam dolor doloribus excepturi quis obcaecati corrupti vero delectus consequuntur nam quod perspiciatis voluptatem repellendus reiciendis nostrum dolore nihil sequi ducimus.</div>
                <div>
                    <form>
                        <div>
                            <label>Applicant <br>First and last name of the vehicle driver.</br>
                            <input type="text"/>
                            </label>
                        </div>
                        <div>
                            <label>Date of Birth
                            <input type="date"/>
                            </label>
                        </div>
                        <div>
                            <label>Phone Number
                            <input type="text"/>
                            </label>
                        </div>
                        <div>
                            <label>Email Address
                            <input type="text"/>
                            </label>
                        </div>
                        <div>
                            <label>Driver's License #
                            <input type="text"/>
                            </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="Valid" 
                                        checked={this.state.driverStatus === 'Valid'} 
                                        onChange={this.handleOptionChange} />
                            Valid
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="Expired" 
                                        checked={this.state.driverStatus === 'Expired'} 
                                        onChange={this.handleOptionChange} />
                            Expired
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="Suspended" 
                                        checked={this.state.driverStatus === 'Suspended'} 
                                        onChange={this.handleOptionChange} />
                            Suspended
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="Lost or Stolen" 
                                        checked={this.state.driverStatus === 'Lost or Stolen'} 
                                        onChange={this.handleOptionChange} />
                            Lost or Stolen
                        </label>
                        </div>
                    </form>
                </div>
            </div>
        ) 
    }
}



export default InterestForm;