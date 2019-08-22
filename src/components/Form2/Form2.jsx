import React, { Component } from "react";
import { Redirect } from "react-router-dom";


class Form2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            gender: "",
            race: "",
            language: "",
            veteran: "",
            healthcareEligible: "",
            vehicleType: "",
            people: {
                myself: false,
                others: []
            },
            currParking: {
                street: "",
                city: "",
                zip: ""
            },
            neighborhood: {
                desired: "",
                factors: {
                    work: false,
                    school: false,
                    family: false,
                    other: ""
                }
            }
        }
    }

    componentDidMount() {
        var self = this;
        var userId = this.props.location.state.id;
        self.setState({userId: userId})
    }

    render() {
        var veteran;
        if(this.state.veteran) {
            veteran = 
            <div>

            
            <div>
                Are you healthcare eligible?
                <label>
                    <input type="radio" value="Yes" />
                    Yes
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" value="No" />
                    No
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" value="Unsure" />
                    Unsure
                </label>
            </div>
            </div>
        }
        var people;

        var form2;
        if(this.state.completed) {
            form2 = <Redirect to={{pathname: '/forms/3', state:{id: this.state.userId}}} />
        }
        else {
            form2 =
            <div>
                <form onSubmit={}>
                    <div>Gender:
                        <label>
                            <input type="radio" value="Male" />
                            Male
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Female" />
                            Female
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Other" />
                            Other
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Prefer not to say" />
                            Prefer not to say
                        </label>
                    </div>

                    <div>Race & Ethnicity:
                        <label>
                            <input type="radio" value="African American" />
                            African American
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Asian" />
                            Asian
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Hispanic/Latino" />
                            Hispanic/Latino
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Caucasian" />
                            Caucasian
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Middle Eastern" />
                            Middle Eastern
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Two or More Races; Other" />
                            Two or More Races; Other
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Prefer not to say" />
                            Prefer not to say
                        </label>
                    </div>
                    <div>
                        Preferred language:
                        <label>
                            <input type="radio" value/>
                            English
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" />
                            Spanish
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" />
                            Other
                        </label>
                    </div>

                    <div>
                        Are you a veteran ?
                        <label>
                            <input type="radio" value="true"
                                checked={this.state.veteran === true} 
                                onChange={this.handleVeteran} />
                            Yes
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="false"
                                checked={this.state.veteran === false} 
                                onChange={this.handleVeteran} />
                            No
                        </label>
                    </div>
                    {}
                </form>

            </div>
        }

         return (
             <div>
                 {form2}
             </div>
         )
    }
}


export default Form2;