import React, { Component } from "react";
import styled from "styled-components";

class FormHeader extends Component {
  render() {
    return (
      <Wrapper>
        <Title>This form is the first step in the application process for&nbsp;a&nbsp;Safe&nbsp;Parking&nbsp;LA&nbsp;program.</Title>
        <div>Please fill out <span style={{color: "red"}}>ALL</span> of the following information so&nbsp;we&nbsp;can&nbsp;best&nbsp;assist&nbsp;your&nbsp;specific&nbsp;needs.</div>
      </Wrapper>
    );
  }
};

export default FormHeader;

const Wrapper = styled.div`
width: 100%;
margin-bottom: 3vh;
text-align: center;
font-size: 1.2vmax;

@media screen and (max-width: 1100px) and (orientation: portrait) {
  padding: 0 15vw;
}
`;

const Title = styled.div`
font-weight: 700;
margin-bottom: 1vh;
`;