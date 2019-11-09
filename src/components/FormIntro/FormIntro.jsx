import React, {Component} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import formIcon from "./formIcon.png"

const Wrapper = styled.div`
height: calc(100vh - 10vh - 20vh - 8vh);
background-color: #E3EDF3;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
font-size: 1.2vmax;

#title {
  font-size: 1.5vmax;
  text-align: center;
}

@media screen and (max-width: 1100px) and (orientation: portrait) {
  font-size: 1.5vmax;
  #title {
    font-size: 1.8vmax;
  }
}
`;

const Text = styled.div`
width: 50%;

@media screen and (min-width: 1101px) {
  text-align: left;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
  "text text last last"
  "text text icon icon";
  grid-gap: 1.5vmax 4vmax;
  #text {
    grid-area: text;
  }
  #last {
    grid-area: last;
  }
  #icon {
    grid-area: icon;
    text-align: center;
    >img {
      height: 70px;
    }
  }
}

@media screen and (max-width: 1100px) and (orientation: portrait) {
  text-align: center;
  #last {
    padding: 2vmax 0;
  }
  #icon {
    text-align: center;
    >img {
      height: 50px;
    }
  }
}
@media screen and (max-width: 500px) and (orientation: portrait) {
  width: 60%;
}
`;

const Button = styled(Link)`
width: 25%;
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

class FormIntro extends Component {
  render() {
    return (
      <Wrapper>
        <div id="title" style={{fontWeight: "700"}}>Brief Intro</div>
        <Text>
          <div id="text">This is the beginning of the process to be part of a Safe Parking LA program. It should take about 10 minutes maximum in order to finish this initial form. Upon submission, we will look into your general situation to figure out how we can best serve your needs.</div>
          <div id="last" style={{fontWeight: "700"}}>We will need more technical information if and when accepted- but let’s not worry about that right now. :)</div>
          <div id="icon"><img src={formIcon} alt="form icon" /></div>
        </Text>
        <Button to={{ pathname: "/forms/1", state:{id: ""}}}>PROCEED</Button>
    </Wrapper>
  );
  }
};

export default FormIntro;
