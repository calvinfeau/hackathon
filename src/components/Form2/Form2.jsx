import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {updateUser} from "../../services/api"


class Form2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            gender: "",
            race: "",
            language: "English",
            veteran: false,
            healthcare: "",
            vehicleType: "",
            // extraPeople: false,
            people: 1,
            // extraPets: false,
            pets: 0,
            currParking: {
                street: "",
                city: "",
                zip: "",
                other: ""
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
        this.setState({race: e.target.value})
    }

    handleHealthcare = e => {
        this.setState({healthcare: e.target.value})
    }

    handleVehicleType = e => {
        this.setState({vehicleType: e.target.value})
    }

    handleVeteran = e => {
        this.setState({veteran: this.strToBool(e.target.value)})
    }

    // handleExtraPeople = e => {
    //     this.setState({extraPeople: this.strToBool(e.target.value)})
    // }

    // addPeopleField() {
    //     return (
    //         <div>
    //         <fieldset name="People">
    //             <input type="text" name="Name" placeholder="Name" onChange={this.handlePeople} />
    //             <input type="text" name="Age" placeholder="Age" onChange={this.handlePeople} />
    //         </fieldset>
    //         <div onClick={this.addPeopleField}>Add More</div>
    //         </div>
    //     )
    // }

    handlePeople = e => {
        // let person = {name: "", age: ""};
        // let peopleArray = [];
        // person = {[e.target.name]: e.target.value}
        // if (person.name && person.age) {
        //     peopleArray.push(person)}
        this.setState({people: e.target.value})
    }

    // handleExtraPets = e => {
    //     this.setState({extraPets: this.strToBool(e.target.value)})
    // }

    // addPetField() {
    //     return (
    //         <div>
    //         <fieldset name="Pet">
    //             <input type="text" name="kind" placeholder="What kind?" onChange={this.handlePets} />
    //             <input type="text" name="Age" placeholder="Qty" onChange={this.handlePets} />
    //         </fieldset>
    //         <div onClick={this.addPeopleField}>Add More</div>
    //         </div>
    //     )
    // }

    handlePets = e => {
        // let petsArray = [];
        // if (e.target.value) {petsArray.push({[e.target.name]: e.target.value})}
        this.setState({pets: e.target.value})
    }

    handleParking = e => {
        this.setState({currParking: {[e.target.name]: this.strToBool(e.target.value)}})
    }

    handleNeighborhood = e => {
        this.setState({neighborhood: {[e.target.name]: e.target.value}})
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('submit button hit')
        updateUser(this.state);
        this.setState({completed: true})
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
        if(this.state.language !== "English" && this.state.language !== "Spanish") {
            language = 
            <div>
                <label>
                    <input type="text" required onChange={this.handleLanguage} />
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
                    checked={this.state.healthcare === "Yes"}
                    onChange={this.handleHealthcare}  />
                    Yes
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" value="No"
                    checked={this.state.healthcare === "No"}
                    onChange={this.handleHealthcare}  />
                    No
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" value="Unsure"
                    checked={this.state.healthcare === "Unsure"}
                    onChange={this.handleHealthcare}  />
                    Unsure
                </label>
            </div>
            </div>
        }

        // var people;
        // if(this.state.extraPeople) {
        //     people = this.addPeopleField();
        // }

        // var pets;
        // if(this.state.extraPets) {
        //     pets = this.addPetField();
        // }

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
                            checked={this.state.language !== "English" && this.state.language !== "Spanish"}
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
                            <input type="radio" value="Compact"
                            checked={this.state.vehicleType === "Compact"} 
                            onChange={this.handleVehicleType} />
                            Compact
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="SUV"
                            checked={this.state.vehicleType === "SUV"} 
                            onChange={this.handleVehicleType} />
                            SUV
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="Truck"
                            checked={this.state.vehicleType === "Truck"} 
                            onChange={this.handleVehicleType} />
                            Truck
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="RV"
                            checked={this.state.vehicleType === "RV"} 
                            onChange={this.handleVehicleType} />
                            RV
                        </label>
                    </div>

                    <div>
                        How many people live in the vehicle including yourself?
                        {/* <label>
                            <input type="radio" value="false"
                            checked={this.state.extraPeople === false} 
                            onChange={this.handleExtraPeople} />
                            Just myself
                        </label> */}
                        <input type="number" value={this.state.people} onChange={this.handlePeople} />
                    </div>
                    {/* <div>
                        <label>
                            <input type="radio" value="true"
                            checked={this.state.extraPeople === true} 
                            onChange={this.handleExtraPeople} />
                            Others with me
                        </label>
                    </div> */}

                    {/* {people} */}

                    <div>
                        Do any pets live in the vehicle?
                        {/* <label>
                            <input type="radio" value="true"
                            checked={this.state.pets === true} 
                            onChange={this.handlePets} />
                            Yes
                        </label> */}
                        <input type="number" value={this.state.pets} onChange={this.handlePets}/>
                    </div>

                    {/* {pets} */}

                    {/* <div>
                        <label>
                            <input type="radio" value="false"
                            checked={this.state.pets === false} 
                            onChange={this.handlePets} />
                            No
                        </label>
                    </div>                     */}
                    <div>
                        Current night parking situation:
                        Please be as specific as possible
                        <input type="text" name="street" placeholder="Street" onChange={this.handleParking}/>
                        <input type="text" name="city" placeholder="City" onChange={this.handleParking}/>
                        <input type="text" name="zip" placeholder="Zip" onChange={this.handleParking}/>
                        Other; explain:
                        <input type="text" name="other" placeholder="Other" onChange={this.handleParking}/>
                    </div>

                    <div>
                        <label>What is your desired neighborhood?
                        <input type="text" name="desired" onChange={this.handleNeighborhood}/>
                        </label>
                    </div>

                    <div>
                        What factors are associated with your chosen neighborhood? *Select all that apply
                        <label>
                        <input type="radio" name="work" onChange={this.handleNeighborhood} />
                        Work
                        </label>
                    </div>
                    <div>
                        <label>
                        <input type="radio" name="school" onChange={this.handleNeighborhood} />
                        School
                        </label>
                    </div>
                    <div>
                        <label>
                        <input type="radio" name="family" onChange={this.handleNeighborhood} />
                        Family/Friends
                        </label>
                    </div>
                    <div>
                        <label>
                        Other; brief explanation:
                        <input type="text" name="other" onChange={this.handleNeighborhood} />
                        </label>
                    </div>
                    <input type="submit" value="NEXT" />
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