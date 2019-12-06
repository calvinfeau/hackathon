import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heart from "../assets/heart.png";
import logo from "../assets/logo.png";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({clicked: !this.state.clicked});
  }
  render() {
    return (
      <Wrapper>
        <Div1><a href="https://safeparkingla.networkforgood.com/projects/68953-safe-parking-la" target="_blank" rel="noopener noreferrer"><Img src={heart} alt="heart image" /></a></Div1>
        <Link to="/"><Img src={logo} alt="safeparking logo" /></Link>
        <Div2>
          <a href="https://www.safeparkingla.org/green-streets" target="_blank" rel="noopener noreferrer">FIND&nbsp;SPOT</a>
          <a href="https://www.safeparkingla.org/who-we-serve" target="_blank" rel="noopener noreferrer">STORIES</a>
          <a href="https://www.safeparkingla.org/about" target="_blank" rel="noopener noreferrer">ABOUT</a>
          <a href="https://safeparkingla.networkforgood.com/projects/68953-safe-parking-la" target="_blank" rel="noopener noreferrer"><Img src={heart} alt="heart image" /></a>
        </Div2>
        <span>
          <i onClick={() => {this.toggleMenu()}} clicked={`${this.state.clicked}`} className="material-icons">dehaze</i>
          {this.state.clicked &&
          <Div3> 
            <a onClick={() => {this.toggleMenu()}} href="https://www.safeparkingla.org/green-streets" target="_blank" rel="noopener noreferrer">FIND&nbsp;SPOT</a>
            <a onClick={() => {this.toggleMenu()}} href="https://www.safeparkingla.org/who-we-serve" target="_blank" rel="noopener noreferrer">STORIES</a>
            <a onClick={() => {this.toggleMenu()}} href="https://www.safeparkingla.org/about" target="_blank" rel="noopener noreferrer">ABOUT</a>
            <span onClick={() => {this.toggleMenu()}}>X</span>
          </Div3>
          }
        </span>
      </Wrapper>
    )
  }
}

export default Nav;

const Wrapper = styled.div`
top: 0;
position: sticky;
width: 100%;
padding: 0 30px;
height: 10vh;
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
z-index: 10;
letter-spacing: 1.5px;
>span {
  .material-icons {font-size: 36px;}
}
@media screen and (min-width: 1101px) {
  padding: 0 40px;
  >span {
    display: none;
  }
}
  @media screen and (max-width: 500px) {
    padding: 20px;
    >span {
      .material-icons {font-size: 25px;}
    }
}
`;

const Img = styled.img`
@media screen and (max-width: 1100px) {
  height: 36px;
}
@media screen and (max-width: 500px) {
  height: 25px;
}
height: 50px;
`;

const Div1 = styled.div`
@media screen and (max-width: 1100px) {
  display: block;
}
display: none;
`;

const Div2 = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
width: 30%;
color: black;
>a {
  color: black;
  font-weight: 700;
  font-size: 1vmax;
  font-family: 'Montserrat', sans-serif;
}
>a:hover {
  text-decoration: none;
}
@media screen and (max-width: 1100px) {
  display: none;
}
`;

const Div3 = styled(Div2)`
@media screen and (max-width: 1100px) {
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 20;
  position: absolute;
  background: black;
  color: white;
  height: 10vh;
  width: 100vw;
  top: 0;
  left: 0;
  >a {
    color: white;
    font-size: 1.5vmax;
    padding: 0;
  }
  >span {font-weight: 700;
    font-size: 1.5vmax;
  }
}
  // animation: 10s menuOpen;
  // Automatic closing - not working great

  // @keyframes menuOpen {
  //   0%, 1% {
  //     visibility: visible;
  //     width: 0vw;
  //     left: 100vw;
  //   }
  //   10%, 90% {
  //     width: 100vw;
  //     left: 0;
  //   }
  //   99% {
  //     width: 0vw;
  //     left: 100vw;
  //   }
  //   100% {
  //     visibility: hidden;
  //   }
  // }
`;