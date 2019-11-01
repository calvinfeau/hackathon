import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled, {css} from "styled-components"
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";

const Wrapper1 = styled.div`
height: 90vh;
width: 100vw;
background-image: url(${props => props.image});
background-size: cover;
`;

const Div1 = styled.div`
width: 50%;
height: 100%;
padding: 10%;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Title1 = styled.div`
color: #12679b;
font-weight: 700;
font-size: 4em;
line-height: 1.1;
mix-blend-mode: normal;
letter-spacing: 1.5px;
`;

const Text1 = styled.div`
letter-spacing: 1.5px;
font-size: 1.2em;
`;

const Button1 = styled(Link)`
font-size: 1em;
width: 50%;
padding: 15px;
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
  text-decoration: none;}
`;


class Section1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Wrapper1 image={this.props.image}>
        <Div1>
          <Title1>Nobody Plans To&nbsp;Be&nbsp;Homeless</Title1>
          <Text1>Safe Parking programs are a safe and legal homelessness intervention to stabilize and connect to resources for people who are living in their vehicles.<br />All program locations include access to  a restroom facility and the security of a guard.</Text1>
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
font-size: 1.5em;
`;

const Title2 = styled.div`
font-weight: 700;
height: 30%;
display: flex;
align-items: flex-end;
justify-content: center;
font-size: 1.5em;
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
font-size: 1em;
`;

class Section2 extends Component {
  render() {
    return (
      <Wrapper2>
          <Title2>The Process</Title2>
          <Items>
              <Item>STEP 1 <i className="material-icons" style={{fontSize: "60px"}}>assignment</i> Fill out safe parking form</Item>
              <Item>STEP 2 <i className="material-icons" style={{fontSize: "60px"}}>headset_mic</i> We will contact you in 24 hrs</Item>
              <Item>STEP 3 <i className="material-icons" style={{fontSize: "60px"}}>local_parking</i> Receive a parking permit</Item>
          </Items>
      </Wrapper2>
    )
  }
}

const Wrapper3 = styled.div`
width: 100vw;
height: 100vh;
padding: 8vw;
display: flex;
justify-content: space-between;
`;

const Card = styled.div`
width: 30%;
height: 110%
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
`;

const CardText = styled.div`
padding: 7% 10% 7%;
height: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
line-height: 1.5;
font-size: 1em;
letter-spacing: 1.5px;
>span {
  font-weight: 700;
  font-size: 18px;
}
`;

const CardButton = styled.a`
width: 60%;
padding: 10px;
background-color: transparent;
color: #12679b;
font-size: 0.8em;
text-align: center;
font-weight: 700;
border: 1px solid #12679b;
border-radius: 30px;
:hover{
  color: white; 
  background-color: #12679b;
  text-decoration: none;
}
`;

class Section3 extends Component {
  render() {
    return (
      <Wrapper3>
          <Card card={1}>
            <img src={image2}/>
            <CardText>
              <span>WHO WE SERVE</span>
              In Los Angeles County, there are over 15,700 people living in their vehicles each night. These vehicle dwellers represent over 25% of the population of people experiencing homelessness&nbsp;in&nbsp;LA&nbsp;County.
            <CardButton href="https:www.safeparkingla.org/who-we-serve" target="_blank" rel="noopener noreferrer">READ MORE STORIES</CardButton>
            </CardText>
          </Card>

          <Card card={2}>
            <img src={image3}/>
            <CardText>
            <span>CAR BUT NO HOME?</span>
            Safe Parking LA is an example of a relatively new effort on the West Coast to assist a specific group of individuals before they fall further to life on the street. Many of them may be working or have some source of income and are homeless for the&nbsp;first&nbsp;time. 
            <CardButton href="https:www.safeparkingla.org/news" target="_blank" rel="noopener noreferrer">READ MORE NEWS</CardButton>
            </CardText>
          </Card>

          <Card card={3}>
            <img src={image4}/>
            <CardText>
            <span>FOR VETERANS</span>
            SafeParkingLA provides a safe and legal overnight parking place for veterans and their families who are currently living in their vehicles. We are in a secure lot with a portable bathroom&nbsp;and&nbsp;wash&nbsp;station.
            <CardButton href="https:www.safeparkingla.org/resources-for-veterans" target="_blank" rel="noopener noreferrer">MORE INFO</CardButton>
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
`;

const Title4 = styled.div`
font-weight: 700;
display: flex;
align-items: flex-end;
justify-content: center;
font-size: 1.5em;`;

const Text4 = styled(Text1)`
padding: 3vh 0;
`;

const Button2 = styled(Text1)`
color: #12679b;
border-bottom: #12679b solid 2px;
margin-bottom: 2.5vh;
:hover {cursor: pointer;}
`;

const Note = styled.div`
display: none;
${props => props.clicked && css`
display: block;
`}
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
        <Text4>Help contribute to our cause and join in a meaningful partnership with Safe Parking LA.</Text4>
        <Button2 onClick={this.handleClick} clicked={this.state.clicked}>Find out details</Button2>
        <Note clicked={this.state.clicked}>Coming soon!</Note>
      </Wrapper4>
    )
  }
}

class HomePage extends Component {
    render() {
        return (
            <>
            <Section1 image={image1}/>
            <Section2 />
            <Section3 />
            <Section4 />
            </>
        )
    }
}

export default HomePage;