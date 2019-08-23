import React, { Component } from "react";
import { Redirect } from "react-router-dom";


class Form2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            gender: "",
            race: "",
            language: "",
            veteran: false,
            healthcareEligible: "",
            vehicleType: "",
            people: [],
            pet: [],
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

    handleGender = e => {
        this.setState({gender: e.target.value})
    }

    handleLanguage = e => {
        this.setState({language: e.target.value})
    }

    handleRace = e => {

    }

    handleVeteran = e => {
        this.setState({veteran: this.strToBool(e.target.value)})
    }

    strToBool = (value) => {
        if (value && typeof value === 'string') {
          if (value.toLowerCase() === "true") return true;
          if (value.toLowerCase() === "false") return false;
        }
        return value;
    }

    render() {

        var language;
        if(this.state.language === "Other") {
            language = 
            <div>
                <label>
                    <input type="text" onChange={this.handleLanguage}></input>
                </label>
            </div>
        }

        var veteran;
        if(this.state.veteran) {
            veteran = 
            <div>
            <div>
                Are you healthcare eligible?
                <label>
                    <input type="radio" value="Yes"
                    checked= />
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
        if(this.state.people) {
            people = 
            <div>
                <div>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Age" />
                </div>
            </div>
        }

        var pets;

        var form2;
        if(this.state.completed) {
            form2 = <Redirect to={{pathname: '/forms/3', state:{id: this.state.userId}}} />
        }
        else {
            form2 =
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>Basic Demographic</div>
                    <div>Gender:
                        <label>
                            <input type="radio" value="Male" 
                            checked={this.state.gender === "Male"}
                            onChange={this.handleGender} />
                            Male
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Female" 
                            checked={this.state.gender === "Female"}
                            onChange={this.handleGender} />
                            Female
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Other" 
                            checked={this.state.gender === "Other"}
                            onChange={this.handleGender} />
                            Other
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Prefer not to say" 
                            checked={this.state.gender === "Prefer not to say"}
                            onChange={this.handleGender}/>
                            Prefer not to say
                        </label>
                    </div>

                    <div>Race & Ethnicity:
                        <label>
                            <input type="radio" value="African American" 
                            checked={this.state.race === "African American"}
                            onChange={this.handleRace} />
                            African American
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Asian"
                            checked={this.state.race === "Asian"}
                            onChange={this.handleRace} />
                            Asian
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Hispanic/Latino"
                            checked={this.state.race === "Hispanic/Latino"}
                            onChange={this.handleRace} />
                            Hispanic/Latino
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Caucasian"
                            checked={this.state.race === "Caucasian"}
                            onChange={this.handleRace} />
                            Caucasian
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Middle Eastern"
                            checked={this.state.race === "Middle Eastern"}
                            onChange={this.handleRace} />
                            Middle Eastern
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Two or More Races; Other"
                            checked={this.state.race === "Two or More Races; Other"}
                            onChange={this.handleRace} />
                            Two or More Races; Other
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Prefer not to say"
                            checked={this.state.race === "Prefer not to say"}
                            onChange={this.handleRace} />
                            Prefer not to say
                        </label>
                    </div>

                    <div>
                        Preferred language:
                        <label>
                            <input type="radio" value="English"
                            checked={this.state.language === "English"}
                            onChange={this.handleLanguage} />
                            English
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Spanish"
                            checked={this.state.language === "Spanish"}
                            onChange={this.handleLanguage} />
                            Spanish
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Other"
                            checked={this.state.language === "Other"}
                            onChange={this.handleLanguage} />
                            Other
                        </label>
                    </div>

                    {language}

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

                    {veteran}
                    
                    <div>Current Situation</div>

                    <div>
                        What kind of vehicle are you driving?
                        <label>
                            <input type="radio" value="Compact"/>
                            Compact
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="SUV"/>
                            SUV
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Truck"/>
                            Truck
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="RV"/>
                            RV
                        </label>
                    </div>

                    <div>
                        How many people live in the vehicle?
                        <label>
                            <input type="radio" value="false" />
                            Just myself
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="false" />
                            Others with me
                        </label>
                    </div>
                    {people}
                    <div onClick={}>Add More</div>
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