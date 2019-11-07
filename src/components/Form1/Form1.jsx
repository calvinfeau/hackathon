import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { createUser } from "../../services/api";
import progress1 from "./progress1.png"
// import "./Form1.css";
import FormHeader from "../FormHeader/FormHeader";

const Wrapper = styled.div`
  background-color: #E5EDF2;
  padding: 0 25vw;
  font-size: 1.2vmax;
  >div {
    text-align: center;
    padding: 3vh 0 0;
    >img {
      width: auto;
      height: 50px;
    }
  }
`;

const Title = styled.div`
  font-size: 1.5vmax;
  font-weight: 700;
`;

const Form = styled.form`
  padding: 6vh 0;
  display: grid;
  grid-template-columns: 20vw 20vw;
  grid-template-rows: auto;
  grid-template-areas:
  "applicant driveable"
  "birth status"
  "phone license"
  "email next";
  justify-content: space-between;
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

const Applicant = styled(Text)`
  grid-area: applicant;
`;

const Birth = styled(Text)`
  grid-area: birth;
`;

const Phone = styled(Text)`
  grid-area: phone;
`;

const Email = styled(Text)`
  grid-area: email;
`;

const License = styled(Text)`
  grid-area: license;
`;

const Driveable = styled(Radio)`
  grid-area: driveable;
  display: flex;
  flex-direction: column;
`;

const Status = styled(Radio)`
  grid-area: status;
`;

const Choices = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Choice = styled.div`
  >div {padding: 0.5vh 0;}
`;

const Item = styled.div`
  display: flex;
`;

const Button = styled(Radio)`
  grid-area: next;
  align-self: end;
`;

const TextInput = styled.input`
  padding: 5px;
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

const Submit = styled.input`
  width: 80%;
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

class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicant: "",
      birth: "",
      phone: "",
      email: "",
      driverId: "",
      driverStatus: "",
      drivable: true,
      id: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDriverStatus = e => {
    this.setState({ driverStatus: e.target.value });
  };

  handleDrivable = e => {
    this.setState({ drivable: this.strToBool(e.target.value) });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit button hit");
    createUser(this.state).then(item => {
      console.log("item._id: ", item._id);

      this.setState({ id: item._id });
      console.log("id added- to state: ", this.state.id);
    });
  };

  strToBool = value => {
    if (value && typeof value === "string") {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
    }
    return value;
  };

  render() {
    var driverIdInput;
    if (
      this.state.driverStatus &&
      this.state.driverStatus !== "Lost or Stolen"
    ) {
      driverIdInput = (
        <License>
          <div><span>Driver's License #</span></div>
            <TextInput
              type="text"
              required
              name="driverId"
              onChange={this.handleChange}
            />
        </License>
      );
    }

    var form1;
    if (this.state.id) {
      form1 = (
        <Redirect to={{ pathname: "/forms/2", state: { id: this.state.id } }} />
      );
    } else {
      form1 = (
        <div>
          <FormHeader />
          <Wrapper>
            <div><img src={progress1} /></div>
            <Title>Personal Information</Title>
            <Form onSubmit={this.handleSubmit}>
              <Applicant>
                <div><span>Applicant</span></div>
                <div>Driver's first and last name:</div>
                <TextInput
                  type="text"
                  required
                  name="applicant"
                  onChange={this.handleChange}
                />
              </Applicant>
              <Birth>
                <div><span>Date of Birth</span></div>
                <TextInput
                  type="date"
                  required
                  name="birth"
                  onChange={this.handleChange}
                />
              </Birth>
              <Phone>
                <div><span>Phone Number</span>, if applicable</div>
                <TextInput
                  type="text"
                  required
                  name="phone"
                  onChange={this.handleChange}
                />
              </Phone>
              <Email>
                <div><span>Email Address</span>, if applicable</div>
                <TextInput
                  type="text"
                  required
                  name="email"
                  onChange={this.handleChange}
                />
              </Email>
              <Status>
                <div><span>Drivers License Status</span></div>
                <Choices>
                <Choice>
                  <Item>
                  <RadioButton
                    type="radio"
                    value="Valid"
                    checked={this.state.driverStatus === "Valid"}
                    onChange={this.handleDriverStatus}
                    />
                    <RadioButtonLabel />
                    <div>Valid</div>
                  </Item>
                  <Item>
                    <RadioButton
                      type="radio"
                      value="Expired"
                      checked={this.state.driverStatus === "Expired"}
                      onChange={this.handleDriverStatus}
                    />
                    <RadioButtonLabel />
                    <div>Expired</div>
                  </Item>
                </Choice>
                <Choice>
                  <Item>
                    <RadioButton
                      type="radio"
                      value="Suspended"
                      checked={this.state.driverStatus === "Suspended"}
                      onChange={this.handleDriverStatus}
                      />
                    <RadioButtonLabel />
                    <div>Suspended</div>
                  </Item>
                  <Item>
                    <RadioButton
                      type="radio"
                      value="Lost or Stolen"
                      checked={this.state.driverStatus === "Lost or Stolen"}
                      onChange={this.handleDriverStatus}
                      />
                    <RadioButtonLabel />
                    <div>Lost or Stolen</div>
                  </Item>
                </Choice>
                </Choices>
              </Status>
              {driverIdInput}
              <Driveable>
              <div><span>Is your vehicle driveable ?</span></div>
              <Item>
                <RadioButton
                  type="radio"
                  value="true"
                  checked={this.state.drivable === true}
                  onChange={this.handleDrivable}
                />
                <RadioButtonLabel />
                <div>Yes</div>
              </Item>
              <Item>
                <RadioButton
                  type="radio"
                  value="false"
                  checked={this.state.drivable === false}
                  onChange={this.handleDrivable}
                />
                <RadioButtonLabel />
                <div>No</div>
              </Item>
              </Driveable>
              <Button><Submit type="submit" value="NEXT" /></Button>
            </Form>
          </Wrapper>
        </div>
      );
    }
    return <div>{form1}</div>;
  }
}

export default Form1;