import React, {Component} from 'react';
import styled, {css} from "styled-components";


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

const Text4 = styled.div`
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

padding: 3vh 0;

@media screen and (max-width: 1100px) {
  font-size: 1.8vmax;
  padding: 5% 15%;
}
@media screen and (max-width: 1100px) and (orientation: landscape){
  padding: 2% 15%;
}
`;

const Button2 = styled.div`

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

color: #12679b;
border-bottom: #12679b solid 2px;
margin-bottom: 2.5vh;
padding: 0;
:hover {cursor: pointer;}
@media screen and (max-width: 1100px) {
  padding: 0;
}
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
 
export default Section4;