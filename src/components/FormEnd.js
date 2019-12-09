import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FormContext } from '../context/FormContext';
import parkingIcon from "../assets/parkingIcon.png";
import progress5 from "../assets/progress5.png";

const FormEnd = () => {
  const { onPrevious } = useContext(FormContext);
    return (
      <div>
        <Wrapper>
        <div><img src={progress5} alt="progress bar"/></div>
        <Title>Thank You!</Title>

        <Text>
          <div id="text">
            We are so happy that you’ve successfully taken the first steps in seeking assistance with Safe Parking LA. We are already working on assessing your situation.
            <br />
            Please allow for us to get back to you in approximately 24 hours.
          </div>
          <div id="last" style={{fontWeight: "700"}}>Meanwhile, please refer to the maps of <span id="green-text">green street parking zones</span> for alternative overnight parking.</div>
          <div id="icon"><img src={parkingIcon} alt="parking icon" /></div>
        </Text>
          <p id="end-italic">
            *Always read signs and look out for “Real-time” hours
          </p>
          <Button href="https://www.safeparkingla.org/green-streets" target="_blank" rel="noopener noreferrer">LA GREEN STREETS </Button>
          <Button href="https://www.safeparkingla.org/" target="_blank" rel="noopener noreferrer">RESOURCES</Button>
          <Back onClick={onPrevious}>BACK</Back>
          <Link to="/">MAIN PAGE</Link> 
        </Wrapper>
      </div>
    );
}

export default FormEnd;

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

const Button = styled.a`
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

const Back = styled.div`
  width: 30%;
  font-size: 1.2vmax;
  padding: 0.6vmax;
  color: #12679b;
  background-color: transparent;
  text-align: center;
  font-weight: 700;
  border-radius: 30px;
  border: 1px #12679b solid;
  letter-spacing: 1.5px;

  :hover{
    color: white; 
    background-color: #12679b; 
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