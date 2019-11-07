import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import {updateUser} from "../../services/api";
import progress2 from "./progress2.png";
// import './Form2.css';
import FormHeader from "../FormHeader/FormHeader";

const Wrapper = styled.div`
  background-color: #E5EDF2;
  padding: 3vh 20vw 6vh;
  font-size: 1.2vmax;
  >div {
    text-align: center;
    padding: 3vh 0 3vh;
    >img {
      width: auto;
      height: 50px;
    }
  }
`;

const Title = styled.div`
  font-size: 1.5vmax;
  font-weight: 700;
  text-align: center;
  padding: 3vh 0 3vh;
`;

const Text = styled.div`
  width: 100%;
  padding: 1vh 0;
  display: flex;
  flex-direction: column;
  >div {
    padding-bottom: 0.5vh;
    >span {
      font-weight: 700;
    }
  }
  >input {
    width: 80%;
  }
`;

const Radio = styled.div`
  width: 100%;
  padding: 1vh 0;
  >div {
    padding-bottom: 0.5vh;
    >span {
    font-weight: 700;
    }
  }
`;

const Grid1 = styled.div`  
display: grid;
height: 60vh
grid-template-columns: 25vw 25vw;
grid-template-rows: auto;
grid-template-areas: 
"gender language"
"race veteran"
"race healthcare";
justify-content: space-between;
`;

const Gender = styled(Radio)`
grid-area: gender;
`;
const Race = styled(Radio)`
grid-area: race;
`;
const Language = styled(Radio)`
grid-area: language;
`;
const Veteran = styled(Radio)`
grid-area: veteran;
`;
const Healthcare = styled(Radio)`
grid-area: healthcare;
`;

const Grid2 = styled.div`
display: grid;
grid-template-columns: 25vw 25vw;
grid-template-rows: 20vh 20vh auto;
grid-template-areas: 
"people pets"
"vehicle neighborhood"
"parking factors";
justify-content: space-between;
margin-bottom: 6vh;
`;

const Vehicle = styled(Radio)`
grid-area: vehicle;
`;
const People = styled(Text)`
grid-area: people;
`;
const Pets = styled(Text)`
grid-area: pets;
`;
const Parking = styled(Text)`
grid-area: parking;
`;
const Neighborhood = styled(Text)`
grid-area: neighborhood;
`;
const Factors = styled(Radio)`
grid-area: factors;
`;

const Choices = styled.div`
  display: flex;
`;

const Choice = styled.div`
width: 50%;
  >div {padding: 0.5vh 0;}
`;

const Item = styled.div`
  display: flex;
`;

const TextInput = styled.input`
  padding: 5px 10px;
  border: 1px #12679b solid;
  letter-spacing: 1.5px;
  border-radius: 2px;
  color: #12679b;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: #12679B;
    border: 1px solid #12679B;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
`;

const Button = styled(Radio)`
text-align: center;
`;

const Submit = styled.input`
  width: 30%;
  font-size: 1.2vmax;
  padding: 0.6vmax;
  color: white;
  background-color: #12679b;
  text-align: center;
  font-weight: 700;
  border-radius: 30px;
  border: 1px #12679b solid;
  letter-spacing: 1.5px;

  :hover{
    color: #12679b; 
    background-color: transparent; 
    text-decoration: none;
  }

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    width: 30%;
  }
  @media screen and (max-width: 500px) and (orientation: portrait) {
    width: 50%;
    font-size: 1.5vmax;
  }
`;

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
            people: 1,
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

    handlePeople = e => {
        this.setState({people: e.target.value})
    }

    handlePets = e => {
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
            language = (
            <Item>
                <TextInput type="text" required onChange={this.handleLanguage} />
            </Item>
            )
        }
        
        var veteran;
        if(this.state.veteran) {
            veteran = (
            <Healthcare>
            <div><span>Are you healthcare eligible?</span></div>
            <Choices>
            <Choice>
            <Item>
                <RadioButton type="radio" value="Yes"
                checked={this.state.healthcare === "Yes"}
                onChange={this.handleHealthcare} />
                <RadioButtonLabel />
                <div>Yes</div>
            </Item>
            <Item>
                <RadioButton type="radio" value="No"
                checked={this.state.healthcare === "No"}
                onChange={this.handleHealthcare} />
                <RadioButtonLabel />
                <div>No</div>
            </Item>
            </Choice>
            <Choice>
            <Item>
                <RadioButton type="radio" value="Unsure"
                checked={this.state.healthcare === "Unsure"}
                onChange={this.handleHealthcare} />
                <RadioButtonLabel />
                <div>Unsure</div>
            </Item>
            </Choice>
            </Choices>
            </Healthcare>
            )
        }

        var form2;
        if(this.state.completed) {
            form2 = <Redirect to={{ pathname: "/forms/3", state:{id: this.state.userId}}} />
        }
        else {
            form2 =
            <div>
                <FormHeader />
                <Wrapper>
                <div><img src={progress2} /></div>
                <Title>Basic Demographic</Title>
                <form onSubmit={this.handleSubmit}>
                    <Grid1>
                    <Gender>
                    <div><span>Gender</span></div>
                    <Choices>
                    <Choice>
                    <Item>
                        <RadioButton
                        type="radio" value="Male" 
                        checked={this.state.gender === "Male"}
                        onChange={this.handleGender} />
                        <RadioButtonLabel />
                        <div>Male</div>
                    </Item>
                    <Item>
                        <RadioButton  
                        type="radio" value="Female" 
                        checked={this.state.gender === "Female"}
                        onChange={this.handleGender} />
                        <RadioButtonLabel />
                        <div>Female</div>
                    </Item>
                    </Choice>
                    <Choice>
                    <Item>
                        <RadioButton type="radio" value="Other" 
                        checked={this.state.gender === "Other"}
                        onChange={this.handleGender} />
                        <RadioButtonLabel />
                        <div>Other</div>
                    </Item>
                    <Item>
                        <RadioButton type="radio" value="Prefer not to say" 
                        checked={this.state.gender === "Prefer not to say"}
                        onChange={this.handleGender} />
                        <RadioButtonLabel />
                        <div>Prefer not to say</div>
                    </Item>
                    </Choice>
                    </Choices>
                    </Gender>

                    <Race>
                    <div><span>Race & Ethnicity</span></div>
                    <Choices>
                    <Choice>
                    <Item>
                        <RadioButton type="radio" value="African American" 
                        checked={this.state.race === "African American"}
                        onChange={this.handleRace} />
                        <RadioButtonLabel />
                        <div>African American</div>
                    </Item>
                    <Item>
                        <RadioButton type="radio" value="Hispanic/Latino"
                        checked={this.state.race === "Hispanic/Latino"}
                        onChange={this.handleRace} />
                        <RadioButtonLabel />
                        <div>Hispanic/Latino</div>
                    </Item>
                    <Item>
                        <RadioButton type="radio" value="Two or More Races; Other"
                        checked={this.state.race === "Two or More Races; Other"}
                        onChange={this.handleRace} />
                        <RadioButtonLabel />
                        <div>Two or More Races</div>
                    </Item>
                    </Choice>
                    <Choice>
                    <Item>
                        <RadioButton type="radio" value="Asian"
                        checked={this.state.race === "Asian"}
                        onChange={this.handleRace} />
                        <RadioButtonLabel />
                        <div>Asian</div>
                    </Item>
                    <Item>
                        <RadioButton type="radio" value="Caucasian"
                        checked={this.state.race === "Caucasian"}
                        onChange={this.handleRace} />
                        <RadioButtonLabel />
                        <div>Caucasian</div>
                    </Item>
                    <Item>
                        <RadioButton type="radio" value="Middle Eastern"
                        checked={this.state.race === "Middle Eastern"}
                        onChange={this.handleRace} />
                        <RadioButtonLabel />
                        <div>Middle Eastern</div>
                    </Item>
                    </Choice>
                    </Choices>
                    <Item>
                        <RadioButton type="radio" value="Prefer not to say"
                        checked={this.state.race === "Prefer not to say"}
                        onChange={this.handleRace} />
                        <RadioButtonLabel />
                        <div>Prefer not to say</div>
                    </Item>
                    </Race>

                    <Language>
                    <div><span>Preferred language</span></div>
                    <Choices>
                    <Choice>
                    <Item>
                        <RadioButton type="radio" value="English"
                        checked={this.state.language === "English"}
                        onChange={this.handleLanguage} />
                        <RadioButtonLabel />
                        <div>English</div>
                    </Item>
                    <Item>
                        <RadioButton type="radio" value="Spanish"
                        checked={this.state.language === "Spanish"}
                        onChange={this.handleLanguage} />
                        <RadioButtonLabel />
                        <div>Spanish</div>
                    </Item>
                    </Choice>
                    <Choice>
                    <Item>
                        <RadioButton type="radio" value="Other"
                        checked={this.state.language !== "English" && this.state.language !== "Spanish"}
                        onChange={this.handleLanguage} />
                        <RadioButtonLabel />
                        <div>Other</div>
                    </Item>
                        {language}
                    </Choice>
                    </Choices>
                    </Language>

                    <Veteran>
                    <div><span>Are you a veteran ?</span></div>
                    <Item>
                        <RadioButton 
                        type="radio" value="true"
                        checked={this.state.veteran === true} 
                        onChange={this.handleVeteran} />
                        <RadioButtonLabel />
                        <div>Yes</div>
                    </Item>
                    <Item>
                        <RadioButton 
                        type="radio" value="false"
                        checked={this.state.veteran === false} 
                        onChange={this.handleVeteran} />
                        <RadioButtonLabel />
                        <div>No</div>
                    </Item>
                    </Veteran>

                    {veteran}
                    </Grid1>

                    <div><Title>Current Situation</Title></div>
                    
                    <Grid2>
                    <Vehicle>
                    <div><span>What kind of vehicle are you driving ?</span></div>
                    <Choices>
                    <Choice>
                    <Item>
                        <RadioButton type="radio" value="Compact"
                        checked={this.state.vehicleType === "Compact"} 
                        onChange={this.handleVehicleType} />
                        <RadioButtonLabel />
                        <div>Compact</div>
                    </Item>
                    <Item>
                        <RadioButton type="radio" value="SUV"
                        checked={this.state.vehicleType === "SUV"} 
                        onChange={this.handleVehicleType} />
                        <RadioButtonLabel />
                        <div>SUV</div>
                    </Item>
                    </Choice>
                    <Choice>
                    <Item>
                        <RadioButton type="radio" value="Truck"
                        checked={this.state.vehicleType === "Truck"} 
                        onChange={this.handleVehicleType} />
                        <RadioButtonLabel />
                        <div>Truck</div>
                    </Item>
                    <Item>
                        <RadioButton type="radio" value="RV"
                        checked={this.state.vehicleType === "RV"} 
                        onChange={this.handleVehicleType} />
                        <RadioButtonLabel />
                        <div>RV</div>
                    </Item>
                    </Choice>
                    </Choices>
                    </Vehicle>

                    <People>
                    <div><span>How many people live in the vehicle including yourself ?</span></div>
                    <Item>
                        <TextInput type="number" value={this.state.people} onChange={this.handlePeople} />
                    </Item>
                    </People>

                    <Pets>
                    <div><span>Do any pets live in the vehicle ?</span></div>
                    <Item>
                        <TextInput type="number" value={this.state.pets} onChange={this.handlePets}/>
                    </Item>
                    </Pets>

                    <Parking>
                    <div><span>Current night parking situation:</span></div>
                    <div>Please be as specific as possible</div>
                    <Item><TextInput type="text" name="street" placeholder="Street" onChange={this.handleParking}/></Item>
                    <Item><TextInput type="text" name="city" placeholder="City" onChange={this.handleParking}/></Item>
                    <Item><TextInput type="text" name="zip" placeholder="Zip" onChange={this.handleParking}/></Item>
                    <div><span>Other;</span> explain:</div>
                    <Item><TextInput type="text" name="other" placeholder="Other" onChange={this.handleParking}/></Item>
                    </Parking>

                    <Neighborhood>
                    <div><span>What is your desired neighborhood ?</span></div>
                    <Item><TextInput type="text" name="desired" onChange={this.handleNeighborhood}/></Item>
                    </Neighborhood>
                    
                    <Factors>
                    <div><span>What factors are associated with your chosen neighborhood ?</span></div> 
                    <div>*Select all that apply</div>
                    <Item>
                        <RadioButton type="checkbox" name="work" onChange={this.handleNeighborhood} />
                        <RadioButtonLabel />
                        <div>Work</div>
                    </Item>
                    <Item>
                        <RadioButton type="checkbox" name="school" onChange={this.handleNeighborhood} />
                        <RadioButtonLabel />
                        <div>School</div>
                    </Item>
                    <Item>
                        <RadioButton type="checkbox" name="family" onChange={this.handleNeighborhood} />
                        <RadioButtonLabel />
                        <div>Family / Friends</div>
                    </Item>
                    <div>Other; brief explanation:</div>
                    <Item><TextInput type="text" name="other" onChange={this.handleNeighborhood} /></Item>
                    </Factors>
                    </Grid2>
                    <Button><Submit type="submit" value="NEXT" /></Button>
                </form>
                </Wrapper>
            </div>;
        }

         return (<div>{form2}</div>);
    }
}


export default Form2;