import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {updateUser} from "../../services/api";
import styled from "styled-components";
import progress3 from "./progress3.png";
import FormHeader from "../FormHeader/FormHeader";
// import './Form3.css';

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
    width: 80%;
  }

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    width: 100%;
    >input {
      width: 100%;
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

class Form3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employerLocation: "",
      otherIncome: "",
      govIncome: {
        calworks: false,
        cashProgImmigrants: false,
        ebt: false,
        gr: false,
        medIncome: false,
        other: ""
      }
    };
  }

  componentDidMount() {
    var self = this;
    var userId = this.props.location.state.id;
    self.setState({userId: userId})
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleEmployment = e => {
    this.setState({employed: this.strToBool(e.target.value)});
  };

  handleGovAssistance = e => {
    this.setState({govAssistance: this.strToBool(e.target.value)});
  };

  handleGovIncome = e => {
    let property = e.target;
    this.setState(prevState => ({...prevState, govIncome:{...prevState.govIncome, [property.name]: property.value}}));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit button hit')
    updateUser(this.state);
    this.setState({completed: true})
  }

  strToBool = value => {
    if (value && typeof value === "string") {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
    }
    return value;
  };

  render() {
    var employed;
    if(this.state.employed) {
      employed = 
      <Text>
        <Text>
        <div><span>Where is your employer located ?</span></div>
        <Item><TextInput type="text" name="employerLocation" onChange={this.handleChange} /></Item>
        </Text>

        <Text>
        <div><span>Please list any other sources of income</span></div>
        <TextArea name="otherIncome" rows="3" onChange={this.handleChange} />
        </Text>
      </Text>
    }

    var gov;
    if(this.state.govAssistance) {
      gov = 
        <Radio>
        <div><span>Please select all that apply</span></div>
        <Choices>
          <Choice>
          <Item>
            <RadioButton type="checkbox" name="calworks" onChange={this.handleGovIncome} />
            <RadioButtonLabel />
            <div>CalWorks</div>
          </Item>
          <Item>
            <RadioButton type="checkbox" name="cashProgImmigrants" onChange={this.handleGovIncome} />
            <RadioButtonLabel />
            <div>Cash Assistance Program for Immigrants</div>
          </Item>
          <Item>
            <RadioButton type="checkbox" name="ebt" onChange={this.handleGovIncome} />
            <RadioButtonLabel />
            <div>Electronic Benefit Transfer (EBT)</div>
          </Item>
          </Choice>
          <Choice>
          <Item>
            <RadioButton type="checkbox" name="gr" onChange={this.handleGovIncome} />
            <RadioButtonLabel />
            <div>General Relief (GR)</div>
          </Item>
          <Item>
            <RadioButton type="checkbox" name="medIncome" onChange={this.handleGovIncome} />
            <RadioButtonLabel />
            <div>Medical Advocacy Program</div>
          </Item>
          </Choice>
          </Choices>
          <Text>
            <div><span>Please list any other sources of income</span></div>
            <TextArea rows="3" name="other" onChange={this.handleChange} />
          </Text>
        </Radio>
    }

    var form3;
    if(this.state.completed) {
        form3 = <Redirect to={{pathname: '/forms/4', state:{id: this.state.userId}}} />
    }
    else {
        form3 =
      <div>
        <FormHeader />
        <Wrapper>
        <div><img src={progress3} /></div>
        <Title>Interest Form</Title>
        <form onSubmit={this.handleSubmit}>

        <Radio>
        <div><span>Are you currently employed ?</span></div>
        <Item>
          <RadioButton type="radio" value="true" checked={this.state.employed === true} onChange={this.handleEmployment} />
          <RadioButtonLabel />
          <div>Yes</div>
        </Item>
        <Item>
          <RadioButton type="radio" value="false" checked={this.state.employed === false} onChange={this.handleEmployment} />
          <RadioButtonLabel />
          <div>No</div>
        </Item>
        </Radio>

        {employed}

        <Radio>
          <div><span>Are you currently recieving any form of government assistance ?</span></div>
          <Item>
            <RadioButton
              type="radio"
              value="true"
              checked={this.state.govAssistance === true}
              onChange={this.handleGovAssistance}
            />
            <RadioButtonLabel />
            <div>Yes</div>
          </Item>
          <Item>
            <RadioButton
              type="radio"
              value="false"
              checked={this.state.govAssistance === false}
              onChange={this.handleGovAssistance}
            />
            <RadioButtonLabel />
            <div>No</div>
          </Item>
        </Radio>

        {gov}

        <Button><Submit type="submit" value="NEXT" /></Button>
      </form>
      </Wrapper>
      </div>
    }
    return (
      <div>
        {form3}
      </div>
    )
  }
}

export default Form3;
