import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {updateUser} from "../../services/api";
import styled from "styled-components";
import progress4 from "./progress4.png";
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
  >form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    padding: 0 20vw 3vh;
    font-size: 1.5vmax;
  }
  @media screen and (max-width: 500px) and (orientation: portrait) {
    padding: 3vh 20vw;
    >div {
      >img {
        width: auto;
        height: 25px;
      }
    }
  }
`;

const Title = styled.div`
  font-size: 1.5vmax;
  font-weight: 700;
  text-align: center;
  padding: 3vh 0 3vh;

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    font-size: 2vmax;
  }
`;

const Text = styled.div`
  width: 75%;
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
    width: 100%;
  }

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    width: 100%;
    >input {
      width: 75%;
    }
    >div {
      padding-bottom: 1vh;
    }  
  }
  @media screen and (max-width: 500px) and (orientation: portrait) {
    width: 100%;
  }
`;

const Radio = styled.div`
  width: 75%;
  padding: 1vh 0;
  >div {
    padding-bottom: 0.5vh;
    >span {
    font-weight: 700;
    }
  }

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    width: 100%;
    >div {
      padding-bottom: 1vh;
    }  
  }
  @media screen and (max-width: 500px) and (orientation: portrait) {
    width: 100%;
  }
`;

const Choices = styled.div`
  display: flex;

  @media screen and (max-width: 500px) and (orientation: portrait) {
    flex-direction: column;
  }
`;

const Choice = styled.div`
  width: 50%;
  padding-right: 1vw;
  >div {padding: 0.5vh 0;}
  @media screen and (max-width: 500px) and (orientation: portrait) {
    width: 100%;
  }
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

const TextArea = styled.textarea`
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
  width: 50%;
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

  @media screen and (max-width: 500px) and (orientation: portrait) {
    font-size: 1.5vmax;
  }
`;

class Form4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      situation: {
        jobLoss: false,
        highBills: false,
        eviction: false,
        homeAbuse: false,
        incarceration: false,
        sick: false,
        familyChange: false,
        substance: false,
        expensiveHouse: false,
        other: ""
      },
      story: "",
      homelessness: {
        length: "",
        date: ""
      },
      healthConcern: {
        none: false,
        pregnancy: false,
        handicapped: false,
        other: ""
      },
      emergencyContact: {
        name: "",
        relation: "",
        phone: "",
        email: ""
      }
    };
  }

  componentDidMount() {
    var self = this;
    var userId = this.props.location.state.id;
    self.setState({userId: userId})
  }

  handleSituation = e => {
    let property = e.target;
    this.setState(prevState => ({...prevState, situation: {...prevState.situation, [property.name]: property.value}}))
  }

  handleStory = e => {
    this.setState({story: e.target.value})
  }

  handleHomelessness = e => {
    let property = e.target;
    this.setState(prevState => ({...prevState, homelessness: {...prevState.homelessness, [property.name]: property.value}}))
  }

  handleHealthConcern = e => {
    let property = e.target;
    this.setState(prevState => ({...prevState, healthConcern: {...prevState.healthConcern, [property.name]: property.value}}))
  }

  handleEmergencyContact = e => {
    let property = e.target;
    this.setState(prevState => ({...prevState, emergencyContact: {...prevState.emergencyContact, [property.name]: property.value}}))
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit button hit')
    updateUser(this.state);
    this.setState({completed: true})
  }

  render() {
    var form4;
    if(this.state.completed) {
        form4 = <Redirect to={{pathname: '/forms/end', state:{id: this.state.userId}}} />
    }
    else {
      form4 = 
      <div>
        <FormHeader />
        <Wrapper>
        <div><img src={progress4} alt="progress bar"/></div>
        <Title>Origin</Title>
        <form id="form-4" onSubmit={this.handleSubmit}>
          <Radio>
          <div><span>What are the main reasons for your current situation?</span></div>
          <div>*Select all that apply</div>
          <Choices>
            <Choice>
            <Item>
              <RadioButton type="checkbox" name="jobLoss" onChange={this.handleSituation} />
              <RadioButtonLabel />
              <div>Loss of Job</div>
            </Item>
            <Item>
              <RadioButton type="checkbox" name="highBills" onChange={this.handleSituation} />
              <RadioButtonLabel />
              <div>Bills Higher than Earning</div>
            </Item>
            <Item>
              <RadioButton type="checkbox" name="eviction" onChange={this.handleSituation} />
              <RadioButtonLabel />
              <div>Eviction</div>
            </Item>
            <Item>
              <RadioButton type="checkbox" name="homeAbuse" onChange={this.handleSituation} />
              <RadioButtonLabel />
              <div>Abuse at Home</div>
            </Item>
            <Item>
              <RadioButton type="checkbox" name="expensiveHouse" onChange={this.handleSituation} />
              <RadioButtonLabel />
              <div>Lack of Affordable Housing</div>
            </Item>
            </Choice>
            <Choice>
            <Item>
              <RadioButton type="checkbox" name="incarceration" onChange={this.handleSituation} />
              <RadioButtonLabel />
              <div>Incarceration</div>
            </Item>
            <Item>
              <RadioButton type="checkbox" name="sick" onChange={this.handleSituation} />
              <RadioButtonLabel />
              <div>Sick/Disabled/Mental Illness</div>
            </Item>
            <Item>
              <RadioButton type="checkbox" name="familyChange" onChange={this.handleSituation} />
              <RadioButtonLabel />
              <div>Change in Family Status</div>
            </Item>
            <Item>
              <RadioButton type="checkbox" name="substance" onChange={this.handleSituation} />
              <RadioButtonLabel />
              <div>Substance Abuse</div>
            </Item>
            </Choice>
            </Choices>
            <Text>
              <div><span>Other;</span> please list specific reasons</div>
              <TextArea rows="3" name="other" onChange={this.handleSituation} />
            </Text>
            </Radio>

            <Text>
              <Text>
              <div><span>Tell us your story in as much or as little detail as you feel comfortable&nbsp;sharing.</span></div>
              <TextArea rows="3" onChange={this.handleStory} />
              </Text>
            </Text>

            <Title>As It Stands</Title>

            <Radio>
            <div><span>How long have you been sleeping in your vehicle ?</span></div>
              <Choices>
                <Choice>
                <Item>
                  <RadioButton type="radio" value="Less than a month" checked={this.state.homelessness.length === "Less than a month"} onChange={this.handleHomelessness} name="length" />
                  <RadioButtonLabel />
                  <div>Less than a month</div>
                </Item>
                <Item>
                  <RadioButton type="radio" value="Between two and six months" checked={this.state.homelessness.length === "Between two and six months"} onChange={this.handleHomelessness} name="length" />
                  <RadioButtonLabel />
                  <div>Between two and six months</div>
                </Item>
                </Choice>
                <Choice>
                <Item>
                  <RadioButton type="radio" value="Six months to one year" checked={this.state.homelessness.length === "Six months to one year"} onChange={this.handleHomelessness} name="length" />
                  <RadioButtonLabel />
                  <div>Six months to one year</div>
                </Item>
                <Item>
                  <RadioButton type="radio" value="More than one year" checked={this.state.homelessness.length === "More than one year"} onChange={this.handleHomelessness} name="length" />
                  <RadioButtonLabel />
                  <div>More than one year</div>
                </Item>
                </Choice>
              </Choices>

            </Radio>

            <Text>
              <Text>
              <div><span>Approximate start date of homelessness</span></div>
              <TextInput type="date" onChange={this.handleHomelessness} name="date" />
              </Text>
            </Text>

            <Radio>
            <div><span>Do you have any major or immediate health concerns ?</span></div>
            <div>*Select all that apply</div>
            <Choices>
              <Choice>
              <Item>
                <RadioButton type="checkbox" onChange={this.handleHealthConcern} name="none" />
                <RadioButtonLabel />
                <div>None</div>
              </Item>
              <Item>
                <RadioButton type="checkbox" onChange={this.handleHealthConcern} name="pregnancy" />
                <RadioButtonLabel />
                <div>Pregnancy</div>
              </Item>
              </Choice>
              <Choice>
              <Item>
                <RadioButton type="checkbox" onChange={this.handleHealthConcern} name="handicapped" />
                <RadioButtonLabel />
                <div>Handicapped/Disabled</div>
              </Item>
              </Choice>
              </Choices>
              <Text>
                <div><span>Other;</span> please list specific reasons</div>
                <TextArea rows="3" name="other" onChange={this.handleHealthConcern} />
              </Text>
            </Radio>

            <Text>
            <div><span>Emergency Contact</span></div>
            <Choices>
              <Choice>
              <Text>
                <div>First & Last name:</div>
                <TextInput type="text" name="name" onChange={this.handleEmergencyContact} />
              </Text>
              <Text>
                <div>Relationship:</div>
                <TextInput type="text" name="relation" onChange={this.handleEmergencyContact} />
              </Text>
              </Choice>
              <Choice>
              <Text>
                <div>Phone number:</div>
                <TextInput type="text" name="phone" onChange={this.handleEmergencyContact} />
              </Text>
              <Text>
                <div>Email:</div>
                <TextInput type="text" name="email" onChange={this.handleEmergencyContact} />
              </Text>
              </Choice>
            </Choices>
            </Text>

            <Button><Submit type="submit" value="NEXT"/></Button>
        </form>
        </Wrapper>
      </div>
    }
    return (
      <div>
        {form4}
      </div>
    );
  }
}

export default Form4;
