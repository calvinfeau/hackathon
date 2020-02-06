import React from 'react';
import {Link} from "react-router-dom";
import styled, {css} from "styled-components";
import image1 from "../../assets/image1.png";
import mobile1 from "../../assets/mobile-image1.png";

const Wrapper1 = styled.div`
height: 90vh;
width: 100vw;
background-image: url(${image1});
background-size: cover;

@media screen and (max-width: 1100px) {
  background-image: none;
}
`;

const Div1 = styled.div`
width: 60%;
height: 100%;
padding: 10%;
display: flex;
flex-direction: column;
justify-content: space-between;
@media screen and (min-width: 2100px) {
  padding: 7%;
  width: 50%;
}

@media screen and (max-width: 1100px) {
  width: 100%;
  height: 100%;
  padding: 0;
  justify-content: space-around;
  align-items: center;
}
`;

const Title1 = styled.div`
color: #12679b;
font-weight: 700;
font-size: 3.5vmax;
line-height: 1.1;
mix-blend-mode: normal;
letter-spacing: 1.5px;

@media screen and (max-width: 1100px) {
  text-align: center;
  line-height: 1.2;
}

`;

const ImgMobile = styled.div`
@media screen and (max-width: 1100px) {
  width: 100vw;
  height: 30vh;
  background-image: url(${mobile1});
  background-size: cover;
}
`;

const Text1 = styled.div`
letter-spacing: 1.5px;
font-size: 1.3vmax;
line-height: 1.7;

@media screen and (max-width: 1100px) {
  padding: 0 10%;
  text-align: center;
  font-size: 1.8vmax;
  line-height: 1.7;
}
@media screen and (max-width: 500px) {
  font-size: 1.5vmax;
}
`;

const Button1 = styled(Link)`
font-size: 1.2vmax;
width: 65%;
padding: 0.75vmax;
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

@media screen and (max-width: 1100px) {
  width: 60%;
  padding: 2%;
  font-size: 1.8vmax;
}
@media screen and (max-width: 500px) {
  width: 85%;
  padding: 5%;
  font-size: 1.5vmax;
}
`;

const Section1 = () => {
    return ( 
        <Wrapper1>
        <Div1>
          <Title1>Nobody Plans To&nbsp;Be&nbsp;Homeless</Title1>
          <ImgMobile />
          <Text1>Safe Parking programs are a safe and legal homelessness intervention to stabilize and connect to resources for people who are living in&nbsp;their&nbsp;vehicles.<br />All program locations include access to  a restroom facility and the security of&nbsp;a&nbsp;guard.</Text1>
          <Button1 to="/form">FIND YOUR SPOT</Button1>
          <Button1 to="/profile">RETRIEVE YOUR APPLICATION</Button1>
        </Div1>
      </Wrapper1>
     );
}
 
export default Section1;