import React, {Component} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import formIcon from "./formIcon.png"
// import "./FormIntro.css";

const Wrapper = styled.div`
// FOR DESKTOP

margin-top: 30px;
height: 100%;
background-color: #E3EDF3;
display: flex;
flex-direction: column;
align-items: center;
`;

const Text = styled.div`
width: 50%;
height: 60%;

>img {
  height: 50px;
}
`;

const Button = styled(Link)``;

class FormIntro extends Component {
  render() {
    return (
      <Wrapper>
        <Text>
          <div style={{fontWeight: "700"}}>Brief Intro</div>
          This is the beginning of the process to be part of a Safe Parking LA
          program.
          It should take about 10 minutes maximum in order to finish this
          initial form. Upon submission, we will look into your general
          situation to figure out how we can best serve your needs.
          <div style={{fontWeight: "700"}}>We will need more technical information if and when accepted- but let’s not worry about that right now. :)</div>
          <img src={formIcon} alt="form icon" />
        </Text>
        <Button to="/forms/1">
          Proceed
        </Button>
    </Wrapper>
  );
  }
};

export default FormIntro;
