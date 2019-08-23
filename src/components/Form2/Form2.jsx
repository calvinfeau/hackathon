import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {updateUser} from "../../services/api"
import './Form2.css';


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
                work: false,
                school: false,
                family: false,
                other: ""
                
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
        let property = e.target;
        this.setState(prevState => ({...prevState, currParking: {...prevState.currParking, [property.name]: this.strToBool(property.value)}}))
    }

    handleNeighborhood = e => {
        let property = e.target;
        this.setState(prevState => ({...prevState, neighborhood: {...prevState.neighborhood, [property.name]: this.strToBool(property.value)}}))
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
            <div className="wrap-form2">
                <form className="form-2" onSubmit={this.handleSubmit}>
                    <div>
                        <h2 className="form-2-head">Basic Demographic</h2>
                    </div>
                    <div>
                        <p>Gender:</p>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="Male" 
                            checked={this.state.gender === "Male"}
                            onChange={this.handleGender} />
                            Male
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label">
                            <input className="form-check-input"  type="radio" value="Female" 
                            checked={this.state.gender === "Female"}
                            onChange={this.handleGender} />
                            Female
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="Other" 
                            checked={this.state.gender === "Other"}
                            onChange={this.handleGender} />
                            Other
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="Prefer not to say" 
                            checked={this.state.gender === "Prefer not to say"}
                            onChange={this.handleGender}/>
                            Prefer not to say
                        </label>
                    </div>

                    <div>
                        <p>Race & Ethnicity:</p>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="African American" 
                            checked={this.state.race === "African American"}
                            onChange={this.handleRace} />
                            African American
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="Asian"
                            checked={this.state.race === "Asian"}
                            onChange={this.handleRace} />
                            Asian
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="Hispanic/Latino"
                            checked={this.state.race === "Hispanic/Latino"}
                            onChange={this.handleRace} />
                            Hispanic/Latino
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label"> 
                            <input className="form-check-input" type="radio" value="Caucasian"
                            checked={this.state.race === "Caucasian"}
                            onChange={this.handleRace} />
                            Caucasian
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="Middle Eastern"
                            checked={this.state.race === "Middle Eastern"}
                            onChange={this.handleRace} />
                            Middle Eastern
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="Two or More Races; Other"
                            checked={this.state.race === "Two or More Races; Other"}
                            onChange={this.handleRace} />
                            Two or More Races; Other
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="Prefer not to say"
                            checked={this.state.race === "Prefer not to say"}
                            onChange={this.handleRace} />
                            Prefer not to say
                        </label>
                    </div>

                    <div>
                        <p>Preferred language:</p>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="English"
                            checked={this.state.language === "English"}
                            onChange={this.handleLanguage} />
                            English
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="Spanish"
                            checked={this.state.language === "Spanish"}
                            onChange={this.handleLanguage} />
                            Spanish
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="Other"
                            checked={this.state.language !== "English" && this.state.language !== "Spanish"}
                            onChange={this.handleLanguage} />
                            Other
                        </label>
                    </div>

                    {language}

                    <div>
                        <p>Are you a veteran ?</p>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="true"
                                checked={this.state.veteran === true} 
                                onChange={this.handleVeteran} />
                            Yes
                        </label>
                    </div>
                    <div className="radio">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="false"
                                checked={this.state.veteran === false} 
                                onChange={this.handleVeteran} />
                            No
                        </label>
                    </div>

                    {veteran}
                    
                    <div>Current Situation</div>

                    <div>
                        <p>What kind of vehicle are you driving?</p>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="Compact"
                            checked={this.state.vehicleType === "Compact"} 
                            onChange={this.handleVehicleType} />
                            Compact
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="SUV"
                            checked={this.state.vehicleType === "SUV"} 
                            onChange={this.handleVehicleType} />
                            SUV
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="Truck"
                            checked={this.state.vehicleType === "Truck"} 
                            onChange={this.handleVehicleType} />
                            Truck
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" value="RV"
                            checked={this.state.vehicleType === "RV"} 
                            onChange={this.handleVehicleType} />
                            RV
                        </label>
                    </div>

                    <div className="num-people">
                        <p>How many people live in the vehicle including yourself?</p>
                        {/* <label>
                            <input type="radio" value="false"
                            checked={this.state.extraPeople === false} 
                            onChange={this.handleExtraPeople} />
                            Just myself
                        </label> */}
                        <input className="form-control"  id="num-people" type="number" value={this.state.people} onChange={this.handlePeople} />
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
                        <p>
                            Do any pets live in the vehicle?
                        </p>
                        {/* <label>
                            <input type="radio" value="true"
                            checked={this.state.pets === true} 
                            onChange={this.handlePets} />
                            Yes
                        </label> */}
                        <input className="form-control" type="number" value={this.state.pets} onChange={this.handlePets}/>
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
                        <p>

                        Current night parking situation:
                        Please be as specific as possible
                        </p>
                        <input className="form-control" type="text" name="street" placeholder="Street" onChange={this.handleParking}/>
                        <input className="form-control" type="text" name="city" placeholder="City" onChange={this.handleParking}/>
                        <input className="form-control" type="text" name="zip" placeholder="Zip" onChange={this.handleParking}/>
                        Other; explain:
                        <input className="form-control" type="text" name="other" placeholder="Other" onChange={this.handleParking}/>
                    </div>

                    <div>
                        <label>What is your desired neighborhood?
                        <input className="form-control" type="text" name="desired" onChange={this.handleNeighborhood}/>
                        </label>
                    </div>

                    <div>
                        <p>

                        What factors are associated with your chosen neighborhood? *Select all that apply
                        </p>
                        <label>
                        <input className="form-check-input" type="checkbox" name="work" onChange={this.handleNeighborhood} />
                        Work
                        </label>
                    </div>
                    <div>
                        <label>
                        <input className="form-check-input" type="checkbox" name="school" onChange={this.handleNeighborhood} />
                        School
                        </label>
                    </div>
                    <div>
                        <label>
                        <input className="form-check-input" type="checkbox" name="family" onChange={this.handleNeighborhood} />
                        Family/Friends
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>

                                Other; brief explanation:
                            </p>
                        <input className="form-control" type="text" name="other" onChange={this.handleNeighborhood} />
                        </label>
                    </div>
                    <input className="btn btn-primary btn-lg btn-form2" type="submit" value="NEXT" />
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