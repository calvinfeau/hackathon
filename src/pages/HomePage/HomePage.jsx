import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled, {css} from "styled-components"
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";
import mobile1 from "./mobile-image1.png";

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

class Section1 extends Component {
  render() {
    return (
      <Wrapper1>
        <Div1>
          <Title1>Nobody Plans To&nbsp;Be&nbsp;Homeless</Title1>
          <ImgMobile />
          <Text1>Safe Parking programs are a safe and legal homelessness intervention to stabilize and connect to resources for people who are living in&nbsp;their&nbsp;vehicles.<br />All program locations include access to  a restroom facility and the security of&nbsp;a&nbsp;guard.</Text1>
          <Button1 to="/forms/intro">FIND YOUR SPOT</Button1>
        </Div1>
      </Wrapper1>
    )
  }
}

const Wrapper2 = styled.div`
color: black;
height: 40vh;
width: 100vw;
background-color: #D7E3EC;
display: flex;
flex-direction: column;
font-size: 1.2vmax;

@media screen and (max-width: 1100px) {
  height: 25vh;
  text-align: center;
}
`;

const Title2 = styled.div`
font-weight: 700;
height: 30%;
display: flex;
align-items: flex-end;
justify-content: center;
font-size: 1.5vmax;
letter-spacing: 1.5px;

@media screen and (max-width: 1100px) {
  font-size: 1.7vmax;
}
`;

const Items = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 70%;
`;

const Item = styled(Items)`
flex-direction: column;
justify-content: space-between;
`;

class Section2 extends Component {
  render() {
    return (
      <Wrapper2>
          <Title2>The Process</Title2>
          <Items>
              <Item>STEP 1 <i className="material-icons" style={{fontSize: "3vmax"}}>assignment</i> Fill out safe parking&nbsp;form</Item>
              <Item>STEP 2 <i className="material-icons" style={{fontSize: "3vmax"}}>headset_mic</i> We will contact you&nbsp;in&nbsp;24 hrs</Item>
              <Item>STEP 3 <i className="material-icons" style={{fontSize: "3vmax"}}>local_parking</i> Receive a parking&nbsp;permit</Item>
          </Items>
      </Wrapper2>
    )
  }
}

const Wrapper3 = styled.div`
width: 100vw;
// height: 90vh;
padding: 5vw;
display: flex;
justify-content: space-between;

@media screen and (min-width: 2100px) {
  justify-content: space-around;
  height: 110vh;
}
@media screen and (max-width: 1100px) {
  flex-direction: column;
  padding: 0;
  justify-content: start;
  height: 100%;
}
`;

const Card = styled.div`
width: 30%;
// height: 100%;
display: flex;
flex-direction: column;
align-items: center;
>img {
  height: auto;
  width: 100%;
}
${props => props.card === 1 && css`background-color: #FFEEDA;`}
${props => props.card === 2 && css`background-color: #DBEDDD;`}
${props => props.card === 3 && css`background-color: #FFF7E2;`}

@media screen and (min-width: 2100px) {
  width: 25%;
}
@media screen and (max-width: 1100px) {
  width: 100vw;
  background-color: white;
  height: auto;
  margin-bottom: 10%;
  >img {
    height: auto;
  }
}
`;

const CardText = styled.div`
height: 55%;
padding: 10%;
display: flex;
flex-direction: column;
align-items: center;
line-height: 1.5;
font-size: 1vmax;
letter-spacing: 1.5px;
>span {
  font-weight: 700;
  font-size: 1.5vmax;
  padding-bottom: 10%;
}

@media screen and (min-width: 2100px) {
  padding-bottom: 5%;
}
@media screen and (max-width: 1100px) {
  padding: 5% 10%;
  justify-content: start;
  font-size: 1.8vmax;
  text-align: center;
  line-height: 2;
  >span {
    font-size: 2.5vmax;
    padding-bottom: 5%;
}
@media screen and (max-width: 500px) {
  padding: 5%;
  font-size: 1.5vmax;
}
`;

const CardButton = styled.a`
width: 75%;
padding: 0.5vmax;
margin-top: auto;
background-color: transparent;
color: #12679b;
font-size: 0.8vmax;
text-align: center;
font-weight: 700;
border: 1px solid #12679b;
border-radius: 30px;
:hover{
  color: white; 
  background-color: #12679b;
  text-decoration: none;
}

@media screen and (max-width: 1100px) {
  padding: 2%;
  font-size: 1.8vmax;
  width: 85%;
  margin-top: 10%;
  ${props => props.card === 1 && css`--current-color: #E59638;`}
  ${props => props.card === 2 && css`--current-color: #297F32;`}
  ${props => props.card === 3 && css`--current-color: #E2B731;`}
  color: var(--current-color);
  border-color: var(--current-color);
  :hover{
    color: white; 
    background-color: var(--current-color);
    text-decoration: none;
  }
}
@media screen and (max-width: 500px) {
  font-size: 1.5vmax;
  width: 85%;
  margin-top: 10%;
  padding: 5%;
  ${props => props.card === 1 && css`--current-color: #E59638;`}
  ${props => props.card === 2 && css`--current-color: #297F32;`}
  ${props => props.card === 3 && css`--current-color: #E2B731;`}
  color: var(--current-color);
  border-color: var(--current-color);
  :hover{
    color: white; 
    background-color: var(--current-color);
    text-decoration: none;
  }
}
`;

class Section3 extends Component {
  render() {
    return (
      <Wrapper3>
          <Card card={1}>
            <img src={image2} alt="couple checking hanfd with someone"/>
            <CardText>
              <span>WHO WE SERVE</span>
              In Los Angeles County, there are over 15,700 people living in their vehicles each night. These vehicle dwellers represent over 25% of the population of people experiencing homelessness&nbsp;in&nbsp;LA&nbsp;County.
            <CardButton card={1} href="https:www.safeparkingla.org/who-we-serve" target="_blank" rel="noopener noreferrer">READ MORE STORIES</CardButton>
            </CardText>
          </Card>

          <Card card={2}>
            <img src={image3} alt="man holding a dog"/>
            <CardText>
            <span>CAR BUT NO HOME?</span>
            Safe Parking LA is an example of a relatively new effort on the West Coast to assist a specific group of individuals before they fall further to life on the street. Many of them may be working or have some source of income and are homeless for the&nbsp;first&nbsp;time. 
            <CardButton card={2} href="https:www.safeparkingla.org/news" target="_blank" rel="noopener noreferrer">READ MORE NEWS</CardButton>
            </CardText>
          </Card>

          <Card card={3}>
            <img src={image4} alt="veterans"/>
            <CardText>
            <span>FOR VETERANS</span>
            SafeParkingLA provides a safe and legal overnight parking place for veterans and their families who are currently living in their vehicles. We are in a secure lot with a portable bathroom&nbsp;and&nbsp;wash&nbsp;station.
            <CardButton card={3} href="https:www.safeparkingla.org/resources-for-veterans" target="_blank" rel="noopener noreferrer">MORE INFO</CardButton>
            </CardText>
          </Card>
      </Wrapper3>
    )
  }
}

const Wrapper4 = styled.div`
height: 25vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
margin: 5vh 0;
>span {font-size: 1.3vmax;}
@media screen and (max-width: 1100px) {
  >span {font-size: 1.8vmax;}
}
`;

const Title4 = styled.div`
font-weight: 700;
display: flex;
align-items: flex-end;
justify-content: center;
font-size: 1.5vmax;

@media screen and (max-width: 1100px) {
  font-size: 2.5vmax;
}
`;

const Text4 = styled(Text1)`
padding: 3vh 0;

@media screen and (max-width: 1100px) {
  font-size: 1.8vmax;
  padding: 5% 15%;
}
@media screen and (max-width: 1100px) and (orientation: landscape){
  padding: 2% 15%;
}
`;

const Button2 = styled(Text1)`
color: #12679b;
border-bottom: #12679b solid 2px;
margin-bottom: 2.5vh;
padding: 0;
:hover {cursor: pointer;}
@media screen and (max-width: 1100px) {
  padding: 0;
}
`;


const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;

class Section4 extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(state => ({clicked: !state.clicked}));
  }

  render() {
    return (
      <Wrapper4>
        <Title4>HAVE AN OPEN LOT ?</Title4>
        <Text4>Help contribute to our cause and join in a meaningful partnership with Safe&nbsp;Parking&nbsp;LA.</Text4>
        <Button2 onClick={this.handleClick} clicked={`${this.state.clicked}`}>Find out details</Button2>
        {this.state.clicked ? 
        <span clicked={`${this.state.clicked}`}>Coming soon!</span> : <span></span>
        }
      </Wrapper4>
    )
  }
}

class HomePage extends Component {
    render() {
        return (
            <Wrapper>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            </Wrapper>
        )
    }
}

export default HomePage;